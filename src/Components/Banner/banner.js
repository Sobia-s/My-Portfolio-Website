import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
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
      <section className="home-banner-container">
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
            A Frontend Web Developer and the creator of Lumina, on a mission to
            make storytelling portfolios accessible to every developer
          </p>
          <Link to="/projects" className="home-banner-button hover-animate">
            See My Work
          </Link>
        </div>
      </section>

      <section className="dream-project-container">
        <div className="dream-project-inner-container">
          <h2 className="dream-project-heading">
            Lumina: My Dream Storytelling Portfolio for Developers
          </h2>
          <LuminaSection />
        </div>
      </section>
    </>
  );
}
