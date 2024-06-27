import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <a href="mailto:dylankmdr@gmail.com" className="contact_link">
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#ffffff" }} />
              <span>DylanKMdr@gmail.com</span>
            </a>
          </article>
          <article className="contact_option">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact_link">
              <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#ffffff" }} />
              <span>LinkedIn</span>
            </a>
          </article>
        </div>
        <form action="">
          {/* Add form elements here if needed */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
