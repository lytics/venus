import { ReactNode } from "react"

interface MarketplaceSectionProps {
  title: string
  description: string
  viewAllLabel: string
  viewAllHref?: string
  children: ReactNode
}

export function MarketplaceSection({
  title,
  description,
  viewAllLabel,
  viewAllHref = "#",
  children,
}: MarketplaceSectionProps) {
  return (
    <section className="mb-10 px-6">
      {/* Title row: title + dashed divider + view all link */}
      <div className="flex items-center gap-4">
        <h3 className="text-[22px] font-semibold text-[#222] whitespace-nowrap leading-[28px]">
          {title}
        </h3>
        <div className="flex-1 border-t border-dashed border-[#DDE3EE]" />
        <a
          href={viewAllHref}
          className="text-sm text-[#6C5CE7] hover:underline whitespace-nowrap shrink-0"
        >
          {viewAllLabel}
        </a>
      </div>

      {/* Description */}
      <p className="mt-2 text-base leading-6 text-[#475161] max-w-[900px]">
        {description}
      </p>

      {/* Cards grid */}
      <div className="mt-5 grid grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  )
}
