'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Post } from '@/types'

const SAMPLE_POSTS: Post[] = [
  {
    id: '1',
    images: [],
    description: 'Primer boceto del monoplaza Speed Bolt terminado. El diseño del chasis optimiza la aerodinámica para minimizar la resistencia del aire. ¡Listos para la fase de prototipado!',
    date: '2026-04-20',
    placeholder: true,
  },
  {
    id: '2',
    images: [],
    description: 'Sesión de pruebas de materiales para el alerón delantero. Evaluamos diferentes compuestos buscando el balance perfecto entre rigidez y peso.',
    date: '2026-04-15',
    placeholder: true,
  },
  {
    id: '3',
    images: [],
    description: 'El equipo Speed Bolt reunido en el taller de IPISA. Planificación estratégica para la temporada STEM Racing 2026.',
    date: '2026-04-10',
    placeholder: true,
  },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const loadPosts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/posts')
      const data = await res.json()
      if (data.posts && data.posts.length > 0) {
        setPosts(data.posts)
      } else {
        const stored = localStorage.getItem('sb_posts')
        const local: Post[] = stored ? JSON.parse(stored) : []
        setPosts(local.length > 0 ? local : SAMPLE_POSTS)
      }
    } catch {
      const stored = localStorage.getItem('sb_posts')
      const local: Post[] = stored ? JSON.parse(stored) : []
      setPosts(local.length > 0 ? local : SAMPLE_POSTS)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadPosts()
    const onNew = (e: Event) => {
      const post = (e as CustomEvent<Post>).detail
      setPosts(prev => {
        const next = [post, ...prev.filter(p => !p.placeholder)]
        localStorage.setItem('sb_posts', JSON.stringify(next))
        return next
      })
    }
    window.addEventListener('new-post', onNew)
    return () => window.removeEventListener('new-post', onNew)
  }, [])

  const openDetail = (post: Post) => {
    window.dispatchEvent(new CustomEvent('open-post-detail', { detail: post }))
  }

  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section id="posts" style={{ background: '#000', padding: '10rem 0' }}>
      <div className="px-6 md:px-16" style={{ maxWidth: 1400, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div
            className="flex items-center gap-3 mb-8"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
          >
            <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
            Actualizaciones
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
            Últimos <span style={{ color: 'var(--orange)' }}>Posts</span>
          </h2>
        </motion.div>

        {loading ? (
          <div style={{ padding: '4rem 0', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif', fontStyle: 'italic', fontSize: '1.2rem' }}>
            Cargando...
          </div>
        ) : posts.length === 0 ? (
          <div style={{ padding: '4rem 0', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif', fontSize: '0.9rem' }}>
            Próximamente compartiremos nuestro progreso.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.04)' }}>
            {sorted.map((post, i) => (
              <motion.div
                key={post.id}
                className="post-card cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openDetail(post)}
                style={{ background: '#000', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}
              >
                {/* Image */}
                <div style={{
                  aspectRatio: '4/3',
                  background: '#0a0a0a',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {post.images && post.images.length > 0 ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.images[0]} alt="Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {post.images.length > 1 && (
                        <div style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          background: 'rgba(0,0,0,0.8)',
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.55rem',
                          letterSpacing: '0.15em',
                          color: 'rgba(255,255,255,0.6)',
                          fontFamily: 'var(--font-body), Oswald, sans-serif',
                          textTransform: 'uppercase',
                        }}>
                          {post.images.length} fotos
                        </div>
                      )}
                    </>
                  ) : (
                    <span style={{
                      fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                      fontSize: '5rem',
                      fontWeight: 900,
                      fontStyle: 'italic',
                      color: 'rgba(227,121,3,0.1)',
                      userSelect: 'none',
                    }}>
                      SB
                    </span>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                  <div style={{
                    fontSize: '0.55rem',
                    color: 'rgba(255,255,255,0.28)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--font-body), Oswald, sans-serif',
                  }}>
                    {formatDate(post.date)}
                  </div>
                  <p style={{
                    fontSize: '0.83rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                  }}>
                    {post.description.length > 110
                      ? post.description.substring(0, 110) + '…'
                      : post.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
