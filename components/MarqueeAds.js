// MarqueeAds.js
import Image from 'next/image';
import styles from '../styles/MarqueeAds.module.css';

const MarqueeAds = () => {
  const adItems = [
    { text: 'Tamper-Proof', image: '/roll_01.svg' },
    { text: 'Personalized Stickers', image: '/roll_02.svg' },
    { text: 'No Hidden Fees', image: '/roll_03.svg' },
    { text: 'Fast Shipping', image: '/roll_04.svg' },
    { text: 'Cloud-Powered Data', image: '/roll_05.svg' },
    { text: 'Fast Scanning', image: '/roll_06.svg' },
    { text: 'Global Accessibility', image: '/roll_07.svg' }
  ];

  const MarqueeGroup = () => (
    <div className={styles.marqueeGroup}>
      {adItems.map((item, index) => (
        <div key={index} className={styles.marqueeItem}>
          <div className={styles.imageWrapper}>
            {/* just comment out if wised to include images
            <Image
              src={item.image}
              alt={item.text}
              width={32}
              height={32}
              className={styles.icon}
            /> */}
          </div>
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup /> {/* Added third group for smoother infinite loop */}
      </div>
    </div>
  );
};

export default MarqueeAds;
