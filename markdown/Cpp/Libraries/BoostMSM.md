# Boost::MSM library

## Overview of an msm structure

```plantuml
state FSM {
    state "Event dispatcher" as EQ <<entryPoint>>

    state State_A {
        State_A : --> on_entry()
        State_A : on_exit() -->
    }
    state State_B {
        State_B : --> on_entry()
        State_B : on_exit() -->
    }
    state State_C {
        State_C : --> on_entry()
        State_C : on_exit() -->
    }
    state State_D {
        State_D : --> on_entry()
        State_D : on_exit() -->
    }
    state State_E {
        State_E : --> on_entry()
        State_E : on_exit() -->
    }

State_A -left-> State_B : Event1\nGuard1\nAction1
State_A -down-> State_D : Event1\nNone\nAction2
State_B -down-> State_C : Event2\nNone\nNone
State_B -down-> State_E : Event3\nNone\nAction3
State_C -down-> State_E : Event3\nGuard2\nNone
State_D -down-> State_E : Event2\nNone\nAction4

note bottom of EQ
Dispatching events to 
currently active state
end note
}

[*] -left-> State_A
State_E -down-> [*]

state Event1
state Event2
state Event3

Event1 -left-> EQ
Event2 -down-> EQ
Event3 -down-> EQ
```

where:

- ***action*** - subroutine executed when an event occurred and the corresponding guard evaluated to `true`. Can be `None`;
- ***on_entry()***, ***on_exit()*** - subroutines executed when entering and leaving the state respectively;
- ***State_A*** - ***State_E*** - states of the system
- ***Guard*** - subroutine with a boolean result deciding whether a transition can be made;
- ***None*** - no guard, making the transition **default** and always available. The default transition executes only where no transition that has a guard is possible;
- ***Event*** - event triggering guard check and transition between states;

## States

- `boost::msm` allows for using other FSMs as states, so they can be used to split the translation units (hence improving the compilation) or to create an orthogonal region state;
- Splitting a big FSM into several smaller state-FSMs allows for increased readability and easier static analysis;
- States are made as structures that have to inherit from `boost::msm::front::state<>` (either directly and indirectly) and implement following methods:

```cpp
template<class Event, class FSM>
void on_entry(const Event&, FSM&)

template<class Event, class FSM>
void on_exit(const Event&, FSM&)
```

- Final state needs to inherit after `boost::msm::front::terminate_state<>` and implements only the `on_entry()` method;

## Guards

- Guard is a functor (structure with `operator()` implemented) that does not inherit after anything, but instead implements this particular method:

```cpp
template<class Event, class FSM, class Source, class Target>
bool operator()(const Event&, FSM&, Source&, Target&)
```

- Good practice is for `operator()` of a guard struct to not perform any action whatsoever, and just check conditions, so that there's no side effect between events;
- Guard can be implement as a sub-structure within the state structure scope;
- Guards for all transitions associated with given state must be **mutually exclusive**;

## Actions

- Action is a functor that does not inherit after anything, but instead implements this particular method:

```cpp
// pay attention to FSM and Event order being switched
template<class FSM, class Event, class Source, class Target>
void operator()(const Event&, FSM&, Source&, Target&)
```
- Action can be implemented as a sub-structure within the state structure scope;

## Transition subroutine call order

```plantuml
start
:An event is received;
if (Is there a transition from oldState associated with the event?) then(no)
    stop
else (yes)
:Event::operator();
split
    if(Guard1::operator()?) then (false)
        stop
    else (true)
    end if
split again
    if(Guard2::operator()?) then (false)
        stop
    else (true)
    end if
split again
    :...;
split again
    if(Is transition with none guard present?) then (false)
        stop
    else (true)
    end if
end split
:oldState::on_exit();
:action::operator() of transition associated with guard that returned `true`;
:newState::on_entry();
stop
end if
```

## In-code notation for the MSM

```cpp
boost::mpl::vector<
    row<sourceState, event, targetState, action, guard>,
    row<sourceState, event, targetState, action, None>,
    // ...
    >;
```

## Orthogonal regions

### Information

- `boost::msm` supports **orthogonal regions** in terms of the entire FSM;
- Orthogonal regions allow the FSM to have two parallel states simultaneously, that share event reception;
- Orthogonal regions can be used for processing asynchronous / parallel procedures, and for error handling (since it can be made in a way that captures any `throw` from the states and subroutines of the primary region);

### Example

```plantuml
[*] -down-> FSM

state FSM {
    [*] -left-> State_A
    State_A -left-> State_B : Event1\nGuard1\nAction1
    State_A -down-> State_D : Event1\nNone\nAction2
    State_B -down-> State_C : Event2\nNone\nNone
    State_B -down-> State_E : Event3\nNone\nAction3
    State_C -down-> State_E : Event3\nGuard2\nNone
    State_D -down-> State_E : Event2\nNone\nAction4
    State_E --> [*]
    ||
    [*] -down-> ErrorHandler
    ErrorHandler -down-> ShutdownState : ThrowEvent\nNone\nNone
    ShutdownState --> [*]
}

State_A : --> on_entry()
State_A : on_exit() -->
State_B : --> on_entry()
State_B : on_exit() -->
State_C : --> on_entry()
State_C : on_exit() -->
State_D : --> on_entry()
State_D : on_exit() -->
State_E : --> on_entry()

ErrorHandler : --> on_entry()
ErrorHandler : on_exit() -->
ShutdownState : --> on_entry()
ShutdownState :
ShutdownState : Gracefully shuts down
ShutdownState : the entire FSM with
ShutdownState : both of the regions

state "Event dispatcher" as EQ

Event1 -down-> EQ
Event2 -down-> EQ
Event3 -down-> EQ
ThrowEvent -down-> EQ

ThrowEvent : Event made when
ThrowEvent : one of the subroutines
ThrowEvent : in the first reqion throws
ThrowEvent : an exception

EQ -down-> FSM

EQ : dispatches events to
EQ : active states in both 
EQ : regions of the FSM

FSM -down-> [*]
```