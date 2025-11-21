import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About REDIX', link: '#about' },
        { name: 'Why Us', link: '#why-us' },
        { name: 'Market Analysis', link: '#market' },
        { name: 'Strategy', link: '#strategy' },
        { name: 'Packages', link: '#packages' },
        { name: 'Contact', link: '#contact' }
    ];

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <a href="#home" className={styles.logo}>
                    <img
                        src={`${process.env.PUBLIC_URL}/redix_logo.png`}
                        alt="REDIX Digital Solutions"
                        className={styles.logoImage}
                    />
                </a>

                <div className={`${styles.navLinks} ${mobileMenu ? styles.active : ''}`}>
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            className={styles.navLink}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMobileMenu(false)}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </div>

                <div
                    className={styles.hamburger}
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    <span className={mobileMenu ? styles.active : ''}></span>
                    <span className={mobileMenu ? styles.active : ''}></span>
                    <span className={mobileMenu ? styles.active : ''}></span>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
