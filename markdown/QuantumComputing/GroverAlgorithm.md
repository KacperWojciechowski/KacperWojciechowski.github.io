# Grover algorithm

## Definition

Grover algorithm is a quantum procedure for checking ***the presence of a key in a database*** without determined structure. Each element is enumerated from $0$ to $2^n-1$, where $n$ is the number of used qubits. The ***number of tries*** for the Grover algorithm is given as $O(\sqrt{2^n})$.

## Algorithm

Let's assume that a quantum register consisting of $n$ qubits is set to superposition state $(N=2^n)$.

\[
\begin{equation}
    |\psi\rangle = H^{\otimes n} | 000\dots0\rangle = (H|0\rangle)^{\otimes n} = \left(\frac{|0\rangle + |1\rangle}{\sqrt{2}}\right)^{\otimes n} = \frac{1}{\sqrt{N}}\sum_{i=0}^{N-1}|i\rangle
\end{equation}   
\]

Steps:
1. Mark amplitude using sign change operation;
2. Use spin around average operator:
\[
\begin{equation}
    A = 2|\psi\rangle\langle\psi| - II; \quad |\psi\rangle -  \text{database state}
\end{equation}
\]

3. After using the $U_f$ operator we acquire state:
\[
\begin{equation}
    |\psi_1\rangle = |\psi\rangle - \frac{2}{\sqrt{2^n}}|i_{U_f}\rangle
\end{equation}
\]
where $|i_{U_f}\rangle$ is the amplitude pointed to by the $U_f$ operator. Probability of measuring this state is equal to $\frac{1}{\sqrt{2^n}}$.

4. After using the spin around average operator, the state of the register respresenting the set of keys within the database is equal to:

\[
\begin{equation}
|\psi_2\rangle = (2|\psi\rangle\langle\psi| - II)|\psi_1\rangle = \frac{2^{n-2}-1}{2^{n-2}}|\psi\rangle + \frac{2}{\sqrt{2^n}}|i_{U_f}\rangle
\end{equation}
\]

5. Repeating steps 3 and 4 will amplify the amplitude, however after a certain number of iterations, it will return to the initial value;

## Example
Example of amplifying the amplitude of the $|1010\rangle$ key, with $n=4$:

```plantuml
skinparam componentStyle rectangle

component Qubit1 {
    [|0>] as 0_1
    [H] as H_1_1
    [ ] as x_1
    [ ] as x_2
    [H] as H_2_1
    [H] as H_3_1
    [X] as X_4_1
    [X] as X_5_1
    [|0(0)>] as O_1

    0_1 -> H_1_1
    H_1_1 -> x_1
    x_1 -> H_2_1
    H_2_1 -> X_4_1
    X_4_1 -> x_2
    x_2 -> X_5_1
    X_5_1 -> H_3_1
    H_3_1 -> O_1
} 

component Qubit2 {
    [|0>] as 0_2
    [H] as H_1_2
    [H] as H_2_2
    [H] as H_3_2
    [X] as X_1_2
    [X] as X_3_2
    [X] as X_4_2
    [X] as X_5_2
    [|0(1)>] as O_2
}

component Qubit3 {
    [|0>] as 0_3
    [H] as H_1_3
    [H] as H_2_3
    [H] as H_3_3
    [X] as X_4_3
    [X] as X_5_3
    [|0(2)>] as O_3
}

component Qubit4 {
    [|0>] as 0_4
    [H] as H_1_4
    [H] as H_2_4
    [H] as H_3_4
    [X] as X_1_4
    [X] as X_3_4
    [X] as X_4_4
    [X] as X_5_4
    [|0(3)>] as O_4
    [Z] as Z
}

component Qubit5 {
    [|1>] as 1_5
    [H] as H_1_5
    [H] as H_3_5
    [X] as X_2_5
    [|0(4)>] as O_5
}





































```
