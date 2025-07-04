const experiences = [
    {
        position: "Software Engineer",
        company: "Nokia Solutions and Networks",
        companyLink: "https://nokiawroclaw.pl/",
        city: "Wroclaw",
        country: "Poland",
        startDate: "December 2022",
        endDate: "Ongoing",
        responsibilities: [
            "Developing new functionalities within the 5G RAN Control Plane layer",
            "Creating unit test regression using GTest framework",
            "Creating component level integration tests using TTCN3 language",
            "Creating Acceptance Criteria in form of descriptions and UML sequence diagrams for component level testing, based on specification of the system",
            "Participating in preparing technical requirements for new features",
            "Upholding code quality of solutions made by my team and other teams",
            "Troubleshooting errors encountered at entity, system or performance level testing, and reported by the client",
            "Improving legacy code quality and robustness by refactoring, redesigning and side-effect/undefined-behavior-proofing existing code entities",
            "creating technical reports and analysis during troubleshooting process, for cooperating with other teams, and archivisation purposes",
            "Screening of upcomming features based on provided requirements, defining tasks they will consist of, their dependencies and estimating their complexity",
            "Providing technical insight and technical feedback to support decision making process within the team and by management staff within my department",
            "Providing technical answers, technical summaries and estimates for client team in regards to any client querries",
            "Leading task-related kick-off meetings with teams that are being added to the task, or that a task is being transferred to",
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
            "Analysis of technical documentation regarding TI-RTOS middleware and accompanying Hardware Abstraction Layer (HAL)",
            "Preparing technical documentation on using TI-RTOS and its HAL",
            "Finding and analysing related technical documentation online"
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
            "Development of the embedded layer of <a href=\"https://soloworkout.com/user/\" target=\"_blank\">SOLO&trade;</a> smart workout system",
            "Developing software for ARM Cortex microcontrollers for STM32L4xxx and STM32L0xxx series",
            "Manual testing of implemented solutions",
            "Working with extensive microcontroller documentation by ST Microelectronics"
        ],
        additionalActivities: [],
        technicalStack: [
            "C++ (C++11/14)",
            "C",
            "Make",
            "STM32 ARM Cortex microcontrollers",
            "STM32CubeProgrammer",
            "FreeRTOS",
            "Serial Port communication",
            "DMA (Direct Memory Access)",
            "Linux",
            "Soldering",
            "Operating an oscilloscope"
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