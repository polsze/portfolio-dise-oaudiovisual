import { useState, useEffect } from 'react'

const TypeWriter = ({ texts, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    const type = () => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        timeout = setTimeout(type, 50)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        timeout = setTimeout(type, 100)
      }

      if (!isDeleting && currentText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
      }
    }

    timeout = setTimeout(type, 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, delay])

  return (
    <span className="relative">
      {currentText}
      <span className="inline-block w-1 h-8 md:h-10 bg-primary-500 ml-1 animate-pulse" />
    </span>
  )
}

export default TypeWriter