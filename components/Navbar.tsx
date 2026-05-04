'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'Nosotros' },
  { href: '#brand', label: 'Marca' },
  { href: '#competition', label: 'Competencia' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#patrocinio', label: 'Patrocinio' },
  { href: '#posts', label: 'Posts' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openAdmin = () => window.dispatchEvent(new CustomEvent('open-admin-modal'))

  const smoothScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between"
      style={{
        padding: scrolled ? '0.75rem 3rem' : '1.25rem 3rem',
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(24px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <a
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ textDecoration: 'none' }}
      >
        <span style={{
          fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: '1.1rem',
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>SPEED</span>
          <span style={{ color: 'var(--orange)' }}>BOLT</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <button
            key={l.href}
            onClick={() => smoothScroll(l.href)}
            className="nav-link bg-transparent border-none cursor-pointer"
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body), Oswald, sans-serif',
              padding: '0.2rem 0',
            }}
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={openAdmin}
          style={{
            background: 'transparent',
            border: '1px solid rgba(227,121,3,0.25)',
            color: 'rgba(227,121,3,0.6)',
            padding: '0.35rem 0.9rem',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body), Oswald, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.background = 'var(--orange)'
            el.style.color = '#000'
            el.style.borderColor = 'var(--orange)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.color = 'rgba(227,121,3,0.6)'
            el.style.borderColor = 'rgba(227,121,3,0.25)'
          }}
        >
          Admin
        </button>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Menu"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{ display: 'block', width: 22, height: 1, background: 'rgba(255,255,255,0.8)' }} />
        ))}
      </button>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav-open"
        >
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => smoothScroll(l.href)}
              className="bg-transparent border-none cursor-pointer text-left"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body), Oswald, sans-serif',
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={openAdmin}
            style={{
              background: 'transparent',
              border: '1px solid rgba(227,121,3,0.3)',
              color: 'var(--orange)',
              padding: '0.5rem 1.2rem',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              cursor: 'pointer',
              fontFamily: 'var(--font-body), Oswald, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Admin
          </button>
        </motion.div>
      )}
    </nav>
  )
}
