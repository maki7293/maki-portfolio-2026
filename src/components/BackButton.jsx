import { Link } from 'react-router-dom'

export default function BackButton({ to = "/" }) {
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 'clamp(0.9rem, 1vw, 1.05rem)',
        color: 'var(--color-off-black)',
        textDecoration: 'none',
        marginBottom: '2rem',
        opacity: 0.7,
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.transform = 'translateX(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = '0.7'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back
    </Link>
  )
}
