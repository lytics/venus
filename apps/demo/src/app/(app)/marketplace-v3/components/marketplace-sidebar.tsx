"use client"

const COLLECTIONS = [
  { label: "All Collections", active: true },
  { label: "Apps", active: false },
  { label: "Starters", active: false },
  { label: "Content Models", active: false },
  { label: "Recipes", active: false },
]

const CATEGORIES = [
  "A/B Testing", "AI Assistance", "Analytics", "Artificial Intelligence",
  "Automate", "Automations", "Commerce", "Communication",
  "Content Management", "DAM", "Data Integration", "Developer Tools",
  "E-Commerce", "Email", "Frontend Framework",
]

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="#647696" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="#475161" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="#475161" />
    </svg>
  )
}

export function MarketplaceSidebar() {
  return (
    <aside
      className="shrink-0 flex flex-col"
      style={{
        width: 240,
        background: '#F7F9FC',
        borderRight: '1px solid #DDE3EE',
        borderTop: '1px solid #DDE3EE',
        padding: '20px 0 15px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Collections */}
      <div>
        <div className="flex items-center justify-between cursor-pointer" style={{ padding: '0 15px', marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#475161', lineHeight: '14px', textTransform: 'capitalize' as const }}>
            Collections
          </span>
          <ChevronIcon className="rotate-180" />
        </div>
        <div className="flex flex-col" style={{ gap: 0 }}>
          {COLLECTIONS.map((item) => (
            <div
              key={item.label}
              className="flex items-center cursor-pointer"
              style={{
                height: 40,
                margin: '5px 0',
                color: item.active ? '#6C5CE7' : '#475161',
                fontSize: 16,
                fontWeight: 400,
                lineHeight: '16px',
              }}
            >
              {item.active && (
                <div style={{ width: 2, height: 40, backgroundColor: '#6C5CE7', borderRadius: '0 2px 2px 0' }} />
              )}
              <div style={{ padding: 12, minHeight: 14 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, margin: '16px 0', backgroundColor: '#DDE3EE' }} />

      {/* Categories */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between cursor-pointer" style={{ padding: '0 15px', marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#475161', lineHeight: '14px', textTransform: 'capitalize' as const }}>
            Categories
          </span>
          <ChevronIcon className="rotate-180" />
        </div>

        {/* Search */}
        <div style={{ padding: '0 10px 15px' }}>
          <div className="flex items-center" style={{ height: 40, border: '1px solid #DDE3EE', borderRadius: 4, padding: '2px 8px', backgroundColor: '#fff' }}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Categories"
              className="flex-1 outline-none border-none bg-transparent"
              style={{ fontSize: 14, color: '#475161', marginLeft: 8, fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Checkbox list */}
        <ul className="flex flex-col overflow-y-auto" style={{ gap: 0, padding: 0, margin: 0, listStyle: 'none' }}>
          {CATEGORIES.map((cat) => (
            <li key={cat} className="flex items-center cursor-pointer" style={{ height: 40, padding: '10px 14px', fontSize: 14, color: '#475161', lineHeight: '20px', fontFamily: 'Inter, sans-serif' }}>
              <input type="checkbox" style={{ width: 16, height: 16, accentColor: '#6C5CE7', marginRight: 10, cursor: 'pointer' }} />
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
