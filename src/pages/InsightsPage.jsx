import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import './pages.css';

const upcoming = [
  'What does a custom business system cost in South Africa?',
  'Quoting in Excel? Where the time actually goes',
  'Running a bursary fund on paper: the hidden cost of late payments',
  'Off-the-shelf, custom, or built around you: an honest comparison',
  'POPIA and paper files: why filing cabinets are a compliance risk',
];

const InsightsPage = () => (
  <>
    <PageHero title="Practical writing on paper, process and POPIA." intro="Short, specific and written for owners and administrators, not developers." />
    <section className="page-section">
      <div className="container insights">
        <Link to="/insights/outgrown-spreadsheets" className="insights__feature reveal">
          <span className="insights__meta">Self-check · 4 minute read</span>
          <h2>6 signs your business has outgrown paper and spreadsheets</h2>
          <p>Three or more of these, and your process is doing work a system should be doing. Written for South African businesses, with the POPIA angle included.</p>
          <span className="insights__more">Read the checklist <PiArrowRight aria-hidden="true" /></span>
        </Link>
        <div className="insights__upcoming reveal">
          <h3>Coming next</h3>
          <ol>
            {upcoming.map((title) => <li key={title}>{title}</li>)}
          </ol>
        </div>
      </div>
    </section>
  </>
);

export default InsightsPage;
