import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from 'react-icons/fa';
import './contact.css';

function Contact() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Contact Sobia Soomro | Frontend Developer";
  }, [location]);

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/moqgglyv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
        console.error('Error data:', data);
      }
    } catch (error) {
      setStatus('ERROR');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="contact-container">
     <div className="inner-box">
      <div className="contact-info-container">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-para">
        Feel free to reach out to me via social platforms or email me anytime
      </p>
      <div className="contact-social-icons">
      <a href="https://www.linkedin.com/in/sobiasoomro/" target="_blank" rel="noreferrer" className="social-item">
          <span className="social-icon linkedin-icon"><FaLinkedin /></span>
          <span className="social-label">LinkedIn</span>
        </a>
        <a href="https://github.com/Sobia-s" target="_blank" rel="noopener noreferrer" className="social-item">
          <span className="social-icon github-icon"><FaGithub /></span>
          <span className="social-label">GitHub</span>
        </a>
        <a href="https://g.dev/sobiasoomro" target="_blank" rel="noopener noreferrer" className="social-item">
          <span className="social-icon globe-icon"><FaGlobe /></span>
          <span className="social-label">Developer Profile</span>
        </a>
        <a href="mailto:sobiasoomro97@gmail.com" className="social-item">
          <span className="social-icon email-icon"><FaEnvelope /></span>
          <span className="social-label">Email</span>
        </a>
      </div>
    </div>
    <div className="contact-form-container">
      <h1 className='form-heading'>Send me an Email</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className='contact-labels'>Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-field"
          required
        />
        <label htmlFor="email" className='contact-labels'>Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-field"
          required
        />
        <label htmlFor="message" className='contact-labels'>Message</label>
        <textarea
          id="message"
          name="message"
          className="form-field-text"
          required
          minlength="10"

        />
        {status === 'SUCCESS' && <p className='submitting-message'>Thank you for reaching out to me! Your email has been successfully sent, and I will get back to you as soon as possible</p>}
        {status === 'ERROR' && <p className='error-message'>Submission failed. Please try again or contact me directly at sobiasoomro97@gmail.com</p>}
        <button type="submit" id="submit_btn">Send Email</button>
      </form>
    </div>
  </div>
</div>
  );
}

export default Contact;
