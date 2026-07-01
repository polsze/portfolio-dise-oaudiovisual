import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  href, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full'
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-glow hover:scale-105',
    secondary: 'bg-transparent border-2 border-primary-500 hover:bg-primary-500 text-white hover:shadow-glow hover:scale-105',
    outline: 'bg-transparent border-2 border-white/20 hover:border-primary-500 text-white hover:text-primary-500 hover:scale-105',
    ghost: 'bg-white/5 hover:bg-white/10 text-white hover:scale-105',
  }
  
  const sizes = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button