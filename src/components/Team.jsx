import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

const team = [
    {
        name: 'Tyler Adams',
        role: 'Co-Founder',
    },
    {
        name: 'Papa Mabotja',
        role: 'Co-Founder',
    }
];

const Team = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, []);

    return (
        <section id="team" className="section team-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Leadership</h2>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="team-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="member-role">{member.role}</div>
                            <h3 className="member-name">{member.name}</h3>
                            <a href="#contact" className="team-link"><FaArrowRight /></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
