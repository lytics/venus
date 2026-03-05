'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import { SearchV3 } from './search-v3'
import { Button } from './button'

export interface PageSearchHeaderAction {
  /** Button label text. */
  label: string
  /** Optional icon rendered before the label inside the button. */
  icon?: React.ReactNode
  /** Click handler for the action button. */
  onClick: () => void
  /** Button variant. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}

export interface PageSearchHeaderProps {
  /** Page title text. Rendered at 20px, semibold, black. */
  title: string
  /** Optional help icon component displayed next to the title (e.g. a Tooltip trigger). */
  helpIcon?: React.ReactNode
  /** Placeholder text for the SearchV3 input. @default "Search..." */
  searchPlaceholder?: string
  /** Controlled value for the search input. */
  searchValue?: string
  /** Callback fired when the search input value changes. */
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Callback fired when the search input is cleared. */
  onSearchClear?: () => void
  /** Legacy single action button. Use `actions` array for multiple buttons. */
  action?: PageSearchHeaderAction
  /** Array of action buttons rendered on the right. Overrides `action` if provided. */
  actions?: PageSearchHeaderAction[]
  /** Additional CSS class names for the outer 90px-tall header container. */
  className?: string
}

/**
 * Venus Page Search Header Component
 *
 * A fixed-height (80px) header bar with light blue background, containing
 * a centered 1130px container with page title and search bar.
 */
export const PageSearchHeader = React.forwardRef<HTMLDivElement, PageSearchHeaderProps>(
  (
    {
      title,
      helpIcon,
      searchPlaceholder = 'Search...',
      searchValue,
      onSearchChange,
      onSearchClear,
      action,
      actions,
      className,
      ...props
    },
    ref
  ) => {
    // Use actions array if provided, otherwise fallback to single action
    const actionButtons = actions || (action ? [action] : [])

    return (
      <div
        ref={ref}
        className={cn(
          // Container with light blue background
          'bg-surface-gray',
          // 90px height
          'h-[90px]',
          // Borders top and bottom
          'border-t border-b border-gray-200',
          // Flex container with horizontal padding
          'flex items-center justify-between',
          // 48px horizontal inset (24px outer + 24px inner = px-12)
          'px-12',
          className
        )}
        {...props}
      >
        {/* Left: Title and search */}
        <div className="flex items-center gap-4">
          {/* Page Title */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-black">
              {title}
            </h1>
            {helpIcon && helpIcon}
          </div>

          {/* Search Bar */}
          <div className="w-96">
            <SearchV3
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              onClear={onSearchClear}
            />
          </div>
        </div>

        {/* Right: Action buttons */}
        {actionButtons.length > 0 && (
          <div className="flex items-center gap-2">
            {actionButtons.map((btn, idx) => (
              <Button
                key={idx}
                variant={btn.variant || 'primary'}
                size="regular"
                onClick={btn.onClick}
              >
                {btn.icon}
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    )
  }
)

PageSearchHeader.displayName = 'PageSearchHeader'
