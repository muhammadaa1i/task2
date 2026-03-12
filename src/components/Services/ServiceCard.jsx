import styles from './ServiceCard.module.css'
import Icon from '../../shared/Icon/Icon'

function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon name={icon} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ServiceCard
