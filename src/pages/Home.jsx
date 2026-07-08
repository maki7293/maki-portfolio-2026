import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import FeaturedWorks from '../components/FeaturedWorks'
import Portfolio3D from '../components/Portfolio3D'

import PageWrapper from '../components/PageWrapper'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small timeout ensures the DOM has painted before scrolling
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <PageWrapper>
      <Hero />
      <FeaturedWorks />
      <Portfolio3D />
    </PageWrapper>
  )
}
