'use client'

import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stats = [
  { value: '~90 km/h', label: 'Velocidad de picada' },
  { value: 'Mínima', label: 'Resistencia al aire' },
  { value: 'Bio-Aero', label: 'Diseño inspirado' },
  { value: '2 colores', label: 'Paleta de la ave' },
]

export default function Inspiration() {
  return (
    <section
      id="inspiration"
      className="inspiration-section relative"
      style={{
        background: 'linear-gradient(180deg, var(--black) 0%, var(--teal-darker) 50%, var(--black) 100%)',
        padding: '8rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="px-6 md:px-12" style={{ maxWidth: 1400, margin: '0 auto' }}>
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
            Inspiración Bio-aerodinámica
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            El Martín <span style={{ color: 'var(--orange)' }}>Pescador</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-12">
          {/* Bird visual */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="bird-frame relative overflow-hidden"
              style={{ width: '100%', aspectRatio: '1' }}
            >
              {/* Kingfisher SVG illustration */}
              <div
                style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 300 350" xmlns="http://www.w3.org/2000/svg" style={{ width: '70%', height: 'auto' }}>
                  <ellipse cx="130" cy="200" rx="55" ry="80" fill="#e37903" transform="rotate(-10 130 200)" />
                  <ellipse cx="125" cy="190" rx="48" ry="70" fill="#2a7071" transform="rotate(-10 125 190)" />
                  <circle cx="140" cy="120" r="35" fill="#2a7071" />
                  <circle cx="135" cy="115" r="30" fill="#1e5253" />
                  <circle cx="155" cy="112" r="6" fill="#fff" />
                  <circle cx="156" cy="111" r="3" fill="#0a0a0a" />
                  <circle cx="157" cy="110" r="1" fill="#fff" />
                  <path d="M170,118 L270,110 L270,115 L170,122 Z" fill="#1a1a1a" />
                  <path d="M170,120 L268,112.5" stroke="#e37903" strokeWidth="0.5" opacity="0.5" />
                  <ellipse cx="140" cy="220" rx="35" ry="55" fill="#e37903" transform="rotate(-5 140 220)" />
                  <ellipse cx="145" cy="155" rx="12" ry="18" fill="#f5f5f5" transform="rotate(-5 145 155)" />
                  <path d="M90,170 Q60,230 80,290 Q100,270 110,240 Q120,210 100,180 Z" fill="#2a7071" opacity="0.8" />
                  <circle cx="95" cy="200" r="2" fill="#5ab9b9" opacity="0.7" />
                  <circle cx="90" cy="215" r="2" fill="#5ab9b9" opacity="0.7" />
                  <circle cx="88" cy="230" r="1.5" fill="#5ab9b9" opacity="0.7" />
                  <circle cx="92" cy="245" r="1.5" fill="#5ab9b9" opacity="0.7" />
                  <line x1="130" y1="280" x2="125" y2="320" stroke="#cc3300" strokeWidth="2.5" />
                  <line x1="120" y1="320" x2="130" y2="320" stroke="#cc3300" strokeWidth="2" />
                  <line x1="140" y1="278" x2="145" y2="315" stroke="#cc3300" strokeWidth="2.5" />
                  <line x1="140" y1="315" x2="150" y2="315" stroke="#cc3300" strokeWidth="2" />
                  <path d="M260,105 Q280,100 300,102" stroke="#e37903" strokeWidth="0.8" fill="none" opacity="0.4" />
                  <path d="M265,120 Q285,122 305,118" stroke="#e37903" strokeWidth="0.8" fill="none" opacity="0.4" />
                </svg>
              </div>

              {/* Label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'rgba(10,10,10,0.9)',
                  padding: '0.8rem 1.5rem',
                  backdropFilter: 'blur(10px)',
                  borderLeft: '3px solid var(--orange)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif', fontSize: '1.1rem', fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase' }}>
                  Martín Pescador
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--gray)', fontStyle: 'italic', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                  Alcedo atthis
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 900,
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              La naturaleza como <span style={{ color: 'var(--orange)' }}>ingeniería</span>
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
              El Martín Pescador fue nuestra fuente de inspiración principal para el diseño del
              carro. Esta pequeña ave posee una de las formas más aerodinámicas de la naturaleza:
              su pico le permite cortar el aire y el agua con mínima resistencia.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
              Los colores de la marca — el naranja vibrante de su pecho y el teal profundo de sus
              plumas — nacen directamente de esta ave extraordinaria. Su perfil aerodinámico es
              exactamente lo que buscamos replicar en nuestro monoplaza a escala.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(s => (
                <div
                  key={s.label}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '1.5rem',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(227,121,3,0.3)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)')}
                >
                  <div style={{ fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: 800, fontStyle: 'italic', color: 'var(--orange)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem', fontFamily: 'var(--font-body), Oswald, sans-serif' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
