import React from 'react';
import { motion } from 'framer-motion';
import { Line, Bar } from 'react-chartjs-2';
import { FaInstagram } from 'react-icons/fa';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import styles from '../styles/MarketAnalysis.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const MarketAnalysis = () => {
    const marketGrowthData = {
        labels: ['2023', '2024', '2025', '2026', '2027', '2028'],
        datasets: [{
            label: 'Culinary Content Market Size (Million $)',
            data: [15000, 18500, 20988, 25000, 30000, 35000],
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#EC4899',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5
        }]
    };

    const engagementData = {
        labels: ['Recipe Videos', 'Taste Tests', 'Cooking Hacks', 'Behind Scenes', 'Product Reveals'],
        datasets: [{
            label: 'Engagement Rate (%)',
            data: [70, 65, 58, 50, 48],
            backgroundColor: [
                'rgba(139, 92, 246, 0.8)',
                'rgba(236, 72, 153, 0.8)',
                'rgba(167, 139, 250, 0.8)',
                'rgba(109, 40, 217, 0.8)',
                'rgba(219, 39, 119, 0.8)'
            ],
            borderRadius: 10,
            borderWidth: 0
        }]
    };

    const contentCreators = [
        {
            name: 'Chef Gordon Ramsay',
            platform: 'TikTok & Instagram',
            reach: '40M+ TikTok Followers',
            specialty: 'Professional techniques, plate reviews',
            engagement: '5-15M views per video',
            style: 'Energetic, educational, entertaining',
            instagram: 'https://www.instagram.com/chef_gordon.ramsay/'
        },
        {
            name: 'Tasty (BuzzFeed)',
            platform: 'Multiple Platforms',
            reach: '100M+ Followers',
            specialty: 'Quick recipe videos, overhead shots',
            engagement: 'Millions of views per video',
            style: 'Fast-paced, colorful, accessible recipes',
            instagram: 'https://www.instagram.com/buzzfeedtasty/'
        },
        {
            name: 'Babish Culinary Universe',
            platform: 'YouTube & Instagram',
            reach: '10M+ Subscribers',
            specialty: 'Cinematic cooking, detailed techniques',
            engagement: 'High production quality content',
            style: 'Professional cinematography, storytelling',
            instagram: 'https://www.instagram.com/bingingwithbabish/'
        },
        {
            name: 'Bon Appétit',
            platform: 'YouTube & Instagram',
            reach: '6M+ Subscribers',
            specialty: 'Professional kitchen content',
            engagement: 'Highly engaged foodie audience',
            style: 'Professional, authentic, detailed',
            instagram: 'https://www.instagram.com/bon_appetit.offc/'
        },
        {
            name: 'Nick DiGiovanni',
            platform: 'TikTok & YouTube',
            reach: '30M+ Combined',
            specialty: 'Creative challenges, plating artistry',
            engagement: '10-20M views regularly',
            style: 'Modern, aesthetic, innovative dishes',
            instagram: 'https://www.instagram.com/nick.digiovanni/'
        },
        {
            name: 'Tunisian Food Creators',
            platform: 'Instagram & TikTok',
            reach: '50K-500K Followers',
            specialty: 'Local cuisine, authentic recipes',
            engagement: 'Growing local food community',
            style: 'Cultural authenticity, traditional dishes',
            instagram: null
        }
    ];

    const swotData = {
        strengths: [
            'Professional video production expertise',
            'Data-driven marketing strategies',
            'Multi-platform content distribution',
            'Proven track record in digital marketing'
        ],
        weaknesses: [
            'New to chef-specific niche',
            'Limited initial portfolio in food content',
            'Building brand recognition in culinary space'
        ],
        opportunities: [
            '70% engagement rate on recipe videos',
            '$46.2B culinary content market by 2032',
            '55% of users visit restaurants after video content',
            'Growing food content demand in Tunisia',
            'Untapped local chef influencer market'
        ],
        threats: [
            'High competition from established food content creators',
            'Platform algorithm changes',
            'Rapidly evolving social media trends',
            'Content saturation in food niche'
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#1F2937',
                    font: { size: 12, weight: '600' }
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(15, 15, 35, 0.95)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#8B5CF6',
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(139, 92, 246, 0.1)' },
                ticks: { color: '#6B7280' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#6B7280' }
            }
        }
    };

    return (
        <section className={styles.market} id="market">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Market <span>Analysis</span></h2>
                    <p className={styles.subtitle}>
                        Data-backed insights into the culinary content landscape
                    </p>
                </motion.div>

                <div className={styles.chartsGrid}>
                    <motion.div
                        className={styles.chartCard}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.chartTitle}>Market Growth Projection</h3>
                        <div className={styles.chartWrapper}>
                            <Line data={marketGrowthData} options={chartOptions} />
                        </div>
                        <p className={styles.chartNote}>
                            Global culinary content creation market reaching $46.2B by 2032 with 12.5% CAGR
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.chartCard}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.chartTitle}>Content Engagement Rates</h3>
                        <div className={styles.chartWrapper}>
                            <Bar data={engagementData} options={chartOptions} />
                        </div>
                        <p className={styles.chartNote}>
                            Recipe videos achieve 70% engagement, highest-performing content type
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.creatorsSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.creatorsTitle}>
                        <span className={styles.titleIcon}>🎬</span>
                        Successful Content Creator Examples
                    </h3>
                    <p className={styles.creatorsSubtitle}>
                        Industry leaders demonstrating the power of culinary video content
                    </p>

                    <div className={styles.creatorsGrid}>
                        {contentCreators.map((creator, index) => (
                            <motion.div
                                key={index}
                                className={styles.creatorCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.creatorHeader}>
                                    <h4 className={styles.creatorName}>{creator.name}</h4>
                                    <span className={styles.creatorPlatform}>{creator.platform}</span>
                                </div>
                                <div className={styles.creatorStats}>
                                    <div className={styles.creatorStat}>
                                        <span className={styles.statIcon}>👥</span>
                                        <span>{creator.reach}</span>
                                    </div>
                                    <div className={styles.creatorStat}>
                                        <span className={styles.statIcon}>📊</span>
                                        <span>{creator.engagement}</span>
                                    </div>
                                </div>
                                <div className={styles.creatorDetails}>
                                    <p><strong>Specialty:</strong> {creator.specialty}</p>
                                    <p><strong>Style:</strong> {creator.style}</p>
                                </div>
                                {creator.instagram && (
                                    <motion.a
                                        href={creator.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.instagramBtn}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaInstagram />
                                        <span>View Profile</span>
                                    </motion.a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.insights}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.insightsTitle}>Key Market Insights</h3>
                    <div className={styles.insightsGrid}>
                        <div className={styles.insight}>
                            <span className={styles.insightNumber}>250M+</span>
                            <p className={styles.insightText}>#Food posts on Instagram</p>
                        </div>
                        <div className={styles.insight}>
                            <span className={styles.insightNumber}>84%</span>
                            <p className={styles.insightText}>Purchase after watching video</p>
                        </div>
                        <div className={styles.insight}>
                            <span className={styles.insightNumber}>49%</span>
                            <p className={styles.insightText}>Faster revenue growth with video</p>
                        </div>
                        <div className={styles.insight}>
                            <span className={styles.insightNumber}>2.5%</span>
                            <p className={styles.insightText}>TikTok average engagement rate</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.swot}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.swotTitle}>SWOT Analysis</h3>
                    <div className={styles.swotGrid}>
                        <div className={styles.swotCard} style={{ borderTop: '4px solid #10B981' }}>
                            <h4 className={styles.swotCardTitle}>Strengths</h4>
                            <ul className={styles.swotList}>
                                {swotData.strengths.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.swotCard} style={{ borderTop: '4px solid #EF4444' }}>
                            <h4 className={styles.swotCardTitle}>Weaknesses</h4>
                            <ul className={styles.swotList}>
                                {swotData.weaknesses.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.swotCard} style={{ borderTop: '4px solid #8B5CF6' }}>
                            <h4 className={styles.swotCardTitle}>Opportunities</h4>
                            <ul className={styles.swotList}>
                                {swotData.opportunities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.swotCard} style={{ borderTop: '4px solid #F59E0B' }}>
                            <h4 className={styles.swotCardTitle}>Threats</h4>
                            <ul className={styles.swotList}>
                                {swotData.threats.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MarketAnalysis;
