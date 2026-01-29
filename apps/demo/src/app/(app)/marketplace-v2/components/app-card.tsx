import { ReactNode } from "react"

/* -------------------------------------------------------------------------- */
/*  Layers icon — small Contentstack-style stacked-layers SVG                 */
/* -------------------------------------------------------------------------- */
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 1L1 5l7 4 7-4-7-4z"
        fill="#8E96A3"
        stroke="#8E96A3"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M1 8l7 4 7-4"
        stroke="#8E96A3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 11l7 4 7-4"
        stroke="#8E96A3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Icon variant                                                               */
/* -------------------------------------------------------------------------- */

interface IconCardProps {
  variant: "icon"
  title: string
  /** Render one or more icons/images centred in the top area */
  icon: ReactNode
  subtitle?: string
  href?: string
}

function IconCard({ title, icon, subtitle, href }: IconCardProps) {
  const Wrapper = href ? "a" : "div"
  const linkProps = href ? { href } : {}

  return (
    <Wrapper
      {...linkProps}
      className="group flex flex-col border border-[#DDE3EE] rounded-lg overflow-hidden transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer"
    >
      {/* Top area — centred icon */}
      <div className="flex items-center justify-center h-[120px] bg-[#FAFBFC]">
        {icon}
      </div>

      {/* Bottom area */}
      <div className="px-3 py-2.5 border-t border-[#DDE3EE]">
        <p className="text-sm font-medium text-[#222] leading-5 truncate">
          {title}
        </p>
        {subtitle && (
          <span className="mt-0.5 flex items-center gap-1 text-xs text-[#8E96A3] leading-4">
            <LayersIcon />
            {subtitle}
          </span>
        )}
      </div>
    </Wrapper>
  )
}

/* -------------------------------------------------------------------------- */
/*  Banner variant                                                             */
/* -------------------------------------------------------------------------- */

interface BannerCardProps {
  variant: "banner"
  title: string
  /** URL for the banner image that covers the top area */
  bannerSrc: string
  bannerAlt?: string
  href?: string
}

function BannerCard({ title, bannerSrc, bannerAlt, href }: BannerCardProps) {
  const Wrapper = href ? "a" : "div"
  const linkProps = href ? { href } : {}

  return (
    <Wrapper
      {...linkProps}
      className="group flex flex-col border border-[#DDE3EE] rounded-lg overflow-hidden transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer"
    >
      {/* Top area — full-cover banner */}
      <div className="h-[160px] overflow-hidden">
        <img
          src={bannerSrc}
          alt={bannerAlt ?? title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom area */}
      <div className="px-4 py-3 border-t border-[#DDE3EE]">
        <p className="text-sm font-medium text-[#222] leading-5 truncate">
          {title}
        </p>
      </div>
    </Wrapper>
  )
}

/* -------------------------------------------------------------------------- */
/*  Unified export                                                             */
/* -------------------------------------------------------------------------- */

export type AppCardProps = IconCardProps | BannerCardProps

export function AppCard(props: AppCardProps) {
  if (props.variant === "banner") {
    return <BannerCard {...props} />
  }
  return <IconCard {...props} />
}
