'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    nivel: 'Oro',
    accent: '#e37903',
    beneficios: [
      'Logo en el monoplaza — posición principal',
      'Logo en camiseta del equipo',
      'Mención en todas las presentaciones',
      'Presencia en redes sociales',
      'Reconocimiento en competencia nacional',
    ],
  },
  {
    nivel: 'Plata',
    accent: '#aaaaaa',
    beneficios: [
      'Logo en el monoplaza — posición secundaria',
      'Mención en redes sociales',
      'Reconocimiento en presentaciones',
      'Presencia en material impreso',
    ],
  },
  {
    nivel: 'Bronce',
    accent: '#c87941',
    beneficios: [
      'Logo en material digital del equipo',
      'Mención en redes sociales',
      'Agradecimiento en presentaciones',
    ],
  },
]

export default function Patrocinio() {
  return (
    <section id="patrocinio" style={{ background: '#000', padding: '10rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.05)' }} />

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
            Apoya a Speed Bolt
          </div>
          <h2 style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            lineHeight: 0.88,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'var(--orange)' }}>Patrocinio</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.88rem', lineHeight: 1.75, maxWidth: 540, fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
            Al patrocinar a Speed Bolt, tu marca acompaña a un equipo estudiantil que compite a nivel nacional representando innovación, ingeniería y trabajo en equipo.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.nivel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '3rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '4rem',
                alignItems: 'start',
                ...(i === 0 ? { borderTop: '1px solid rgba(255,255,255,0.05)' } : {}),
              }}
            >
              <div style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '2.2rem',
                textTransform: 'uppercase',
                color: tier.accent,
                lineHeight: 1,
              }}>
                {tier.nivel}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {tier.beneficios.map(b => (
                  <li key={b} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    <div style={{ width: 20, height: 1, background: tier.accent, opacity: 0.35, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 flex items-center gap-6"
        >
          <a
            href="https://www.instagram.com/speedbolt.ipisa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--orange)',
              color: '#000',
              padding: '0.9rem 2.5rem',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body), Oswald, sans-serif',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Contactar al equipo
          </a>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-body), Oswald, sans-serif', letterSpacing: '0.08em' }}>
            @speedbolt.ipisa
          </span>
        </motion.div>
      </div>
    </section>
  )
}
