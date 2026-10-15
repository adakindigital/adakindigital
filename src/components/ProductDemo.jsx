import React, { useEffect, useRef, useState } from 'react';
import { PiCheckBold, PiPaperPlaneTiltBold, PiWarningBold, PiFilePdf, PiPlayFill, PiPauseFill } from 'react-icons/pi';
import { demos } from '../content/demos';
import './ProductDemo.css';

const STEP_DURATION_MS = 3600;

const FormPanel = ({ rows }) => (
  <dl className="demo-form">
    {rows.map(([label, value], index) => (
      <div key={label} className="demo-form__row" style={{ '--index': index }}>
        <dt>{label}</dt>
        <dd>{value}</dd>
      </div>
    ))}
  </dl>
);

const TablePanel = ({ columns, rows, totals }) => (
  <div className="demo-table">
    <div className="demo-table__head">
      {columns.map((column) => <span key={column}>{column}</span>)}
    </div>
    {rows.map((row, index) => (
      <div key={row[0]} className="demo-table__row" style={{ '--index': index }}>
        {row.map((cell, cellIndex) => <span key={cellIndex}>{cell}</span>)}
      </div>
    ))}
    <div className="demo-table__totals">
      {totals.map(([label, value], index) => (
        <div key={label} className={index === totals.length - 1 ? 'is-grand' : ''} style={{ '--index': rows.length + index }}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  </div>
);

const AdjustPanel = ({ field, before, after, metric, metricBefore, threshold }) => (
  <div className="demo-adjust">
    <div className="demo-adjust__field">
      <span>{field}</span>
      <div className="demo-adjust__values">
        <s>{before}</s>
        <strong>{after}</strong>
      </div>
    </div>
    <div className="demo-adjust__metric">
      <span>{metric}</span>
      <strong>{metricBefore}</strong>
    </div>
    <p className="demo-adjust__flag"><PiWarningBold aria-hidden="true" /> {threshold}</p>
  </div>
);

const ApprovalPanel = ({ approver, note }) => (
  <div className="demo-approval">
    <div className="demo-approval__who">
      <span className="demo-approval__avatar" aria-hidden="true">{approver.charAt(0)}</span>
      <div>
        <strong>{approver}</strong>
        <span>Approval requested</span>
      </div>
    </div>
    <p>{note}</p>
    <div className="demo-approval__actions">
      <span className="demo-approval__reject">Send back</span>
      <span className="demo-approval__approve"><PiCheckBold aria-hidden="true" /> Approved</span>
    </div>
  </div>
);

const SendPanel = ({ document, to }) => (
  <div className="demo-send">
    <div className="demo-send__doc">
      <PiFilePdf aria-hidden="true" />
      <span>{document}</span>
    </div>
    <div className="demo-send__line" aria-hidden="true"><span /></div>
    <div className="demo-send__to">
      <PiPaperPlaneTiltBold aria-hidden="true" />
      <span>{to}</span>
    </div>
  </div>
);

const TimelinePanel = ({ events }) => (
  <ol className="demo-timeline">
    {events.map(([label, time], index) => (
      <li key={label} style={{ '--index': index }}>
        <span className="demo-timeline__mark"><PiCheckBold aria-hidden="true" /></span>
        <strong>{label}</strong>
        <span>{time}</span>
      </li>
    ))}
  </ol>
);

const panels = {
  form: FormPanel,
  table: TablePanel,
  adjust: AdjustPanel,
  approval: ApprovalPanel,
  send: SendPanel,
  timeline: TimelinePanel,
};

const ProductDemo = ({ variant = 'quoting', compact = false }) => {
  const demo = demos[variant];
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.35 });
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPlaying || !isInView || reduceMotion) return undefined;
    const timer = setTimeout(() => setActiveStep((step) => (step + 1) % demo.steps.length), STEP_DURATION_MS);
    return () => clearTimeout(timer);
  }, [activeStep, isPlaying, isInView, demo.steps.length]);

  const step = demo.steps[activeStep];
  const Panel = panels[step.panel.type];

  const selectStep = (index) => {
    setActiveStep(index);
    setIsPlaying(false);
  };

  return (
    <div ref={rootRef} className={`product-demo ${compact ? 'product-demo--compact' : ''}`}>
      <div className="product-demo__window">
        <div className="product-demo__bar">
          <div className="product-demo__crumbs">
            <strong>{demo.company}</strong>
            <span>{demo.product}</span>
            <span>{demo.reference}</span>
          </div>
          <button
            className="product-demo__play"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label={isPlaying ? 'Pause walkthrough' : 'Play walkthrough'}
          >
            {isPlaying ? <PiPauseFill /> : <PiPlayFill />}
          </button>
        </div>

        <div className="product-demo__body">
          <div className="product-demo__stage" key={`${variant}-${activeStep}`}>
            <p className="product-demo__step-title">{step.title}</p>
            <Panel {...step.panel} />
          </div>
        </div>

        <div className="product-demo__progress" role="tablist" aria-label="Walkthrough steps">
          {demo.steps.map((item, index) => (
            <button
              key={item.title}
              role="tab"
              aria-selected={index === activeStep}
              className={`product-demo__tick ${index === activeStep ? 'is-active' : ''} ${index < activeStep ? 'is-done' : ''}`}
              onClick={() => selectStep(index)}
              style={{ '--duration': `${STEP_DURATION_MS}ms` }}
            >
              <span className="product-demo__tick-fill" data-playing={isPlaying && isInView && index === activeStep} />
              <span className="product-demo__tick-label">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
      {!compact && <p className="product-demo__caption" aria-live="polite">{step.caption}</p>}
    </div>
  );
};

export default ProductDemo;
