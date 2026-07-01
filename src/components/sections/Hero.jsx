import { motion } from 'framer-motion'
import TypeWriter from '../animations/TypeWriter'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/videos/demo-reel.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full"
          >
            <span className="text-primary-500 text-sm font-medium">Editor de Video & Diseñador Gráfico</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Pablo Barrios
          </h1>
          
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/80 mb-8 h-20">
            <TypeWriter 
              texts={[
                'Editor de Video',
                'Diseñador Gráfico',
                'Creador Audiovisual',
                'Motion Designer'
              ]}
              delay={2000}
            />
          </div>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Transformo ideas en experiencias visuales que cuentan historias y conectan con las personas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" href="#portfolio">
              Ver mi trabajo
            </Button>
            <Button variant="secondary" size="large" href="#contact">
              Contactarme
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero