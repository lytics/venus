"use client"

import { useState } from "react"
import { ChevronUp, Search } from "lucide-react"

const COLLECTIONS = [
  "All Collections",
  "Apps",
  "Starters",
  "Content Models",
  "Recipes",
] as const

const CATEGORIES = [
  "A/B Testing",
  "AI Assistance",
  "Analytics",
  "Artificial Intelligence",
  "Automate",
  "Automations",
  "Commerce",
  "Communication",
  "Content Management",
  "DAM",
  "Data Integration",
  "Developer Tools",
  "E-Commerce",
  "Email",
  "Frontend Framework",
  "Hosting",
  "Localization",
  "Marketing",
  "Monitoring",
  "Personalization",
  "Project Management",
  "Search",
  "Security",
  "SEO",
] as const

type Collection = (typeof COLLECTIONS)[number]

export function MarketplaceSidebar() {
  const [activeCollection, setActiveCollection] = useState<Collection>("All Collections")
  const [collectionsOpen, setCollectionsOpen] = useState(true)
  const [categoriesOpen, setCategoriesOpen] = useState(true)
  const [categorySearch, setCategorySearch] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set())

  const filteredCategories = CATEGORIES.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  )

  function toggleCategory(category: string) {
    setSelectedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  return (
    <aside className="w-[240px] shrink-0 bg-[#F7F9FC] border-r border-t border-[#DDE3EE] flex flex-col overflow-y-auto pt-5 pb-[15px]">
      {/* Collections Section */}
      <div className="px-4">
        <button
          onClick={() => setCollectionsOpen(!collectionsOpen)}
          className="flex items-center justify-between w-full mb-2 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8E99A4]">
            Collections
          </span>
          <ChevronUp
            size={14}
            className={`text-[#8E99A4] transition-transform duration-200 ${
              collectionsOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {collectionsOpen && (
          <ul className="flex flex-col gap-0.5">
            {COLLECTIONS.map((collection) => {
              const isActive = activeCollection === collection
              return (
                <li key={collection}>
                  <button
                    onClick={() => setActiveCollection(collection)}
                    className={`w-full text-left text-[13px] leading-[20px] py-[6px] px-3 rounded-md cursor-pointer transition-colors duration-150 ${
                      isActive
                        ? "text-[#6C5CE7] font-medium bg-white border-l-2 border-[#6C5CE7]"
                        : "text-[#475161] hover:bg-white/60"
                    }`}
                  >
                    {collection}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-[#DDE3EE] my-4 mx-4" />

      {/* Categories Section */}
      <div className="px-4 flex flex-col min-h-0">
        <button
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          className="flex items-center justify-between w-full mb-2 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8E99A4]">
            Categories
          </span>
          <ChevronUp
            size={14}
            className={`text-[#8E99A4] transition-transform duration-200 ${
              categoriesOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {categoriesOpen && (
          <div className="flex flex-col gap-2 min-h-0">
            {/* Search Input */}
            <div className="relative">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#8E99A4] pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search Categories"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                className="w-full h-8 pl-8 pr-3 text-[13px] text-[#475161] placeholder-[#8E99A4] bg-white border border-[#DDE3EE] rounded-md outline-none focus:border-[#6C5CE7] transition-colors duration-150"
              />
            </div>

            {/* Checkbox List */}
            <ul className="flex flex-col gap-0.5 overflow-y-auto">
              {filteredCategories.map((category) => (
                <li key={category}>
                  <label className="flex items-center gap-2 py-[5px] px-1 rounded cursor-pointer hover:bg-white/60 transition-colors duration-150">
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(category)}
                      onChange={() => toggleCategory(category)}
                      className="w-[15px] h-[15px] rounded border-[#DDE3EE] text-[#6C5CE7] accent-[#6C5CE7] cursor-pointer"
                    />
                    <span className="text-[13px] leading-[20px] text-[#475161] select-none">
                      {category}
                    </span>
                  </label>
                </li>
              ))}
              {filteredCategories.length === 0 && (
                <li className="text-[13px] text-[#8E99A4] py-2 px-1">No categories found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}
