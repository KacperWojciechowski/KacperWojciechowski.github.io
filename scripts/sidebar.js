function constructSidebar() {
    return `
                <div class="profile-photo">
                    <img src="pictures/personal_photo.jpg" alt="Profile Photo">
                </div>
                <div class="label">
                    <img src="pictures/circuit-left.png" alt="Circuit Icon">
                    <p>Contact</p>
                    <img src="pictures/circuit-right.png" alt="Circuit Icon">
                </div>
                <div class="contact-item">
                    <span class="contact">Email:</span>
                    <span class="contact italized">k.woj.coding@gmail.com</span>
                </div>
                <div class="label">
                    <img src="pictures/circuit-left.png" alt="Circuit Icon">
                    <p>Social Media</p>
                    <img src="pictures/circuit-right.png" alt="Circuit Icon">
                </div><div class="social-media-container">
                    <ul>
                        <li>
                            <a href="https://github.com/kacperwojciechowski" target="_blank">
                                <img class="github-icon" src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=GitHub&logoColor=white" alt="GitHub">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kacper-wojciechowski-knik-uz/" target="_blank">
                                <img class="linkedin-icon" src="https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white" alt="LinkedIn">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.researchgate.net/profile/Kacper-Wojciechowski-2" target="_blank">
                                <img class="researchgate-icon" src="https://img.shields.io/badge/-ResearchGate-darkgreen?style=flat&logo=ResearchGate&logoColor=white" alt="ResearchGate">
                            </a>
                        </li>
                    </ul>
                </div>
    `;
}