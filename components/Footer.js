import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Company</h3>
            <Link href="/careers" className={styles.link}>Careers</Link>
            <Link href="/business" className={styles.link}>Business</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.title}>Support</h3>
            <Link href="/contact-us" className={styles.link}>Contact Us</Link>
            <Link href="/return-policy" className={styles.link}>Return Policy</Link>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.title}>Legal</h3>
            <Link href="/terms-and-conditions" className={styles.link}>Terms & Conditions</Link>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          </div>
          
          
        </div>
        
        <div className={styles.bottom}>
          <p>© 2025 BringBack PH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;