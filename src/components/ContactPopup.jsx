import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiSend } from 'react-icons/fi';
import { useContact } from '../context/ContactContext';
import { gsap } from 'gsap';
import './ContactPopup.css';

const ContactPopup = () => {
    const { isOpen, closeContactPopup } = useContact();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        projectDetails: ''
    });

    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                display: 'flex',
                ease: 'power2.out'
            });

            gsap.fromTo(modalRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.2)' }
            );
        } else {
            document.body.style.overflow = '';

            gsap.to(modalRef.current, {
                y: 20,
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: 'power2.in'
            });

            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.3,
                delay: 0.1,
                ease: 'power2.in',
                onComplete: () => {
                    if (overlayRef.current) overlayRef.current.style.display = 'none';
                }
            });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Project Inquiry: ${formData.name} - ${formData.company || 'New Client'}`;
        const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget Range: ${formData.budget}

Project Details:
${formData.projectDetails}

------------------------------------------------
Sent from adakindigital.com contact form`;

        const mailtoLink = `mailto:support@adakindigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        // Optional: Close popup after a short delay or keep open
        // closeContactPopup();
    };

    return (
        <div className="contact-popup-overlay" ref={overlayRef} onClick={(e) => {
            if (e.target === overlayRef.current) closeContactPopup();
        }}>
            <div className="contact-popup-modal" ref={modalRef}>
                <button className="contact-popup-close" onClick={closeContactPopup}>
                    <FiX />
                </button>

                <div className="contact-popup-header">
                    <h2>Let's build something great.</h2>
                    <p>Tell us a bit about your project, and we'll start the conversation.</p>
                </div>

                <form className="contact-popup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Jane Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="jane@company.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company (Optional)</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">Estimated Budget</label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a range</option>
                            <option value="R100k - R500k">R100k - R500k</option>
                            <option value="R500k - R1m">R500k - R1m</option>
                            <option value="R1m - R3m">R1m - R3m</option>
                            <option value="R3m+">R3m+</option>
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="projectDetails">How can we help?</label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="We're looking to build..."
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Send Inquiry <FiSend />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPopup;
