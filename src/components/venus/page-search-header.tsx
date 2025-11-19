'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { SearchV3 } from './search-v3'
import { Button } from './button'

export interface PageSearchHeaderAction {
  label: string
  icon?: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}

export interface PageSearchHeaderProps {
  /** The page title text */
  title: string
  /** Optional help icon component to show next to title */
  helpIcon?: React.ReactNode
  /** Search placeholder text */
  searchPlaceholder?: string
  /** Search value (controlled) */
  searchValue?: string
  /** Search onChange handler */
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Search onClear handler */
  onSearchClear?: () => void
  /** Optional action button (legacy single action) */
  action?: PageSearchHeaderAction
  /** Optional array of action buttons (replaces action if provided) */
  actions?: PageSearchHeaderAction[]
  /** Additional className for the outer container */
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
          'bg-[#F5F6F8]',
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
