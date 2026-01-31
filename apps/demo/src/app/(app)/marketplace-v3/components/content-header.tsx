"use client"

export function ContentHeader() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        height: 90,
        padding: '0 20px 0 10px',
        backgroundColor: '#F7F9FC',
        borderTop: '1px solid #DDE3EE',
        borderBottom: '1px solid #DDE3EE',
        borderLeft: '1px solid #DDE3EE',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* PageHeader */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 32,
          paddingLeft: 7,
          position: 'relative' as const,
          whiteSpace: 'nowrap' as const,
          flex: '0 1 auto',
          width: '100%',
        }}
      >
        {/* PageTitle */}
        <h1
          style={{
            color: 'rgb(34, 34, 34)',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.2px',
            lineHeight: '30px',
          }}
        >
          All Collections
        </h1>

        {/* Build New App button */}
        <button
          className="cursor-pointer"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(108, 92, 231)',
            border: '1px solid transparent',
            borderRadius: 4,
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            height: 32,
            lineHeight: '14px',
            padding: '5px 16px',
            minHeight: 32,
            minWidth: 32,
            textAlign: 'center' as const,
            boxShadow: 'none',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap' as const,
            flexShrink: 0,
          }}
        >
          Build New App
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 8 }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="#fff" />
          </svg>
        </button>
      </div>
    </header>
  )
}
