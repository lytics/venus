'use client'

import { use } from 'react'
import { CMSTopNav } from '@/components/cms-top-nav'

export default function StackLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ stackName: string }>
}) {
  // Unwrap the async params
  const { stackName: rawStackName } = use(params)

  // Decode the stack name from URL
  const stackName = decodeURIComponent(rawStackName).replace(/-/g, ' ')

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      <CMSTopNav stackName={stackName} />
      <div className="flex-1 overflow-auto bg-[#F5F6F8]">
        {children}
      </div>
    </div>
  )
}
