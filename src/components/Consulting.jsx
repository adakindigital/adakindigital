import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContact } from '../context/ContactContext';
import Tooltip from './Tooltip';
import './Consulting.css';

gsap.registerPlugin(ScrollTrigger);

const consultingServices = [
    {
        number: '01',
        title: 'Technical Consulting',
        desc: 'Architecture reviews, technology audits, and strategic roadmaps. We assess your stack, identify bottlenecks, and chart the path forward.',
        tags: ['Architecture', 'Strategy', 'Audits']
    },
    {
        number: '02',
        title: 'Contract Development',
        desc: 'Augment your team with senior engineers who understand production systems. Embedded talent that ships, not just advises.',
        tags: ['Team Augmentation', 'Development', 'Delivery']
    },
    {
        number: '03',
        title: 'Product Advisory',
        desc: 'From ideation to launch strategy. We help product teams avoid the pitfalls we\'ve learned building our own.',
        tags: ['Product Strategy', 'Launch', 'Guidance']
    },
    {
        number: '04',
        title: 'Fractional Technical Leadership',
        desc: 'Part-time CTO, VP Engineering, or Architect capacity. Strategic technical guidance without full-time commitment.',
        tags: ['Leadership', 'CTO', 'Long-term']
    }
];

const Consulting = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);
    const footerRef = useRef(null);
    const { openContactPopup } = useContact();
    const [labelClicked, setLabelClicked] = useState(false);

    useEffect(() => {
        gsap.fromTo(headerRef.current,
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
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            }
        );

        gsap.fromTo(footerRef.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                }
            }
        );
    }, []);

    const getDifferentiatorTooltip = () => {
        if (labelClicked) {
            return (
                <>
                    <p>You found all 5 easter eggs. Or maybe just this one. Either way, you are clearly detail oriented. We like that.</p>
                    <span className="tooltip-hint">Easter egg 5 of 5</span>
                </>
            );
        }
        return <p>Curiosity is a good trait in a partner</p>;
    };

    return (
        <section id="consulting" className="section consulting" ref={sectionRef}>
            <div className="container">
                <div className="consulting-header" ref={headerRef}>
                    <span className="section-label">Partner With Us</span>
                    <h2>Beyond The Lab</h2>
                    <p className="consulting-intro">
                        We build our own products. We also help others build theirs.
                    </p>
                    <p className="consulting-context">
                        Our consulting work spans manufacturing, telecommunications, finance, property,
                        and more. Whether we're architecting systems for enterprise clients or
                        shipping features for growing startups, we bring the same rigour we apply
                        to our own products. Real operational experience. Real accountability.
                    </p>
                </div>

                <div className="consulting-grid">
                    {consultingServices.map((service, index) => (
                        <div
                            key={index}
                            className="consulting-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <span className="consulting-number">{service.number}</span>
                            <div className="consulting-content">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="consulting-tags">
                                    {service.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="consulting-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="consulting-footer" ref={footerRef}>
                    <div className="consulting-differentiator">
                        <Tooltip
                            content={getDifferentiatorTooltip()}
                            position="top"
                        >
                            <span
                                className={`differentiator-label ${labelClicked ? 'revealed' : ''}`}
                                onClick={() => setLabelClicked(true)}
                            >
                                Why We're Different
                            </span>
                        </Tooltip>
                        <p>
                            We run our own products in production. When we advise you,
                            it's from experience, not a textbook.
                        </p>
                    </div>
                    <button onClick={openContactPopup} className="btn btn-primary">
                        Discuss Your Challenge
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Consulting;
