import React, { useState } from 'react';
import { PiCheckBold } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import Button from '../components/shell/Button';
import { signs } from '../content/site';
import './pages.css';

const ArticleSignsPage = () => {
  const [checked, setChecked] = useState([]);
  const toggle = (index) => setChecked((current) => (current.includes(index) ? current.filter((item) => item !== index) : [...current, index]));
  const count = checked.length;

  return (
    <>
      <PageHero
        label="Self-check"
        title="6 signs your business has outgrown paper and spreadsheets"
        intro="Tick the ones that sound like your business. Three or more means the process is costing you more than you think."
      />
      <section className="page-section">
        <div className="container signs">
          <div className="signs__list">
            {signs.map((sign, index) => {
              const isChecked = checked.includes(index);
              return (
                <button key={sign.title} className={`signs__item reveal ${isChecked ? 'is-checked' : ''}`} onClick={() => toggle(index)} aria-pressed={isChecked}>
                  <span className="signs__box" aria-hidden="true">{isChecked && <PiCheckBold />}</span>
                  <span>
                    <strong>{sign.title}</strong>
                    <span>{sign.body}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <aside className="signs__score" aria-live="polite">
            <p className="signs__count">{count}<span> of 6</span></p>
            <p className="signs__verdict">
              {count >= 3 ? 'Time to switch. Your process is doing work a system should do.' : count > 0 ? 'Worth watching. These usually multiply as you grow.' : 'Tick the signs that apply to you.'}
            </p>
            {count >= 3 ? <Button to="/calculator">What is paper costing you?</Button> : <Button to="/how-it-works" variant="ghost">See how it works</Button>}
          </aside>
        </div>
      </section>
    </>
  );
};

export default ArticleSignsPage;
