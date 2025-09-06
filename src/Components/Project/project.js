import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./project.css";
import { projects } from "../../Data/projectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const location = useLocation();

  useEffect(() => {
    document.title = "My Projects – React & Frontend Development";
  }, [location]);

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="project-container">
      <div className="project-inner-container">
        <div className="project-content">
          <h2 className="project-main-title">
            From concept to code, I've built web projects that solve problems
            and delight users
          </h2>
        </div>
        <div className="project-card-container">
          {projects.map((project, index) => (
            <div className="project-cards" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-card-img"
                loading="lazy"
              />

              <div className="project-card-content">
                <p className="project-card-description">
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="project-tech-buttons">
                    {project.technologies.map((tech, i) => (
                      <button key={i} className="tech-btn">
                        {tech}
                      </button>
                    ))}
                  </div>
                )}

                <div className="card-links">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link left-link"
                    >
                      See Code{" "}
                      <FaGithub className="project-icon hover-animate" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link right-link"
                    >
                      {project.linkText || "Live"}
                      <FiExternalLink className="project-icon" />
                    </a>
                  )}

                  {project.canvaImage && (
                    <button
                      onClick={() => openModal(project)}
                      className="card-link left-link"
                    >
                      See Website
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                X
              </button>
              <img
                src={selectedProject.canvaImage}
                alt="Website Preview"
                className="modal-image"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
