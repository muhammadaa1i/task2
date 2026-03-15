import { quickLinks, ourServices, moreServices, socialLinks } from '../../data/footerData'
import styles from './Footer.module.css'
import Icon from '../../shared/Icon/Icon'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="blog" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4 className={styles.heading}>{t('footer.quickLinks')}</h4>
            <ul className={styles.list}>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.link}>{t(link.labelKey)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>{t('footer.ourServices')}</h4>
            <ul className={styles.list}>
              {ourServices.map((service) => (
                <li key={service.id}>
                  <a href={service.href} className={styles.link}>{t(service.labelKey)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>{t('footer.moreServices')}</h4>
            <ul className={styles.list}>
              {moreServices.map((service) => (
                <li key={service.id}>
                  <a href={service.href} className={styles.link}>{t(service.labelKey)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>{t('footer.followUs')}</h4>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href="#"
                  className={styles.socialIcon}
                  aria-label={t(social.nameKey)}
                >
                  <Icon name={social.icon} className={styles.socialIconGlyph} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
