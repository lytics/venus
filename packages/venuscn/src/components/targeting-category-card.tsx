'use client'

import * as React from 'react'
import { Users, Smartphone, MapPin, Clock, LucideIcon } from 'lucide-react'
import { cn } from '../lib/utils'
import { CategoryVariant } from './category-pill'

/** Venus Design System Targeting Category Card Component */

export interface TargetingCategoryCardProps {
  /** The category variant which determines color and default icon */
  variant: CategoryVariant
  /** The main title (e.g., "Who", "How", "Where", "When") */
  title: string
  /** The subtitle (e.g., "Audience", "Device & Context") */
  subtitle: string
  /** Optional custom icon to override default */
  icon?: LucideIcon
  /** Optional custom className */
  className?: string
}

const CATEGORY_CONFIG = {
  audience: {
    icon: Users,
    iconBgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    textColor: 'text-blue-600',
  },
  device: {
    icon: Smartphone,
    iconBgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    textColor: 'text-green-600',
  },
  geographic: {
    icon: MapPin,
    iconBgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    textColor: 'text-orange-600',
  },
  temporal: {
    icon: Clock,
    iconBgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    textColor: 'text-purple-600',
  },
} as const

export const TargetingCategoryCard = React.forwardRef<HTMLDivElement, TargetingCategoryCardProps>(
  ({ variant, title, subtitle, icon, className }, ref) => {
    const config = CATEGORY_CONFIG[variant]
    const Icon = icon || config.icon

    return (
      <div
        ref={ref}
        className={cn(
          // Base card styles
          'flex items-center gap-3',
          'p-4',
          'rounded-lg',
          'border border-gray-200',
          'bg-white',
          // Hover states
          'hover:border-gray-300 hover:shadow-sm',
          'transition-all duration-150',
          className
        )}
      >
        {/* Icon Container */}
        <div
          className={cn(
            'flex-shrink-0',
            'w-10 h-10',
            'rounded-lg',
            'flex items-center justify-center',
            'ring-1 ring-black/5',
            config.iconBgColor
          )}
        >
          <Icon className={cn('h-5 w-5', config.iconColor)} strokeWidth={2.5} />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <p className={cn('text-sm font-medium', config.textColor)}>{subtitle}</p>
        </div>
      </div>
    )
  }
)

TargetingCategoryCard.displayName = 'TargetingCategoryCard'
