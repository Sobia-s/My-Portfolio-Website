import React from "react";
import Banner from './Components/Banner/banner';
import { About } from "./Components/About/about";
import { Certificate } from './Components/Certification/certificate';
import { Projects } from "./Components/Project/project";
import Contact from "./Components/Contact/contact";
import { Nav } from "./Components/Navbar/nav";
import { Footer } from "./Components/footer/footer";

export function Home() {
    return (
        <>
            <Nav />
            <section id="banner"><Banner /></section>
            <section id="about" style={{ paddingTop: '80px' }}><About /></section>
            <section id="projects" style={{ paddingTop: '80px' }}><Projects /></section>
            <section id="certificate" style={{ paddingTop: '80px' }}><Certificate /></section>
            <section id="contact" style={{ paddingTop: '80px' }}><Contact /></section>
            <section id="footer" style={{ paddingTop: '80px' }}><Footer /></section>
        </>
    );
}
