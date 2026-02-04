import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowLeft, FiExternalLink, FiCheck, FiZap, FiLayers, FiBarChart2 } from 'react-icons/fi';
import { useContact } from '../context/ContactContext';
import './EntryflowCaseStudy.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FiZap />,
    title: 'Cinematic Experience',
    desc: 'Full-screen, immersive survey flows that captivate respondents and drive completion rates.'
  },
  {
    icon: <FiLayers />,
    title: 'Dynamic Form Builder',
    desc: 'Drag-and-drop interface with 12+ field types, conditional logic, and real-time preview.'
  },
  {
    icon: <FiBarChart2 />,
    title: 'Analytics Dashboard',
    desc: 'Real-time response tracking, completion funnels, and exportable data insights.'
  }
];

const capabilities = [
  'Magic link authentication',
  'Multi-organization support',
  'Event management system',
  'QR code generation',
  'Email automation',
  'Response editing tokens',
  'Programme scheduling',
  'Name tag generation',
  'Confetti celebrations',
  'Mobile-first design'
];

const EntryflowCaseStudy = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const { openContactPopup } = useContact();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Hero animation
    gsap.fromTo(heroRef.current.querySelectorAll('.animate-in'),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    );

    // Content sections animation
    const sections = contentRef.current.querySelectorAll('.cs-section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section className="cs-hero" ref={heroRef}>
        <div className="cs-hero-bg">
          <div className="cs-hero-gradient"></div>
          <div className="cs-hero-noise"></div>
        </div>

        <div className="container">
          <Link to="/" className="cs-back animate-in">
            <FiArrowLeft /> Back to Adakin
          </Link>

          <div className="cs-hero-content">
            <div className="cs-hero-badge animate-in">
              <span className="status-badge status-live">Live</span>
              <span className="cs-category">Customer Onboarding Platform</span>
            </div>

            <h1 className="cs-title animate-in">
              <img
                src="/products/entryflow-logo.svg"
                alt="Entryflow"
                className="cs-logo"
              />
              Entryflow
            </h1>

            <p className="cs-tagline animate-in">
              The most elegant way to collect data.<br />
              Designed for events. Built for professionals.
            </p>

            <div className="cs-hero-cta animate-in">
              <a
                href="https://www.entryflow.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Platform <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="cs-video-section" ref={contentRef}>
        <div className="container">
          <div className="cs-section">
            <span className="section-label">Platform Demo</span>
            <h2>See it in action</h2>
            <div className="cs-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/gavvvbJG56w?rel=0&modestbranding=1&iv_load_policy=3"
                title="Entryflow Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Overview */}
          <div className="cs-section cs-overview">
            <div className="cs-overview-content">
              <span className="section-label">The Challenge</span>
              <h2>Surveys shouldn't feel like paperwork</h2>
              <p>
                Traditional form builders create functional but forgettable experiences.
                Event organizers needed a way to collect attendee data that matched the
                quality of their events. Professional, engaging, and memorable.
              </p>
              <p>
                We built Entryflow from scratch as a response to this gap: a platform
                where every interaction is designed to delight, not just collect.
              </p>
            </div>
            <div className="cs-stats">
              <div className="cs-stat">
                <span className="cs-stat-number">85%</span>
                <span className="cs-stat-label">Avg. Completion Rate</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-number">&lt;2min</span>
                <span className="cs-stat-label">Avg. Response Time</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-number">12+</span>
                <span className="cs-stat-label">Field Types</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="cs-section">
            <span className="section-label">Core Features</span>
            <h2>Built for serious data collection</h2>
            <div className="cs-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="cs-feature-card">
                  <div className="cs-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="cs-section">
            <span className="section-label">Platform Screens</span>
            <h2>Designed with intention</h2>
            <div className="cs-screenshots">
              <div className="cs-screenshot-item">
                <div className="cs-screenshot-placeholder">
                  <span>Form Builder Interface</span>
                </div>
                <p>Intuitive drag-and-drop form creation</p>
              </div>
              <div className="cs-screenshot-item">
                <div className="cs-screenshot-placeholder">
                  <span>Respondent View</span>
                </div>
                <p>Cinematic full-screen survey experience</p>
              </div>
              <div className="cs-screenshot-item">
                <div className="cs-screenshot-placeholder">
                  <span>Analytics Dashboard</span>
                </div>
                <p>Real-time response tracking and insights</p>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="cs-section">
            <span className="section-label">Full Capabilities</span>
            <h2>Everything you need to run events</h2>
            <div className="cs-capabilities-grid">
              {capabilities.map((capability, index) => (
                <div key={index} className="cs-capability">
                  <FiCheck className="cs-capability-icon" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="cs-section cs-tech">
            <span className="section-label">Built With</span>
            <h2>Modern stack, production-ready</h2>
            <div className="cs-tech-grid">
              <div className="cs-tech-item">Next.js</div>
              <div className="cs-tech-item">React</div>
              <div className="cs-tech-item">TypeScript</div>
              <div className="cs-tech-item">TailwindCSS</div>
              <div className="cs-tech-item">Framer Motion</div>
            </div>
          </div>

          {/* CTA */}
          <div className="cs-section cs-final-cta">
            <h2>Ready to transform your data collection?</h2>
            <p>Start creating cinematic survey experiences today.</p>
            <div className="cs-cta-buttons">
              <a
                href="https://www.entryflow.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Try Entryflow <FiExternalLink />
              </a>
              <button onClick={openContactPopup} className="btn">
                Build something similar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntryflowCaseStudy;
