import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const decorRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Staggered reveal animation
        tl.fromTo(titleRef.current.querySelectorAll('.title-line'),
            { y: 100, opacity: 0, rotateX: -40 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.3
            }
        )
            .fromTo(subRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                '-=0.6'
            )
            .fromTo(ctaRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                '-=0.4'
            )
            .fromTo(decorRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
                '-=0.8'
            );
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
                <div className="hero-glow"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h1 ref={titleRef}>
                        <span className="title-line">We build and operate</span>
                        <span className="title-line">software products</span>
                        <span className="title-line title-accent"> not just prototypes.</span>
                    </h1>

                    <p ref={subRef} className="hero-sub">
                        Adakin is a product studio. We create platforms we believe in,
                        operate them ourselves, and partner with ambitious teams building
                        for the long term.
                    </p>

                    <div ref={ctaRef} className="hero-cta">
                        <a href="#products" className="btn btn-primary">View our products</a>
                        <a href="#work-with-us" className="btn">Work with us</a>
                    </div>
                </div>

                <div className="hero-decoration" ref={decorRef}>
                    <div className="decoration-orbit">
                        <div className="orbit-ring"></div>
                        <div className="orbit-ring"></div>
                        <div className="orbit-ring"></div>
                        <div className="orbit-dot"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
