'use client'

import { motion } from 'framer-motion'

const points = [
  { n: '01', title: 'Carros a escala', text: 'Monoplazas diseñados para máxima velocidad y mínima resistencia aerodinámica.' },
  { n: '02', title: 'Ingeniería aplicada', text: 'Planos técnicos, prototipos y pruebas reales — como un equipo F1 de verdad.' },
  { n: '03', title: 'Competencia nacional', text: 'Instituciones de toda la República Dominicana compiten por el mejor tiempo y diseño.' },
  { n: '04', title: 'Educación STEM', text: 'Ciencia, tecnología, ingeniería y matemáticas en un proyecto completamente práctico.' },
]

export default function Competition() {
  return (
    <section id="competition" style={{ background: '#000', padding: '10rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.05)' }} />

      <div className="px-6 md:px-16" style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Graphic headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div
            className="flex items-center gap-3 mb-8"
            style={{ fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
          >
            <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
            La Competencia
          </div>
          <h2 style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 10vw, 10rem)',
            lineHeight: 0.83,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}>
            STEM<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>Racing</span><br />
            <span style={{ color: 'var(--orange)' }}>RD</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* What is STEM Racing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 800,
              fontStyle: 'italic',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              color: 'var(--white)',
            }}>
              ¿Qué es STEM Racing?
            </h3>
            {[
              'STEM Racing es una competencia de ingeniería en República Dominicana donde equipos de estudiantes diseñan, construyen y compiten con carros monoplaza a pequeña escala, inspirados en la Fórmula 1.',
              'Cada equipo funciona como una escudería real: con departamentos de diseño, aerodinámica, marketing y gestión. El objetivo es recorrer una distancia determinada en el menor tiempo posible.',
              'Speed Bolt representa a IPISA — compitiendo con creatividad, precisión técnica y trabajo en equipo.',
            ].map((p, i) => (
              <p key={i} style={{
                color: 'rgba(255,255,255,0.42)',
                lineHeight: 1.85,
                marginBottom: '1.25rem',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
              }}>
                {p}
              </p>
            ))}
          </motion.div>

          {/* Numbered points */}
          <div className="flex flex-col gap-0">
            {points.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  ...(i === 0 ? { borderTop: '1px solid rgba(255,255,255,0.05)' } : {}),
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  color: 'var(--orange)',
                  minWidth: 26,
                  paddingTop: '0.2rem',
                }}>
                  {p.n}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    color: 'var(--white)',
                  }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
