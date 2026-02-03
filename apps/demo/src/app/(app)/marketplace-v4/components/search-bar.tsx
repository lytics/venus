"use client"

import { useState } from "react"

export function SearchBar() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60,
        padding: 12,
        borderBottom: '1px solid rgb(108, 92, 231)',
        fontFamily: 'Inter, sans-serif',
        WebkitFontSmoothing: 'auto' as any,
      }}
    >
      {/* Search input area */}
      <div style={{ display: 'flex', position: 'relative' as const, alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            padding: '8px 16px',
            border: '1px solid rgb(108, 92, 231)',
            borderRadius: 4,
          }}
        >
          <input
            type="text"
            placeholder="Search apps, starters, and more..."
            style={{
              color: 'rgb(33, 33, 33)',
              display: 'block',
              width: 350,
              height: 22,
              padding: 0,
              border: 'none',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Search button */}
        <button
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display: 'block',
            position: 'relative' as const,
            height: 40,
            padding: '8px 16px',
            border: '1px solid transparent',
            borderRadius: 4,
            backgroundColor: btnHovered ? 'rgb(93, 80, 190)' : 'rgb(108, 92, 231)',
            color: 'rgb(255, 255, 255)',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '14px',
            marginLeft: 4,
            transition: 'background-color 0.15s ease-in-out',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', overflow: 'hidden', marginRight: 4 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 3a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM1 8.5a7.5 7.5 0 1113.307 4.746l4.473 4.474a1 1 0 01-1.414 1.414l-4.474-4.473A7.5 7.5 0 011 8.5z"
                  fill="currentColor"
                />
              </svg>
              Search
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
