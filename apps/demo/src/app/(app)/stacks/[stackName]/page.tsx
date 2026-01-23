'use client'

import { Button, Search } from '@contentstack/venuscn'
import { HelpCircle, Pencil, Plus, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export default function StackDashboardPage() {
  return (
    <div className="flex flex-col h-full p-6 gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-[--color-title]">Dashboard</h1>
          <button className="text-gray-400 hover:text-gray-600">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="!p-2.5 !min-w-0">
            <Pencil className="w-4 h-4" />
          </Button>
          <Button variant="primary" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Dashboard Extension
          </Button>
        </div>
      </div>

      {/* Three Column Cards - narrower first column, wider middle and last */}
      <div className="grid grid-cols-[1fr_1.3fr_1.3fr] gap-6">
        {/* App Preview Card */}
        <div className="bg-white rounded border border-[--color-border] p-6">
          <div className="flex flex-col items-center justify-center h-full min-h-[240px]">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-2xl text-gray-400">📱</div>
            </div>
            <h3 className="text-lg font-semibold text-[--color-title]">App Name</h3>
            <p className="text-sm text-[--color-body] mt-2 text-center">
              Preview your app content here
            </p>
          </div>
        </div>

        {/* What's New Card */}
        <div className="bg-[#6C5CE7] rounded border border-[#5B4DD6] p-6 text-white">
          <div className="flex flex-col h-full min-h-[240px]">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">What's New?</h3>
              <button className="text-white/80 hover:text-white">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Updated App Experience</h4>
              <p className="text-sm text-white/90">
                Discover the latest features and improvements to enhance your content management workflow.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
              <a href="#" className="text-sm font-semibold hover:underline">
                Learn More
              </a>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Academy Card */}
        <div className="bg-white rounded border border-[--color-border] p-6">
          <div className="flex flex-col h-full min-h-[240px]">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-[--color-title]">Contentstack Academy</h3>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-[--color-heading] mb-2">
                Omni-Channel Demo
              </h4>
              <p className="text-sm text-[--color-body]">
                Learn how to build powerful omni-channel experiences with our comprehensive tutorials.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[--color-border]">
              <a href="#" className="text-sm font-semibold text-[--color-primary] hover:underline">
                Learn More
              </a>
              <div className="flex items-center gap-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[--color-body]">Prev</span>
                <span className="text-xs text-[--color-body]">Next</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white rounded border border-[--color-border] p-6">
        <div className="mb-4">
          <Search
            placeholder="Search help content"
            className="w-full"
          />
        </div>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[--color-title] mb-2">
              Understanding Modular Blocks
            </h3>
            <a href="#" className="text-sm text-[--color-primary] hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-[--color-body]">
            <button className="flex items-center gap-1 hover:text-[--color-heading]">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button className="flex items-center gap-1 hover:text-[--color-heading]">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
