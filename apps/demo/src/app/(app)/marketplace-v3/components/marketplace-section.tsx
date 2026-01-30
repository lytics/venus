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
    <section style={{ marginBottom: 40, padding: '0 15px', fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center">
        <h4 style={{ fontSize: 22, fontWeight: 600, color: '#222', lineHeight: '33px', whiteSpace: 'nowrap' }}>
          {title}
        </h4>
        <div style={{ height: 1, marginLeft: 15, borderTop: '1px dashed #DDE3EE', flex: 1 }} />
        <a href={viewAllHref} target="_blank" style={{ fontSize: 14, color: '#6C5CE7', fontWeight: 400, whiteSpace: 'nowrap', marginLeft: 15, textDecoration: 'none' }}>
          {viewAllLabel}
        </a>
      </div>
      <p style={{ fontSize: 14, fontWeight: 400, color: '#475161', lineHeight: '25px', marginLeft: 15, maxWidth: 828, marginTop: 8 }}>
        {description}
      </p>
      <div className="flex flex-wrap items-stretch">
        {children}
      </div>
    </section>
  )
}
