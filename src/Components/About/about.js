import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './about.css';

function About() {
   const location = useLocation();

  useEffect(() => {
    document.title = "About Sobia Soomro | Frontend Developer";
  }, [location]);
  return (
    <div className="container">
      <div className="content">
        <h1 className="about-title">About Me</h1>
          <p className="about-para">
          I'm Sobia, a Front-End Developer specializing in developing intuitive, visually engaging websites that offer seamless user experiences. I transform designs into optimized, user-centric sites, with projects that showcase my abilities—including this portfolio, a visually compelling e-commerce site, an interactive restaurant site, and more. With strong proficiency in creating responsive websites, I prioritize delivering exceptional user experiences and am eager to collaborate with innovative teams and professionals to create impactful, user-centered solutions.
          </p>
        </div>
        <div className="skills">
          <h1 className="skill-heading">My Expertise</h1>
          <div className="skills-container">
          <div className="skill-box">ReactJS</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">GitHub</div>
          <div className="skill-box">UI/UX</div>
          <div className="skill-box">WordPress</div>
          <div className="skill-box">Figma</div>
        </div>
       </div>
       </div>
);
}

export default About;