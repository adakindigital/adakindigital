import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PiXCircle, PiCheckCircleFill } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import Button from '../components/shell/Button';
import ProductDemo from '../components/ProductDemo';
import { solutions } from '../content/site';
import './pages.css';

const demoFor = { quoting: 'quoting', applications: 'applications', operations: 'quoting' };

const SolutionPage = () => {
  const { slug } = useParams();
  const solution = solutions[slug];
  if (!solution) return <Navigate to="/" replace />;

  return (
    <>
      <PageHero label={solution.audience} title={solution.headline} intro={solution.intro}>
        <Button to="/workflow-audit">Book a Workflow Audit</Button>
        <Button to="/calculator" variant="ghost">What is paper costing you?</Button>
      </PageHero>

      <section className="page-section">
        <div className="container solution-compare">
          <div className="solution-compare__col solution-compare__col--before reveal">
            <h2>Today</h2>
            <ul>
              {solution.today.map((item) => <li key={item}><PiXCircle aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
          <div className="solution-compare__col solution-compare__col--after reveal">
            <h2>With your system</h2>
            <ul>
              {solution.after.map((item) => <li key={item}><PiCheckCircleFill aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section page-section--card">
        <div className="container solution-demo">
          <div className="solution-demo__text reveal">
            <h2>See it run.</h2>
            <p className="page-lede">A walkthrough on demo data. Click any step, or let it play.</p>
            {slug === 'operations' && <p className="page-note">Shown with the quoting flow. Job cards follow the same capture, sign-off and approval pattern.</p>}
          </div>
          <div className="reveal"><ProductDemo variant={demoFor[slug]} /></div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="reveal">Your stages, in your order.</h2>
          <ol className="solution-flow reveal">
            {solution.flow.map((stage, index) => (
              <li key={stage} style={{ '--index': index }}><span>{stage}</span></li>
            ))}
          </ol>
          <p className="page-lede reveal">These are typical stages. In the Workflow Audit we map yours exactly, including who signs off on what and what happens when someone is away.</p>
        </div>
      </section>
    </>
  );
};

export default SolutionPage;
