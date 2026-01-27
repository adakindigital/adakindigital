import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkWithUs.css';

gsap.registerPlugin(ScrollTrigger);

const engagementTypes = [
    {
        title: 'Build a product with us',
        desc: 'From concept to launch. We partner on new products, taking ownership of technical execution while you focus on market and growth.'
    },
    {
        title: 'Scale an existing platform',
        desc: 'Architecture reviews, performance optimization, and feature development for products that have found their market.'
    },
    {
        title: 'Technical strategy & architecture',
        desc: 'Advisory engagements for teams who need experienced input on technical direction without a full build commitment.'
    }
];

const WorkWithUs = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(contentRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );

        gsap.fromTo(cardsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            }
        );
    }, []);

    return (
        <section id="work-with-us" className="section work-with-us" ref={sectionRef}>
            <div className="container">
                <div className="work-with-us-content" ref={contentRef}>
                    <span className="section-label">Work With Us</span>
                    <h2>Selective partnerships, not high volume.</h2>
                    <p className="work-with-us-intro">
                        We don't take on many projects. When we do, we act like partners — not vendors.
                        We're looking for teams with ambitious problems and the patience to solve them properly.
                    </p>
                </div>

                <div className="engagement-grid">
                    {engagementTypes.map((type, index) => (
                        <div
                            key={index}
                            className="engagement-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <h3>{type.title}</h3>
                            <p>{type.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="work-with-us-cta">
                    <a href="mailto:hello@adakindigital.com" className="btn btn-primary">
                        Start a conversation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;
