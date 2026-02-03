import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight } from 'react-icons/fi';
import Tooltip from './Tooltip';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        title: 'Entryflow',
        tagline: 'Customer onboarding & conversion infrastructure',
        desc: 'A platform that transforms how businesses capture and convert leads through intelligent, cinematic survey experiences.',
        status: 'live',
        statusLabel: 'Live',
        link: '/case-study/entryflow',
        isInternal: true,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        accentColor: '#10B981'
    },
    {
        title: 'Dwelly',
        tagline: 'Property & rental intelligence',
        desc: 'Comprehensive tenant, property, and rent collection system for modern landlords.',
        status: 'dev',
        statusLabel: 'In Development',
        link: '/coming-soon/dwelly',
        isInternal: true,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
        accentColor: '#3b82f6'
    },
    {
        title: 'Tradetrackr',
        tagline: 'Trading insights & execution tools',
        desc: 'Advanced trade logging and performance analytics designed specifically for day traders.',
        status: 'dev',
        statusLabel: 'In Development',
        link: '/coming-soon/tradetrackr',
        isInternal: true,
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop',
        accentColor: '#f59e0b'
    },
    {
        title: 'Next Innovation',
        tagline: 'Something new is brewing',
        desc: "We're constantly exploring new problems worth solving. Our next creation is in the works.",
        status: 'research',
        statusLabel: 'Research Phase',
        link: '/coming-soon/next-innovation',
        isInternal: true,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
        accentColor: '#8b5cf6'
    }
];

const statusTooltips = {
    live: {
        title: 'Live',
        description: 'This product is fully operational and serving real users in production. Battle tested and ready for business.',
        className: 'live'
    },
    dev: {
        title: 'In Development',
        description: 'We\'re actively building this one. Core features are taking shape and we\'re iterating based on early feedback.',
        className: 'dev'
    },
    beta: {
        title: 'Beta',
        description: 'Early access for select users. We\'re gathering feedback and polishing the experience before wider release.',
        className: 'beta'
    },
    research: {
        title: 'Research Phase',
        description: 'Still in the lab. We\'re validating the problem, exploring solutions, and making sure this is worth building.',
        className: 'dev'
    }
};

const Work = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const itemsRef = useRef([]);
    const [clickCounts, setClickCounts] = useState({});

    useEffect(() => {
        // Header animation
        gsap.fromTo(headerRef.current.querySelectorAll('.animate-in'),
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                }
            }
        );

        // Cards animation
        gsap.fromTo(itemsRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            }
        );
    }, []);

    const getStatusClass = (status) => {
        switch (status) {
            case 'live': return 'status-badge status-live';
            case 'beta': return 'status-badge status-beta';
            case 'dev':
            case 'research': return 'status-badge status-dev';
            default: return 'status-badge';
        }
    };

    const handleBadgeClick = (productTitle) => {
        // Track clicks for easter egg
        setClickCounts(prev => ({
            ...prev,
            [productTitle]: (prev[productTitle] || 0) + 1
        }));
    };

    const getTooltipContent = (product) => {
        const info = statusTooltips[product.status] || statusTooltips.dev;
        const clicks = clickCounts[product.title] || 0;

        // Easter egg after 3 clicks
        if (clicks >= 3) {
            return (
                <>
                    <p>Okay, you really like clicking this badge. Fun fact: the "{product.title}" name was chosen after 47 rejected alternatives.</p>
                    <span className="tooltip-hint">Easter egg 2 of 5</span>
                </>
            );
        }

        return (
            <>
                <span className={`status-tooltip-title ${info.className}`}>{info.title}</span>
                <p>{info.description}</p>
            </>
        );
    };

    return (
        <section id="products" className="section products-section" ref={sectionRef}>
            <div className="container">
                <div className="products-header" ref={headerRef}>
                    <span className="section-label animate-in">Our Products</span>
                    <h2 className="animate-in">Built. Operated. <span className="text-gradient">Proven.</span></h2>
                    <p className="products-intro animate-in">
                        We don't just build for clients. We build products and operate them ourselves.
                        This is how we stay sharp.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            to={product.link}
                            className={`product-item ${product.isPlaceholder ? 'product-placeholder' : ''}`}
                            ref={el => itemsRef.current[index] = el}
                            style={{ '--accent': product.accentColor }}
                        >
                            {!product.isPlaceholder && (
                                <div
                                    className="product-image"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                />
                            )}
                            <div className="product-overlay"></div>

                            <div className="product-content">
                                <div className="product-top">
                                    <Tooltip
                                        content={getTooltipContent(product)}
                                        position="bottom"
                                        onOpen={() => handleBadgeClick(product.title)}
                                    >
                                        <span className={getStatusClass(product.status)}>
                                            {product.statusLabel}
                                        </span>
                                    </Tooltip>
                                </div>

                                <div className="product-bottom">
                                    <span className="product-tagline">{product.tagline}</span>
                                    <h3 className="product-title">
                                        {product.title}
                                        <FiArrowUpRight className="product-arrow" />
                                    </h3>
                                    <p className="product-desc">{product.desc}</p>
                                </div>
                            </div>

                            <div className="product-hover-border"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
