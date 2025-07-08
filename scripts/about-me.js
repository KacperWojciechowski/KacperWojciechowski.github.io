const aboutMeCode = [
    { "keyword" : "using namespace", "type" : "std::literals", "keyword _1" : ";" },
    {},
    { "keyword" : "template", "brace" : "<", "keyword _1" : "typename", "type" : "Company", "brace _1" : ">" },
    { "keyword" : "class", "type" : "KacperWojciechowski", "brace" : "{" },
    {},
    { "keyword" : "public:" },
    { "type code-tab" : "void", "function" : "introduce", "brace" : "()", "keyword _1" : ";" },
    { "type code-tab" : "void", "function" : "hire", "brace" : "()", "keyword _1" : ";" },
    { "keyword" : "private:" },
    { "type code-tab" : "std::uint8_t", "variable" : "age", "keyword _1" : "=", "" : "<span id=\"id-age\" class=\"number\"></div>", "keyword _2" : ";" },
    { "type code-tab" : "std::string", "variable" : "occupation", "keyword" : "=", "string" : "\"Software Engineer\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "specialization", "keyword" : "=", "string" : "\"Cpp, SW Architecture\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "degree_type", "keyword" : "=", "string" : "\"Master's\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "degree_field", "keyword" : "=", "string" : "\"Computer Science\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "cityOfResidence", "keyword" : "=", "string" : "\"Wschowa\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "countryOfResidence", "keyword" : "=", "string" : "\"Poland\"", "keyword _1" : ";" },
    {},
    { "keyword code-tab" : "struct", "type" : "WorkExperience", "brace" : "{"},
    { "keyword code-double-tab" : "std::chrono::year", "variable" : "years", "keyword" : "=", "" : "<span id=\"id-years\" class=\"number\"></span>", "keyword _1" : ";" },
    { "keyword code-double-tab" : "std::chrono::month", "variable" : "months", "keyword" : "=", "" : "<span id=\"id-months\" class=\"number\"></span>", "keyword _1" : ";" },
    { "brace code-tab" : "}", "keyword" : ";" },
    {},
    { "type code-tab" : "std::weak_ptr", "brace" : "<", "type" : "Company", "brace _1" : ">", "variable" : " employer", "keyword" : ";" },
    { "brace" : "}", "keyword" : ";" },
]

const terminalSeparator = { "comment" : "------------------------------------------------------"}

const terminalFrame = [
    { 
        "terminal-prompt" : "Ubuntu@home:</span><span class=\"directory\">~/repos/cv/build</span><span class=\"terminal-prompt\">$ ", 
        "cursor" : "<span id=\"terminal-cursor\">|</span>", 
        "command" : "<span id=\"id-terminal-command\" style=\"command\"></span>",
        "terminal-output" : "<p id=\"id-terminal-output\" style=\"terminal-output\"></p>"
    },
    { 
        "terminal-prompt" : "Ubuntu@home:</span><span class=\"directory\">~/repos/cv/build</span><span class=\"terminal-prompt\">$ ", 
        "cursor" : "<span id=\"terminal-cursor-2\">|</span>", 
        "command" : "<span id=\"id-terminal-command-2\" style=\"command\"></span>", 
        "terminal-output" : "<span id=\"id-terminal-output-2\" style=\"terminal-output\"></span>" 
    }
]

const terminalCommand = "g++ -std=c++20 -o out main.cpp kacperwojciechowski.cpp > /dev/null && ./out";
const terminalContent = ["[!] Oh, I see you made it! Glad to have you here!",
    "- Welcome to my humble abode.",
    "- My name is Kacper.",
    "- I work professionally as a Software Engineer, specializing in C++ and Software Architecture.",
    "- Since you're here, I presume you want to know a bit more about me.",
    "- As such, feel free to explore the content of this page. I hope you will find it interesting.",
    `- My professional experience includes both high-level and low-level software solutions.
    This makes me think I'll catch your attention regardless of the project you have at hand.`,
    "- If you have any questions, feel free to reach out to me via e-mail.",
    "- If any of my projects strikes you fancy, I encourage you to take a look at it's repository on GitHub!",
    "- Hope you have a great day!"];

function calculateDateDiffTillNow(startDate, endDate = new Date()) {
    let age = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < startDate.getDate())) {
        age--;
    }
    return age;
}

function calculateDateDiffWithMonths(startDate, endDate = new Date()) {
    let years = (endDate.getFullYear() - startDate.getFullYear());
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    if (days > 0)
    {
        months += 1;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    return [years, months];
}

const experience = [
    [new Date(2021, 6, 1), new Date(2021, 7, 31)], // 2
    [new Date(2021, 9, 1), new Date(2022, 1, 28)], // 5
    [new Date(2022, 11, 1), new Date()] // 32
]
// 39 months = 3 years and 3 months

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
    this.document.getElementById("id-years").innerHTML = totalExperience[0];
    this.document.getElementById("id-months").innerHTML = totalExperience[1];
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
                <div class="flowing-container-text">
                    <p>Software Engineering</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/space-engineering-icon.svg">
                <div class="flowing-container-text">
                    <p>Space Engineering</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/physics-icon.svg">
                <div class="flowing-container-text">
                    <p>Physics</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/astrophysics-icon.svg">
                <div class="flowing-container-text">
                    <p>Astrophysics</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/video-game-icon.svg">
                <div class="flowing-container-text">
                    <p>Video Games</p>
                </div>
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
            <img class="gh-stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=KacperWojciechowski&size_weight=1&count_weight=0&theme=vision-friendly-dark&layout=donut&bg_color=201A4240&title_color=000000&text_color=000000&border_radius=10" alt="GitHub Languages">
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
                <div class="flowing-container-text">
                    <p>Software Engineering</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/cpp.svg">
                <div class="flowing-container-text">
                    <p>C++</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/sw-architecture.svg">
                <div class="flowing-container-text">
                    <p>Software Architecture</p>
                </div>
            </span>
            <span class="flowing-container">
                <img src="../pictures/embedded-systems.svg">
                <div class="flowing-container-text">
                    <p>Embedded Systems</p>
                </div>
            </span>
        </div>
    </div>
    `;
}

function cursorBlink(cursorClass)
{
    const cursor = this.document.getElementById(cursorClass);
    if (cursor) {
        cursor.style.visibility = (cursor.style.visibility === 'hidden' ? '' : 'hidden');
    }
}

async function engageTerminal()
{
    this.document.getElementById("about-me-terminal").innerHTML = renderTerminal(terminalFrame[0]);
    let blinkingInterval = this.setInterval(cursorBlink, 500, "terminal-cursor");
    const delay = ms => new Promise(res => this.setTimeout(res, ms));
    await delay(750);
    this.clearInterval(blinkingInterval);
    this.document.getElementById("terminal-cursor").innerHTML = '';
    await iterativelyRenderTerminal("id-terminal-command", terminalCommand);
    await delay(500);
    for (const line of terminalContent) {
        await iterativelyRenderTerminal("id-terminal-output", line);
    }
    await delay(500);
    this.document.getElementById("about-me-terminal").innerHTML += renderTerminal(terminalFrame[1]);

    this.setInterval(cursorBlink, 500, "terminal-cursor-2");
}

window.addEventListener('DOMContentLoaded', async function() {
    this.document.getElementById("id-introduction").innerHTML = placeIntroductionBlock();
    this.document.getElementById("id-interrests").innerHTML = placeInterrestsBlock();
    this.document.getElementById("id-speciality").innerHTML = placeSpecialtityBlock();
    this.document.getElementById("id-github").innerHTML = placeGitHubBlock();
    this.document.getElementById("about-me-code").innerHTML = renderCode(aboutMeCode, noSpaceCppKeywords);
    this.document.getElementById("id-age").innerHTML = Math.trunc(calculateDateDiffWithMonths(new Date(1999, 7, 27))[0]);
    this.document.getElementById("terminal-separator").innerHTML = renderTerminal(terminalSeparator);
    calculateExperience();
    await engageTerminal();
});

