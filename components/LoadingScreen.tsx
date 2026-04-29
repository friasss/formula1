'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: 'var(--black)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-f1), Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: '3.5rem',
              letterSpacing: '0.05em',
              color: 'var(--white)',
              textTransform: 'uppercase',
            }}
          >
            SPEED<span style={{ color: 'var(--orange)' }}>BOLT</span>
          </motion.div>

          <div
            style={{
              width: 200,
              height: 3,
              background: 'rgba(255,255,255,0.1)',
              marginTop: '2rem',
              overflow: 'hidden',
            }}
          >
            <div
              className="loading-bar"
              style={{ height: '100%', background: 'var(--orange)', width: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
