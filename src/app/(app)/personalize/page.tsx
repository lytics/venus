'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import { PageSearchHeader } from '@/components/venus'
import { ProjectCard } from '@/components/project-card'

export default function PersonalizeProjectsPage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = React.useState('')

  const handleNewProject = () => {
    // TODO: Implement project creation
  }

  const handleProjectClick = () => {
    router.push('/personalize/experiences')
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Search Header - 90px tall with light blue bg */}
      <PageSearchHeader
        title="Personalize Projects"
        searchPlaceholder="Search projects"
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearchClear={() => setSearchValue('')}
        action={{
          label: 'New Personalize Project',
          icon: <Plus className="h-5 w-5" />,
          onClick: handleNewProject
        }}
      />

      {/* Page Content - light blue background */}
      <div className="flex-1 bg-[#F5F6F8] px-12 py-6">
        {/* Projects Grid */}
        <div className="flex flex-wrap gap-4">
          <ProjectCard
            title="Ford"
            stackName="Ford Pro"
            activeExperiences={1}
            audiences={0}
            date="Jul 02, 2025"
            onClick={handleProjectClick}
          />
        </div>
      </div>
    </div>
  )
}
