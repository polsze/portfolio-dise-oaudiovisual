import { FaVideo, FaPalette, FaFilm, FaCamera, FaPlay, FaMagic } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'

const Services = () => {
  const services = [
    {
      icon: FaVideo,
      title: 'Edición de Video',
      description: 'Edición profesional para redes sociales, empresas y creadores de contenido.'
    },
    {
      icon: FaPlay,
      title: 'Contenido para Redes',
      description: 'Reels, TikToks y videos optimizados para captar la atención desde el primer segundo.'
    },
    {
      icon: FaFilm,
      title: 'Videos Corporativos',
      description: 'Edición de videos promocionales para marcas, constructoras, inmobiliarias y negocios.'
    },
    {
      icon: FaCamera,
      title: 'Postproducción',
      description: 'Corrección de color, transiciones, música, subtítulos y retoques finales.'
    },
    {
      icon: FaPalette,
      title: 'Diseño para Contenido',
      description: 'Miniaturas, portadas y piezas gráficas para potenciar tu presencia online.'
    },
    {
      icon: FaMagic,
      title: 'Edición Creativa',
      description: 'Videos con ritmo, efectos y storytelling para destacar frente a la competencia.'
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