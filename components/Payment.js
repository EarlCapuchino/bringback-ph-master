import React, { useState, useMemo } from 'react';
import styles from '../styles/Payment.module.css';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import ShippingAddress from '../components/ShippingAddress';
import GetEmail from '../components/GetEmail';

const Payment = () => {
    const {
      register,
        handleSubmit,
          formState: { errors },
      } = useForm();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);


    const materialOptions = useMemo(() => [
        { label: 'Matte', value: 'matte' },
        { label: 'Glossy', value: 'glossy' },
    ], []);

    const sizeOptions = useMemo(() => [
        { label: '0.5" x 0.5"', value: '0.5', mattePrice: 699, glossyPrice: 789 },
        { label: '1" x 1"', value: '1', mattePrice: 799, glossyPrice: 889 },
        { label: '1.5" x 1.5"', value: '1.5', mattePrice: 859, glossyPrice: 949 },
        { label: '2" x 2"', value: '2', mattePrice: 999, glossyPrice: 1089 },
        { label: '3" x 3"', value: '3', mattePrice: 1199, glossyPrice: 1289 },
    ], []);

    const handleMaterialChange = (option) => {
      setSelectedMaterial(option.value);
    };

    const handleSizeChange = (option) => {
        setSelectedSize(option.value);
    };


     const calculatePrice = () => {
        if (!selectedMaterial || !selectedSize) return 0;
         const selectedSizeOption = sizeOptions.find(size => size.value === selectedSize);
         if (!selectedSizeOption) return 0;
         return selectedMaterial === 'matte' ? selectedSizeOption.mattePrice : selectedSizeOption.glossyPrice
      };
         const totalPrice = calculatePrice();

        const handleSubmitPayment = async (data) => {

          console.log("Payment Data:", data);
            setIsModalOpen(true);

        };

    return (
        <div className={styles.paymentContainer}>
             <h2 className={styles.sectionTitle}>Choose Material Finish and Size</h2>
            <div className={styles.materialOptions}>
                <div className={styles.optionGroup}>
                     <label className={styles.formLabel}>Material Finish</label>
                    <Select
                        options={materialOptions}
                            className={styles.selectInput}
                        onChange={handleMaterialChange}
                        />
                </div>
                  <div className={styles.optionGroup}>
                   <label className={styles.formLabel}>Size</label>
                        <Select
                            options={sizeOptions}
                            className={styles.selectInput}
                             onChange={handleSizeChange}
                         />
                  </div>
                   <div className={styles.priceDisplay}>
                        ₱{totalPrice}*
                   </div>
                   <i>*Each package contains <b>25 copies</b> of the sticker</i>
            </div>
               <ShippingAddress/>
                <h2 className={styles.sectionTitle}>Contact Details</h2>
                    <div className={styles.contactForm}>
                     <div className={styles.optionGroup}>
                           <label className={styles.formLabel}>Full Name</label>
                            <input type="text" {...register('fullName', {required: true})} className={styles.formInput} />
                           {errors.fullName && <p className={styles.errorText}>Full name is required</p>}
                        </div>
                         <div className={styles.optionGroup}>
                           <label className={styles.formLabel}>Phone Number</label>
                           <input type="tel" {...register('phone', {required: true})} className={styles.formInput} />
                                 {errors.phone && <p className={styles.errorText}>Phone number is required</p>}
                       </div>
                    <div className={styles.optionGroup}>
                           <label className={styles.formLabel}>Email Address (optional)</label>
                             <input type="email" {...register('email')} className={styles.formInput} />
                        </div>
                  </div>

                    <div className={styles.paymentForm}>
                        <button type="button" className={styles.payButton} onClick={handleSubmit(handleSubmitPayment)}>Send Order Request</button>
                 </div>
                     <GetEmail
                        inquiry="We will send you the confirmation of your order in this email"
                        response="Thank you! We will validate your order, please check your email shortly"
                         isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                      />
        </div>
    );
};

export default Payment;