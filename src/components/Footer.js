import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <Logo size="small" showTagline={false} />
              <p>myTrackee is a team of experts dedicated to providing top-of-the-line GPS-based tracking solutions for individuals and businesses.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/features">Features</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Flat No. 4, Block No. 30, Street 118, G-11/4, Islamabad</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>info@mytrackee.pk</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+92-317-222 6677</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+92-337-222 6677</span>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter for updates and offers.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            
            <div className="copyright">
              <p>Copyright © 2025 myTrackee.pk</p>
            </div>
            
            <div className="footer-links">
              <Link to="/terms">Terms & Conditions</Link>
              <span>/</span>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-cta">
        <a href="tel:+92-317-2226677" className="call-now-btn">
          Call Now 0317-2226677
        </a>
      </div>
    </footer>
  );
};

export default Footer; 