import { FiExternalLink } from "react-icons/fi";
import { luminaGallery } from "../../Data/luminagalleryData";
import "./LuminaSection.css";

const Gallery = ({ images }) => (
  <div className="shared-gallery">
    {images.map((image, index) => (
      <div className="shared-gallery-item" key={index}>
        <img src={image.src} alt={image.alt} />
      </div>
    ))}
  </div>
);

const LuminaCTA = () => (
  <h2 className="lumina-cta-container">
    <span className="lumina-cta-text">Want a Fast Portfolio? {"  "}</span>
    <a
      href="https://tally.so/r/3yalkg"
      target="_blank"
      rel="noopener noreferrer"
      className="lumina-cta-link"
    >
      Come Join In!
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
