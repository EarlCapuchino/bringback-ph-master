import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  const renderProgressIndicators = () => {
    return images.map((_, index) => (
      <div 
        key={index} 
        className={`${styles.progressIndicator} ${index === currentIndex ? styles.active : ''}`}
      >
        <svg viewBox="0 0 36 36" className={styles.progressCircle}>
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={index === currentIndex ? 'var(--primary)' : '#ccc'}
            strokeWidth="3"
          />
        </svg>
      </div>
    ));
  };

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carousel} 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      {isMobile && (
        <div className={styles.progressIndicators}>
          {renderProgressIndicators()}
        </div>
      )}
    </div>
  );
};

export default Carousel;