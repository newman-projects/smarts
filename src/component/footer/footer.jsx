import React from 'react';
import ContactForm from './Contact';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <h2>SmartSen.net</h2>
          </div>
          <nav className="footer-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#problem" className="nav-link">Problem</a>
            <a href="#solution" className="nav-link">Solution</a>
            <a href="#product" className="nav-link">Product</a>
          </nav>
        </div>
        <div className="footer-right">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}



