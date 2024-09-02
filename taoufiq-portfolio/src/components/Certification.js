import React from 'react';
import { motion } from 'framer-motion';
import '../css/Certification.css';
const certifications = [
    {
        title: 'Cloud Application Developer 2021 Mastery Award',
        awardedBy: 'IBM Skills Academy',
        date: '16 March 2022',
        awardedTo: 'Taoufiq El Moutaouakil',
        id: '3871-1647-4293-5338',
        signatories: [
            'Dr. Naguib Attia - Vice President, Global University Programs, IBM USA',
            'Takreem El-Tohamy - General Manager, IBM Middle East and Africa'
        ],
        additionalInfo: 'Successfully passed the IBM Academic Certificate exam. This achievement also earns a Mastery Award Badge which can be accepted from Acclaim.'
    }
];

const Certification = () => {
    return (
        <section className="certification-container" id="certifications">
            <motion.h2
                className="certification-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Certifications
            </motion.h2>
            <div className="certification-timeline">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className={`certification-card animate-${index}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="certification-title">{cert.title}</h3>
                        <p className="certification-awarded-by">{cert.awardedBy}</p>
                        <p className="certification-date">{cert.date}</p>
                        <p className="certification-awarded-to">Awarded to: {cert.awardedTo}</p>
                        <p className="certification-id">Unique ID: {cert.id}</p>
                        <p className="certification-description">{cert.additionalInfo}</p>
                        <p className="certification-signatories">
                            Signatories: {cert.signatories.join(', ')}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certification;
