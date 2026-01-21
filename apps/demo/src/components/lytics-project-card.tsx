import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export interface LyticsProjectCardProps {
  /** Project title */
  title: string
  /** Organization name */
  organization: string
  /** Number of audiences */
  audiences: number
  /** Last sync timestamp */
  lastSync: string
  /** Optional click handler */
  onClick?: () => void
  /** Optional className */
  className?: string
}

export function LyticsProjectCard({
  title,
  organization,
  audiences,
  lastSync,
  onClick,
  className
}: LyticsProjectCardProps) {
  return (
    <Card
      className={cn(
        "border-default hover:border-hover transition-default cursor-pointer w-80 overflow-hidden p-0 gap-0 hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <div className="px-4 pt-4 pb-3">
        {/* Title */}
        <h3 className="text-base font-semibold text-title mb-6">
          {title}
        </h3>

        {/* Organization label */}
        <div className="flex items-center gap-1.5 mb-8">
          <Building2 className="h-3.5 w-3.5 text-[#697B9B]" />
          <span className="text-xs font-medium">
            <span className="text-[#697B9B]">Organization: </span>
            <span className="text-[#C2185B]">{organization}</span>
          </span>
        </div>

        {/* Stats section */}
        <div className="flex items-center justify-center mb-1.5">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#697B9B]" />
            <div>
              <p className="text-sm font-bold text-title">
                {audiences}
              </p>
              <p className="text-xs text-[#697B9B] font-medium">Audiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Last sync - light grey background as separate section */}
      <div className="flex items-center justify-end gap-1.5 bg-gray-100 px-4 py-4">
        <Clock className="h-4 w-4 text-[#697B9B]" />
        <span className="text-xs text-[color:var(--color-heading)] font-medium">
          Last Sync: {lastSync}
        </span>
      </div>
    </Card>
  )
}
