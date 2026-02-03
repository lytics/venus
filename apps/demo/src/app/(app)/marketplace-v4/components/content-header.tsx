"use client"

import { useState } from "react"

export function ContentHeader() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 90,
        paddingRight: 20,
        paddingLeft: 10,
        borderTop: '1px solid rgb(221, 227, 238)',
        borderBottom: '1px solid rgb(221, 227, 238)',
        borderLeft: '1px solid rgb(221, 227, 238)',
        backgroundColor: 'rgb(247, 249, 252)',
        fontFamily: 'Inter, sans-serif',
        WebkitFontSmoothing: 'auto' as any,
      }}
    >
      {/* Page Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 32,
          paddingLeft: 7,
        }}
      >
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              color: 'rgb(34, 34, 34)',
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '30px',
              letterSpacing: '0.2px',
            }}
          >
            All Collections
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: 'block',
              position: 'relative' as const,
              minWidth: 32,
              minHeight: 32,
              maxHeight: 32,
              padding: '5px 16px',
              border: '1px solid transparent',
              borderRadius: 4,
              backgroundColor: btnHovered ? 'rgb(93, 80, 190)' : 'rgb(108, 92, 231)',
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '14px',
              textAlign: 'center' as const,
              fontFamily: 'Inter, sans-serif',
              transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Build New App
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: 8, display: 'block', overflow: 'hidden' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
