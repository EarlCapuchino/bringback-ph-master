import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Careers.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';

export default function Careers() {
  const [openPosition, setOpenPosition] = useState(null);

  const togglePosition = (position) => {
    setOpenPosition(openPosition === position ? null : position);
  };

  return (
    <>
      <Head>
        <title>Careers - BringBack PH</title>
        <meta name="description" content="Join our team at BringBack PH" />
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
        </Link>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h1 className="text-3xl font-bold text-center mb-8">Careers</h1>
            
            <div className={styles.content}>
              <div className={styles.intro}>
                <p>
                  We're all about creating a space where QR codes are more than just stickers—turning them into recovery tools and connection. Combined with Filipinos who are known for their strong sense of camaraderie and resilience, our office strives for a transformative and strong shared sense of purpose.
                </p>
                <p>
                  We're on a hunt for driven and trainable individuals to join and embrace our very humble family—people who are excited to play and pioneer a new service technology in the Philippines!
                </p>
                <p>
                  If you are interested in any of our open positions, please email your resume and cover letter to: bringbackph@gmail.com
                </p>
              </div>

              <div className={styles.positions}>
                <h2 className="text-2xl font-semibold mb-6">Positions opened</h2>
                
                <div className={styles.positionCards}>
                  {/* Senior Graphic Designer Card */}
                  <div className={styles.card}>
                    <button 
                      className={styles.cardHeader}
                      onClick={() => togglePosition('designer')}
                    >
                      <h3>Senior Graphic Designer</h3>
                      {openPosition === 'designer' ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    
                    {openPosition === 'designer' && (
                      <div className={styles.cardContent}>
                        <p className={styles.jobMeta}>
                          <span>Location: Remote</span>
                          <span>Job Type: Full-Time</span>
                        </p>
                        
                        <div className={styles.jobSection}>
                          <h4>Responsibilities:</h4>
                          <ul>
                            <li>Design visually compelling graphics for web, print, and digital campaigns that align with BringBack PH's brand identity.</li>
                            <li>Develop website mockups and layouts optimized for user experience (UX) and interface (UI) design.</li>
                            <li>Create assets for product packaging, marketing materials, and social media campaigns.</li>
                            <li>Collaborate closely with the marketing and development teams to ensure cohesive branding.</li>
                            <li>Maintain and organize digital assets for reuse and sharing across teams.</li>
                          </ul>
                        </div>
                        
                        <div className={styles.jobSection}>
                          <h4>Required Skills:</h4>
                          <ul>
                            <li>Advanced proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign).</li>
                            <li>Expertise in Figma, Sketch, and Adobe XD for UI/UX design.</li>
                            <li>Knowledge of Canva for quick, brand-consistent social media graphics.</li>
                            <li>Experience in motion graphics using Adobe After Effects or similar software.</li>
                            <li>Familiarity with web design standards, HTML/CSS understanding is a plus.</li>
                            <li>Strong typography, color theory, and layout skills.</li>
                          </ul>
                        </div>
                        
                        <div className={styles.jobSection}>
                          <h4>Qualifications:</h4>
                          <ul>
                            <li>Bachelor's degree in Graphic Design, Multimedia Arts, or a related field.</li>
                            <li>At least 5 years of professional experience in graphic design, with a portfolio demonstrating expertise in web and digital design.</li>
                            <li>Strong problem-solving skills, attention to detail, and ability to manage multiple projects simultaneously.</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Social Media Manager Card */}
                  <div className={styles.card}>
                    <button 
                      className={styles.cardHeader}
                      onClick={() => togglePosition('social')}
                    >
                      <h3>Social Media Manager</h3>
                      {openPosition === 'social' ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    
                    {openPosition === 'social' && (
                      <div className={styles.cardContent}>
                        <p className={styles.jobMeta}>
                          <span>Location: Remote</span>
                          <span>Job Type: Full-Time</span>
                        </p>
                        
                        <div className={styles.jobSection}>
                          <h4>Responsibilities:</h4>
                          <ul>
                            <li>Build and implement BringBack PH's social media presence from scratch across all platforms.</li>
                            <li>Plan, create, and manage content calendars, ensuring consistent posting and engagement.</li>
                            <li>Leverage analytics tools to track social media performance and refine strategies.</li>
                            <li>Develop paid ad campaigns on Facebook, Instagram, and LinkedIn.</li>
                            <li>Monitor competitors and trends to keep the brand relevant and engaging.</li>
                            <li>Engage directly with audiences through comments, messages, and social listening.</li>
                          </ul>
                        </div>
                        
                        <div className={styles.jobSection}>
                          <h4>Required Skills:</h4>
                          <ul>
                            <li>Proficiency in Meta Business Suite, Hootsuite, and Buffer for scheduling and managing social media.</li>
                            <li>Expertise in content creation apps like Canva, Adobe Premiere Pro, and CapCut for dynamic posts and videos.</li>
                            <li>Strong knowledge of platforms: Facebook, Instagram, LinkedIn, Twitter/X, TikTok, YouTube</li>
                            <li>Experience in using analytics tools like Google Analytics, Meta Insights, and Sprout Social.</li>
                            <li>Familiarity with SEO practices for social media posts.</li>
                          </ul>
                        </div>
                        
                        <div className={styles.jobSection}>
                          <h4>Qualifications:</h4>
                          <ul>
                            <li>Bachelor's/Associate's degree or Certifications in Marketing, Communications, or a related field.</li>
                            <li>Minimum of 3 years of experience as a Social Media Manager, with a proven track record of launching and growing brand presence.</li>
                            <li>Exceptional written communication skills and a strong understanding of digital marketing trends.</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <h3>How to Apply:</h3>
                <p>Send your resume, cover letter, and portfolio (if applicable) to bringbackph@gmail.com with the subject line: [Position Title] - [Your Name].</p>
                <p>For inquiries, contact us at:</p>
                <div className={styles.contactDetails}>
                  {/* <p><Phone className="inline mr-2" size={18} /> +63 909 950 1899</p> */}
                  <p><Mail className="inline mr-2" size={18} /> bringbackph@gmail.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}