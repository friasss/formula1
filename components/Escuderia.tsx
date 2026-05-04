'use client'

import { motion } from 'framer-motion'

const departamentos = [
  { numero: '01', nombre: 'Diseño', descripcion: 'Conceptualización y bocetos del monoplaza, identidad visual y presentación de marca.' },
  { numero: '02', nombre: 'Aerodinámica', descripcion: 'Análisis del perfil aerodinámico, optimización del chasis y pruebas de resistencia al aire.' },
  { numero: '03', nombre: 'Fabricación', descripcion: 'Construcción del prototipo, selección de materiales y ensamblaje de componentes.' },
  { numero: '04', nombre: 'Marketing', descripcion: 'Comunicación de marca, redes sociales, presentación ante jueces y relaciones con patrocinadores.' },
  { numero: '05', nombre: 'Gestión', descripcion: 'Coordinación del equipo, planificación estratégica y cumplimiento de cronograma.' },
]

export default function Escuderia() {
  return (
    <section id="escuderia" style={{ background: 'var(--light)', padding: '10rem 0' }}>
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
            style={{ fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
          >
            <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
            Estructura del equipo
          </div>
          <h2 style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            lineHeight: 0.88,
            textTransform: 'uppercase',
            color: '#000',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            Nuestra <span style={{ color: 'var(--orange)' }}>Escudería</span>
          </h2>
          <p style={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.75, maxWidth: 520, fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
            Como una escudería de Fórmula 1, Speed Bolt opera con departamentos especializados que trabajan en conjunto para llevar el monoplaza a la pista.
          </p>
        </motion.div>

        {/* Table-style list */}
        <div className="flex flex-col gap-0">
          {departamentos.map((dep, i) => (
            <motion.div
              key={dep.numero}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '2.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.09)',
                display: 'grid',
                gridTemplateColumns: '72px 1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                ...(i === 0 ? { borderTop: '1px solid rgba(0,0,0,0.09)' } : {}),
              }}
            >
              <div style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '2.2rem',
                color: 'rgba(0,0,0,0.07)',
                lineHeight: 1,
              }}>
                {dep.numero}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: '1.5rem',
                textTransform: 'uppercase',
                color: '#000',
              }}>
                {dep.nombre}
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#666',
                lineHeight: 1.72,
                fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
              }}>
                {dep.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
