import React from "react";
import Banner from './Components/Banner/banner';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';

function Home() {
    return (
        <div>
            <section id="banner">
                <Banner />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Home;


