import React, { useState } from "react";
import "./project.css";
import img from './images/luckyshrub.jpg';
import img1 from "./images/capstone.jpg";
import img2 from "./images/html.jpg";
import img3 from "./images/react.jpg";
import img4 from "./images/banner.jpg";
import img5 from "./images/banner2.jpg";
import img4_1 from "./images/Blog/blog1.png";
import img4_2 from "./images/Blog/blog2.png";
import img4_3 from "./images/Blog/blog3.png";
import img5_1 from "./images/photography/photo1.jpg";
import img5_2 from "./images/photography/photo2.png";
import img5_3 from "./images/photography/photo3.png";
import img6 from './images/game.jpg'
import img7 from './images/calculator.jpg';
import img8 from './images/todo.jpg';

function Projects() {
  const projects = [
    {
      title: "LuckyShrub Garden Firm Website",
      image: img,
      description:
        "Developed a responsive e-commerce site with React, featuring product listings, cart management, and a functional checkout process.",
      button: "https://lucky-shrub-garden-firm.netlify.app/",
    },
    {
      title: "Capstone Project",
      image: img1,
      description:
        "Developed a responsive React-based table booking system branded as Little Lemon.",
      button: "https://my-capstone.netlify.app/",
    },
    {
    title: "Portfolio Website",
    image: img3,
    description:
      "Modern React portfolio showcasing responsive design, interactive features, and form submission",
    button: "https://myreact-projects.netlify.app/",
  },
  {
    title: "Calculator App",
    image:img7,
    description: "A simple and functional React-based calculator with a clean, user-friendly interface.",
    button: "https://my-react-first-calculator.netlify.app/"
  },
    {
      title: "Tic-Tac-Toe Game",
      image: img6,
      description: "A responsive Tic-Tac-Toe game using HTML, CSS, and JavaScript with an interactive, user-friendly interface.",
      button: "https://my-first-tictactoe-game.netlify.app/",
    },
    {
      title: "Food Blog",
      image: img2,
      description:"A modern blog showcasing engaging articles with a clean design and responsive layout.",
      button: "https://little-lemon-blog.netlify.app/",
    },
    {
      title: "ToDo App",
      image: img8,
      description: "A minimalist To-Do app with an intuitive interface for managing tasks.",
      button: "https://my-1st-todo.netlify.app/"
    },
    {
      title: "Blog Website",
      image: img4,
      description: "A WordPress blog featuring a clean layout and integrated contact form using WPForms.",
      screenshots: [img4_1, img4_2, img4_3],
    },
    {
      title: "Photography Website",
      image: img5,
      description:
        "A WordPress photography website with a stunning gallery, banner, and contact form.",
      screenshots: [img5_1, img5_2, img5_3],
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleScreenshotNext = () => {
    setCurrentScreenshot((prevScreenshot) =>
      prevScreenshot + 1 < projects[currentIndex].screenshots.length
        ? prevScreenshot + 1
        : prevScreenshot
    );
  };

  const handleScreenshotPrevious = () => {
    setCurrentScreenshot((prevScreenshot) =>
      prevScreenshot - 1 >= 0 ? prevScreenshot - 1 : prevScreenshot
    );
  };

  const handleButtonClick = (project, index) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setShowModal(true);
      setCurrentIndex(index);
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
        {projects.map((project, index) => (
          <div className="card" key={index} onClick={() => handleButtonClick(project, index)}>
            <img src={project.image} alt={project.title} className="card-img" />
            <div className="card-content">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="carousel">
              <button
                className="arro left"
                onClick={handleScreenshotPrevious}
                disabled={currentScreenshot === 0}
              >
                &lt;
              </button>
              <img
                src={projects[currentIndex].screenshots[currentScreenshot]}
                alt={`Screenshot ${currentScreenshot + 1}`}
                className="modal-image"
              />
              <button
                className="arro right"
                onClick={handleScreenshotNext}
                disabled={
                  currentScreenshot ===
                  projects[currentIndex].screenshots.length - 1
                }
              >
                &gt;
              </button>
            </div>
          </div>
          <button id="modal_close" onClick={() => setShowModal(false)}>
            X
          </button>
        </div>
      )}
    </div>
  );
}


export default Projects;