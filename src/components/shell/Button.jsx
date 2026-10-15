import React from 'react';
import { Link } from 'react-router-dom';
import './shell.css';

const Button = ({ to, href, variant = 'primary', size = 'md', children, className = '', ...rest }) => {
  const classes = `ui-button ui-button--${variant} ui-button--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
