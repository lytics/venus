'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ZoomIn, Maximize2 } from 'lucide-react'

export interface TablePaginationProps {
  /** Current page number (1-indexed) */
  currentPage?: number
  /** Total number of records */
  totalRecords?: number
  /** Number of records per page */
  recordsPerPage?: number
  /** Start index of current page (1-indexed) */
  startIndex?: number
  /** End index of current page (1-indexed) */
  endIndex?: number
  /** Callback when page changes */
  onPageChange?: (page: number) => void
  /** Callback when records per page changes */
  onRecordsPerPageChange?: (recordsPerPage: number) => void
  /** Available options for records per page */
  recordsPerPageOptions?: number[]
  /** Additional className */
  className?: string
}

/**
 * Venus Table Pagination Footer
 *
 * Displays pagination controls and record count information at the bottom of tables.
 * Matches the Contentstack Venus design system specifications.
 */
export const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      currentPage = 1,
      totalRecords = 0,
      recordsPerPage = 100,
      startIndex,
      endIndex,
      onPageChange,
      onRecordsPerPageChange,
      recordsPerPageOptions = [10, 25, 50, 100],
      className,
      ...props
    },
    ref
  ) => {
    // Calculate start and end indices if not provided
    const calculatedStartIndex = startIndex ?? (currentPage - 1) * recordsPerPage + 1
    const calculatedEndIndex = endIndex ?? Math.min(currentPage * recordsPerPage, totalRecords)
    const totalPages = Math.ceil(totalRecords / recordsPerPage)

    const handleFirstPage = () => {
      if (currentPage > 1 && onPageChange) {
        onPageChange(1)
      }
    }

    const handlePrevPage = () => {
      if (currentPage > 1 && onPageChange) {
        onPageChange(currentPage - 1)
      }
    }

    const handleNextPage = () => {
      if (currentPage < totalPages && onPageChange) {
        onPageChange(currentPage + 1)
      }
    }

    const handleLastPage = () => {
      if (currentPage < totalPages && onPageChange) {
        onPageChange(totalPages)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          // Container styles
          'flex items-center justify-between',
          'h-14 px-4',
          'bg-white',
          'border-t border-gray-200',
          className
        )}
        {...props}
      >
        {/* Left: Record count display */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Showing</span>

          {/* Records per page dropdown */}
          <select
            value={recordsPerPage}
            onChange={(e) => onRecordsPerPageChange?.(Number(e.target.value))}
            className="h-8 px-2 pr-8 rounded border border-gray-300 text-sm text-gray-700 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-venus-primary/20 focus:border-default-primary"
          >
            {recordsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <span className="text-sm text-gray-600">
            | {calculatedStartIndex} to {calculatedEndIndex} of {totalRecords} {totalRecords === 1 ? 'record' : 'records'}
          </span>
        </div>

        {/* Right: Pagination controls */}
        <div className="flex items-center gap-2">
          {/* First page button */}
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center',
              'text-gray-600 hover:bg-gray-100',
              'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',
              'transition-colors'
            )}
            aria-label="First page"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>

          {/* Previous page button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center',
              'text-gray-600 hover:bg-gray-100',
              'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',
              'transition-colors'
            )}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page number display/input */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = Number(e.target.value)
                if (page >= 1 && page <= totalPages && onPageChange) {
                  onPageChange(page)
                }
              }}
              className="w-16 h-8 px-2 text-center rounded border border-gray-300 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-venus-primary/20 focus:border-default-primary"
            />
          </div>

          {/* Next page button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center',
              'text-gray-600 hover:bg-gray-100',
              'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',
              'transition-colors'
            )}
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Last page button */}
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center',
              'text-gray-600 hover:bg-gray-100',
              'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',
              'transition-colors'
            )}
            aria-label="Last page"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>

          {/* Zoom button */}
          <button
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center',
              'text-white bg-gray-600 hover:bg-gray-700',
              'transition-colors'
            )}
            aria-label="Zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Maximize button */}
          <button
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center',
              'text-white bg-gray-600 hover:bg-gray-700',
              'transition-colors'
            )}
            aria-label="Maximize"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }
)

TablePagination.displayName = 'TablePagination'
