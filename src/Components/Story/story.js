import "./story.css";
import drawing1 from "../../Assets/Story-Images/img1.jpg";
import drawing2 from "../../Assets/Story-Images/img2.jpg";
import drawing3 from "../../Assets/Story-Images/img3.jpg";
import drawing4 from "../../Assets/Story-Images/img4.jpg";
import drawing5 from "../../Assets/Story-Images/img5.jpg";
import drawing6 from "../../Assets/Story-Images/img6.jpg";
import drawing7 from "../../Assets/Story-Images/img7.jpg";
import drawing8 from "../../Assets/Story-Images/img8.jpg";
import portfolio1 from "../../Assets/Story-Images/PortfolioPics/1.png";
import portfolio2 from "../../Assets/Story-Images/PortfolioPics/2.png";
import portfolio3 from "../../Assets/Story-Images/PortfolioPics/3.png";
import LuminaSection from "../LuminaCTA/LuminaSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Story() {
  const drawings = [
    drawing1,
    drawing2,
    drawing3,
    drawing4,
    drawing5,
    drawing6,
    drawing7,
    drawing8,
  ];

  const portfolioGallery = [portfolio1, portfolio2, portfolio3];

  const location = useLocation();

  useEffect(() => {
    document.title = "How I Became a Web Developer";
  }, [location]);

  return (
    <div className="story-container">
      <div className="story-inner-container">
        <h1 className="story-container-heading">
          How I Became a Web Developer
        </h1>

        <p className="story-container-para">
          From the start, I’ve been deeply curious and passionate about drawing
          and colors. I wanted to create every type of drawing, every scenery,
          every bird, every sketch, every colorful canvas. Each piece I
          completed filled me with happiness and pride. Here are some of my
          creations:
        </p>

        <div className="gallery">
          {drawings.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Drawing ${index + 1}`} />
            </div>
          ))}
        </div>

        <p className="story-container-para">
          But over time, something else began to capture my attention:
          <strong> Websites</strong>. I noticed how beautiful they looked, how
          interactive they felt, and I couldn’t stop wondering:
        </p>

        <ul className="story-container-list">
          <li>How are they built?</li>
          <li>How do they work?</li>
          <li>Who makes them?</li>
        </ul>

        <p className="story-container-para">
          That curiosity led me to Web Development. I started with WordPress,
          crafting simple sites I still cherish, but soon realized I wanted to
          go beyond designing and build them from scratch.
        </p>

        <p className="story-container-para">
          That’s when I chose frontend development. When I started, I explored
          HTML tags and how they build web pages. Adding colors with CSS excited
          me, and placing my first image made me proud: <i>I made this!</i> That
          joy carried me forward.
        </p>

        <p className="story-container-portfolio-para">
          My portfolio journey mirrors my growth, reflects my skills, brand, and
          personality!!
        </p>

        <div className="gallery">
          {portfolioGallery.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Portfolio ${index + 1}`} />
            </div>
          ))}
        </div>
        <p className="story-container-para">
          I love transforming ideas into interactive experiences and crafting
          digital products that come to life on the web. Knowing how hard it is
          to find opportunities without a strong portfolio, I thought: why not
          build one that helps other web developer?
        </p>
        <p className="story-container-portfolio-para">
          Lumina - a personal portfolio to help developers:
        </p>

        <ul className="story-container-list">
          <li>Launch quickly without starting from scratch</li>
          <li>Showcase projects with fast, responsive layouts</li>
          <li>Look polished with clean UI with light/dark mode</li>
          <li>Easily customize to fit your personal brand</li>
        </ul>
        <LuminaSection />

        <p className="story-container-para">
          So yeah, this is my journey: from drawing → to web development → to
          Lumina!
          <br />
        </p>
        <p className="story-container-para">
          Thanks for reading - You're great! 💙
        </p>
      </div>
    </div>
  );
}

export default Story;
