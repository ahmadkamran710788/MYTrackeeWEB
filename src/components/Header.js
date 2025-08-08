import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span>Need Assistance? Please Call: +92-317-222 6677</span>
            </div>
            <div className="cta-button">
              <button className="get-offer-btn">Get Offer</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <div className="logo">
              <Link to="/">
                <Logo size="medium" />
              </Link>
            </div>
            
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
              </ul>
            </nav>
            
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 