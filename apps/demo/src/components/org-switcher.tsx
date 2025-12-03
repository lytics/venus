"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function OrgSwitcher() {
  const [activeOrg] = React.useState("Venus")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 h-8 px-3 min-w-24 hover:bg-accent/50">
          <span className="font-medium">{activeOrg}</span>
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-32">
        <DropdownMenuItem className="font-medium">
          {activeOrg}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
