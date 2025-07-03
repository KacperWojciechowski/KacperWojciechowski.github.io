const noSpaceCppKeywords = [
    ";", ".", "<", ">", "(", ")", "()"
]

function buildOffset(char, length) {
    let out = '';
    for (let i = 0; i < length; i++) {
        out += char;
    }
    return out;
}

function renderCode(code, noSpaceKeywords) {
    out = '';
    const lineCount = code.length;

    let digits = lineCount.toString().length;
    for (let i = 0; i < lineCount; i++) {
        out += `<span class="comment">${(i+1).toString().padStart(digits, buildOffset('0', digits - i.toString().length))} |</span> `;
        
        const line = code[i];
        for (let j = 0; j < Object.entries(line).length; j++) {
            const [key, value] = Object.entries(line)[j];
            out += `<span class="${key}">${value}</span>`;
            if ((noSpaceKeywords && noSpaceKeywords.includes(value)) || (noSpaceKeywords && j+1 < Object.entries(line).length &&  noSpaceKeywords.includes(Object.entries(line)[j+1][1]))) {
            }
            else if (j < Object.entries(line).length - 1) {
                out += ' ';
            }
        }
        if (i < lineCount - 1) {
            out += '<br>';
        }
    }
    return out;
}

async function renderTerminal(terminal) {
    out = '';
    const lineCount = terminal.length;
    for (let i = 0; i < lineCount; i++) {
        line = terminal[i];
        for (let j = 0; j < Object.entries(line).length; j++) {
            const [key, value] = Object.entries(line)[j];
            out += `<span class="${key}">${value}</span>`;
            if (j < Object.entries(line).length - 1) {
                out += ' ';
            }
        }
        if (i < lineCount - 1) {
            out += '<br>';
        }
    }
    return out;
}

function iterativelyRenderTerminal(document, elementId, terminalContent) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found.`);
        return;
    }

    Object.entries(terminalContent).forEach(async ([style, content]) => {
        element.innerHTML += `<span class="${style}">`;
        let index = 0;
        const delay = ms => new Promise(res => this.setTimeout(res, ms));
        let handle = this.setInterval(() => {
            if (content.length > index)
            {
                element.innerHTML += content[index];
                index++;
            }
        }, 100);
        await delay(content.length * 100 + 100);
        this.clearInterval(handle);
        element.innerHTML += `</span>`
    })
}