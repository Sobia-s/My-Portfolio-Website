import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import logo from "./img.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
  setIsMenuOpen(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === "/portfolio" ? "active" : ""} onClick={closeMenu}>Portfolio</Link>
          </li>
          <li>
            <Link to="/certificates" className={location.pathname === "/certificates" ? "active" : ""} onClick={closeMenu}>Certificates</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>


        <div className="menu-button-wrapper">
          <Link to="/contact" className="hire-me-btn" onClick={closeMenu}>Hire Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;





