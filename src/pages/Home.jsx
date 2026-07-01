import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import VideoSection from '../components/sections/VideoSections'
import ImageSection from '../components/sections/ImageSection'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <VideoSection />  {/* ← SECCIÓN DE VIDEOS */}
      <ImageSection />  {/* ← SECCIÓN DE IMÁGENES */}
      <Contact />
    </>
  )
}

export default Home