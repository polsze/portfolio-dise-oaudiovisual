import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideos } from '../data/projects'
import VideoCard from '../components/ui/VideoCard'
import Pagination from '../components/ui/Pagination'
import FadeIn from '../components/animations/FadeIn'
import { FaArrowLeft } from 'react-icons/fa'

const VideosPage = () => {
  const allVideos = getVideos()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  
  const totalPages = Math.ceil(allVideos.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentVideos = allVideos.slice(startIndex, startIndex + itemsPerPage)

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
          <span className="text-gradient-primary">Videos</span>
            </h1>
            <p className="text-white/60 text-lg">
              {allVideos.length} videos disponibles (imposible poner todos...)
            </p>
          </div>
        </FadeIn>

        {allVideos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl">No hay videos disponibles aún</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {currentVideos.map((project, index) => (
                <FadeIn key={project.id} direction="up" delay={index * 0.05}>
                  <VideoCard
                    title={project.title}
                    description={project.description}
                    image={project.thumbnail}
                    video={project.video}
                    tags={project.tags}
                    link={`/proyecto/${project.id}`}
                    autoPlay={project.id === 1}  // ← SOLO el ID: 1 se reproduce
                  />
                </FadeIn>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                className="mt-12"
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default VideosPage