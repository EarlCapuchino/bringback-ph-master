import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Pricing.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Pricing() {
  const [selectedFinish, setSelectedFinish] = useState('matte');

  const prices = [
    { size: "0.5\" x 0.5\"", matte: 699, glossy: 789 },
    { size: "1\" x 1\"", matte: 799, glossy: 889 },
    { size: "1.5\" x 1.5\"", matte: 859, glossy: 949 },
    { size: "2\" x 2\"", matte: 999, glossy: 1089 },
    { size: "3\" x 3\"", matte: 1199, glossy: 1289 }
  ];

  const features = {
    matte: [
      "Anti-Glare Properties",
      "Subtle and Professional Look",
      "Nano-scratch Technology",
      "Enhanced Abrasion Resistance",
      "Ideal for Bright Environments"
    ],
    glossy: [
      "Vivid Color and Sharp Details",
      "99% UV-blocking Efficiency",
      "High-Definition Visibility",
      "Shiny and Eye-Catching",
      "Superior Color Vibrancy"
    ]
  };

  return (
    <>
      <Head>
        <title>Pricing - BringBack PH</title>
        <meta name="description" content="BringBack PH QR Sticker Pricing" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h1 className="txt-title">Premium QR Sticker Technology</h1>
            
            <div className={styles.introduction}>
              <p>
                Our proprietary QR sticker technology is meticulously designed to deliver unmatched 
                durability, ensuring our pricing is justified. Created with Polypropylene (PP) Film 
                and reinforced with nanotechnology coatings, BringBack stickers withstand conditions 
                from industrial settings to outdoor use.
              </p>
              <p>
                With superior tear, high water, oil resistance, and secure adhesion to even the most 
                textured surfaces, these stickers are built to last. Printed with Precision thermal 
                transfer methods for readability, BringBack QR stickers offer reliability and aesthetics.
              </p>
            </div>

            <div className={styles.finishTypes}>
              <h2>Choose Your Finish</h2>
              <div className={styles.finishToggle}>
                <button 
                  className={`${styles.finishButton} ${selectedFinish === 'matte' ? styles.active : ''}`}
                  onClick={() => setSelectedFinish('matte')}
                >
                  Matte
                </button>
                <button 
                  className={`${styles.finishButton} ${selectedFinish === 'glossy' ? styles.active : ''}`}
                  onClick={() => setSelectedFinish('glossy')}
                >
                  Glossy
                </button>
              </div>

              <div className={styles.finishFeatures}>
                {features[selectedFinish].map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.pricingTableContainer}>
              <div className={styles.pricingTable}>
                <div className={styles.tableHeader}>
                  <div>Size</div>
                  <div>Price (PHP)</div>
                </div>
                {prices.map((price, index) => (
                  <div 
                    key={index} 
                    className={styles.tableRow}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.size}>{price.size}</div>
                    <div className={styles.price}>
                      ₱{selectedFinish === 'matte' ? price.matte : price.glossy}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.ctaSection}>
              <p>Ready to enhance your item protection with our premium QR stickers?</p>
              <Link href="/order" className={styles.ctaButton}>
                Get Yours Now
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}