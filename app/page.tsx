import LoadingScreen from '@/components/LoadingScreen'
import CursorGlow from '@/components/CursorGlow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeStrip from '@/components/MarqueeStrip'
import About from '@/components/About'
import Brand from '@/components/Brand'
import Competition from '@/components/Competition'
import Escuderia from '@/components/Escuderia'
import TeamRoles from '@/components/TeamRoles'
import Patrocinio from '@/components/Patrocinio'
import Recursos from '@/components/Recursos'
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
        <About />
        <Brand />

        {/* Slider de marca */}
        <MarqueeStrip
          items={['SPEED BOLT', 'IPISA', 'STEM RACING RD', 'DISEÑO', 'VELOCIDAD', 'INNOVACIÓN', 'REPÚBLICA DOMINICANA', 'F1 SCALE']}
          bg="var(--teal-dark)"
          textColor="rgba(255,255,255,0.6)"
        />

        <Competition />
        <Escuderia />
        <TeamRoles />
        <Patrocinio />
        <Recursos />
        <Posts />
      </main>

      <Footer />
      <AdminModal />
      <PostDetailModal />
    </>
  )
}
