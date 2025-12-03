import * as React from "react"
import { ContentstackLogo } from "@/components/contentstack-logo"

interface VenusLogoProps {
  size?: number
  className?: string
}

export function VenusLogo({
  size = 24,
  className,
}: VenusLogoProps) {
  return (
    <ContentstackLogo
      size={size}
      className={className}
      mode="full"
    />
  )
}
