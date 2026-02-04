import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { FiArrowLeft } from 'react-icons/fi';
import './ComingSoon.css';

const productInfo = {
  dwelly: {
    name: 'Dwelly',
    tagline: 'Property & rental intelligence',
    description: 'Comprehensive tenant, property, and rent collection system for modern landlords. Streamline your property management with intelligent automation.',
    color: '#3b82f6'
  },
  tradetrackr: {
    name: 'Tradetrackr',
    tagline: 'Trading insights & execution tools',
    description: 'Advanced trade logging, performance analytics and AI coaching designed specifically for day traders. Make smarter decisions with data-driven insights.',
    color: '#f59e0b'
  },
  'next-innovation': {
    name: 'Next Innovation',
    tagline: 'Something new is brewing',
    description: 'Our team is constantly exploring new problems worth solving. Follow our journey as we build the next generation of digital tools.',
    color: '#8b5cf6'
  }
};

const ComingSoon = () => {
  const { slug } = useParams();
  const product = productInfo[slug] || productInfo['next-innovation'];
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(containerRef.current.querySelectorAll('.animate-in'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, [slug]);

  return (
    <div className="coming-soon-page" ref={containerRef}>
      <div
        className="coming-soon-bg"
        style={{ '--accent-color': product.color }}
      >
        <div className="coming-soon-gradient"></div>
        <div className="coming-soon-grid"></div>
      </div>

      <div className="container coming-soon-content">
        <Link to="/" className="cs-back animate-in">
          <FiArrowLeft /> Back to Adakin
        </Link>

        <div className="coming-soon-badge animate-in">
          <span className="status-badge status-dev">In Development</span>
        </div>

        <h1 className="coming-soon-title animate-in">{product.name}</h1>

        <p className="coming-soon-tagline animate-in">{product.tagline}</p>

        <p className="coming-soon-description animate-in">
          {product.description}
        </p>

        <div className="coming-soon-notify animate-in">
          <p>We're building something special. Stay tuned for updates.</p>
          <Link to="/#work-with-us" className="btn">
            Work with us on your project
          </Link>
        </div>

        <div className="coming-soon-decoration animate-in">
          <div className="decoration-ring"></div>
          <div className="decoration-ring"></div>
          <div className="decoration-ring"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
