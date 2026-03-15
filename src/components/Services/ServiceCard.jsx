import styles from './ServiceCard.module.css'
import Icon, { ICONS } from '../../shared/Icon/Icon'

function ServiceCard({ icon, title, description }) {
  const accent = ICONS[icon]?.color ?? '#1f67db'
  const bg = ICONS[icon]?.bg ?? 'rgba(31,103,219,0.10)'

  return (
    <div className={styles.card}>
      <div
        className={styles.iconWrap}
        style={{ '--icon-color': accent, '--icon-bg': bg }}
      >
        <Icon name={icon} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ServiceCard
