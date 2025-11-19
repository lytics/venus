'use client'

import * as React from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Placeholder text for the search input
   */
  placeholder?: string
  /**
   * Current value of the search input
   */
  value?: string
  /**
   * Callback when the input value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Callback when the clear button is clicked
   */
  onClear?: () => void
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  /**
   * Additional CSS classes for the wrapper
   */
  className?: string
  /**
   * Reference to the input element
   */
  inputRef?: React.RefObject<HTMLInputElement>
}

/**
 * Venus Search Component (Version 2)
 *
 * A search input with a purple border, search icon on the left, and a clear button on the right
 * when text is present. Matches the exact styling from app.contentstack.com
 */
export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      placeholder = 'Search...',
      value,
      onChange,
      onClear,
      disabled = false,
      className,
      inputRef,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || '')
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    const inputElement = inputRef || ref

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value)
      }
      onChange?.(event)
    }

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('')
      }
      onClear?.()

      // Focus the input after clearing
      if (inputElement && 'current' in inputElement && inputElement.current) {
        inputElement.current.focus()
      }
    }

    return (
      <div
        className={cn(
          'flex items-center gap-2',
          'h-[29px] px-2',
          'border border-[rgb(93,80,190)] rounded-[4px]',
          'bg-transparent',
          'transition-colors',
          'focus-within:border-[rgb(108,92,231)]',
          'hover:border-[rgb(108,92,231)]',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <SearchIcon
          className="h-4 w-4 flex-shrink-0 text-[#475161]"
          strokeWidth={1.5}
        />

        <input
          ref={inputElement as React.RefObject<HTMLInputElement>}
          type="text"
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label="Search"
          data-test-id="cs-search-input-field"
          className={cn(
            'flex-1 min-w-0',
            'text-sm font-normal',
            'text-[rgb(33,33,33)]',
            'placeholder:text-[rgb(100,118,150)]',
            'bg-transparent',
            'border-0 outline-none',
            'disabled:cursor-not-allowed'
          )}
          {...props}
        />

        {currentValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            data-test-id="cs-search-input-field-cancel-icon"
            className={cn(
              'flex-shrink-0',
              'p-0 ml-2',
              'text-[#475161]',
              'hover:text-[rgb(108,92,231)]',
              'transition-colors',
              'cursor-pointer',
              'bg-transparent border-0'
            )}
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        )}
      </div>
    )
  }
)

Search.displayName = 'Search'
