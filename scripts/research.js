const researchEntries = [
    {
        title: "Methods of Implementing a Network Interface in IoT Modules",
        link: "https://www.researchgate.net/publication/390465807_Methods_of_implementing_a_network_interface_in_IoT_modules",
        coAuthors: [],
        abstract: `This paper aims to present the reader with known ways of implementing a network interface in IoT modules.
                    The problem is established by describing the necessity for providing the Internet access to IoT devices, and subsequently describing the structure
                    of the TCP/IP stack and its protocols. Subsequent chapters browse available hardware and software solutions and provide a detailed step by step examples of
                    implementing the interface for a selected STM32 Nucleo platform and an echo server functionality for the testing purposes. Finally, the paper presents and discusses results
                    of basic conectivity, ping roundtrip and echo functionality tests, and concludes aspects noticed during the entire lenght of the research.`,
        keywords: ["Internet of Things", "IoT", "C", "Ethernet", "Wi-Fi", "TCP/IP", "STM32"]
    },
    {
        title: "Comparative Analysis of Machine Learning Libraries in C++ for Application in Biostatistics",
        link: "https://www.researchgate.net/publication/382162127_Comparative_Analysis_of_Machine_Learning_Libraries_in_C_for_Applications_in_Biostatistics",
        coAuthors: [],
        abstract: `This paper aims to discuss similarities and differences between libraries for machine learning available for the C++ language, and test their prowess
                    using a biostatistics dataset and selected sample model types. It starts by explaining the rationale behind creating libraries for tasks such as machine learning and
                    discusses used datasets characteristics and selected model types, trained in a professional statistics and machine learning software JMP, as a control for further experiments.
                    After dedicating a separate chapter for description and use examples of each library, the paper compares available functionalities and achieved experiment results between them, finally
                    drawing conclusions based on achieved models accuracy metrics, available resources, and effort required to use them.`,
        keywords: ["Library", "Framework", "C++", "JMP", "DLib", "Shogun", "Shark-ML", "Machine Learning", "Support Vector Machine", "SVM", "Linear Regression", "Loss Function", "ROC curve", "AUC"],
    },
    {
        title: "Work in progress...",
        link: "",
        coAuthors: [],
        abstract: "Work in progress...",
        keywords: ["Software Architecture", "Programming Paradigms", "Good Practices", "System Design", "Software Design", "C++"],
    }
]

function renderSingleResearchEntry(entry) {
    return `<div class="content">
                <h2><i>${entry["title"]}</i></h2>
                <hr>
                <div class="note green">
                    <img class="note-icon" src="../pictures/study.svg">
                    Available at
                    ${entry["link"].length != 0 ? 
                        `<a href="${entry["link"]}" target="_blank">
                        <img class="researchgate-icon" style="margin: 0 .5vh" src="https://img.shields.io/badge/-ResearchGate-darkgreen?style=flat&logo=ResearchGate&logoColor=white" alt="ResearchGate"></a>` 
                        : `N/A`}
                </div>
                <p style="padding-left: .2rem;"><strong>Co-authors:</strong></p>
                <p>${entry["coAuthors"].length > 0 ? entry["coAuthors"].join(', ') : '-'}</p>
                <p style="padding-left: .2rem;"><strong>Abstract: </strong></p>
                <p>${entry["abstract"]}</p>
                <div class="note blue desktop">
                    <img class="note-icon" src="../pictures/blue-pin.svg">
                    <b>Keywords:</b> <i>${entry["keywords"].join(', ')}</i>
                </div>
                <div class="note blue mobile">
                    <img class="note-icon" src="../pictures/blue-pin.svg">
                    <b>Keywords:</b><br> ${entry["keywords"].map(keyword => `<i style="margin-left: .5rem">- ${keyword};</i><br>`).join('')}
                </div>
            </div>`;
}

function renderResearchEntries() {
    return `${researchEntries.map(renderSingleResearchEntry).join('')}`;
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('id-research-container').innerHTML = renderResearchEntries();
});