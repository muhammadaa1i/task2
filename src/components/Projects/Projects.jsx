import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Recent Projects" subtitle="-Our Latest Work" />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
