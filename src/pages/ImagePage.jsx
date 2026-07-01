import { Link } from 'react-router-dom'
import { getImages } from '../data/projects'
import ImageCard from '../components/ui/ImageCard'
import FadeIn from '../components/animations/FadeIn'
import { FaArrowLeft } from 'react-icons/fa'

const ImagesPage = () => {
  const allImages = getImages()

  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark">
      <div className="container-custom">
        {/* Botón volver */}
        <Link 
          to="/" 
          className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
        >
          <FaArrowLeft className="mr-2" size={14} />
          Volver al inicio
        </Link>

        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mis <span className="text-gradient-primary">Diseños</span>
            </h1>
            <p className="text-white/60 text-lg">
              {allImages.length} diseños disponibles
            </p>
          </div>
        </FadeIn>

        {allImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl">No hay diseños disponibles aún</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allImages.map((project, index) => (
              <FadeIn key={project.id} direction="up" delay={index * 0.05}>
                <ImageCard
                  title={project.title}
                  description={project.description}
                  image={project.thumbnail}
                  tags={project.tags}
                  link={`/proyecto/${project.id}`}
                />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagesPage