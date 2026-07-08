import { useEffect } from 'react'

const TAGS = ['UX/UI Case Study', 'Mobile App Design', 'User Research']

const DETAILS = [
  { label: 'Project Type', value: 'Course Project,\nAcademic Case Study' },
  { label: 'My Role', value: 'Lead UI/UX Designer, Mobile\nExperience Designer, User Researcher' },
  { label: 'Date', value: '2024' },
  { label: 'Tools', value: 'Figma, Canva' },
]

import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'

export default function SkillTree() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <div
        style={{
          paddingTop: 'clamp(2rem, 5vh, 4rem)',
          paddingBottom: 'clamp(4rem, 8vh, 8rem)',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
      {/* ── Top section: Text + Hero Image ── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="st-hero-grid"
      >
        {/* Left: Text Content */}
        <div className="st-text-col">
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3vw, 4rem)',
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
              color: 'var(--color-off-black)',
              margin: '0 0 1rem',
            }}
          >
            SkillTree
          </h1>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {TAGS.map(tag => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.76rem, 0.84vw, 0.92rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-accent-blue)',
                  backgroundColor: 'rgba(108, 149, 213, 0.35)',
                  padding: '0.4rem 1.1rem',
                  borderRadius: '9999px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(0.88rem, 1.05vw, 1.18rem)',
              lineHeight: 1.75,
              color: 'var(--color-off-black)',
              opacity: 0.72,
              maxWidth: '55ch',
              margin: 0,
            }}
          >
            <strong>SkillTree</strong> is a mobile-first platform that empowers job
            seekers by offering training, certifications, and <strong>tailored job support</strong>.
            With AI-powered job recommendations, users find roles suited to their skills.
            Premium features include an AI resume maker for an optimized, professional edge.
          </p>
        </div>

        {/* Right: Hero Image (skilltree-1) */}
        <div className="st-img-col">
          <img
            src="/assets/skilltree-1.png"
            alt="SkillTree App UI Mockups"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              objectPosition: 'center right',
            }}
          />
        </div>
      </motion.div>

      {/* ── Middle: Details Grid ── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="st-details-grid"
      >
        {DETAILS.map(({ label, value }) => (
          <div key={label}>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: 'var(--color-off-black)',
                marginBottom: '0.75rem',
              }}
            >
              {label}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '1rem',
                color: 'var(--color-off-black)',
                opacity: 0.7,
                lineHeight: 1.5,
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Bottom: Showcase Image (skilltree-2) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: 'clamp(4rem, 8vh, 6rem)' }}
      >
        <img
          src="/assets/skilltree-2.png"
          alt="SkillTree full UI showcase"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '1rem',
        }}
      />
    </motion.div>

    {/* Responsive Styles */}
      <style>{`
        .st-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: clamp(4rem, 8vh, 6rem);
          align-items: center;
        }
        
        .st-details-grid {
          display: grid;
          /* Mobile view: 2-column horizontal row */
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(35,35,35,0.1);
        }

        @media (min-width: 1024px) {
          .st-hero-grid {
            grid-template-columns: 1fr 1fr;
          }
          .st-details-grid {
            /* Desktop view: 4-column horizontal row spanning full width */
            grid-template-columns: 1fr 1.5fr 0.5fr 1fr;
            border-top: none;
            padding: 0;
          }
        }
      `}</style>
    </div>
    </PageWrapper>
  )
}
