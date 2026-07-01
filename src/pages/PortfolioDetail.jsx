import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'

const PortfolioDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))
  const [error, setError] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white mb-4">Proyecto no encontrado</h2>
          <Link to="/" className="text-primary-500 hover:text-primary-400">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <Link to="/#portfolio" className="inline-flex items-center text-primary-500 hover:text-primary-400 mb-8">
          <FaArrowLeft className="mr-2" />
          Volver al portfolio
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {project.title}
        </h1>
        
        <div className="aspect-video bg-dark-light rounded-2xl overflow-hidden mb-8">
          {project.video ? (
            <video 
              controls 
              className="w-full h-full"
              poster={project.thumbnail}
              onError={() => setError(true)}
              onLoadedData={() => console.log('Video cargado correctamente')}
            >
              <source src={project.video} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          ) : (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          )}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mt-4">
              <p className="text-center">
                Error al cargar el video. Verifica que el archivo existe en: <br />
                <span className="font-mono text-sm break-all">{project.video}</span>
              </p>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-white/80 text-lg mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-dark-light rounded-full text-sm text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-dark-light rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4">Detalles del proyecto</h4>
            <div className="space-y-3 text-white/60">
              <p><span className="text-white">Categoría:</span> {project.category}</p>
              <p><span className="text-white">Año:</span> {project.year || '2024'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetail