import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";
import "./banner.css";
import LuminaSection from "../LuminaCTA/LuminaSection";
import banner from "../../Assets/girl with laptop.webp";

export default function Banner() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Hi, I'm Sobia | Frontend Web Developer";
  }, [location]);

  return (
    <>
      <div className="home-banner-container">
        <div className="home-banner-content">
          <h1 className="home-banner-heading">
            <img
              src={banner}
              alt="Girl with laptop"
              className="home-banner-img"
              fetchpriority="high"
            />
            Hi, I'm Sobia
          </h1>

          <p className="home-banner-para">
            A Frontend Web Developer, Turning Ideas into Thriving Digital Brands
            and Solving Problems through Code
          </p>
          <p className="home-banner-second-heading">
            React Developer | Creator of Digital Products
          </p>
          <Link to="/projects" className="home-banner-button hover-animate">
            See My Work
          </Link>
          <div className="home-banner-social-icons">
            <a
              href="https://github.com/Sobia-s"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="home-banner-icon" />
              <span className="home-banner-icon-label">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sobiasoomro/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="home-banner-icon" />
              <span className="home-banner-icon-label">LinkedIn</span>
            </a>
            <a
              href="https://g.dev/sobiasoomro"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className="home-banner-icon" />
              <span className="home-banner-icon-label">
                Google Dev Portfolio
              </span>
            </a>
            <a
              href="mailto:sobiasoomro97@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope className="home-banner-icon" />
              <span className="home-banner-icon-label">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="dream-project-container">
        <div className="dream-project-inner-container">
          <h2 className="dream-project-heading">
            Lumina: My Dream Project - Portfolio for Web Developers
          </h2>
          <LuminaSection />
        </div>
      </div>
    </>
  );
}
