import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e, hash) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + hash);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img src="/adakin-logo.svg" alt="" className="logo-icon" />
          <span className="logo-text">Adakin</span>
        </Link>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a
            href="#products"
            onClick={(e) => handleNavClick(e, '#products')}
          >
            Products
          </a>
          <a
            href="#case-studies"
            onClick={(e) => handleNavClick(e, '#case-studies')}
          >
            From Our Lab
          </a>
          <a
            href="#consulting"
            onClick={(e) => handleNavClick(e, '#consulting')}
          >
            Consulting
          </a>
          <a
            href="#work-with-us"
            className="btn-small"
            onClick={(e) => handleNavClick(e, '#work-with-us')}
          >
            Work With Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
