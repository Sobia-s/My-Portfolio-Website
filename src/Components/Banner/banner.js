import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';
import img from './banner.png';
import './banner1.css';
import './banner2.css';
import img1 from '../Project/images/luckyshrub.jpg';
import img2 from '../Project/images/capstone.jpg';
import img3 from '../Project/images/react.jpg';

export default function Banner() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Sobia Soomro | Frontend Developer";
    }, [location]);

    return (
        <>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-image">
                        <img src={img} alt="A visual representation of my achievements" />
                    </div>
                    <div className="banner-intro-text">
                        <h1 id="banner-heading">HELLO WORLD</h1>
                        <h2 className="banner-name">My name is Sobia</h2>
                        <p className="banner-para">and I'm a Frontend Developer</p>
                        <div className="social-icons">
                            <a href="https://github.com/Sobia-s" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                                <FaGithub className="icon" />
                                <span className="icon-label">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/sobiasoomro/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                                <FaLinkedin className="icon" />
                                <span className="icon-label">LinkedIn</span>
                            </a>
                            <a href="https://g.dev/sobiasoomro" target="_blank" rel="noreferrer" aria-label="Google Developer Profile">
                                <FaGlobe className="icon" />
                                <span className="icon-label">Google Developer Profile</span>
                            </a>
                            <a href="mailto:sobiasoomro97@gmail.com" target="_blank" rel="noreferrer" aria-label="Send Email">
                                <FaEnvelope className="icon" />
                                <span className="icon-label">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="featured-projects-section">
                <div className="projects-intro-section">
                    <div className="line-container">
                        <div className="line"></div>
                        <span className="projects-intro-text">SOME OF MY LATEST WORK</span>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="projects-container">
                    <Link to={{ pathname: "https://lucky-shrub-garden-firm.netlify.app/" }} target="_blank" className="project-link">
                        <div className="cards">
                            <img src={img1} alt="E-Commerce Website project" className="card-img" />
                            <div className="card-content">
                                <h3 className="project-title">E-Commerce Website</h3>
                                <p className="project-description">
                                    A fully functional E-Commerce platform built with React, showcasing a stunning design and a fully integrated checkout process.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "https://my-capstone.netlify.app/" }} target="_blank" className="project-link">
                        <div className="cards">
                            <img src={img2} alt="Restaurant website project" className="card-img" />
                            <div className="card-content">
                                <h3 className="project-title">Restaurant Website</h3>
                                <p className="project-description">
                                    A responsive React-based platform for table reservations, featuring dynamic booking and an appealing, user-friendly layout.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "https://myreact-projects.netlify.app/" }} target="_blank" className="project-link">
                        <div className="cards">
                            <img src={img3} alt="Portfolio website project" className="card-img" />
                            <div className="card-content">
                                <h3 className="project-title">Portfolio Website</h3>
                                <p className="project-description">
                                    A modern React-based portfolio featuring functional form submission, a stunning responsive design, and intuitive navigation.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
