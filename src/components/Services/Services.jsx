import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import ServiceCard from './ServiceCard'
import { services } from '../../data/services'
import styles from './Services.module.css'
import { useTranslation } from 'react-i18next'

function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} />
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
