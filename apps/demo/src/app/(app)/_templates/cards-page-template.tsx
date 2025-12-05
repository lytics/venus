/**
 * Cards Page Template
 *
 * A project/cards listing page with:
 * - PageSearchHeader with title, search, and action button
 * - Card grid for displaying items
 *
 * Usage:
 * 1. Copy this file to src/app/(app)/your-page/page.tsx
 * 2. Customize the page title, search placeholder, and card content
 */

"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { PageSearchHeader } from "@contentstack/venuscn"
import { Card, CardContent } from "@/components/ui/card"

// =============================================================================
// CUSTOMIZE: Your card data type
// =============================================================================
interface ItemCard {
  id: string
  title: string
  subtitle: string
  stat1Label: string
  stat1Value: number
  stat2Label: string
  stat2Value: number
  date: string
}

// =============================================================================
// CUSTOMIZE: Your mock data (replace with real data fetching)
// =============================================================================
const mockItems: ItemCard[] = [
  {
    id: "1",
    title: "Project Alpha",
    subtitle: "Team: Engineering",
    stat1Label: "Active Items",
    stat1Value: 5,
    stat2Label: "Members",
    stat2Value: 12,
    date: "Dec 01, 2025",
  },
  {
    id: "2",
    title: "Project Beta",
    subtitle: "Team: Design",
    stat1Label: "Active Items",
    stat1Value: 3,
    stat2Label: "Members",
    stat2Value: 8,
    date: "Nov 28, 2025",
  },
]

// =============================================================================
// Card Component (customize the layout as needed)
// =============================================================================

function ItemCardComponent({ item, onClick }: { item: ItemCard; onClick?: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Card
      className="w-[300px] cursor-pointer transition-all"
      style={{ borderColor: isHovered ? 'var(--color-primary)' : 'var(--color-border)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardContent className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-title mb-1">{item.title}</h3>

        {/* Subtitle */}
        <p className="text-sm text-primary mb-4">{item.subtitle}</p>

        {/* Stats Row */}
        <div className="flex gap-8 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-title">{item.stat1Value}</div>
            <div className="text-xs text-body">{item.stat1Label}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-title">{item.stat2Value}</div>
            <div className="text-xs text-body">{item.stat2Label}</div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-body border-t pt-3">
          <span>{item.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// =============================================================================
// Page Component
// =============================================================================

export default function CardsPageTemplate() {
  const [searchValue, setSearchValue] = React.useState("")

  // CUSTOMIZE: Your action handler
  const handleNewItem = () => {
    console.log("Create new item")
  }

  // CUSTOMIZE: Your card click handler
  const handleCardClick = (item: ItemCard) => {
    console.log("Clicked:", item.title)
  }

  // Filter items based on search
  const filteredItems = mockItems.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Search Header */}
      <PageSearchHeader
        title="Your Page Title"                    // CUSTOMIZE
        searchPlaceholder="Search items..."        // CUSTOMIZE
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearchClear={() => setSearchValue("")}
        action={{
          label: "New Item",                       // CUSTOMIZE
          icon: <Plus className="h-5 w-5" />,
          onClick: handleNewItem,
        }}
      />

      {/* Page Content */}
      <div className="flex-1 bg-[#F5F6F8] px-12 py-6">
        {/* Cards Grid */}
        <div className="flex flex-wrap gap-4">
          {filteredItems.map((item) => (
            <ItemCardComponent
              key={item.id}
              item={item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-body">No items found</p>
          </div>
        )}
      </div>
    </div>
  )
}
