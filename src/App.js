import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Components/Project/project";
import Certificates from "./Components/Certification/certificate";
import { Nav } from "./Components/Navbar/nav";
import { Footer } from "./Components/footer/footer";
import Contact from './Components/Contact/contact';
import About from "./Components/About/about";
import ScrollToTop from "./scrolltoTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
