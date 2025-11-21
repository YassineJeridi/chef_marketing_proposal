import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    const words = ['Authentic', 'Unique', 'Iconic', 'Extraordinary'];
    const [currentWord, setCurrentWord] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(wordInterval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.overlay}></div>

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className={styles.badgeDot}></span>
                        Culinary Content Excellence
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Your Growth,
                        <br />
                        <span className={styles.gradient}>Our Strategy</span>
                    </motion.h1>

                    {/* Subtitle with animated word */}
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Transform your culinary art into{' '}
                        <motion.span
                            className={styles.animatedWord}
                            key={currentWord}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            {words[currentWord]}
                        </motion.span>
                        {' '}digital masterpieces
                        <br />
                        Showcase every detail with cinematic video content that captivates and converts
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        className={styles.statsRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>70%</span>
                            <span className={styles.statLabel}>Engagement</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>$46B</span>
                            <span className={styles.statLabel}>Market</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>55%</span>
                            <span className={styles.statLabel}>Visit Rate</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className={styles.cta}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <motion.a
                            href="#packages"
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Explore Packages</span>
                            <span className={styles.btnArrow}>→</span>
                        </motion.a>
                        <motion.a
                            href="#market"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See The Data
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <span className={styles.scrollText}>Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaChevronDown className={styles.scrollIcon} />
                    </motion.div>
                </motion.div>

                {/* Enhanced Floating Elements with Mouse Tracking */}
                <div className={styles.floatingElements}>
                    <motion.div
                        className={styles.float1}
                        animate={{
                            y: [0, -30, 0],
                            x: mousePosition.x,
                        }}
                        transition={{
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            x: { type: "spring", stiffness: 50 }
                        }}
                    />
                    <motion.div
                        className={styles.float2}
                        animate={{
                            y: [0, 30, 0],
                            x: -mousePosition.x,
                        }}
                        transition={{
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            x: { type: "spring", stiffness: 50 }
                        }}
                    />
                    <motion.div
                        className={styles.float3}
                        animate={{
                            y: [0, -20, 0],
                            x: mousePosition.y,
                        }}
                        transition={{
                            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                            x: { type: "spring", stiffness: 50 }
                        }}
                    />
                </div>

                {/* Grid Overlay */}
                <div className={styles.gridOverlay}></div>
            </div>
        </section>
    );
};

export default Hero;
