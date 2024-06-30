import React, { useState } from "react";
import './project.css';
import img1 from './images/capstone.png';
import img2 from './images/html.png';
import img3 from './images/react.png';
import img4 from './images/Blog/banner.png';
import img4_1 from './images/Blog/blog1.png';
import img4_2 from './images/Blog/blog2.png';
import img4_3 from './images/Blog/blog3.png';
import img5 from './images/photography/banner2.png';
import img5_1 from './images/photography/photo1.jpg';
import img5_2 from './images/photography/photo2.png';
import img5_3 from './images/photography/photo3.png';

export function Projects() {
    const projects = [
        {
            title: "React Capstone Project",
            technologies: "React, JSX, JavaScript, and CSS",
            image: img1,
            description: "This project is built with React and branded as Little Lemon. It addresses issues with the table booking system, providing a fully functional reservation feature and a responsive, aesthetically pleasing design.",
            button: "https://my-capstone.netlify.app/"
        },
        {
            title: "HTML, CSS, and JavaScript Projects",
            technologies: "HTML, CSS, JavaScript",
            image: img2,
            description: "Developed two static web pages with responsive layouts and appealing visuals using HTML and CSS. Additionally, created a dynamic Tic-Tac-Toe game with HTML, CSS, and JavaScript, demonstrating foundational skills in web development and interactive design.",
            button: "https://1st-html-css.netlify.app/"
        },
        {
            title: "React Projects",
            technologies: "React, JSX, JavaScript, and CSS",
            image: img3,
            description: (
              <>
                <strong>Calculator:</strong> A user-friendly calculator for basic arithmetic operations.<br />
                <strong>To-Do App:</strong> A task management application for adding and deleting tasks efficiently.<br />
                <strong>Personal Portfolio:</strong> A modern, responsive portfolio using Chakra UI, showcasing projects and contact details.
              </>
            ),
            "button": "https://myreact-projects.netlify.app/"
        },
        {
            title: "Blog Website",
            technologies: "WordPress",
            image: img4,
            description: "This blog website is built on WordPress, using plugins and themes to enhance functionality and design. It highlights blog posts and includes a contact form made with WPForms. The Astra theme provides a clean look, while Elementor customizes the layout.",
            screenshots: [img4_1, img4_2, img4_3]
        },
        {
            title: "Photography Website",
            technologies: "WordPress",
            image: img5,
            description: "This photography website is built on WordPress, utilizing plugins and themes to enhance its functionality and design. It features a beautiful banner, a stunning gallery created with Elementor and the OceanWP theme, and a contact form made with WPForms.",
            screenshots: [img5_1, img5_2, img5_3]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 < projects.length ? prevIndex + 1 : prevIndex));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex));
    };

    const handleScreenshotNext = () => {
        setCurrentScreenshot(prevScreenshot => (prevScreenshot + 1 < projects[currentIndex].screenshots.length ? prevScreenshot + 1 : prevScreenshot));
    };

    const handleScreenshotPrevious = () => {
        setCurrentScreenshot(prevScreenshot => (prevScreenshot - 1 >= 0 ? prevScreenshot - 1 : prevScreenshot));
    };

    const handleButtonClick = (project) => {
        if (project.screenshots) {
            setShowModal(true);
            setCurrentScreenshot(0);
        } else {
            window.open(project.button, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="project">
            <h2 className="p-title">Projects</h2>
            <hr className="title-underline" />
            <div className="p-container">
                <button
                    id="arrow-button-left"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                >
                &lt;
                </button>
                <div className="p-list">
                    {projects.slice(currentIndex, currentIndex + 1).map((project, index) => (
                        <div className="p-item" key={index}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="p-image"
                            />
                            <div className="p-content">
                                <h3>{project.title}</h3>
                                <h4>Technologies: {project.technologies}</h4>
                                <p>{project.description}</p>
                                <button onClick={() => handleButtonClick(project)} id="project_button">View Project</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    id="arrow-button-right"
                    onClick={handleNext}
                    disabled={currentIndex >= projects.length - 1}
                >
                    &gt;
                </button>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="carousel">
                            <button className="arro left" onClick={handleScreenshotPrevious} disabled={currentScreenshot === 0}>&lt;</button>
                            <img src={projects[currentIndex].screenshots[currentScreenshot]} alt={`Screenshot ${currentScreenshot + 1}`} className="modal-image" />
                            <button className="arro right" onClick={handleScreenshotNext} disabled={currentScreenshot === projects[currentIndex].screenshots.length - 1}>&gt;</button>
                        </div>
                    </div>
                    <button id="modal_close" onClick={() => setShowModal(false)}>X</button>
                </div>
            )}
        </div>
    );
}
