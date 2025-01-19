import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Terms.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - BringBack PH</title>
        <meta name="description" content="BringBack PH Terms and Conditions" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.document}>
            <div className={styles.header}>
              <h1>Terms and Conditions</h1>
              <div className={styles.companyInfo}>
                <h2>BringBack Phils.</h2>
                <p>51 Manila S Rd, Uno, Calamba, 4027 Laguna</p>
                <p>Email: <a href="mailto:bringbackph@gmail.com">bringbackph@gmail.com</a></p>
              </div>
            </div>

            <section className={styles.section}>
              <h3>1. Introduction</h3>
              <p>These Terms and Conditions govern your use of BringBack's services and platform. By using or accessing our services, you agree to comply with the following rules and regulations. If you do not agree, do not use our services. BringBack reserves the right to change, modify, or update these terms at any time without prior notice.</p>
            </section>

            <section className={styles.section}>
              <h3>2. Account Creation and Security</h3>
              <p>To use our services, users must create an account with valid and complete information. You are responsible for maintaining the confidentiality of your login credentials. BringBack will not be held liable for any unauthorized access or damages resulting from your failure to protect your account details.</p>
            </section>

            <section className={styles.section}>
              <h3>3. Account Deactivation and Suspension</h3>
              <p>You can deactivate your account at any time by contacting us. We reserve the right to suspend or terminate accounts without notice if:</p>
              <ul>
                <li>You breach any terms in this agreement.</li>
                <li>Your actions may negatively affect BringBack, its users, or third parties.</li>
                <li>You violate any laws or regulations.</li>
                <li>Your account contains inappropriate content or behavior.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h3>4. Use of Content</h3>
              <p>All content on BringBack is protected by intellectual property laws. By accessing our platform, you are granted a personal, non-transferable license to use the content only for non-commercial purposes. You may not copy, modify, distribute, or sell any content from BringBack without explicit permission.</p>
            </section>

            <section className={styles.section}>
              <h3>5. User-Generated Content</h3>
              <p>You are responsible for all content you upload to BringBack. By submitting content, you confirm that you have the necessary rights to share it. BringBack is not responsible for monitoring or reviewing user-generated content but may remove content deemed offensive, unlawful, or harmful.</p>
            </section>

            <section className={styles.section}>
              <h3>6. Third-Party Services</h3>
              <p>Our platform may contain links or integrations with third-party services. These services are governed by separate terms and conditions. BringBack is not responsible for the availability, performance, or legality of third-party services.</p>
            </section>

            <section className={styles.section}>
              <h3>7. Prohibited Actions</h3>
              <p>Users may not:</p>
              <ul>
                <li>Alter, decompile, or reverse engineer BringBack's services.</li>
                <li>Use bots or automated tools to scrape or access our content.</li>
                <li>Upload or distribute harmful or unlawful content.</li>
                <li>Engage in any activity that violates others' rights or interferes with BringBack's operations.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h3>8. Product Orders and Marketing</h3>
              <p>By ordering products through BringBack, you grant us the right to use images or representations of your products in our promotional materials, unless you explicitly opt-out. We respect your privacy and will only share your content in accordance with your preferences.</p>
            </section>

            <section className={styles.section}>
              <h3>9. Refund and Cancellation Policy</h3>
              <p>We aim to provide high-quality products. If you receive a defective or incorrect item, please contact us within 30 days for a resolution. We do not offer refunds for items that have been processed, shipped, or personalized. Subscription services can be canceled before the renewal date to avoid future charges.</p>
            </section>

            <section className={styles.section}>
              <h3>10. Liability Limitations</h3>
              <p>BringBack is not responsible for any direct, indirect, or incidental damages arising from the use of our services. Users are solely responsible for their interactions and the consequences of their actions on the platform.</p>
            </section>

            <section className={styles.section}>
              <h3>11. Changes to Terms</h3>
              <p>We may modify or update these Terms and Conditions at any time. Any changes will be posted on our website, and your continued use of our services constitutes acceptance of the new terms.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}