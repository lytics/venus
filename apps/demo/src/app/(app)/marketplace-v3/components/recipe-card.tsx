import { ReactNode } from "react"

const styles = `
.mp-recipe-card {
  background-color: #fff;
  border: 1px solid rgb(221, 227, 238);
  border-radius: 4px;
  width: 320px;
  height: 220px;
  overflow: hidden;
  margin: 15px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  transition: 0.3s ease-in-out;
}
.mp-recipe-card:hover {
  box-shadow: rgba(34, 34, 34, 0.1) 0px 8px 20px;
}
.mp-recipe-card .mp-recipe-body {
  margin-top: 1px;
  background-color: rgb(255, 255, 255);
}
.mp-recipe-card:hover .mp-recipe-body {
  margin-top: -100px;
  position: relative;
  transition: 0.15s ease-in-out;
  border-top: 1px solid rgb(221, 227, 238);
  background-color: rgb(255, 255, 255);
}
.mp-recipe-card .mp-recipe-link-icon {
  display: none;
}
.mp-recipe-card:hover .mp-recipe-link-icon {
  display: block !important;
}
`

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M18 4l-4.5 4.5 1.414 1.414L18 6.828a4 4 0 015.657 5.657l-3.086 3.086 1.415 1.414L25 13.9a6 6 0 00-7-9.9z" fill="#647696"/>
      <path d="M14 28l4.5-4.5-1.414-1.414L14 25.172a4 4 0 01-5.657-5.657l3.086-3.086L10 15.015 7 18.1a6 6 0 007 9.9z" fill="#647696"/>
      <path d="M20.586 10L10 20.586l1.414 1.414L22 11.414 20.586 10z" fill="#647696"/>
    </svg>
  )
}

function ImportIcon() {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
      <g fill="#fff">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.848 2.253C9.85 2.808 8.05 5.547 7.878 8.46H5.31a.594.594 0 0 0-.412 1.021l4.56 4.397a.781.781 0 0 0 1.084 0l4.56-4.397a.594.594 0 0 0-.412-1.021h-2.555V5.2c0-.978.697-1.817 1.657-1.997l1.294-.242A.469.469 0 0 0 15 2.03c-.687 0-1.424.088-2.152.222Z"/>
        <path d="M4.375 16.25a.625.625 0 1 1 0-1.25h11.25a.625.625 0 1 1 0 1.25H4.375Z"/>
      </g>
    </svg>
  )
}

interface RecipeCardProps {
  title: string
  icon: ReactNode
  description?: string
}

export function RecipeCard({ title, icon, description }: RecipeCardProps) {
  return (
    <>
      <style>{styles}</style>
      <div className="mp-recipe-card">
        <div style={{ width: '100%' }}>
          {/* Cover area with dual icons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(247, 249, 252)',
              height: 160,
              borderBottom: '1px solid rgb(221, 227, 238)',
            }}
          >
            {icon}
          </div>

          {/* Body — slides up -100px on hover (same rollup as Apps cards) */}
          <div className="mp-recipe-body" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', height: 24, marginBottom: 12 }}>
              <h2
                style={{
                  color: 'rgb(33, 33, 33)', fontSize: 16, fontWeight: 600,
                  lineHeight: '24px', marginRight: 4,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const,
                  maxWidth: 260,
                }}
              >
                {title}
              </h2>
              <span className="mp-recipe-link-icon"><LinkIcon /></span>
            </div>
            {description && (
              <p style={{ fontSize: 14, lineHeight: '21px', color: 'rgb(71, 81, 97)', height: 44, overflow: 'hidden' }}>
                {description}
              </p>
            )}
          </div>

          {/* Footer with Import button */}
          <div style={{ padding: '0 16px 16px', height: 48 }}>
            <button
              className="cursor-pointer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'rgb(108, 92, 231)', border: '1px solid transparent',
                borderRadius: 4, color: '#fff', fontSize: 14, fontWeight: 600,
                height: 32, lineHeight: '14px', padding: '5px 16px',
                fontFamily: 'Inter, sans-serif', textAlign: 'center' as const,
              }}
            >
              <ImportIcon />
              Import
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
