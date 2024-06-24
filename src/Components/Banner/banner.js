import React from 'react';
import { Link } from 'react-scroll';
import './banner.css';

export default function Banner() {
    return (
        <>
            <div className='banner-container'>
                <div className='banner-text'>
                    <h2 className='heading'>HELLO! I'M SOBIA SOOMRO</h2>
                    <p className='banner-para'>Certified Front-End Developer | Passionate about Creating Outstanding User Experiences</p>
                </div>
                <div className='button-container'>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                    >
                        <button id="banner_button">Projects</button>
                    </Link>
                </div>
            </div>
        </>
    );
}


