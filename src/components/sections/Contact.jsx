import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
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
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nuevo mensaje desde tu portfolio - ${formData.name}`,
          from_name: formData.name,
          botcheck: ''
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.message || 'Error al enviar el mensaje. Intenta nuevamente.')
      }
    } catch (error) {
      setError('Error de conexión. Verifica tu internet e intenta nuevamente.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'polbarrios835237@gmail.com',
      link: 'mailto:polbarrios835237@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Teléfono',
      info: '+54 3765 252582',
      link: 'tel:+543765252582'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      info: 'Posadas, Misiones, Argentina',
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
              {/* Mensaje de éxito */}
              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center animate-fade-in">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <FaCheckCircle className="text-green-400 text-xl" />
                    <p className="text-green-400 font-semibold">¡Mensaje enviado con éxito! 🎉</p>
                  </div>
                  <p className="text-green-300/70 text-sm">Te responderé a la brevedad.</p>
                </div>
              )}

              {/* Mensaje de error */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-center animate-fade-in">
                  <p className="text-red-400 font-semibold">Error al enviar</p>
                  <p className="text-red-300/70 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || submitted}
                  className="w-full px-4 py-3 bg-dark-light border border-tertiary-800 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || submitted}
                  className="w-full px-4 py-3 bg-dark-light border border-tertiary-800 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting || submitted}
                  className="w-full px-4 py-3 bg-dark-light border border-tertiary-800 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Campo oculto anti-spam de Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-white" />
                    ¡Mensaje enviado!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaPaperPlane />
                    Enviar mensaje
                  </span>
                )}
              </Button>

              <p className="text-white/30 text-xs text-center">
                * Campos obligatorios. Tu información está segura.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact