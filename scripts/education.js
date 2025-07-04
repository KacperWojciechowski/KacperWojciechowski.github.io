const educationEntries = [
    {
        degree: "Master of Computer Science",
        institution: "University of Zielona Góra",
        institutionLink: "https://www.uz.zgora.pl/",
        city: "Zielona Góra",
        country: "Poland",
        faculty: "Faculty of Computer, Electrical and Control Engineering",
        facultyLink: "",
        startDate: "March 2022",
        endDate: "July 2024",
        specialization: "Integrated Computer Systems",
        thesisTitle: "Comparative Analysis of Machine Learning Libraries in C++ for Application in Biostatistics",
        thesisLink: "",
        activities: [
            { "Space Engineering Science Club" : "software and electronics engineer, team leader" }
        ],
        achievements: [
            "Designed the target electronic system of a marsian rover at <a href=\"\">The Space Engineering Science Club</a>",
            "Lead several lectures about microelectronics for high school students in cooperation with <a href=\"\">The Space Research Center of the Polish Academy of Sciences (CBK PAN)</a>"
        ]
    },
    {
        degree: "Bachelor of Computer Science",
        institution: "University of Zielona Góra",
        institutionLink: "https://www.uz.zgora.pl/",
        city: "Zielona Góra",
        country: "Poland",
        faculty: "Faculty of Computer, Electrical and Control Engineering",
        facultyLink: "",
        startDate: "October 2018",
        endDate: "February 2022",
        specialization: "Industrial Computer Systems",
        thesisTitle: "Methods of Implementing a Network Interface in IoT Modules",
        thesisLink: "",
        activities: [
            { "Game&Dev Science Club" : "club president, software engineer"},
            { "FantASIC Science Club" : "club president, software engineer"},
            { "Space Engineering Science Club" : "software and electronics engineer, team leader" },
            { "Tutoring" : "tutored programming, computer science and mathematics for university and high school students"}
        ],
        achievements: [
            "Lead a lecture about Perlin Noise for university students of the Bachelor's Degree in Mathematics at the Faculty of Mathematics at my university",
            "Lead a lecture about graphs and graph algorithms for primary school students during open day at the Faculty of Mathematics"
        ]
    }
]

function renderSingleEducationEntry(entry) {
    return `
        <div class="timeline-item">
            <div class="timeline-marker">
                <span class="timeline-date">${entry["startDate"]}</span>
                <div class="timeline-dot"></div>
                <span class="timeline-date">${entry["endDate"]}</span>
            </div>
            <div class="content">
                <h2><i>${entry["degree"]}</i></h2> - <a href="${entry["institutionLink"]}" target="_blank">${entry["institution"]}</a>, ${entry.city}, ${entry.country}</h2>
                <hr>
                <p><strong>Faculty: </strong>
                    <a href="${entry["facultyLink"]}" target="_blank">${entry["faculty"]}</a></p>
                <p><strong>Specialization: </strong><i>${entry["specialization"]}</i></p>
                <p style="translate: 0 -5px;"><strong>Thesis: 
                    </strong><a href="${entry["thesisLink"]} target="_blank"><i>''${entry["thesisTitle"]}''</i>
                    <img class="researchgate-icon" src="https://img.shields.io/badge/-ResearchGate-darkgreen?style=flat&logo=ResearchGate&logoColor=white" alt="ResearchGate"></a>"
                </p>
                <p><strong>Additional activities:</strong></p>
                <ul>
                    ${Object.entries(entry["activities"]).map(([activity, description]) => `<li><p><i><b>${activity}</b></i>: ${description};</p></li>`).join('')}
                </ul>
                <p><strong>Additional achievements:</strong></p>
                <ul>
                    ${entry.achievements.map(achievement => `<li><p>${achievement}</p></li>`).join('')}
                </ul>
            </div>
        </div>`;
}

                        <a href="https://www.researchgate.net/publication/382162127_Comparative_Analysis_of_Machine_Learning_Libraries_in_C_for_Applications_in_Biostatistics" target="_blank">
                            <i>''Comparative Analysis of Machine Learning Libraries in C++ for Applications in Biostatistics''</i>
                        <img class="researchgate-icon" src="https://img.shields.io/badge/-ResearchGate-darkgreen?style=flat&logo=ResearchGate&logoColor=white" alt="ResearchGate">
                        </a>
                    </p>
                    <p><strong>Additional activities:</strong></p>
                    <ul>
                        <li><p><i><b>Space Engineering Science Club</b></i> - software and electronics engineer, team leader;</p></li>
                    </ul>
                    <p><strong>Additional achievements:</strong></p>
                    <ul>
                        <li><p>Designed the target electronic system of a marsian rover at <a href="https://knik.spaceregion.eu/" target="_blank">The Space Engineering Science Club</a>;</p></li>
                        <li><p>Lead several lectures about microelectronics for high school students in cooperation with <a href="https://cbkpan.pl/" target="_blank">
                            The Space Research Centre of the Polish Academy of Sciences (CBK PAN);
                            </a></p></li>
                    </ul>
                </div>
            </div>

function renderEducationEntries() {
    return `${educationEntries.map(renderSingleEducationEntry).join('')}`;
}

window.addEventListener('DOMContentLoaded', () => {
    const educationContainer = document.getElementById("id-education-timeline");
    educationContainer.innerHTML = renderEducationEntries();
})