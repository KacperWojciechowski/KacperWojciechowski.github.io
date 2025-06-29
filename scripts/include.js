async function includeFile(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        return text;
    } catch (e) {
        console.error(`Failed to fetch ${path}:`, e);
        return `<div style="color:red;">Failed to load ${path}</div>`;
    }
}

async function executeInclude() {
    const includeItems = document.querySelectorAll('.include');
    includeItems.forEach(item => {
        const path = item.getAttribute('src');
        if (path)
        {
            includeFile(path).then(content => {
                item.innerHTML = content;
            });
        }
    })
}