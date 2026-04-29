'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxDivider() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <div
      ref={ref}
      style={{ height: 300, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: '-50px',
          background: 'linear-gradient(135deg, var(--teal-dark) 0%, var(--black) 50%, var(--orange) 150%)',
          y,
        }}
      />
      <span
        style={{
          position: 'relative',
          fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          letterSpacing: '0.2em',
          WebkitTextStroke: '1px rgba(255,255,255,0.1)',
          color: 'transparent',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        SPEEDBOLT
      </span>
    </div>
  )
}
