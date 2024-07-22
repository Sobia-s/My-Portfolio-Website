import React from 'react';
import './about.css';

function About() {
  return (
    <div className="container">
      <h2 className="title">About Me</h2>
      <hr className="title-underline"/>
      <div className="content">
        <div className="aboutMe">
          <h3>Get to know me!</h3>
          <p>
            My name is Sobia, and I am certified in creating user-friendly and visually appealing web interfaces. Through extensive coursework and practical projects, I have developed a strong proficiency in building responsive and engaging web applications that prioritize excellent user experiences.
          </p>
          <p>
          I am eager to continuously learn and explore emerging technologies. I am seeking an entry-level position to contribute to a dynamic team and refine my development skills.
          </p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div className="Slist">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>WordPress</span>
            <span>GitHub</span>
            <span>JEST</span>
            <span>Responsive Design</span>
            <span>UI/UX</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}



export default About;