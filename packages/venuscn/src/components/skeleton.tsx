import * as React from "react"
import { cn } from "../lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="skeleton"
        className={cn("bg-muted-foreground/10 animate-pulse rounded-[calc(var(--radius)-2px)]", className)}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"
