import * as React from "react"
import { Building2, GitBranch } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

interface CMSBreadcrumbProps {
  stackName: string
  branch?: string
}

export function CMSBreadcrumb({ stackName, branch = "main" }: CMSBreadcrumbProps) {
  return (
    <div className="h-8 px-7 bg-[#F1F6FF] border-b border-gray-200 flex items-center">
      <Breadcrumb>
        <BreadcrumbList className="text-xs text-[color:var(--color-heading)]">
          <BreadcrumbItem>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <BreadcrumbPage>{stackName}</BreadcrumbPage>
            </div>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" />
              <BreadcrumbPage>{branch}</BreadcrumbPage>
            </div>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
