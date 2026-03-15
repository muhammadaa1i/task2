import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'
import { useTranslation } from 'react-i18next'

function Projects() {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title={t('projects.title')} subtitle={t('projects.subtitle')} />
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              category={t(project.categoryKey)}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
