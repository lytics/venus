"use client"

import { ReactNode } from "react"

/**
 * Marketplace V5 Layout - Just a passthrough
 * Each page handles its own sidebar to allow different sidebars per route
 */
export default function MarketplaceV5Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
