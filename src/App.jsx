import { Suspense, lazy } from 'react'
import Services from './components/Services/Services'

const Projects = lazy(() => import('./components/Projects/Projects'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />
}

export default function App() {
  return (
    <div>
      <Services />

      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  )
}
