import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechCapabilities from './components/TechCapabilities';
import Work from './components/Work';
import Team from './components/Team';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Adakin Digital. Product Studio.</p>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechCapabilities />
        <Work />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
