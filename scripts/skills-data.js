const programmingLanguages = {
    0: {
            "C++": [
                "Standards: 11-20",
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
                "Modules",
                "Concepts",
                "C++ Guidelines and good practices",
                "Boost::MSM and Boost::ASIO"
            ],
            "C": [
                "Standards: 98 (ANSI), 11",
                "Memory management",
                "Memory alignment",
                "OOP-style system design",
                "Gcc compiler attributes and compilation flags",
                "CMock unit test framework with Ceedling test runner",
                "Automated unit testing embedded application logic on host desktop machine",
                "CMock",
                "Arm-none-eabi toolchain",
                "Ring buffers",
                "Callbacks and function pointers",
                "Redesign and refactoring of legacy code",
                "Determining guidelines for improving safety, reliability and scalability of C code",
                "Analyzing compiled .elf files using objdump and assembly inspection"
            ],
            "TTCN3": [
                "Designing and implementing flow-container-based test frameworks",
                "Operating on components",
                "Creating and expanding templates",
                "Organizing modules and managing dependencies",
                "Message-based communication between components",
                "Parallel message reception"
            ],
            "Python": [
                "Working with fundamental data structures - lists, tuples, sets and dictionaries",
                "Creating and using classes and objects",
                "Using and managing external libraries",
            ],
            "Bash": [
                "Automatization scripts and small tools",
                "Parametrized scripts",
                "Scripts utilizing switches",
                "Scripts operating on files and directories",
                "Script-invoking commands using aliases",
                "Environment variables",
                "Scripts for configuration of Docker-based environments"
            ]
    }
};

const embedded = {
    0: {
            "Real-time operating systems": [
                "Understanding of task scheduling and synchronization",
                "Task priority, preemption and context switching",
                "Managing task stack size",
                "Handlers for interrupt routines and events such as task termination",
                "ISR-based task triggering for processing data",
                "FreeRTOS",
                "TI-RTOS"
            ],
            "Microcontrollers": [
                "STM32 HAL library",
                "MCU peripheral registers",
                "Bare metal applications",
                "USART",
                "ISR",
                "PWM control for DC motors",
                "DMA for data transfer with peripherals",
                "LwIP routines",
                "GPIO",
                "Resolving race conditions between application logic and peripheral interfaces",
                "Synchronization and managing boot logic between cores of dual-core MCUs (STM32H7 series)",
                "Linker scripts",
                "Modifying FLASH memory",
                "Debugging embedded applications using CPU registers and memory inspection",
                "Switching between multiple applications on a single core"
            ],
            "MCU parts and peripherals": [
                "CPU internal registers",
                "NOR-based FLASH memory",
                "GPIO lines",
                "USART serial communication peripheral",
                "Clock configuration and management in embedded systems"
            ],
            "Tools": [
                "Soldering components",
                "Analyzing signals using oscilloscope",
                "Measuring power and component parameters using multimeter",
                "Reading memory dumps from embedded devices using ST-Link programmer"
            ]
    }
};

const tools = {
    0: {
            "Operating systems": [
                "Managing dependencies with Linux package managers (apt, yay, pacman)",
                "Running Docker Linux-based containers on Windows and native Linux",
                "Creating tailored Docker images for development and running tools",
                "Working in remote environments over SSH",
                "Resource management using symbolic links"
            ],
            "Code analysis and quality": [
                "Creating tailored clang-format configurations",
                "Making git hooks for automatic formatting of changed filles on commit",
                "Making scripts generating a unit test configuration and docker-based environment for running them",
                "Clang-format",
                "Clang-tidy",
                "Clangd"
                "Checking backtrace with Gdb"
            ],
            "Documentation": [
                "Doxygen",
                "Making technical documents using Markdown and PlantUML"
            ],
    },
    1: {
            "Version control systems": [
                "Creating, organizing and managing Git repositories and releases",
                "Issue boards",
                "Rebasing, solving merge conflicts, cherry-picking",
                "Performing code review using Merge/Pull Requests",
                "Git hooks",
                "GitHub, GitLab, BitBucket, Gerrit",
                "Fundamentals of Git LFS"
            ],
            "Build systems": [
                "Executable and static library, library-based compilation using CMake",
                "Configuration of Ceedling unit tests",
            ],
            "AI assistants": [
                "Accelerated research, PoC generation, assisted debugging using ChatGPT, GitHub Copilot, Google Gemini"
            ],
            "Containers and virtualization": [
                "Custom tailored Docker containers for running tools and applications",
                "Custom tailored Docker development environments",
                "Simplifying Docker configuration using Bash scripts",
                "Optimizing build times using docker layers",
                "Automatic init scripts",
                "Docker volumes",
                "Sourcing and propagating environment variables",
                "Exchanging files between container and host OS",
                "WSL2 fundamentals with Ubuntu"
            ]
    }
};
    

const knowhow = {
    0: { 
            "Software design and architecture": [
                "SOLID",
                "Finite State Machines",
                "Design patterns",
                "Concurrent system design",
                "Designing systems with asynchronous operations",
                "Triangulating side effects",
                "Legacy code refactoring",
                "Modular design",
                "Designing stateless components",
                "Limiting resource visibility"
            ],
            "Digital circuits": [
                "Designing circuits using logic gates and latches",
                "Software-hardware functional decomposition",
                "Logic function optimization"
            ],
            "Machine learning": [
                "Shallow learning",
                "Feed-Forward, Convolutional and Recurrent Neural Networks",
                "Loss functions and model quality metrics",
                "Data preprocessing",
                "Shark-ML, Shogun and DLib libraries in C++"
            ],
            "Graph theory": [
                "Coloring algorithms",
                "Shortest path algorithms",
                "Topological sort, Critical Path Method"
            ],
            "Telecom": [
                "Carrier Aggregation",
                "Dual Connectivity",
                "Mobility",
                "5G RAN architecture (CU-DU split, CP-UP split)"
                "SCTP",
                "Analyzing and troubleshooting 5G RAN systems",
                "3GPP"
            ],
            "Other": [
                "Regex",
                "Binary protocols",
                "Endianess"
            ]
    }
}
