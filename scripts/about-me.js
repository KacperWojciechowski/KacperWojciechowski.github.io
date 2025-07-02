const aboutMeCode = [
    { "keyword" : "template", "brace" : "&lt;", "" : "typename", "type" : "Company", "" : "" },
    //{ "keyword" : "template", "brace" : "&lt;", "keyword" : "typename", "type" : "Company", "brace" : "&gt;" },
    { "keyword" : "class", "type" : "KacperWojciechowski", "brace" : "{" },
    { "keyword" : "public:" },
    { "type code-tab" : "void", "function" : "introduce", "brace" : "()", "keyword" : ";" },
    { "type code-tab" : "void", "function" : "hire", "brace" : "()", "keyword" : ";" },
    { "keyword" : "private:" },
    { "keyword code-tab" : "auto", "variable" : "occupation", "keyword" : "=", "string" : "\"Software Engineer\"" },
    { "keyword code-tab" : "auto", "variable" : "specialization", "keyword" : "=", "string" : "\"Cpp, SW Architecture\"" },
    { "keyword code-tab" : "auto", "variable" : "degree", "keyword" : "=", "string" : "\"Master's in Computer Science\"" },
    { "keyword code-tab" : "auto", "variable" : "experience", "keyword" : "="},
    { "function code-double-tab" : "std::chrono::duration_cast", "brace" : "&lt;" },
    { "type code-tripple-tab" : "std::chrono::years", "brace" : "&gt;(", "" : "<span id=\"id-experience-length\"></span>", "brace" : ")", "keyword" : ".", "function" : "count", "brace" : "()", "keyword" : ";" },
    { "type" : "std::weak_ptr", "brace" : "&lt;", "type" : "Company", "brace" : "&gt;", "variable" : "employer", "keyword" : ";" },
    { "brace" : "}", "keyword" : ";" },
]

const terminalSeparator = [
    { "comment" : "------------------------------------------------------"}
]

const terminalContent = [
    { "terminal-prompt" : "Ubuntu(~/repos/cv/build)$", "command" : "g++ -o out main.cpp kacperwojciechowski.cpp && ./out" },
    { "terminal-output" : "Hello, my name is Kacper. Interrested in hiring me, aren't you ?" },
    { "terminal-prompt" : "Ubuntu(~/repos/cv/build)$", "cursor" : "<span id=\"terminal-cursor\">|</span>" }
]

window.addEventListener('DOMContentLoaded', function() {
    this.document.getElementById("about-me-code").innerHTML = renderCode(aboutMeCode);
    this.document.getElementById("terminal-separator").innerHTML = renderTerminal(terminalSeparator);
    this.document.getElementById("about-me-terminal").innerHTML = renderTerminal(terminalContent);
});