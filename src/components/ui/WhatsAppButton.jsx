import { FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const WhatsAppButton = () => {
  const [showNotification, setShowNotification] = useState(true)
  const phoneNumber = '5493765252582'
  const message = 'Hola Pablo! Vi tu portfolio y quiero consultarte sobre un proyecto.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Ocultar la notificación después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setShowNotification(false)
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón WhatsApp */}
      <button
        onClick={handleClick}
        className="group relative bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Punto rojo de notificación */}
        {showNotification && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
          </span>
        )}

        <FaWhatsapp size={32} />
      </button>
    </div>
  )
}

export default WhatsAppButton