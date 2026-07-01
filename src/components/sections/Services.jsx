import { FaVideo, FaPalette, FaFilm, FaCamera, FaPlay, FaMagic } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'

const Services = () => {
  const services = [
    {
      icon: FaVideo,
      title: 'Edición de Video',
      description: 'Edición profesional con narrativa fluida y ritmo cautivador'
    },
    {
      icon: FaPalette,
      title: 'Diseño Gráfico',
      description: 'Diseños visuales impactantes para marcas y proyectos'
    },
    {
      icon: FaFilm,
      title: 'Motion Graphics',
      description: 'Animaciones y gráficos en movimiento que dan vida a tus ideas'
    },
    {
      icon: FaCamera,
      title: 'Post-producción',
      description: 'Color grading, efectos visuales y corrección de color'
    },
    {
      icon: FaPlay,
      title: 'Producción Audiovisual',
      description: 'Desde la pre-producción hasta la entrega final'
    },
    {
      icon: FaMagic,
      title: 'Efectos Visuales',
      description: 'VFX y composición para crear mundos visuales increíbles'
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mis <span className="text-gradient-primary">Servicios</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Soluciones creativas para todas tus necesidades audiovisuales
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="bg-dark-light rounded-2xl p-8 hover:bg-dark-elevated transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                  <service.icon className="text-primary-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services