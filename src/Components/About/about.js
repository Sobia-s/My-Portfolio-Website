import React from 'react';
import './about.css';

export function About() {
  return (
    <div className="container">
      <h2 className="title">About Me</h2>
      <hr className="title-underline"/>
      <div className="content">
        <div className="aboutMe">
          <h3>Get to know me!</h3>
          <p>
           My name is Sobia, and I am dedicated to crafting user-friendly and aesthetically pleasing web interfaces. Through various courses and hands-on projects, I have established a robust foundation in developing responsive and engaging web applications that prioritize exceptional user experiences.
          </p>
          <p>
           I firmly believe in the importance of continuous learning and am eager to explore new technologies. With my solid skills, I am seeking an entry-level position where I can contribute to a dynamic development team and further hone my abilities as a developer.
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




