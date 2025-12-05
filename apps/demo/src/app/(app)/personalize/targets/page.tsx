'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import { SearchV3, Button, Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableActionButton, Dropdown } from '@contentstack/venuscn'
import { cn } from '@/lib/utils'

// Target data type
interface Target {
  name: string
  description: string
  modifiedAt: string
  createdAt: string
}

// Mock data
const mockTargets: Target[] = [
  {
    name: 'Mobile Users',
    description: 'Users accessing from mobile devices',
    modifiedAt: 'Jul 21, 2025 01:25 PM',
    createdAt: 'Jul 21, 2025 11:22 AM'
  },
  {
    name: 'Weekend Shoppers',
    description: 'Visitors browsing on Saturday or Sunday',
    modifiedAt: 'Jul 21, 2025 11:26 AM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  },
  {
    name: 'Luxury Segment',
    description: 'High-value customers interested in premium products',
    modifiedAt: 'Jul 02, 2025 01:26 PM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  },
  {
    name: 'US Desktop Users',
    description: 'Desktop visitors from United States',
    modifiedAt: 'Jul 02, 2025 01:26 PM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  },
  {
    name: 'Returning Holiday Shoppers',
    description: 'Returning visitors during Black Friday and Cyber Monday',
    modifiedAt: 'Jul 02, 2025 01:26 PM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  },
  {
    name: 'Weekend Mobile California',
    description: 'Mobile users in California browsing on weekends',
    modifiedAt: 'Jul 02, 2025 01:26 PM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  },
  {
    name: 'West Coast Business Travelers',
    description: 'Business segment users from California, Oregon, or Washington with high CLV',
    modifiedAt: 'Jul 02, 2025 01:26 PM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  },
  {
    name: 'Black Friday Mobile Campaign',
    description: 'Mobile shoppers with 3+ sessions during Black Friday weekend',
    modifiedAt: 'Jul 02, 2025 01:26 PM',
    createdAt: 'Jul 01, 2025 06:07 PM'
  }
]

export default function TargetsPage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = React.useState('')
  const [recordsPerPage, setRecordsPerPage] = React.useState(100)
  const [currentPage, setCurrentPage] = React.useState(1)

  const handleNewTarget = () => {
    router.push('/personalize/targets/new')
  }

  const handleRowAction = (targetName: string) => {
    // TODO: Implement row action for target
  }

  // Filter targets based on search
  const filteredTargets = mockTargets.filter((target) =>
    target.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    target.description.toLowerCase().includes(searchValue.toLowerCase())
  )

  const totalRecords = filteredTargets.length
  const startRecord = (currentPage - 1) * recordsPerPage + 1
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Header - 90px tall with light blue bg */}
      <div className="bg-[#F7F9FC] h-[90px] border-b border-gray-200 flex items-center justify-between px-4">
        {/* Left: Title with help icon */}
        <div className="flex items-center gap-7">
          <h1 className="text-xl font-semibold text-black">Targets</h1>
          <HelpCircle className="w-5 h-5 text-[#697B9B]" strokeWidth={1.5} />
        </div>

        {/* Right: Action button */}
        <Button variant="primary" size="regular" onClick={handleNewTarget} className="h-10">
          <Image src="/images/plus.svg" alt="" width={24} height={24} className="invert brightness-0" />
          New Target
        </Button>
      </div>

      {/* Search Bar */}
      <div className="bg-[#F7F9FC] px-4 h-[75px] border-b border-gray-200 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <SearchV3
              placeholder="Search targets"
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

      {/* Table Container - Edge to edge, stretches to fill space */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Table with scroll */}
        <div className="flex-1 overflow-auto bg-white relative">
          <Table full className="min-h-full border-separate border-spacing-0">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="min-w-[350px]">Name</TableHead>
                <TableHead className="min-w-[420px]">Description</TableHead>
                <TableHead className="min-w-[145px]">Modified At</TableHead>
                <TableHead className="min-w-[145px]">Created At</TableHead>
                <TableHead className="w-12 sticky right-0 bg-white z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTargets.map((target, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{target.name}</TableCell>
                  <TableCell className="font-medium">{target.description}</TableCell>
                  <TableCell>{target.modifiedAt}</TableCell>
                  <TableCell>{target.createdAt}</TableCell>
                  <TableCell className="sticky right-0 bg-white group-hover:bg-[#F9FAFB] z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none text-center">
                    <TableActionButton
                      onClick={() => handleRowAction(target.name)}
                      label={`Actions for ${target.name}`}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {/* Filler row to extend vertical lines */}
              <tr className="pointer-events-none">
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="border-r border-[#E5E7EB]"></td>
                <td className="sticky right-0 bg-white before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none"></td>
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
