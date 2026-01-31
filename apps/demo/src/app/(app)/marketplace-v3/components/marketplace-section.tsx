import { ReactNode } from "react"

interface MarketplaceSectionProps {
  title: string
  description: string
  viewAllLabel: string
  viewAllHref?: string
  children: ReactNode
}

export function MarketplaceSection({ title, description, viewAllLabel, viewAllHref = "#", children }: MarketplaceSectionProps) {
  return (
    <section style={{ width: '100%', fontFamily: 'Inter, sans-serif' }}>
      {/* Header row inside padded wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column' as const, padding: '8px 16px', whiteSpace: 'nowrap' as const }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '20px 0 10px',
            height: 33,
          }}
        >
          <h4
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: 'rgb(34, 34, 34)',
              lineHeight: '33px',
              letterSpacing: '-0.00418px',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap' as const,
            }}
          >
            {title}
          </h4>
          <div style={{ borderTop: '1px dashed rgb(221, 227, 238)', height: 1, marginLeft: 15, flex: 1 }} />
          <a
            href={viewAllHref}
            target="_blank"
            style={{
              fontSize: 14,
              lineHeight: '14px',
              marginLeft: 15,
              color: 'rgb(108, 92, 231)',
              textDecoration: 'none',
              whiteSpace: 'nowrap' as const,
            }}
          >
            {viewAllLabel}
          </a>
        </div>
      </div>
      {/* Description at section level, outside padded wrapper — matches production .app-desc */}
      <div
        style={{
          color: 'rgb(71, 81, 97)',
          width: '60%',
          fontSize: 14,
          lineHeight: '25px',
          marginLeft: 15,
          whiteSpace: 'normal' as const,
        }}
      >
        {description}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
        {children}
      </div>
    </section>
  )
}
