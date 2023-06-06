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
              <a href="https://www.instagram.com/josevanderleineto" target="_blank" rel="noopener noreferrer" onClick={handleItemClick} all="Link  instagram">
                <img src='https://cdn-icons-png.flaticon.com/128/1384/1384073.png' alt='Foto intagram'/>
              </a>
            </li>
          <li>
            <a href="
            https://www.linkedin.com/in/vanderlei-desenvolvedor-front-end/" target="_blank" rel="noopener noreferrer" onClick={handleItemClick} all='link do linkedin'>
                <img src='https://cdn-icons-png.flaticon.com/128/1384/1384072.png' alt='Foto do Linkedin'/>
              </a>
            </li>

             <li>
                <a href="https://twitter.com/josevanderlein
                " target="_blank" rel="noopener noreferrer" onClick={handleItemClick} all="Link do Twitter">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384075.png" alt='Imagem twiter'/>
              </a>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenuSobre;
