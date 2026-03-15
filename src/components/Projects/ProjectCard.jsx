import styles from './ProjectCard.module.css'
import LazyImage from '../../shared/LazyImage/LazyImage'

function ProjectCard({ title, description, image, category, priority = false }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        {category && <span className={styles.categoryBadge}>{category}</span>}
        <LazyImage
          src={image}
          alt={title}
          className={styles.image}
          width={420}
          height={178}
          priority={priority}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
