import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Clock, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export interface StackCardProps {
  /** Stack name */
  name: string
  /** Branch name */
  branch: string
  /** Number of environments */
  envCount?: number
  /** Modified date */
  modifiedDate: string
  /** Optional click handler */
  onClick?: () => void
  /** Optional className */
  className?: string
}

export function StackCard({
  name,
  branch,
  envCount,
  modifiedDate,
  onClick,
  className
}: StackCardProps) {
  return (
    <Card
      className={cn(
        "border-default hover:border-primary transition-default cursor-pointer w-80 overflow-hidden p-0 gap-0 hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <div className="px-4 pt-4 pb-3">
        {/* Stack name */}
        <h3 className="text-base font-semibold text-title mb-6">
          {name}
        </h3>

        {/* Branch info */}
        <div className="flex items-center gap-1.5 mb-8">
          <GitBranch className="h-3.5 w-3.5 text-[#697B9B]" />
          <span className="text-xs font-medium">
            <span className="text-[#697B9B]">Branch: </span>
            <span className="text-[#C2185B]">{branch}</span>
          </span>
        </div>

        {/* Environment count */}
        {envCount !== undefined && (
          <div className="flex items-center gap-2 mb-1.5">
            <Layers className="h-4 w-4 text-[#697B9B]" />
            <div>
              <p className="text-sm font-bold text-title">
                {envCount}
              </p>
              <p className="text-xs text-[#697B9B] font-medium">Environments</p>
            </div>
          </div>
        )}
      </div>

      {/* Date - light grey background as separate section */}
      <div className="flex items-center justify-end gap-1.5 bg-gray-100 px-4 py-4">
        <Clock className="h-4 w-4 text-[#697B9B]" />
        <span className="text-xs text-[color:var(--color-heading)] font-medium">{modifiedDate}</span>
      </div>
    </Card>
  )
}
