import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Layers3, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProjectCardProps {
  /** Project title */
  title: string
  /** Stack name (e.g., "Ford Pro") */
  stackName: string
  /** Number of active experiences */
  activeExperiences: number
  /** Number of audiences */
  audiences: number
  /** Project date */
  date: string
  /** Optional click handler */
  onClick?: () => void
  /** Optional className */
  className?: string
}

export function ProjectCard({
  title,
  stackName,
  activeExperiences,
  audiences,
  date,
  onClick,
  className
}: ProjectCardProps) {
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

        {/* Stack label */}
        <div className="flex items-center gap-1.5 mb-8">
          <Layers3 className="h-3.5 w-3.5 text-[#697B9B]" />
          <span className="text-xs font-medium">
            <span className="text-[#697B9B]">Stack: </span>
            <span className="text-[#C2185B]">{stackName}</span>
          </span>
        </div>

        {/* Stats section */}
        <div className="flex items-center divide-x divide-gray-200 mb-1.5">
          <div className="flex-1 pr-4 text-center">
            <p className="text-sm font-bold text-title mb-1">
              {activeExperiences}
            </p>
            <p className="text-xs text-[#697B9B] font-medium">Active Experiences</p>
          </div>
          <div className="flex-1 pl-4 text-center">
            <p className="text-sm font-bold text-title mb-1">
              {audiences}
            </p>
            <p className="text-xs text-[#697B9B] font-medium">Audiences</p>
          </div>
        </div>
      </div>

      {/* Date - light grey background as separate section */}
      <div className="flex items-center justify-end gap-1.5 bg-gray-100 px-4 py-4">
        <Clock className="h-4 w-4 text-[#697B9B]" />
        <span className="text-xs text-[#475161] font-medium">{date}</span>
      </div>
    </Card>
  )
}
