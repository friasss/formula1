'use client'

import { motion } from 'framer-motion'

const recursos = [
  {
    titulo: 'STEM Racing RD',
    descripcion: 'Página oficial de la competencia nacional de ingeniería estudiantil.',
    tipo: 'Competencia',
    href: 'https://www.stemracingrd.com',
    external: true,
  },
  {
    titulo: 'IPISA',
    descripcion: 'Instituto Politécnico Industrial de Santiago.',
    tipo: 'Institución',
    href: 'https://www.ipisa.edu.do',
    external: true,
  },
  {
    titulo: 'Instagram',
    descripcion: '@speedbolt.ipisa — Actualizaciones y avances del equipo.',
    tipo: 'Redes',
    href: 'https://www.instagram.com/speedbolt.ipisa',
    external: true,
  },
  {
    titulo: 'Guía de Marca',
    descripcion: 'Logo y colores de la identidad visual de Speed Bolt.',
    tipo: 'Documento',
    href: '#brand',
    external: false,
  },
]

export default function Recursos() {
  return (
    <section id="recursos" style={{ background: '#f5f5f5', padding: '10rem 0' }}>
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
            Links y documentos
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
          }}>
            <span style={{ color: 'var(--orange)' }}>Recursos</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {recursos.map((r, i) => (
            <motion.a
              key={r.titulo}
              href={r.href}
              target={r.external ? '_blank' : undefined}
              rel={r.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '2rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.09)',
                display: 'grid',
                gridTemplateColumns: '110px 1fr auto',
                gap: '3rem',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'opacity 0.3s',
                ...(i === 0 ? { borderTop: '1px solid rgba(0,0,0,0.09)' } : {}),
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div style={{
                fontSize: '0.52rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--orange)',
                fontFamily: 'var(--font-body), Oswald, sans-serif',
              }}>
                {r.tipo}
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  color: '#000',
                  marginBottom: '0.2rem',
                }}>
                  {r.titulo}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#888', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                  {r.descripcion}
                </p>
              </div>
              <div style={{ color: '#000', fontSize: '1rem', opacity: 0.35 }}>→</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
