'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import F1Car from './F1Car'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
})

function Counter({ target, delay = 2800 }: { target: number; delay?: number }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      const step = target / 60
      let cur = 0
      const id = setInterval(() => {
        cur += step
        if (cur >= target) { setVal(target); clearInterval(id) }
        else setVal(Math.floor(cur))
      }, 16)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [target, delay])
  return <>{val}</>
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#000' }}
    >
      <div className="hero-grid absolute inset-0" />

      {/* Orange top bar */}
      <motion.div
        className="absolute"
        style={{ top: 0, left: 0, right: 0, height: 2, background: 'var(--orange)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-3 mb-10"
          >
            <div style={{ width: 36, height: 1, background: 'var(--orange)' }} />
            <span style={{
              fontSize: '0.6rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'var(--font-body), Oswald, sans-serif',
            }}>
              STEM Racing 2026 — República Dominicana
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.6)}
            className="mb-8"
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(4.5rem, 12vw, 11rem)',
              lineHeight: 0.83,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)', color: 'transparent', display: 'block' }}>
              SPEED
            </span>
            <span style={{ color: 'var(--orange)', display: 'block' }}>BOLT</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.8)}
            className="mb-12"
            style={{
              fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.85,
              maxWidth: 400,
            }}
          >
            Diseño, innovación y velocidad. Equipo de IPISA construyendo un monoplaza a escala con ingeniería real para la competencia STEM Racing RD.
          </motion.p>

          <motion.div {...fadeUp(1)} className="flex flex-wrap gap-4">
            <a
              href="#about"
              onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: 'var(--orange)',
                color: '#000',
                padding: '0.9rem 2.5rem',
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 800,
                fontStyle: 'italic',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Conocer más
            </a>
            <a
              href="#competition"
              onClick={e => { e.preventDefault(); document.querySelector('#competition')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.9rem 2.5rem',
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.3s, color 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(227,121,3,0.5)'
                e.currentTarget.style.color = 'var(--orange)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              }}
            >
              La competencia
            </a>
          </motion.div>
        </div>

        {/* VISUAL */}
        <div className="relative hidden lg:flex flex-col gap-6">
          <div className="absolute flex flex-col gap-4" style={{ left: -52, top: '50%', transform: 'translateY(-50%)' }}>
            {[0, 1, 2, 3].map(i => <div key={i} className="speed-line" />)}
          </div>

          <F1Car />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex gap-10 pl-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}
          >
            {[
              { val: <Counter target={2026} />, label: 'Temporada' },
              { val: 'IPISA', label: 'Instituto' },
              { val: 'RD', label: 'País' },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.9)',
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: '0.52rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                  marginTop: '0.2rem',
                  fontFamily: 'var(--font-body), Oswald, sans-serif',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-8 lg:hidden"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}
        >
          {[
            { val: '2026', label: 'Temporada' },
            { val: 'IPISA', label: 'Instituto' },
            { val: 'RD', label: 'País' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif', fontSize: '1.4rem', fontWeight: 800, fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>{s.val}</div>
              <div style={{ fontSize: '0.52rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: '0.2rem', fontFamily: 'var(--font-body), Oswald, sans-serif' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        className="scroll-bounce absolute flex flex-col items-center gap-2 z-10"
        style={{ bottom: '2rem', left: '50%', color: 'rgba(255,255,255,0.25)', fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
      >
        <span>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }} />
      </div>
    </section>
  )
}
