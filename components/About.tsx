'use client'

import { motion } from 'framer-motion'

const facts = [
  {
    n: '01',
    title: 'Diseño F1 a escala',
    text: 'Nuestro monoplaza replica la aerodinámica de un carro de Fórmula 1, optimizando cada curva y superficie para minimizar la resistencia del aire.',
  },
  {
    n: '02',
    title: 'Ingeniería aplicada',
    text: 'Cada componente está respaldado por planos técnicos, cálculos y pruebas físicas. No es maqueta — es ingeniería real.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#f5f5f5', padding: '10rem 0' }}
    >
      <div className="px-6 md:px-16" style={{ maxWidth: 1400, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div
            className="flex items-center gap-3 mb-8"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
          >
            <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
            Sobre Nosotros
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              lineHeight: 0.88,
              textTransform: 'uppercase',
              color: '#000',
              letterSpacing: '-0.02em',
            }}
          >
            Construyendo<br />
            una marca<br />
            que <span style={{ color: 'var(--orange)' }}>compite.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Facts list */}
          <div className="flex flex-col gap-0">
            {facts.map((f, i) => (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: '2.5rem 0',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  ...(i === 0 ? { borderTop: '1px solid rgba(0,0,0,0.1)' } : {}),
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  color: 'var(--orange)',
                  marginBottom: '1rem',
                }}>
                  {f.n}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  color: '#000',
                  marginBottom: '0.75rem',
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#555',
                  lineHeight: 1.8,
                  fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                  maxWidth: 480,
                }}>
                  {f.text}
                </p>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.9 }}
              style={{
                paddingTop: '2.5rem',
                fontSize: '0.82rem',
                color: '#999',
                fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                lineHeight: 1.75,
              }}
            >
              Speed Bolt nace en IPISA como un equipo dedicado a la competencia STEM Racing en República Dominicana.
            </motion.p>
          </div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Ghost type */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(5rem, 11vw, 10rem)',
                textTransform: 'uppercase',
                lineHeight: 0.85,
                textAlign: 'center',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}>
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.06)', color: 'transparent', display: 'block' }}>SPEED</span>
                <span style={{ color: 'var(--orange)', opacity: 0.12, display: 'block' }}>BOLT</span>
              </div>

              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 48, height: 2, background: 'var(--orange)' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 2, height: 48, background: 'var(--orange)' }} />

              {/* Bottom label */}
              <div style={{ position: 'relative', zIndex: 1, borderLeft: '2px solid var(--orange)', paddingLeft: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontSize: '0.52rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '0.5rem',
                }}>
                  IPISA · Santiago · RD
                </div>
                <div style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontSize: '2rem',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--white)',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}>
                  STEM Racing<br />
                  <span style={{ color: 'var(--orange)' }}>2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
