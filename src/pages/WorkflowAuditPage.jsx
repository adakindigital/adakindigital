import React from 'react';
import PageHero from '../components/page/PageHero';
import LeadForm from '../components/LeadForm';
import './pages.css';

const agenda = [
  { name: 'Session one', length: '2 hours', body: 'We shadow the process and collect every form, spreadsheet and template. We map the roles and the approval gates.' },
  { name: 'In between', length: 'Our time', body: 'We draw the current-state map, put a rand value on it with your numbers, and list the quick wins.' },
  { name: 'Session two', length: '1.5 hours', body: 'We walk you through the map, the cost, the recommended scope and three priced options.' },
  { name: 'You keep', length: 'PDF', body: 'The process map, the cost of the current process, the recommended system, a timeline and a fixed quote.' },
];

const WorkflowAuditPage = () => (
  <>
    <PageHero
      label="R6,500 fixed, credited to your build"
      title="Know exactly what your process costs, and what fixing it would take."
      intro="Two working sessions over one to two weeks. The result is useful even if you never build with us. If you do, within 60 days, the full fee comes off your build."
    />

    <section className="page-section">
      <div className="container audit-agenda">
        {agenda.map((item, index) => (
          <article key={item.name} className="audit-agenda__item reveal" style={{ '--index': index }}>
            <span className="audit-agenda__length">{item.length}</span>
            <h2>{item.name}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="page-section page-section--card" id="book">
      <div className="container calc-lead__inner">
        <div className="reveal">
          <h2>Book your audit</h2>
          <p className="page-lede">Tell us a little about the process. We reply within one working day to agree dates, on-site or online, and send the invoice.</p>
          <p className="page-note">Already know you want to go ahead? Ask about a 30-day pilot on your real data. You pay the first month's fee, and the setup only if you continue.</p>
        </div>
        <LeadForm source="website-audit" submitLabel="Request my audit" />
      </div>
    </section>
  </>
);

export default WorkflowAuditPage;
