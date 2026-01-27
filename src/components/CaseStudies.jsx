import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CaseStudies.css';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        title: 'Entryflow: Rethinking customer onboarding',
        summary: 'How we built a survey platform that increased completion rates by designing for engagement first.',
        tags: ['Product Design', 'Full-Stack Development', 'Analytics'],
        comingSoon: true
    },
    {
        title: 'From idea to live product in 8 weeks',
        summary: 'The methodology and tooling decisions that let us ship Entryflow fast without cutting corners.',
        tags: ['Process', 'Technical Architecture'],
        comingSoon: true
    },
    {
        title: 'Building for scale from day one',
        summary: 'Why we chose the tech stack we did, and how it shapes our ability to iterate quickly.',
        tags: ['Infrastructure', 'Engineering'],
        comingSoon: true
    }
];

const CaseStudies = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(itemsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
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
        <section id="case-studies" className="section case-studies" ref={sectionRef}>
            <div className="container">
                <div className="case-studies-header">
                    <span className="section-label">Case Studies</span>
                    <h2>Built in the open. Tested in reality.</h2>
                </div>
                <div className="case-studies-list">
                    {caseStudies.map((study, index) => (
                        <article
                            key={index}
                            className={`case-study-item ${study.comingSoon ? 'coming-soon' : ''}`}
                            ref={el => itemsRef.current[index] = el}
                        >
                            <div className="case-study-content">
                                <h3>{study.title}</h3>
                                <p>{study.summary}</p>
                                <div className="case-study-tags">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="case-study-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="case-study-action">
                                {study.comingSoon ? (
                                    <span className="coming-soon-label">Coming Soon</span>
                                ) : (
                                    <span className="read-link">Read →</span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
