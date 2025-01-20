import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/ReturnPolicy.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ReturnPolicy() {
  return (
    <>
      <Head>
        <title>Return Policy - BringBack PH</title>
        <link rel ="icon" href="/logo.png"/>
        <meta name="description" content="BringBack PH Return Policy and Terms" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h1 className="txt-title">Return Policy</h1>
            <div className={styles.content}>
              <p className="txt-content">
                We accept returns under the following circumstances. Please review our updated 
                policy regarding cancellations, refunds, and product concerns:
              </p>
              
              <div className={styles.policySection}>
                <h2>Cancellation Policy</h2>
                <ul>
                  <li>Cancellations are accepted for services not yet rendered. If you wish to cancel your order, contact us promptly.</li>
                  <li>Automatic renewals are non-refundable if not disabled before the renewal date.</li>
                  <li>A cancellation request cannot be honored once production or service has commenced.</li>
                  <li>For custom products, cancellations are not allowed after production has begun unless due to defects in the approved proof.</li>
                </ul>
              </div>

              <div className={styles.policySection}>
                <h2>Refund Policy</h2>
                <ul>
                  <li>Refunds are available only for the portion of the service not provided.</li>
                  <li>Refunds will not be issued for services completed at the time of payment.</li>
                  <li>Fees for expedited production or shipping are non-refundable.</li>
                </ul>
              </div>

              <div className={styles.policySection}>
                <h2>Satisfaction Guarantee</h2>
                <p>Your trust is important to us. If the product you receive is defective or does not match your approved proof, please let us know immediately.</p>
                <div className={styles.contactInfo}>
                  <p>Call us: <a href="tel:+639655045664">+63 965-504-5664</a></p>
                  <p>Email: <a href="mailto:bringbackph@gmail.com">bringbackph@gmail.com</a></p>
                </div>
              </div>

              <div className={styles.policySection}>
                <h2>30-Day Replacement Policy</h2>
                <p>If you're unsatisfied with your order, contact us within 30 days of receiving the product via phone, email, or live chat. Issues reported beyond 30 days from confirmed delivery are ineligible for replacement or refund.</p>
              </div>

              <div className={styles.policySection}>
                <h2>Additional Terms for Custom Products</h2>
                <ul>
                  <li>Minor discrepancies (e.g., slight variations in color or material) that fall within standard production tolerances are not eligible for refund.</li>
                  <li>BringBack reserves the right to request photographic evidence of defects before processing replacements.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}