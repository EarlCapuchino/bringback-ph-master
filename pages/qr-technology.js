// qr-technology.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/QrTechnology.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import GetEmail from '../components/GetEmail';

export default function QrTechnology() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: '/qrtech_01.svg',
      title: 'Publicly Accessible for Recovery',
      description: 'Your shared data is accessible via the QR code for finders to contact you.'
    },
    {
      icon: '/qrtech_02.svg',
      title: 'Secure & Tamper-Proof',
      description: 'Built with advanced encryption and hosted on a reliable platform to protect your information.'
    },
    {
      icon: '/qrtech_03.svg',
      title: 'Access Anytime, Anywhere',
      description: 'Cloud-based technology ensures global accessibility.'
    },
    {
      icon: '/qrtech_04.svg',
      title: 'Complete Control',
      description: 'Update, modify, or remove your data anytime through BringBack support.'
    },
    {
      icon: '/qrtech_05.svg',
      title: 'Data Analytics',
      description: 'Track scan statistics to monitor engagement and retrieval success rates.'
    },
    {
      icon: '/qrtech_06.svg',
      title: 'Customizable QR Codes',
      description: 'Personalize your QR codes with logos and colors to align with your brand identity.'
    },
    {
      icon: '/qrtech_07.svg',
      title: 'Multi-Platform Compatibility',
      description: 'Ensure QR codes are scannable across various devices and QR code reader applications.'
    },
    {
      icon: '/qrtech_08.svg',
      title: 'Scalability',
      description: 'Accommodate an increasing number of QR codes and associated data without compromising performance.'
    },
    {
      icon: '/qrtech_09.svg',
      title: 'Compliance with Data Protection Regulations',
      description: 'Adhere to relevant laws and regulations to ensure user data privacy and security.'
    }
  ];

  return (
    <>
      <Head>
        <title>QR Technology - BringBack PH</title>
        <meta name="description" content="Learn about BringBack PH's QR code data repository technology" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h1 className="txt-title">QR Code Data Repository</h1>
            <div className={styles.content}>
              <p className="txt-content">
                QR Code Data Repository is a secure, cloud-based platform that stores the details 
                you embed in your QR code. When someone scans your QR code, they can instantly 
                access the specific information you've shared, making it easy to return your lost item.
              </p>
              
              <h2 className={styles.featuresTitle}>Key Features</h2>
              <div className={styles.featuresGrid} ref={ref}>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`${styles.featureCard} ${inView ? styles.animate : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.iconWrapper}>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                        className={styles.featureIcon}
                      />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              <div className={styles.demoButtonContainer}>
                <button 
                    className={styles.demoButton}
                    onClick={() => setIsModalOpen(true)}
                >
                    Request Demo
                </button>
              </div>

            <GetEmail 
            inquiry="Get demo from us? Please provide your email"
            response="Thank you. We will keep in touch with you soon!"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            />
              
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}