import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaChartLine, FaBullhorn, FaPalette } from 'react-icons/fa';
import styles from '../styles/WhyUs.module.css';

const WhyUs = () => {
    const features = [
        {
            icon: <FaVideo />,
            title: 'Cinematic Production',
            description: 'Professional video shoots capturing every intricate detail of your culinary masterpieces with 4K quality'
        },
        {
            icon: <FaChartLine />,
            title: 'Data-Driven Strategy',
            description: 'Marketing campaigns powered by real market insights and proven engagement metrics'
        },
        {
            icon: <FaBullhorn />,
            title: 'Multi-Platform Reach',
            description: 'Strategic content distribution across TikTok, Instagram, and Facebook for maximum visibility'
        },
        {
            icon: <FaPalette />,
            title: 'Brand Storytelling',
            description: 'Compelling narratives showcasing your authenticity and unique culinary philosophy'
        }
    ];

    return (
        <section className={styles.whyUs} id="why-us">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Why Choose <span>REDIX</span></h2>
                    <p className={styles.subtitle}>
                        We transform chefs into digital influencers through strategic video marketing
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className={styles.iconWrapper}>
                                <div className={styles.icon}>{feature.icon}</div>
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>70%</span>
                        <span className={styles.statLabel}>Recipe Video Engagement</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>6-8%</span>
                        <span className={styles.statLabel}>Food Content Engagement Rate</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>55%</span>
                        <span className={styles.statLabel}>Visit After Seeing Content</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
