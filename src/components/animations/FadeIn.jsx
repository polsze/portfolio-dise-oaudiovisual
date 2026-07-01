import { motion } from 'framer-motion'

const FadeIn = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  once = true
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn