import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import logo from './logo.png';
import "./nav.css";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     handleResize();

    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener on component mount
        window.addEventListener('resize', handleResize);

        // Initial call to set initial mobile state
        handleResize();

        // Cleanup: remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    const closeMenu = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="nav-container">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>
            <img src={logo} alt="Logo" width={60} height={60} className="logo-img"/>
            <ul className={`nav-items ${isOpen ? "open" : ""}`}>
                <li><Link to="banner" smooth={true} duration={500} onClick={closeMenu}>HOME</Link></li>
                <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>ABOUT</Link></li>
                <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>PROJECTS</Link></li>
                <li><Link to="certificate" smooth={true} duration={500} onClick={closeMenu}>CERTIFICATES</Link></li>
                <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>CONTACT</Link></li>
                <li><a href="https://github.com/Sobia-s" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a></li>
            </ul>
        </nav>
    );
}
