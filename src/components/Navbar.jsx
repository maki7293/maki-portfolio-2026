import { useState, useEffect } from 'react'

// Consistent layout token — must match Hero.jsx
const LAYOUT = { maxWidth: '1800px', paddingX: '1.5rem' }

const NAV_LINKS = [
  { label: 'HOME', href: '/#hero' },
  { label: 'MY WORK', href: '/#featured-works' },
  { label: 'RESUME', href: '/assets/ROLA_MICHAEL_JULIUS_RESUME.pdf', download: true },
  { label: 'CONTACT', href: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        id="navbar"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: 'var(--color-canvas)',
          overflow: 'visible',
        }}
      >
        {/* ── Inner container — same max-width/padding as hero ── */}
        <nav
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: '0 auto',
            padding: `0 ${LAYOUT.paddingX}`,
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand — left */}
          <a
            href="/#hero"
            onClick={closeMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(1.05rem, 1.2vw, 1.5rem)',
              color: 'var(--color-off-black)',
              textDecoration: 'none',
              letterSpacing: '-0.05em',
              flexShrink: 0,
            }}
          >
            <img 
              src="/assets/not-makiii-logo.png" 
              alt="Michael Julius Rola Logo" 
              style={{ 
                height: 'clamp(28px, 3vw, 36px)', 
                width: 'auto', 
                objectFit: 'contain' 
              }} 
            />
            Michael Julius Rola
          </a>

          {/* Desktop links — right */}
          <ul
            className="desktop-nav"
            style={{
              listStyle: 'none',
              display: 'none',
              gap: 'clamp(1.5rem, 2.5vw, 2.75rem)',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  download={link.download}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 'clamp(0.85rem, 0.88vw, 1.1rem)',
                    letterSpacing: '-0.05em',
                    color: 'var(--color-off-black)',
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.4')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            id="hamburger-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            className="hamburger-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span className="hamburger-line" style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="hamburger-line" style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </nav>

        {/* ── Fade gradient below sticky nav ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 'calc(100% - 1px)',
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to bottom, rgba(242, 241, 235, 1) 0%, rgba(242, 241, 235, 0) 100%)',
            pointerEvents: 'none',
            zIndex: 49,
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* ── Mobile dropdown ── */}
        <div
          id="mobile-menu"
          style={{
            backgroundColor: 'var(--color-canvas)',
            overflow: 'hidden',
            maxHeight: menuOpen ? '320px' : '0',
            transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            borderBottom: menuOpen ? '1px solid rgba(35,35,35,0.08)' : 'none',
          }}
        >
          <ul style={{ listStyle: 'none', padding: `0.5rem ${LAYOUT.paddingX} 1.5rem`, display: 'flex', flexDirection: 'column' }}>
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  download={link.download}
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    letterSpacing: '-0.05em',
                    color: 'var(--color-off-black)',
                    textDecoration: 'none',
                    padding: '0.875rem 0',
                    borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(35,35,35,0.08)' : 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}
