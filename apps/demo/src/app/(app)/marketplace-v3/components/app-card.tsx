import { ReactNode } from "react"

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M8 1L1 5l7 4 7-4-7-4z" fill="#8E96A3" stroke="#8E96A3" strokeWidth="0.5" strokeLinejoin="round"/>
      <path d="M1 8l7 4 7-4" stroke="#8E96A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 11l7 4 7-4" stroke="#8E96A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

interface IconCardProps {
  variant: "icon"
  title: string
  icon: ReactNode
  subtitle?: string
}

function IconCard({ title, icon, subtitle }: IconCardProps) {
  return (
    <div
      className="flex cursor-pointer"
      style={{
        width: 320,
        height: 246,
        minWidth: 320,
        maxWidth: 320,
        margin: 15,
        border: '1px solid #DDE3EE',
        borderRadius: 4,
        backgroundColor: '#fff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div
          className="flex items-center justify-center"
          style={{
            width: '100%',
            height: 160,
            minWidth: 300,
            minHeight: 160,
            backgroundColor: '#F7F9FC',
            borderBottom: '1px solid #DDE3EE',
            borderRadius: 4,
          }}
        >
          {icon}
        </div>
        <div style={{ padding: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#212121', lineHeight: '24px', letterSpacing: '0.16px', textTransform: 'capitalize' as const, marginRight: 4 }}>
            {title}
          </p>
          {subtitle && (
            <span className="flex items-center" style={{ marginTop: 4, gap: 4, fontSize: 12, color: '#8E96A3', lineHeight: '16px' }}>
              <LayersIcon />
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

interface BannerCardProps {
  variant: "banner"
  title: string
  bannerSrc: string
  bannerAlt?: string
}

function BannerCard({ title, bannerSrc, bannerAlt }: BannerCardProps) {
  return (
    <div
      className="flex cursor-pointer"
      style={{
        width: 320,
        height: 246,
        minWidth: 320,
        maxWidth: 320,
        margin: 15,
        border: '1px solid #DDE3EE',
        borderRadius: 4,
        backgroundColor: '#fff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 160, overflow: 'hidden', borderRadius: 4 }}>
          <img src={bannerSrc} alt={bannerAlt ?? title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: 16, borderTop: '1px solid #DDE3EE' }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#212121', lineHeight: '24px', letterSpacing: '0.16px', textTransform: 'capitalize' as const }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export type AppCardProps = IconCardProps | BannerCardProps

export function AppCard(props: AppCardProps) {
  if (props.variant === "banner") return <BannerCard {...props} />
  return <IconCard {...props} />
}
