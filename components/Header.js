import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/qr-technology" className={styles.link}>QR Technology</Link>
          <Link href="/order" className={styles.link}>Order</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/business" className={styles.link}>Business</Link>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className={styles.menuIcon} />
          ) : (
            <Bars3Icon className={styles.menuIcon} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;