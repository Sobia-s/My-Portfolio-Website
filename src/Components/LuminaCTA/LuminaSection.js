import { FiExternalLink } from "react-icons/fi";
import { luminaGallery } from "../../Data/luminagalleryData";
import "./LuminaSection.css";

const Gallery = ({ images }) => (
  <div className="shared-gallery">
    {images.map((image, index) => (
      <div className="shared-gallery-item" key={index}>
        <a href={image.link} target="_blank" rel="noopener noreferrer">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width="400"
            height="300"
          />
        </a>
      </div>
    ))}
  </div>
);

const LuminaCTA = () => (
  <h2 className="lumina-cta-container">
    <span className="lumina-cta-text">
      Launch Your Storytelling Portfolio In a Day {"  "}
    </span>
    <a
      href="https://sobia.gumroad.com/l/lumina-reactjs-portfolio-template"
      target="_blank"
      rel="noopener noreferrer"
      className="lumina-cta-link"
    >
      Lumina is here!
      <FiExternalLink className="lumina-cta-icon" />
    </a>
  </h2>
);

export default function LuminaSection() {
  return (
    <>
      <Gallery images={luminaGallery} />
      <LuminaCTA />
    </>
  );
}
