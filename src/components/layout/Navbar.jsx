import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    
    // Si es la ruta home con anchor (#contact)
    if (href === '/#contact') {
      // Si estamos en home, scrollear al contacto
      if (window.location.pathname === '/') {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Si estamos en otra página, navegar a home y luego scrollear
        navigate('/')
        setTimeout(() => {
          const contactSection = document.getElementById('contact')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300)
      }
    } else {
      // Navegación normal
      navigate(href)
    }
    
    // Cerrar menú móvil
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Videos', href: '/videos' },
    { name: 'Diseños', href: '/imagenes' },
    { name: 'Contacto', href: '/#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-lg border-b border-tertiary-800' : 'bg-transparent'
    }`}>
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-primary-500 transition-colors">
          Pablo Barrios
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/70 hover:text-white transition-colors font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-lg border-b border-tertiary-800">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/70 hover:text-white transition-colors font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar