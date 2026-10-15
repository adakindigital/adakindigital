import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiCheckCircleBold, PiWarningCircleBold, PiSpinnerGap } from 'react-icons/pi';
import PageHero from '../components/page/PageHero';
import Field from '../components/shell/Field';
import Button from '../components/shell/Button';
import { calculateCost, formatRand, formatNumber, STARTER_SETUP, STARTER_MONTHLY } from '../lib/costModel';
import './CalculatorPage.css';

const processTypes = [
  { value: 'quotes', label: 'Quotes' },
  { value: 'applications', label: 'Applications' },
  { value: 'job-cards', label: 'Job cards' },
  { value: 'timesheets', label: 'Timesheets' },
  { value: 'orders', label: 'Orders' },
  { value: 'other', label: 'Something else' },
];

const recoveryOptions = [0.5, 0.6, 0.7];
const CONSENT_WORDING_VERSION = 'calc-optin-v1';
const MARKETING_CONSENT_TEXT = 'Send me occasional practical ideas from Adakin Digital. Unsubscribe anytime.';
const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT;

const initialInputs = {
  processType: 'quotes',
  itemsPerMonth: '50',
  people: '3',
  hoursPerWeek: '4',
  hourlyCost: '',
  errorsPerMonth: '2',
  errorCost: '',
  daysToComplete: '5',
  recoveredShare: 0.6,
};

const numericFields = ['itemsPerMonth', 'people', 'hoursPerWeek', 'hourlyCost', 'errorsPerMonth', 'errorCost', 'daysToComplete'];

const validateInputs = (inputs) => {
  const errors = {};
  numericFields.forEach((field) => {
    const raw = inputs[field];
    if (raw === '') return;
    const value = Number(raw);
    if (Number.isNaN(value) || value < 0) errors[field] = 'Enter a number of zero or more.';
  });
  if (Number(inputs.hoursPerWeek) > 60) errors.hoursPerWeek = 'That is more than a full working week per person.';
  return errors;
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

const CalculatorPage = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [lead, setLead] = useState({ name: '', email: '', company: '', marketingConsent: false });
  const [leadTouched, setLeadTouched] = useState({});
  const [submitState, setSubmitState] = useState('idle');

  const inputErrors = validateInputs(inputs);
  const result = useMemo(() => calculateCost(inputs), [inputs]);
  const hasRates = inputs.hourlyCost !== '' && !inputErrors.hourlyCost;

  const leadErrors = {
    name: lead.name.trim().length < 2 ? 'Tell us your name.' : null,
    email: !isEmail(lead.email) ? 'Enter a valid work email.' : null,
    company: lead.company.trim().length < 2 ? 'Which company is this for?' : null,
  };
  const leadIsValid = !leadErrors.name && !leadErrors.email && !leadErrors.company;

  const updateInput = (field) => (event) => setInputs((current) => ({ ...current, [field]: event.target.value }));
  const updateLead = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setLead((current) => ({ ...current, [field]: value }));
  };
  const touchLead = (field) => () => setLeadTouched((current) => ({ ...current, [field]: true }));

  const submitLead = async (event) => {
    event.preventDefault();
    setLeadTouched({ name: true, email: true, company: true });
    if (!leadIsValid) return;

    setSubmitState('submitting');
    const payload = {
      contact: { name: lead.name.trim(), email: lead.email.trim(), company: lead.company.trim() },
      marketingConsent: lead.marketingConsent
        ? { granted: true, wording: MARKETING_CONSENT_TEXT, wordingVersion: CONSENT_WORDING_VERSION }
        : { granted: false },
      source: 'website-calculator',
      calculator: { ...inputs, result },
    };

    if (!LEAD_ENDPOINT) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSubmitState('preview');
      return;
    }

    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Lead capture failed with ${response.status}`);
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <>
      <PageHero
        title="What is paper costing you?"
        intro="Put in your own numbers. The result shows straight away and nothing is stored unless you ask us to email it to you."
      />

      <section className="calc">
        <div className="container calc__grid">
          <form className="calc__inputs" onSubmit={(event) => event.preventDefault()} noValidate>
            <Field label="Which process?" id="processType">
              <select id="processType" value={inputs.processType} onChange={updateInput('processType')}>
                {processTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
              </select>
            </Field>
            <div className="calc__pair">
              <Field label="Handled per month" id="itemsPerMonth" type="number" inputMode="numeric" min="0" value={inputs.itemsPerMonth} onChange={updateInput('itemsPerMonth')} error={inputErrors.itemsPerMonth} />
              <Field label="People involved" id="people" type="number" inputMode="numeric" min="0" value={inputs.people} onChange={updateInput('people')} error={inputErrors.people} />
            </div>
            <Field
              label="Hours per person per week on capturing, retyping and chasing"
              id="hoursPerWeek" type="number" inputMode="decimal" min="0" suffix="hrs"
              value={inputs.hoursPerWeek} onChange={updateInput('hoursPerWeek')} error={inputErrors.hoursPerWeek}
            />
            <Field
              label="Cost of one hour of their time"
              hint="Salary plus overheads, divided by hours worked. Use your own figure."
              id="hourlyCost" type="number" inputMode="decimal" min="0" prefix="R" placeholder="e.g. 220"
              value={inputs.hourlyCost} onChange={updateInput('hourlyCost')} error={inputErrors.hourlyCost}
            />
            <div className="calc__pair">
              <Field label="Errors or rework per month" id="errorsPerMonth" type="number" inputMode="numeric" min="0" value={inputs.errorsPerMonth} onChange={updateInput('errorsPerMonth')} error={inputErrors.errorsPerMonth} />
              <Field label="Cost of one error" id="errorCost" type="number" inputMode="decimal" min="0" prefix="R" placeholder="e.g. 3000" value={inputs.errorCost} onChange={updateInput('errorCost')} error={inputErrors.errorCost} />
            </div>
            <Field label="Days from request to completion" id="daysToComplete" type="number" inputMode="numeric" min="0" suffix="days" value={inputs.daysToComplete} onChange={updateInput('daysToComplete')} error={inputErrors.daysToComplete} />
          </form>

          <div className="calc__results" aria-live="polite">
            {!hasRates ? (
              <div className="calc__empty">
                <p className="calc__big">{formatNumber(result.adminHoursPerYear)} hours</p>
                <p>a year spent on admin for this one process.</p>
                <p className="calc__hint">Add the cost of an hour to see it in rands.</p>
              </div>
            ) : (
              <>
                <p className="calc__label">Your current process costs about</p>
                <p className="calc__big">{formatRand(result.annualCost)}<span> a year</span></p>
                <dl className="calc__breakdown">
                  <div><dt>Per month</dt><dd>{formatRand(result.monthlyCost)}</dd></div>
                  <div><dt>Admin hours a year</dt><dd>{formatNumber(result.adminHoursPerYear)}</dd></div>
                  <div><dt>Errors and rework a month</dt><dd>{formatRand(result.errorCostPerMonth)}</dd></div>
                </dl>

                <div className="calc__recovery">
                  <p className="calc__label">If a system recovered</p>
                  <div className="calc__toggle" role="radiogroup" aria-label="Share of time recovered">
                    {recoveryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={inputs.recoveredShare === option}
                        className={inputs.recoveredShare === option ? 'is-active' : ''}
                        onClick={() => setInputs((current) => ({ ...current, recoveredShare: option }))}
                      >
                        {Math.round(option * 100)}%
                      </button>
                    ))}
                  </div>
                  <p className="calc__saving">{formatRand(result.annualSaving)} <span>saved a year</span></p>
                  <p className="calc__payback">
                    {result.paybackMonths
                      ? `A Starter system (about ${formatRand(STARTER_SETUP)} setup and ${formatRand(STARTER_MONTHLY)} a month) would pay for itself in roughly ${Math.ceil(result.paybackMonths)} months.`
                      : 'At these numbers the saving would not yet cover a Starter system. A Workflow Audit can show whether a smaller scope makes sense.'}
                  </p>
                </div>
              </>
            )}
            <p className="calc__disclaimer">Estimates based on your inputs. A Workflow Audit measures the real numbers.</p>
          </div>
        </div>
      </section>

      <section className="calc-lead">
        <div className="container calc-lead__inner">
          <div>
            <h2>Email me the full breakdown</h2>
            <p>We send the numbers above as a one-page summary, plus what a Workflow Audit would measure for your process.</p>
          </div>

          {submitState === 'success' || submitState === 'preview' ? (
            <div className="calc-lead__done" role="status">
              <PiCheckCircleBold aria-hidden="true" />
              <div>
                <strong>{submitState === 'success' ? 'On its way.' : 'Preview build: nothing was sent.'}</strong>
                <p>
                  {submitState === 'success'
                    ? `Check ${lead.email} in the next few minutes.`
                    : 'This preview is not connected to the lead system yet. The live site emails the breakdown and records consent.'}
                </p>
              </div>
            </div>
          ) : (
            <form className="calc-lead__form" onSubmit={submitLead} noValidate>
              <Field label="Name" id="leadName" autoComplete="name" value={lead.name} onChange={updateLead('name')} onBlur={touchLead('name')} error={leadTouched.name && leadErrors.name} />
              <Field label="Work email" id="leadEmail" type="email" autoComplete="email" value={lead.email} onChange={updateLead('email')} onBlur={touchLead('email')} error={leadTouched.email && leadErrors.email} />
              <Field label="Company" id="leadCompany" autoComplete="organization" value={lead.company} onChange={updateLead('company')} onBlur={touchLead('company')} error={leadTouched.company && leadErrors.company} />
              <label className="calc-lead__consent">
                <input type="checkbox" checked={lead.marketingConsent} onChange={updateLead('marketingConsent')} />
                <span>{MARKETING_CONSENT_TEXT}</span>
              </label>
              {submitState === 'error' && (
                <p className="calc-lead__error" role="alert"><PiWarningCircleBold aria-hidden="true" /> That did not go through. Try again, or email hello@adakindigital.co.za.</p>
              )}
              <Button type="submit" disabled={submitState === 'submitting'}>
                {submitState === 'submitting' ? <><PiSpinnerGap className="spin" aria-hidden="true" /> Sending</> : 'Email me the breakdown'}
              </Button>
              <p className="calc-lead__small">We only use these details to send this breakdown, unless you tick the box above. See our <Link to="/privacy">privacy notice</Link>.</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default CalculatorPage;
