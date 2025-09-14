const programmingLanguages = {
    0: {
        0: {
            "C++": [
                "Standards: 11, 14, 17, 20",
                "STL containers and algorithms",
                "Concurrency - synchronization, multithreading",
                "Memory alignment",
                "Memory management - RAII, memory ownership, smart pointers side effects",
                "Templates - hands-on experience with metaprogramming, template specialization, Curriously Recurring Template Pattern, compile-time conditionals",
                "Lambda functions and function pointers",
                "Functors",
                "G++ compiler attributes",
                "GTest - regular, parametrized and typed tests",
                "Structured bindings",
                "C++ Guidelines and good practices"
            ],
            "TTCN3": [
                "Designing and implementing flow-container-based test frameworks",
                "Operating on components",
                "Creating and expanding templates",
                "Organizing modules and managing dependencies",
                "Message-based communication between components",
                "Parallel message reception"
            ],
            "Rust": [
                "Currently learning",
            ],
            "Python": [
                "Working with fundamental data structures - lists, tuples, sets and dictionaries",
                "Creating and using classes and objects",
                "Using and managing external libraries",
            ],
            "Bash": [
                "Creating automatization scripts and small tools",
                "Creating parametrized scripts",
                "Creating scripts operating on files and directories",
                "Creating script-invoking commands using aliases",
                "Using environment variables"
            ]
        }
    }
};

const embedded = {
    0: {
        "Real-time operating systems": {
            "TI-RTOS": [
                "Understanding of task scheduling and synchronization",
                "Task priority, preemption and context switching",
                "Managing task stack size",
                "Handlers for interrupt routines and events such as task termination"
            ],
            "FreeRTOS": [
                "Understanding of task scheduling and synchronization",
                "Task priority, preemption and context switching",
                "Managing task stack size",
                "Handlers for interrupt routines and events such as task termination"
            ]
        },
        "Microcontrollers": {
            "STM32": [
                "Utilizing HAL library for peripheral management",
                "Configuring peripherals using MCU registers",
                "Creating bare metal applications",
                "Implementing communication using USART",
                "Implementing ISR handling routines",
                "Implementing PWM control for DC motors",
                "Configuring DMA for data transfer with peripherals",
                "Configuring LwIP routines",
                "Utilizing GPIO for input and output",
            ],
            "Arduino": [
                "Utilizing GPIO for input and output",
                "Implementing PWM control for DC motors",
                "Implementing ISR handling routines",
                "Implementing timer-based concurrency framework",
                "Implementing communication using UART and I2C",
            ]
        },
        "Hardware" : {
            "Components": [
                "Working with DC and BLDC motors",
                "Working with logic gates",
                "Working with logic level converters",
                "Working with external sensors utilizing I2C, UART and GPIO",
                "Working with relays"
            ],
            "Tools": [
                "Soldering components",
                "Analyzing signals using oscilloscope",
                "Measuring power and component parameters using multimeter",
            ]
        }
    }
};

const tools = {
    0: {
        "Operating systems": {
            "Linux": [
                "Managing files and directories using terminal",
                "Creating symbolic links for files and directories",
                "Practical experience with building projects in a Linux-based environment",
                "Using Linux native tools for developing custom Bash scripts",
                "Managing Linux packages using apt",
                "Hands-on experience with Ubuntu",
            ],
            "Windows": [
                "Hands-on experience with Windows systems starting from Windows XP up to Windows 11",
                "Hands-on experience setting up, configuring and operating WSL2 with Ubuntu instance"    
            ]
        },
        "Code analysis and quality": {
            "Clang-format" : [
                "Configuring Clang-format for tailored code formatting",
                "Integrating Clang-format with Git hooks for automated formatting"
            ],
            "Gdb": [
                "Debugging C++ application crashes using Gdb and backtraces",
            ]
        },
        "Documentation": {
            "Generated": [
                "Generating documentation using Doxygen based on in-code comments",
            ],
            "Hand-made": [
                "Creating descriptive documentation using Markdown",
                "Basic knowledge of AsciiDoc",
                "Hands-on experience with creating and maintaining PlantUML diagrams",
                "Hands-on experience with designing and analyzing UML flow diagrams"
            ]
        },
    },
    1: {
        "Version control systems": {
            "Git": [
                "Creating and managing repositories",
                "Branching and merging strategies",
                "Using Git hooks for automation",
                "Collaborating using pull requests",
                "Managing conflicts and rebasing",
                "Operating git-based web platforms such as GitHub, GitLab, BitBucket and Gerrit"
            ],
            "Known Git-based repositories": [
                "GitHub - Managing repositories, issues and pull requests",
                "GitLab - Managing repositories, issues, issue boards, labels and pull requests",
                "Gerrit - Managing changes, performing code review"
            ]
        },
        "Build and dependency management systems": {
            "CMake": [
                "Creating, building and maintaining projects based on CMake scripts",
            ],
            "Cargo": [
                "Currently learning"
            ]
        },
        
        "AI assistants": {
            "GitHub Copilot": [
                "Hands-on experience with code design and refactoring using GitHub Copilot",
                "Hands-on experience with accelerated troubleshooting with help of GitHub Copilot"
            ],
            "ChatGPT": [
                "Basic experience with information search using ChatGPT"
            ]
        },
        
    }
};
    

const knowhow = {
    0: { 
        0: {
            "Software design": [
                "Utilizing SOLID principles",
                "Designing and implementing finite state machines",
                "Utilizing design patterns",
                "Familiarity with Clean Code principles",
                "Hands-on experience with identifying and fixing side effects",
                "Hands-on experience with refactoring legacy code",
                "Hands-on experience with Test Driven Development"
            ],
            "Digital circuits": [
                "Designing circuits using logic gates and latches",
                "Understanding of basics of software-hardware functional decomposition",
            ],
            "Machine learning": [
                "Understanding of shallow learning algorithms",
                "Understanding of neural network models, such as FFNN, CNN and RNN",
                "Experience with analyzing model quality metrics",
                "Hands-on experience with preprocessing data for training",
                "Slight experience with training models using TensorFlow",
                "Slight experience with training models using Shark-ML, Shogun and DLib"
            ],
            "Graph theory": [
                "Understanding of graph theory basics",
                "Hands-on experience with implementing graph library in C++",
                "Experience with solving problems such as finding shortest path, coloring, topological sort and traversing graphs with C++"
            ],
            "<span class=\"desktop\">Telecommunication</span><span class=\"mobile\">Telecom- munication</span>": [
                "Understanding of Carrier Aggregation functionality",
                "Understanding of Dual Connectivity functionality",
                "Understanding of 5G RAN architecture, including CU-DU split and CP-UP split",
                "Understanding of SCTP protocol",
                "Hands-on experience with troubleshooting and analyzing 5G RAN issues",
                "Hands-on experience with utilizing 3GPP documentation"
            ]
        }
    }
}
