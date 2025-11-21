import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaStar } from 'react-icons/fa';
import styles from '../styles/Packages.module.css';

const Packages = () => {
    const packages = [
        {
            name: 'BASIC',
            price: '400',
            popular: false,
            features: [
                'Gestionnaire de publicités professionnel pour un ciblage professionnel',
                '1 session de tournage vidéo',
                '4 vidéos avec montage professionnel',
                'Création de feuille de route de contenu',
                'Sponsoring Meta Ads 20$',
                'Développement de stratégie marketing',
                'Analyse des horaires de publication optimaux'
            ]
        },
        {
            name: 'MOST POPULAR',
            price: '600',
            popular: true,
            bonus: 'FREE Professional Website Included',
            features: [
                'Gestionnaire de publicités professionnel',
                '1 session de tournage vidéo',
                '6 vidéos avec montage professionnel',
                'Création de feuille de route de contenu',
                'Sponsoring Meta Ads 40$',
                'Développement de stratégie marketing',
                'Analyse des horaires de publication optimaux',
                'Surveillance et reporting des réseaux sociaux'
            ]
        },
        {
            name: 'ULTIMATE',
            price: '850',
            popular: false,
            features: [
                'Gestionnaire de publicités professionnel',
                '2 sessions de tournage vidéo',
                '10 vidéos avec montage professionnel',
                'Création de feuille de route de contenu',
                'Sponsoring Meta Ads 60$',
                'Scripting + idées de vidéos (guidance Redix)',
                'Téléchargement de contenu et gestion des réseaux sociaux',
                'Vous répondez uniquement aux messages et commentaires',
                'Développement de stratégie marketing',
                'Analyse des horaires de publication optimaux',
                'Surveillance et reporting des réseaux sociaux'
            ]
        }
    ];

    return (
        <section className={styles.packages} id="packages">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Choose Your <span>Package</span></h2>
                    <p className={styles.subtitle}>
                        Flexible solutions tailored to your culinary marketing needs
                    </p>
                    <div className={styles.discount}>
                        <FaStar className={styles.discountIcon} />
                        <span>20% OFF on first month subscription for all packages</span>
                    </div>
                </motion.div>

                <div className={styles.packagesGrid}>
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: pkg.popular ? 1 : 1.02 }}
                        >
                            {pkg.popular && (
                                <div className={styles.popularBadge}>
                                    <FaCrown /> MOST POPULAR
                                </div>
                            )}

                            <div className={styles.packageHeader}>
                                <h3 className={styles.packageName}>{pkg.name}</h3>
                                <div className={styles.priceContainer}>
                                    <span className={styles.price}>{pkg.price}</span>
                                    <span className={styles.currency}>TND</span>
                                </div>
                                <p className={styles.priceNote}>Per month</p>
                            </div>

                            {pkg.bonus && (
                                <div className={styles.bonus}>
                                    <FaStar className={styles.bonusIcon} />
                                    {pkg.bonus}
                                </div>
                            )}

                            <ul className={styles.featuresList}>
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className={styles.feature}>
                                        <FaCheck className={styles.checkIcon} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="#contact"
                                className={`${styles.packageBtn} ${pkg.popular ? styles.popularBtn : ''}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.ctaTitle}>Ready to Transform Your Culinary Brand?</h3>
                    <p className={styles.ctaText}>
                        Let's create content that showcases your authenticity and drives real results
                    </p>
                    <motion.a
                        href="#contact"
                        className={styles.ctaBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Journey Today
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Packages;
