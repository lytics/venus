import * as React from "react"
import { cn } from "@/lib/utils"
import { ContentstackLogo } from "@/components/contentstack-logo"

interface AppLogoProps {
  size?: number
  className?: string
  collapsed?: boolean  // For sidebar collapsed state
}

export function AppLogo({
  size = 24,
  className,
  collapsed = false,
}: AppLogoProps) {
  // Logo configuration
  const expanded = {
    mode: "full-logo" as "icon-only" | "icon-with-name" | "full-logo",
    fullLogoPath: "/logo-full.svg",
    textClassName: "font-bold text-lg"
  }

  // In collapsed state or small spaces, always show icon only
  if (collapsed) {
    return (
      <ContentstackLogo
        size={size}
        className={cn("shrink-0", className)}
        mode="icon-only"
      />
    )
  }

  // Expanded state - use expanded.mode setting
  switch (expanded.mode) {
    case "icon-only":
      return (
        <ContentstackLogo
          size={size}
          className={cn("shrink-0", className)}
          mode="icon-only"
        />
      )

    case "icon-with-name":
      return (
        <div className={cn("flex items-center gap-2", className)}>
          <ContentstackLogo
            size={size}
            className="shrink-0"
            mode="icon-only"
          />
          <span className={expanded.textClassName}>
            Venus
          </span>
        </div>
      )

    case "full-logo":
      return (
        <ContentstackLogo
          size={size}
          className={cn("shrink-0", className)}
          mode="full"
        />
      )

    default:
      return null
  }
}
