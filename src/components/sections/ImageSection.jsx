import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getImages } from '../../data/projects'
import ImageCard from '../ui/ImageCard'
import FadeIn from '../animations/FadeIn'

const ImageSection = () => {
  const images = getImages().slice(0, 4) // Solo 6 en el home

  return (
    <section className="section-padding bg-dark-light">
      <div className="container-custom">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                🖼️ Mis <span className="text-gradient-primary">Diseños</span>
              </h2>
              <p className="text-white/60 mt-2">
                Creaciones visuales que transmiten identidad
              </p>
            </div>
            <Link 
              to="/imagenes" 
              className="text-secondary-500 hover:text-secondary-400 font-semibold flex items-center gap-2 transition-colors"
            >
              Ver todos los diseños
              <span className="text-xl">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ImageCard
                title={project.title}
                description={project.description}
                image={project.thumbnail}
                tags={project.tags}
                link={`/proyecto/${project.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageSection