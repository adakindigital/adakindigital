import React from 'react';
import PageHero from '../components/page/PageHero';
import Button from '../components/shell/Button';
import { notList } from '../content/site';
import './pages.css';

const AboutPage = () => (
  <>
    <PageHero
      title="A South African software studio that starts with your process, not ours."
      intro="Adakin Digital builds and runs dedicated business systems. We started as a product studio, building and operating our own platforms, and kept seeing the same problem in every business we met."
    />
    <section className="page-section">
      <div className="container about-story">
        <div className="page-prose reveal">
          <h2>Why we work this way</h2>
          <p>Most software asks you to change how you run your business so that it fits the software. For a lot of South African businesses that is the wrong trade. Their process works. It is the paper, the retyping and the chasing that does not.</p>
          <p>So we do the opposite. We sit with your team, map how work actually flows, and build a system that works exactly like that. Because every system starts on our own tested modules, we can do it at a price and a pace that custom software usually cannot match.</p>
          <p>And because we run the platforms we build, we stay. Hosting, support and the next process are part of the relationship, not an afterthought.</p>
        </div>
        <img className="about-story__mascot reveal" src={`${import.meta.env.BASE_URL}brand/mascot-wave.png`} alt="The Adakin mascot waving hello" loading="lazy" />
      </div>
    </section>
    <section className="page-section page-section--card">
      <div className="container">
        <h2 className="reveal">What we are not.</h2>
        <dl className="about-not">
          {notList.map((item) => (
            <div key={item.title} className="reveal">
              <dt>{item.title}</dt>
              <dd>{item.body}</dd>
            </div>
          ))}
        </dl>
        <Button to="/contact" variant="ghost">Talk to us</Button>
      </div>
    </section>
  </>
);

export default AboutPage;
