"use client"

import { ReactNode } from "react"
import { MarketplaceSidebar } from "./components/marketplace-sidebar"

export default function MarketplaceV3Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full" style={{ WebkitFontSmoothing: 'auto', position: 'relative' as const }}>
      <MarketplaceSidebar />
      {/* Collapse sidebar caret — absolutely positioned on sidebar/content border, outside scroll container */}
      <div
        className="cursor-pointer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          border: '1px solid rgb(108, 92, 231)',
          borderRadius: '50%',
          backgroundColor: 'rgb(221, 227, 238)',
          position: 'absolute' as const,
          top: 33, // vertically centered in 90px content header (45 - 12)
          left: 228, // sidebar width (240) minus half button (12)
          zIndex: 100,
        }}
        aria-label="Toggle sidebar"
      >
        <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161" />
        </svg>
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  )
}
