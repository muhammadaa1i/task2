import styles from './About.module.css'
import TrustedWorldwide from './TrustedWorldwide'
import { useTranslation } from 'react-i18next'

const STATS = [
    { value: '8+', labelKey: 'about.stats.yearsExperience' },
    { value: '200+', labelKey: 'about.stats.projectsDelivered' },
    { value: '95%', labelKey: 'about.stats.clientSatisfaction' },
]

function About() {
    const { t } = useTranslation()

    return (
        <>
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                {/* Left — text */}
                <div className={styles.left}>
                    <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
                    <h2 className={styles.heading}>
                        {t('about.heading')}
                    </h2>
                    <p className={styles.body}>
                        {t('about.bodyOne')}
                    </p>
                    <p className={styles.body}>
                        {t('about.bodyTwo')}
                    </p>
                    <a href="#contact" className={styles.cta}>
                        {t('about.cta')}
                    </a>
                </div>

                {/* Right — stats */}
                <div className={styles.right}>
                    <div className={styles.statsGrid}>
                        {STATS.map(({ value, labelKey }) => (
                            <div key={labelKey} className={styles.statCard}>
                                <span className={styles.statValue}>{value}</span>
                                <span className={styles.statLabel}>{t(labelKey)}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>
                            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3c6.svg" alt="trophy" width="24" height="24" style={{ display: 'block' }} />
                        </span>
                        <span>{t('about.trustedBadge')}</span>
                    </div>
                </div>
            </div>
        </section>
        <TrustedWorldwide />
    </>
    )
}

export default About
