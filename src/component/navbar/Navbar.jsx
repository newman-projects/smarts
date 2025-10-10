import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll lock
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
          {/* <a href="#problem" className="mobile-nav-link" onClick={toggleMenu}>
            Problem
          </a> */}
          <a href="#product" className="mobile-nav-link" onClick={toggleMenu}>
            Product
          </a>
          <a href="#solution" className="mobile-nav-link" onClick={toggleMenu}>
            Solution
          </a>
          <a href="#uniqueness" className="mobile-nav-link" onClick={toggleMenu}>
            uniqueness
          </a>
          <a href="#market" className="mobile-nav-link" onClick={toggleMenu}>
            Market
          </a>
          {/* <a href="#business" className="mobile-nav-link" onClick={toggleMenu}>
            Business
          </a> */}
          <a href="#team" className="mobile-nav-link" onClick={toggleMenu}>
            Team
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
}