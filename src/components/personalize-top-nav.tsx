'use client'

import * as React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb'

export function PersonalizeTopNav() {
  const router = useRouter()
  const pathname = usePathname()

  const handleOrgClick = () => {
    router.push('/personalize')
  }

  // Determine the parent section (one level back) based on pathname
  const getParentSection = () => {
    // Only show parent section if we're on a detail/form page (deeper than the listing page)
    const pathParts = pathname.split('/').filter(Boolean)

    // If we're at /personalize/[section]/[something], show the section
    if (pathParts.length > 2) {
      const section = pathParts[1]
      if (section === 'attributes') return { label: 'Attributes', href: '/personalize/attributes' }
      if (section === 'experiences') return { label: 'Experiences', href: '/personalize/experiences' }
      if (section === 'targets') return { label: 'Targets', href: '/personalize/targets' }
    }

    return null
  }

  const parentSection = getParentSection()

  return (
    <div className="bg-[#F1F6FF] px-7 h-8 flex items-center border-b border-gray-200">
      <Breadcrumb>
        <BreadcrumbList className="text-xs">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <button
                onClick={handleOrgClick}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity text-[#475161]"
              >
                <Image
                  src="/images/organization.svg"
                  alt="Organization"
                  width={16}
                  height={16}
                />
                <span>Ford</span>
              </button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {parentSection && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <button
                    onClick={() => router.push(parentSection.href)}
                    className="text-[#475161] hover:opacity-80 transition-opacity"
                  >
                    {parentSection.label}
                  </button>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
