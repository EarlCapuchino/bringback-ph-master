// business.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Business.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import GetEmail from '../components/GetEmail';

export default function Business() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isBITSModalOpen, setIsBITSModalOpen] = useState(false);
  const [isEmpIDModalOpen, setIsEmpIDModalOpen] = useState(false);
  const [isQRACSModalOpen, setIsQRACSModalOpen] = useState(false);


  const solutions = [
    {
      id: 'bits',
      title: 'Bulk Item Tagging Service (BITS)',
      description: 'Efficiently manage your inventory and company assets',
      bullets: [
        'Reduce manual inventory tracking efforts.',
        'Improve asset accountability across departments.',
        'Enable faster audits and asset recovery.',
      ],
      features: [
        'Automated Bulk QR Generation: Generate hundreds of unique QR codes in one batch for tagging office equipment, tools, and other assets.',
        'Centralized Repository Access: Store and manage asset details (e.g., serial numbers, maintenance schedules) securely on the BringBack platform.',
        'Easy Tracking and Updates: Employees can scan the QR codes to log updates, report issues, or check asset status in real time.',
        'Customizable Labels: Design QR tags with your company logo, asset categories, and specific item details.',
      ],
       getEmailProps: {
          inquiry: "Get Bulk Item Tagging Service product catalogue",
          response: "Thank you. BITS catalogue will visit your email shortly!",
          isOpen: isBITSModalOpen,
          onClose: () => setIsBITSModalOpen(false),
        },
         setModalOpen: setIsBITSModalOpen,
    },
    {
        id: 'empid',
      title: 'Employee ID Tagging (EmpID)',
      description: 'Simplify employee identification and emergency handling',
      bullets: [
        'Strengthen workplace security and access control.',
        'Enable quick recovery of lost ID cards.',
        'Foster transparency with customizable data sharing.',
      ],
      features: [
        'Personalized QR Codes for IDs: Embed QR codes on employee ID badges that link to their profiles, including department, contact information, and emergency details.',
        'Access Control Integration: Combine QR codes with access control systems to enable secure entry to restricted areas.',
        'Lost ID Recovery: When a badge is lost, anyone scanning the QR code can securely contact the HR department without revealing sensitive data.',
        'Custom Data Sharing Options: Employees can control which details (e.g., email, role, department) are visible when scanned.',
      ],
      getEmailProps: {
          inquiry: "Get Employee ID Tagging product catalogue",
          response: "Thank you. EmpID catalogue will visit your email shortly!",
          isOpen: isEmpIDModalOpen,
          onClose: () => setIsEmpIDModalOpen(false),
        },
        setModalOpen: setIsEmpIDModalOpen,
    },
    {
        id: 'qracs',
      title: 'QR-coded Anti-Counterfeiting System (QRACS)',
      description: 'safeguard your products from counterfeit risks by leveraging advanced QR code solutions.',
      bullets: [
        'Combat counterfeiting and enhance brand reputation.',
        'Enable direct engagement with end users for marketing and support.',
      ],
      features: [
        'Unique QR Code Embedding: Each product receives a one-of-a-kind QR code that links to its authenticity certificate stored in the repository.',
        'Tamper-Proof Labels: QR codes are printed on tamper-resistant materials, ensuring they can’t be removed or replicated.',
        'Dynamic Verification Pages: Scanning the code redirects to a verification page with product details (e.g., manufacturing date, batch number).',
        'Consumer Engagement: QR codes can also provide access to warranties, user guides, and promotional content.',
      ],
        getEmailProps: {
          inquiry: "Get QR-coded Anti-Counterfeiting System product catalogue",
          response: "Thank you. QRACS catalogue will visit your email shortly!",
          isOpen: isQRACSModalOpen,
          onClose: () => setIsQRACSModalOpen(false),
        },
        setModalOpen: setIsQRACSModalOpen,
    },
  ];

  const introParagraph = `Is your business ready to streamline operations, enhance security, and fortify your brand against counterfeiting? BringBack offers tailored solutions designed to forward your business needs. Request your product demo today for modern QR technology.`;


  return (
    <>
      <Head>
        <title>Business Solutions - BringBack PH</title>
        <meta name="description" content="Explore BringBack PH's Business Solutions" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.section}>
              <h1 className="txt-title">Business Solutions</h1>
              <p className={`${styles.introParagraph} txt-content`}>
                  {introParagraph}
              </p>
            <div className={styles.solutionsGrid} ref={ref}>
              {solutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  className={`${styles.solutionCard} ${inView ? styles.animate : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h2 className={styles.solutionTitle}>{solution.title}</h2>
                  <p className={styles.solutionDescription}>{solution.description}</p>
                  <ul className={styles.solutionBullets}>
                    {solution.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <div className={styles.featureSection}>
                    <h3 className={styles.featureTitle}>Key Features:</h3>
                    <ul className={styles.featureList}>
                      {solution.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    </div>
                    <div className={styles.demoButtonContainer}>
                    <button 
                        className={styles.demoButton}
                        onClick={() => solution.setModalOpen(true)}
                    >
                        Request Product Demo
                    </button>
                </div>

                <GetEmail 
                    inquiry={solution.getEmailProps.inquiry}
                    response={solution.getEmailProps.response}
                    isOpen={solution.getEmailProps.isOpen}
                    onClose={solution.getEmailProps.onClose}
                  />

                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}