"use client"

/**
 * Apps Sidebar - Built from verified vacuum capture data
 *
 * Collections: All Collections, Apps (active), Starters, Content Models, Recipes
 * Categories (collapsed, showing first 5): A/B Testing, AI Assistance, Analytics, Artificial Intelligence, Automate
 * App Type: Stack App, Org App
 * App Features (8 items): Asset Sidebar, Content Type Sidebar, Custom Field, Entry Sidebar,
 *   Field Modifier, JSON RTE, Stack Dashboard, Stack Full Page
 */

const COLLECTIONS = [
  { label: "All Collections", active: false, href: "/marketplace-v5" },
  { label: "Apps", active: true, href: "/marketplace-v5/apps" },
  { label: "Starters", active: false, href: "/marketplace-v5/starters" },
  { label: "Content Models", active: false, href: "/marketplace-v5/content-models" },
  { label: "Recipes", active: false, href: "/marketplace-v5/recipes" },
]

// Only first 5 shown with "See More" collapsed
const CATEGORIES_VISIBLE = [
  "A/B Testing",
  "AI Assistance",
  "Analytics",
  "Artificial Intelligence",
  "Automate",
]

const APP_TYPES = ["Stack App", "Org App"]

const APP_FEATURES = [
  "Asset Sidebar",
  "Content Type Sidebar",
  "Custom Field",
  "Entry Sidebar",
  "Field Modifier",
  "JSON RTE",
  "Stack Dashboard",
  "Stack Full Page",
]

function ChevronIcon({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: 8, width: 12, color: 'rgb(34, 34, 34)', transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)' }}
    >
      <path d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="currentColor" />
    </svg>
  )
}

function CustomCheckbox() {
  return (
    <span
      style={{
        position: 'relative',
        width: 16,
        height: 16,
        minWidth: 16,
        backgroundColor: 'rgb(255, 255, 255)',
        border: '1.5px solid rgb(71, 81, 97)',
        borderRadius: 2,
        display: 'inline-block',
        flexShrink: 0,
      }}
    />
  )
}

function SectionHeader({ title, collapsed = false }: { title: string; collapsed?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        fontSize: 12,
        fontWeight: 600,
        color: 'rgb(34, 34, 34)',
        height: 40,
        textTransform: 'capitalize' as const,
        margin: '0 4px 0 0',
        padding: '0 10px',
        cursor: 'pointer',
        lineHeight: '12px',
        whiteSpace: 'nowrap' as const,
      }}
    >
      <span
        style={{
          color: 'rgb(71, 81, 97)',
          fontSize: 12,
          fontWeight: 600,
          lineHeight: '12px',
          textTransform: 'capitalize' as const,
        }}
      >
        {title}
      </span>
      <ChevronIcon collapsed={collapsed} />
    </div>
  )
}

function CheckboxItem({ label }: { label: string }) {
  return (
    <div style={{ margin: '0 0 10px' }}>
      <label
        style={{
          display: 'flex',
          position: 'relative' as const,
          alignItems: 'center',
          height: 24,
          padding: '0 10px',
          cursor: 'pointer',
          whiteSpace: 'nowrap' as const,
        }}
      >
        <CustomCheckbox />
        <span
          style={{
            paddingLeft: 10,
            color: 'rgb(71, 81, 97)',
            fontSize: 13,
            lineHeight: '24px',
            letterSpacing: '0.13px',
            whiteSpace: 'nowrap' as const,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {label}
        </span>
      </label>
    </div>
  )
}

export function AppsSidebar() {
  return (
    <aside
      style={{
        width: 240,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        background: '#F7F9FC',
        borderRight: '1px solid #DDE3EE',
        borderTop: '1px solid #DDE3EE',
        padding: '20px 0 15px',
        fontFamily: 'Inter, sans-serif',
        overflowY: 'auto' as const,
      }}
    >
      {/* Collections */}
      <div style={{ padding: '0 15px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 12,
            fontWeight: 600,
            color: 'rgb(34, 34, 34)',
            height: 56,
            textTransform: 'capitalize' as const,
            margin: '0 4px 0 0',
            padding: '0 10px',
            cursor: 'pointer',
            lineHeight: '12px',
            whiteSpace: 'nowrap' as const,
          }}
        >
          <span
            style={{
              color: 'rgb(71, 81, 97)',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '14px',
              textTransform: 'capitalize' as const,
            }}
          >
            Collections
          </span>
          <ChevronIcon />
        </div>
        <div>
          {COLLECTIONS.map((item) => (
            <div
              key={item.label}
              style={{
                color: item.active ? 'rgb(108, 92, 231)' : 'rgb(71, 81, 97)',
                display: 'flex',
                height: 40,
                margin: '5px 0',
                whiteSpace: 'nowrap' as const,
                cursor: 'pointer',
                alignItems: 'center',
              }}
            >
              {item.active && (
                <div style={{ backgroundColor: 'rgb(108, 92, 231)', width: 2, height: 40, borderRadius: '0 2px 2px 0' }} />
              )}
              <div
                style={{
                  padding: 12,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap' as const,
                  minHeight: 14,
                  fontSize: 16,
                  lineHeight: '16px',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 239, height: 1, margin: '11px 0 16px', borderTop: '1px solid rgb(221, 227, 238)' }} />

      {/* Categories (collapsed with See More) */}
      <div style={{ padding: '0 15px' }}>
        <SectionHeader title="categories" collapsed />
        <div style={{ padding: '0 10px' }}>
          {/* Search Categories input */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: 40,
                border: '1px solid rgb(185, 178, 233)',
                borderRadius: 4,
                padding: '0 12px',
                backgroundColor: '#fff',
              }}
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 16, width: 16, marginRight: 8, flexShrink: 0, color: 'rgb(100, 118, 150)' }}
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="currentColor" />
              </svg>
              <style>{`.mp-cat-search::placeholder { color: rgb(100, 118, 150); opacity: 1; }`}</style>
              <input
                type="text"
                placeholder="Search Categories"
                className="flex-1 outline-none border-none mp-cat-search"
                style={{
                  backgroundColor: 'transparent',
                  color: 'rgb(33, 33, 33)',
                  fontSize: 13,
                  height: 22,
                  letterSpacing: '0.13px',
                  lineHeight: '22px',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>
          </div>
          {CATEGORIES_VISIBLE.map((cat) => (
            <CheckboxItem key={cat} label={cat} />
          ))}
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'rgb(108, 92, 231)',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              padding: '5px 0',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            See More
          </button>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 239, height: 1, margin: '11px 0 16px', borderTop: '1px solid rgb(221, 227, 238)' }} />

      {/* App Type */}
      <div style={{ padding: '0 15px' }}>
        <SectionHeader title="App Type" />
        <div style={{ padding: '0 10px' }}>
          {APP_TYPES.map((type) => (
            <CheckboxItem key={type} label={type} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 239, height: 1, margin: '11px 0 16px', borderTop: '1px solid rgb(221, 227, 238)' }} />

      {/* App Features */}
      <div style={{ padding: '0 15px' }}>
        <SectionHeader title="App Features" />
        <div style={{ padding: '0 10px' }}>
          {APP_FEATURES.map((feature) => (
            <CheckboxItem key={feature} label={feature} />
          ))}
        </div>
      </div>
    </aside>
  )
}
