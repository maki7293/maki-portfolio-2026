import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'
import Home from './pages/Home'
import SkillTree from './pages/SkillTree'
import Clockit from './pages/Clockit'
import PourDecisions from './pages/PourDecisions'
import Portfolio3DPage from './pages/Portfolio3DPage'
import NotFound from './pages/NotFound'
import ScrollToTopButton from './components/ScrollToTopButton'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/skilltree" element={<SkillTree />} />
        <Route path="/project/clockit" element={<Clockit />} />
        <Route path="/project/pour-decisions" element={<PourDecisions />} />
        <Route path="/project/3d-portfolio" element={<Portfolio3DPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'var(--color-canvas)', minHeight: '100dvh' }}>
        <Navbar />
        <main>
          <AnimatedRoutes />
          <ContactFooter />
          <ScrollToTopButton />
        </main>
        <Analytics />
      </div>
    </Router>
  )
}
