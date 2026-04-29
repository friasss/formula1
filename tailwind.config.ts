import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#e37903', light: '#f59e0b' },
        teal: { DEFAULT: '#2a7071', dark: '#1e5253', darker: '#162f30' },
        'sb-black': { DEFAULT: '#0a0a0a', soft: '#141414' },
        cream: '#e8ddd0',
        brown: '#7a4a1e',
        gray: '#888888',
      },
      fontFamily: {
        f1: ['Barlow Condensed', 'sans-serif'],
        subtitle: ['League Spartan', 'sans-serif'],
        body: ['Oswald', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee 20s linear infinite reverse',
        pulse2: 'pulse2 2s infinite',
        speedLine: 'speedLine 2s ease-in-out infinite',
        loadBar: 'loadBar 2s ease-in-out forwards',
        bounce2: 'bounce2 2s infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        speedLine: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(0)' },
          '50%': { opacity: '1', transform: 'translateX(20px)' },
        },
        loadBar: {
          to: { width: '100%' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
