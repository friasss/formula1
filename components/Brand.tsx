'use client'

import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const swatches = [
  { bg: '#e37903', label: '#e37903', text: '#0a0a0a' },
  { bg: '#2a7071', label: '#2a7071', text: '#f5f5f5' },
  { bg: '#162f30', label: '#162f30', text: '#f5f5f5' },
  { bg: '#e8ddd0', label: '#e8ddd0', text: '#7a4a1e' },
  { bg: '#0a0a0a', label: '#0a0a0a', text: '#f5f5f5', border: true },
]

const logoVariants = [
  { bg: '#0a0a0a', speedColor: '#f5f5f5', boltColor: '#e37903', label: 'Fondo oscuro' },
  { bg: '#1e5253', speedColor: '#f5f5f5', boltColor: '#e37903', label: 'Fondo teal' },
  { bg: '#f0f0f0', speedColor: '#2a7071', boltColor: '#e37903', label: 'Fondo claro', darkLabel: true },
]

const typos = [
  {
    label: 'Títulos — F1 Style',
    sample: 'SPEED BOLT',
    name: 'Barlow Condensed — Logo, titulares y posts',
    style: {
      fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
      fontStyle: 'italic',
      fontWeight: 900,
      textTransform: 'uppercase' as const,
    },
  },
  {
    label: 'Subtítulos',
    sample: 'League Spartan',
    name: 'Subtítulos y texto de apoyo',
    style: { fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' },
  },
  {
    label: 'Cuerpo / UI',
    sample: 'Codec Pro',
    name: 'Texto secundario y etiquetas',
    style: { fontFamily: 'var(--font-body), Oswald, sans-serif', fontWeight: 400 },
  },
]

export default function Brand() {
  return (
    <section
      id="brand"
      style={{ background: 'var(--black-soft)', padding: '8rem 0', position: 'relative' }}
    >
      <div className="px-6 md:px-12" style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
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
            Identidad Visual
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1,
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Nuestra <span style={{ color: 'var(--orange)' }}>marca</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 600, fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
            Las letras gruesas e inclinadas, el monoplaza tipo F1 y las líneas de movimiento crean
            una identidad dinámica que transmite velocidad y avance constante.
          </p>
        </motion.div>

        {/* Logo showcase */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logoVariants.map(v => (
            <div
              key={v.label}
              className="logo-card"
              style={{
                aspectRatio: '16/10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
                background: v.bg,
              }}
            >
              {/* Speed lines decoration */}
              <div style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 6, opacity: 0.3 }}>
                {[20, 35, 15].map((w, i) => (
                  <span key={i} style={{ display: 'block', height: 2, background: '#e37903', width: w }} />
                ))}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: '3rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                }}
              >
                <span style={{ color: v.speedColor }}>SPEED </span>
                <span style={{ color: v.boltColor }}>BOLT</span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.8rem',
                  left: '0.8rem',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: v.darkLabel ? '#666' : 'var(--gray)',
                  fontFamily: 'var(--font-body), Oswald, sans-serif',
                }}
              >
                {v.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Color palette */}
        <motion.h3
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '1.2rem',
            marginTop: '4rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
          }}
        >
          Paleta de colores
        </motion.h3>

        <motion.div
          className="flex"
          style={{ height: 120, overflow: 'hidden' }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {swatches.map(s => (
            <div
              key={s.label}
              className="color-swatch"
              style={{
                background: s.bg,
                border: s.border ? '1px solid rgba(255,255,255,0.1)' : undefined,
              }}
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: s.text,
                  fontFamily: 'var(--font-body), Oswald, sans-serif',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Typography */}
        <motion.h3
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '1.2rem',
            marginTop: '4rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
          }}
        >
          Tipografías
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {typos.map(t => (
            <div
              key={t.label}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '2rem',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(227,121,3,0.2)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '1rem', fontFamily: 'var(--font-body), Oswald, sans-serif' }}>
                {t.label}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.5rem', ...t.style }}>
                {t.sample}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--gray)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}>
                {t.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
