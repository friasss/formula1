'use client'

const navCols = [
  {
    title: 'Navegación',
    links: [
      { label: 'Nosotros', href: '#about' },
      { label: 'Inspiración', href: '#inspiration' },
      { label: 'Marca', href: '#brand' },
      { label: 'Competencia', href: '#competition' },
    ],
  },
  {
    title: 'Proyecto',
    links: [
      { label: 'Posts', href: '#posts' },
      { label: 'STEM Racing RD', href: '#' },
      { label: 'IPISA', href: '#' },
    ],
  },
  {
    title: 'Redes',
    links: [
      { label: 'Instagram', href: 'https://instagram.com/speedbolt.ipisa' },
      { label: 'TikTok', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 3rem 2rem' }}>
      <div
        className="grid gap-12"
        style={{ maxWidth: 1400, margin: '0 auto', gridTemplateColumns: '2fr 1fr 1fr 1fr' }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: '1.5rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: 'var(--white)' }}>SPEED</span>
            <span style={{ color: 'var(--orange)' }}>BOLT</span>
          </div>
          <p
            style={{
              color: 'var(--gray)',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              maxWidth: 300,
              fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
            }}
          >
            Equipo de STEM Racing del Instituto Politécnico Industrial de Santiago.
            Diseño, innovación y velocidad.
          </p>
        </div>

        {/* Nav cols */}
        {navCols.map(col => (
          <div key={col.title}>
            <div
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--orange)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontStyle: 'italic',
              }}
            >
              {col.title}
            </div>
            {col.links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                style={{
                  display: 'block',
                  color: 'var(--gray)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  marginBottom: '0.6rem',
                  transition: 'color 0.3s',
                  fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--white)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--gray)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="flex justify-between items-center"
        style={{
          maxWidth: 1400,
          margin: '3rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          fontSize: '0.7rem',
          color: 'var(--gray)',
          fontFamily: 'var(--font-body), Oswald, sans-serif',
        }}
      >
        <span>© 2026 Speed Bolt — IPISA, Santiago, RD</span>
        <span
          style={{
            fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
            fontStyle: 'italic',
            fontWeight: 700,
            color: 'var(--orange)',
          }}
        >
          STEM RACING
        </span>
      </div>
    </footer>
  )
}
