'use client'

import * as React from 'react'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './button'

export interface PageFormHeaderProps {
  /** The page title text */
  title: string
  /** Handler for back button click */
  onBack?: () => void
  /** Handler for cancel button click */
  onCancel?: () => void
  /** Handler for save button click */
  onSave?: () => void
  /** Disable the save button */
  saveDisabled?: boolean
  /** Additional className for the outer container */
  className?: string
}

/**
 * Venus Page Form Header Component
 *
 * A fixed-height header bar with light blue background, containing a back arrow,
 * title, and cancel/save action buttons.
 */
export const PageFormHeader = React.forwardRef<HTMLDivElement, PageFormHeaderProps>(
  (
    {
      title,
      onBack,
      onCancel,
      onSave,
      saveDisabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Container with light blue background (matching production)
          'bg-[#F7F9FC]',
          // Height
          'h-16',
          // Bottom border only (no top border per production specs)
          'border-b border-[#E5E7EB]',
          // Flex container with horizontal padding
          'flex items-center justify-between',
          'px-4',
          // Sticky positioning - sticks to top of scrollable area
          'sticky top-0 z-40',
          className
        )}
        {...props}
      >
        {/* Left: Back arrow and title */}
        <div className="flex items-center gap-4">
          {/* Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center justify-center h-10 w-10 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              aria-label="Go back"
            >
              <ArrowLeft className="h-6 w-6 text-[#2D3748]" />
            </button>
          )}

          {/* Page Title */}
          <h1 className="text-xl font-semibold text-[#2D3748]">
            {title}
          </h1>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center gap-3">
          {onCancel && (
            <Button variant="ghost" size="regular" onClick={onCancel}>
              Cancel
            </Button>
          )}
          {onSave && (
            <Button
              variant="primary"
              size="regular"
              onClick={onSave}
              disabled={saveDisabled}
            >
              Save
            </Button>
          )}
        </div>
      </div>
    )
  }
)

PageFormHeader.displayName = 'PageFormHeader'
