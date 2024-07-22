import React, { useState } from 'react';
import './certificate.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import badge1 from './Badges/meta.png';
import badge2 from './Badges/cisco.png';

export function Certificate() {
  const certificates = [
    { id: 1, src: img1, alt: 'Meta Front-End Developer Professional Certificate By Coursera' },
    { id: 2, src: img2, alt: 'JavaScript Essentials 1 By Cisco Networking Academy' },
    { id: 3, src: img3, alt: 'Build a Full Website using WordPress by Coursera' },
    { id: 4, src: img4, alt: 'Increase SEO Traffic with WordPress by Coursera' },
    { id: 5, src: img5, alt: 'Introduction to Microsoft Excel by Coursera' },
    { id: 6, src: img6, alt: 'Digital Literacy by DigiSkills Training Program' },
    { id: 7, src: img7, alt: 'Communication & Soft Skills by DigiSkills Training Program' },
    { id: 8, src: img8, alt: 'Freelancing by DigiSkills Training Program' },
    { id: 9, src: img9, alt: 'WordPress by DigiSkills Training Program' }
  ];

  const badges = [
    { id: 10, src: badge1, alt: 'Meta Front-End Developer by Coursera' },
    { id: 11, src: badge2, alt: 'JavaScript Essentials 1 By Cisco Networking Academy' }
  ];

  const [activeTab, setActiveTab] = useState('certificates');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="certificate-container">
      <h1 id="certificate_heading">Certificates</h1>
      <hr className="certificate-underline" />
      <p>Presented below are my certifications and badges.</p>
      <button onClick={() => handleTabClick('certificates')} className={`certificate_button ${activeTab === 'certificates' ? 'active' : ''}`}>
        Certificates
      </button>
      <button onClick={() => handleTabClick('badges')} className={`certificate_badge ${activeTab === 'badges' ? 'active' : ''}`}>
        Badges
      </button>

      <div className='c-container'>
        {(activeTab === 'certificates' ? certificates : badges).map((item) => (
          <div className='certificate-card' key={item.id} onClick={() => handleCardClick(item)}>
            <img src={item.src} alt={item.alt} className='card-image' />
            <div className='card-content'>
              <p className='certificate-title'>{item.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button id="close" onClick={closeModal}>X</button>
            <img src={selectedItem.src} alt={selectedItem.alt} className="modal-image" />
            <p className="certificate-title">{selectedItem.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;











