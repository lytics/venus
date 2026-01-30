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
    <div className="flex flex-col w-[320px] h-[246px] m-[15px] border border-[#DDE3EE] rounded-[4px] overflow-hidden cursor-pointer hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div className="flex items-center justify-center h-[160px] rounded-[4px]">
        {icon}
      </div>
      <div className="p-4 border-t border-[#DDE3EE]">
        <p className="text-[16px] font-semibold text-[#212121] leading-[24px] truncate">{title}</p>
        {subtitle && (
          <span className="mt-1 flex items-center gap-1 text-[12px] text-[#8E96A3] leading-[16px]">
            <LayersIcon />
            {subtitle}
          </span>
        )}
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
    <div className="flex flex-col w-[320px] h-[246px] m-[15px] border border-[#DDE3EE] rounded-[4px] overflow-hidden cursor-pointer hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div className="h-[160px] overflow-hidden">
        <img src={bannerSrc} alt={bannerAlt ?? title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 border-t border-[#DDE3EE]">
        <p className="text-[16px] font-semibold text-[#212121] leading-[24px] truncate">{title}</p>
      </div>
    </div>
  )
}

export type AppCardProps = IconCardProps | BannerCardProps

export function AppCard(props: AppCardProps) {
  if (props.variant === "banner") return <BannerCard {...props} />
  return <IconCard {...props} />
}
