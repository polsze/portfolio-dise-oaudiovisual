import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getLatest } from '../../data/projects'
import Card from '../ui/Card'
import FadeIn from '../animations/FadeIn'
import Button from '../ui/Button'

const Portfolio = () => {
  const latestProjects = getLatest(6)

  return (
    <section id="portfolio" className="section-padding bg-dark-light">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mi <span className="text-gradient-primary">Portfolio</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Proyectos destacados que demuestran mi versatilidad y creatividad
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                title={project.title}
                description={project.description}
                image={project.thumbnail}
                video={project.video}
                tags={project.tags}
                link={`/proyecto/${project.id}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/videos">
            <Button variant="primary" size="large">
              🎬 Ver todos los videos
            </Button>
          </Link>
          <Link to="/imagenes">
            <Button variant="secondary" size="large">
              🖼️ Ver todos los diseños
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio