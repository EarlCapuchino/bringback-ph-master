import React, { useState, useEffect, useCallback } from 'react';
import styles from '../styles/ShippingAddress.module.css';
import { regions, provinces, cities, barangays } from 'select-philippines-address';
import { useForm } from 'react-hook-form';


const ShippingAddress = () => {
    const [regionData, setRegionData] = useState([]);
    const [provinceData, setProvinceData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [barangayData, setBarangayData] = useState([]);
     const { register } = useForm();

    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedBarangay, setSelectedBarangay] = useState("");

     useEffect(() => {
        regions().then(response => {
            setRegionData(response);
        });
    }, []);

    const handleRegionChange = useCallback((e) => {
        setSelectedRegion(e.target.value);
         setSelectedProvince("");
            setSelectedCity("");
             setSelectedBarangay("");
        provinces(e.target.value).then(response => {
            setProvinceData(response);
            setCityData([]);
            setBarangayData([]);
        });
    },[]);

    const handleProvinceChange = useCallback((e) => {
        setSelectedProvince(e.target.value);
         setSelectedCity("");
        setSelectedBarangay("");
        cities(e.target.value).then(response => {
            setCityData(response);
            setBarangayData([]);
        });
    }, []);

    const handleCityChange = useCallback((e) => {
       setSelectedCity(e.target.value);
       setSelectedBarangay("");
        barangays(e.target.value).then(response => {
            setBarangayData(response);
        });
    }, []);

    const handleBarangayChange = useCallback((e) => {
        setSelectedBarangay(e.target.value);
    }, []);

    return (
        <div className={styles.shippingAddressContainer}>
             <h2 className={styles.sectionTitle}>Shipping Address</h2>
            <div className={styles.addressForm}>
                    <div className={styles.optionGroup}>
                            <label className={styles.formLabel}>Country</label>
                             <input type="text" value="Philippines" className={styles.formInput} disabled />
                     </div>
                <div className={styles.optionGroup}>
                     <label className={styles.formLabel}>Region</label>
                    <select
                         className={styles.selectInput}
                         onChange={handleRegionChange}
                           value={selectedRegion || ""}

                       >
                             <option disabled value="">Select Region</option>
                                 {regionData.map((item) => (
                                         <option key={item.region_code} value={item.region_code}>{item.region_name}</option>
                                    ))}

                            </select>

                   </div>

                   <div className={styles.optionGroup}>
                         <label className={styles.formLabel}>Province</label>
                        <select  className={styles.selectInput}
                            onChange={handleProvinceChange}
                              value={selectedProvince || ""}
                           >
                              <option disabled value="">Select Province</option>
                             {provinceData.map((item) => (
                                 <option key={item.province_code} value={item.province_code}>{item.province_name}</option>
                             ))}
                         </select>

                   </div>
                  <div className={styles.optionGroup}>
                        <label className={styles.formLabel}>City/Municipality</label>
                         <select  className={styles.selectInput}
                         onChange={handleCityChange}
                           value={selectedCity || ""}
                           >
                                 <option disabled value="">Select City/Municipality</option>
                               {cityData.map((item) => (
                                  <option key={item.city_code} value={item.city_code}>{item.city_name}</option>
                             ))}
                            </select>

                  </div>
                    <div className={styles.optionGroup}>
                        <label className={styles.formLabel}>Barangay</label>
                         <select  className={styles.selectInput} onChange={handleBarangayChange}
                           value={selectedBarangay || ""}
                         >
                                 <option disabled value="">Select Barangay</option>
                               {barangayData.map((item) => (
                                  <option key={item.brgy_code} value={item.brgy_code}>{item.brgy_name}</option>
                             ))}
                            </select>

                     </div>
                       <div className={styles.optionGroup}>
                        <label className={styles.formLabel}>Address Line 1</label>
                           <input type="text"   className={styles.formInput}   {...register('address1')} />
                     </div>
                     <div className={styles.optionGroup}>
                          <label className={styles.formLabel}>Address Line 2</label>
                           <input type="text"  className={styles.formInput}  {...register('address2')} />
                       </div>
            </div>
         </div>
    );
};

export default ShippingAddress;