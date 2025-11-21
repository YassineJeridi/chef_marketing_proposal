import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    const services = [
        'Social Media Marketing',
        'Branding & Design',
        'Content Creation',
        'Web & Mobile Development',
        'Digital Advertising',
        'SEO Optimization',
        'Event Coverage',
        'Video Production'
    ];

    const quickLinks = [
        { name: 'About Us', link: '#about' },
        { name: 'Portfolio', link: '#' },
        { name: 'Market Analysis', link: '#market' },
        { name: 'Strategy', link: '#strategy' },
        { name: 'Packages', link: '#packages' },
        { name: 'Main Website', link: 'https://redixsolutions.pro' }
    ];

    const socialLinks = [
        {
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/redixdigitalsolutions/',
            label: 'Instagram'
        },
        {
            icon: <FaFacebook />,
            url: 'https://www.facebook.com/profile.php?id=61560535962106',
            label: 'Facebook'
        },
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/company/redix-digital-solutions/posts/?feedView=all',
            label: 'LinkedIn'
        },
        {
            icon: <FaWhatsapp />,
            url: 'https://wa.me/21692861655',
            label: 'WhatsApp'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <img
                                src={`${process.env.PUBLIC_URL}/redix_logo.png`}
                                alt="REDIX Digital Solutions"
                                className={styles.logoImage}
                            />
                        </div>
                        <p className={styles.tagline}>Your Growth, Our Strategy</p>
                        <p className={styles.description}>
                            Redix Digital Solution helps brands grow with tailored digital strategies,
                            creative content, and innovative technology that deliver measurable results.
                        </p>
                        <div className={styles.social}>
                            <h4 className={styles.socialTitle}>Follow Us</h4>
                            <div className={styles.socialIcons}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className={styles.socialIcon}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Contact Information</h4>
                        <div className={styles.contactInfo}>
                            <p>Smart Technopark Manouuba, Tunisia</p>
                            <a href="mailto:contact@redixsolutions.pro">contact@redixsolutions.pro</a>
                            <a href="https://redixsolutions.pro" target="_blank" rel="noopener noreferrer">redixsolutions.pro</a>
                            <a href="tel:+21692861655">+216 92 861 655</a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Services</h4>
                        <ul className={styles.linksList}>
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © 2025 Redix Digital Solutions. All rights reserved.
                    </p>
                    <p className={styles.prepared}>
                        Prepared for professional chef
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
