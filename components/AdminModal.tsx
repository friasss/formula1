'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Post } from '@/types'

export default function AdminModal() {
  const [open, setOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-admin-modal', handler)
    return () => window.removeEventListener('open-admin-modal', handler)
  }, [])

  const close = () => setOpen(false)

  const login = () => {
    if (user === 'admin' && (pass === 'speedbolt2026' || pass === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'speedbolt2026'))) {
      setIsAdmin(true)
    } else {
      alert('Credenciales incorrectas')
    }
  }

  const logout = () => {
    setIsAdmin(false)
    close()
  }

  const handleFiles = (files: FileList | null) => {
    if (!files) return
    const prev: string[] = []
    const imgs: string[] = []
    let loaded = 0
    Array.from(files).forEach(f => {
      const reader = new FileReader()
      reader.onload = e => {
        const src = e.target?.result as string
        prev.push(src)
        imgs.push(src)
        loaded++
        if (loaded === files.length) {
          setPreviews(prev)
          setImages(imgs)
        }
      }
      reader.readAsDataURL(f)
    })
  }

  const publish = async () => {
    if (!description.trim()) { alert('Agrega una descripción'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, images, date: new Date().toISOString().split('T')[0], password: pass }),
      })
      const data = await res.json()
      if (res.ok && data.post) {
        window.dispatchEvent(new CustomEvent<Post>('new-post', { detail: data.post }))
      } else {
        // fallback to local
        const newPost: Post = {
          id: String(Date.now()),
          description,
          images,
          date: new Date().toISOString().split('T')[0],
        }
        window.dispatchEvent(new CustomEvent<Post>('new-post', { detail: newPost }))
      }
    } catch {
      const newPost: Post = {
        id: String(Date.now()),
        description,
        images,
        date: new Date().toISOString().split('T')[0],
      }
      window.dispatchEvent(new CustomEvent<Post>('new-post', { detail: newPost }))
    }
    setDescription('')
    setImages([])
    setPreviews([])
    if (fileRef.current) fileRef.current.value = ''
    setLoading(false)
    close()
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--white)',
    padding: '0.8rem 1rem',
    fontFamily: 'var(--font-subtitle), League Spartan, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--gray)',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-body), Oswald, sans-serif',
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[5000] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
          onClick={e => { if (e.target === e.currentTarget) close() }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--black-soft)',
              border: '1px solid rgba(255,255,255,0.1)',
              width: '90%',
              maxWidth: 550,
              padding: '3rem',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <button
              onClick={close}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--gray)', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ×
            </button>

            {!isAdmin ? (
              // Login form
              <>
                <h2
                  style={{
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Admin Access
                </h2>
                <p style={{ color: 'var(--gray)', fontSize: '0.8rem', marginBottom: '2rem', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                  Ingresa las credenciales de administrador para gestionar posts.
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Usuario</label>
                  <input
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="admin"
                    autoComplete="off"
                    style={inputStyle}
                    onFocus={e => ((e.target as HTMLInputElement).style.borderColor = 'var(--orange)')}
                    onBlur={e => ((e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)')}
                    onKeyDown={e => e.key === 'Enter' && login()}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Contraseña</label>
                  <input
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    placeholder="••••••••"
                    style={inputStyle}
                    onFocus={e => ((e.target as HTMLInputElement).style.borderColor = 'var(--orange)')}
                    onBlur={e => ((e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)')}
                    onKeyDown={e => e.key === 'Enter' && login()}
                  />
                </div>
                <button
                  onClick={login}
                  style={{
                    background: 'var(--orange)',
                    color: 'var(--black)',
                    border: 'none',
                    padding: '0.8rem 2rem',
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.background = 'var(--orange-light)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.background = 'var(--orange)')}
                >
                  Acceder
                </button>
                <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--gray)', textAlign: 'center', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                  Demo: admin / speedbolt2026
                </p>
              </>
            ) : (
              // Post form
              <>
                <h2
                  style={{
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Nuevo Post
                </h2>
                <p style={{ color: 'var(--gray)', fontSize: '0.8rem', marginBottom: '2rem', fontFamily: 'var(--font-subtitle), League Spartan, sans-serif' }}>
                  Crea una publicación con fotos y descripción.
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Imágenes</label>
                  <input
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    multiple
                    onChange={e => handleFiles(e.target.files)}
                    style={{ ...inputStyle, padding: '0.6rem' }}
                  />
                  {previews.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {previews.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={i}
                          src={src}
                          alt="preview"
                          style={{ width: 60, height: 60, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Descripción</label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Describe esta actualización..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                    onFocus={e => ((e.target as HTMLElement).style.borderColor = 'var(--orange)')}
                    onBlur={e => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button
                  onClick={publish}
                  disabled={loading}
                  style={{
                    background: 'var(--orange)',
                    color: 'var(--black)',
                    border: 'none',
                    padding: '0.8rem 2rem',
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: loading ? 'wait' : 'pointer',
                    width: '100%',
                    transition: 'background 0.3s',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'Publicando...' : 'Publicar'}
                </button>

                <button
                  onClick={logout}
                  style={{
                    background: 'transparent',
                    color: 'var(--gray)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.8rem 2rem',
                    fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    width: '100%',
                    marginTop: '0.5rem',
                    transition: 'all 0.3s',
                  }}
                >
                  Cerrar sesión
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
