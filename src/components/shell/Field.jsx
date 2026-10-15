import React from 'react';
import './shell.css';

const Field = ({ label, hint, error, prefix, suffix, id, children, ...inputProps }) => (
  <label className={`ui-field ${error ? 'ui-field--error' : ''}`} htmlFor={id}>
    <span className="ui-field__label">{label}</span>
    <span className="ui-field__control">
      {prefix && <span className="ui-field__affix">{prefix}</span>}
      {children || <input id={id} className="ui-field__input" {...inputProps} />}
      {suffix && <span className="ui-field__affix">{suffix}</span>}
    </span>
    {error ? (
      <span className="ui-field__message ui-field__message--error" role="alert">{error}</span>
    ) : (
      hint && <span className="ui-field__message">{hint}</span>
    )}
  </label>
);

export default Field;
