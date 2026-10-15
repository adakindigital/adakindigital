import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PiList, PiX, PiCaretDown } from 'react-icons/pi';
import Button from './shell/Button';
import { solutions } from '../content/site';
import './SiteNav.css';

const logoSrc = `${import.meta.env.BASE_URL}adakin-logo.svg`;

const SiteNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [menuOpenOn, setMenuOpenOn] = useState(null);
  const isMenuOpen = menuOpenOn === pathname;

  useEffect(() => {
    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return undefined;
    const observer = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''} ${isMenuOpen ? 'site-nav--open' : ''}`}>
      <div className="container site-nav__inner">
        <Link to="/" className="site-nav__logo" aria-label="Adakin Digital home">
          <img src={logoSrc} alt="" />
          <span>Adakin</span>
        </Link>

        <div className="site-nav__links">
          <div className="site-nav__dropdown">
            <button className="site-nav__link site-nav__trigger" aria-haspopup="true">
              Solutions <PiCaretDown aria-hidden="true" />
            </button>
            <div className="site-nav__menu" role="menu">
              {Object.values(solutions).map((solution) => (
                <NavLink key={solution.slug} to={`/solutions/${solution.slug}`} className="site-nav__menu-item" role="menuitem">
                  <strong>{solution.label}</strong>
                  <span>{solution.audience}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/how-it-works" className="site-nav__link">How it works</NavLink>
          <NavLink to="/pricing" className="site-nav__link">Pricing</NavLink>
          <NavLink to="/calculator" className="site-nav__link">Cost of Paper</NavLink>
          <NavLink to="/insights" className="site-nav__link">Insights</NavLink>
          <NavLink to="/about" className="site-nav__link">About</NavLink>
        </div>

        <div className="site-nav__cta">
          <Button to="/workflow-audit" size="sm">Book a Workflow Audit</Button>
        </div>

        <button
          className="site-nav__toggle"
          onClick={() => setMenuOpenOn(isMenuOpen ? null : pathname)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <PiX /> : <PiList />}
        </button>
      </div>

      <div className="site-nav__mobile" aria-hidden={!isMenuOpen}>
        <p className="section-label">Solutions</p>
        {Object.values(solutions).map((solution) => (
          <NavLink key={solution.slug} to={`/solutions/${solution.slug}`}>{solution.label}</NavLink>
        ))}
        <p className="section-label">Company</p>
        <NavLink to="/how-it-works">How it works</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/calculator">Cost of Paper calculator</NavLink>
        <NavLink to="/demo">Demo</NavLink>
        <NavLink to="/insights">Insights</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Button to="/workflow-audit" size="lg">Book a Workflow Audit</Button>
      </div>
    </nav>
  );
};

export default SiteNav;
