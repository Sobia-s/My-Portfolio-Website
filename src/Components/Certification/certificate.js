import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./certificate.css";
import { certificates } from "../../Data/certificatesData";

export function Certificate() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = "Certifications – Frontend Developer Skills";
  }, [location]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="certificate-container">
      <div className="certificate-inner-container">
        <div className="certificate-content">
          <h1 className="certificate-container-heading">
            My qualifications reflect my dedication and commitment to growth
          </h1>
        </div>

        <div className="certificate-cards-container">
          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.id}
              onClick={() => handleCardClick(certificate)}
            >
              <img
                src={certificate.src}
                alt={certificate.alt}
                className={`certificate-card-image ${
                  certificate.className || ""
                }`}
              />
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="certificate-modal" onClick={closeModal}>
            <div
              className="certificate-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close" onClick={closeModal}>
                X
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="certificate-modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
