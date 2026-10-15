import React from 'react';
import { Link } from 'react-router-dom';
import Button from './shell/Button';
import { solutions } from '../content/site';
import './SiteFooter.css';

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__cta reveal">
          <div>
            <p className="section-label">Next step</p>
            <h2>Find out what your paper process is really costing you.</h2>
          </div>
          <div className="site-footer__cta-actions">
            <Button to="/workflow-audit" size="lg">Book a Workflow Audit</Button>
            <Button to="/calculator" variant="ghost" size="lg">Run the numbers first</Button>
          </div>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className="site-footer__name">Adakin Digital</p>
            <p>Dedicated business systems built around how South African teams already work.</p>
          </div>
          <div>
            <p className="section-label">Solutions</p>
            {Object.values(solutions).map((solution) => (
              <Link key={solution.slug} to={`/solutions/${solution.slug}`}>{solution.label}</Link>
            ))}
          </div>
          <div>
            <p className="section-label">Company</p>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <p className="section-label">Your information</p>
            <Link to="/privacy">Privacy &amp; POPIA</Link>
            <Link to="/privacy#opt-out">Unsubscribe or opt out</Link>
            <Link to="/privacy#paia">PAIA manual</Link>
          </div>
        </div>

        <div className="site-footer__base">
          <p>&copy; {year} Adakin Digital (Pty) Ltd. All prices exclude VAT.</p>
          <p className="mono-text">Your workflow, not ours.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
