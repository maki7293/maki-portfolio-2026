// ContactFooter.jsx
// Final section — Contact + Footer
// Reference design:
// • Canvas background, thick dark-bordered inner card
// • Scattered coloured stars around the heading
// • Large serif question headline
// • "Contact me:" label + giant email
// • Social icon circles (LinkedIn, GitHub, Facebook, Instagram)
// • Download CV pill button
// • "With love, Michael • 2026" footer line

import { motion } from 'framer-motion'

/* ── Coloured stars scattered around the headline ── */
const STARS = [
  { color: '#7B3FBE', size: 60, top: '12%', left: '8%' },  // purple — far left
  { color: '#CC7F58', size: 40, top: '8%', left: '22%' },  // orange — upper left
  { color: '#B12A2D', size: 65, top: '36%', left: '18%' },  // red — lower left
  { color: '#2AB143', size: 55, top: '10%', right: '18%' }, // green — upper right
  { color: '#C9AD33', size: 60, top: '30%', right: '8%' }, // gold — right mid
]

const StarShape = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 51 49"
    fill={color}
    aria-hidden="true"
    style={{ display: 'block', flexShrink: 0, overflow: 'visible' }}
  >
    <path
      d="M25.5 0L31.8 18.1H51L36.1 29.3L42.3 47.4L25.5 36.2L8.7 47.4L14.9 29.3L0 18.1H19.2L25.5 0Z"
      stroke={color}
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
)

/* ── Social icons ── */
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-julius-rola-893196337', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/maki7293', Icon: GitHubIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/rolajulius', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/maki_rola/', Icon: InstagramIcon },
]

/* ══════════════════════════════════════════
   Main Section
══════════════════════════════════════════ */
export default function ContactFooter() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-canvas)',
        padding: 'clamp(5rem, 10vh, 10rem) clamp(1rem, 3vw, 3rem) 0',
      }}
    >
      {/* ── Contact content — plain canvas, no card border ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
        style={{
          backgroundColor: 'var(--color-canvas)',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 12vh, 11rem) clamp(1.5rem, 4vw, 4rem) clamp(4rem, 8vh, 7rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: 'clamp(500px, 65vh, 720px)',
          justifyContent: 'center',
          gap: 'clamp(2.5rem, 5vh, 4rem)',
        }}
      >
        {/* ── Scattered stars — absolute positioned ── */}
        {STARS.map(({ color, size, top, left, right }, i) => (
          <div
            key={i}
            className="cf-star"
            style={{
              position: 'absolute',
              top,
              left: left ?? undefined,
              right: right ?? undefined,
              pointerEvents: 'none',
            }}
          >
            <StarShape color={color} size={size} />
          </div>
        ))}

        {/* ── Headline ── */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-off-black)',
            margin: 0,
            maxWidth: '18ch',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Got a project in mind, or just want to chat?
        </h2>

        {/* ── Email block ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
              color: 'var(--color-off-black)',
              opacity: 0.55,
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Contact me:
          </p>
          <a
            href="mailto:rolamaki05@gmail.com"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 5.5vw, 6.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--color-off-black)',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            rolamaki05@gmail.com
          </a>
        </div>

        {/* ── Social icon row ── */}
        <div style={{ display: 'flex', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.8rem',
                height: '2.8rem',
                borderRadius: '9999px',
                border: '1.5px solid rgba(35,35,35,0.3)',
                color: 'var(--color-off-black)',
                textDecoration: 'none',
                transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(35,35,35,0.08)'
                e.currentTarget.style.borderColor = 'rgba(35,35,35,0.6)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(35,35,35,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* ── Download CV button ── */}
        <a
          href="/assets/ROLA_MICHAEL_JULIUS_RESUME.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 'clamp(0.85rem, 0.95vw, 1rem)',
            letterSpacing: '-0.01em',
            color: 'var(--color-off-black)',
            border: '1.5px solid rgba(35,35,35,0.3)',
            borderRadius: '9999px',
            padding: '0.65rem 1.5rem',
            textDecoration: 'none',
            transition: 'background 0.2s ease, border-color 0.2s ease',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(35,35,35,0.07)'
            e.currentTarget.style.borderColor = 'rgba(35,35,35,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(35,35,35,0.3)'
          }}
        >
          <DownloadIcon />
          Download Resume
        </a>
      </motion.div>

      {/* ── Thin horizontal divider + footer ── */}
      <footer
        style={{
          textAlign: 'center',
          padding: 'clamp(2rem, 4vh, 3rem) 0 clamp(1.5rem, 3vh, 2.5rem)',
          borderTop: '1px solid rgba(35,35,35,0.15)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(0.78rem, 0.85vw, 0.95rem)',
            letterSpacing: '-0.01em',
            color: 'var(--color-off-black)',
            opacity: 0.45,
            margin: 0,
          }}
        >
          With love, Michael • 2026
        </p>
      </footer>

      {/* ── Responsive styles for stars ── */}
      <style>{`
        /* Mobile: scale stars down, don't hide them */
        @media (max-width: 599px) {
          .cf-star { transform: scale(0.45); }
        }
        /* Tablet: slightly smaller */
        @media (min-width: 600px) and (max-width: 1023px) {
          .cf-star { transform: scale(0.65); }
        }
      `}</style>
    </section>
  )
}
