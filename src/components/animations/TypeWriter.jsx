import { useState, useEffect } from 'react'

const TypeWriter = ({ texts, delay = 3000 }) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer

    const fullText = texts[index]

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setIndex((index + 1) % texts.length)
        }
      }, 50)
    } else {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
        if (text.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), delay)
        }
      }, 100)
    }

    return () => clearTimeout(timer)
  }, [text, index, isDeleting, texts, delay])

  return (
    <span>
      {text}
      <span className="inline-block w-1 h-8 md:h-10 bg-primary-500 ml-1 animate-pulse" />
    </span>
  )
}

export default TypeWriter