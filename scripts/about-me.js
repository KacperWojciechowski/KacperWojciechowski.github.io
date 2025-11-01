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
    { "type code-tab" : "std::string", "variable" : "occupation", "keyword" : "=", "string" : "\"Embedded Software Engineer\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "specialization", "keyword" : "=", "string" : "\"Software Architecture and Design\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "degree_type", "keyword" : "=", "string" : "\"Master degree\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "degree_field", "keyword" : "=", "string" : "\"Computer Science\"", "keyword _1" : ";" },
    { "type code-tab" : "std::string", "variable" : "cityOfResidence", "keyword" : "=", "string" : "\"Zielona Góra\"", "keyword _1" : ";" },
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

function calculateDateDiffTillNow(startDate, endDate = new Date()) {
    let age = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < startDate.getDate())) {
        age--;
    }
    return age;
}

function focusInputAtEnd(element) {
    if (!element) return;
    element.focus();
    try {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    } catch (e) {
        element.focus();
    }
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

function placeInterestsBlock() {
    return `
    <div class="content" id="side-tile">
        <div class="label">
            <img src="../pictures/circuit-left.png" alt="Circuit Icon">
            <p>Primary Interests:</p>
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
                <a href="https://www.flaticon.com/free-icons/programming-language" title="programming language icons" alt="Programming language icons created by Soremba - Flaticon" target="_blank"><img src="../pictures/c-(1).png"/></a>
                <div class="flowing-container-text">
                    <p>C</p>
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

/*
New terminal implementation
*/

const defaultCommand = "g++ -std=c++20 -o out main.cpp kacperwojciechowski.cpp > /dev/null && ./out";

const executedCommandPreDelayMs = 200;

const commandsTree = {
    [defaultCommand]: [
        "[!] Oh, I see you made it! Glad to have you here!",
        "- Welcome to my humble abode.",
        "- My name is Kacper.",
        "- I work professionally as a Software Engineer, specializing in C, C++ and Software Architecture.",
        "- My professional experience includes both high-level and low-level software solutions.",
        "- Since you're here, I presume you want to know more about me?",
        "- As such, feel free to explore the content of this website. I hope you will find it interesting.",
        "- My somewhat unique perspective makes me think I'll catch your attention regardless of the project you have at hand.",
        "- If you have any questions, feel free to reach out to me via e-mail.",
        "- If any of my projects strike you fancy, I encourage you to take a look at it's repository on GitHub!",
        "- Hope you have a great day!"
    ],
    "g++": {
        _output: ["g++: fatal error: no input files", "compilation terminated."],
        _children: {
            "-v": {
                _output: [
                    "Using built-in specs.",
                    "COLLECT_GCC=g++",
                    "COLLECT_LTO_WRAPPER=/usr/lib/gcc/x86_64-linux-gnu/9/lto-wrapper",
                    "Target: x86_64-linux-gnu",
                    "Configured with: ../src/configure -v --with-pkgversion='Ubuntu 9.3.0-17ubuntu1~20.04' --with-bugurl=file:///usr/share/doc/gcc-9/README.Bugs --enable-languages=c,c++,go,d,fortran,objc,obj-c++ --prefix=/usr --with-gcc-major-version-only --program-suffix=-9 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/lib --without-included-gettext --enable-threads=posix --libdir=/usr/lib/gcc/x86_64-linux-gnu/9 --enable-nls --with-sysroot"
                ]
            },
            "-E": {
                _output: ["<preprocessed output omitted>"]
            },
            "*": {
                _output: ["compiling files..."],
                _children: {
                    "&&": {
                        _children: {
                            "./out": {
                                _output: ["Hello world"]
                            }
                        }
                    }
                }
            }
        }
    },
    "gcc": {
    },
    "echo" : {
        _children: {
            "*": {

            }
        }
    },
    // Add help for given commands here
    "help" : {
        _output: ["Available commands:", "- help [command]", "- g++ [switch] [file]", "- gcc [switch] [file]", "- git [switch]", "- echo <text>"],
    }
}

function tokenizeCommand(cmd) {
    const tokens = [];
    const re = /[^\s"]+|"([^"]*)"/g;
    let m;
    while ((m = re.exec(cmd)) !== null) {
        tokens.push(m[1] !== undefined ? m[1] : m[0]);
    }
    return tokens;
}

function createTerminalSkeleton(container) {
    container.innerHTML = '';
    const outArea = document.createElement('div');
    outArea.className = 'terminal-output';
    outArea.id = 'about-me-terminal-output';
    outArea.style.whiteSpace = 'pre-wrap';
    outArea.style.wordBreak = 'break-word';
    outArea.style.display = 'flex';
    outArea.style.flexDirection = 'column';
    outArea.style.justifyContent = 'flex-start';
    outArea.style.alignItems = 'stretch';
    outArea.style.overflowY = 'auto';
    outArea.scrollTop = 0;

    const lineArea = document.createElement('div');
    lineArea.className = 'terminal-line';
    lineArea.id = 'about-me-terminal-line';

    const promptSpan = document.createElement('span');
    promptSpan.className = 'terminal-prompt';
    promptSpan.textContent = 'k.woj@Ubuntu:~';

    const dirSpan = document.createElement('span');
    dirSpan.className = 'directory';
    dirSpan.textContent = ' ~/repos/cv/build';

    const dollarSpan = document.createElement('span');
    dollarSpan.className = 'terminal-prompt';
    dollarSpan.textContent = ' $ ';

    const inputSpan = document.createElement('span');
    inputSpan.className = 'terminal-input';
    inputSpan.classList.add('command', 'terminal-input-line');
    inputSpan.id = 'about-me-terminal-input';
    inputSpan.contentEditable = 'true';
    inputSpan.spellcheck = false;
    inputSpan.setAttribute('role', 'textbox');
    inputSpan.setAttribute('aria-label', 'terminal input');
    inputSpan.tabIndex = 0;
    inputSpan.addEventListener('focus', () => {
        inputSpan.style.outline = 'none';
    });

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'terminal-cursor';
    cursorSpan.id = 'about-me-terminal-cursor';
    cursorSpan.textContent = '|';

    lineArea.appendChild(promptSpan);
    lineArea.appendChild(dirSpan);
    lineArea.appendChild(dollarSpan);
    lineArea.appendChild(inputSpan);
    lineArea.appendChild(cursorSpan);

    container.appendChild(outArea);
    container.appendChild(lineArea);

    return {outArea, inputSpan, cursorSpan, lineArea};
}

function debounce(fn, wait = 120) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

function renderAsciiSeparator(sepId = 'terminal-separator', char = '-') {
    const sepEl = document.getElementById(sepId);
    if (!sepEl) return;

    sepEl.classList.add('terminal-separator');
    const meas = document.createElement('span');
    meas.style.visibility = 'hidden';
    meas.style.position = 'absolute';
    meas.style.whiteSpace = 'nowrap';
    
    const cs = getComputedStyle(sepEl);
    meas.style.fontFamily = cs.fontFamily || 'monospace';
    meas.style.fontSize = cs.fontSize || '1rem';

    meas.textContent = char.repeat(12);
    document.body.appendChild(meas);
    const charWidth = Math.max(1, meas.getBoundingClientRect().width / 12);
    document.body.removeChild(meas);

    const parent = sepEl.parentElement || sepEl;
    const available = Math.max(0, parent.clientWidth - 4);
    const count = Math.max(1, Math.floor(available / charWidth));

    sepEl.textContent = char.repeat(count);
}

function typeIntoTextNode(node, text, msPerChar = 15) {
    return new Promise(resolve => {
        let i = 0;
        let last = 0;
        
        function step(timestamp) {
            if (!last) last = timestamp;
            const elapsed = timestamp - last;
            const charsToAdd = Math.floor(elapsed / msPerChar);
            if (charsToAdd > 0) {
                const end = Math.min(i + charsToAdd, text.length);
                node.data += text.slice(i, end);
                i = end;
                last = timestamp;
            }
            if (i < text.length) requestAnimationFrame(step);
            else resolve();
        }
        requestAnimationFrame(step);
    });
}

async function appendAndTypeLine(outArea, lineText, msPerChar = 15) {
    const lineDiv = document.createElement('div');
    const text = document.createTextNode('');
    lineDiv.appendChild(text);
    outArea.appendChild(lineDiv);
    await typeIntoTextNode(text, lineText, msPerChar);
}

function clearOutput(outArea) {
    outArea.textContent = '';
    try { outArea.scrollTop = 0; } catch (e) {}
}

function printExecutedCommand(outArea, command) {
    const cmdLine = document.createElement('div');
    cmdLine.className = 'executed-command-line';

    const p = document.createElement('span');
    p.className = 'terminal-prompt';
    p.textContent = 'k.woj@Ubuntu:~';

    const d = document.createElement('span');
    d.className = 'directory';
    d.textContent = ' ~/repos/cv/build';
    const dollar = document.createElement('span');
    dollar.className = 'terminal-prompt';
    dollar.textContent = ' $ ';
    const cmd = document.createElement('span');
    cmd.className = 'command';
    cmd.textContent = command;
    
    cmdLine.appendChild(p);
    cmdLine.appendChild(d);
    cmdLine.appendChild(dollar);
    cmdLine.appendChild(cmd);
    outArea.appendChild(cmdLine);
}

async function runCommand(command, outArea, msPerChar = 5, opts = {clearOutput: true}) {
    if (opts.clearOutput) clearOutput(outArea);
    printExecutedCommand(outArea, command);

    await new Promise(res => setTimeout(res, executedCommandPreDelayMs));

    if (command === defaultCommand) {
        const hardOutput = commandsTree[defaultCommand];
        if (Array.isArray(hardOutput)) {
            for (const line of hardOutput) {
                await appendAndTypeLine(outArea, line, msPerChar);
            }
            return;
        }
    }

    const tokens = tokenizeCommand(command);
    if (tokens.length === 0) return;

    const rootToken = tokens[0];

    if (rootToken === 'echo') {
        const payload = tokens.slice(1).join(' ');
        await appendAndTypeLine(outArea, payload, msPerChar);
        return;
    }

    let node = commandsTree[rootToken];
    if (!node) {
        await appendAndTypeLine(outArea, `bash: command not found: ${command}`, msPerChar);
        await appendAndTypeLine(outArea, "- Type 'help' to see available commands.", msPerChar);
        return;
    }

    if (node._output && tokens.length === 1) {
        for (const line of node._output) {
            await appendAndTypeLine(outArea, line, msPerChar);
        }
    }

    let cur = node;
    for (let i = 1; i < tokens.length; i++) {
        const tk = tokens[i];

        if (tk === '&&') {
            const rest = tokens.slice(i + 1).join(' ').trim();
            if (rest.length > 0) {
                await runCommand(rest, outArea, msPerChar, {clearOutput: false});
            }
            return;
        }

        if (cur._children && cur._children[tk]) {
            cur = cur._children[tk];
            if (cur._output) {
                for (const line of cur._output) {
                    await appendAndTypeLine(outArea, line, msPerChar);
                }
            }
            continue;
        }

        if (cur._children && cur._children['*']) {
            cur = cur._children['*'];
            if (cur._output) {
                for (const line of cur._output) {
                    await appendAndTypeLine(outArea, line.replace('{arg}', tk), msPerChar);
                }
            continue;
            }
        }

        await appendAndTypeLine(outArea, `(unrecognized argument: ${tk})`, msPerChar);
        return;
    }
}

function wireInput(inputSpan, cursorSpan, outArea, lineArea) {
    inputSpan.addEventListener('keydown', async function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = inputSpan.textContent.trim();
            lineArea.style.display = 'none';
            inputSpan.contentEditable = 'false';
            inputSpan.textContent = '';
            await runCommand(command || defaultCommand, outArea);
            lineArea.style.display = '';
            inputSpan.contentEditable = 'true';
            inputSpan.focus();
        } else if (event.key === 'Tab') {
            // TODO
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            // TODO
        } else if (event.key == 'c' && event.ctrlKey) {
            event.preventDefault();
            inputSpan.textContent = '';
            await appendAndTypeLine(outArea, '^C', 15);
            inputSpan.focus();
        }
    });

    let visible = true;
    setInterval(() => {
        visible = !visible;
        cursorSpan.style.visibility = visible ? '' : 'hidden';
    }, 500);

    inputSpan.focus();
}

async function initTerminal() {
    const termContainer = document.getElementById('about-me-terminal');
    if (!termContainer) return;

    const {outArea, inputSpan, cursorSpan, lineArea} = createTerminalSkeleton(termContainer);

    try {outArea.scrollTop = 0; } catch (e) {}

    inputSpan.textContent = '';
    await typeIntoTextNode(inputSpan.firstChild || (function() { inputSpan.appendChild(document.createTextNode('')); return inputSpan.firstChild; })(), defaultCommand, 35);

    const cmd = inputSpan.textContent.trim();
    // initial animation
    lineArea.style.display = 'none';
    inputSpan.textContent = '';
    await runCommand(cmd, outArea, 5);

    try {outArea.scrollTop = 0; } catch (e) {}

    lineArea.style.display = '';
    termContainer.addEventListener('click', (ev) => {
        if (ev.target && ev.target.closest && ev.target.closest('a, button, input, textarea')) {
            return;
        }
        focusInputAtEnd(inputSpan);
    });

    wireInput(inputSpan, cursorSpan, outArea, lineArea);
}

window.addEventListener('DOMContentLoaded', async function() {
    document.getElementById("id-introduction").innerHTML = placeIntroductionBlock();
    document.getElementById("id-interrests").innerHTML = placeInterestsBlock();
    document.getElementById("id-speciality").innerHTML = placeSpecialtityBlock();
    document.getElementById("id-github").innerHTML = placeGitHubBlock();
    document.getElementById("about-me-code").innerHTML = renderCode(aboutMeCode, noSpaceCppKeywords);
    document.getElementById("id-age").innerHTML = Math.trunc(calculateDateDiffWithMonths(new Date(1999, 7, 27))[0]);
    const separator = this.document.getElementById("terminal-separator");
    if (separator) {
        renderAsciiSeparator('terminal-separator', '-');
        this.window.addEventListener('resize', debounce(() => renderAsciiSeparator('terminal-separator', '-'), 120));
    }
    // TODO - populate labels
    let labels = this.document.getElementById("id-label");
    calculateExperience();
    await initTerminal();
});

