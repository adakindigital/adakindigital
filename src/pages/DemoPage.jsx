import React, { useState } from 'react';
import PageHero from '../components/page/PageHero';
import ProductDemo from '../components/ProductDemo';
import Button from '../components/shell/Button';
import './pages.css';

const tabs = [
  { id: 'quoting', label: 'Quoting and approvals' },
  { id: 'applications', label: 'Applications and payments' },
];

const DemoPage = () => {
  const [active, setActive] = useState('quoting');

  return (
    <>
      <PageHero
        title="Watch a process run end to end."
        intro="Live walkthroughs on demo data. Pick a workflow, then click through the steps or let it play."
      />
      <section className="page-section">
        <div className="container demo-page">
          <div className="demo-page__tabs" role="tablist" aria-label="Choose a demo">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                className={active === tab.id ? 'is-active' : ''}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <ProductDemo key={active} variant={active} />
          <div className="demo-page__cta">
            <p>Your version would use your forms, your rules and your sign-offs.</p>
            <Button to="/workflow-audit">Book a Workflow Audit</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;
