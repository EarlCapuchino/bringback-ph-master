import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/Ads.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Ads({ ads_array }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const desktop_ads = ads_array[0];
  const mobile_ads = ads_array[1];
  const ads = isDesktop ? desktop_ads : mobile_ads;

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused, ads.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % ads.length
    );
  };

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.slideContainer}>
        {ads.map((ad, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`
            }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={ad}
                alt={`Advertisement ${index + 1}`}
                fill
                priority={index === currentIndex}
                className={styles.adImage}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controlsContainer}>
        <button 
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.indicators}>
          {ads.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={styles.indicatorDot} />
            </button>
          ))}
        </div>

        <button 
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}