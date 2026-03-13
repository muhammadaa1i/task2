import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import ServiceCard from './ServiceCard'
import { services } from '../../data/services'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Our Services" subtitle="-What We Offer" />
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
