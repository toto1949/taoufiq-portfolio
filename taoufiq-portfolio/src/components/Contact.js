import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('https://e6y7dbl3b1.execute-api.us-east-1.amazonaws.com/prod/Contact'
                , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                setResponseMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Response error:', result); // Log detailed response
                setResponseMessage('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Request error:', error); // Log detailed error
            setResponseMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="contact-title"
                >
                    Get In Touch
                </motion.h2>
                <motion.div
                    className="contact-content"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >

                    <motion.form
                        className="contact-form"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {responseMessage && <p className="response-message">{responseMessage}</p>}
                    </motion.form>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
