import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./about.css";
import badge1 from "../../Assets/badges/1.png";
import badge2 from "../../Assets/badges/2.png";
import badge3 from "../../Assets/badges/3.png";
import badge4 from "../../Assets/badges/4.png";
import badge5 from "../../Assets/badges/5.png";
import badge6 from "../../Assets/badges/6.png";
import badge7 from "../../Assets/badges/7.png";
import badge8 from "../../Assets/badges/8.png";
import badge9 from "../../Assets/badges/9.png";

function About() {
  const location = useLocation();

  useEffect(() => {
    document.title = "About Me - React Developer";
  }, [location]);

  const badges = [
    { id: 1, src: badge1, alt: "Meta Front-End Developer Badge" },
    { id: 2, src: badge2, alt: "Cisco JavaScript Essentials 1 Badge" },
    { id: 3, src: badge3, alt: "Google Developer Program Membership Badge " },
    {
      id: 4,
      src: badge4,
      alt: "Women Techmakers Membership Badge from Google",
    },
    { id: 5, src: badge5, alt: "Google Developer Quiz Completion Badge" },
    {
      id: 6,
      src: badge6,
      alt: "Google Developer Learning Badge 1",
    },
    { id: 7, src: badge7, alt: "Google Developer Learning Badge 2" },
    {
      id: 8,
      src: badge8,
      alt: "Women in AI Summit Registration Badge from Google",
    },
    { id: 9, src: badge9, alt: "Google IO 2025 Registration Badge" },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="about-container">
      <div className="about-inner-container">
        <div className="about-content">
          <h1 className="about-main-title">💁‍♀️Meet Sobia</h1>
          <p className="about-para">
            Hi, I build fast, responsive websites that solve problems, help
            brands thrive, and reflect personality through storytelling. I love
            turning ideas into interactive experiences and creating digital
            products, from portfolios to projects that delight users, with a
            passion for bringing ideas to life on the web!
            <br />
            From specialization to real-world projects, I’ve learned what makes
            a digital presence effective. Knowing how hard it is to get noticed,
            I’m continuously leveraging my skills in a challenging ways and
            building:
            <br />
            <span className="about-unique-para">Lumina</span> - A portfolio to
            help web developers build their identity & unlock real opportunities{" "}
            <br />
            <span className="about-unique-para">My Goal:</span> To help web
            developers launch a fast, professional and custom portfolio that
            opens real opportunities!!
            <br />
            <Link to="/story" className="about-link hover-animate">
              Read My Story
            </Link>
          </p>
        </div>
        <div className="about-skills-container">
          <h1 className="about-skills-heading">My Expertise</h1>
          <div className="about-skills-boxes">
            <div className="about-skill-box hover-animate">React</div>
            <div className="about-skill-box hover-animate">JavaScript</div>
            <div className="about-skill-box hover-animate">HTML</div>
            <div className="about-skill-box hover-animate">CSS</div>
            <div className="about-skill-box hover-animate">GitHub</div>
            <div className="about-skill-box hover-animate">
              Responsive Design
            </div>
            <div className="about-skill-box hover-animate">
              Frontend Development
            </div>
            <div className="about-skill-box hover-animate">
              Digital Product Creation
            </div>
            <div className="about-skill-box hover-animate">UI/UX</div>
            <div className="about-skill-box hover-animate">WordPress</div>
            <div className="about-skill-box hover-animate">Figma</div>
          </div>
        </div>
        <div className="about-badges-container">
          <div className="about-badges-inner-conatiner">
            <h1 className="about-badges-heading">My Achievements</h1>
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedItem && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button id="close" onClick={closeModal}>
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
      </div>
    </div>
  );
}

export default About;
