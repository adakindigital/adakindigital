import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tooltip from './Tooltip';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const methodologyPillars = [
    {
        number: '01',
        title: 'We start with real problems',
        desc: 'Every product begins with a genuine pain point. We validate the problem exists before writing a single line of code.',
        easterEgg: 'We once spent 3 weeks validating an idea only to discover someone already solved it. Best 3 weeks ever saved.'
    },
    {
        number: '02',
        title: 'We validate before we scale',
        desc: 'Small, testable releases. Real user feedback. We prove concepts work in the market before committing to full builds.',
        easterEgg: 'Our first MVP had exactly 12 users. 11 of them were friends. The 12th one paid. We still remember that moment.'
    },
    {
        number: '03',
        title: 'We build for longevity',
        desc: 'Clean architecture, maintainable code, and thoughtful technical decisions. We build systems meant to last years, not months.',
        easterEgg: 'We have a rule: if you write code you are embarrassed by in 6 months, you are growing. If you are still proud of it, worry.'
    },
    {
        number: '04',
        title: 'We operate what we build',
        desc: 'We run our own products. When something breaks at 2am, we feel it too. That accountability shapes how we engineer.',
        easterEgg: 'The 2am thing is not hypothetical. We have a Discord channel called #why-is-this-happening. It sees regular use.'
    }
];

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const [clickedNumbers, setClickedNumbers] = useState({});

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

    const handleNumberClick = (number) => {
        setClickedNumbers(prev => ({
            ...prev,
            [number]: true
        }));
    };

    const getNumberTooltip = (pillar) => {
        if (clickedNumbers[pillar.number]) {
            return (
                <>
                    <p>{pillar.easterEgg}</p>
                    <span className="tooltip-hint">Easter egg 3 of 5</span>
                </>
            );
        }
        return (
            <p>Click to reveal a behind-the-scenes story</p>
        );
    };

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
                            <Tooltip
                                content={getNumberTooltip(pillar)}
                                position="right"
                            >
                                <span
                                    className={`methodology-number ${clickedNumbers[pillar.number] ? 'revealed' : ''}`}
                                    onClick={() => handleNumberClick(pillar.number)}
                                >
                                    {pillar.number}
                                </span>
                            </Tooltip>
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
