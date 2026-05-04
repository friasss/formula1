'use client'

import { motion } from 'framer-motion'

const roles = [
  { rol: 'Director General', nombre: '—', departamento: 'Gestión' },
  { rol: 'Jefe de Diseño', nombre: '—', departamento: 'Diseño' },
  { rol: 'Ingeniero Aerodinámico', nombre: '—', departamento: 'Aerodinámica' },
  { rol: 'Responsable de Fabricación', nombre: '—', departamento: 'Fabricación' },
  { rol: 'Director de Marketing', nombre: '—', departamento: 'Marketing' },
  { rol: 'Piloto / Pruebas', nombre: '—', departamento: 'Ingeniería' },
]

export default function TeamRoles() {
  return (
    <section id="equipo" style={{ background: '#000', padding: '10rem 0' }}>
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
            Las personas detrás del carro
          </div>
          <h2 style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            lineHeight: 0.88,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}>
            Roles del <span style={{ color: 'var(--orange)' }}>Equipo</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {roles.map((m, i) => (
            <motion.div
              key={m.rol}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '1.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr auto',
                gap: '2rem',
                alignItems: 'center',
                ...(i === 0 ? { borderTop: '1px solid rgba(255,255,255,0.05)' } : {}),
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.9)',
              }}>
                {m.rol}
              </h3>
              <div style={{
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.28)',
                fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
              }}>
                {m.nombre}
              </div>
              <div style={{
                fontSize: '0.52rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--orange)',
                fontFamily: 'var(--font-body), Oswald, sans-serif',
                textAlign: 'right',
                opacity: 0.8,
              }}>
                {m.departamento}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
