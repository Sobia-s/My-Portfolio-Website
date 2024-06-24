import React, { useState } from 'react';
import './certificate.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img5.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import badge1 from './Badges/meta.png';
import badge2 from './Badges/cisco.png';


export function Certificate() {

  const certificates = [
    { src: img1, alt: 'Meta Front-End Developer Certificate By Coursera' },
    { src: img2, alt: 'JavaScript Essentials 1 By Cisco Networking Academy' },
    { src: img3, alt: 'Build a Full Website using WordPress by Coursera' },
    { src: img4, alt: 'Increase SEO Traffic with WordPress by Coursera' },
    { src: img5, alt: 'Introduction to Microsoft Excel by Coursera' },
    { src: img6, alt: 'Digital Literacy by DigiSkills Training Program' },
    { src: img7, alt: 'Communication & Soft Skills by DigiSkills Training Program' },
    { src: img8, alt: 'Freelancing by DigiSkills Training Program' },
    { src: img9, alt: 'WordPress by DigiSkills Training Program' }
  ];

  const badges = [
    { src: badge1, alt: 'Meta Front-End Developer by Coursera' },
    { src: badge2, alt: 'JavaScript Essentials 1 By Cisco Networking Academy' }
  ];


  const [activeTab, setActiveTab] = useState('certificates');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const items = activeTab === 'certificates' ? certificates : badges;

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setShowModal(true);
  };

  return (
    <>
     <h1 id="certificate_heading">Certificates</h1>
      <hr className="certificate-underline" />
    <div className="certificate-container">
      <p>Displayed below are my earned certificates and badges.</p>
      <button onClick={() => handleTabClick('certificates')} className="certificate_button">Certificates</button>
      <button onClick={() => handleTabClick('badges')} className="certificate_badge">Badges</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="carousel">
              <button className="arrow left" onClick={handlePrevious} disabled={currentIndex === 0}>&lt;</button>
              <img src={items[currentIndex]} alt={activeTab} />
              <button className="arrow right" onClick={handleNext} disabled={currentIndex === items.length - 1}>&gt;</button>
            </div>
          </div>
          <button id="close" onClick={() => setShowModal(false)}>X</button>
        </div>
      )}
    </div>
  </>
  );
};

