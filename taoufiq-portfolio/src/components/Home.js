import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import '../css/Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const fullName = 'Taoufiq El Moutaouakil';
    const [jobTitle, setJobTitle] = useState('');
    const fullJobTitle = 'Full Stack Developer';

    useEffect(() => {
        let nameIndex = 0;
        let titleIndex = 0;

        const typeName = () => {
            if (nameIndex < fullName.length) {
                setName((prev) => prev + fullName.charAt(nameIndex));
                nameIndex++;
            } else if (titleIndex < fullJobTitle.length) {
                setJobTitle((prev) => prev + fullJobTitle.charAt(titleIndex));
                titleIndex++;
            }
        };

        const interval = setInterval(typeName, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="home-container">
            <motion.div
                className="home-inner-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="home-title"
                >
                    Welcome to My Portfolio
                </motion.h1>
                <motion.h1
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="home-name"
                >
                    {name}
                </motion.h1>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <Link to="about-me" smooth={true} duration={500} className="cta-button">
                        Learn More About Me
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="scroll-indicator"
                >
                    <FaArrowDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
