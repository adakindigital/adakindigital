import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo">Adakin Digital</div>
        
        <div className="mobile-toggle" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
          <a href="#team" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <a href="#contact" className="btn-small" onClick={() => setIsMobileMenuOpen(false)}>Start Project</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
