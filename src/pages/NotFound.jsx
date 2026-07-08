import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'

/* ── Coloured stars scattered around the 404 ── */
const STARS = [
  { color: '#7B3FBE', size: 60, top: '8%', left: '8%' },     // top-left corner
  { color: '#CC7F58', size: 40, top: '16%', left: '18%' },   // top-left inner
  { color: '#B12A2D', size: 65, top: '82%', left: '12%' },   // bottom-left corner
  { color: '#2AB143', size: 55, top: '10%', right: '10%' },  // top-right corner
  { color: '#C9AD33', size: 60, top: '78%', right: '14%' },  // bottom-right corner
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

export default function NotFound() {
  return (
    <PageWrapper>
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Scattered stars ── */}
        {STARS.map(({ color, size, top, left, right }, i) => (
          <div
            key={i}
            className="star-container"
            style={{
              position: 'absolute',
              top,
              left: left ?? undefined,
              right: right ?? undefined,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <StarShape color={color} size={size} />
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 800,
              fontSize: 'clamp(5rem, 15vw, 12rem)',
              lineHeight: 1,
              color: 'var(--color-off-black)',
              margin: '0 0 1rem 0',
              letterSpacing: '-0.05em',
            }}
          >
            404
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-off-black)',
              opacity: 0.7,
              maxWidth: '40ch',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            Oops! It seems you've wandered off the map. Let's get you back to the portfolio.
          </p>
          <Link
            to="/"
            className="btn-pill"
            style={{ display: 'inline-flex' }}
          >
            Return Home
          </Link>
        </motion.div>
      </div>
      {/* ── Responsive styles for stars ── */}
      <style>{`
        @media (max-width: 768px) {
          .star-container {
            transform: scale(0.65);
          }
        }
      `}</style>
    </PageWrapper>
  )
}
