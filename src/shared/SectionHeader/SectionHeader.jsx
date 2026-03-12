import styles from './SectionHeader.module.css'

function SectionHeader({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.line} />
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
