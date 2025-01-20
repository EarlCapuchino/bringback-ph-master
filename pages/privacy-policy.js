import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/PrivacyPolicy.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - BringBack PH</title>
        <link rel ="icon" href="/logo.png"/>
        <meta name="description" content="BringBack PH Privacy Policy" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.document}>
            <div className={styles.header}>
              <h1>Privacy Policy</h1>
              <div className={styles.companyInfo}>
                <h2>BringBack Phils.</h2>
                <p>51 Manila S Rd, Uno, Calamba, 4027 Laguna</p>
                <p>Email: <a href="mailto:bringbackph@gmail.com">bringbackph@gmail.com</a></p>
                 <p>Effective Date: January 16, 2025</p>
              </div>
            </div>

            <section className={styles.section}>
              <h3>1. Introduction</h3>
              <p>BringBack Phils. ("BringBack," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services and platform. By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the platform.</p>
            </section>

            <section className={styles.section}>
              <h3>2. Information We Collect</h3>
                <p>We may collect and process the following types of information:</p>
               <ul>
                    <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address, and other similar contact data.</li>
                    <li><strong>Account Credentials:</strong> Username, password, and other security-related information used for authentication and account access.</li>
                    <li><strong>Transaction Information:</strong> Details about payments to and from you and other details of products and services you have purchased from us.</li>
                    <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                   <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h3>3. How We Use Your Information</h3>
              <p>We use the information we collect for various purposes, including to:</p>
                <ul>
                     <li>Provide, operate, and maintain our services.</li>
                    <li>Improve, personalize, and expand our services.</li>
                   <li>Understand and analyze how you use our services.</li>
                     <li>Develop new products, services, features, and functionality.</li>
                     <li>Process transactions and manage your orders.</li>
                     <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.</li>
                    <li>Send you emails.</li>
                   <li>Find and prevent fraud.</li>
                </ul>
            </section>

            <section className={styles.section}>
              <h3>4. Sharing Your Information</h3>
              <p>We may share your personal information with:</p>
               <ul>
                     <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                   <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                   <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                </ul>
            </section>

            <section className={styles.section}>
              <h3>5. Data Security</h3>
             <p>We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, please be aware that no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section className={styles.section}>
              <h3>6. Your Data Protection Rights</h3>
               <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
                 <ul>
                     <li><strong>Access:</strong> The right to request copies of your personal data.</li>
                      <li><strong>Rectification:</strong> The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                     <li><strong>Erasure:</strong> The right to request that we erase your personal data, under certain conditions.</li>
                       <li><strong>Restrict processing:</strong> The right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li><strong>Object to processing:</strong> The right to object to our processing of your personal data, under certain conditions.</li>
                      <li><strong>Data portability:</strong> The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                 </ul>
                 <p>If you wish to exercise any of these rights, please contact us using the information provided above.</p>
            </section>

            <section className={styles.section}>
              <h3>7. Changes to This Privacy Policy</h3>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}