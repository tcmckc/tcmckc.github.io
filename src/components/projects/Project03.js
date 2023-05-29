import { FaGithub } from 'react-icons/fa';

function Project03 () {
    return (
        <div className="project-item">
            <div>
                <img src="./../img/project-img04.jpg" alt="Project 3" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>Train delay information mobile application built using React Native.</p>
                </div>
                <div className="project-link flex-row">
                    <a href="https://github.com/tcmckc/Mobile-app-project" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                    </a>
                </div>
            </div>
        </div>   
    );
}

export default Project03;
