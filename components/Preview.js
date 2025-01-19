import React, { useState } from 'react';
import styles from '../styles/Preview.module.css';
import {
    AiOutlineMobile,
    AiOutlineTablet,
    AiOutlineDesktop,
} from 'react-icons/ai';
import Image from 'next/image';

const Preview = ({ formData }) => {
    const [device, setDevice] = useState('pc');

    const renderValue = (item) => {
        if (item.type === 'text') {
            return <p className={styles.textValue}>{item.value}</p>;
        } else if (item.type === 'image' && item.value) {
            return (
                <div className={styles.imageContainer}>
                    <Image
                        src={URL.createObjectURL(item.value)}
                        alt={item.attribute}
                        width={300}
                        height={200}
                       className={styles.previewImage}
                    />
                </div>
            );
        }
        else if (item.type === 'link' && item.value) {
             return  (
                  <a href={item.value} className={styles.linkValue}>
                    {item.value}
                </a>
              )
          }
        else if (item.type === 'pdf' && item.value) {
          return (
             <div className={styles.pdfContainer}>
                  <iframe
                      src={URL.createObjectURL(item.value)}
                     className={styles.pdfFrame}
                     />
                </div>

             );
          } else if (item.type === 'date' && item.value) {
             return <p className={styles.textValue}>{item.value.toString()}</p>;
          }

        return null;
    };
      const renderDeviceButtons = () => {
        if(typeof window !== "undefined" && window.innerWidth <= 768){
            if(window.innerWidth <= 480) {
                return  <button
                           className={`${styles.deviceButton} ${device === 'phone' ? styles.active : ''}`}
                          onClick={() => setDevice('phone')}
                     >
                        <AiOutlineMobile size={24} />
                     </button>
            }
              return    <>
                 <button
                    className={`${styles.deviceButton} ${device === 'phone' ? styles.active : ''}`}
                     onClick={() => setDevice('phone')}
                 >
                    <AiOutlineMobile size={24} />
                </button>
                 <button
                   className={`${styles.deviceButton} ${device === 'tablet' ? styles.active : ''}`}
                    onClick={() => setDevice('tablet')}
                   >
                     <AiOutlineTablet size={24} />
                </button>
                  <p className={styles.mobilePrompt}>(To see larger dimensions, please use PC)</p>
                </>

        }
       return <>
           <button
                    className={`${styles.deviceButton} ${device === 'phone' ? styles.active : ''}`}
                     onClick={() => setDevice('phone')}
                 >
                    <AiOutlineMobile size={24} />
                </button>
                 <button
                   className={`${styles.deviceButton} ${device === 'tablet' ? styles.active : ''}`}
                    onClick={() => setDevice('tablet')}
                   >
                     <AiOutlineTablet size={24} />
                </button>
                  <button
                   className={`${styles.deviceButton} ${device === 'pc' ? styles.active : ''}`}
                     onClick={() => setDevice('pc')}
                   >
                    <AiOutlineDesktop size={24} />
                </button>
         </>

      }

      const deviceClass =  styles[`device-${device}`]
    return (
        <div className={`${styles.previewPage} ${deviceClass}`}>
             <div className={styles.deviceSelector}>
                 {renderDeviceButtons()}
             </div>

            {Object.keys(formData).map((index) => (
                <div key={index} className={styles.previewItem}>
                    <h3 className={styles.attribute}>{formData[index].attribute}</h3>
                  <div className={styles.valueContainer}>
                      {renderValue(formData[index])}
                  </div>
                </div>
            ))}

        </div>
    );
};

export default Preview;