const projects = [
    {
        name: "Grimoire",
        logo: "../pictures/test_icon.svg",
        link: "",
        technicalStack: ["C++23", "C", "CMake", "Unicorn", "ARM-Cortex", "GTest", "Git"],
        features: [
            "Regression component tests for embedded firmware",
            "Peripheral registers monitoring in tests",
            "Interleaved, alternated and transactional asserts",
            "Microcontroller memory layout definitions",
            "Built-in matches and ability to make custom matchers",
            "GTest-inspired syntax"
        ]
    },
    {
	    name: "CMock (from ThrowTheSwitch) - issue #490, PR #526",
	    logo: "../pictures/github-code-source-svgrepo-com.svg",
	    link: "https://github.com/ThrowTheSwitch/CMock/pull/526",
	    technicalStack: ["Bash", "Docker", "Git"],
	    features: [
	        "Docker environment for CMock developers with automatic setup of dependencies and repository cloning;",
	        "Setup and managing scripts that allow ease of access;",
	        "SSH-based, non-persistant credential loading for safe use;",
	        "Automatic repository fork resolution based on github user email stored in local .env file;"
	    ]   
    },
    {
        name: "GraphCake",
        logo: "../pictures/graph_cake.svg",
        link: "https://github.com/KacperWojciechowski/GraphCake",
        technicalStack: ["C++20", "GTest", "CMake", "Git"],
        features: [
            "Set of universal, interchangeable graph representations;",
            `Support for <a href="" target="_blank">House of Graphs</a> formats (<b>.mat</b>, <b>.lst</b>) and <b>.graphML</b> formats;`,
            "Support for directed and undirected graphs;",
            "Greedy Coloring algorithm;",
            "LF Coloring algorithm;",
            "SF Coloring algorithm;"
        ]
    },
    {
        name: "Road to the Center",
        logo: "../pictures/road_to_the_centre.svg",
        link: "https://github.com/KacperWojciechowski/RoadToTheCenter",
        technicalStack: ["C++20", "GTest", "CMake", "Git"],
        features: [
            "Made during an amateur game jam between friends;",
            "A text-based economy game, where the goal is to travel to the center of the galaxy;",
            "Havily inspired by the video game Spore;",
            "Utilizes a custom galaxy generation mechanism based on graph topological sorting algorithm"
        ]
    },
    {
        name: "Dungeon Crawler",
        logo: "../pictures/dungeon_crawler.svg",
        link: "https://github.com/KacperWojciechowski/DungeonCrawler",
        technicalStack: ["Java 8, Maven", "Git"],
        features: [
            "Text-based dungeon crawler game in a client-server model;",
            "The game state is controlled and validated by the server, while the client acts exclusively as a front-end;",
            "Custom graph-based map generation at each playthrough;",
            "Exploration state retention;",
            "Combat systems with randomly generated enemies;",
            "Several enemies classes with different parameter scaling;",
            "Character progression based on randomized loot;",
            "Consumable items mechanic;",
            "JSON-based client-server communication;"
        ]
    }
]

function renderProject(project) {
    let out = `
    <div class="project-item">
        <img class="project-logo desktop" src="${project["logo"]}" alt="${project["name"]} Logo" width="100" height="100">
        <div class="content">
            <div class="project-name-wrapper">
            <img class="project-logo mobile" src="${project["logo"]}" alt="${project["name"]} Logo" width="100" height="100">
            <a style="text-decoration-color: white;" class="project-name" href="${project["link"]}" target="_blank">
                <span class="label">
                    <img src="../pictures/circuit-left.png" alt="Circuit Icon"></img>
                    <p>${project["name"]}</p>
                    <img src="../pictures/circuit-right.png" alt="Circuit Icon"></img>
                </span>
            </a>
            </div>
            <hr>
            <p class="note green">
                Available at <img class="github-icon" src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=GitHub&logoColor=white" alt="GitHub">
            </p>`
    out += `<ul>
                ${project["features"].map(feature => `<li><p>${feature}</p></li>`).join('')}
            </ul>
            <p class="note blue">
                <img class="note-icon" src="../pictures/blue-pin.svg">
                <b>Technical stack:</b> ${project["technicalStack"].map(stack => `<i>${stack}</i>`).join(', ')}
            </p>
        </div>
    </div>
    `;
    return out;
}

window.addEventListener('DOMContentLoaded', function() {
    let element = this.document.getElementById("id-projects-container");
    if (!element) return;

    let html = '';
    for (let i = 0; i < projects.length; i++) {
        html += renderProject(projects[i]);
        if (i < projects.length - 1) html += `<hr>`;
    }
    element.innerHTML = html;
});
