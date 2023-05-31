import React, { useState } from 'react';
import './menu.css';

const HamburgerMenuSobre = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li>
              <a href="https://www.vanderleinetoweb.tech/" target="_blank" rel="noopener noreferrer" onClick={handleItemClick} all="Portiflio Dev">
                Meus Sites
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/josevanderleineto" target="_blank" rel="noopener noreferrer" onClick={handleItemClick} all="Link  instagram">
                Instagram
              </a>
            </li>
          <li>
            <a href="
            https://www.linkedin.com/in/vanderlei-desenvolvedor-front-end/" target="_blank" rel="noopener noreferrer" onClick={handleItemClick} all='link do linkedin'>
                Linkedin
              </a>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenuSobre;
