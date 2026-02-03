"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const collections = [
  { label: "All Collections", href: "/marketplace" },
  { label: "Apps", href: "/marketplace/apps" },
  { label: "Starters", href: "/marketplace/starters" },
  { label: "Content Models", href: "/marketplace/content-models" },
  { label: "Recipes", href: "/marketplace/recipes" },
];

const categories = [
  { id: "ab-testing", label: "A/B Testing" },
  { id: "ai-assistance", label: "AI Assistance" },
  { id: "analytics", label: "Analytics" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "automate", label: "Automate" },
  { id: "automations", label: "Automations" },
  { id: "commerce", label: "Commerce" },
  { id: "communication", label: "Communication" },
  { id: "content-management", label: "Content Management" },
  { id: "dam", label: "DAM" },
  { id: "development", label: "Development" },
  { id: "formatting", label: "Formatting" },
  { id: "hosting", label: "Hosting" },
  { id: "identity-management", label: "Identity Management" },
  { id: "marketing", label: "Marketing" },
  { id: "messaging-queue", label: "Messaging Queue" },
  { id: "miscellaneous", label: "Miscellaneous" },
  { id: "personalization", label: "Personalization" },
  { id: "project-management", label: "Project Management" },
  { id: "referencing", label: "Referencing" },
  { id: "search", label: "Search" },
  { id: "storage", label: "Storage" },
  { id: "translation", label: "Translation" },
  { id: "video", label: "Video" },
];

// Chevron SVG - up when open, down when closed, no animation
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={open ? "" : "rotate-180"}
    >
      <path
        d="M10.293 6.707L6 2.414 1.707 6.707A1 1 0 01.293 5.293l5-5a1 1 0 011.414 0l5 5a1 1 0 11-1.414 1.414z"
        fill="#222222"
      />
    </svg>
  );
}

// Search icon matching production exactly
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" className="mr-[4px] flex-shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z"
        fill="#475161"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z"
        fill="#475161"
      />
    </svg>
  );
}

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [collectionsOpen, setCollectionsOpen] = React.useState(true);
  const [categoriesOpen, setCategoriesOpen] = React.useState(true);

  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen border-t border-[#dde3ee]">
      {/* Sidebar */}
      <div className="w-[240px] sticky top-0 h-screen bg-[#f7f9fc] border-r border-[#dde3ee] flex flex-col shrink-0" style={{ WebkitFontSmoothing: 'auto' }}>
        <div className="flex-1 overflow-y-auto py-[20px]">
          {/* Collections Section */}
          <div className="px-[15px]">
            <button
              type="button"
              onClick={() => setCollectionsOpen(!collectionsOpen)}
              className="flex items-center justify-between w-full px-[10px] py-[22px]"
            >
              <span className="text-[14px] font-semibold tracking-normal text-[#475161]">Collections</span>
              <ChevronIcon open={collectionsOpen} />
            </button>

            {collectionsOpen && (
              <div className="space-y-[5px]">
                {collections.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center h-[40px] my-[5px] cursor-pointer transition-colors",
                        isActive
                          ? "text-[#6c5ce7]"
                          : "text-[#475161] hover:bg-gray-100 rounded"
                      )}
                    >
                      {isActive && (
                        <div className="w-[2px] h-full bg-[#6c5ce7]" />
                      )}
                      <span className="px-[12px] text-[15px]">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Divider - full width */}
          <div className="my-[16px] h-[1px] bg-[#dde3ee] w-full" />

          {/* Categories Section */}
          <div className="px-[15px]">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center justify-between w-full px-[10px] py-[22px]"
            >
              <span className="text-[12px] font-semibold tracking-normal text-[#475161]">Categories</span>
              <ChevronIcon open={categoriesOpen} />
            </button>

            {categoriesOpen && (
              <>
                {/* Search Box */}
                <div className="px-[10px] pb-[15px]">
                  <div className="relative flex items-center h-[40px] px-[8px] border border-[#dde3ee] rounded-[4px] bg-white focus-within:border-[#6c5ce7]">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="Search Categories"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full text-[14px] text-gray-800 outline-none placeholder:text-[#475161]/60 bg-transparent"
                    />
                  </div>
                </div>

                {/* Category List */}
                <div className="space-y-[10px] pb-8">
                  {filteredCategories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center px-[10px] cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="hidden peer"
                      />
                      <div
                        className="relative w-4 h-4 min-w-[16px] rounded-[2px] transition-colors flex items-center justify-center"
                        style={{
                          border: selectedCategories.includes(cat.id)
                            ? "1.5px solid #6c5ce7"
                            : "1.5px solid #475161",
                          backgroundColor: selectedCategories.includes(cat.id)
                            ? "#6c5ce7"
                            : "white",
                        }}
                      >
                        {selectedCategories.includes(cat.id) && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ml-[10px] text-[13px] text-[#475161]">
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
