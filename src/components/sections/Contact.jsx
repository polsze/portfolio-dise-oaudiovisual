import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'
import Button from '../ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'pablo@barrios.com',
      link: 'mailto:pablo@barrios.com'
    },
    {
      icon: FaPhone,
      title: 'Teléfono',
      info: '+54 11 1234-5678',
      link: 'tel:+541112345678'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      info: 'Buenos Aires, Argentina',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Hablamos de tu <span className="text-gradient-primary">proyecto?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Cuéntame tu idea y trabajemos juntos para hacerla realidad
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 bg-dark-light rounded-2xl hover:bg-dark-elevated transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <item.icon className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{item.title}</p>
                      <p className="text-white font-medium">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-6 bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                <p className="text-white/80 text-center">
                  🚀 <span className="font-semibold text-white">Disponible para proyectos</span>
                  <br />
                  <span className="text-sm text-white/60">Respuesta en menos de 24hs</span>
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light border border-tertiary-800 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light border border-tertiary-800 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-light border border-tertiary-800 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <FaPaperPlane />
                    ¡Mensaje enviado!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaPaperPlane />
                    Enviar mensaje
                  </span>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact