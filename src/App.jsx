import { Suspense, lazy } from 'react'
import Hero from './components/Hero/Hero'

const About = lazy(() => import('./components/About/About'))
const Services = lazy(() => import('./components/Services/Services'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  )
}

