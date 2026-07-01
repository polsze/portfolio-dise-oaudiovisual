import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getVideos } from '../../data/projects'
import VideoCard from '../ui/VideoCard'
import FadeIn from '../animations/FadeIn'

const VideoSection = () => {
  const videos = getVideos().slice(0, 4) // SOLO 4 en el home

  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                🎬 Mis <span className="text-gradient-primary">Videos</span>
              </h2>
              <p className="text-white/60 mt-2">
                Proyectos audiovisuales que cuentan historias
              </p>
            </div>
            <Link 
              to="/videos" 
              className="text-primary-500 hover:text-primary-400 font-semibold flex items-center gap-2 transition-colors"
            >
              Ver todos los videos
              <span className="text-xl">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videos.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <VideoCard
                title={project.title}
                description={project.description}
                image={project.thumbnail}
                video={project.video}
                tags={project.tags}
                link={`/proyecto/${project.id}`}
                autoPlay={true}  // ← TODOS se reproducen en el home
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection