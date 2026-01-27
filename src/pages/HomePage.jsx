import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import WorkWithUs from '../components/WorkWithUs';

const HomePage = () => {
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
    <>
      <Hero />
      <Work />
      <Services />
      <CaseStudies />
      <WorkWithUs />
    </>
  );
};

export default HomePage;
