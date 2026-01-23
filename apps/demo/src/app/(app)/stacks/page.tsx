'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import { PageSearchHeader } from '@contentstack/venuscn'
import { StackCard } from '@/components/stack-card'

// Helper function to slugify stack names
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export default function StacksPage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = React.useState('')

  const handleNewStack = () => {
    // TODO: Implement stack creation
  }

  const handleStackClick = (stackName: string) => {
    const slug = slugify(stackName)
    router.push(`/stacks/${slug}`)
  }

  // Sample stack data
  const stacks = [
    {
      name: 'Compass Starter',
      branch: 'main',
      envCount: 2,
      modifiedDate: 'Dec 09, 2024'
    },
    {
      name: 'Ford Pro',
      branch: 'main',
      envCount: 3,
      modifiedDate: 'Nov 15, 2024'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Search Header - 90px tall with light blue bg */}
      <PageSearchHeader
        title="Stacks"
        searchPlaceholder="Search stacks"
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearchClear={() => setSearchValue('')}
        action={{
          label: 'New Stack',
          icon: <Plus className="h-5 w-5" />,
          onClick: handleNewStack
        }}
      />

      {/* Page Content - light blue background */}
      <div className="flex-1 bg-[#F5F6F8] px-12 py-6">
        {/* Stacks Grid */}
        <div className="flex flex-wrap gap-4">
          {stacks.map((stack) => (
            <StackCard
              key={stack.name}
              name={stack.name}
              branch={stack.branch}
              envCount={stack.envCount}
              modifiedDate={stack.modifiedDate}
              onClick={() => handleStackClick(stack.name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
