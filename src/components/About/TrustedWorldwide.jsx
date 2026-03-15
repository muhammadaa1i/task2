import styles from './TrustedWorldwide.module.css'
import { useTranslation } from 'react-i18next'

const REGISTRATION_STATS = [
    { icon: <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4cb.svg" alt="clipboard" width="22" height="22" />, labelKey: 'trustedWorldwide.stats.regNumber', value: '76170' },
    { icon: <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg" alt="laptop" width="22" height="22" />, labelKey: 'trustedWorldwide.stats.licenseNumber', value: '77919' },
    { icon: <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c5.svg" alt="calendar" width="22" height="22" />, labelKey: 'trustedWorldwide.stats.formationDate', value: '20 Jan 2026' },
]

const LOCATION_STATS = [
    { icon: <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4cd.svg" alt="pin" width="18" height="18" />, labelKey: 'trustedWorldwide.location.freeZone', value: 'Dubai' },
    { icon: <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f310.svg" alt="globe" width="18" height="18" />, labelKey: 'trustedWorldwide.location.location', value: 'Dubai Silicon Oasis' },
]

function TrustedWorldwide() {
    const { t } = useTranslation()

    return (
        <>
            {/* ── Hero banner ── */}
            <div className={styles.heroBanner}>
                <h2 className={styles.heroTitle}>{t('trustedWorldwide.heroTitle')}</h2>
                <p className={styles.heroSubtitle}>
                    {t('trustedWorldwide.heroSubtitlePrefix')}{' '}
                    <strong>{t('trustedWorldwide.heroSubtitleHighlight')}</strong>
                </p>
            </div>

            {/* ── Registration card ── */}
            <section className={styles.registrationSection}>
                <div className={styles.container}>
                    <h3 className={styles.sectionTitle}>{t('trustedWorldwide.sectionTitle')}</h3>
                    <p className={styles.sectionBody}>
                        {t('trustedWorldwide.sectionBodyPrefix')} Dubai{' '}
                        <strong>{t('trustedWorldwide.sectionBodyDubai')}</strong>, {t('trustedWorldwide.sectionBodyMiddle')}{' '}
                        <strong>{t('trustedWorldwide.sectionBodyUzbekistan')}</strong>. 🇺🇿
                    </p>

                    {/* Certificate cards */}
                    <div className={styles.certGrid}>
                        {/* DIEZ certificate */}
                        <div className={styles.certCard}>
                            <div className={styles.certHeader}>
                                <span className={styles.certLogo}>D|EZ</span>
                                <span className={styles.certLogoSub}>{t('trustedWorldwide.cert.logoSubLine1')}<br />{t('trustedWorldwide.cert.logoSubLine2')}</span>
                            </div>
                            <div className={styles.certDivider} />
                            <p className={styles.certTitle}>{t('trustedWorldwide.cert.title')}</p>
                            <div className={styles.certRows}>
                                <div className={styles.certRow}>
                                    <span>{t('trustedWorldwide.cert.regNumber')}</span><strong>76170</strong>
                                </div>
                                <div className={styles.certRow}>
                                    <span>{t('trustedWorldwide.cert.formationDate')}</span><strong>20/01/2026</strong>
                                </div>
                                <div className={styles.certRow}>
                                    <span>{t('trustedWorldwide.cert.companyName')}</span><strong>{t('trustedWorldwide.cert.companyNameValue')}</strong>
                                </div>
                                <div className={styles.certRow}>
                                    <span>{t('trustedWorldwide.cert.licenseNumber')}</span><strong>77919</strong>
                                </div>
                            </div>
                            <p className={styles.certFooter}>
                                {t('trustedWorldwide.cert.footer')}
                            </p>
                        </div>

                        {/* IT Park certificate — actual image */}
                        <div className={styles.certImgWrapper}>
                            <img
                                src="/image copy.png"
                                alt={t('trustedWorldwide.itParkCertificateAlt')}
                                className={styles.certImg}
                            />
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className={styles.statsRow}>
                        {REGISTRATION_STATS.map(({ icon, labelKey, value }) => (
                            <div key={labelKey} className={styles.statItem}>
                                <span className={styles.statIcon}>{icon}</span>
                                <div>
                                    <p className={styles.statLabel}>{t(labelKey)}</p>
                                    <p className={styles.statValue}>{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Location row */}
                    <div className={styles.locationRow}>
                        {LOCATION_STATS.map(({ icon, labelKey, value }) => (
                            <div key={labelKey} className={styles.locationItem}>
                                <span>{icon}</span>
                                <span className={styles.locationLabel}>{t(labelKey)}:</span>
                                <strong>{value}</strong>
                            </div>
                        ))}
                        <div className={styles.locationDivider} />
                        <div className={styles.locationItem}>
                            <strong className={styles.dateHighlight}>20 January 2026</strong>
                        </div>
                    </div>

                    {/* DIEZ certified badge */}
                    <div className={styles.certifiedBadge}>
                        <span className={styles.certifiedCheck}>
                            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2705.svg" alt="check" width="22" height="22" style={{ display: 'block' }} />
                        </span>
                        <span>
                            <strong>{t('trustedWorldwide.certified.textPrefix')}</strong> {t('trustedWorldwide.certified.textSuffix')}
                        </span>
                        <span className={styles.ifzaBadge}>
                            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f33f.svg" alt="leaf" width="16" height="16" />
                            IFZA
                        </span>
                    </div>
                </div>
            </section>

            {/* ── IT Park banner ── */}
            <section className={styles.itparkSection}>
                {/* Background: real building/skyline photo */}
                <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fm=webp&fit=crop&w=1400&q=75"
                    alt=""
                    className={styles.itparkBg}
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                />
                <div className={styles.itparkOverlay} />

                {/* Logo — left */}
                <div className={styles.itparkBannerContent}>
                    <div className={styles.itparkBannerLogo}>
                        {/* IT Park green icon (matching the first visual style) */}
                        <svg className={styles.itparkSvgIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M32 4C47.464 4 60 16.536 60 32C60 47.464 47.464 60 32 60H4V32C4 16.536 16.536 4 32 4Z" fill="#7ba55a"/>
                            <circle cx="32" cy="20" r="5" fill="#fff" />
                            <path d="M22 34C22 28.477 26.477 24 32 24C37.523 24 42 28.477 42 34M32 26V46" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className={styles.itparkBannerText}>
                            <strong>IT PARK</strong>
                            <span>{t('trustedWorldwide.itPark.logoSub')}</span>
                        </div>
                    </div>
                </div>

                {/* Uzbekistan flag — right */}
                <div className={styles.itparkFlagWrap}>
                    <img
                        src="/uzbekistan-flag.svg"
                        alt={t('trustedWorldwide.itPark.flagAlt')}
                        className={styles.itparkFlag}
                        width="220"
                        height="110"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </section>

            {/* ── Tagline section ── */}
            <section className={styles.taglineSection}>
                <div className={styles.container}>
                    <p className={styles.taglineBody}>
                        {t('trustedWorldwide.taglineBodyPrefix')}{' '}
                        <strong>{t('trustedWorldwide.taglineBodyDubai')}</strong>, {t('trustedWorldwide.taglineBodyMiddle')}{' '}
                        <strong>{t('trustedWorldwide.taglineBodyUzbekistan')}</strong>, {t('trustedWorldwide.taglineBodySuffix')}
                    </p>
                    <p className={styles.tagline}>
                        <span className={styles.taglineStart}>{t('trustedWorldwide.taglineStart')}</span>
                        {' & '}
                        <span className={styles.taglineGo}>{t('trustedWorldwide.taglineGo')}</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default TrustedWorldwide
