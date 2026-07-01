import { useState, useRef } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

const VideoPlayer = ({ src, poster, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const total = videoRef.current.duration || 0

      setCurrentTime(current)
      setDuration(total)

      const progress = total > 0 ? (current / total) * 100 : 0
      setProgress(progress)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover rounded-2xl"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-1 bg-white/20 rounded-full mb-4">
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {isPlaying ? (
              <FaPause className="text-white" />
            ) : (
              <FaPlay className="text-white ml-1" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {isMuted ? (
              <FaVolumeMute className="text-white" />
            ) : (
              <FaVolumeUp className="text-white" />
            )}
          </button>

          <span className="text-white/60 text-sm ml-auto">
            {`${Math.floor(currentTime)}s / ${Math.floor(duration)}s`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer