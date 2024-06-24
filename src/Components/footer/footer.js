import React from 'react';
import './footer.css';
import {FaGithub} from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="footer-heading">SOBIA SOOMRO</h2>
                    <p>Certified Front-End Developer | Passionate about Creating Outstanding User Experiences</p>
                </div>
                <div className="footer-right">
                    <h2 className="footer-heading">SOCIAL</h2>
                    <div className="social-icons">
                        <a href="https://github.com/Sobia-s" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright {new Date().getFullYear()}. Made by <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Sobia Soomro</a></p>
            </div>
        </footer>
    );
}



