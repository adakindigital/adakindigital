import React, { useState } from 'react';
import { PiCheckCircleBold, PiWarningCircleBold, PiSpinnerGap } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Field from './shell/Field';
import Button from './shell/Button';
import '../pages/CalculatorPage.css';

const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT;
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

const processOptions = ['Quoting', 'Applications', 'Job cards or timesheets', 'Orders', 'Something else'];

const LeadForm = ({ source, submitLabel, showProcess = true, messageLabel = 'Anything we should know?' }) => {
  const [values, setValues] = useState({ name: '', email: '', company: '', phone: '', process: processOptions[0], message: '' });
  const [touched, setTouched] = useState({});
  const [state, setState] = useState('idle');

  const errors = {
    name: values.name.trim().length < 2 ? 'Tell us your name.' : null,
    email: !isEmail(values.email) ? 'Enter a valid work email.' : null,
    company: values.company.trim().length < 2 ? 'Which company is this for?' : null,
    phone: values.phone && !/^[+\d][\d\s()-]{7,}$/.test(values.phone) ? 'Check the number.' : null,
  };
  const isValid = Object.values(errors).every((error) => !error);

  const update = (field) => (event) => setValues((current) => ({ ...current, [field]: event.target.value }));
  const touch = (field) => () => setTouched((current) => ({ ...current, [field]: true }));

  const submit = async (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, company: true, phone: true });
    if (!isValid) return;
    setState('submitting');

    if (!LEAD_ENDPOINT) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setState('preview');
      return;
    }

    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: values, source, marketingConsent: { granted: false } }),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setState('success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success' || state === 'preview') {
    return (
      <div className="calc-lead__done" role="status">
        <PiCheckCircleBold aria-hidden="true" />
        <div>
          <strong>{state === 'success' ? 'Thanks, we have it.' : 'Preview build: nothing was sent.'}</strong>
          <p>{state === 'success' ? 'We will be in touch within one working day.' : 'This preview is not connected to the lead system yet.'}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="calc-lead__form" onSubmit={submit} noValidate>
      <div className="calc__pair">
        <Field label="Name" id={`${source}-name`} autoComplete="name" value={values.name} onChange={update('name')} onBlur={touch('name')} error={touched.name && errors.name} />
        <Field label="Company" id={`${source}-company`} autoComplete="organization" value={values.company} onChange={update('company')} onBlur={touch('company')} error={touched.company && errors.company} />
      </div>
      <div className="calc__pair">
        <Field label="Work email" id={`${source}-email`} type="email" autoComplete="email" value={values.email} onChange={update('email')} onBlur={touch('email')} error={touched.email && errors.email} />
        <Field label="Phone (optional)" id={`${source}-phone`} type="tel" autoComplete="tel" value={values.phone} onChange={update('phone')} onBlur={touch('phone')} error={touched.phone && errors.phone} />
      </div>
      {showProcess && (
        <Field label="Which process hurts most?" id={`${source}-process`}>
          <select id={`${source}-process`} value={values.process} onChange={update('process')}>
            {processOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
      )}
      <Field label={messageLabel} id={`${source}-message`}>
        <textarea id={`${source}-message`} className="ui-field__input" rows={4} value={values.message} onChange={update('message')} />
      </Field>
      {state === 'error' && <p className="calc-lead__error" role="alert"><PiWarningCircleBold aria-hidden="true" /> That did not go through. Try again, or email hello@adakindigital.co.za.</p>}
      <Button type="submit" disabled={state === 'submitting'}>
        {state === 'submitting' ? <><PiSpinnerGap className="spin" aria-hidden="true" /> Sending</> : submitLabel}
      </Button>
      <p className="calc-lead__small">We use these details only to reply to you. See our <Link to="/privacy">privacy notice</Link>.</p>
    </form>
  );
};

export default LeadForm;
