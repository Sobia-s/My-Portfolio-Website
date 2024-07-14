import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                 <div className="footer-left">
                     <h3 id="footer-name">SOBIA SOOMRO</h3>
                     <p className="footer-para">Certified Front-End Developer | Passionate about Creating Outstanding User Experiences</p>
                 </div>
                 <div className="footer-right">
                     <h3 id="footer-socials">SOCIAL</h3>
                     <div className="social-icons">
                         <a href="https://github.com/Sobia-s" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                         <a href="https://www.linkedin.com/in/sobiasoomro/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                     </div>
                 </div>
             </div>
             <div className="footer-bottom">
                 <p>© Copyright {new Date().getFullYear()}. Made by <a href="https://sobia-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Sobia Soomro</a></p>
             </div>
         </footer>
    );
}








