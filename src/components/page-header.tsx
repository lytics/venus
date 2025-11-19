import * as React from "react"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  showBackButton?: boolean
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ 
  title, 
  showBackButton = false, 
  className,
  children 
}: PageHeaderProps) {
  return (
    <div className={cn("bg-background", className)}>
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        {children && (
          <div className="ml-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
