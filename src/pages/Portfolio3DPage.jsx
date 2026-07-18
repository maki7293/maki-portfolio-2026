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
    description: "A fun dive into VR physics where I worked on making grabbing objects feel as natural as possible. The main challenge was getting the interaction mechanics right—like fine-tuning object attachment tracking and making sure the physics simulation ran smoothly inside the headset.",
    pipeline: "Modeling → Texturing → VR Architecture → Simulation",
    tools: "Blender, Unity, Sketchfab"
  },
  {
    id: 2,
    title: "ARAW NG T.I.P. 3D Render",
    youtubeId: "vgJnpxULvXs",
    description: "A 3D render honoring my school, T.I.P. I focused heavily on architectural lighting to capture the campus's unique look. It was a great study in balancing ambient textures with sharp lighting passes to create a dramatic but crisp environment.",
    pipeline: "Modeling → Texturing → Animation → Compositing",
    tools: "Blender"
  },
  {
    id: 3,
    title: "Dead By Deadlines",
    youtubeId: "86qQn8Xnj_4",
    description: "A short mixed-media project where I practiced matchmoving. I took raw live-action footage and integrated 3D elements into the scene. It took a lot of careful rotoscoping and compositing to blend the real world with the digital one smoothly.",
    pipeline: "Filming → Modeling → Texturing → Animation → Rotoscoping → Compositing → Editing",
    tools: "Blender, CapCut, fSpy"
  },
  {
    id: 4,
    title: "Velvet Pour: Product Advertisement",
    youtubeId: "CPyFXqhh4xg",
    description: "A commercial-style animation for a premium product, mixing fluid and hard-surface simulations. I wanted to replicate that high-end advertising look, which meant dialing in clean studio lighting, realistic reflections, and smooth camera tracking.",
    pipeline: "Modeling → Texturing → Studio Lighting → Product Animation → Compositing",
    tools: "Blender"
  },
  {
    id: 5,
    title: "Chameleon: Chroma Shifts",
    youtubeId: "NKP1SGVt7NM",
    description: "An experiment with dynamic texture blending and shader logic. I built a stylized looping background and focused on timing the color transformations so they shifted seamlessly with the animation.",
    pipeline: "Set Designing → Character Animation → Shader Integration → Compositing → Video Editing",
    tools: "Blender, Sketchfab, CapCut"
  },
  {
    id: 6,
    title: "Overdrive Kinetic Study",
    youtubeId: "5t5MVWx2gn4",
    description: "A high-speed animation study focused on vehicle physics and environmental parallax. To make the speed and weight feel believable, I spent a lot of time on cinematic camera mapping, framing, and compositing.",
    pipeline: "Set Designing → Hard-Surface Animation → Cinematic Camera Tracking → Video Editing",
    tools: "Blender, Sketchfab, CapCut"
  },
  {
    id: 7,
    title: "Interactive AR Image Target Integration",
    youtubeId: "SbZL7sJt9L4",
    description: "An AR project where I integrated a virtual UI directly into a live camera feed. It was a fun challenge trying to map interactive virtual buttons and dynamic screen textures onto a geometric 3D target in real-time.",
    pipeline: "Set Designing → Virtual Interfaces → AR Plane Mapping → Interactive Animation",
    tools: "Unity, Vuforia, Sketchfab"
  },
  {
    id: 8,
    title: "Spatial Shadow & Asset Integration",
    youtubeId: "hlsPdHrMN6Y",
    description: "A technical test on blending 3D assets into raw footage. I focused on matching the real-world focal perspectives and generating accurate contact shadows so the digital asset actually looks like it belongs in the scene.",
    pipeline: "Asset Selection → Spatial Alignment → Ambient Occlusion → Compositing → Video Editing",
    tools: "Blender, Sketchfab"
  },
  {
    id: 9,
    title: "Volumetric Illumination Study",
    youtubeId: "GLoOoWo4pKs",
    description: "A lighting study showing how heavy volumetric fog interacts with complex hard surfaces. I played around with bouncing indirect light across a deep environment to give the scene a moody, cinematic feel.",
    pipeline: "Set Designing → Volumetric Lighting → Camera Choreography → High-End Rendering",
    tools: "Blender, Sketchfab"
  },
  {
    id: 10,
    title: "Nostalgia AR: Retro Gameboy",
    youtubeId: "OV6TiLrg7rM",
    description: "A fun AR project bringing a retro Gameboy into the real world. I modeled the hardware and hooked it up with image-targeted tracking, custom inputs, and spatial audio to make the virtual toy actually feel interactive.",
    pipeline: "Hard-Surface Modeling → Target Tracking Architecture → Spatial Audio Engineering",
    tools: "Blender, Unity, Vuforia"
  },
  {
    id: 11,
    title: "Mixed Reality Layering",
    youtubeId: "Oy33Fm9dSHU",
    description: "A compositing experiment focused on layering 3D renders into real-world video. I worked heavily on pixel-accurate masking and color-grading to anchor the vibrant 3D models convincingly into the background.",
    pipeline: "Asset Integration → Color Calibration → Matte Layering → Compositing",
    tools: "Blender, Sketchfab"
  },
  {
    id: 12,
    title: "Ethereal Woodland: Photorealistic Environment",
    youtubeId: "SeopWybXeN8",
    description: "An organic environment design study focused on photorealistic foliage. I built out a dense forest scene using scattering tools, tweaked the lighting to feel natural, and animated a slow camera drift to show off the details.",
    pipeline: "Foliage Scattering → Set Designing → Micro-Lighting → Environmental Render",
    tools: "Blender"
  },
  {
    id: 13,
    title: "Ghibli Remake: Calcifer’s Hearth",
    youtubeId: "ddGKM2tFMMw",
    description: "My 3D take on a classic Studio Ghibli scene. I wanted to capture that cozy, warm aesthetic by playing with emissive shader textures and adding subtle micro-movements to bring the diorama to life.",
    pipeline: "Stylized Modeling → Hearth Design → Emissive Shader Animation → Vignette Compositing",
    tools: "Blender, Sketchfab"
  },
  {
    id: 14,
    title: "Rigid Body Dynamics: The Bowling Alley",
    youtubeId: "-8XiL1T2oIc",
    description: "A rigid body physics test disguised as a bowling alley. I focused mostly on the backend physics—calculating object weights, tuning velocity, and setting up realistic fracturing upon impact.",
    pipeline: "Modeling → Material Tuning → Rigid Body Simulation → Render Passes",
    tools: "Blender, Sketchfab"
  },
  {
    id: 15,
    title: "Claude Monet: Water Lilies in VR",
    youtubeId: "Ru1X4wE5PV0",
    description: "A VR experience that lets you step inside Monet’s impressionist paintings. The goal was to take a static piece of fine art and turn it into a 3D landscape, balancing painterly textures with actual VR navigation mechanics.",
    pipeline: "Canvas Translation → 3D Space Layout → VR Navigation Mapping → Atmospheric Tuning",
    tools: "Blender, Unity"
  },
  {
    id: 16,
    title: "Structural Impact Simulation",
    youtubeId: "5NZuPOoSZ-s",
    description: "A kinetic simulation testing heavy structural impacts. It was all about tracking stress points and debris dispersion, ensuring the multi-object collisions and rigid body reactions looked natural.",
    pipeline: "Modeling → Kinetic Animation → Physics Simulation → Multi-Pass Compositing",
    tools: "Blender"
  },
  {
    id: 17,
    title: "Perspective Camera Matchmoving",
    youtubeId: "ud6CQAHS1KA",
    description: "An advanced matchmoving test where I tracked erratic live-action camera footage. By analyzing markers and matching the physical lens properties, I was able to sync the 3D geometry perfectly with the raw video plate.",
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
