import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { sendToTelegram } from '../utils/sendtotelegram';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await sendToTelegram(formData);

            if (result.success) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Failed to send message. Please try again or contact us directly.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An error occurred. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Let's Start Your <span>Success Story</span></h2>
                    <p className={styles.subtitle}>
                        Ready to elevate your culinary brand? Get in touch today
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.infoTitle}>Contact Information</h3>
                        <p className={styles.infoText}>
                            We're here to answer your questions and help you achieve your marketing goals.
                        </p>

                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h4>Location</h4>
                                    <p>Smart Technopark Manouuba, Tunisia</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <FaEnvelope />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h4>Email</h4>
                                    <a href="mailto:contact@redixsolutions.pro">contact@redixsolutions.pro</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <FaPhone />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h4>Phone</h4>
                                    <a href="tel:+21692861655">+216 92 861 655</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {status.message && (
                            <motion.div
                                className={`${styles.statusMessage} ${styles[status.type]}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {status.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                                <span>{status.message}</span>
                            </motion.div>
                        )}

                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                placeholder="Tell us about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                rows="5"
                                required
                                disabled={loading}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            whileHover={{ scale: loading ? 1 : 1.05 }}
                            whileTap={{ scale: loading ? 1 : 0.95 }}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact
