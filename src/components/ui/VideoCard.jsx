import { Link } from 'react-router-dom'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useState, useRef } from 'react'

const VideoCard = ({ 
  title, 
  description, 
  image, 
  video, 
  tags = [], 
  link,
  className = '',
  autoPlay = false
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const videoRef = useRef(null)

  const togglePlay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`card-base group ${className}`}>
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          muted
          loop
          playsInline
          poster={image}
          preload="metadata"
          autoPlay={autoPlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={video} type="video/mp4" />
        </video>
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
        
        {/* Botón Play/Pause - Siempre visible si NO tiene autoPlay o si está pausado */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          autoPlay && isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}>
          <button 
            onClick={togglePlay}
            className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <FaPause className="text-white" size={20} />
            ) : (
              <FaPlay className="text-white ml-1" size={20} />
            )}
          </button>
        </div>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-primary-500/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
              {tags[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-xs">
          {description}
        </p>
      </div>
    </div>
  )
}

export default VideoCard