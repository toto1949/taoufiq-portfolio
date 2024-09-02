import React from 'react';
import { motion } from 'framer-motion';
import '../css/Education.css';

const educationList = [
    {
        institution: 'Maharishi International University',
        degree: 'Master of Science in Computer Science',
        duration: 'Aug 2022 - Present',
        location: 'Fairfield, USA',
        description: 'During my Master of Science in Computer Science program at Maharishi International University, I studied advanced topics such as Amazon Web Services, Enterprise Architecture, Advanced Algorithms, Software Architecture, and Web Application Architecture. The program blended theoretical knowledge with practical skills, preparing me for leadership roles in technology. Specializations in IT Management and Data Science offered additional in-depth courses, further enhancing my expertise.'
    },
    {
        institution: 'Mohammed V University',
        degree: 'Specialized Master\'s in Applied Computer Science and Offshoring',
        duration: 'Nov 2020 - Jun 2022',
        location: 'Rabat, Morocco',
        description: 'In this Specialized Master\'s program at Mohammed V University, I gained in-depth knowledge and practical skills in applied informatics and offshoring. The curriculum covered advanced topics such as software development, database management, and cloud computing, with a focus on optimizing IT processes for global outsourcing. This program equipped me with the technical and strategic expertise needed to excel in the international tech industry.'
    },
    {
        institution: 'Mohammed V University',
        degree: 'Bachelor’s Degree in Mathematical and Computer Science',
        duration: 'Sep 2017 - Oct 2020',
        location: 'Rabat, Morocco',
        description: 'During my Bachelor\'s degree at Mohammed V University, I acquired a strong foundation in computer science principles, algorithms, and mathematical techniques. The program emphasized problem-solving skills, software development, and theoretical concepts, preparing me for advanced studies and professional roles in software engineering and development.'
    }
];

const Education = () => {
    return (
        <section className="education-container" id="education">
            <motion.h2
                className="education-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Education
            </motion.h2>
            <div className="education-timeline">
                {educationList.map((edu, index) => (
                    <motion.div
                        key={index}
                        className={`education-card animate-${index}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="education-institution">{edu.institution}</h3>
                        <h4 className="education-degree">{edu.degree}</h4>
                        <p className="education-duration">{edu.duration} | {edu.location}</p>
                        <p className="education-description">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
