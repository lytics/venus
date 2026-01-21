'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import { PageSearchHeader } from '@contentstack/venuscn'
import { LyticsProjectCard } from '@/components/lytics-project-card'
import { lyticsProjects } from '@/data/lytics-projects'

export default function LyticsProjectsPage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = React.useState('')

  const handleNewProject = () => {
    // TODO: Implement project creation
  }

  const handleProjectClick = (projectId: string) => {
    router.push('/lytics/audiences')
  }

  // Filter projects based on search
  const filteredProjects = lyticsProjects.filter(project =>
    project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    project.organization.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Search Header - 90px tall with light blue bg */}
      <PageSearchHeader
        title="Lytics Projects"
        searchPlaceholder="Search projects"
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearchClear={() => setSearchValue('')}
        action={{
          label: 'New Lytics Project',
          icon: <Plus className="h-5 w-5" />,
          onClick: handleNewProject
        }}
      />

      {/* Page Content - light grey background */}
      <div className="flex-1 bg-[#F5F6F8] px-12 py-6">
        {/* Projects Grid */}
        <div className="flex flex-wrap gap-4">
          {filteredProjects.map((project) => (
            <LyticsProjectCard
              key={project.id}
              title={project.title}
              organization={project.organization}
              audiences={project.audiences}
              lastSync={project.lastSync}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-12">
              <p className="text-[color:var(--color-heading)]">No projects found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
