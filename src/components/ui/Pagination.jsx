import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = ''
}) => {
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      
      if (currentPage <= 3) {
        end = 4
      }
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3
      }
      
      if (start > 2) {
        pages.push('...')
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (end < totalPages - 1) {
        pages.push('...')
      }
      
      pages.push(totalPages)
    }
    
    return pages
  }

  if (totalPages <= 1) return null

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full bg-dark-light hover:bg-dark-elevated disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-white/60 hover:text-white"
        aria-label="Página anterior"
      >
        <FaChevronLeft size={14} />
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`w-10 h-10 rounded-full transition-all ${
            currentPage === page
              ? 'bg-primary-500 text-white font-semibold'
              : page === '...'
              ? 'bg-transparent text-white/40 cursor-default'
              : 'bg-dark-light hover:bg-dark-elevated text-white/60 hover:text-white'
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full bg-dark-light hover:bg-dark-elevated disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-white/60 hover:text-white"
        aria-label="Página siguiente"
      >
        <FaChevronRight size={14} />
      </button>
    </div>
  )
}

export default Pagination