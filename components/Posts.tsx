'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Post } from '@/types'

const SAMPLE_POSTS: Post[] = [
  {
    id: '1',
    images: [],
    description: 'Primer boceto del monoplaza Speed Bolt terminado. El diseño del chasis incorpora las líneas aerodinámicas inspiradas en el Martín Pescador. ¡Estamos listos para la fase de prototipado!',
    date: '2026-04-20',
    placeholder: true,
  },
  {
    id: '2',
    images: [],
    description: 'Sesión de pruebas de materiales para el alerón delantero. Evaluamos diferentes compuestos buscando el balance perfecto entre rigidez y peso. Los resultados son prometedores.',
    date: '2026-04-15',
    placeholder: true,
  },
  {
    id: '3',
    images: [],
    description: 'El equipo Speed Bolt reunido en el taller de IPISA. Planificación estratégica para la temporada STEM Racing 2026. ¡Cada miembro aporta algo único!',
    date: '2026-04-10',
    placeholder: true,
  },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
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
        // fallback to localStorage or samples
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

  return (
    <section
      id="posts"
      className="posts-section relative"
      style={{ background: 'var(--black-soft)', padding: '8rem 0' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-body), Oswald, sans-serif' }}
            >
              <div style={{ width: 30, height: 1, background: 'var(--orange)' }} />
              Actualizaciones
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
              Últimos <span style={{ color: 'var(--orange)' }}>posts</span>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7, marginTop: '0.5rem', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
              Seguí nuestro progreso, avances de diseño y noticias del equipo.
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--gray)' }}>
            <div style={{ fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif', fontStyle: 'italic', fontSize: '1.5rem', opacity: 0.3 }}>
              Cargando...
            </div>
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--gray)', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.3 }}>📷</div>
            <p>Aún no hay publicaciones. ¡Próximamente compartiremos nuestro progreso!</p>
          </div>
        ) : (
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
          >
            {[...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, i) => (
              <motion.div
                key={post.id}
                className="post-card cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openDetail(post)}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    aspectRatio: '1',
                    background: 'linear-gradient(135deg, var(--teal-dark), var(--black))',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {post.images && post.images.length > 0 ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.images[0]} alt="Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {post.images.length > 1 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '0.8rem',
                            right: '0.8rem',
                            background: 'rgba(10,10,10,0.8)',
                            padding: '0.3rem 0.6rem',
                            fontSize: '0.65rem',
                            backdropFilter: 'blur(6px)',
                            fontFamily: 'var(--font-body), Oswald, sans-serif',
                          }}
                        >
                          {post.images.length} fotos
                        </div>
                      )}
                    </>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                        fontSize: '4rem',
                        fontWeight: 900,
                        fontStyle: 'italic',
                        color: 'rgba(227,121,3,0.15)',
                      }}
                    >
                      SB
                    </span>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      color: 'var(--gray)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-body), Oswald, sans-serif',
                    }}
                  >
                    {formatDate(post.date)}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      color: 'rgba(245,245,245,0.85)',
                      fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                    }}
                  >
                    {post.description.length > 120
                      ? post.description.substring(0, 120) + '...'
                      : post.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
