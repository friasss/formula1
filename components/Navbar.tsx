'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'Nosotros' },
  { href: '#inspiration', label: 'Inspiración' },
  { href: '#brand', label: 'Marca' },
  { href: '#competition', label: 'Competencia' },
  { href: '#posts', label: 'Posts' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const adminBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openAdmin = () => {
    window.dispatchEvent(new CustomEvent('open-admin-modal'))
  }

  const smoothScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300"
      style={{
        padding: scrolled ? '0.6rem 3rem' : '1rem 3rem',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Brand */}
      <a
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        className="flex items-center gap-2 no-underline"
        style={{ textDecoration: 'none' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: '1.2rem',
            letterSpacing: '0.02em',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: 'var(--white)' }}>SPEED</span>
          <span style={{ color: 'var(--orange)' }}>BOLT</span>
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-10 items-center">
        {links.map(l => (
          <button
            key={l.href}
            onClick={() => smoothScroll(l.href)}
            className="nav-link bg-transparent border-none cursor-pointer"
            style={{
              color: 'var(--gray)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              fontFamily: 'var(--font-body), Oswald, sans-serif',
            }}
          >
            {l.label}
          </button>
        ))}
        <button
          ref={adminBtnRef}
          onClick={openAdmin}
          className="cursor-pointer transition-all duration-300 hover:bg-orange"
          style={{
            background: 'transparent',
            border: '1px solid rgba(227,121,3,0.4)',
            color: 'var(--orange)',
            padding: '0.5rem 1.2rem',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body), Oswald, sans-serif',
          }}
          onMouseEnter={e => {
            ;(e.target as HTMLButtonElement).style.background = 'var(--orange)'
            ;(e.target as HTMLButtonElement).style.color = 'var(--black)'
          }}
          onMouseLeave={e => {
            ;(e.target as HTMLButtonElement).style.background = 'transparent'
            ;(e.target as HTMLButtonElement).style.color = 'var(--orange)'
          }}
        >
          Admin
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer"
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Menu"
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="block transition-all duration-300"
            style={{ width: 24, height: 2, background: 'var(--white)' }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav-open"
        >
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => smoothScroll(l.href)}
              className="bg-transparent border-none cursor-pointer text-left"
              style={{
                color: 'var(--gray)',
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
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
              border: '1px solid rgba(227,121,3,0.4)',
              color: 'var(--orange)',
              padding: '0.5rem 1.2rem',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
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
