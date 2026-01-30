"use client"

export function ContentHeader() {
  return (
    <header
      className="flex items-center shrink-0"
      style={{
        height: 90,
        padding: '0 20px 0 10px',
        backgroundColor: '#F7F9FC',
        borderTop: '1px solid #DDE3EE',
        borderBottom: '1px solid #DDE3EE',
        borderLeft: '1px solid #DDE3EE',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Collapse sidebar caret */}
      <button className="flex items-center justify-center cursor-pointer shrink-0" style={{ width: 32, height: 32, background: 'none', border: 'none', padding: 0 }} aria-label="Toggle sidebar">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161" />
        </svg>
      </button>

      {/* Title */}
      <h1 style={{ fontSize: 20, fontWeight: 600, color: '#222', lineHeight: '30px', whiteSpace: 'nowrap', marginLeft: 8 }}>
        All Collections
      </h1>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Build New App button */}
      <button
        className="flex items-center cursor-pointer shrink-0 whitespace-nowrap"
        style={{
          height: 28,
          padding: '4px 12px',
          backgroundColor: '#6C5CE7',
          color: '#fff',
          fontSize: 12,
          fontWeight: 500,
          lineHeight: '18px',
          letterSpacing: '0.24px',
          borderRadius: 4,
          border: '1px solid transparent',
          gap: 6,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Build New App
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="#647696" />
        </svg>
      </button>
    </header>
  )
}
