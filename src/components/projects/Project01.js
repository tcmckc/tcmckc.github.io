import { FaGithub } from 'react-icons/fa';

function Project01 () {
    return (
        <div className="project-item">
            <div>
                <img src="./../img/project-img01.png" alt="Project 1" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>Text Editor web application is built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create a new document,save it, update a existing document, export a document to PDF, and share a document with others by sending an invitation email.</p>
                </div>
                <div className="project-link flex-row">
                    <a href="https://github.com/tcmckc/Textediter-frontend" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                        <p>frontend</p>
                    </a>
                    <a href="https://github.com/tcmckc/Textediter-backend" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                        <p>backend</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project01;
