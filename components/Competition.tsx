'use client'

import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const details = [
  { icon: '🏎', title: 'Velocidad a escala', text: 'Carros monoplaza a pequeña escala diseñados para máxima velocidad y mínima resistencia aerodinámica.' },
  { icon: '🔧', title: 'Ingeniería real', text: 'Cada componente es diseñado con planos técnicos, bocetos y pruebas de rendimiento como en un equipo de F1 real.' },
  { icon: '🏆', title: 'Competencia nacional', text: 'Equipos de diferentes instituciones del país compiten por el mejor tiempo, diseño y presentación de marca.' },
  { icon: '📚', title: 'Educación STEM', text: 'La competencia integra ciencia, tecnología, ingeniería y matemáticas en un proyecto práctico y emocionante.' },
]

export default function Competition() {
  return (
    <section id="competition" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
          >
            <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
            La Competencia
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            STEM Racing <span style={{ color: 'var(--orange)' }}>RD</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 items-start">
          {/* Info card */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="comp-info-card relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(42,112,113,0.15) 0%, rgba(10,10,10,0.9) 100%)',
              border: '1px solid rgba(42,112,113,0.3)',
              padding: '3rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 800,
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
              }}
            >
              ¿Qué es STEM Racing?
            </h3>
            {[
              'STEM Racing es una competencia de ingeniería en la República Dominicana donde equipos de estudiantes diseñan, construyen y compiten con carros monoplaza a pequeña escala inspirados en la Fórmula 1.',
              'Cada equipo funciona como una escudería real: con departamentos de diseño, aerodinámica, marketing y gestión. El objetivo es que el carro recorra una distancia determinada en el menor tiempo posible.',
              'Speed Bolt representa al IPISA en esta competencia, compitiendo contra otras marcas y escuderías estudiantiles. Somos la combinación de creatividad, precisión técnica y trabajo en equipo.',
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--gray)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Detail cards */}
          <motion.div
            className="flex flex-col gap-6"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {details.map((d, i) => (
              <motion.div
                key={d.title}
                className="comp-detail flex gap-6 items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    width: 50, height: 50, minWidth: 50,
                    background: 'rgba(227,121,3,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      marginBottom: '0.3rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {d.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gray)', lineHeight: 1.6, fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                    {d.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
