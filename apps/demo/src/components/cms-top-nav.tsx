'use client'

import * as React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { GitBranch } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface CMSTopNavProps {
  stackName: string
  branch?: string
}

export function CMSTopNav({ stackName, branch = 'main' }: CMSTopNavProps) {
  const router = useRouter()
  const pathname = usePathname()

  // Get the stack slug from the pathname (e.g., /stacks/compass-starter -> compass-starter)
  const stackSlug = pathname.split('/')[2] || ''

  const handleStackClick = () => {
    router.push(`/stacks/${stackSlug}`)
  }

  // Determine the parent section based on pathname
  const getParentSection = () => {
    const pathParts = pathname.split('/').filter(Boolean)

    // If we're deeper than /stacks/[stackName], show intermediate breadcrumb
    if (pathParts.length > 2) {
      const section = pathParts[2]
      if (section === 'blank') return { label: 'Dashboard', href: `/stacks/${stackSlug}` }
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
                onClick={handleStackClick}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity text-[color:var(--color-heading)]"
              >
                <Image
                  src="/images/organization.svg"
                  alt="Stack"
                  width={16}
                  height={16}
                />
                <span className="capitalize">{stackName}</span>
              </button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <div className="flex items-center gap-1.5 text-[color:var(--color-heading)]">
              <GitBranch className="h-3.5 w-3.5" />
              <span>{branch}</span>
            </div>
          </BreadcrumbItem>
          {parentSection && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <button
                    onClick={() => router.push(parentSection.href)}
                    className="text-[color:var(--color-heading)] hover:opacity-80 transition-opacity"
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
