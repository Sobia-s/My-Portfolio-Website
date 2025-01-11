import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import img10 from './images/img10.png';
import img11 from  './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';

export function Certificate() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Certificates of Sobia Soomro | Frontend Developer";
  }, [location]);

  const certificates = [
      { id: 1, src: img1, alt: 'Meta Front-End Developer Professional Certificate by Coursera' },
      { id: 2, src: img2, alt: 'Internship Completion Certificate in Web Development', className: 'img2' },
      { id: 3, src: img3, alt: 'JavaScript Essentials 1 by Cisco Networking Academy' },
      { id: 4, src: img4, alt: '5-Day Coding Challenge Certificate by Code Institute' },
      { id: 5, src: img5, alt: 'Certificate of Participation from Google for Women in AI' },
      { id: 6, src: img6, alt: 'Certificate of Appreciation from Women Tech Network' },
      { id: 7, src: img7, alt: 'Build a Full Website Using WordPress by Coursera' },
      { id: 8, src: img8, alt: 'Increase SEO Traffic with WordPress by Coursera' },
      { id: 9, src: img9, alt: 'Introduction to Microsoft Excel by Coursera' },
      { id: 10, src: img10, alt: 'Digital Literacy by DigiSkills Training Program' },
      { id: 11, src: img11, alt: 'Communication and Soft Skills by DigiSkills Training Program' },
      { id: 12, src: img12, alt: 'Freelancing by DigiSkills Training Program' },
      { id: 13, src: img13, alt: 'WordPress by DigiSkills Training Program' }
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="certificate-main-container">
      <div className="certificate-inner-container">
        <div className="certificate-content">
          <h1 id="certificate_heading">Professional Qualifications</h1>
          <p className="certificate-para">
             These certifications highlight my front-end expertise, dedication, and commitment to continuous growth
          </p>
        </div>
        <div className="certificate-container">
          {certificates.map((item) => (
            <div
              className="certificate-card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <img src={item.src} alt={item.alt} className={`card-image ${item.className || ''}`} style={item.style || {}} />
           </div>
          ))}
        </div>

        {selectedItem && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button id="close" onClick={closeModal}>
                X
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
