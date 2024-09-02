import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaTools, FaGraduationCap, FaBriefcase, FaEnvelope, FaHome, FaCertificate, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <Link to="home" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaHome style={{ marginRight: '8px' }} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about-me" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaUser style={{ marginRight: '8px' }} />
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaTools style={{ marginRight: '8px' }} />
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="education" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaGraduationCap style={{ marginRight: '8px' }} />
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="certifications" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaCertificate style={{ marginRight: '8px' }} />
                        Certifications
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaBriefcase style={{ marginRight: '8px' }} />
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="resume" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaFileAlt style={{ marginRight: '8px' }} />
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} activeClass="active" onClick={() => setIsMenuOpen(false)}>
                        <FaEnvelope style={{ marginRight: '8px' }} />
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
