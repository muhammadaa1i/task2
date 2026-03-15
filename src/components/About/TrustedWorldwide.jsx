import styles from './TrustedWorldwide.module.css'

const REGISTRATION_STATS = [
    { icon: '📋', label: 'Registration Number', value: '76170' },
    { icon: '💻', label: 'License Number', value: '77919' },
    { icon: '📅', label: 'Formation Date', value: '20 Jan 2026' },
]

const LOCATION_STATS = [
    { icon: '📍', label: 'Free Zone', value: 'Dubai' },
    { icon: '🌐', label: 'Location', value: 'Dubai Silicon Oasis' },
]

function TrustedWorldwide() {
    return (
        <>
            {/* ── Hero banner ── */}
            <div className={styles.heroBanner}>
                <h2 className={styles.heroTitle}>Trusted Worldwide</h2>
                <p className={styles.heroSubtitle}>
                    Officially Licensed Tech Business in Dubai and{' '}
                    <strong>Uzbekistan</strong>
                </p>
            </div>

            {/* ── Registration card ── */}
            <section className={styles.registrationSection}>
                <div className={styles.container}>
                    <h3 className={styles.sectionTitle}>International Registration</h3>
                    <p className={styles.sectionBody}>
                        Codefy Group is a globally recognized tech company registered in
                        Dubai <strong>Silicon Oasis Free Zone</strong>, Dubai, UAE and is
                        an official resident of <strong>IT Park Uzbekistan</strong>. 🇺🇿
                    </p>

                    {/* Certificate cards */}
                    <div className={styles.certGrid}>
                        {/* DIEZ certificate */}
                        <div className={styles.certCard}>
                            <div className={styles.certHeader}>
                                <span className={styles.certLogo}>D|EZ</span>
                                <span className={styles.certLogoSub}>Dubai Integrated<br />Economic Zones</span>
                            </div>
                            <div className={styles.certDivider} />
                            <p className={styles.certTitle}>Certificate of Formation</p>
                            <div className={styles.certRows}>
                                <div className={styles.certRow}>
                                    <span>Registration Number</span><strong>76170</strong>
                                </div>
                                <div className={styles.certRow}>
                                    <span>Formation Date</span><strong>20/01/2026</strong>
                                </div>
                                <div className={styles.certRow}>
                                    <span>Company Name</span><strong>INTEXM MEDIA - FZCO</strong>
                                </div>
                                <div className={styles.certRow}>
                                    <span>License Number</span><strong>77919</strong>
                                </div>
                            </div>
                            <p className={styles.certFooter}>
                                Dubai Integrated Economic Zones Authority, in its capacity as
                                the licensing authority for all companies incorporated in Dubai
                                Silicon Oasis.
                            </p>
                        </div>

                        {/* IT Park certificate — actual image */}
                        <div className={styles.certImgWrapper}>
                            <img
                                src="/image copy.png"
                                alt="IT Park GUVOHNOMA Certificate — CODEFY GROUP MCHJ"
                                className={styles.certImg}
                            />
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className={styles.statsRow}>
                        {REGISTRATION_STATS.map(({ icon, label, value }) => (
                            <div key={label} className={styles.statItem}>
                                <span className={styles.statIcon}>{icon}</span>
                                <div>
                                    <p className={styles.statLabel}>{label}</p>
                                    <p className={styles.statValue}>{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Location row */}
                    <div className={styles.locationRow}>
                        {LOCATION_STATS.map(({ icon, label, value }) => (
                            <div key={label} className={styles.locationItem}>
                                <span>{icon}</span>
                                <span className={styles.locationLabel}>{label}:</span>
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
                        <span className={styles.certifiedCheck}>✅</span>
                        <span>
                            <strong>Certified by Dubai</strong> Integrated Economic Zones
                            Authority (DIEZ).
                        </span>
                        <span className={styles.ifzaBadge}>🌿 IFZA</span>
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
                        {/* IT Park green icon */}
                        <svg className={styles.itparkSvgIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="24" cy="24" r="24" fill="#2e7d32" />
                            <circle cx="24" cy="16" r="5" fill="#fff" />
                            <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                        </svg>
                        <div className={styles.itparkBannerText}>
                            <strong>IT PARK</strong>
                            <span>Инновационный технопарк</span>
                        </div>
                    </div>
                </div>

                {/* Uzbekistan flag — right */}
                <div className={styles.itparkFlagWrap}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/320px-Flag_of_Uzbekistan.svg.png"
                        alt="Flag of Uzbekistan"
                        className={styles.itparkFlag}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </section>

            {/* ── Tagline section ── */}
            <section className={styles.taglineSection}>
                <div className={styles.container}>
                    <p className={styles.taglineBody}>
                        By holding licenses in{' '}
                        <strong>Dubai Silicon Oasis Free Zone</strong>, UAE and as a
                        resident of <strong>IT Park Uzbekistan</strong>, Codefy Group is
                        your trusted partner for global tech innovation.
                    </p>
                    <p className={styles.tagline}>
                        <span className={styles.taglineStart}>Start local</span>
                        {' & '}
                        <span className={styles.taglineGo}>GO global</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default TrustedWorldwide
