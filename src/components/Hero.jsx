// ─── Layout token — must match Navbar.jsx ──────────────────────────────────────────────────────
const LAYOUT = { maxWidth: '1800px', paddingX: '1.5rem' }

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// ─── Accent color cycling ──────────────────────────────────────────────────────
const ACCENTS = ['#B12A2D', '#2AB143', '#5634A7', '#B17D2A', '#2AA3B1']


function RainbowWord({ word, startIndex = 0 }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <span key={i} style={{ color: ACCENTS[(startIndex + i) % ACCENTS.length] }}>
          {char}
        </span>
      ))}
    </>
  )
}

// ─── Inline SVG icons ──────────────────────────────────────────────────────────
const ArrowDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/michael-julius-rola-893196337', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://github.com/maki7293', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.facebook.com/rolajulius', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://www.instagram.com/maki_rola/', label: 'Instagram', Icon: InstagramIcon },
]

// ─── Custom Typewriter that preserves Layout & Rainbow Colors ──────────────────
function HeroTypewriter() {
  const [charCount, setCharCount] = useState(0);

  const segments = [
    { type: 'text', content: "I bridge the gap between " },
    { type: 'rainbow', content: "creative" },
    { type: 'text', content: " " },
    { type: 'rainbow', content: "design" },
    { type: 'br', content: "" },
    { type: 'text', content: "\nand seamless " },
    { type: 'span', content: "code" },
    { type: 'text', content: "." }
  ];

  const totalChars = segments.reduce((acc, seg) => acc + seg.content.length, 0);

  useEffect(() => {
    if (charCount < totalChars) {
      const timer = setTimeout(() => {
        setCharCount(prev => prev + 1);
      }, 50); // Speed of typing
      return () => clearTimeout(timer);
    }
  }, [charCount, totalChars]);

  let charsRemaining = charCount;

  return (
    <>
      {segments.map((seg, i) => {
        if (seg.type === 'br') {
          return <br key={i} className="hero-h2-break" />;
        }

        const take = Math.max(0, Math.min(charsRemaining, seg.content.length));
        charsRemaining -= seg.content.length;

        const visibleText = seg.content.slice(0, take);
        const hiddenText = seg.content.slice(take);

        const renderContent = (visible, hidden) => (
          <>
            {visible}
            {hidden && <span style={{ opacity: 0 }}>{hidden}</span>}
          </>
        );

        if (seg.type === 'rainbow') {
          return (
            <span key={i}>
              <RainbowWord word={visibleText} startIndex={0} />
              {hiddenText && (
                <span style={{ opacity: 0 }}>
                  <RainbowWord word={hiddenText} startIndex={visibleText.length} />
                </span>
              )}
            </span>
          );
        }
        if (seg.type === 'span') {
          return <span key={i}>{renderContent(visibleText, hiddenText)}</span>;
        }
        return <span key={i}>{renderContent(visibleText, hiddenText)}</span>;
      })}
      <span style={{ animation: 'td-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>|</span>
      <style>{`
        @keyframes td-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}

// ─── Hero Component ────────────────────────────────────────────────────────────
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  }

  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--color-canvas)',
        minHeight: 'calc(100dvh - 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Two-column grid — matches navbar max-width/padding ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="hero-grid"
        style={{
          width: '100%',
          padding: `0 ${LAYOUT.paddingX}`,
          minHeight: 'calc(100dvh - 80px)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          position: 'relative',
        }}
      >
        {/* ── LEFT (desktop) / BOTTOM (mobile): Photo ── */}
        <motion.div
          variants={itemVariants}
          className="hero-photo-col"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            order: 2,
          }}
        >
          <img
            src="/assets/hero-photo.png"
            alt="Michael Julius Rola — full-body portrait"
            className="hero-photo"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              objectPosition: 'bottom center',
            }}
          />
        </motion.div>

        {/* ── RIGHT (desktop) / TOP (mobile): Text ── */}
        <motion.div
          variants={itemVariants}
          className="hero-text-col"
          style={{
            order: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'clamp(1.2rem, 2.2vh, 2rem)',
            paddingTop: 'clamp(2.5rem, 6vh, 5.5rem)',
            paddingBottom: 'clamp(2.5rem, 6vh, 5.5rem)',
          }}
        >
          {/* H1 */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 8vw, 10rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.05em',
              color: 'var(--color-off-black)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Hi, I’m{' '}
            {/* Inline photo — only visible on mobile */}
            <span className="hero-photo-inline-wrap">
              <img
                src="/assets/hero-photo.png"
                className="hero-photo-inline"
                alt=""
                aria-hidden="true"
              />
            </span>
            {' '}Michael!
          </h1>

          {/* H2 — Bold Inter, per-letter rainbow */}
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(1.15rem, 2.5vw, 3.2rem)',
              lineHeight: 1.4,
              letterSpacing: '-0.05em',
              color: '#1B3A8F',
              margin: 0,
            }}
          >
            <HeroTypewriter />
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(0.85rem, 1.1vw, 1.3rem)',
              lineHeight: 1.75,
              color: 'rgba(35,35,35,0.72)',
              margin: 0,
              maxWidth: '70ch',
            }}
          >
            An Information Technology graduate dedicated to building responsive,
            pixel-perfect UX/UI and engaging cross-platform mobile experiences.
            Whether designing 3D assets or writing front-end logic, my goal is
            to create products that look exceptional and perform flawlessly.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-cta-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '0.15rem',
            }}
          >
            <a href="#featured-works" className="btn-pill" id="hero-my-work-btn">
              <ArrowDownIcon />
              My Work
            </a>
            <a href="/assets/ROLA_MICHAEL_JULIUS_RESUME.pdf" className="btn-pill" id="hero-download-cv-btn" download>
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          {/* Lets Connect! + social icons */}
          <div className="hero-socials-row" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.8rem, 0.85vw, 1rem)',
                fontWeight: 600,
                color: 'var(--color-off-black)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Lets Connect!
            </span>
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon"
                id={`hero-social-${label.toLowerCase()}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Email bar (hidden on mobile — shown in ContactFooter) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hero-email-bar"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: '0 auto',
            padding: `0 ${LAYOUT.paddingX} 1.5rem`,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          <MailIcon />
          <a
            href="mailto:rolamaki05@gmail.com"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 0.95vw, 1.1rem)',
              fontWeight: 500,
              color: 'var(--color-off-black)',
              textDecoration: 'none',
              letterSpacing: '0',
              transition: 'opacity 0.2s ease',
              opacity: 0.8,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            rolamaki05@gmail.com
          </a>
        </div>
      </motion.div>

      {/* ── Responsive overrides ── */}
      <style>{`
        /* Inline photo — hidden by default on desktop */
        .hero-photo-inline-wrap { display: none; }

        /* ── Mobile: centered layout, photo inline in H1 ── */
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            align-items: center !important;
          }
          /* Hide the separate left-column photo */
          .hero-photo-col {
            display: none !important;
          }
          /* Center everything */
          .hero-text-col {
            order: 1 !important;
            text-align: center !important;
            align-items: center !important;
            padding-top: clamp(2rem, 5vh, 4rem) !important;
            padding-bottom: clamp(2rem, 5vh, 4rem) !important;
            gap: 0.85rem !important;
          }
          /* H1 with inline photo */
          .hero-h1 {
            font-size: clamp(2rem, 9vw, 3.5rem) !important;
            white-space: normal !important;
            text-align: center !important;
            line-height: 1.15 !important;
            letter-spacing: -0.04em !important;
          }
          /* Show the inline photo between 'I’m' and 'Michael' */
          .hero-photo-inline-wrap {
            display: inline-block !important;
            vertical-align: middle !important;
            margin: 0 0.12em !important;
          }
          .hero-photo-inline {
            width: 1.2em;
            height: 1.2em;
            border-radius: 50%;
            object-fit: cover;
            object-position: top center;
            transform: rotate(-4deg);
            display: inline-block;
            vertical-align: middle;
          }
          /* Center CTA buttons and socials row */
          .hero-cta-row {
            justify-content: center !important;
          }
          .hero-socials-row {
            justify-content: center !important;
          }
          /* Hide email bar (it’s in the footer) */
          .hero-email-bar {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 38% 62% !important;
            padding-left: ${LAYOUT.paddingX} !important;
            padding-right: ${LAYOUT.paddingX} !important;
          }
          .hero-photo-col {
            order: 1 !important;
            align-items: flex-end !important;
            justify-content: flex-start !important;
            position: relative !important;
          }
          /* Gradient fade for the bottom of the photo */
          .hero-photo-col::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 30vh;
            background: linear-gradient(to top, var(--color-canvas) 0%, transparent 100%);
            pointer-events: none;
          }
          .hero-photo {
            max-width: 100% !important;
            height: calc(100dvh - 80px) !important;
            object-fit: contain !important;
            object-position: bottom right !important;
          }
          .hero-text-col {
            order: 2 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 34% 66% !important;
            column-gap: 1rem !important;
          }
          .hero-text-col {
            padding-left: 0.5rem !important;
          }
        }
        @media (min-width: 1440px) {
          .hero-grid {
            grid-template-columns: 32% 68% !important;
            column-gap: 1.5rem !important;
          }
          .hero-text-col {
            padding-left: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}
