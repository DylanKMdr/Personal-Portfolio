import React, { useState, useEffect } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFolderClosed, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const list = document.querySelectorAll('.list');
    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      setActiveIndex([...list].indexOf(this));
    }

    list.forEach((item) => item.addEventListener('click', activeLink));

    // Cleanup event listeners on unmount
    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }, []);

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => setActiveIndex(0)}>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => setActiveIndex(1)}>
          <a href="#experience">
            <span className="icon">
              <FontAwesomeIcon icon={faCode} style={{ color: "#000000" }} />
            </span>
            <span className="text">Experience</span>
          </a>
        </li>
        <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => setActiveIndex(2)}>
          <a href="#portfolio">
            <span className="icon">
              <FontAwesomeIcon icon={faFolderClosed} style={{ color: "#000000" }} />
            </span>
            <span className="text">Portfolio</span>
          </a>
        </li>
        <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => setActiveIndex(3)}>
          <a href="#contact">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
            </span>
            <span className="text">Contact</span>
          </a>
        </li>
        <div className="indicator" style={{ left: `calc(${activeIndex} * 25% + 12.5%)` }}></div>
      </ul>
    </div>
  );
};

export default Nav;
