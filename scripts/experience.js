const experiences = [
    {
        position: "Software Engineer",
        company: "Arista Networks, Inc.",
        companyLink: "https://www.arista.com/en/",
        city: "Katowice",
        country: "Poland",
        startDate: "March 2026",
        responsibilities: [
            "Developing software for Arista network equipment products",
            "Participating in technical documentation creation",
            "Providing test coverage for created solutions"
        ],
        additionalActivities: [],
        technicalStack: [
            "C++",
            "Linux",
            "Git",
            "Gdb",
            "Bash"
        ]
    },
    {
        position: "Embedded Software Engineer",
        company: "Hertz Systems Ltd.",
        companyLink: "https://www.hertzsystems.com/en/",
        city: "Zielona Góra",
        country: "Poland",
        startDate: "October 2025",
        endDate: "February 2026",
        responsibilities: [
            "Developing embedded C software for multi-core STM32 microcontrollers with FreeRTOS and Bare Metal approach",
            "Creating and configuring custom tools including Bash scripts, Linux Docker containers, static code analyzer and code formatter",
        ],
        additionalActivities: [
            "Researching tools for streamlining software development process",
            "Researching and proposing improvements to existing development processes and tools",
            "Researching and proposing new approaches to software design and architecture, and code quality",
            "Spearheading introduction of code quality assurance tools and processes",
            "Sharing knowledge and experience about approaches to software design and architecture with other R&D members"
        ],
        technicalStack: [
            "C (C11)",
            "Ceedling",
            "Git",
            "CMake",
            "Linux",
            "Bash",
            "CMock",
            "Clang tools (Clang-Tidy, Clang-Format)",
            "Arm-none-eabi toolchain",
            "STM32 Microcontrollers",
            "ARM Cortex-M architecture",
            "ST HAL library",
            "Docker",
            "FreeRTOS",
            "GitLab",
            "Assembly (ARM Cortex-M)"
        ]
    },
    {
        position: "Software Engineer",
        company: "Nokia Solutions and Networks",
        companyLink: "https://nokiawroclaw.pl/",
        city: "Wroclaw",
        country: "Poland",
        startDate: "December 2022",
        endDate: "September 2025",
        responsibilities: [
            "Development of 5G RAN C-Plane (L3) software in C++",
            "Working with extensive proprietary documentation and public 3GPP standard",
            "Serving as a designated code reviewer, aiding in keeping huge (1M+ lines of code) codebase secure, well structured and maintainable",
            "Hands-on experience with Carrier Aggrregation (CA), Dual Connectivity (DC), Admission and Mobility functionalities in 5G RAN",
            "Leading task-related kick-off mettings with other teams",
            "Facilitating adressing of technical debt and issues within the project with all involved parties"
        ],
        additionalActivities: [
            "External code reviewer - designated member for reviewing code across multiple teams, ensuring code quality in a two-step reviewing process",
            "Building team knowledge base by expanding and maintaining web-based team wiki/know-how page",
            "Participating in 5G-related and software engineering-related trainings within company",
            "Lecturer in classes organized by Nokia for local universities, sharing knowledge about modern C++ and Test Driven Development",
            "Creating tools to automate and streamline development processes, such as a set of scripts for setting up docker environement, and tools for filtering results of automated regression tests",
            "Organizing scattered legacy team knowledge base into the web-based team wiki/know-how page for easier access",
            "Creating guides for using various tools, technical concepts explanations and project architecture summary for internal use",
        ],
        technicalStack: [
            "C++ (C++11/14/17/20)",
            "GTest",
            "CMake",
            "TTCN3",
            "UML, PlantUML",
            "Git, GitLab",
            "Linux",
            "Bash",
            "SCTP Protocol",
            "3GPP-defined functionalities of 5G RAN Control Plane"
        ]
    },
    {
        position: "Student Scientist",
        company: "IHP Microelectronics",
        companyLink: "https://www.ihp-microelectronics.com/",
        city: "Frankfurt (Oder)",
        country: "Germany",
        startDate: "October 2021",
        endDate: "February 2022",
        responsibilities: [
            "Functional analysis of TI-RTOS system available in the ROM memory of series CC1352 microcontrollers by Texas Instruments",
            "Procuring technical manual for utilizing TI-RTOS"
        ],
        additionalActivities: [],
        technicalStack: [
            "TI-RTOS",
            "C",
            "C++",
            "Texas Instruments HAL"
        ]
    },
    {
        position: "Junior C++ Embedded Engineer",
        company: "Heavy Kinematic Machines",
        companyLink: "https://www.linkedin.com/company/heavykinematic/?originalSubdomain=pl",
        city: "Zielona Góra",
        country: "Poland",
        startDate: "July 2021",
        endDate: "August 2021",
        responsibilities: [
            "Development of the embedded layer of <a href=\"https://soloworkout.com/user/\" target=\"_blank\">SOLO&trade;</a> smart workout ecosystem",
            "Creating C++ software for STM32 microcontrollers",
            "Manual testing of embedded solutions",
        ],
        additionalActivities: [],
        technicalStack: [
            "C++ (C++11/14)",
            "Make",
            "Git",
            "ARM Cortex",
            "FreeRTOS",
            "Serial Port communication",
            "DMA (Direct Memory Access)",
            "Linux",
            "Soldering",
            "Operating an oscilloscope"
        ]
    },
    {
        position: "Intern C++ Embedded Engineer",
        company: "Heavy Kinematic Machines",
        companyLink: "https://www.linkedin.com/company/heavykinematic/?originalSubdomain=pl",
        city: "Zielona Góra",
        country: "Poland",
        startDate: "August 2020",
        endDate: "September 2020",
        responsibilities: [
            "Developing C++ software for STM32 microcontrollers",
            "Creating a debug mode using UART for signals from photo-sensors on STM32 platform"
        ],
        additionalActivities: [],
        technicalStack: [
            "C++ (C++11/14)",
            "STM32 Microcontrollers",
            "Git"
        ]
    }
]

function renderSingleExperience(experience) {
    return `<div class="timeline-item">
                <div class="timeline-marker">
                    <span class="timeline-date">${experience["startDate"]}</span>
                    <div class="timeline-dot"></div>
                    <span class="timeline-date">${experience["endDate"]}</span>
                </div>
                <div class="content">
                    <h2><i>${experience["position"]}</i> - <a href="${experience["companyLink"]}" target="_blank">${experience["company"]}</a>, ${experience["city"]}, ${experience["country"]}</h2>
                    <hr>
                    <p><strong>My responsibilities:</strong></p>
                    <ul>
                        ${experience["responsibilities"].map(responsibility => `<li><p>${responsibility};</p></li>`).join('')}
                    </ul>
                    <p><strong>Additional activities: </strong></p>
                    <ul>
                        ${experience["additionalActivities"].length != 0 ? `${experience["additionalActivities"].map(activity => `<li><p>${activity};</p></li>`).join('')}` : '<li><p>-</p></li>'}
                    </ul>
                    <div class="note blue">
                        <p><strong>Technical stack and know-how: </strong></p>
                        <ul>
                            ${experience["technicalStack"].map(tech => `<li><p>${tech};</p></li>`).join('')}
                        </ul>
                    </div>    
                </div>
            </div>`
}

function renderExperiences() {
    return `${experiences.map(renderSingleExperience).join('')}`;
}

window.addEventListener('DOMContentLoaded', () => {
    const experienceContainer = document.getElementById("id-experience-timeline");
    experienceContainer.innerHTML = renderExperiences();
})
