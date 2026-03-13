import styles from './About.module.css'

const STATS = [
    { value: '8+', label: 'Years of Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '95%', label: 'Client Satisfaction' },
]

function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                {/* Left — text */}
                <div className={styles.left}>
                    <p className={styles.eyebrow}>Who We Are</p>
                    <h2 className={styles.heading}>
                        Building Digital Experiences that Drive Growth
                    </h2>
                    <p className={styles.body}>
                        Codefy Group is a full-service technology company passionate about
                        crafting high-quality software products. From scalable web platforms
                        to intuitive mobile apps, we partner with businesses of all sizes to
                        turn ideas into reality — on time and on budget.
                    </p>
                    <p className={styles.body}>
                        Our multidisciplinary team of developers, designers, and IT
                        consultants brings deep expertise and a client-first mindset to every
                        engagement. We don't just write code; we build solutions.
                    </p>
                    <a href="#contact" className={styles.cta}>
                        Work with Us
                    </a>
                </div>

                {/* Right — stats */}
                <div className={styles.right}>
                    <div className={styles.statsGrid}>
                        {STATS.map(({ value, label }) => (
                            <div key={label} className={styles.statCard}>
                                <span className={styles.statValue}>{value}</span>
                                <span className={styles.statLabel}>{label}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>🏆</span>
                        <span>Trusted by 50+ companies worldwide</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
