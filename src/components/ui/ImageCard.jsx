import { Link } from 'react-router-dom'
import { FaExpand } from 'react-icons/fa'
import { useState } from 'react'

const ImageCard = ({ 
  title, 
  description, 
  image, 
  tags = [], 
  link,
  className = ''
}) => {
  const [isVertical, setIsVertical] = useState(false)

  const handleImageLoad = (e) => {
    const img = e.target
    const aspectRatio = img.naturalWidth / img.naturalHeight
    setIsVertical(aspectRatio < 1)
  }

  return (
    <div className={`card-base group ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full transition-transform duration-500 ${
            isVertical ? 'object-contain' : 'object-cover'
          } group-hover:scale-105`}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 bg-secondary-500 rounded-full flex items-center justify-center">
            <FaExpand className="text-white" size={18} />
          </div>
        </div>
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-secondary-500/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
              {tags[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xs font-semibold text-white mb-1 group-hover:text-secondary-500 transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-xs">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ImageCard