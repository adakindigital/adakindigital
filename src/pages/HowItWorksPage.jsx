import React from 'react';
import { PiShieldCheck, PiFlowArrow, PiTable, PiFileText, PiFolderLock, PiBell, PiChartLineUp, PiFingerprint, PiCreditCard, PiUploadSimple, PiCalculator, PiUsersThree } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import Button from '../components/shell/Button';
import { howItWorks, promises } from '../content/site';
import './pages.css';

const coreModules = [
  { icon: PiUsersThree, name: 'Roles and permissions' },
  { icon: PiFlowArrow, name: 'Approval engine' },
  { icon: PiTable, name: 'Configurable records' },
  { icon: PiCalculator, name: 'Rules and pricing' },
  { icon: PiFileText, name: 'Document generation' },
  { icon: PiFolderLock, name: 'Document vault' },
  { icon: PiBell, name: 'Email, SMS and WhatsApp' },
  { icon: PiChartLineUp, name: 'Dashboards' },
  { icon: PiFingerprint, name: 'Audit trail' },
  { icon: PiCreditCard, name: 'Payment schedules' },
  { icon: PiShieldCheck, name: 'POPIA toolkit' },
  { icon: PiUploadSimple, name: 'Excel import' },
];

const HowItWorksPage = () => (
  <>
    <PageHero
      title="Your process, rebuilt as software. In weeks, not quarters."
      intro="We do not sell you a product and ask you to adapt. We map how your team works, then assemble a system that works the same way."
    >
      <Button to="/workflow-audit">Book a Workflow Audit</Button>
    </PageHero>

    <section className="page-section">
      <div className="container hiw-steps">
        {howItWorks.map((step) => (
          <article key={step.name} className="hiw-step reveal">
            <div className="hiw-step__head">
              <h2>{step.name}</h2>
              <span>{step.duration}</span>
            </div>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="page-section page-section--card">
      <div className="container hiw-core">
        <div className="hiw-core__text reveal">
          <h2>Why it is faster, and costs less, than a typical custom build.</h2>
          <p className="page-lede">Every system starts on Adakin Core: a library of tested modules we have already built and run. Most of your system is configuration. Only the parts unique to your business are written from scratch, so you get the fit of custom software without paying for the foundations again.</p>
          <img className="hiw-core__mascot" src={`${import.meta.env.BASE_URL}brand/mascot-hologram.png`} alt="The Adakin mascot pointing at a holographic screen" loading="lazy" />
        </div>
        <ul className="hiw-core__grid">
          {coreModules.map((module, index) => (
            <li key={module.name} className="reveal" style={{ '--index': index }}>
              <module.icon aria-hidden="true" />
              <span>{module.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <h2 className="reveal">What we promise.</h2>
        <div className="hiw-promises">
          {promises.map((promise) => (
            <div key={promise.title} className="hiw-promise reveal">
              <h3>{promise.title}</h3>
              <p>{promise.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HowItWorksPage;
