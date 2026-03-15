import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '../../i18n/languages'
import styles from './LanguageSwitcher.module.css'

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.globeIcon}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.8 0 5 4.5 5 10s-2.2 10-5 10-5-4.5-5-10 2.2-10 5-10Zm-9 10h18M4.5 6.5h15M4.5 17.5h15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${styles.chevronIcon} ${open ? styles.chevronOpen : ''}`}>
      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LanguageSwitcher({ mobile = false }) {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const currentLanguage = i18n.resolvedLanguage || i18n.language

  useEffect(() => {
    if (!open) return undefined

    function onPointerDown(event) {
      if (!panelRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function changeLanguage(nextLanguage) {
    i18n.changeLanguage(nextLanguage)
    setOpen(false)
  }

  return (
    <div
      ref={panelRef}
      className={`${styles.wrapper} ${mobile ? styles.mobileWrapper : ''}`}
    >
      <button
        type="button"
        className={`${styles.trigger} ${mobile ? styles.mobileTrigger : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className={styles.triggerLeft}>
          <GlobeIcon />
          <span>{t('languageSwitcher.buttonLabel')}</span>
        </span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className={styles.panel} role="menu" aria-label={t('languageSwitcher.panelTitle')}>
          <h3 className={styles.panelTitle}>
            <GlobeIcon />
            <span>{t('languageSwitcher.panelTitle')}</span>
          </h3>
          <ul className={styles.list}>
            {SUPPORTED_LANGUAGES.map((language) => {
              const selected = currentLanguage === language.code
              const nativeLanguageName = i18n.getFixedT(language.code)('languageName')
              return (
                <li key={language.code}>
                  <button
                    type="button"
                    className={`${styles.option} ${selected ? styles.optionActive : ''}`}
                    onClick={() => changeLanguage(language.code)}
                    role="menuitemradio"
                    aria-checked={selected}
                  >
                    <span className={styles.optionMeta}>
                      <img src={language.flagUrl} alt={nativeLanguageName} className={styles.flagIcon} />
                      <span>{nativeLanguageName}</span>
                    </span>
                    <span
                      className={`${styles.radio} ${selected ? styles.radioActive : ''}`}
                      aria-label={selected ? t('languageSwitcher.current') : undefined}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
