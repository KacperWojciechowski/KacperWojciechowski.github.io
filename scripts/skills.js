function renderHorizontalTable(table) {
    let theadLayers = [];
    let tbodyLayers = [];

    Object.entries(table).forEach(layer => {
        let thead = '<thead>';
        let tbody = '<tbody>';
        const [, superlabels] = layer;
        
        const [superlabel, ] = Object.entries(superlabels).at(0);
        if (superlabel != 0)
        {
            thead += '<tr>';
            Object.entries(superlabels).forEach(([label, sublabels]) => {
                thead += `<th colspan="${Object.entries(sublabels).length}">${label}</th>`;
            });
            thead += '</tr>'
        }

        thead += '<tr>';
        tbody += '<tr>';

        Object.entries(superlabels).forEach(([, sublabels]) => {
            Object.entries(sublabels).forEach(([label, values]) => {
                thead += `<th>${label}</th>`;
                tbody += `<td><ul>${values.map(value => `<li>${value}</li>`).join('')}</ul></td>`;
            });
        });

        thead += '</tr></thead>';
        tbody += '</tr></tbody>';
        theadLayers.push(thead);
        tbodyLayers.push(tbody);
    });
        
    let out = "";
    for (let index = 0; index < theadLayers.length; index++)
    {
        out += theadLayers.at(index);
        out += tbodyLayers.at(index);
    }
    return `<table>${out}</table>`;
}

function renderVerticalTable(table)
{
    let rows = '';
        
    Object.entries(table).forEach(layer => {
        const [, superlabels] = layer;
        Object.entries(superlabels).forEach(([, sublabels]) => {
            Object.entries(sublabels).forEach(([label, values]) => {
                rows += `<tr><td>${label}</td>`;
                rows += `<td><ul>${values.map(value => `<li>${value}</li>`).join('')}</ul></td></tr>`;
            });
        });
    });
    return `
        <table>
            <thead>
                <th>Subject</th><th>Skills</th>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>`;
}

window.addEventListener('DOMContentLoaded', function() {
    this.document.getElementById("prog-lang-table-desktop").innerHTML = '<h2>Programming languages:</h2>' + renderHorizontalTable(programmingLanguages);
    this.document.getElementById("embedded-table-desktop").innerHTML = '<h2>Embedded systems:</h2>' + renderHorizontalTable(embedded);
    this.document.getElementById("tools-table-desktop").innerHTML = '<h2>Tools:</h2>' + renderHorizontalTable(tools);
    this.document.getElementById("knowhow-table-desktop").innerHTML = '<h2>Know-how:</h2>' + renderHorizontalTable(knowhow);


    this.document.getElementById("prog-lang-table-mobile").innerHTML = '<h2>Programming languages:</h2>' + renderVerticalTable(programmingLanguages);
    this.document.getElementById("embedded-table-mobile").innerHTML = '<h2>Embedded systems:</h2>' + renderVerticalTable(embedded);
    this.document.getElementById("tools-table-mobile").innerHTML = '<h2>Tools:</h2>' + renderVerticalTable(tools);
    this.document.getElementById("knowhow-table-mobile").innerHTML = '<h2>Know-how:</h2>' + renderVerticalTable(knowhow);
})