'use client'

import { motion } from 'framer-motion'

const logoVariants = [
  { bg: '#000000', speedColor: '#f5f5f5', boltColor: '#e37903' },
  { bg: '#1e5253', speedColor: '#f5f5f5', boltColor: '#e37903' },
  { bg: '#f0f0f0', speedColor: '#2a7071', boltColor: '#e37903' },
]

const colorBlocks = [
  { color: '#e37903', flex: 2 },
  { color: '#2a7071', flex: 2 },
  { color: '#162f30', flex: 1 },
  { color: '#f0f0f0', flex: 1 },
  { color: '#000000', flex: 0.8, border: true },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Brand() {
  return (
    <section id="brand" style={{ background: 'var(--black-soft)', padding: '10rem 0' }}>
      <div className="px-6 md:px-16" style={{ maxWidth: 1400, margin: '0 auto' }}>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div
            className="flex items-center gap-3 mb-8"
            style={{ fontSize: '0.58rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
          >
            <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
            Identidad Visual
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
            Nuestra <span style={{ color: 'var(--orange)' }}>Marca</span>
          </h2>
        </motion.div>

        {/* Logo grid — no gap, flush edges */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.03)' }}
        >
          {logoVariants.map((v, i) => (
            <div
              key={i}
              className="logo-card"
              style={{
                aspectRatio: '16/9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: v.bg,
                cursor: 'default',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                userSelect: 'none',
              }}>
                <span style={{ color: v.speedColor }}>SPEED </span>
                <span style={{ color: v.boltColor }}>BOLT</span>
              </div>
              {/* Subtle bottom rule */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'var(--orange)', opacity: 0.1 }} />
            </div>
          ))}
        </motion.div>

        {/* Color strip — no labels */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', height: 72, marginTop: 1 }}
        >
          {colorBlocks.map((c, i) => (
            <div
              key={i}
              style={{
                flex: c.flex,
                background: c.color,
                border: c.border ? '1px solid rgba(255,255,255,0.08)' : undefined,
              }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
