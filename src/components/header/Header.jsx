import React, { useEffect, useState } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/profile_photo.JPG';
import HeaderSocials from './HeaderSocials';

const textArray = ["Computer Engineer", "Programmer", "Hacker"];

const Header = () => {
  const [currentText, setCurrentText] = useState(textArray[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const [scrambledText, setScrambledText] = useState(currentText);

  useEffect(() => {
    let isMounted = true;

    const scrambleText = (text) => {
      let iterations = 0;
      const interval = setInterval(() => {
        if (!isMounted) return;
        setScrambledText(
          text
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return text[index];
              }
              return String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
            })
            .join('')
        );
        if (iterations >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
        }
        iterations += 1 / 3;
      }, 30);
    };

    let currentIndex = 0;
    const changeText = () => {
      currentIndex = (currentIndex + 1) % textArray.length;
      scrambleText(textArray[currentIndex]);
      setCurrentText(textArray[currentIndex]);
      setIsScrambling(true);
    };

    const interval = setInterval(changeText, 3000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <header>
      <div className="container header_container">
        <div className="text_buttons_container">
          <h1 className="text-white">Dylan Manamendra</h1>
          <div className="text-line">
            <h2 className="text-white"></h2>
            <h2 className="text-primary glitch" data-text={scrambledText}>{scrambledText}</h2>
          </div>
          <div className="about">
            <h4 className="text-white">Hello! I am a Mcmaster Computer Engineering undergraduate student located in Mississauga Ontario. I am fascinated by the advancements of technology and wish to be apart of it's future. I am particularily eager to dive into the world of cybersecurity and contribute to the protection against cyber threats. Below you can find my work to achieve this level within my portfolio, I'm confident that this experience combined with my passion and work ethic will help me succeed in any scenario.</h4>
          </div>
          <CTA />
        </div>
        <div className="about">
        </div>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
