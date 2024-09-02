import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Experience.css';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Ribatis',
        duration: 'June 2021 - July 2023',
        location: 'Casablanca, Morocco',
        responsibilities: [
            'Engineered robust application microservices utilizing Spring Boot and Java 8, integrating API gateway and service registry, and implemented distributed tracing with Zipkin, enhancing system reliability and monitoring capabilities.',
            'Developed security protocols within an API gateway using Spring Security, ensuring safe transmission of sensitive data by implementing OAuth and JWT authentication mechanisms.',
            'Developed and implemented a comprehensive suite of automated tests using JUnit, Mockito, and Cypress, contributing to a 25% improvement in deployment efficiency.',
            'Engineered a robust backend infrastructure utilizing Hibernate, Spring Data, and JPA linked to a MySQL database, enhancing data processing efficiency by 30%.',
            'Developed a scalable e-commerce web application using HTML5, CSS3, JavaScript ES6+, React.js, and Redux-Saga handling asynchronous data flow.',
            'Created efficient front-end user interfaces utilizing react-window and react-virtualized, reducing memory usage by 30% and enhancing user experience.',
            'Developed robust and scalable user interfaces using React functional components and hooks, improving user experience for a SaaS platform with over 500,000 monthly active users.'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Go&Dev',
        duration: 'May 2018 - June 2021',
        location: 'Rabat, Morocco',
        responsibilities: [
            'Engineered and deployed 15+ microservices using Spring Boot and Spring Cloud for a high-traffic web application, delivering RESTful API endpoints that improved system modularity and maintained a 99.9% uptime.',
            'Designed and managed a robust AWS infrastructure comprising EC2 instances, Auto Scaling Groups (ASG), and Elastic Load Balancers (ELB).',
            'Implemented OAuth2 and JWT for secure RESTful API authentication, enhancing application security for over 5,000 active users.',
            'Architected a message queuing system using Kafka, ensuring seamless data processing and implemented Docker containerization for MongoDB.',
            'Developed a web application using React.js for UI components, integrated with Redux for state management, and Material-UI for styling.',
            'Created a robust CI/CD pipeline utilizing Jenkins, Docker, and Kubernetes, reducing deployment times by 50%.',
            'Engineered a highly secure Passkey login and registration system that reduced user authentication time by 30%.',
            'Streamlined the user experience for the Passkey registration process, reducing user drop-off rates by 25%.',
            'Developed an enhanced Passkey login system, heightening user convenience with auto-fill and conditional UI optimizations.'
        ]
    }
];

const Experience = () => {
    const initialVisibleItems = 2;
    const [visibleItems, setVisibleItems] = useState(Array(experiences.length).fill(initialVisibleItems));

    const toggleReadMore = (index) => {
        const newVisibleItems = [...visibleItems];
        newVisibleItems[index] = newVisibleItems[index] === initialVisibleItems ? experiences[index].responsibilities.length : initialVisibleItems;
        setVisibleItems(newVisibleItems);
    };

    return (
        <section className="experience-container" id="experience">
            <motion.h2
                className="experience-title-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Experience
            </motion.h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`experience-card animate-${index}`}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="experience-title">{exp.title}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                        <p className="experience-duration">{exp.duration}</p>
                        <p className="experience-location">{exp.location}</p>
                        <div className="experience-description">
                            <h5>Responsibilities:</h5>
                            <ul>
                                {exp.responsibilities.slice(0, visibleItems[index]).map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                            <button onClick={() => toggleReadMore(index)}>
                                {visibleItems[index] === initialVisibleItems ? 'Read More' : 'Read Less'}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
