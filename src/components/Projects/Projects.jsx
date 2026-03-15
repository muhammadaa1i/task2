import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Recent Projects" subtitle="-Our Latest Work" />
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
