import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaFacebook, FaInstagram, FaBullseye } from 'react-icons/fa';
import styles from '../styles/Strategy.module.css';

const Strategy = () => {
    const platforms = [
        {
            icon: <FaTiktok />,
            name: 'TikTok',
            color: '#000000',
            features: ['Short-form recipe videos', '70% engagement rate', 'Trending hashtag strategy', 'Behind-the-scenes content']
        },
        {
            icon: <FaInstagram />,
            name: 'Instagram',
            color: '#E4405F',
            features: ['Reels & Stories', 'High-quality plating shots', '250M+ #Food posts reach', 'Carousel recipe guides']
        },
        {
            icon: <FaFacebook />,
            name: 'Facebook',
            color: '#1877F2',
            features: ['Video marketing', 'Community building', 'Event promotion', 'Customer testimonials']
        }
    ];

    return (
        <section className={styles.strategy} id="strategy">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Marketing <span>Strategy</span></h2>
                    <p className={styles.subtitle}>
                        Multi-platform approach for maximum reach and engagement
                    </p>
                </motion.div>

                <div className={styles.platformsGrid}>
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={index}
                            className={styles.platformCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className={styles.platformIcon} style={{ color: platform.color }}>
                                {platform.icon}
                            </div>
                            <h3 className={styles.platformName}>{platform.name}</h3>
                            <ul className={styles.featuresList}>
                                {platform.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.metaAds}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.metaContent}>
                        <div className={styles.metaIcon}>
                            <FaBullseye />
                        </div>
                        <div className={styles.metaText}>
                            <h3 className={styles.metaTitle}>Advanced Meta Ads Strategy</h3>
                            <p className={styles.metaDescription}>
                                We leverage sophisticated targeting and optimization techniques to ensure your content reaches the right audience at the right time. Our campaigns are continuously monitored and refined for optimal ROI.
                            </p>
                            <div className={styles.metaFeatures}>
                                <div className={styles.metaFeature}>
                                    <span className={styles.metaFeatureIcon}>✓</span>
                                    <span>Precise audience targeting</span>
                                </div>
                                <div className={styles.metaFeature}>
                                    <span className={styles.metaFeatureIcon}>✓</span>
                                    <span>A/B testing optimization</span>
                                </div>
                                <div className={styles.metaFeature}>
                                    <span className={styles.metaFeatureIcon}>✓</span>
                                    <span>Performance analytics</span>
                                </div>
                                <div className={styles.metaFeature}>
                                    <span className={styles.metaFeatureIcon}>✓</span>
                                    <span>Budget optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.timeline}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.timelineTitle}>Implementation Timeline</h3>
                    <div className={styles.timelineGrid}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineNumber}>1</div>
                            <h4>Week 1</h4>
                            <p>Content strategy & shoot scheduling</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineNumber}>2</div>
                            <h4>Week 2</h4>
                            <p>Video production & editing</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineNumber}>3</div>
                            <h4>Week 3</h4>
                            <p>Campaign launch & optimization</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineNumber}>4</div>
                            <h4>Week 4</h4>
                            <p>Performance analysis & scaling</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Strategy;
