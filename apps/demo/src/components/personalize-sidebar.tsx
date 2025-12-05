'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SidebarItem {
  id: string
  label: string
  href: string
  iconDefault: string
  iconHover: string
  iconActive: string
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'experiences',
    label: 'Experiences',
    href: '/personalize/experiences',
    iconDefault: '/icons/personalize/personalize-experiences-default.svg',
    iconHover: '/icons/personalize/personalize-experiences-hover.svg',
    iconActive: '/icons/personalize/personalize-experiences-active.svg'
  },
  {
    id: 'audiences',
    label: 'Audiences',
    href: '/personalize/targeting-rules',
    iconDefault: '/icons/personalize/personalize-audiences-default.svg',
    iconHover: '/icons/personalize/personalize-audiences-hover.svg',
    iconActive: '/icons/personalize/personalize-audiences-active.svg'
  },
  {
    id: 'attributes',
    label: 'Attributes',
    href: '/personalize/attributes',
    iconDefault: '/icons/personalize/personalize-attributes-default.svg',
    iconHover: '/icons/personalize/personalize-attributes-hover.svg',
    iconActive: '/icons/personalize/personalize-attributes-active.svg'
  },
  {
    id: 'events',
    label: 'Events',
    href: '', // Empty href makes it non-clickable
    iconDefault: '/icons/personalize/personalize-events-default.svg',
    iconHover: '/icons/personalize/personalize-events-hover.svg',
    iconActive: '/icons/personalize/personalize-events-active.svg'
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '', // Empty href makes it non-clickable
    iconDefault: '/icons/personalize/personalize-settings-default.svg',
    iconHover: '/icons/personalize/personalize-settings-default.svg',
    iconActive: '/icons/personalize/personalize-settings-active.svg'
  }
]

export function PersonalizeSidebar() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  return (
    <div className="w-16 bg-white border-t border-r border-gray-200 flex flex-col items-center py-6 gap-4 sticky top-0 self-start h-full">
      {sidebarItems.map((item) => {
        const isActive = item.href && pathname.startsWith(item.href)
        const isHovered = hoveredItem === item.id

        // Determine which icon to show
        let iconSrc = item.iconDefault
        if (isActive) {
          iconSrc = item.iconActive
        } else if (isHovered) {
          iconSrc = item.iconHover
        }

        const content = (
          <img
            src={iconSrc}
            alt={item.label}
            className="w-8 h-8"
          />
        )

        // If no href, render as button (looks normal but doesn't navigate)
        if (!item.href) {
          return (
            <button
              key={item.id}
              className={cn(
                'flex items-center justify-center p-2 transition-colors rounded-lg cursor-pointer',
                // TODO: Add --color-surface-light-gray token for #F5F6F8
                isActive && 'bg-[#F5F6F8]'
              )}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={(e) => {
                e.preventDefault()
                // Do nothing - no navigation
              }}
            >
              {content}
            </button>
          )
        }

        // Otherwise render as clickable link
        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center justify-center p-2 transition-colors rounded-lg',
              // TODO: Add --color-surface-light-gray token for #F5F6F8
              isActive && 'bg-[#F5F6F8]'
            )}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {content}
          </Link>
        )
      })}
    </div>
  )
}
