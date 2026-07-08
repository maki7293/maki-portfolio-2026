import { useEffect } from 'react'

const MASONRY_IMAGES = Array.from({ length: 28 }, (_, i) => `/assets/3d-${i + 1}.png`)

// You can edit this array to add your YouTube videos and project details!
// To get the youtubeId, look at the URL of your YouTube video. 
// For example, if the URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
const VIDEO_PROJECTS = [
  {
    id: 1,
    title: "Grabbing Objects in VR",
    youtubeId: "FKQ1luV8bYQ",
    description: "An immersive exploration into structural physics for spatial design. This project focuses on building precise interaction mechanics, perfecting object attachment tracking, and ensuring fluid physics simulation inside a virtual reality canvas.",
    pipeline: "Modeling → Texturing → VR Architecture → Simulation",
    tools: "Blender, Unity, Sketchfab"
  },
  {
    id: 2,
    title: "ARAW NG T.I.P. 3D Render",
    youtubeId: "vgJnpxULvXs",
    description: "An architectural lighting and environment study capturing the distinct visual geometry of the institution. Focuses on balancing ambient textures with sharp illumination passes to produce a dramatic, crisp environmental render.",
    pipeline: "Modeling → Texturing → Animation → Compositing",
    tools: "Blender"
  },
  {
    id: 3,
    title: "Dead By Deadlines",
    youtubeId: "86qQn8Xnj_4",
    description: "A mixed-media dynamic short showcasing precise matchmoving pipelines. Features raw film integration synchronized with local 3D spatial elements, meticulous rotoscoping curves, and deep compositing frames to merge narrative with digital reality.",
    pipeline: "Filming → Modeling → Texturing → Animation → Rotoscoping → Compositing → Editing",
    tools: "Blender, CapCut, fSpy"
  },
  {
    id: 4,
    title: "Velvet Pour: Product Advertisement",
    youtubeId: "CPyFXqhh4xg",
    description: "A commercial-style fluid and hard-surface simulation focused on premium product presentation. Emphasizes clean lighting setups, realistic material reflections, and smooth tracking motion to mimic modern high-end advertising aesthetics.",
    pipeline: "Modeling → Texturing → Studio Lighting → Product Animation → Compositing",
    tools: "Blender"
  },
  {
    id: 5,
    title: "Chameleon: Chroma Shifts",
    youtubeId: "NKP1SGVt7NM",
    description: "An exploration into advanced material shader logic and dynamic texture blending. Built with an intricate environmental background loop, this study focuses on timing animated color transformations seamlessly within a stylized set.",
    pipeline: "Set Designing → Character Animation → Shader Integration → Compositing → Video Editing",
    tools: "Blender, Sketchfab, CapCut"
  },
  {
    id: 6,
    title: "Overdrive Kinetic Study",
    youtubeId: "5t5MVWx2gn4",
    description: "A high-velocity study emphasizing hard-surface vehicle physics and environmental parallax. Focuses on cinematic camera path mapping, environmental framing, and sharp compositing to convey believable speed and weight.",
    pipeline: "Set Designing → Hard-Surface Animation → Cinematic Camera Tracking → Video Editing",
    tools: "Blender, Sketchfab, CapCut"
  },
  {
    id: 7,
    title: "Interactive AR Image Target Integration",
    youtubeId: "SbZL7sJt9L4",
    description: "An immersive augmented reality structure focusing on user interface integration within a live camera feed. Explores virtual spatial buttons and projecting dynamic screen textures directly onto a moving geometric 3D target plane.",
    pipeline: "Set Designing → Virtual Interfaces → AR Plane Mapping → Interactive Animation",
    tools: "Unity, Vuforia, Sketchfab"
  },
  {
    id: 8,
    title: "Spatial Shadow & Asset Integration",
    youtubeId: "hlsPdHrMN6Y",
    description: "A technical study focusing on real-world space alignment. Emphasizes matching focal perspectives, aligning complex local environment coordinates, and generating accurate contact shadows to blend a static digital asset directly on top of raw footage.",
    pipeline: "Asset Selection → Spatial Alignment → Ambient Occlusion → Compositing → Video Editing",
    tools: "Blender, Sketchfab"
  },
  {
    id: 9,
    title: "Volumetric Illumination Study",
    youtubeId: "GLoOoWo4pKs",
    description: "An atmospheric exploration detailing how heavy volumetric lighting interacts with complex hard surfaces. Focuses on bouncing indirect illumination across deep environments to cultivate high-contrast cinematic drama.",
    pipeline: "Set Designing → Volumetric Lighting → Camera Choreography → High-End Rendering",
    tools: "Blender, Sketchfab"
  },
  {
    id: 10,
    title: "Nostalgia AR: Retro Gameboy",
    youtubeId: "OV6TiLrg7rM",
    description: "A playful, multi-sensory mobile augmented reality integration combining hardware replica modeling with spatial interaction. Features clean image targeted mechanics, custom input systems, and responsive localized audio layers.",
    pipeline: "Hard-Surface Modeling → Target Tracking Architecture → Spatial Audio Engineering",
    tools: "Blender, Unity, Vuforia"
  },
  {
    id: 11,
    title: "Mixed Reality Layering",
    youtubeId: "Oy33Fm9dSHU",
    description: "A composite sequence experimenting with layering hierarchies. Investigates pixel-accurate masking and color-grading adjustments to anchor a vibrant 3D rendering convincingly into a dynamic real-world digital backdrop.",
    pipeline: "Asset Integration → Color Calibration → Matte Layering → Compositing",
    tools: "Blender, Sketchfab"
  },
  {
    id: 12,
    title: "Ethereal Woodland: Photorealistic Environment",
    youtubeId: "SeopWybXeN8",
    description: "A comprehensive organic set design study building dense foliage and natural scattering. Emphasizes detailed environmental density, soft scattered lighting nodes, and a slow-drifting camera pass to showcase intricate asset layouts.",
    pipeline: "Foliage Scattering → Set Designing → Micro-Lighting → Environmental Render",
    tools: "Blender"
  },
  {
    id: 13,
    title: "Ghibli Remake: Calcifer’s Hearth",
    youtubeId: "ddGKM2tFMMw",
    description: "An interpretation of a classic aesthetic animated within a stylized 3D set environment. Focuses on bringing warmth, glowing mesh textures, and charming micro-movements together to render an intimate cinematic vignette.",
    pipeline: "Stylized Modeling → Hearth Design → Emissive Shader Animation → Vignette Compositing",
    tools: "Blender, Sketchfab"
  },
  {
    id: 14,
    title: "Rigid Body Dynamics: The Bowling Alley",
    youtubeId: "-8XiL1T2oIc",
    description: "A structural asset physics study managing complex geometry interactions. Focuses entirely on calculating weight properties, dynamic velocity parameters, and realistic object fracturing calculations upon localized impact.",
    pipeline: "Modeling → Material Tuning → Rigid Body Simulation → Render Passes",
    tools: "Blender, Sketchfab"
  },
  {
    id: 15,
    title: "Claude Monet: Water Lilies in VR",
    youtubeId: "Ru1X4wE5PV0",
    description: "Stepping inside classic impressionist brushwork through immersive technology. This environment transforms static fine art coordinates into a navigable 3D virtual landscape space, balancing artistic painterly textures with functional VR exploration parameters.",
    pipeline: "Canvas Translation → 3D Space Layout → VR Navigation Mapping → Atmospheric Tuning",
    tools: "Blender, Unity"
  },
  {
    id: 16,
    title: "Structural Impact Simulation",
    youtubeId: "5NZuPOoSZ-s",
    description: "A heavy-impact kinetic study tracking stress points and debris dispersion. Focuses on smooth multi-object collision paths, complex weight calculations, and real-time rigid body system reactions.",
    pipeline: "Modeling → Kinetic Animation → Physics Simulation → Multi-Pass Compositing",
    tools: "Blender"
  },
  {
    id: 17,
    title: "Perspective Camera Matchmoving",
    youtubeId: "ud6CQAHS1KA",
    description: "An advanced tracking exercise aligning digital meshes with erratic live-action camera paths. Uses meticulous marker analysis to solve physical lens properties, allowing complete spatial synchronization between video plates and geometric elements.",
    pipeline: "Camera Point Tracking → Lens Optimization → Asset Anchoring → Photorealistic Rendering",
    tools: "Blender, Sketchfab"
  }
];

const metaTitleStyle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: '1.05rem',
  color: 'var(--color-off-black)',
  marginBottom: '0.5rem',
}

const metaValueStyle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 400,
  fontSize: '0.95rem',
  color: 'var(--color-off-black)',
  opacity: 0.7,
  lineHeight: 1.5,
  margin: 0,
  whiteSpace: 'pre-line',
}

import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'
import { motion } from 'framer-motion'

export default function Portfolio3DPage() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
    <div
      style={{
        paddingTop: 'clamp(3rem, 6vh, 5rem)',
        paddingBottom: 'clamp(6rem, 12vh, 12rem)',
        maxWidth: '1800px',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <BackButton />
      
      {/* ── Page Header ── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vh, 5rem)' }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-off-black)',
            margin: '0 0 1rem',
          }}
        >
          3D Portfolio
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 1.2vw, 1.35rem)',
            lineHeight: 1.75,
            color: 'var(--color-off-black)',
            opacity: 0.72,
            maxWidth: '65ch',
            margin: '0 auto',
          }}
        >
          A collection of my 3D modeling, texturing, rendering, and full-scale production work, ranging from static scenes to immersive animations and VR/AR.
        </p>
      </motion.div>

      {/* ── Masonry Grid for 3D Models ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: 'clamp(5rem, 10vh, 8rem)' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-off-black)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          3D Models & Renderings
        </h2>

        <div className="masonry-grid">
          {MASONRY_IMAGES.map((src, index) => (
            <div key={index} className="masonry-item">
              <img
                src={src}
                alt={`3D Artwork ${index + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(35,35,35,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Video Projects Section ── */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-off-black)',
            marginBottom: '3rem',
            textAlign: 'center'
          }}
        >
          Animations & Projects
        </h2>

        <div className="video-projects-list">
          {VIDEO_PROJECTS.map((project) => (
            <div key={project.id} className="video-project-card">
              {/* Video Embed */}
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Project Details */}
              <div className="video-details">
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                    color: 'var(--color-off-black)',
                    margin: '0 0 1rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: 'var(--color-off-black)',
                    opacity: 0.8,
                    lineHeight: 1.6,
                    margin: '0 0 1.5rem',
                  }}
                >
                  {project.description}
                </p>

                <div className="video-meta-grid">
                  <div>
                    <h4 style={metaTitleStyle}>Pipeline</h4>
                    <p style={metaValueStyle}>{project.pipeline}</p>
                  </div>
                  <div>
                    <h4 style={metaTitleStyle}>Tools</h4>
                    <p style={metaValueStyle}>{project.tools}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Styles ── */}
      <style>{`
        /* Masonry Grid */
        .masonry-grid {
          column-count: 1;
          column-gap: 1.5rem;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .masonry-grid { column-count: 2; }
        }
        @media (min-width: 1024px) {
          .masonry-grid { column-count: 3; }
        }
        @media (min-width: 1440px) {
          .masonry-grid { column-count: 4; }
        }

        /* Video Projects */
        .video-projects-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-project-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(35, 35, 35, 0.08);
          border-radius: 1.5rem;
          padding: clamp(1.5rem, 3vw, 3rem);
          box-shadow: 0 20px 40px rgba(0,0,0,0.02);
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          border-radius: 1rem;
          overflow: hidden;
          background-color: #000;
          flex: 1.2;
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .video-meta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(35,35,35,0.1);
        }
        @media (min-width: 640px) {
          .video-meta-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
    </PageWrapper>
  )
}
