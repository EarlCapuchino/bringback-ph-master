import { useState } from 'react';
import styles from '../styles/GetEmail.module.css';

export default function GetEmail({ inquiry, response, isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>{inquiry}</h2>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`${styles.input} ${!isValid ? styles.invalid : ''}`}
              />
              {!isValid && <p className={styles.errorText}>Please enter a valid email</p>}
            </div>
            <button 
              type="submit" 
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        ) : (
          <div className={styles.responseContainer}>
            <h2>{response}</h2>
            <button onClick={onClose} className={styles.okButton}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
}