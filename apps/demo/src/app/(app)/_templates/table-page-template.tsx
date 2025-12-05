/**
 * Table Page Template
 *
 * A data table page with:
 * - Page header with title and action buttons
 * - Search bar with filters
 * - Full-width data table with sticky actions column
 * - Pagination footer
 *
 * Usage:
 * 1. Copy this file to src/app/(app)/your-page/page.tsx
 * 2. Customize the columns, data type, and mock data
 */

"use client"

import * as React from "react"
import { Plus, HelpCircle, Search as SearchIcon, RefreshCw, Settings2 } from "lucide-react"
import {
  SearchV3,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableActionButton,
  Button,
  Dropdown,
  StatusPill,
} from "@contentstack/venuscn"
import { cn } from "@/lib/utils"

// =============================================================================
// CUSTOMIZE: Your data type
// =============================================================================
interface DataItem {
  id: string
  name: string
  status: "active" | "inactive" | "draft" | "paused"
  type: string
  createdAt: string
  createdBy: string
}

// =============================================================================
// CUSTOMIZE: Your mock data (replace with real data fetching)
// =============================================================================
const mockData: DataItem[] = [
  {
    id: "1",
    name: "Item One",
    status: "active",
    type: "Type A",
    createdAt: "Dec 01, 2025 10:30 AM",
    createdBy: "John Doe",
  },
  {
    id: "2",
    name: "Item Two",
    status: "draft",
    type: "Type B",
    createdAt: "Nov 28, 2025 2:15 PM",
    createdBy: "Jane Smith",
  },
  {
    id: "3",
    name: "Item Three",
    status: "inactive",
    type: "Type A",
    createdAt: "Nov 25, 2025 9:00 AM",
    createdBy: "Bob Wilson",
  },
]

// =============================================================================
// Page Component
// =============================================================================

export default function TablePageTemplate() {
  const [searchValue, setSearchValue] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [recordsPerPage, setRecordsPerPage] = React.useState(25)

  // Pagination calculations
  const totalRecords = mockData.length
  const totalPages = Math.ceil(totalRecords / recordsPerPage)
  const startRecord = (currentPage - 1) * recordsPerPage + 1
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords)

  // CUSTOMIZE: Your action handlers
  const handlePrimaryAction = () => {
    console.log("Primary action clicked")
  }

  const handleSecondaryAction = () => {
    console.log("Secondary action clicked")
  }

  const handleSearch = () => {
    console.log("Search:", searchValue)
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Header */}
      <div className="bg-[#F7F9FC] h-[90px] border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-black">
            Page Title {/* CUSTOMIZE */}
          </h1>
          <HelpCircle className="w-5 h-5 text-[#697B9B]" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="regular" onClick={handleSecondaryAction}>
            Secondary Action {/* CUSTOMIZE */}
          </Button>
          <Button variant="primary" size="regular" onClick={handlePrimaryAction}>
            <Plus className="w-5 h-5" />
            New Item {/* CUSTOMIZE */}
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#F7F9FC] px-4 h-[75px] border-b border-gray-200 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <SearchV3
              placeholder="Search..." // CUSTOMIZE
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue("")}
              className="w-[400px]"
            />
            <Button variant="primary" size="regular" onClick={handleSearch}>
              <SearchIcon className="w-5 h-5" />
              Search
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center justify-center hover:bg-gray-100 rounded w-10 h-10 p-2 transition-colors"
              aria-label="Refresh"
            >
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="inline-flex items-center justify-center hover:bg-gray-100 rounded w-10 h-10 p-2 transition-colors"
              aria-label="Settings"
            >
              <Settings2 className="w-5 h-5 text-gray-600" />
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
                {/* CUSTOMIZE: Your columns */}
                <TableHead className="min-w-[250px]">Name</TableHead>
                <TableHead className="min-w-[120px]">Status</TableHead>
                <TableHead className="min-w-[150px]">Type</TableHead>
                <TableHead className="min-w-[200px]">Created At</TableHead>
                <TableHead sticky="right" className="w-[93px] text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((item) => (
                <TableRow key={item.id}>
                  {/* CUSTOMIZE: Your cell content */}
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <StatusPill status={item.status}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </StatusPill>
                  </TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <div>
                      <div>{item.createdAt}</div>
                      <div className="text-sm text-gray-500">{item.createdBy}</div>
                    </div>
                  </TableCell>
                  <TableCell sticky="right" className="text-center">
                    <TableActionButton />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Footer */}
        <div className="border-t border-gray-200 bg-[#F5F6F8] px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Records per page */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">Showing</span>
                <div className="w-20">
                  <Dropdown
                    items={[
                      { label: "25", value: "25" },
                      { label: "50", value: "50" },
                      { label: "100", value: "100" },
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

            {/* Right: Page navigation */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="small"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                First
              </Button>
              <Button
                variant="ghost"
                size="small"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Prev
              </Button>
              <div className="w-16 mx-2">
                <Dropdown
                  items={Array.from({ length: totalPages }, (_, i) => ({
                    label: String(i + 1),
                    value: String(i + 1),
                  }))}
                  value={String(currentPage)}
                  onChange={(value) => setCurrentPage(Number(value))}
                  version="v2"
                />
              </div>
              <Button
                variant="ghost"
                size="small"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
              >
                Next
              </Button>
              <Button
                variant="ghost"
                size="small"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage >= totalPages}
              >
                Last
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
