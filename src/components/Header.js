import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
                <h1>SignTrack</h1>
                <span>Best car tracker company in pakistan</span>
              </Link>
            </div>
            
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li className="dropdown">
                  <span>Choose Your City</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/city/islamabad">Islamabad</Link></li>
                    <li><Link to="/city/lahore">Lahore</Link></li>
                    <li><Link to="/city/karachi">Karachi</Link></li>
                    <li><Link to="/city/quetta">Quetta</Link></li>
                    <li><Link to="/city/bahawalpur">Bahawalpur</Link></li>
                    <li><Link to="/city/faisalabad">Faisalabad</Link></li>
                    <li><Link to="/city/rawalpindi">Rawalpindi</Link></li>
                    <li><Link to="/city/sargodha">Sargodha</Link></li>
                    <li><Link to="/city/sialkot">Sialkot</Link></li>
                    <li><Link to="/city/gujranwala">Gujranwala</Link></li>
                    <li><Link to="/city/hyderabad">Hyderabad</Link></li>
                    <li><Link to="/city/peshawar">Peshawar</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span>Services & Solutions</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/services/vehicle-tracking">Vehicle Tracking</Link></li>
                    <li><Link to="/services/bike-tracking">Bike Tracking</Link></li>
                    <li><Link to="/services/container-tracking">Container Tracking</Link></li>
                    <li><Link to="/services/fuel-management">Automated Fuel Management System</Link></li>
                    <li><Link to="/services/genset-monitoring">Genset Monitoring System</Link></li>
                    <li><Link to="/services/dispatch-solutions">Dispatch Solutions</Link></li>
                    <li><Link to="/services/fuel-monitoring">Fuel Monitoring Systems</Link></li>
                    <li><Link to="/services/cold-chain">Cold Chain Monitoring</Link></li>
                    <li><Link to="/services/video-surveillance">Vehicle Video Surveillance & Analytics</Link></li>
                  </ul>
                </li>
                <li><Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
                <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
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