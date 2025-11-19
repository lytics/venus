'use client'

import * as React from 'react'
import { Users, Smartphone, MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Venus Design System Category Pill Component */

export type CategoryVariant = 'audience' | 'device' | 'geographic' | 'temporal'

export interface CategoryPillProps {
  /** The category variant which determines color and icon */
  variant: CategoryVariant
  /** Optional custom className */
  className?: string
  /** Optional children to override default label */
  children?: React.ReactNode
}

const CATEGORY_CONFIG = {
  audience: {
    label: 'Audience',
    icon: Users,
    bgColor: 'bg-blue-50',
    color: 'text-blue-500 !border-blue-500',
  },
  device: {
    label: 'Device',
    icon: Smartphone,
    bgColor: 'bg-green-50',
    color: 'text-green-500 !border-green-500',
  },
  geographic: {
    label: 'Geographic',
    icon: MapPin,
    bgColor: 'bg-orange-50',
    color: 'text-orange-500 !border-orange-500',
  },
  temporal: {
    label: 'Time/Date',
    icon: Clock,
    bgColor: 'bg-purple-50',
    color: 'text-purple-500 !border-purple-500',
  },
} as const

export const CategoryPill = React.forwardRef<HTMLDivElement, CategoryPillProps>(
  ({ variant, className, children }, ref) => {
    const config = CATEGORY_CONFIG[variant]
    const Icon = config.icon

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center gap-1.5',
          'px-3 py-1.5',
          'rounded-full',
          'text-sm font-medium',
          'border',
          // Color styles
          config.bgColor,
          config.color,
          className
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
        <span>{children || config.label}</span>
      </div>
    )
  }
)

CategoryPill.displayName = 'CategoryPill'
