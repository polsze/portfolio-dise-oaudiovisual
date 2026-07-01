import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const Card = ({ 
  title, 
  description, 
  image, 
  video, 
  tags = [], 
  link,
  className = ''
}) => {
  return (
    <div className={`card-base group ${className}`}>
      <div className="relative aspect-[9/16] overflow-hidden bg-black">  {/* ← CAMBIADO a 9:16 */}
        {video ? (
          <>
            <video 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              autoPlay
              playsInline
              poster={image}
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <FaPlay className="text-white ml-1" size={20} />
              </div>
            </div>
          </>
        ) : (
          <>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-dark-light rounded-full text-xs text-white/40">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <Link 
            to={link} 
            className="text-primary-500 hover:text-primary-400 text-sm font-semibold inline-flex items-center group"
          >
            Ver proyecto
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Card