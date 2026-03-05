'use client'

import * as React from 'react'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './button'

export interface PageFormHeaderProps {
  /** Page title text. Rendered at 20px, semibold. */
  title: string
  /** Callback for the back arrow button. If omitted, the back button is not rendered. */
  onBack?: () => void
  /** Callback for the "Cancel" ghost button. If omitted, the cancel button is not rendered. */
  onCancel?: () => void
  /** Callback for the "Save" primary button. If omitted, the save button is not rendered. */
  onSave?: () => void
  /** Disables the save button. @default false */
  saveDisabled?: boolean
  /** Additional CSS class names for the 64px-tall sticky header container. */
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
          'bg-surface-gray',
          // Height
          'h-16',
          // Bottom border only (no top border per production specs)
          'border-b border-border',
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
              <ArrowLeft className="h-6 w-6 text-gray-800" />
            </button>
          )}

          {/* Page Title */}
          <h1 className="text-xl font-semibold text-gray-800">
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
