import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";
import "./contact.css";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Contact – Work With Sobia";
  }, [location]);

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/moqgglyv", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
        console.error("Error data:", data);
      }
    } catch (error) {
      setStatus("ERROR");
      console.error("Network error:", error);
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-info-container">
          <h1 className="contact-heading">Let's Connect!</h1>
          <p className="contact-para">
            I'd love to hear from you, whether it’s a project idea,
            collaboration, or just to say hi.
          </p>
          <div className="contact-social-icons">
            <a
              href="https://www.linkedin.com/in/sobiasoomro/"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <span className="social-icon linkedin-icon">
                <FaLinkedin />
              </span>
              <span className="social-label">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Sobia-s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="social-icon github-icon">
                <FaGithub />
              </span>
              <span className="social-label">GitHub</span>
            </a>
            <a
              href="https://g.dev/sobiasoomro"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="social-icon globe-icon">
                <FaGlobe />
              </span>
              <span className="social-label">Developer Profile</span>
            </a>
            <a href="mailto:sobiasoomro97@gmail.com" className="social-item">
              <span className="social-icon email-icon">
                <FaEnvelope />
              </span>
              <span className="social-label">Email</span>
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          <h1 className="form-heading">Let's Start A New Project!</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="contact-labels">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-field"
              required
            />
            <label htmlFor="email" className="contact-labels">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-field"
              required
            />
            <label htmlFor="message" className="contact-labels">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-field-text"
              required
              minlength="10"
            />
            {status === "SUCCESS" && (
              <p className="success-message">
                Thank you for reaching out! I truly appreciate your message and
                I'll get back to you as soon as possible.🙌
              </p>
            )}
            {status === "ERROR" && (
              <p className="error-message">
                Oops! Something went wrong. Please try again, or email me
                directly at
                <a href="mailto:sobiasoomro97@gmail.com">
                  {" "}
                  sobiasoomro97@gmail.com
                </a>{" "}
                Thank you!
              </p>
            )}
            <button type="submit" className="submit_btn hover-animate">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
