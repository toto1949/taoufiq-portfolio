import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaAddressCard, FaCode, FaGithub} from 'react-icons/fa';
import profileImage from '../assets/toto.jpg';
import '../css/AboutMe.css';

const titles = [
    "Full Stack Developer",
    "Back End Developer",
    "Front End Developer",
    "Software Engineer"
];

const About = () => {
    const [currentTitle, setCurrentTitle] = useState(titles[0]);
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentTitle(titles[titleIndex]);
    }, [titleIndex]);

    return (
        <section id="about-me">
            <motion.h2
                className="about-title"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
                About
            </motion.h2>
            <motion.div
                className="about-container"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.8}}
            >
                <div className="about-inner-container">
                    <motion.img
                        src={profileImage}
                        alt="Profile"
                        className="profile-image"
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.8}}
                    />
                    <div className="about-text-container">
                        <motion.h2
                            key={currentTitle}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 20}}
                            transition={{duration: 0.8}}
                            className="title"
                        >
                            {currentTitle}
                        </motion.h2>
                        <div className="contact-containerr">
                            <motion.div
                                className="contact-infos"
                                initial={{x: -50, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.4, duration: 0.8}}
                            >
                                <p><FaPhone/> 641-233-9964</p>
                                <p><FaEnvelope/> taoufiq.moutaouakil@gmail.com</p>
                                <p><FaAddressCard/> 501 N C st, Fairfield, IA, 52556</p>
                            </motion.div>
                            <motion.div
                                className="contact-infos"
                                initial={{x: 50, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.5, duration: 0.8}}
                            >
                                <p><FaCode/> Over 5 years of experience</p>
                                <p><FaLinkedin/><a
                                    href="https://linkedin.com/in/taoufiq-el-moutaouakil-746374228/"> Taoufiq El
                                    Moutaouakil</a></p>
                                <p><FaGithub/> <a href="https://github.com/toto49">Taoufiq El Moutaouakil</a></p>
                            </motion.div>
                        </div>
                        <motion.div
                            className="summary"
                            initial={{y: 50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.8, duration: 0.8}}
                        >
                            <p>
                                I am a technology professional with extensive experience in developing scalable and
                                efficient software solutions across various industries. My expertise includes
                                architecting and leading the implementation of microservices, security protocols, and
                                automated testing. I have a strong background in Java, React.js, and cloud-native
                                architecture, and I am proficient in designing and implementing complex systems using
                                state-of-the-art technologies. I have successfully led cross-functional teams to deliver
                                innovative solutions, leveraging my skills in full-stack development, database
                                management, and DevOps practices.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
