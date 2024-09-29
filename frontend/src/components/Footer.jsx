import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section 1: Logo */}
      <div id = '23' className="footer-section">
        <img src="/logo.png" alt="Company Logo" className="footer-logo" />
      </div>

      {/* Section 2: Links */}
      <div className="footer-section">
        <h4>Links</h4>
        <ul>
          <li><a href="/privacy">Privacy & Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Section 3: Have a Question */}
      <div className="footer-section">
        <h4>Have a Question?</h4>
        <p>No: +1 123 456 7890</p>
        <p>Email: info@example.com</p>
      </div>

      {/* Section 4: Social Media Links */}
      <div className="footer-section">
        <h4>Connect With Us</h4>
        <div className="social-icons">
          <a href="https://instagram.com" aria-label="Instagram">
            <img src="/instagram-logo.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <img src="/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <img src="/facebook-logo.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
