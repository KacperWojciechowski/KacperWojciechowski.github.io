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

window.addEventListener('DOMContentLoaded', function() {
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

