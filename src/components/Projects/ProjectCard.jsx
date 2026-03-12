import styles from './ProjectCard.module.css'

function ProjectCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
