import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'EntryFlow',
        category: 'Cinematic Survey Platform',
        desc: 'A visually immersive survey experience designed for maximum user engagement and retention.',
        link: 'https://www.entryflow.co.za',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop' 
    },
    {
        title: 'Dwelly',
        category: 'Property Management System',
        desc: 'Comprehensive tenant, property, and rent collection system for modern landlords.',
        status: 'Coming Soon',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop' 
    },
    {
        title: 'TradeTrackr',
        category: 'Trading Analytics Platform',
        desc: 'Advanced trade logging and performance analytics designed specifically for day traders.',
        link: 'https://www.tradeTrackr.co.za',
        // Updated image: Reliable stock market chart with dark aesthetic
        image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2560&auto=format&fit=crop'
    },
    {
        title: 'Next Innovation',
        category: 'R&D',
        desc: 'Our team is currently building the next generation of digital tools.',
        status: 'Coming Soon',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop' 
    }
];

const Work = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        // Stagger Reveal
        gsap.fromTo(itemsRef.current, 
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="work" className="section work-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Selected Work</h2>
                <div className="work-grid">
                    {projects.map((project, index) => {
                        const CardTag = project.link ? 'a' : 'div';
                        return (
                            <CardTag 
                                key={index} 
                                className="work-item"
                                ref={el => itemsRef.current[index] = el}
                                href={project.link}
                                target={project.link ? "_blank" : undefined}
                                rel={project.link ? "noopener noreferrer" : undefined}
                            >
                                <div 
                                    className="work-image" 
                                    style={{backgroundImage: `url(${project.image})`}}
                                >
                                    {project.status && (
                                        <div className="work-status-badge">{project.status}</div>
                                    )}
                                </div>
                                <div className="work-overlay"></div>
                                <div className="work-content">
                                    <div className="work-cat">{project.category}</div>
                                    <h3 className="work-title">
                                        {project.title} 
                                        {project.link && <span className="work-arrow">↗</span>}
                                    </h3>
                                    <p className="work-desc">{project.desc}</p>
                                </div>
                            </CardTag>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Work;
