import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us: <a href="mailto:team@example.com">team@example.com</a></p>
        <p>Team Name: The Innovators</p>
        <small>© {new Date().getFullYear()} The Innovators. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;