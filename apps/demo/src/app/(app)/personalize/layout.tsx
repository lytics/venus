'use client'

import { usePathname } from 'next/navigation'
import { PersonalizeTopNav } from '@/components/personalize-top-nav'

export default function PersonalizeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showTopNav = pathname !== '/personalize'

  // Detect if this is a form page (new/edit) that needs to scroll
  const isFormPage = pathname.includes('/new') || pathname.includes('/edit')

  if (!showTopNav) {
    return <>{children}</>
  }

  // Form pages need normal scrolling - create fixed height container with scrolling content
  if (isFormPage) {
    return (
      <div className="flex flex-col h-[calc(100vh-56px)] overflow-hidden">
        <PersonalizeTopNav />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    )
  }

  // List pages use overflow-hidden for fixed table layout
  return (
    <div className="flex flex-col h-[calc(100vh-56px)] overflow-hidden">
      <PersonalizeTopNav />
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
