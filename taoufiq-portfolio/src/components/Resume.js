import React from 'react';
import { motion } from 'framer-motion';
import '../css/Resume.css';
import myResume from '../assets/taoufiq_elmoutaouakil_resume.pdf';

const Resume = () => {
    console.log(myResume);  // This logs the correct URL to your resume file

    return (
        <section className="resume-container" id="resume">
            <motion.h2
                className="resume-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Resume
            </motion.h2>
            <div className="resume-content">
                <motion.div
                    className="resume-viewer"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.3}}
                >
                    <iframe
                        src={myResume}
                        className="resume-iframe"
                        title="Resume"
                        style={{width: '100%', height: '500px', border: 'none', overflow: 'auto'}}
                        frameBorder="0"
                        allowFullScreen={true}
                    />

                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
