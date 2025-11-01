let menuContent = [
    {name: "About Me", img: "pictures/about-icon.svg", link: "html/about-me.html", is_mobile: false},
    {name: "Education", img: "pictures/education-icon.svg", link: "html/education.html", is_mobile: false},
    {name: "Experience", img: "pictures/experience-icon.svg", link: "html/experience.html", is_mobile: false},
    {name: "Skills", img: "pictures/skills-icon.svg", link: "html/skills.html", is_mobile: false},
    {name: "Projects", img: "pictures/projects-icon.svg", link: "html/projects.html", is_mobile: false},
    {name: "Research", img: "pictures/research-icon.svg", link: "html/research.html", is_mobile: false},
    {name: "Contact", img: "pictures/contact-icon.svg", link: "html/contact.html", is_mobile: true}
];

function createBanner(menuContent) {
    return `
        <nav class="menu-bar">
            ${menuContent.map(item => `
                <a href="${item.link}" target="content-frame" class="${item.is_mobile ? 'mobile-menu-button' : ''}">
                    <img src="${item.img}" alt="${item.name} Icon">${item.name}
                </a>
            `).join('')}
        </nav>
    `;
}