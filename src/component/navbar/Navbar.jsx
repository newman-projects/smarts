import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h2>SmartSen.net</h2>
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>
            About
          </a>
          <a href="#problem" className="mobile-nav-link" onClick={toggleMenu}>
            Problem
          </a>
          <a href="#solution" className="mobile-nav-link" onClick={toggleMenu}>
            Solution
          </a>
          <a href="#product" className="mobile-nav-link" onClick={toggleMenu}>
            Product
          </a>
          <a href="#business" className="mobile-nav-link" onClick={toggleMenu}>
            Business
          </a>
        </nav>
      </div>
    </>
  );
}

