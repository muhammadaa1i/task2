import {
  FaFacebook,
  FaTwitter,
  FaSlack,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { quickLinks, ourServices, moreServices, socialLinks } from '../../data/footerData'
import styles from './Footer.module.css'

const iconComponents = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  slack: FaSlack,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
}

function Footer() {
  return (
    <footer className={styles.footer}>
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
            <h4 className={styles.heading}>Our Services</h4>
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
              {socialLinks.map((social) => {
                const Icon = iconComponents[social.name]
                return Icon ? (
                  <a
                    key={social.id}
                    href="#"
                    className={styles.socialIcon}
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2024 Codefy Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
