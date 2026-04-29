import LoadingScreen from '@/components/LoadingScreen'
import CursorGlow from '@/components/CursorGlow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeStrip from '@/components/MarqueeStrip'
import About from '@/components/About'
import Inspiration from '@/components/Inspiration'
import ParallaxDivider from '@/components/ParallaxDivider'
import Brand from '@/components/Brand'
import Competition from '@/components/Competition'
import Posts from '@/components/Posts'
import Footer from '@/components/Footer'
import AdminModal from '@/components/AdminModal'
import PostDetailModal from '@/components/PostDetailModal'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />

        <MarqueeStrip
          items={['SPEED BOLT', 'STEM RACING RD', 'DISEÑO', 'INNOVACIÓN', 'VELOCIDAD', 'IPISA', 'REPÚBLICA DOMINICANA']}
          bg="var(--orange)"
          textColor="var(--black)"
        />

        <About />
        <Inspiration />

        <ParallaxDivider />

        <Brand />
        <Competition />

        <MarqueeStrip
          items={['VELOCIDAD', 'PRECISIÓN', 'AERODINÁMICA', 'INNOVACIÓN', 'EQUIPO', 'STEM']}
          bg="var(--teal)"
          textColor="var(--white)"
          reverse
        />

        <Posts />
      </main>

      <Footer />
      <AdminModal />
      <PostDetailModal />
    </>
  )
}
