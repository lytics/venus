import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { id: "overview", label: "Overview", active: false },
  { id: "tables", label: "Tables", active: true },
  { id: "indexes", label: "Indexes", active: false },
  { id: "models", label: "Models", active: false },
  { id: "query-builder", label: "Query Builder", active: false },
  { id: "settings", label: "Settings", active: false },
]

interface SidebarNavProps {
  className?: string
}

export function SidebarNav({ className }: SidebarNavProps) {
  return (
    <div className={cn("w-64 border-r bg-background", className)}>
      <div className="flex h-full flex-col">
        <div className="p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.id}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-9 px-3 font-normal text-sm",
                  item.active && "bg-muted font-medium"
                )}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
