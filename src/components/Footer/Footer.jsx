import { quickLinks, ourServices, moreServices, socialLinks } from '../../data/footerData'
import styles from './Footer.module.css'
import Icon from '../../shared/Icon/Icon'

function Footer() {
  return (
    <footer id="blog" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Our Services</h4>
            <ul className={styles.list}>
              {ourServices.map((service) => (
                <li key={service.id}>
                  <a href={service.href} className={styles.link}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>More Services</h4>
            <ul className={styles.list}>
              {moreServices.map((service) => (
                <li key={service.id}>
                  <a href={service.href} className={styles.link}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Follow Us</h4>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href="#"
                  className={styles.socialIcon}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className={styles.socialIconGlyph} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Codefy Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
