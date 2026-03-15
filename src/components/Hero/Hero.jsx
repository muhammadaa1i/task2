import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './Hero.module.css'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../shared/LanguageSwitcher/LanguageSwitcher'

const SECTION_IDS = ['home', 'about', 'services', 'portfolio', 'contact', 'blog']

const STATS = [
  { end: 200, suffix: '+', labelKey: 'hero.stats.completedProjects' },
  { end: 150, suffix: '+', labelKey: 'hero.stats.happyClients' },
  { end: 8, suffix: '+', labelKey: 'hero.stats.yearsExperience' },
]

function useCounter(end, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, active])
  return count
}

function Hero() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef(null)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  // Trigger counter animation when stats come into view
  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  // Sticky navbar: detect scroll past hero
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight active section in nav
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !hamburgerRef.current?.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [menuOpen])

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])
  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.blog'), href: '#blog' },
  ]

  return (
    <>
      {/* ── Fixed Navbar (outside header so overflow:hidden doesn't block sticky) ── */}
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.navbarSticky : ''}`}
        aria-label={t('nav.mainNavigation')}
      >
        <div className={styles.navInner}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#3b82f6" />
              <circle cx="12" cy="12" r="4" fill="#3b82f6" />
            </svg>
            <span className={styles.logoText}>CODEFY GROUP</span>
          </a>

          {/* Desktop links */}
          <ul className={styles.navLinks}>
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className={styles.navActions}>
            <a href="#contact" className={styles.ctaButton}>{t('nav.contact')}</a>
            <LanguageSwitcher />
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineTop : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineMid : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineBot : ''}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className={styles.mobileLinks}>
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li>
              <a href="#contact" className={styles.mobileCtaBtn} onClick={closeMenu}>
                {t('nav.contact')}
              </a>
            </li>
            <li className={styles.mobileLanguageRow}>
              <LanguageSwitcher mobile />
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <header id="home" className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                {t('hero.title')}
              </h1>
              <p className={styles.description}>
                {t('hero.description')}
              </p>
              <div className={styles.actions}>
                <a href="#contact" className={styles.primaryBtn}>{t('hero.getStarted')}</a>
                <a href="#services" className={styles.secondaryBtn}>{t('hero.ourServices')}</a>
              </div>
            </div>

            <div className={styles.right}>
              <img
                src="/hero_illustration.png"
                alt={t('hero.imageAlt')}
                className={styles.heroImage}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className={styles.statsBar} ref={statsRef}>
            {STATS.map(({ end, suffix, labelKey }) => (
              <StatItem key={labelKey} end={end} suffix={suffix} label={t(labelKey)} active={statsActive} />
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

function StatItem({ end, suffix, label, active }) {
  const count = useCounter(end, 1600, active)
  return (
    <div className={styles.statItem}>
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default Hero
