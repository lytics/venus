"use client"

import { ReactNode } from "react"

export default function MarketplaceV2Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      {/* Sidebar will be added in Task 2 */}
      <div className="w-[240px] shrink-0 bg-[#F7F9FC] border-r border-[#DDE3EE]" />
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}
