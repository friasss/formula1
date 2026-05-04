'use client'

const navLinks = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Marca', href: '#brand' },
  { label: 'Competencia', href: '#competition' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Patrocinio', href: '#patrocinio' },
  { label: 'Posts', href: '#posts' },
]

const externalLinks = [
  { label: 'Instagram', href: 'https://instagram.com/speedbolt.ipisa' },
  { label: 'STEM Racing RD', href: 'https://www.stemracingrd.com' },
  { label: 'IPISA', href: 'https://www.ipisa.edu.do' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 6rem 3rem' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: '1.8rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>SPEED</span>
              <span style={{ color: 'var(--orange)' }}>BOLT</span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.28)',
              fontSize: '0.78rem',
              lineHeight: 1.75,
              maxWidth: 280,
              fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
            }}>
              Equipo de STEM Racing del Instituto Politécnico Industrial de Santiago — Diseño, innovación y velocidad.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '1.5rem', fontFamily: 'var(--font-body), Oswald, sans-serif' }}>
              Navegación
            </div>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    color: 'rgba(255,255,255,0.38)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '1.5rem', fontFamily: 'var(--font-body), Oswald, sans-serif' }}>
              Externo
            </div>
            <div className="flex flex-col gap-2.5">
              {externalLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.38)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-body), Oswald, sans-serif', letterSpacing: '0.08em' }}>
            © 2026 Speed Bolt — IPISA, Santiago, República Dominicana
          </span>
          <span style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            color: 'rgba(227,121,3,0.4)',
            textTransform: 'uppercase',
          }}>
            STEM Racing RD
          </span>
        </div>
      </div>
    </footer>
  )
}
