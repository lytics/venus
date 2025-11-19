"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectConfig } from "@/project.config"

export function ProjectBakedCard() {
  const [dismissed, setDismissed] = React.useState(false)

  // Load dismissed state from localStorage on mount
  // Use project-specific key to prevent cross-project persistence
  React.useEffect(() => {
    const storageKey = `project-baked-dismissed-${projectConfig.name}`
    const isDismissed = localStorage.getItem(storageKey) === "true"
    setDismissed(isDismissed)
  }, [])

  const handleDismiss = () => {
    const storageKey = `project-baked-dismissed-${projectConfig.name}`
    localStorage.setItem(storageKey, "true")
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <Card className="border-green-500/50 bg-green-500/10">
      <CardContent className="px-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-green-900 dark:text-green-100">
              Project Successfully Baked!
            </h3>
            <p className="text-sm text-green-800/90 dark:text-green-200/90">
              Your project configuration has been locked and template code removed.
              You're ready to build your application!
            </p>
            <p className="text-xs text-green-800/80 dark:text-green-200/80 mt-2">
              If nav colors look incorrect, restart the dev server: <code className="px-1 py-0.5 rounded bg-green-600/20 font-mono">Ctrl+C</code> then <code className="px-1 py-0.5 rounded bg-green-600/20 font-mono">npm run dev</code>
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 -mt-1 -mr-2 text-green-800 hover:text-green-900 dark:text-green-200 dark:hover:text-green-100 hover:bg-green-500/20"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
