import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  fullWidth = false,
  disabled = false 
}) => {
  const buttonClass = `${styles.button} ${
    variant === 'secondary' ? styles.secondary : styles.primary
  } ${fullWidth ? styles.fullWidth : ''}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;