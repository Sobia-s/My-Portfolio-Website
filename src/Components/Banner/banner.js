import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Import the Globe icon

export default function Banner() {
    return (
        <>
            <div className='banner-container'>
                <div className='banner-text'>
                    <h2 className='heading'>HELLO! I'M SOBIA SOOMRO</h2>
                    <p className='banner-para'>Specialized Front-End Developer | Passionate about Creating Outstanding User Experiences</p>
                </div>
                <div className='button-container'>
                    <Link to="/projects">
                        <button id="banner_button">See my work</button>
                    </Link>
                </div>
                <div className='banner-icons'>
                    <a href="https://github.com/Sobia-s" target="_blank" rel="noopener noreferrer" className='icons'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sobiasoomro/" target='_blank' rel='noopener noreferrer' className='icons'><FaLinkedin /></a>
                    <a href="https://g.dev/sobiasoomro" target='_blank' rel='noopener noreferrer' className='icons'><FaGlobe /></a> {/* Add the Globe icon */}
                </div>
            </div>
        </>
    );
}





