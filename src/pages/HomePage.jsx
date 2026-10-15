import React from 'react';
import { Link } from 'react-router-dom';
import {
  PiFileText, PiMicrosoftExcelLogo, PiEnvelopeSimple, PiWhatsappLogo, PiArrowRight,
  PiFlowArrow, PiDatabase, PiShieldCheck, PiKey, PiCheckBold, PiXBold,
} from 'react-icons/pi';
import Button from '../components/shell/Button';
import ProductDemo from '../components/ProductDemo';
import { promises, howItWorks, solutions } from '../content/site';
import './HomePage.css';

const sources = [
  { icon: PiFileText, label: 'Paper forms' },
  { icon: PiMicrosoftExcelLogo, label: 'Spreadsheets' },
  { icon: PiEnvelopeSimple, label: 'Email inbox' },
  { icon: PiWhatsappLogo, label: 'WhatsApp' },
];

const promiseIcons = [PiFlowArrow, PiDatabase, PiShieldCheck, PiKey];

const comparison = [
  { row: 'Fits how you work', saas: 'You adapt to it', bespoke: 'Perfectly', adakin: 'Built around your process' },
  { row: 'Upfront cost', saas: 'Low', bespoke: 'R250k and up', adakin: 'From R35k, or spread monthly' },
  { row: 'First process live', saas: 'Days', bespoke: 'Months', adakin: '3 to 6 weeks' },
  { row: 'Ongoing cost', saas: 'Per user, forever', bespoke: 'Retainer', adakin: 'Flat monthly' },
  { row: 'You own it', saas: false, bespoke: true, adakin: true },
];

const Cell = ({ value }) => {
  if (value === true) return <PiCheckBold className="home-compare__yes" aria-label="Yes" />;
  if (value === false) return <PiXBold className="home-compare__no" aria-label="No" />;
  return value;
};

const HomePage = () => {
  const [primary, ...others] = Object.values(solutions);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__glow" aria-hidden="true" />
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <h1>We build the system around how you already work.</h1>
            <p>Dedicated systems for South African businesses still running on paper and spreadsheets. Start with one process, pay monthly, own it.</p>
            <div className="home-hero__actions">
              <Button to="/calculator" size="lg">What is paper costing you?</Button>
              <Button to="/demo" variant="ghost" size="lg">Watch the demo</Button>
            </div>
          </div>
          <div className="home-hero__demo">
            <ProductDemo variant="quoting" compact />
          </div>
        </div>
      </section>

      <section className="home-converge">
        <div className="container">
          <h2 className="reveal">Same steps. Same sign-offs. Without the retyping.</h2>
          <div className="home-converge__flow reveal">
            <ul className="home-converge__sources">
              {sources.map((source, index) => (
                <li key={source.label} style={{ '--index': index }}>
                  <source.icon aria-hidden="true" />
                  <span>{source.label}</span>
                </li>
              ))}
            </ul>
            <div className="home-converge__beam" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <div className="home-converge__system">
              <img src={`${import.meta.env.BASE_URL}adakin-logo.svg`} alt="" />
              <strong>One system</strong>
              <span>Your workflow, digitised</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-promises">
        <div className="container">
          <div className="home-promises__grid">
            {promises.map((promise, index) => {
              const Icon = promiseIcons[index];
              return (
                <article key={promise.title} className={`home-promise home-promise--${index} reveal`} tabIndex={0}>
                  <Icon className="home-promise__icon" aria-hidden="true" />
                  <h3>{promise.title}</h3>
                  <p>{promise.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-steps">
        <div className="container home-steps__grid">
          <div className="home-steps__intro reveal">
            <p className="section-label">How it works</p>
            <h2>Map it. Build it. Run it.</h2>
            <p>One process first, live in weeks. Then the next one, cheaper each time, because the foundations are already in place.</p>
            <Button to="/how-it-works" variant="ghost">See the full process</Button>
          </div>
          <ol className="home-steps__list">
            {howItWorks.map((step) => (
              <li key={step.name} className="home-step reveal">
                <span className="home-step__name">{step.name}</span>
                <div>
                  <span className="home-step__duration">{step.duration}</span>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-solutions">
        <div className="container">
          <h2 className="reveal">Built for the processes that run your business.</h2>
          <div className="home-solutions__grid">
            <Link to={`/solutions/${primary.slug}`} className="home-solution home-solution--feature reveal">
              <div className="home-solution__text">
                <span className="home-solution__audience">{primary.audience}</span>
                <h3>{primary.label}</h3>
                <p>{primary.headline}</p>
                <span className="home-solution__more">Explore <PiArrowRight aria-hidden="true" /></span>
              </div>
              <ol className="home-solution__flow" aria-label="Workflow">
                {primary.flow.map((stage) => <li key={stage}>{stage}</li>)}
              </ol>
            </Link>
            {others.map((solution) => (
              <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="home-solution reveal">
                <span className="home-solution__audience">{solution.audience}</span>
                <h3>{solution.label}</h3>
                <p>{solution.headline}</p>
                <span className="home-solution__more">Explore <PiArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-compare">
        <div className="container">
          <h2 className="reveal">The fit of custom software, priced closer to a subscription.</h2>
          <div className="home-compare__table reveal" role="table" aria-label="Comparison of software options">
            <div className="home-compare__row home-compare__row--head" role="row">
              <span role="columnheader" />
              <span role="columnheader">Off-the-shelf software</span>
              <span role="columnheader">Typical custom build</span>
              <span role="columnheader" className="home-compare__adakin">Adakin</span>
            </div>
            {comparison.map((item) => (
              <div key={item.row} className="home-compare__row" role="row">
                <span role="rowheader">{item.row}</span>
                <span role="cell" data-label="Off-the-shelf"><Cell value={item.saas} /></span>
                <span role="cell" data-label="Custom build"><Cell value={item.bespoke} /></span>
                <span role="cell" data-label="Adakin" className="home-compare__adakin"><Cell value={item.adakin} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-price">
        <div className="container home-price__inner reveal">
          <div>
            <p className="section-label">Where to start</p>
            <p className="home-price__figure">R6,500</p>
            <p className="home-price__note">for a Workflow Audit, credited in full to your build.</p>
          </div>
          <div className="home-price__side">
            <p>We map your process, measure what it costs you today, and give you a fixed quote with three options. Systems start from R35,000, or pay monthly.</p>
            <div className="home-price__actions">
              <Button to="/workflow-audit">Book a Workflow Audit</Button>
              <Button to="/pricing" variant="ghost">See pricing</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
