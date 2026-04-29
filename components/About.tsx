'use client'

import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

const cards = [
  { icon: '⚡', title: 'Velocidad con propósito', text: 'Cada decisión de diseño busca optimizar la aerodinámica y reducir el peso. Nuestro carro a escala es el resultado de semanas de iteración, pruebas y pasión por la ingeniería.' },
  { icon: '⚙', title: 'Ingeniería STEM', text: 'La competencia STEM Racing combina ciencia, tecnología, ingeniería y matemáticas. Cada componente está respaldado por cálculos, simulaciones y pruebas reales.' },
]

export default function About() {
  return (
    <section id="about" className="about-section relative px-6 md:px-12 py-24" style={{ maxWidth: 1400, margin: '0 auto' }}>
      {/* Header */}
      <motion.div {...reveal()}>
        <div className="inline-flex items-center gap-2 mb-4" style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body),Oswald,sans-serif' }}>
          <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
          Sobre Nosotros
        </div>
        <h2 className="mb-4" style={{ fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1, textTransform: 'uppercase' }}>
          Construyendo una marca<br />que <span style={{ color: 'var(--orange)' }}>compite</span>
        </h2>
        <p className="max-w-xl" style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, fontFamily: 'var(--font-subtitle),League Spartan,sans-serif' }}>
          Speed Bolt nace en IPISA como un equipo dedicado a la competencia STEM Racing en República Dominicana. Como las grandes escuderías de Fórmula 1, diseñamos, construimos y competimos con un monoplaza a escala.
        </p>
      </motion.div>

      {/* Grid: 1 col mobile, 2 col lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
        <div className="flex flex-col gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} className="about-card" {...reveal(i * 0.15)} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(227,121,3,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>{c.icon}</div>
              <h3 className="mb-3" style={{ fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontSize: '1.3rem', fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase' }}>{c.title}</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'var(--font-subtitle),League Spartan,sans-serif' }}>{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal(0.2)} className="hidden lg:block">
          <div className="about-image-frame relative overflow-hidden flex items-center justify-center flex-col gap-4 p-8" style={{ width: '100%', aspectRatio: '4/5', background: 'linear-gradient(135deg,var(--teal-dark),var(--black))', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="relative z-10" style={{ fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontSize: '5rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.9, textAlign: 'center' }}>
              <span style={{ color: 'var(--white)', display: 'block' }}>SPEED</span>
              <span style={{ color: 'var(--orange)', display: 'block' }}>BOLT</span>
            </div>
            <div className="relative z-10" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--teal)', fontFamily: 'var(--font-body),Oswald,sans-serif' }}>
              IPISA • STEM RACING RD • 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
