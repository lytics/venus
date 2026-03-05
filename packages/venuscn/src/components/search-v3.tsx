'use client'

import * as React from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { cn } from '../lib/utils'

export interface SearchV3Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
 * Venus Search Component V3 (Secondary Variant)
 *
 * A search input with gray border matching dropdown styling, search icon on the left,
 * and a clear button on the right when text is present.
 * Border color: #DDE3EE (idle), #5D50BE (hover/active)
 */
export const SearchV3 = React.forwardRef<HTMLInputElement, SearchV3Props>(
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
          'flex items-center',
          // Height and padding - 10px vertical, 12px horizontal
          'h-10 px-3',
          // Border - matching dropdown (#DDE3EE)
          'border border-input-border',
          // Border radius - 4px
          'rounded-[4px]',
          // Background
          'bg-white',
          // Transitions
          'transition-all duration-150',
          // Hover state - matches input component
          'hover:!border-primary hover:shadow-input-focus',
          // Focus state - matches input component
          'focus-within:!border-primary focus-within:shadow-input-focus',
          // Disabled state
          disabled && 'opacity-50 cursor-not-allowed hover:!border-input-border hover:shadow-none',
          className
        )}
      >
        <input
          ref={inputElement as React.RefObject<HTMLInputElement>}
          type="text"
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label="Search"
          data-test-id="cs-search-v3-input-field"
          className={cn(
            'flex-1 min-w-0',
            // Typography - 16px
            'text-base font-medium',
            // Text color
            'text-ink',
            // Placeholder color
            'placeholder:text-subtle',
            // Background
            'bg-transparent',
            // No border or outline
            'border-0 outline-none',
            // Disabled cursor
            'disabled:cursor-not-allowed'
          )}
          {...props}
        />

        {currentValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            data-test-id="cs-search-v3-input-field-cancel-icon"
            className={cn(
              'flex-shrink-0',
              'p-0',
              'text-heading',
              'hover:text-primary',
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

SearchV3.displayName = 'SearchV3'
