'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { memo } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

const Pagination = memo(function Pagination({ 
  currentPage, 
  totalPages, 
  basePath = '' 
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  if (totalPages <= 1) return null

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    
    const queryString = params.toString()
    const url = basePath + (queryString ? `?${queryString}` : '')
    router.push(url)
  }

  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const windowSize = 7
    const halfWindow = Math.floor(windowSize / 2)

    pages.push(1)

    if (totalPages <= 8) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let start = Math.max(2, currentPage - halfWindow)
      let end = Math.min(totalPages, start + windowSize - 1)

      if (end === totalPages) {
        start = Math.max(2, totalPages - windowSize + 1)
      }

      if (start > 2) {
        pages.push('...')
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
    }

    return pages
  }

  return (
    <nav 
      className="flex justify-center items-center space-x-2 mt-12"
      aria-label="Pagination"
    >
      <button
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      <div className="flex items-center space-x-1">
        {getVisiblePages().map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-slate-400">...</span>
            ) : (
              <button
                onClick={() => navigateToPage(page as number)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === page
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        Next
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  )
})

export default Pagination