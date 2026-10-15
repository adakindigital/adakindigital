import React, { useState } from 'react';
import { PiCheckBold, PiPlusBold } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import Button from '../components/shell/Button';
import { offers, paymentModels, pricingFaq } from '../content/site';
import './pages.css';

const PricingPage = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <>
      <PageHero
        title="Clear prices. No per-user licences."
        intro="Start with a fixed-price audit. Build one process. Pay upfront, monthly, or rent-to-own. All prices exclude VAT."
      />

      <section className="page-section">
        <div className="container pricing-ladder">
          {offers.map((offer) => (
            <article key={offer.name} className={`pricing-offer reveal ${offer.highlight ? 'pricing-offer--highlight' : ''}`}>
              <span className="pricing-offer__tag">{offer.tag}</span>
              <h2>{offer.name}</h2>
              <p className="pricing-offer__price">{offer.price}</p>
              <p className="pricing-offer__note">{offer.priceNote}</p>
              <p className="pricing-offer__timeline">{offer.timeline}</p>
              <ul>
                {offer.features.map((feature) => <li key={feature}><PiCheckBold aria-hidden="true" /> {feature}</li>)}
              </ul>
              {offer.highlight && <Button to="/workflow-audit">Book a Workflow Audit</Button>}
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--card">
        <div className="container">
          <h2 className="reveal">Three ways to pay.</h2>
          <p className="page-lede reveal">Every proposal shows all three, with the payback period for each.</p>
          <div className="pricing-models">
            {paymentModels.map((model, index) => (
              <article key={model.name} className={`pricing-model pricing-model--${index} reveal`}>
                <h3>{model.name}</h3>
                <p>{model.body}</p>
                <p className="pricing-model__best"><span>Best for</span>{model.bestFor}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container pricing-faq">
          <h2 className="reveal">Questions we get asked.</h2>
          <div className="pricing-faq__list">
            {pricingFaq.map((item, index) => {
              const isOpen = openQuestion === index;
              return (
                <div key={item.q} className={`pricing-faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button onClick={() => setOpenQuestion(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{item.q}</span>
                    <PiPlusBold aria-hidden="true" />
                  </button>
                  <div className="pricing-faq__answer"><p>{item.a}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
