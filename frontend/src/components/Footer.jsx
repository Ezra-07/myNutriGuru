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
          <li>Privacy & Policy</li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Have a Question?</h4>
        <p>Email:mynutriguru@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
