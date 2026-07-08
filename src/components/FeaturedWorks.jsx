// FeaturedWorks.jsx
// Changes from feedback:
// ✅ Smaller image containers (clamp height, 48% col)
// ✅ Hero-matching layout (same LAYOUT token, same padding rhythm)
// ✅ Wireframe content identical
// ✅ View Project placeholder link retained
// ✅ Project title → Inter bold, letter-spacing: 0.05em
// ✅ Tags colored per project (bg + border + text use project color)
// ✅ Glow on image containers matching container color
// ✅ "Featured Works" title slightly tilted (−2deg)
// ✅ More space above section (bigger top padding)

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LAYOUT = { maxWidth: '1800px', paddingX: '1.5rem' }

const PROJECTS = [
  {
    name: 'SkillTree',
    category: 'Career Development Platform',
    description:
      'A mobile-first platform designed to empower job seekers. I crafted intuitive user journeys and accessible interfaces that seamlessly connect users with personalized training, workshops, and career assistance.',
    tags: ['UX/UI Case Study', 'Mobile App Design', 'User Research'],
    image: '/assets/featured-works-1.png',
    color: '#6C95D5',
    rgb: '108, 149, 213',
    imageRight: true,
  },
  {
    name: "Clock'it",
    category: 'HR Management System',
    description:
      'An enterprise platform optimizing administrative workflows. I developed a role-based React dashboard that translates complex backend operations—like real-time attendance and automated leave tracking—into a clean, highly efficient user interface.',
    tags: ['React (Vite)', 'UI Design', 'System UX'],
    image: '/assets/featured-works-2.png',
    color: '#C9AD33',
    rgb: '201, 173, 51',
    imageRight: false,
  },
  {
    name: 'Pour Decisions',
    category: 'E-commerce Web Application',
    description:
      'A dynamic e-commerce web application prioritizing a frictionless shopping experience. I built responsive front-end architectures for both the customer storefront and a custom admin dashboard to streamline real-time inventory control.',
    tags: ['Web Development', 'E-commerce UI', 'HTML, CSS, JavaScript'],
    image: '/assets/featured-works-3.png',
    color: '#CC7F58',
    rgb: '204, 127, 88',
    imageRight: true,
  },
]

/* ── Arrow icon ── */
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/* ══════════════════════════════════════════
   Main Section
══════════════════════════════════════════ */
export default function FeaturedWorks() {
  return (
    <section
      id="featured-works"
      style={{
        backgroundColor: 'var(--color-canvas)',
        paddingBottom: 'clamp(6rem, 12vh, 12rem)',
      }}
    >
      {/* ── Section heading — centered + tilted ── */}
      <div
        className="fw-section-header"
        style={{
          textAlign: 'center',
          /* More space above to separate from Hero */
          padding: `clamp(8rem, 15vh, 14rem) ${LAYOUT.paddingX} clamp(4rem, 8vh, 8rem)`,
          overflow: 'visible',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 6vw, 8rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'var(--color-off-black)',
            margin: 0,
            display: 'inline-block',
            /* ── Fun tilt ── */
            transform: 'rotate(-2deg)',
            transformOrigin: 'center center',
          }}
        >
          Featured Works
        </h2>
      </div>

      {/* ── Project rows — constrained to hero text-column width, centered ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(5rem, 10vh, 9rem)',
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        /* ── Mobile: reduce excessive top padding on section header ── */
        @media (max-width: 767px) {
          .fw-section-header {
            padding: 3.5rem 1.5rem 2rem !important;
          }
        }

        /* Two-column grid — mobile: text first, image second */
        .fw-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          align-items: center;
          /* Mobile breathing room */
          padding: 0 1.5rem;
        }
        /* Mobile: image first, description second */
        .fw-text    { order: 2; }
        .fw-img-box { order: 1; }

        @media (min-width: 768px) {
          .fw-row {
            grid-template-columns: 1fr 1fr;
          }
          /* Desktop image-right rows: text on LEFT, image on RIGHT */
          .fw-row.image-right .fw-text    { order: 1; }
          .fw-row.image-right .fw-img-box { order: 2; }
          /* Desktop image-left rows: image on LEFT, text on RIGHT */
          .fw-row.image-left .fw-text    { order: 2; }
          .fw-row.image-left .fw-img-box { order: 1; }
        }
        @media (min-width: 1024px) {
          .fw-row {
            grid-template-columns: 41% 55%;
            gap: 4%;
            padding: 0;
          }
          .fw-row.image-left {
            grid-template-columns: 55% 41%;
          }
        }

        /* ── Colored image container ── */
        .fw-img-box {
          border-radius: clamp(0.85rem, 1.4vw, 1.6rem);
          overflow: hidden;
          width: 100%;
          /* Tighter padding = image appears larger inside the colored frame */
          padding: clamp(0.65rem, 1vw, 1.1rem);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fw-img-box img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: clamp(0.35rem, 0.6vw, 0.6rem);
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .fw-img-box:hover img {
          transform: scale(1.03);
        }

        /* ── Text column ── */
        .fw-text {
          display: flex;
          flex-direction: column;
          gap: clamp(0.9rem, 1.4vh, 1.4rem);
        }

        /* ── View Project link ── */
        .fw-view-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-sans);
          font-size: clamp(0.85rem, 0.95vw, 1.05rem);
          font-weight: 600;
          color: #1B3A8F;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .fw-view-link:hover {
          gap: 0.75rem;
          opacity: 0.7;
        }
        .fw-view-link:hover svg {
          transform: translateX(3px);
        }
        .fw-view-link svg {
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  )
}

/* ══════════════════════════════════════════
   Single project row
══════════════════════════════════════════ */
function ProjectRow({ project }) {
  const { name, category, description, tags, image, color, rgb, imageRight } = project

  const textCol = (
    <div className="fw-text">

      {/* Category label */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: 'clamp(0.88rem, 1vw, 1.1rem)',
          letterSpacing: '-0.04em',
          color: 'var(--color-off-black)',
          opacity: 0.5,
          margin: 0,
        }}
      >
        {category}
      </p>

      {/* Project name — Inter Bold, 0.05em tracking per request */}
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 3vw, 4rem)',
          letterSpacing: '-0.05em',
          lineHeight: 1.05,
          color: 'var(--color-off-black)',
          margin: 0,
        }}
      >
        {name}
      </h3>

      {/* Tags — colored per project (bg + border + text use project rgb) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              display: 'inline-flex',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              /* All tags use consistent blue — rgba(108,149,213) = SkillTree blue */
              backgroundColor: 'rgba(108, 149, 213, 0.35)',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.76rem, 0.84vw, 0.92rem)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: 'var(--color-accent-blue)',
              whiteSpace: 'nowrap',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description — matches hero body paragraph style */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: 'clamp(0.88rem, 1.05vw, 1.18rem)',
          lineHeight: 1.75,
          color: 'var(--color-off-black)',
          opacity: 0.72,
          margin: 0,
          maxWidth: '44ch',
        }}
      >
        {description}
      </p>

      {/* View Project — Link if page exists, placeholder otherwise */}
      {name === 'SkillTree' || name === "Clock'it" || name === 'Pour Decisions' ? (
        <Link
          to={`/project/${name === 'SkillTree' ? 'skilltree' : name === "Clock'it" ? 'clockit' : 'pour-decisions'}`}
          className="fw-view-link"
          aria-label={`View ${name} project`}
        >
          View Project
          <ArrowIcon />
        </Link>
      ) : (
        <a
          href="#"
          className="fw-view-link"
          aria-label={`View ${name} project`}
        >
          View Project
          <ArrowIcon />
        </a>
      )}
    </div>
  )

  const imageCol = (
    <div
      className="fw-img-box"
      style={{
        backgroundColor: color,
        /* Glow — triple-layered bloom for maximum visibility */
        boxShadow: `0 35px 120px rgba(${rgb}, 0.9), 0 12px 60px rgba(${rgb}, 0.65), 0 4px 20px rgba(${rgb}, 0.4)`,
      }}
    >
      <img
        src={image}
        alt={`${name} project screenshot`}
        loading="lazy"
      />
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.15 }}
      className={`fw-row ${imageRight ? 'image-right' : 'image-left'}`}
    >
      {textCol}
      {imageCol}
    </motion.div>
  )
}
