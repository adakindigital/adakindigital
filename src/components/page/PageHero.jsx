import React from 'react';
import './page.css';

const PageHero = ({ label, title, intro, children }) => (
  <header className="page-hero">
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container page-hero__inner">
      {label && <p className="section-label">{label}</p>}
      <h1>{title}</h1>
      {intro && <p className="page-hero__intro">{intro}</p>}
      {children && <div className="page-hero__actions">{children}</div>}
    </div>
  </header>
);

export default PageHero;
