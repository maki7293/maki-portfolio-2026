import { Link } from 'react-router-dom'

// Portfolio3D.jsx
// Section 3 — 3D Art showcase
// • Section header with title + description
// • Infinite scrolling ticker text (CSS marquee)
// • Two rows of images auto-scrolling in opposite directions (pure CSS, no deps)

const LAYOUT = { maxWidth: '1800px', paddingX: '1.5rem' }

// Split 18 images across 2 rows of 9
const ROW_1 = Array.from({ length: 9 }, (_, i) => `/assets/3d-${i + 1}.png`)
const ROW_2 = Array.from({ length: 9 }, (_, i) => `/assets/3d-${i + 10}.png`)

// Ticker words — duplicated inside the marquee for seamless loop
const TICKER_ITEMS = [
  '3D Art & Design', '★', 'Blender', '★', '3D Modeling', '★',
  'Digital Sculpting', '★', 'Character Design', '★', 'Rendering', '★',
  'Texturing & Shading', '★', 'Scene Building', '★',
]

/* ══════════════════════════════════════════
   Main Section
══════════════════════════════════════════ */
export default function Portfolio3D() {
  return (
    <section
      id="3d-portfolio"
      style={{
        backgroundColor: 'var(--color-canvas)',
        overflow: 'hidden',
        paddingBottom: 'clamp(6rem, 12vh, 12rem)',
      }}
    >
      {/* ── Section header ── */}
      <div
        className="td-section-header"
        style={{
          maxWidth: LAYOUT.maxWidth,
          margin: '0 auto',
          padding: `clamp(6rem, 12vh, 10rem) ${LAYOUT.paddingX} clamp(3rem, 5vh, 5rem)`,
          textAlign: 'center',
        }}
      >

        {/* Title */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 5.5vw, 7.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'var(--color-off-black)',
            margin: '0 0 1.5rem',
          }}
        >
          3D Portfolio
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)',
            lineHeight: 1.75,
            color: 'var(--color-off-black)',
            opacity: 0.65,
            maxWidth: '52ch',
            margin: '0 auto 2rem',
          }}
        >
          A little space dedicated to my 3D track, where I swap out code for textures, lighting, and a whole lot of polygons
        </p>

        {/* See 3D Portfolio button */}
        <Link
          to="/project/3d-portfolio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 'clamp(0.85rem, 0.95vw, 1rem)',
            letterSpacing: '-0.01em',
            color: 'var(--color-off-black)',
            border: '1.5px solid rgba(35,35,35,0.35)',
            borderRadius: '9999px',
            padding: '0.65rem 1.4rem',
            textDecoration: 'none',
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(35,35,35,0.06)'; e.currentTarget.style.borderColor = 'rgba(35,35,35,0.6)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(35,35,35,0.35)' }}
        >
          See 3D Portfolio
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* ── Scrolling ticker ── */}
      <div
        style={{
          borderTop: '1.5px solid rgba(35,35,35,0.1)',
          borderBottom: '1.5px solid rgba(35,35,35,0.1)',
          padding: '0.9rem 0',
          marginBottom: 'clamp(1.5rem, 3vh, 3rem)',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        {/* The track is 2× wide: items + items → animate to -50% for seamless loop */}
        <div className="td-ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className={item === '★' ? 'td-ticker-star' : 'td-ticker-word'}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Image rows ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(0.6rem, 1vw, 1rem)',
        }}
      >
        <ImageRow images={ROW_1} direction="left" duration={38} />
        <ImageRow images={ROW_2} direction="right" duration={44} />
      </div>

      {/* ── CSS ── */}
      <style>{`
        /* ─── Ticker ─── */
        @keyframes td-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .td-ticker-track {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          white-space: nowrap;
          animation: td-ticker 22s linear infinite;
          will-change: transform;
        }
        .td-ticker-word {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: clamp(0.95rem, 1.15vw, 1.35rem);
          letter-spacing: -0.02em;
          color: var(--color-off-black);
          padding: 0 0.25rem;
        }
        .td-ticker-star {
          font-size: clamp(0.7rem, 0.9vw, 1rem);
          color: #B12A2D;
          line-height: 1;
        }

        /* ─── Image rows ─── */
        @keyframes td-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes td-scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .td-img-track {
          display: flex;
          gap: clamp(0.5rem, 0.75vw, 0.875rem);
          will-change: transform;
        }
        .td-img-track.scroll-left {
          animation: td-scroll-left linear infinite;
        }
        .td-img-track.scroll-right {
          animation: td-scroll-right linear infinite;
        }

        /* Individual image card */
        .td-img-card {
          flex-shrink: 0;
          border-radius: clamp(0.5rem, 0.75vw, 0.875rem);
          overflow: hidden;
          width: clamp(180px, 18vw, 290px);
          height: clamp(130px, 13vw, 210px);
          background-color: rgba(35,35,35,0.05);
        }
        .td-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .td-img-card:hover img {
          transform: scale(1.07);
        }

        /* ── Mobile: tighter section header + smaller image cards ── */
        @media (max-width: 767px) {
          .td-section-header {
            padding: 3.5rem 1.5rem 2rem !important;
          }
          .td-img-card {
            width: clamp(140px, 42vw, 200px);
            height: clamp(100px, 30vw, 150px);
          }
        }
      `}</style>
    </section>
  )
}

/* ══════════════════════════════════════════
   Scrolling image row
   direction: 'left' | 'right'
   duration: animation seconds (slower = more leisurely)
══════════════════════════════════════════ */
function ImageRow({ images, direction, duration }) {
  // Duplicate so the track is 2× wide — the animation runs to -50% for seamless loop
  const doubled = [...images, ...images]

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        className={`td-img-track scroll-${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="td-img-card">
            <img
              src={src}
              alt={`3D work ${(i % images.length) + 1}`}
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
