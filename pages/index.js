import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Ads from '../components/Ads';
import MarqueeAds from '../components/MarqueeAds';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  GiLayeredArmor,
  GiMetalBar,
  GiPaintBrush,
  GiSunCloud,
} from 'react-icons/gi';

export default function Home() {
    const ads_array = [
        // Desktop ads
        [
            '/ads_01.png',
            '/ads_02.png',
            '/ads_03.png',
            '/ads_04.png'
        ],
        // Mobile ads
        [
            '/ads_01m.png',
            '/ads_02m.png',
            '/ads_03m.png',
            '/ads_04m.png'
        ]
    ];

    const { ref: whatRef, inView: whatInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: howRef, inView: howInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: materialRef, inView: materialInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const howSteps = [
        {
            id: 1,
            title: 'Fill Out the Order Form',
            description:
                'Provide the details you want to share, such as your name, contact number, address, social media links, website, or any other information. These credentials will be embedded in your QR code to help others return your lost item.',
            image: '/how_1.svg',
        },
        {
            id: 2,
            title: 'Design Your QR Code',
            description:
                'Customize your QR code to suit your needs! Choose the color, material, and size that best fit your style and preferences.',
            image: '/how_2.svg',
        },
        {
            id: 3,
            title: 'Store Your Data Securely',
            description:
                'Your information is saved in our online repository, which can be accessed by anyone who scans your QR code. While the data is public for item recovery purposes, we ensure that it’s securely hosted to protect against unauthorized tampering.',
            image: '/how_3.svg',
        },
        {
            id: 4,
            title: 'Order Processing & Shipping',
            description:
                'We process your order within 1-3 business days, and delivery typically takes 3-7 business days, depending on your location.',
            image: '/how_4.svg',
        },
        {
            id: 5,
            title: 'Receive & Verify Your Stickers',
            description:
                'When your stickers arrive, simply scan the QR code to ensure your credentials are accurate. Once activated, anyone who finds your lost item can scan the code to contact you and help return it. Your information will remain securely stored on our platform indefinitely unless you request its removal.',
            image: '/how_5.svg',
        },
    ];


    const testimonials = [
          {
              name: "Myrna S.",
              rating: 5,
              review:
                "At first, I only used it for fun, recommended to me by my friend. I put it on things I often lose, especially my umbrella. Last month, there was heavy rain, and I used and lost it at a bus terminal here in Makati. The same day, someone called my phone saying they found it and left it at the bus ticket counter. I was able to retrieve it the following day. The sticker is so handy since buying an umbrella can be quite expensive, this is actually my fourth one. I'm so glad it's with a sticker now. It's waterproof too!",
              image: "testi1.png",
          },
          {
              name: "Hajeed J.",
              rating: 5,
              review:
                "I thought it was just a sticker containing information about you, but it turns out there's online information on their website. I tried using it as a tag for the cats at our mini self-proclaimed “rescue house”, and I stuck it on their collars. I added a map to the QR code and the address where they can be returned in case they get lost.",
              image: "testi2.png",
          },
            {
              name: "Anne-Marie D.",
              rating: 5,
              review:
                "This is my third purchase. Since the first one, their shipping has always been fast. All the stickers are in good condition, and I would highly recommend it!",
                image: "testi3.png",
          },
          {
              name: "Krisha Mae E.",
              rating: 5,
              review:
                "I think this is first here in the Philippines. A very genius creation and worth the price.",
              image: "testi4.png",
          },
          {
              name: "Jon Dominic C.",
              rating: 5,
              review:
                "It never tears and lasts all conditions due to its material. Very surprised that it is also a product with quality.  I can stick it anywhere, especially on metals. Perfect for my costly outdoor equipment and sports gear.",
              image: "testi5.png",
          },
    ];


    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);



    const handlePrev = () => {
        setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
        if(carouselRef.current){
          carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        }
    };

    const handleNext = () => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      if(carouselRef.current){
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
    };
    const handleDragStart = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleDragEnd = () => {
    setIsDragging(false);
    };
    const handleDragMove = (e) => {
      if(!isDragging) return;

      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; //scroll-fast
      carouselRef.current.scrollLeft = scrollLeft - walk;

    };

    const materials = [
      {
          title: "Polypropylene (PP) Film with Advanced Polymer Reinforcement",
          icon: <GiLayeredArmor size={40} />,
          features: [
            "Superior tear resistance for long-lasting durability.",
              "Excellent dimensional stability, ensuring adhesion on uneven or curved surfaces.",
              "High water and oil resistance for outdoor and industrial applications.",
          ],
      },
      {
         title: "High-Performance Pressure-Sensitive Adhesive (PSA)",
         icon: <GiMetalBar size={40} />,
         features: [
              "Bonds securely to diverse substrates, including rough and textured surfaces like anodized aluminum or polyethylene.",
              "Temperature tolerance range: -20°C to 80°C for extreme environments.",
              "Chemically inert to resist solvents and cleaning agents, ensuring longevity in industrial settings.",
              "Peel strength remains consistent for over 12 months under standard conditions.",
          ],
     },
     {
          title: "Dual-Finish Nanotechnology Coating",
          icon: <GiPaintBrush size={40} />,
          features: [
              "Matte Finish:",
               "Anti-glare properties for superior visibility in direct sunlight.",
              "Nano-scratch technology provides enhanced resistance to abrasion.",
                "Textured surface with minimal light reflection for professional, understated designs.",
              "Gloss Finish:",
              "Micro-gloss layering for brilliant color reproduction and high-definition QR visibility.",
               "UV-protection coating rated at 99% UV-blocking efficiency, preventing discoloration or fading over 5 years.",
          ],
      },
     {
        title: "Direct Thermal Transfer QR Code printing",
          icon: <GiSunCloud size={40} />,
        features: [
              "Industrial-grade direct thermal transfer printers integrated with precision die-cutting systems.",
              "Resolution: 600 dpi for unparalleled clarity and scanning efficiency, even on micro QR codes.",
             "Ink Composition: Eco-solvent ink infused with nanopigments for smudge-proof, water-resistant, and fade-proof properties.",
         ],
     },
    ];
    return (
        <>
            <Head>
                <title>BringBack - Your first QR code repository-and-sticker solution</title>
                <link rel ="icon" href="/logo.png"/>
                <meta name="description" content="Your first QR code repository-and-sticker solution" />
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
                </Link>
            </Head>

            <Header />

            <main className={styles.main}>
                <section className={styles.ads_main}>
                    <section className={styles.ads_container}>
                        <Ads ads_array={ads_array} />
                    </section>
                    <section className={styles.marquee_ads}>
                        <MarqueeAds />
                    </section>
                </section>
                {/* What Section */}
                <section className={`${styles.what_section} ${whatInView ? styles.animate : ''}`} ref={whatRef}>
                    <div className={styles.what_content}>
                        <h2 className={`${styles.what_header} txt-title`}>What are BringBack stickers?</h2>
                        <p className={`${styles.what_paragraph} txt-content`}>
                            BringBack Stickers are creative QR-coded labels designed to help you identify and protect your valuable items.
                            Whether it’s your phone, wallet, keys, or other important belongings, these stickers provide an effective solution for item recovery.
                            Each sticker links to a secure repository where your contact information is stored, accessible only through our protected website.
                            If your item is ever lost, finders can easily scan the QR code to notify you and arrange for its return.
                        </p>
                    </div>
                    {/* <div className={styles.what_image}>
                      <Image
                            src="/sticker_1.png"
                            alt="BringBack Sticker"
                            width={500}
                            height={500}
                            className={styles.stickerImage}
                        />
                    </div> */}
                </section>

                {/* How Section */}
                <section className={`${styles.how_section} ${howInView ? styles.animate : ''}`} ref={howRef}>
                    <h2 className={`${styles.how_header} txt-title`}>How does it work?</h2>
                    <div className={styles.how_steps}>
                        {howSteps.map((step, index) => (
                            <div key={step.id} className={`${styles.how_step}`}>
                                 <div className={styles.stepImageWrapper} data-step-number={index + 1}>
                                      <Image
                                        src={step.image}
                                        alt={`Step ${step.id}`}
                                        width={80}
                                        height={80}
                                        className={styles.stepImage}
                                    />
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>

                                <div
                                    className={styles.progressBar}
                                    style={{
                                            width: `${(index + 1) * (100 / howSteps.length)}%`,
                                        }}
                                    ></div>

                            </div>
                        ))}
                        </div>

                </section>

                <div className={styles.orderButtonContainer}>
                <Link href="/order">
                    <button className={styles.orderButton}>
                        Order Now
                    </button>
                </Link>
                </div>
                
                {/* Testimonial Section */}
                <section className={styles.testimonial_section}>
                <h2 className={`${styles.testimonial_header} txt-title`}>
                    What our users say</h2>
                    <div
                        className={styles.testimonial_carousel}
                          ref={carouselRef}
                          onMouseDown={handleDragStart}
                          onMouseUp={handleDragEnd}
                          onMouseMove={handleDragMove}
                          onMouseLeave={handleDragEnd}
                            onTouchStart={(e) => handleDragStart({pageX: e.touches[0].pageX})}
                          onTouchEnd={handleDragEnd}
                          onTouchMove={(e) => handleDragMove({pageX: e.touches[0].pageX})}
                        >
                          {testimonials.map((testi, index) => (
                              <div
                                  key={index}
                                className={`${styles.testimonial_card} ${index === currentTestimonial ? styles.active : ''}`}

                              >
                              <div className={styles.testimonial_content}>
                              <p className={styles.review}>{`"${testi.review}"`}</p>
                                <h3 className={styles.testifier_name}>- {testi.name}</h3>
                                  <div className={styles.rating}>
                                      {[...Array(testi.rating)].map((_, i) => (
                                            <span key={i} className={styles.star}>★</span>
                                      ))}
                                  </div>
                                </div>
                                    {/* <div className={styles.testimonial_image}>
                                        <Image
                                              src={`/${testi.image}`}
                                              alt={testi.name}
                                                width={150}
                                                height={150}
                                                className={styles.testifier_image}
                                            />
                                      </div> */}

                                </div>

                            ))}

                      </div>
                    <div className={styles.testimonial_controls}>
                        <button className={styles.arrowButton} onClick={handlePrev}>
                            <FaChevronLeft size={24} color="var(--primary)"/>
                        </button>
                          <div className={styles.progressContainer}>
                            {[...Array(testimonials.length)].map((_, index) => (
                              <span
                                key={index}
                                className={`${styles.progressDot} ${index === currentTestimonial ? styles.activeDot : ''}`}
                                  />
                            ))}
                          </div>
                        <button className={styles.arrowButton} onClick={handleNext}>
                          <FaChevronRight size={24} color="var(--primary)"/>
                        </button>
                      </div>

                </section>

                {/* Materials Section */}
                <section className={`${styles.materials_section} ${materialInView ? styles.animate : ''}`} ref={materialRef}>
                        <h2 className={`${styles.materials_header} txt-title`}>Our Proprietary Material</h2>
                        <p className={`${styles.materials_paragraph} txt-content`}>
                             BringBack’s proprietary QR sticker technology is crafted to meet the standards of durability.
                              Our stickers remain visually intact under different circumstances
                        </p>
                        <div className={styles.materials_grid}>
                            {materials.map((material, index) => (
                               <div key={index} className={styles.material_card}>
                                   <div className={styles.material_icon}>{material.icon}</div>
                                   <h3 className={styles.material_title}>{material.title}</h3>
                                   <ul className={styles.material_features}>
                                       {material.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                       ))}
                                   </ul>
                               </div>
                           ))}
                         </div>
                </section>

            </main>

            <Footer />
        </>
    );
}