'use client'

import * as React from 'react'
import { Info } from 'lucide-react'
import { cn } from '../lib/utils'

export interface FormSidebarProps {
  /** Additional CSS class names for the 72px-wide sidebar with white background and left border.
   * Contains an info icon and separator by default.
   */
  className?: string
}

/**
 * Venus Form Sidebar Component
 *
 * A fixed-width right sidebar with white background and info icon,
 * matching the Contentstack production app.
 */
export const FormSidebar = React.forwardRef<HTMLDivElement, FormSidebarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Fixed width and full height
          'w-[72px] h-full',
          // Flex container
          'flex flex-col items-center',
          // White background with left border
          'bg-white border-l border-border',
          className
        )}
        {...props}
      >
        {/* Info Icon */}
        <div className="pt-4 pb-3 my-4">
          <Info className="w-5 h-5 text-gray-600" strokeWidth={2} />
        </div>

        {/* Separator - 32px wide */}
        <div className="w-8 border-t border-border" />
      </div>
    )
  }
)

FormSidebar.displayName = 'FormSidebar'
