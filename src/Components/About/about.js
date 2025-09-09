import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import badges from "../../Data/badgesData";
import banner from "../../Assets/girl with laptop.webp";

function About() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = "About Me - React Frontend Developer | Sobia";
  }, []);

  const handleCardClick = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <main className="about-container">
      <section className="about-inner-container">
        <article className="about-content">
          <h1 className="about-main-title">
            <img
              src={banner}
              alt="Girl with laptop"
              className="about-img"
              fetchpriority="high"
            />
            Meet Sobia
          </h1>
          <p className="about-para">
            Hi, I build fast, responsive websites that solve problems, help
            brands thrive, and reflect personality through storytelling. I love
            turning ideas into interactive experiences and creating digital
            products, from portfolios to projects that delight users, with a
            passion for bringing ideas to life on the web!
          </p>
          <p className="about-para">
            From specialization to real-world projects, I’ve learned what makes
            a digital presence effective. Knowing how hard it is to get noticed,
            I’m continuously leveraging my skills in challenging ways and
            building:
          </p>
          <p className="about-para">
            <span className="about-unique-para">Lumina:</span> A portfolio to
            help web developers build their identity & unlock real opportunities
          </p>
          <p className="about-para">
            <span className="about-unique-para">My Goal:</span> To help web
            developers launch a fast, professional and custom portfolio that
            opens real opportunities!
          </p>
          <Link to="/story" className="about-link hover-animate">
            Read My Story
          </Link>
        </article>
      </section>

      {/* Skills Section */}
      <section className="about-skills-container">
        <h2 className="about-skills-heading">My Expertise</h2>
        <div className="about-skills-boxes">
          {[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Responsive Design",
            "Frontend Development",
            "GitHub",
            "UI/UX",
            "Figma",
            "WordPress",
            "Digital Product Creation",
          ].map((skill, index) => (
            <div className="about-skill-box hover-animate" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Badges Section */}
      <section className="about-badges-container">
        <div className="about-badges-inner-conatiner">
          <h2 className="about-badges-heading">My Achievements</h2>
          <div className="about-badges-card-container">
            {badges.map((item) => (
              <div
                className="about-badges-card"
                key={item.id}
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="about-badges-card-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Badge Preview */}
      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>
              X
            </button>
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default About;
