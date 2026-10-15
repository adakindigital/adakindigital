import React from 'react';
import { PiEnvelopeSimple, PiWhatsappLogo, PiPhone } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import LeadForm from '../components/LeadForm';
import './pages.css';

const ContactPage = () => (
  <>
    <PageHero title="Talk to us." intro="A question, a process you want to fix, or a partnership. We reply within one working day." />
    <section className="page-section">
      <div className="container calc-lead__inner">
        <div className="contact-routes reveal">
          <a href="mailto:hello@adakindigital.co.za"><PiEnvelopeSimple aria-hidden="true" /><span>hello@adakindigital.co.za</span></a>
          <a href="https://wa.me/27000000000" target="_blank" rel="noreferrer"><PiWhatsappLogo aria-hidden="true" /><span>WhatsApp us</span></a>
          <a href="tel:+27000000000"><PiPhone aria-hidden="true" /><span>Call the office</span></a>
          <p className="page-note">Phone and WhatsApp numbers are placeholders in this preview.</p>
        </div>
        <LeadForm source="website-contact" submitLabel="Send message" showProcess={false} messageLabel="How can we help?" />
      </div>
    </section>
  </>
);

export default ContactPage;
