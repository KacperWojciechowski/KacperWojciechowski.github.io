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
            thead += '<tr class="superlabel">';
            Object.entries(superlabels).forEach(([label, sublabels]) => {
                thead += `<th colspan="${Object.entries(sublabels).length}">${label}</th>`;
            });
            thead += '</tr>'
        }

        thead += '<tr class="sublabel">';
        tbody += '<tr>';

        Object.entries(superlabels).forEach(([, sublabels]) => {
            Object.entries(sublabels).forEach(([label, values]) => {
                thead += `<th>${label}</th>`;
                tbody += `<td><ul>${values.map(value => `<li style="margin: .6rem 0;">${value}</li>`).join('')}</ul></td>`;
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
                <tr class="sublabel">
                    <th>Subject</th><th>Skills</th>
                </tr>   
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>`;
}

window.addEventListener('DOMContentLoaded', function() {
    this.document.getElementById("prog-lang-table-desktop").innerHTML = renderLabel("Programming:") + renderHorizontalTable(programmingLanguages);
    this.document.getElementById("embedded-table-desktop").innerHTML = renderLabel("Embedded Systems:") + renderHorizontalTable(embedded);
    this.document.getElementById("tools-table-desktop").innerHTML = renderLabel("Tools:") + renderHorizontalTable(tools);
    this.document.getElementById("knowhow-table-desktop").innerHTML = renderLabel("Know-How:") + renderHorizontalTable(knowhow);

    this.document.getElementById("prog-lang-table-mobile").innerHTML = renderLabel("Programming:") + renderVerticalTable(programmingLanguages);
    this.document.getElementById("embedded-table-mobile").innerHTML = renderLabel("Embedded Systems:") + renderVerticalTable(embedded);
    this.document.getElementById("tools-table-mobile").innerHTML = renderLabel("Tools:") + renderVerticalTable(tools);
    this.document.getElementById("knowhow-table-mobile").innerHTML = renderLabel("Know-How:") + renderVerticalTable(knowhow);
})
