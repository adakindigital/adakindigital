import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechCapabilities.css';

gsap.registerPlugin(ScrollTrigger);

const TechCapabilities = () => {
    const sectionRef = useRef(null);
    const counterRefs = useRef([]);

    useEffect(() => {
        // Animate counters
        counterRefs.current.forEach((el, index) => {
            if (!el) return;
            const endValue = parseInt(el.getAttribute('data-target'), 10);

            gsap.fromTo(el,
                { innerText: 0 },
                {
                    innerText: endValue,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        });

        // Stagger entry for grid items
        gsap.from('.tech-item', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            }
        });

    }, []);

    return (
        <section className="section tech-capabilities" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Engineering Metrics</h2>
                <div className="tech-grid">
                    {/* Item 1: Uptime / Reliability */}
                    <div className="tech-item tech-item-md">
                        <div className="tech-label">System Uptime</div>
                        <div className="tech-value">
                            <span ref={el => counterRefs.current[0] = el} data-target="99">0</span>.9%
                        </div>
                        <div className="tech-desc">Enterprise-grade reliability for mission-critical applications.</div>
                    </div>

                    {/* Item 2: Code Visual */}
                    <div className="tech-item tech-item-lg">
                        <div className="tech-label">Clean Architecture</div>
                        <div className="code-block">
                            <span className="code-line"><span className="keyword">const</span> <span className="function">optimizeSystem</span> = <span className="keyword">async</span> (data) =&gt; {'{'}</span>
                            <span className="code-line">&nbsp;&nbsp;<span className="keyword">const</span> result = <span className="keyword">await</span> core.<span className="function">process</span>(data);</span>
                            <span className="code-line">&nbsp;&nbsp;<span className="keyword">return</span> result.<span className="function">enhance</span>({'{'} performance: <span className="string">'max'</span> {'}'});</span>
                            <span className="code-line">{'}'};</span>
                        </div>
                        <div className="tech-desc">Maintainable, scalable, and self-documenting codebases.</div>
                    </div>

                    {/* Item 3: Projects Delivered */}
                    <div className="tech-item tech-item-md">
                        <div className="tech-label">Projects Shipped</div>
                        <div className="tech-value">
                            <span ref={el => counterRefs.current[1] = el} data-target="5">0</span>
                        </div>
                        <div className="tech-desc">Successful deployments across fintech, healthcare, and logistics.</div>
                    </div>

                    {/* Item 4: Tech Stack */}
                    <div className="tech-item tech-item-lg">
                        <div className="tech-label">Tech Stack</div>
                        <div className="tech-desc">
                            .NET • Flutter • React / Next.js • Node.js • Python • AWS • Docker • GraphQL • PostgreSQL
                        </div>
                        <div className="tech-desc" style={{ marginTop: 'auto', fontSize: '0.9rem', opacity: 0.7 }}>
                            Focusing on the right tool for the job, not the hype.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechCapabilities;

