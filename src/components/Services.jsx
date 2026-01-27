import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const methodologyPillars = [
    {
        number: '01',
        title: 'We start with real problems',
        desc: 'Every product begins with a genuine pain point. We validate the problem exists before writing a single line of code.'
    },
    {
        number: '02',
        title: 'We validate before we scale',
        desc: 'Small, testable releases. Real user feedback. We prove concepts work in the market before committing to full builds.'
    },
    {
        number: '03',
        title: 'We build for longevity',
        desc: 'Clean architecture, maintainable code, and thoughtful technical decisions. We build systems meant to last years, not months.'
    },
    {
        number: '04',
        title: 'We operate what we build',
        desc: 'We run our own products. When something breaks at 2am, we feel it too. That accountability shapes how we engineer.'
    }
];

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="how-we-work" className="section methodology" ref={sectionRef}>
            <div className="container">
                <div className="methodology-header">
                    <span className="section-label">How We Work</span>
                    <h2>Principled by default.</h2>
                </div>
                <div className="methodology-grid">
                    {methodologyPillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="methodology-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <span className="methodology-number">{pillar.number}</span>
                            <div className="methodology-content">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
