import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaMobileAlt, FaServer, FaBug, FaSitemap } from 'react-icons/fa';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    { icon: <FaCode />, title: 'Custom Software', desc: 'Tailored solutions for complex business problems.' },
    { icon: <FaMobileAlt />, title: 'Web & Mobile Apps', desc: 'High-performance applications for all devices.' },
    { icon: <FaServer />, title: 'Backend & API', desc: 'Robust, scalable server-side architectures.' },
    { icon: <FaBug />, title: 'QA & Automation', desc: 'Rigorous testing strategies for bug-free releases.' },
    { icon: <FaSitemap />, title: 'System Architecture', desc: 'Future-proof technical planning and consulting.' },
];

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;

        gsap.fromTo(cards,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            }
        );

        // Mouse Move Glow Effect
        const handleMouseMove = (e) => {
            cards.forEach(card => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        document.getElementById('services').addEventListener('mousemove', handleMouseMove);

        return () => {
            const s = document.getElementById('services');
            if(s) s.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="services" className="section services" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="service-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
