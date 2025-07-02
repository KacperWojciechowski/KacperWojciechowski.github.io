function renderCode(code) {
    out = '';
    const lineCount = code.length;
    for (let i = 0; i < lineCount; i++) {
        const line = code[i];
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

function renderTerminal(terminal) {
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