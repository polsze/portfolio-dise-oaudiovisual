import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl text-white mb-4">Página no encontrada</h2>
        <p className="text-white/60 mb-8">Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="btn-primary inline-block">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound