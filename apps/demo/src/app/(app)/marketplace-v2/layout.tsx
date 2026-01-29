"use client"

import { ReactNode } from "react"
import { MarketplaceSidebar } from "./components/marketplace-sidebar"

export default function MarketplaceV2Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      <MarketplaceSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}
