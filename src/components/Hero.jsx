import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useContact } from '../context/ContactContext';
import Tooltip from './Tooltip';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const decorRef = useRef(null);
    const { openContactPopup } = useContact();

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

    const scrollToProducts = () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const orbitDotContent = (
        <>
            <p>You found me. This dot pulses because we never stop working. Like, ever. Send help.</p>
            <span className="tooltip-hint">Easter egg 1 of 5</span>
        </>
    );

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
                        <span className="title-line">software</span>
                        <span className="title-line title-accent"> not just prototypes.</span>
                    </h1>

                    <p ref={subRef} className="hero-sub">
                        Adakin Digital is a Software Development studio. We create platforms,
                        operate them ourselves, and partner with teams building
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
                        <Tooltip
                            content={orbitDotContent}
                            actionText="Wanna work with us yet?"
                            onAction={openContactPopup}
                            position="left"
                        >
                            <div className="orbit-dot orbit-dot-interactive"></div>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator" onClick={scrollToProducts}>
                <span>Scroll to explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
