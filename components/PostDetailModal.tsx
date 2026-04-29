'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Post } from '@/types'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

export default function PostDetailModal() {
  const [post, setPost] = useState<Post | null>(null)
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const handler = (e: Event) => {
      const p = (e as CustomEvent<Post>).detail
      setPost(p)
      setImgIdx(0)
    }
    window.addEventListener('open-post-detail', handler)
    return () => window.removeEventListener('open-post-detail', handler)
  }, [])

  const close = () => setPost(null)

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[6000] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(15px)' }}
          onClick={e => { if (e.target === e.currentTarget) close() }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--black-soft)',
              border: '1px solid rgba(255,255,255,0.08)',
              maxWidth: 900,
              width: '90%',
              maxHeight: '90vh',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <button
              onClick={close}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: 'var(--white)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10,
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>

            {/* Images */}
            <div
              style={{
                background: 'var(--black)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: 400,
              }}
            >
              {post.images && post.images.length > 0 ? (
                <>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIdx}
                      src={post.images[imgIdx]}
                      alt="Post"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </AnimatePresence>
                  {post.images.length > 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '0.4rem',
                      }}
                    >
                      {post.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={e => { e.stopPropagation(); setImgIdx(i) }}
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: i === imgIdx ? 'var(--orange)' : 'rgba(255,255,255,0.3)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background 0.3s',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <span
                  style={{
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontSize: '5rem',
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
            <div style={{ padding: '2rem', overflowY: 'auto' }}>
              <div
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--gray)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-body), Oswald, sans-serif',
                }}
              >
                {formatDate(post.date)}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'rgba(245,245,245,0.9)',
                  fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
                }}
              >
                {post.description}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
