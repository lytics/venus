"use client"

import * as React from "react"
import { CMSTopNav } from "@/components/cms-top-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CMSNavigationDemo() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-title mb-2">CMS Navigation Components</h1>
        <p className="text-body">
          Production-ready navigation components for the Contentstack CMS interface.
        </p>
      </div>

      {/* CMSTopNav Demo */}
      <Card>
        <CardHeader>
          <CardTitle>CMSTopNav (Blue Breadcrumb Bar)</CardTitle>
          <CardDescription>
            Light blue breadcrumb bar showing stack name and branch. Similar to PersonalizeTopNav.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <CMSTopNav stackName="Compass Starter" branch="main" />
          </div>

          <div className="mt-4">
            <div className="border rounded-lg overflow-hidden">
              <CMSTopNav stackName="Production Stack" branch="develop" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-sm">Features:</h3>
            <ul className="text-sm text-body space-y-1 ml-4 list-disc">
              <li>32px height bar with light blue background (#F1F6FF)</li>
              <li>Stack icon + name (clickable, navigates to stack dashboard)</li>
              <li>Branch icon + branch name (pink colored)</li>
              <li>Breadcrumb pattern matching personalize section</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Combined Example */}
      <Card>
        <CardHeader>
          <CardTitle>In Layout Context</CardTitle>
          <CardDescription>
            Example of CMSTopNav in a typical CMS layout. The product logo and nav items are in the global TopNav.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <CMSTopNav stackName="Compass Starter" branch="main" />
            <div className="p-6 bg-[#F5F6F8] min-h-[200px]">
              <p className="text-sm text-body">
                Page content would go here...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Import and use these components in your CMS layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm mb-2">Import:</h3>
              <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto">
{`import { CMSTopNav } from "@/components/cms-top-nav"`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Basic Usage:</h3>
              <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto">
{`<CMSTopNav stackName="My Stack" branch="main" />`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Props:</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs font-semibold">CMSTopNav</p>
                  <ul className="text-xs text-body space-y-1 ml-4 mt-1">
                    <li><code className="bg-gray-100 px-1">stackName</code> - Name of the current stack</li>
                    <li><code className="bg-gray-100 px-1">branch</code> (optional) - Current branch name (default: main)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
