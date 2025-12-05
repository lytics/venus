"use client"

import * as React from "react"
import Link from "next/link"
import { Copy, Check, ExternalLink, Layout, LayoutGrid, Table2 } from "lucide-react"
import { Button } from "@contentstack/venuscn"
import { AdminNav } from "@/components/admin-nav"

// Template metadata
const templates = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Hub page with app cards grid, sidebar with quick links and featured content. Good for home pages and app launchers.",
    icon: Layout,
    previewUrl: "/dashboard",
    fileName: "dashboard-template.tsx",
    features: ["Welcome header", "App cards grid", "Sidebar with quick links", "Container queries for responsive layout"],
  },
  {
    id: "cards",
    title: "Cards Page",
    description: "Project listing page with PageSearchHeader and card grid. Good for displaying collections of items.",
    icon: LayoutGrid,
    previewUrl: "/personalize",
    fileName: "cards-page-template.tsx",
    features: ["PageSearchHeader component", "Search with filtering", "Action button", "Responsive card grid"],
  },
  {
    id: "table",
    title: "Table Page",
    description: "Data table page with search, filters, and pagination. Good for listing and managing records.",
    icon: Table2,
    previewUrl: "/personalize/experiences",
    fileName: "table-page-template.tsx",
    features: ["Page header with actions", "Search bar", "Full-width table with sticky column", "Pagination controls"],
  },
]

// Template source code (simplified for display)
const templateCode: Record<string, string> = {
  dashboard: `// Dashboard Template - Copy to src/app/(app)/your-page/page.tsx
// Full template: src/app/(app)/_templates/dashboard-template.tsx

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@contentstack/venuscn"

export default function YourDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="@container">
        <div className="flex flex-col gap-6 px-8 pt-8 pb-8">
          {/* Welcome Header */}
          <div className="mb-3">
            <h1 className="text-28 font-bold text-title">Welcome, User</h1>
            <p className="text-base font-bold text-[#6e6b86] mt-1">Organization Name</p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 @4xl:grid-cols-[2.2fr_1fr] gap-6">
            {/* Main Content */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-heading mb-4">Your Section</h2>
              <div className="grid grid-cols-[repeat(auto-fill,208px)] gap-4">
                {/* Add your app cards here */}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 px-2">
              {/* Add quick links, featured content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  cards: `// Cards Page Template - Copy to src/app/(app)/your-page/page.tsx
// Full template: src/app/(app)/_templates/cards-page-template.tsx

"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { PageSearchHeader } from "@contentstack/venuscn"
import { Card, CardContent } from "@/components/ui/card"

export default function YourCardsPage() {
  const [searchValue, setSearchValue] = React.useState("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Search Header */}
      <PageSearchHeader
        title="Your Page Title"
        searchPlaceholder="Search items..."
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearchClear={() => setSearchValue("")}
        action={{
          label: "New Item",
          icon: <Plus className="h-5 w-5" />,
          onClick: () => console.log("Create"),
        }}
      />

      {/* Content Area */}
      <div className="flex-1 bg-[#F5F6F8] px-12 py-6">
        <div className="flex flex-wrap gap-4">
          {/* Add your cards here */}
        </div>
      </div>
    </div>
  )
}`,
  table: `// Table Page Template - Copy to src/app/(app)/your-page/page.tsx
// Full template: src/app/(app)/_templates/table-page-template.tsx

"use client"

import * as React from "react"
import { Plus, HelpCircle } from "lucide-react"
import {
  SearchV3, Table, TableHeader, TableBody,
  TableHead, TableRow, TableCell,
  TableActionButton, Button, Dropdown, StatusPill
} from "@contentstack/venuscn"

export default function YourTablePage() {
  const [searchValue, setSearchValue] = React.useState("")

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Header */}
      <div className="bg-[#F7F9FC] h-[90px] border-b border-gray-200 flex items-center justify-between px-4">
        <h1 className="text-xl font-semibold">Page Title</h1>
        <Button variant="primary"><Plus className="w-5 h-5" />New Item</Button>
      </div>

      {/* Search Bar */}
      <div className="bg-[#F7F9FC] px-4 h-[75px] border-b border-gray-200 flex items-center">
        <SearchV3 placeholder="Search..." value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} />
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto bg-white">
        <Table full>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead sticky="right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add your rows here */}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="border-t bg-[#F5F6F8] px-6 py-4">
        {/* Add pagination controls */}
      </div>
    </div>
  )
}`,
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="secondary" size="small" onClick={handleCopy}>
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied!" : "Copy Code"}
    </Button>
  )
}

function TemplateCard({ template }: { template: typeof templates[0] }) {
  const [showCode, setShowCode] = React.useState(false)
  const Icon = template.icon

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-surface-purple text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-title mb-1">{template.title}</h3>
            <p className="text-sm text-body">{template.description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-4 flex flex-wrap gap-2">
          {template.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 bg-gray-50 flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={showCode ? "primary" : "secondary"}
            size="small"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? "Hide Code" : "View Code"}
          </Button>
          <Link href={template.previewUrl} target="_blank">
            <Button variant="ghost" size="small">
              <ExternalLink className="w-4 h-4" />
              Preview
            </Button>
          </Link>
        </div>
        <CopyButton text={templateCode[template.id]} />
      </div>

      {/* Code Preview */}
      {showCode && (
        <div className="border-t border-border">
          <pre className="p-4 bg-gray-900 text-gray-100 text-xs overflow-x-auto max-h-[400px] overflow-y-auto">
            <code>{templateCode[template.id]}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="py-8 px-6">
        <main className="space-y-8 max-w-5xl">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Page Templates</h1>
            <p className="text-body">
              Starter templates for common page layouts. Copy the code and customize for your needs.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Full templates with detailed comments are in{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                src/app/(app)/_templates/
              </code>
            </p>
          </div>

          {/* Template Cards */}
          <div className="space-y-6">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          {/* Usage Instructions */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-body">
              <li>Choose a template that matches your page layout needs</li>
              <li>Click &quot;Copy Code&quot; to copy the starter code</li>
              <li>Create a new folder in <code className="bg-gray-100 px-1 rounded">src/app/(app)/your-page/</code></li>
              <li>Create <code className="bg-gray-100 px-1 rounded">page.tsx</code> and paste the code</li>
              <li>Customize the data, columns, and styling as needed</li>
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">
              For the full templates with all features and detailed comments, copy from{" "}
              <code className="bg-gray-100 px-1 rounded">src/app/(app)/_templates/</code>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
