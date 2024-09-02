import React from 'react';
import { motion } from 'framer-motion';
import '../css/Skills.css';

const categorizedSkills = {
    Development: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 50 },
    ],
    DevOps: [
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 85 },
        { name: 'Git', level: 75 },
        { name: 'Kafka', level: 90 },
        { name: 'Kubernetes', level: 85 },
    ],
    Database: [
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 95 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 70 },
    ],
    Methodologies: [
        { name: 'Agile', level: 85 },
        { name: 'Scrum', level: 80 },
        { name: 'Kanban', level: 75 },
        { name: 'Lean', level: 70 },
        { name: 'DevOps Practices', level: 80 },
    ],
};

const Skills = () => {
    return (
        <section className="skills-container" id="skills">
            <motion.h2
                className="skills-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Skills
            </motion.h2>
            <div className="cards-container">
                {Object.keys(categorizedSkills).map((category, index) => (
                    <motion.div
                        key={index}
                        className="skills-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3 className="category-title">{category}</h3>
                        {categorizedSkills[category].map((skill, skillIndex) => (
                            <div key={skillIndex} className="skill-item">
                                <div className="skill-name">{skill.name}</div>
                                <div className="skill-bar">
                                    <motion.div
                                        className="skill-progress"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 0.7, delay: skillIndex * 0.1 }}
                                    />
                                </div>
                                <div className="skill-level">{skill.level}%</div>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
