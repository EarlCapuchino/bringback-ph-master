import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const carouselImages = [
    '/01.webp',
    '/02.webp',
    '/03.webp'
  ];

  return (
    <>
      <Head>
        <title>About - BringBack PH</title>
        <link rel ="icon" href="/logo.png"/>
        <meta name="description" content="Learn about BringBack PH's mission and story" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h1 className="txt-title">About</h1>
            <div className={styles.content}>
              <p className="txt-content">
                BringBack is a QR code sticker printing and data warehouse service. 
                We aim to return valuable items to their original owners whenever it is lost.
              </p>
              <p className="txt-content">
                We believe that every finder is a keeper of good heart! They would want to 
                return these things to you! We deserve to get our loved items back to our pockets.
              </p>
            </div>
          </section>
          {/* <Carousel images={carouselImages} /> */}
          <section className={styles.section}>
            <h2 className="txt-title">Story</h2>
            <div className={styles.content}>
              <p className="txt-content">
                BringBack is more than just stickers; it's about redefining how we recover our 
                valuable and sentimental possessions. Whether it's a high-end gadget or a cherished 
                keepsake, we believe everyone deserves a simple and reliable recovery solution. 
                Inspired by our community and fueled by creativity, we've embraced the power of QR 
                technology to connect people with their lost items seamlessly.
              </p>
              <p className="txt-content">
                Based in the bustling Calamba, Laguna, BringBack has been one of the pioneers for 
                custom QR sticker printing in the Philippines. Our mission is clear: to provide 
                premium-quality and accessible stickers that simplify item recovery. Our products 
                are designed for durability, featuring weather-resistant coatings and outdoor-grade 
                materials, ensuring they stand up to the test of time.
              </p>
              <p className="txt-content">
                We were able to return loved BringBack-coded items from different people across NCR 
                and South Luzon.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}