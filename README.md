# BringBack PH

This document provides an overview of my work on the BringBack PH project, along with examples of code snippets that illustrate some of the implementation techniques used. Due to client confidentiality agreements, I cannot share the full project repositories, including commit history or related backend logic.

**Project Overview**

*   **Timeline:** JANUARY 2023 - JANUARY 2025
*   **My Role:** Project Manager

**Summary:**

In this role, I took charge of a project that involved building a comprehensive platform for BringBack PH, featuring numerous RESTful APIs, a responsive ReactJS UI, and seamless integration with authentication and payment gateways. I successfully managed the project while adhering to Agile/Scrum methodologies.

**Key Technologies:**

*   **Frontend:** ReactJS
*   **Backend:** NodeJS, ExpressJS
*   **Database:** AWS RDS (MySQL)
*   **Cloud:** AWS EC2, S3, ELB
*   **Payment Gateway:** PayMaya
*   **CI/CD:** Jenkins

**Key Accomplishments:**

*   Developed and deployed 25+ RESTful APIs and a ReactJS front end with dynamic QR code functionality
*   Integrated authentication and payment gateways (Stripe, PayMaya)
*   Implemented automated testing with 85%+ code coverage
*   Resolved 150+ bugs
*   Designed for scalability on AWS, handling over 1200+ users and 5000+ sales.
*   Achieved 85% sprint completion utilizing Agile/Scrum methodologies

**Code Snippets Overview**

The following code snippets showcase some of the implementation techniques used within the project. They are meant to provide examples of my coding style and the functionality without disclosing sensitive data. These focus on the UI aspect of the project.

*   **Dynamic Content Rendering:** Shows how dynamic data is fetched and rendered within the UI, highlighting the use of state management and data manipulation techniques.

    ```javascript
    // Example: Dynamic Content Rendering
    import React, { useState, useEffect } from 'react';

    function DynamicContentList() {
        const [items, setItems] = useState([]);

        useEffect(() => {
           //simulate API Fetching
          const fetchData = async () => {
           const data = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            ];
             setItems(data);
            };

          fetchData();
         }, []);

      return (
       <ul>
       {items.map(item => (
        <li key={item.id}>{item.name}</li>
         ))}
        </ul>
      );
    }
    export default DynamicContentList;
    ```

*   **Form Validation:** Example of how input validation is implemented, ensuring data integrity within the UI.

    ```javascript
    // Example: Form Validation
    import React, { useState } from 'react';

    function ValidatedForm() {
       const [formData, setFormData] = useState({ name: '', email: '' });
       const [errors, setErrors] = useState({});

       const handleChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
         e.preventDefault();
        const newErrors = {};

        if (!formData.name) { newErrors.name = 'Name is required';}
         if (!formData.email) { newErrors.email = 'Email is required';}
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
        }
     };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
           />
         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        <input
           type="email"
           name="email"
           placeholder="Email"
           value={formData.email}
           onChange={handleChange}
          />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
     );
   }
    export default ValidatedForm;
    ```

**Important Considerations:**

*   **Limited Scope:** This document provides code examples that are just a snippet of the UI functionality, it does not demonstrate all aspects of project development such as backend architecture or deployment.
*   **Context Omission:** Certain code snippets may lack their original context (backend or security specific components) due to privacy concerns.
*   **Focus on Implementation:** The code examples focus on implementation and how the UI works without giving sensitive details.
*   **No Full Project Replication:** These examples do not aim to replicate the full functionality of the original project, they are only for showcasing some techniques.

**Contact:**

If you have any questions about this project or my contributions, please feel free to contact me. Thank you for your understanding.
