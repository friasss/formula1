import type { Metadata } from 'next'
import { Barlow_Condensed, League_Spartan, Oswald } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-f1',
})

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-subtitle',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Speed Bolt | STEM Racing RD',
  description: 'Diseño, innovación y velocidad. Equipo de STEM Racing del IPISA — República Dominicana.',
  openGraph: {
    title: 'Speed Bolt | STEM Racing RD',
    description: 'Construyendo una marca que compite.',
    siteName: 'Speed Bolt',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${leagueSpartan.variable} ${oswald.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), Oswald, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
