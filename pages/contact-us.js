import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/ContactUs.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        orderSN: '',
        email: '',
        description: '',
        file: null,
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
           setFormData((prevData) => ({
            ...prevData,
           [name]: type === 'file' ? files[0] : value,
          }));
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null
         }))
      };

      const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
           isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
            isValid = false;
        }
        if(!formData.email.trim()){
             errors.email = 'Email is required'
             isValid = false
         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format'
             isValid = false
         }
        setFormErrors(errors)
          return isValid
     };

    const handleSubmit = async (e) => {
        e.preventDefault();
          if (validateForm()){
               setIsSubmitting(true);
               await new Promise((resolve) => setTimeout(resolve, 4000));
              setIsSubmitting(false)
               setShowModal(true);
              setFormData({
                name: '',
                subject: '',
                orderSN: '',
                email: '',
                description: '',
                file: null,
              });
           }

    };

       const handleCloseModal = () => {
           setShowModal(false);
     };



    return (
        <>
            <Head>
                <title>Contact Us - BringBack PH</title>
                <link rel ="icon" href="/logo.png"/>
                <meta name="description" content="Contact BringBack PH" />
                <Link href="/" className={styles.logo}>
                  <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
              </Link>
            </Head>

            <Header />

            <main className={styles.main}>
                 <div className={styles.container}>
                    <h1 className={`${styles.mainTitle} txt-title`}>Contact Us</h1>
                    <p className={`${styles.mainContent} txt-content`}>We're here to help and answer any questions you might have.
                                    Feel free to reach out to us.</p>
                       <div className={styles.contactWrapper}>
                           <div className={styles.contactForm}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.formLabel}>Name <span className={styles.required}>*</span></label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} />
                                    {formErrors.name && <p className={styles.errorText}>{formErrors.name}</p>}
                                </div>

                                  <div className={styles.formGroup}>
                                    <label htmlFor="subject" className={styles.formLabel}>Subject <span className={styles.required}>*</span></label>
                                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={styles.formInput} />
                                      {formErrors.subject && <p className={styles.errorText}>{formErrors.subject}</p>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="orderSN" className={styles.formLabel}>Order SN</label>
                                    <input type="text" id="orderSN" name="orderSN" value={formData.orderSN} onChange={handleChange} className={styles.formInput} />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.formLabel}>Your Email <span className={styles.required}>*</span></label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} />
                                      {formErrors.email && <p className={styles.errorText}>{formErrors.email}</p>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="description" className={styles.formLabel}>Description</label>
                                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="5" className={styles.formInput} />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="file" className={styles.formLabel}>Attach File</label>
                                    <input type="file" id="file" name="file" onChange={handleChange} className={styles.formInput} />
                                </div>

                                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>

                            </form>
                           </div>
                          <div className={styles.contactInfo}>
                              <h3 className={`${styles.contactTitle}`}>Contact Information</h3>
                            <div className={styles.infoGroup}>
                               <h6 className={styles.infoTitle}>Call Us:</h6>
                                  <p>+63 965-504-5664</p>
                              </div>

                              <div className={styles.infoGroup}>
                                  <h6 className={styles.infoTitle}>Email:</h6>
                                  <p>bringbackph@gmail.com</p>
                              </div>
                              <div className={styles.infoGroup}>
                                  <h6 className={styles.infoTitle}>Address:</h6>
                                  <p>51 Manila S Rd, Uno, Calamba, 4027 Laguna</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  {showModal && (
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContent}>
                            <p>Thank you for contacting us, we will get back to you soon</p>
                           <button onClick={handleCloseModal} className={styles.closeModalButton}>Close</button>
                         </div>
                     </div>
                 )}

            </main>

            <Footer />
        </>
    );
}

export default ContactUs;