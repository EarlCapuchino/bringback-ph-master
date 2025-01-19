import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Order.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Preview from '../components/Preview';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import QrDesign from '../components/QrDesign';
import Payment from '../components/Payment';
import GetEmail from '../components/GetEmail';


function generateUID() {
    return Math.random().toString(36).substring(2, 10);
}


export default function Order() {
    const [currentStep, setCurrentStep] = useState(0);
    const initialFormData = {
        0: { type: 'text', attribute: 'Name', value: 'Juan Dela Cruz' },
        1: { type: 'text', attribute: 'Age', value: '24' },
        2: { type: 'text', attribute: 'Phone number', value: '+63912-123-4567' },
    };
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [previewData, setPreviewData] = useState(null);
    const [showPreview, setShowPreview] = useState(false)
    const carouselRef = useRef(null);
    const steps = [
        "Information",
        "Design the QR",
        "Payment",
    ];

    const [uniqueId, setUniqueId] = useState('');
    const qrURL = `www.bringbackph.shop/${uniqueId}`;
    useEffect(() => {
        // Generate random ID only once after initial render
        setUniqueId(Math.random().toString(36).substring(2, 10));
    }, []); // Empty dependency array ensures this runs once

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
            }
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            if (carouselRef.current) {
                carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
            }
        }
    };

    // Function to update currentStep based on scroll position
    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollLeft = carouselRef.current.scrollLeft;
            const stepWidth = carouselRef.current.offsetWidth;
            const newStep = Math.round(scrollLeft / stepWidth);
            if (newStep !== currentStep) {
                setCurrentStep(newStep);
            }
        }
    };
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener('scroll', handleScroll)
            }
        }
    }, [currentStep])

    const handleStepClick = (index) => {
        if (carouselRef.current) {
           const stepWidth = carouselRef.current.offsetWidth;
           carouselRef.current.scrollLeft = stepWidth * index
        }
    };


    const handleAddFormField = () => {
        const newIndex = Object.keys(formData).length;
        setFormData(prevFormData => ({
            ...prevFormData,
            [newIndex]: { type: 'text', attribute: '', value: '' },
        }));
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [newIndex]: {}
        }));
    };


    const handleRemoveFormField = (index) => {
        const newFormData = { ...formData };
        delete newFormData[index];
        setFormData(newFormData);
        const newFormErrors = { ...formErrors }
        delete newFormErrors[index]
        setFormErrors(newFormErrors);

    };

    const handleInputChange = (index, field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [index]: {
                ...prevFormData[index],
                [field]: value,
            }
        }));
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [index]: {
                ...prevFormErrors[index],
                [field]: null
            }
        }))
    };

    const handleFileChange = (index, fileType, file) => {
        if (!file) return;
        setFormData(prevFormData => ({
            ...prevFormData,
            [index]: {
                ...prevFormData[index],
                value: file,
            }
        }));
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [index]: {
                ...prevFormErrors[index],
                value: null
            }
        }))
    };
    const handleDateChange = (index, date) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [index]: {
                ...prevFormData[index],
                value: date
            }
        }))
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [index]: {
                ...prevFormErrors[index],
                value: null
            }
        }))
    };



    const validateForm = useCallback(() => {
        let errors = {};
        let isValid = true;

        Object.keys(formData).forEach(index => {
            const item = formData[index]

            if (!item.attribute) {
                errors = {
                    ...errors,
                    [index]: {
                        ...errors[index],
                        attribute: 'Attribute is required'
                    }
                }
                isValid = false
            }


            if (!item.value && item.type !== 'text' && item.type !== 'date') {
                errors = {
                    ...errors,
                    [index]: {
                        ...errors[index],
                        value: 'Value is required'
                    }
                }
                isValid = false
            }

            if (item.type === 'image') {
                if (item.value && !(item.value.type === 'image/png' || item.value.type === 'image/jpeg')) {
                    errors = {
                        ...errors,
                        [index]: {
                            ...errors[index],
                            value: 'Invalid image file format. Must be png or jpg'
                        }
                    }
                    isValid = false;
                }
            }
            if (item.type === 'pdf') {
                if (item.value && item.value.type !== 'application/pdf') {
                    errors = {
                        ...errors,
                        [index]: {
                            ...errors[index],
                            value: 'Invalid PDF file format.'
                        }
                    }
                    isValid = false;
                }
            }
        });

        return { isValid, errors };
    }, [formData]);

    const handleSubmit = () => {
        const { isValid, errors } = validateForm();

        if (isValid) {
            console.log("Form Data:", formData);
            setPreviewData(formData);
            setFormErrors({})
            setShowPreview(true)
        } else {
            console.log("Form Errors:", errors)
            setFormErrors(errors)
            setPreviewData(null);
            setShowPreview(false)
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true)
    };
    const handleCloseModal = () => {
        setIsModalOpen(false)
    };

    return (
        <>
            <Head>
                <title>Order - BringBack PH</title>
                <meta name="description" content="Order your BringBack sticker" />
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" alt="BringBack PH Logo" width={90} height={90} />
                </Link>
            </Head>

            <Header />

            <main className={styles.main}>
                <div className={styles.navBar}>
                  <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.prevButton} ${currentStep === 0 ? styles.disabled : ''}`}
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                    >
                        <FaChevronLeft size={20} />  <span className={styles.buttonText}>Previous</span>
                    </button>
                     </div>
                    <div className={styles.progressBar}>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`${styles.progressStep} ${index <= currentStep ? styles.active : ''}`}
                                onClick={() => handleStepClick(index)}
                            >
                                <span className={styles.stepNumber} >{index + 1}</span>
                                <span className={styles.stepText}>{step}</span>
                                {index < steps.length - 1 && (
                                    <span className={styles.arrow}> <FaChevronRight size={16} color="var(--primary)" /> </span>
                                )}
                            </div>
                        ))}
                    </div>
                     <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.nextButton} ${currentStep === steps.length - 1 ? styles.disabled : ''}`}
                        onClick={handleNext}
                        disabled={currentStep === steps.length - 1}
                    >
                         <span className={styles.buttonText}>Next</span>  <FaChevronRight size={20} />
                    </button>
                      </div>
                </div>
                <div
                    className={styles.carouselContainer}
                    ref={carouselRef}
                >
                    <section
                        className={`${styles.stepSection} ${currentStep === 0 ? styles.active : ''}`}
                    >
                        <h2 className={`${styles.stepHeader} txt-title`}>Insert information</h2>
                        <p className={`${styles.stepContent} txt-content`}>
                            We are thrilled to see you here, it is now your time to create your very own BringBack sticker.
                            Drop your information below
                        </p>
                        <div className={styles.formContainer}>


                            {Object.keys(formData).map((index) => (
                                <div key={index} className={styles.formField}>
                                    <div className={styles.fieldControl}>
                                        <label htmlFor={`type-${index}`} className={styles.formLabel}>Type</label>
                                        <select
                                            id={`type-${index}`}
                                            value={formData[index]?.type || 'text'}
                                            onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                                            className={styles.formInput}
                                        >
                                            <option value="text">Text</option>
                                            <option value="image">Image</option>
                                            <option value="link">Link</option>
                                            <option value="pdf">PDF</option>
                                            <option value="date">Date</option>
                                        </select>
                                    </div>
                                    <div className={styles.fieldControl}>
                                        <label htmlFor={`attribute-${index}`} className={styles.formLabel}>Attribute</label>
                                        <input
                                            type="text"
                                            id={`attribute-${index}`}
                                            value={formData[index]?.attribute || ''}
                                            onChange={(e) => handleInputChange(index, 'attribute', e.target.value)}
                                            className={styles.formInput}
                                        />
                                        {formErrors[index]?.attribute && (
                                            <p className={styles.errorText}>{formErrors[index].attribute}</p>
                                        )}
                                    </div>
                                    <div className={styles.fieldControl}>
                                        <label htmlFor={`value-${index}`} className={styles.formLabel}>Value</label>
                                        {formData[index]?.type === 'text' ? (
                                            <textarea
                                                id={`value-${index}`}
                                                value={formData[index]?.value || ''}
                                                onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                                className={styles.formInput}
                                                rows={3}
                                            />
                                        ) : formData[index]?.type === 'image' ? (
                                            <input
                                                type="file"
                                                id={`value-${index}`}
                                                accept="image/png, image/jpeg"
                                                onChange={(e) => handleFileChange(index, 'image', e.target.files[0])}
                                                className={styles.formInput}
                                            />
                                        ) : formData[index]?.type === 'link' ? (
                                            <input
                                                type="text"
                                                id={`value-${index}`}
                                                value={formData[index]?.value || ''}
                                                onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                                className={styles.formInput}
                                            />
                                        ) : formData[index]?.type === 'pdf' ? (
                                            <input
                                                type="file"
                                                id={`value-${index}`}
                                                accept="application/pdf"
                                                onChange={(e) => handleFileChange(index, 'pdf', e.target.files[0])}
                                                className={styles.formInput}
                                            />
                                        ) : formData[index]?.type === 'date' ? (
                                            <DatePicker
                                                selected={formData[index]?.value || null}
                                                onChange={(date) => handleDateChange(index, date)}
                                                className={styles.formInput}
                                                dateFormat="MM/dd/yyyy hh:mm aa"
                                                showTimeSelect
                                            />
                                        ) : null
                                        }
                                        {formErrors[index]?.value && (
                                            <p className={styles.errorText}>{formErrors[index].value}</p>
                                        )}
                                    </div>
                                    <button type="button" className={styles.deleteButton} onClick={() => handleRemoveFormField(index)}>Delete</button>
                                </div>
                            ))}
                            <div className={styles.formAction}>
                                <button type="button" className={styles.addButton} onClick={handleAddFormField}>Add Field</button>
                                <button type="button" className={styles.previewButton} onClick={handleSubmit}>See Preview</button>
                            </div>


                        </div>
                        {showPreview && (
                            <div className={styles.previewContainer}>
                                <Preview formData={previewData} />
                            </div>
                        )}

                    </section>
                    <section
                        className={`${styles.stepSection} ${currentStep === 1 ? styles.active : ''}`}
                    >
                        <h2 className={`${styles.stepHeader} txt-title`}>Design the QR</h2>
                        <QrDesign url={qrURL} logo="/logo.png" />
                    </section>
                    <section
                        className={`${styles.stepSection} ${currentStep === 2 ? styles.active : ''}`}
                    >
                        <h2 className={`${styles.stepHeader} txt-title`}>Payment</h2>
                        <Payment />
                        <div className={styles.paymentForm}>
                        </div>
                        <GetEmail
                            inquiry="We will send you the confirmation of your order in this email"
                            response="Thank you! We will validate your order, please check your email shortly"
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}