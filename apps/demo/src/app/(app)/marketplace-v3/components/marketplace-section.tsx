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
    <section className="mb-10 px-[15px]">
      <div className="flex items-center gap-4">
        <h3 className="text-[22px] font-semibold text-[#222] whitespace-nowrap leading-[33px]">
          {title}
        </h3>
        <div className="flex-1 border-t border-dashed border-[#DDE3EE]" />
        <a href={viewAllHref} target="_blank" className="text-[14px] text-[#6C5CE7] hover:underline whitespace-nowrap shrink-0">
          {viewAllLabel}
        </a>
      </div>
      <p className="mt-2 ml-[15px] text-[14px] font-normal leading-[25px] text-[#475161] max-w-[828px]">
        {description}
      </p>
      <div className="flex flex-wrap">
        {children}
      </div>
    </section>
  )
}
