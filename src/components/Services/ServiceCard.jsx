import { FiCode, FiSmartphone, FiPenTool, FiSettings } from 'react-icons/fi'
import styles from './ServiceCard.module.css'

const iconMap = {
  web: FiCode,
  mobile: FiSmartphone,
  design: FiPenTool,
  consulting: FiSettings,
}

function ServiceCard({ icon, title, description }) {
  const Icon = iconMap[icon] || FiCode

  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon size={32} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ServiceCard
