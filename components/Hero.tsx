'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import F1Car from './F1Car'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
})

function Counter({ target, delay = 2600 }: { target: number; delay?: number }) {
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,var(--black) 0%,var(--teal-darker) 50%,var(--black) 100%)' }} />
      <div className="hero-grid absolute inset-0" />

      {/* Animated orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 700, height: 700, top: -250, right: -150, background: 'var(--orange)', filter: 'blur(130px)', opacity: 0.22 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.28, 0.22] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 600, height: 600, bottom: -200, left: -200, background: 'var(--teal)', filter: 'blur(120px)', opacity: 0.16 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.16, 0.22, 0.16] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content grid: 1 col mobile, 2 col desktop */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── TEXT SIDE ── */}
        <div>
          <motion.div
            {...fadeUp(0.3)}
            className="inline-flex items-center gap-2 mb-8"
            style={{ background: 'rgba(227,121,3,0.1)', border: '1px solid rgba(227,121,3,0.3)', padding: '0.4rem 1rem', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body),Oswald,sans-serif' }}
          >
            <span className="pulse-dot" style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
            STEM Racing 2026 — República Dominicana
          </motion.div>

          <motion.h1
            {...fadeUp(0.5)}
            className="mb-6"
            style={{ fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(3.5rem,9vw,8rem)', lineHeight: 0.85, letterSpacing: '0.02em', textTransform: 'uppercase' }}
          >
            <span style={{ WebkitTextStroke: '2px var(--white)', color: 'transparent', display: 'block' }}>SPEED</span>
            <span style={{ color: 'var(--orange)', display: 'block' }}>BOLT</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.7)}
            className="mb-10 max-w-lg"
            style={{ fontFamily: 'var(--font-subtitle),League Spartan,sans-serif', fontSize: '1rem', fontWeight: 400, color: 'var(--gray)', lineHeight: 1.7 }}
          >
            Diseño, innovación y velocidad. Somos un equipo de IPISA que construye, compite y
            redefine los límites de la ingeniería a escala en la competencia STEM Racing RD.
          </motion.p>

          <motion.div {...fadeUp(0.9)} className="flex flex-wrap gap-4">
            <a
              href="#about"
              onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--orange)', color: 'var(--black)', padding: '1rem 2.5rem', fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontSize: '0.85rem', fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Conocer más →
            </a>
            <a
              href="#posts"
              onClick={e => { e.preventDefault(); document.querySelector('#posts')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 transition-all duration-300"
              style={{ background: 'transparent', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2.5rem', fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontSize: '0.85rem', fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--orange)'; el.style.color = 'var(--orange)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = 'var(--white)' }}
            >
              Ver Updates
            </a>
          </motion.div>
        </div>

        {/* ── VISUAL SIDE ── */}
        <div className="relative hidden lg:block">
          {/* Speed lines */}
          <div className="absolute flex flex-col gap-3 z-10" style={{ left: -40, top: '50%', transform: 'translateY(-50%)' }}>
            {[0, 1, 2, 3].map(i => <div key={i} className="speed-line" />)}
          </div>

          <F1Car />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex gap-8 mt-6"
          >
            {[
              { val: <Counter target={2026} />, label: 'Temporada' },
              { val: 'IPISA', label: 'Instituto' },
              { val: 'RD', label: 'País' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div style={{ fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontSize: '1.8rem', fontWeight: 800, fontStyle: 'italic', color: 'var(--orange)' }}>{s.val}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray)', marginTop: '0.2rem', fontFamily: 'var(--font-body),Oswald,sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats visible on mobile only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-8 lg:hidden"
        >
          {[
            { val: '2026', label: 'Temporada' },
            { val: 'IPISA', label: 'Instituto' },
            { val: 'RD', label: 'País' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div style={{ fontFamily: 'var(--font-f1),Barlow Condensed,sans-serif', fontSize: '1.6rem', fontWeight: 800, fontStyle: 'italic', color: 'var(--orange)' }}>{s.val}</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray)', marginTop: '0.2rem', fontFamily: 'var(--font-body),Oswald,sans-serif' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-bounce absolute flex flex-col items-center gap-2 z-10" style={{ bottom: '2rem', left: '50%', color: 'var(--gray)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-body),Oswald,sans-serif' }}>
        <span>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,var(--orange),transparent)' }} />
      </div>
    </section>
  )
}
