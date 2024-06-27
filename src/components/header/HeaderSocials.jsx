import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/dylankmdr" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#ffffff"}} />
      </a>
      <a href="https://github.com/DylanKMdr" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#ffffff"}} />
      </a>
      <a href="mailto:dylankmdr@gmail.com" className="contact_link">
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#ffffff" }} />
      </a>
    </div>
    
  );
}

export default HeaderSocials;
