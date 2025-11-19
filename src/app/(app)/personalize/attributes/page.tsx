'use client'

import * as React from 'react'
import { Plus, HelpCircle, MoreVertical, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import { SearchV3, Button, Table, TableHeader, TableBody, TableHead, TableRow, TableCell, Dropdown } from '@/components/venus'
import { cn } from '@/lib/utils'

// Attribute data type
interface Attribute {
  name: string
  type: string
  key: string | null
  description: string
  uniqueId: string
}

// Mock data matching the screenshot
const mockAttributes: Attribute[] = [
  {
    name: 'Device Type',
    type: 'Preset',
    key: null,
    description: 'Categorizes devices as Mobile, ...',
    uniqueId: 'DEVICE_TYPE'
  },
  {
    name: 'Operating System',
    type: 'Preset',
    key: null,
    description: 'Categorizes platform as MacOS...',
    uniqueId: 'OPERATING_S'
  },
  {
    name: 'Query Parameters',
    type: 'Preset',
    key: null,
    description: 'Checks for a query parameter i...',
    uniqueId: 'QUERY_PARAM'
  },
  {
    name: 'Referrer',
    type: 'Preset',
    key: null,
    description: 'Checks the URI of the web pag...',
    uniqueId: 'REFERRER'
  },
  {
    name: 'Country',
    type: 'Preset',
    key: null,
    description: 'Allows targeting users based o...',
    uniqueId: 'COUNTRY'
  },
  {
    name: 'Region',
    type: 'Preset',
    key: null,
    description: 'Allows targeting users based o...',
    uniqueId: 'REGION'
  },
  {
    name: 'City',
    type: 'Preset',
    key: null,
    description: 'Allows targeting users based o...',
    uniqueId: 'CITY'
  },
  {
    name: 'Date And Time',
    type: 'Preset',
    key: null,
    description: 'Helps defining audiences for a ...',
    uniqueId: 'DATE_AND_TIM'
  }
]

export default function AttributesPage() {
  const [searchValue, setSearchValue] = React.useState('')
  const [recordsPerPage, setRecordsPerPage] = React.useState(100)
  const [currentPage, setCurrentPage] = React.useState(1)

  const handleNewAttribute = () => {
    // TODO: Implement attribute creation
  }

  const handleRowAction = (attributeName: string) => {
    // TODO: Implement row action for attribute
  }

  // Filter attributes based on search
  const filteredAttributes = mockAttributes.filter((attr) =>
    attr.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    attr.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    attr.uniqueId.toLowerCase().includes(searchValue.toLowerCase())
  )

  const totalRecords = filteredAttributes.length
  const startRecord = (currentPage - 1) * recordsPerPage + 1
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Header - 90px tall with light blue bg */}
      <div className="bg-[#F7F9FC] h-[90px] border-b border-gray-200 flex items-center justify-between px-4">
        {/* Left: Title with help icon */}
        <div className="flex items-center gap-7">
          <h1 className="text-xl font-semibold text-black">Attributes</h1>
          <HelpCircle className="w-5 h-5 text-[#697B9B]" strokeWidth={1.5} />
        </div>

        {/* Right: Action button */}
        <Button variant="primary" size="regular" onClick={handleNewAttribute}>
          <Plus className="h-5 w-5" />
          New Attribute
        </Button>
      </div>

      {/* Search Bar - White background with padding */}
      <div className="bg-white px-6 py-6 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <div className="flex-1 max-w-md">
            <SearchV3
              placeholder="Search attributes"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue('')}
            />
          </div>
          <Button variant="primary" size="regular">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </Button>

          {/* Right side icons */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              className="inline-flex items-center justify-center hover:bg-gray-100 rounded p-2 transition-colors"
              aria-label="Refresh"
            >
              <RefreshCw className="w-5 h-5 text-[#697B9B]" strokeWidth={1.5} />
            </button>
            <button
              className="inline-flex items-center justify-center hover:bg-gray-100 rounded p-2 transition-colors"
              aria-label="Settings"
            >
              <Image src="/images/searchbar-setting.svg" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Container - Edge to edge, stretches to fill space */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Table with scroll */}
        <div className="flex-1 overflow-auto bg-white relative">
          <table className="w-full h-full border-separate border-spacing-0">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Unique ID</TableHead>
                <TableHead className="w-12 sticky right-0 bg-white z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAttributes.map((attribute, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{attribute.name}</TableCell>
                  <TableCell>{attribute.type}</TableCell>
                  <TableCell className="text-gray-500">
                    {attribute.key || '-'}
                  </TableCell>
                  <TableCell className="max-w-sm truncate font-medium">
                    {attribute.description}
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {attribute.uniqueId}
                  </TableCell>
                  <TableCell className="sticky right-0 bg-white group-hover:bg-[#F9FAFB] z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none text-center">
                    <button
                      onClick={() => handleRowAction(attribute.name)}
                      className="inline-flex items-center justify-center hover:bg-gray-100 rounded p-1 transition-colors"
                      aria-label={`Actions for ${attribute.name}`}
                    >
                      <MoreVertical className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
              {/* Filler row to extend vertical lines */}
              <tr className="pointer-events-none">
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="sticky right-0 bg-white before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none"></td>
              </tr>
            </TableBody>
          </table>
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
              <div className="flex items-center gap-2">
                {/* Previous buttons */}
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-full border transition-colors',
                    currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  )}
                  aria-label="First page"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-full border transition-colors',
                    currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  )}
                  aria-label="Previous page"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page number */}
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={currentPage}
                    onChange={(e) => {
                      const page = Math.max(1, Math.min(Math.ceil(totalRecords / recordsPerPage), Number(e.target.value)))
                      setCurrentPage(page)
                    }}
                    className="w-12 h-9 text-center border border-gray-300 rounded text-sm focus:outline-none focus:border-default-primary"
                    min={1}
                    max={Math.ceil(totalRecords / recordsPerPage)}
                  />
                </div>

                {/* Next buttons */}
                <button
                  onClick={() => setCurrentPage(Math.min(Math.ceil(totalRecords / recordsPerPage), currentPage + 1))}
                  disabled={currentPage >= Math.ceil(totalRecords / recordsPerPage)}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-full border transition-colors',
                    currentPage >= Math.ceil(totalRecords / recordsPerPage)
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  )}
                  aria-label="Next page"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentPage(Math.ceil(totalRecords / recordsPerPage))}
                  disabled={currentPage >= Math.ceil(totalRecords / recordsPerPage)}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-full border transition-colors',
                    currentPage >= Math.ceil(totalRecords / recordsPerPage)
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  )}
                  aria-label="Last page"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
