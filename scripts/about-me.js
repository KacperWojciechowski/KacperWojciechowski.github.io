const aboutMeCode = [
    { "keyword" : "template", "brace" : "<", "keyword _1" : "typename", "type" : "Company", "brace _1" : ">" },
    { "keyword" : "class", "type" : "KacperWojciechowski", "brace" : "{" },
    { "keyword" : "public:" },
    { "type code-tab" : "void", "function" : "introduce", "brace" : "()", "keyword _1" : ";" },
    { "type code-tab" : "void", "function" : "hire", "brace" : "()", "keyword _1" : ";" },
    { "keyword" : "private:" },
    { "keyword code-tab" : "uint8_t", "variable" : "age", "keyword _1" : "=", "" : "<span id=\"id-age\" class=\"number\"></div>", "keyword _2" : ";" },
    { "keyword code-tab" : "auto", "variable" : "occupation", "keyword" : "=", "string" : "\"Software Engineer\"", "keyword _1" : ";" },
    { "keyword code-tab" : "auto", "variable" : "specialization", "keyword" : "=", "string" : "\"Cpp, SW Architecture\"", "keyword _1" : ";" },
    { "keyword code-tab" : "auto", "variable" : "degree", "keyword" : "=", "string" : "\"Master's in Computer Science\"", "keyword _1" : ";" },
    { "comment code-tab" : "// Rounding all months to ~30 days"},
    { "keyword code-tab" : "auto", "variable" : "experience", "keyword" : "="},
    { "function code-double-tab" : "std::chrono::duration_cast", "brace" : "(" },
    { "type code-tripple-tab" : "std::chrono::years", "brace _1" : ">", "brace _2" : "(", "" : "<span id=\"id-experience\" class=\"number\"></span>", "brace _3" : ")", "keyword _1" : ".", "function" : "count", "brace" : "()", "keyword" : ";" },
    { "type code-tab" : "std::weak_ptr", "brace" : "<", "type" : "Company", "brace _1" : ">", "variable" : " employer", "keyword" : ";" },
    { "brace" : "}", "keyword" : ";" },
]

const terminalSeparator = [
    { "comment" : "------------------------------------------------------"}
]

const terminalContent = [
    { "terminal-prompt" : "Ubuntu(~/repos/cv/build)$", "command" : "g++ -o out main.cpp kacperwojciechowski.cpp > /dev/null && ./out" },
    { "terminal-output" : "Hello, my name is Kacper. Interrested in hiring me, aren't you ?" },
    { "terminal-prompt" : "Ubuntu(~/repos/cv/build)$", "cursor" : "<span id=\"terminal-cursor\">|</span>" }
]

function calculateDateDiffTillNow(startDate, endDate = new Date()) {
    let age = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < startDate.getDate())) {
        age--;
    }
    return age;
}

function calculateDateDiffWithMonths(startDate, endDate = new Date()) {
    let age = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    age += endDate.getMonth() - startDate.getMonth();
    if (endDate.getDate() < startDate.getDate()) {
        age--;
    }
    return [age/12, age % 12];
}

const experience = [
    [new Date(2021, 6, 1), new Date(2021, 7, 1)],
    [new Date(2021, 9, 1), new Date(2022, 1, 28)],
    [new Date(2022, 11, 1), new Date()]
]

function calculateExperience() {
    let totalExperience = [0, 0];
    for (let i = 0; i < experience.length; i++) {
        const [start, end] = experience[i];
        const periodExperience = calculateDateDiffWithMonths(start, end);
        totalExperience[0] += periodExperience[0];
        totalExperience[1] += periodExperience[1];
        if (totalExperience[1] >= 12) {
            totalExperience[0] += Math.floor(totalExperience[1] / 12);
            totalExperience[1] = totalExperience[1] % 12;
        }
    }
    return totalExperience[0] + "y + " + totalExperience[1] + "*30d";
}

function placeIntroductionBlock() {
    return `
        <div class="content">
            <div class="label">
                <img src="../pictures/circuit-left.png" alt="Circuit Icon">
                <p>Hello, my name is Kacper!</p>
                <img src="../pictures/circuit-right.png" alt="Circuit Icon">
            </div>
            <div class="codeblock">
                <div id="about-me-code"></div>
                <div id="terminal-separator"></div>
                <div id="about-me-terminal"></div>
            </div>                    
        </div>
    `;
}

function placeInterrestsBlock() {
    return `
    <div class="content" id="side-tile">
        <div class="label">
            <img src="../pictures/circuit-left.png" alt="Circuit Icon">
            <p>Primary Interrests:</p>
            <img src="../pictures/circuit-right.png" alt="Circuit Icon">
        </div>
        <div class="flowing-container-wrapper">
            <span class="flowing-container">
                <img src="../pictures/programming-icon.svg">
                <p>Software Engineering</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/space-engineering-icon.svg">
                <p>Space Engineering</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/physics-icon.svg">
                <p>Physics</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/astrophysics-icon.svg">
                <p>Astrophysics</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/video-game-icon.svg">
                <p>Video Games</p>
            </span>
        </div>                    
    </div>
    `;
}

function placeGitHubBlock() {
    return `
    <div class="content">
        <div class="label">
            <img src="../pictures/circuit-left.png" alt="Circuit Icon">
            <p>GitHub Stats:</p>
            <img src="../pictures/circuit-right.png" alt="Circuit Icon">
        </div>
        <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
            <img width="350" src="https://github-readme-stats.vercel.app/api/top-langs/?username=KacperWojciechowski&size_weight=1&count_weight=0&theme=vision-friendly-dark&layout=donut&bg_color=201A4240&title_color=000000&text_color=000000&border_radius=10" alt="GitHub Languages">
        </div>
    </div>`;
}

function placeSpecialtityBlock()
{
    return `
    <div class="content">
        <div class="label">
            <img src="../pictures/circuit-left.png" alt="Circuit Icon">
            <p>Specialization:</p>
            <img src="../pictures/circuit-right.png" alt="Circuit Icon">
        </div>
        <div class="flowing-container-wrapper">
            <span class="flowing-container">
                <img src="../pictures/sw-engineering.svg">
                <p>Software Engineering</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/cpp.svg">
                <p>C++</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/sw-architecture.svg">
                <p>Software Architecture</p>
            </span>
            <span class="flowing-container">
                <img src="../pictures/embedded-systems.svg">
                <p>Embedded Systems</p>
            </span>
        </div>
    </div>
    `;
}

window.addEventListener('DOMContentLoaded', async function() {
    this.document.getElementById("id-introduction").innerHTML = placeIntroductionBlock();
    this.document.getElementById("id-interrests").innerHTML = placeInterrestsBlock();
    this.document.getElementById("id-speciality").innerHTML = placeSpecialtityBlock();
    this.document.getElementById("id-github").innerHTML = placeGitHubBlock();
    this.document.getElementById("about-me-code").innerHTML = renderCode(aboutMeCode, noSpaceCppKeywords);
    this.document.getElementById("terminal-separator").innerHTML = renderTerminal(terminalSeparator);
    this.document.getElementById("about-me-terminal").innerHTML = renderTerminal(terminalContent);
    this.document.getElementById("id-age").innerHTML = Math.trunc(calculateDateDiffWithMonths(new Date(1999, 7, 27))[0]);
    this.document.getElementById("id-experience").innerHTML = calculateExperience();

    this.setInterval(function() {
        const cursor = this.document.getElementById("terminal-cursor");
        if (cursor) {
            cursor.style.visibility = (cursor.style.visibility === 'hidden' ? '' : 'hidden');
        }
    }, 500);
});

