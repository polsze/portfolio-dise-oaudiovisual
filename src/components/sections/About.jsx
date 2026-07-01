import { motion } from 'framer-motion'
import FadeIn from '../animations/FadeIn'

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative flex justify-center">
              <div className="aspect-square w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden bg-dark shadow-2xl">
                <img 
                  src="/images/cara-pablo-barrios.jpg" 
                  alt="Pablo Barrios" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-500 rounded-2xl p-5">
                <p className="text-white font-bold text-2xl">+5</p>
                <p className="text-white/80 text-xs">Años de experiencia</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sobre <span className="text-gradient-primary">Mí</span>
              </h2>
              <p className="text-white/60 text-lg mb-6">
                Soy Pablo Barrios, un apasionado editor de video y diseñador gráfico con más de 5 años de experiencia creando contenido visual que impacta.
              </p>
              <p className="text-white/60 text-lg mb-8">
                Mi enfoque combina la técnica con la creatividad para contar historias que conectan emocionalmente con las audiencias. Desde spots publicitarios hasta contenido para redes sociales, cada proyecto es una oportunidad para crear algo único.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark rounded-2xl p-4">
                  <p className="text-2xl font-bold text-primary-500">50+</p>
                  <p className="text-white/40 text-sm">Proyectos completados</p>
                </div>
                <div className="bg-dark rounded-2xl p-4">
                  <p className="text-2xl font-bold text-secondary-500">100%</p>
                  <p className="text-white/40 text-sm">Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About