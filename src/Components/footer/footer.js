import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                 <span>© {new Date().getFullYear()}</span>
                    <a href="https://sobia-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer-name">
                        SOBIA SOOMRO
                    </a>
                </div>
                <div className="footer-right">
                    <Link to="/about" className="page-link" onClick={scrollToTop}>About</Link>
                    <Link to="/projects" className='page-link'onClick={scrollToTop}>Portfolio</Link>
                    <Link to="/certificates" className='page-link' onClick={scrollToTop}>Certifications</Link>
                    <Link to="/contact" className='page-link' onClick={scrollToTop}>Contact</Link>
                </div>
            </div>
        </footer>
    );
}