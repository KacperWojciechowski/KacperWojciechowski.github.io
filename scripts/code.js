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

function renderTerminal(terminal) {
    let out = '';
    for (const line of Object.entries(terminal)) {
        const [style, content] = line;
        out += `<span style="terminal-span" class="${style}">${content}</span>`;
    }
    return out;
}

async function iterativelyRenderTerminal(elementId, content) {
    const element = this.document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found.`);
        return;
    }

    let index = 0;
    const delay = ms => new Promise(res => this.setTimeout(res, ms));
    let handle = this.setInterval((text) => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index++);
                //let lastIndex = element.innerHTML.lastIndexOf('</span>');
                //element.innerHTML = element.innerHTML.substring(0, lastIndex) + string.charAt(index++) + '</span>';
        }
        }, 35, content);
    await delay(content.length * 35 + 100);
    this.clearInterval(handle);
    element.innerHTML += '<br>';
}
