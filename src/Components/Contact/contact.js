// import React, { useState } from 'react';
// import './contact.css';

// function Contact() {
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch('https://formspree.io/f/moqgglyv', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json'
//         },
//         body: formData
//       });


//       const data = await response.json();
//       if (response.ok) {
//         form.reset();
//         setStatus('SUCCESS');
//       } else {
//         setStatus('ERROR');
//       }
//     } catch (error) {
//       setStatus('ERROR');
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h1 className='contact-heading'>Contact</h1>
//       <hr className="title-underline"/>
//       <p className='contact-para'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           className="form-field"
//           placeholder="Enter Your Name"
//           required
//         />

//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           className="form-field"
//           placeholder="Enter Your Email"
//           required
//         />

//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           className="form-field-text"
//           placeholder="Enter Your Message"
//           required
//         />

//         {status === 'SUCCESS' && <p>Thank you for your message!</p>}
//         {status === 'ERROR' && <p>Ooops! There was an error. Please try again.</p>}

//         <button type="submit" id="submit_btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;




import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/moqgglyv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
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
      <h1 className='contact-heading'>Contact</h1>
      <hr className="title-underline"/>
      <p className='contact-para'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-field"
          placeholder="Enter Your Name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-field"
          placeholder="Enter Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-field-text"
          placeholder="Enter Your Message"
          required
        />

        {status === 'SUCCESS' && <p>Thank you for your message!</p>}
        {status === 'ERROR' && <p>Ooops! There was an error. Please try again.</p>}

        <button type="submit" id="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
