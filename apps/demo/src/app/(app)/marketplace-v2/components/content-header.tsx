"use client"

import { ChevronLeft, Search, ExternalLink } from "lucide-react"

export function ContentHeader() {
  return (
    <header className="flex items-center gap-3 h-[56px] shrink-0 bg-[#F7F9FC] border-b border-[#DDE3EE] px-4">
      {/* Back button */}
      <button
        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7]/5 transition-colors duration-150 cursor-pointer"
        aria-label="Go back"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Title */}
      <h1 className="text-base font-semibold text-[#222] whitespace-nowrap">
        All Collections
      </h1>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search bar */}
      <div className="flex max-w-[500px] w-full">
        <input
          type="text"
          placeholder="Search in All Collections"
          className="flex-1 h-9 px-3 text-sm text-[#475161] placeholder-[#8E99A4] bg-white border border-r-0 border-[#DDE3EE] rounded-l-md outline-none focus:border-[#6C5CE7] transition-colors duration-150"
        />
        <button className="flex items-center gap-1.5 h-9 px-4 bg-[#6C5CE7] text-white text-sm font-medium rounded-r-md hover:bg-[#5A4BD1] transition-colors duration-150 cursor-pointer whitespace-nowrap">
          <Search size={14} />
          Search
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Build New App button */}
      <button className="flex items-center gap-1.5 h-9 px-4 bg-[#6C5CE7] text-white text-sm font-medium rounded-md hover:bg-[#5A4BD1] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0">
        Build New App
        <ExternalLink size={14} />
      </button>
    </header>
  )
}
