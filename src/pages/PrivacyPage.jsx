import React from 'react';
import PageHero from '../components/page/PageHero';
import './pages.css';

const PrivacyPage = () => (
  <>
    <PageHero title="Privacy and POPIA" intro="How Adakin Digital collects, uses and protects personal information, and how to opt out." />
    <section className="page-section">
      <div className="container page-prose">
        <p className="page-note">Preview text. Final wording to be confirmed with a POPIA practitioner before launch.</p>
        <h2>What we collect</h2>
        <ul>
          <li>Details you give us in a form: your name, work email, company, phone number and message.</li>
          <li>The numbers you enter in the Cost of Paper calculator, only if you ask us to email you the breakdown.</li>
          <li>Whether you agreed to receive occasional ideas from us, with the date, the exact wording you agreed to, and where you agreed.</li>
        </ul>
        <h2>How we use it</h2>
        <p>To reply to you and to send what you asked for. We only send marketing emails if you gave consent, or if you are an existing client. Every marketing email says who it is from and lets you unsubscribe in one click.</p>
        <p>We do not sell personal information. We do not use visitor-identification or tracking tools, and analytics only run after you accept cookies.</p>
        <h2 id="opt-out">Opting out</h2>
        <p>Click unsubscribe in any email, reply "stop", or email <a href="mailto:optout@adakindigital.co.za">optout@adakindigital.co.za</a>. We add you to our do-not-contact list straight away and keep only what we need to honour that.</p>
        <h2>Your rights</h2>
        <p>You can ask what personal information we hold about you, ask us to correct or delete it, or object to how we use it. You can also lodge a complaint with the Information Regulator.</p>
        <h2 id="paia">PAIA manual</h2>
        <p>Our PAIA manual is available on request from <a href="mailto:hello@adakindigital.co.za">hello@adakindigital.co.za</a>.</p>
      </div>
    </section>
  </>
);

export default PrivacyPage;
