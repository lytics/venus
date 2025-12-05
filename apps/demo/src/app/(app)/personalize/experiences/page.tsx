'use client'

import * as React from 'react'
import { HelpCircle, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import {
  SearchV3,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Dropdown,
  StatusPill
} from '@contentstack/venuscn'
import { mockExperiences, type Experience } from '@/data/experiences'
import { cn } from '@/lib/utils'

export default function ExperiencesPage() {
  const [searchValue, setSearchValue] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [recordsPerPage, setRecordsPerPage] = React.useState(100)

  const totalRecords = mockExperiences.length
  const startRecord = (currentPage - 1) * recordsPerPage + 1
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords)

  const handlePrioritizeExperiences = () => {
    // TODO: Implement experience prioritization
  }

  const handleNewExperience = () => {
    // TODO: Implement new experience creation
  }

  const handleCopyUid = (uid: string) => {
    navigator.clipboard.writeText(uid)
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Header */}
      <div className="bg-[#F7F9FC] h-[90px] border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-7">
          <h1 className="text-xl font-semibold text-black">Experiences</h1>
          <HelpCircle className="w-5 h-5 text-[#697B9B]" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="regular" onClick={handlePrioritizeExperiences}>
            Prioritize Experiences
          </Button>
          <Button variant="primary" size="regular" onClick={handleNewExperience} className="h-10">
            <Image src="/images/plus.svg" alt="" width={24} height={24} className="invert brightness-0" />
            New Experience
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#F7F9FC] px-4 h-[75px] border-b border-gray-200 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <SearchV3
              placeholder="Search experiences"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue('')}
              className="w-[535px]"
            />
            <Button variant="primary" size="regular" className="h-10">
              <Image src="/images/search.svg" alt="" width={24} height={24} className="invert brightness-0" />
              Search
            </Button>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              className="inline-flex items-center justify-center hover:bg-gray-100 rounded w-10 h-10 p-2 transition-colors"
              aria-label="Refresh"
            >
              <Image src="/images/refresh.svg" alt="" width={24} height={24} />
            </button>
            <button
              className="inline-flex items-center justify-center hover:bg-gray-100 rounded w-10 h-10 p-2 transition-colors"
              aria-label="Settings"
            >
              <Image src="/images/searchbar-setting.svg" alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Table + Pagination Container */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Table Scroll Area */}
        <div className="flex-1 overflow-auto bg-white relative">
          <Table full className="min-h-full border-separate border-spacing-0">
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[100px]">Priority</TableHead>
                <TableHead className="min-w-[250px]">Name</TableHead>
                <TableHead className="min-w-[130px]">Short UID</TableHead>
                <TableHead className="min-w-[150px]">Status</TableHead>
                <TableHead className="min-w-[150px]">Type</TableHead>
                <TableHead className="min-w-[210px]">Audiences</TableHead>
                <TableHead className="min-w-[250px]">Activated At</TableHead>
                <TableHead className="min-w-[250px]">Description</TableHead>
                <TableHead className="min-w-[320px]">Unique ID</TableHead>
                <TableHead className="min-w-[250px]">Modified At</TableHead>
                <TableHead className="min-w-[250px]">Created At</TableHead>
                <TableHead sticky="right" className="w-[93px] text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockExperiences.map((experience) => (
                <TableRow key={experience.id}>
                  {/* Priority */}
                  <TableCell>{experience.priority}</TableCell>

                  {/* Name */}
                  <TableCell className="font-medium">{experience.name}</TableCell>

                  {/* Short UID */}
                  <TableCell>
                    <div className="flex items-center justify-between gap-2">
                      <span>{experience.shortUid}</span>
                      <button
                        onClick={() => handleCopyUid(experience.shortUid)}
                        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                        aria-label="Copy UID"
                      >
                        <Image src="/images/pages.svg" alt="" width={20} height={20} />
                      </button>
                    </div>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <StatusPill
                      status={
                        experience.status === 'Active' ? 'active' :
                        experience.status === 'Inactive' ? 'inactive' :
                        experience.status === 'Draft' ? 'draft' :
                        'inactive'
                      }
                    >
                      {experience.status}
                    </StatusPill>
                  </TableCell>

                  {/* Type */}
                  <TableCell>{experience.type}</TableCell>

                  {/* Audiences */}
                  <TableCell>
                    <div className="flex items-center justify-between gap-2">
                      <span>{experience.audiences} {experience.audiences === 1 ? 'Audience' : 'Audiences'}</span>
                      <button
                        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                        aria-label="Audience info"
                      >
                        <Image src="/images/info.svg" alt="" width={18} height={18} />
                      </button>
                    </div>
                  </TableCell>

                  {/* Activated At */}
                  <TableCell>
                    <div>
                      <div>{experience.activatedAt}</div>
                      <div className="text-sm text-gray-500">{experience.activatedBy}</div>
                    </div>
                  </TableCell>

                  {/* Description */}
                  <TableCell className="font-medium">{experience.description}</TableCell>

                  {/* Unique ID */}
                  <TableCell className="font-medium">
                    <div className="flex items-center justify-between gap-2">
                      <span>{experience.uniqueId}</span>
                      <button
                        onClick={() => handleCopyUid(experience.uniqueId)}
                        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                        aria-label="Copy Unique ID"
                      >
                        <Image src="/images/pages.svg" alt="" width={20} height={20} />
                      </button>
                    </div>
                  </TableCell>

                  {/* Modified At */}
                  <TableCell>
                    <div>
                      <div>{experience.modifiedAt}</div>
                      <div className="text-sm text-gray-500">{experience.activatedBy}</div>
                    </div>
                  </TableCell>

                  {/* Created At */}
                  <TableCell>
                    <div>
                      <div>{experience.createdAt}</div>
                      <div className="text-sm text-gray-500">{experience.activatedBy}</div>
                    </div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell sticky="right" className="text-center">
                    <button
                      className="inline-flex items-center justify-center hover:bg-gray-100 rounded p-1 transition-colors"
                      aria-label="Actions"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
              {/* Filler row - extends column borders to fill remaining space */}
              <tr className="h-full">
                <td></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="border-l border-border"></td>
                <td className="sticky right-0 bg-white border-l border-border before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none"></td>
              </tr>
            </TableBody>
          </Table>
        </div>

        {/* Pagination Footer */}
        <div className="border-t border-gray-200 bg-[#F5F6F8] px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left: Records per page and count */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Showing</span>
                  <div className="w-28 relative z-10">
                    <Dropdown
                      items={[
                        { label: '25', value: '25' },
                        { label: '50', value: '50' },
                        { label: '100', value: '100' }
                      ]}
                      value={String(recordsPerPage)}
                      onChange={(value) => setRecordsPerPage(Number(value))}
                      version="v2"
                    />
                  </div>
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <span className="font-medium">
                  {startRecord} to {endRecord} of {totalRecords} records
                </span>
              </div>

              {/* Right: Pagination controls */}
              <div className="flex items-center gap-1.5">
                {/* Previous buttons */}
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded transition-colors p-2',
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed opacity-40'
                      : 'text-[#475161] hover:bg-gray-100'
                  )}
                  aria-label="First page"
                >
                  <Image src="/images/pagination-first.svg" alt="" width={32} height={32} />
                </button>
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded transition-colors p-2',
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed opacity-40'
                      : 'text-[#475161] hover:bg-gray-100'
                  )}
                  aria-label="Previous page"
                >
                  <Image src="/images/pagination-previous.svg" alt="" width={32} height={32} />
                </button>

                {/* Page number dropdown */}
                <div className="w-[105px]">
                  <Dropdown
                    items={Array.from({ length: Math.ceil(totalRecords / recordsPerPage) }, (_, i) => ({
                      label: String(i + 1),
                      value: String(i + 1)
                    }))}
                    value={String(currentPage)}
                    onChange={(value) => setCurrentPage(Number(value))}
                    version="v2"
                    disabled={Math.ceil(totalRecords / recordsPerPage) === 1}
                  />
                </div>

                {/* Next buttons */}
                <button
                  onClick={() => setCurrentPage(Math.min(Math.ceil(totalRecords / recordsPerPage), currentPage + 1))}
                  disabled={currentPage >= Math.ceil(totalRecords / recordsPerPage)}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded transition-colors p-2',
                    currentPage >= Math.ceil(totalRecords / recordsPerPage)
                      ? 'text-gray-400 cursor-not-allowed opacity-40'
                      : 'text-[#475161] hover:bg-gray-100'
                  )}
                  aria-label="Next page"
                >
                  <Image src="/images/pagination-next.svg" alt="" width={32} height={32} />
                </button>
                <button
                  onClick={() => setCurrentPage(Math.ceil(totalRecords / recordsPerPage))}
                  disabled={currentPage >= Math.ceil(totalRecords / recordsPerPage)}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded transition-colors p-2',
                    currentPage >= Math.ceil(totalRecords / recordsPerPage)
                      ? 'text-gray-400 cursor-not-allowed opacity-40'
                      : 'text-[#475161] hover:bg-gray-100'
                  )}
                  aria-label="Last page"
                >
                  <Image src="/images/pagination-last.svg" alt="" width={32} height={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
