# Marketplace V2 Rematerialization Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the Contentstack Marketplace page from Vacuum capture data at `/marketplace-v2`, pixel-matching prod.

**Architecture:** New Next.js route under `(app)/marketplace-v2/` inheriting existing TopNav (auto-detects marketplace branding via pathname). All components built from scratch using Tailwind v4 + existing design tokens. Static sample data matching prod. No Venus design system components — pure Tailwind.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, TypeScript

**Source of Truth:** Vacuum capture `page_1769670442512_kl6pqs` — 5 zones (nav, sidebar, content-header, main, section) with full computed styles.

---

### Task 1: Route Setup + Layout Shell

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v2/layout.tsx`
- Create: `apps/demo/src/app/(app)/marketplace-v2/page.tsx`

**Step 1: Create layout with sidebar + main content area**

```tsx
// layout.tsx
"use client"

import { ReactNode } from "react"
import { MarketplaceSidebar } from "./components/marketplace-sidebar"

export default function MarketplaceV2Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      <MarketplaceSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}
```

**Step 2: Create placeholder page**

```tsx
// page.tsx
export default function MarketplaceV2Page() {
  return <div>Marketplace V2</div>
}
```

**Step 3: Verify route loads**

Run: `open http://localhost:3000/marketplace-v2`
Expected: See "Marketplace V2" text with TopNav showing marketplace branding (Contentstack Marketplace logo, Manage Apps, Audit Logs).

**Step 4: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/
git commit -m "feat: scaffold marketplace-v2 route with layout shell"
```

---

### Task 2: Sidebar Component

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v2/components/marketplace-sidebar.tsx`

**From capture zone 1 (sidebar):**
- Width: 240px, fixed position
- Background: `#F7F9FC` (rgb(247, 249, 252) = --color-surface-gray)
- Padding: 20px top, 15px bottom
- Font: Inter

**Step 1: Build sidebar with Collections and Categories sections**

```tsx
// marketplace-sidebar.tsx
"use client"

import { useState } from "react"
import { ChevronUp, Search } from "lucide-react"

const COLLECTIONS = [
  "All Collections",
  "Apps",
  "Starters",
  "Content Models",
  "Recipes",
]

const CATEGORIES = [
  "A/B Testing", "AI Assistance", "Analytics", "Artificial Intelligence",
  "Automate", "Automations", "Commerce", "Communication",
  "Content Management", "DAM", "Data Integration", "Developer Tools",
  "E-Commerce", "Email", "Frontend Framework", "Hosting",
  "Localization", "Marketing", "Monitoring", "Personalization",
  "Project Management", "Search", "Security", "SEO",
]

export function MarketplaceSidebar() {
  const [activeCollection, setActiveCollection] = useState("All Collections")
  const [categorySearch, setCategorySearch] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const filteredCategories = CATEGORIES.filter(c =>
    c.toLowerCase().includes(categorySearch.toLowerCase())
  )

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <aside className="w-[240px] shrink-0 bg-[#F7F9FC] border-r border-[#DDE3EE] pt-5 pb-4 overflow-y-auto">
      {/* Collections */}
      <div className="px-5 mb-4">
        <button className="flex items-center justify-between w-full text-sm font-semibold text-[#475161] mb-3">
          <span>Collections</span>
          <ChevronUp className="w-4 h-4" />
        </button>
        <ul className="space-y-0.5">
          {COLLECTIONS.map(name => (
            <li key={name}>
              <button
                onClick={() => setActiveCollection(name)}
                className={`w-full text-left text-sm py-1.5 px-3 rounded transition-colors ${
                  activeCollection === name
                    ? "text-[#6C5CE7] font-medium border-l-2 border-[#6C5CE7] bg-white"
                    : "text-[#475161] hover:text-[#222] hover:bg-white/60"
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="px-5">
        <button className="flex items-center justify-between w-full text-sm font-semibold text-[#475161] mb-3">
          <span>Categories</span>
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Search box */}
        <div className="relative mb-3">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8E96A3]" />
          <input
            type="text"
            placeholder="Search Categories"
            value={categorySearch}
            onChange={e => setCategorySearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-sm border border-[#DDE3EE] rounded bg-white placeholder:text-[#8E96A3] focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7]"
          />
        </div>

        {/* Checkboxes */}
        <ul className="space-y-1 max-h-[400px] overflow-y-auto">
          {filteredCategories.map(name => (
            <li key={name}>
              <label className="flex items-center gap-2 text-sm text-[#475161] cursor-pointer py-0.5">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(name)}
                  onChange={() => toggleCategory(name)}
                  className="w-4 h-4 rounded border-[#DDE3EE] text-[#6C5CE7] focus:ring-[#6C5CE7]"
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
```

**Step 2: Verify sidebar renders correctly**

Run: `open http://localhost:3000/marketplace-v2`
Expected: 240px sidebar with Collections (All Collections active in purple) and Categories with search + checkboxes.

**Step 3: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/components/
git commit -m "feat: add marketplace-v2 sidebar with collections and categories"
```

---

### Task 3: Content Header Bar

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v2/components/content-header.tsx`
- Modify: `apps/demo/src/app/(app)/marketplace-v2/page.tsx`

**From capture zone 2 (content-header):**
- Height: 90px, background: `#F7F9FC`
- Flex row, padding: 0 20px 0 10px
- Fixed position below nav

**Step 1: Build content header with back button, title, search, Build New App**

```tsx
// content-header.tsx
import { ChevronLeft, Search, ExternalLink } from "lucide-react"

export function ContentHeader() {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-[#F7F9FC] border-b border-[#DDE3EE]">
      {/* Left: Back + Title */}
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7]/5 transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h1 className="text-base font-semibold text-[#222]">All Collections</h1>
      </div>

      {/* Center: Search */}
      <div className="flex items-center max-w-[500px] flex-1 mx-8">
        <input
          type="text"
          placeholder="Search in All Collections"
          className="flex-1 px-4 py-2 text-sm border border-[#DDE3EE] rounded-l bg-white placeholder:text-[#8E96A3] focus:outline-none focus:border-[#6C5CE7]"
        />
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6C5CE7] text-white text-sm font-medium rounded-r hover:bg-[#5F51D8] transition-colors">
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>

      {/* Right: Build New App */}
      <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6C5CE7] text-white text-sm font-medium rounded hover:bg-[#5F51D8] transition-colors">
        Build New App
        <ExternalLink className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
```

**Step 2: Add to page**

```tsx
// page.tsx
import { ContentHeader } from "./components/content-header"
import { MarketplaceHero } from "./components/marketplace-hero"

export default function MarketplaceV2Page() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <ContentHeader />
      <div className="flex-1">
        {/* Hero and sections go here */}
      </div>
    </div>
  )
}
```

**Step 3: Verify header renders**

Expected: Purple back button, "All Collections" title, search bar with purple Search button, purple "Build New App ↗" button.

**Step 4: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/
git commit -m "feat: add marketplace-v2 content header bar"
```

---

### Task 4: Hero Section

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v2/components/marketplace-hero.tsx`
- Modify: `apps/demo/src/app/(app)/marketplace-v2/page.tsx`

**From capture zone 3 (main) + screenshots:**
- Full-width section with background image on right
- Background image URL from capture: Contentstack CDN hero image
- Text area on left: heading, description, "New to Marketplace?" link

**Step 1: Build hero section**

```tsx
// marketplace-hero.tsx
export function MarketplaceHero() {
  return (
    <section
      className="relative min-h-[372px] mb-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F7F9FC 0%, #EEF0F7 50%, #E8E5F5 100%)",
      }}
    >
      {/* Background image — single PNG with floating app icons */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full bg-no-repeat bg-right bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5d8ee/marketplace-hero-image.png')"
        }}
      />

      {/* Text content */}
      <div className="relative z-10 ml-16 mt-20 max-w-[600px]">
        <h2 className="text-[34px] font-semibold leading-[42.5px] text-[#212121] mb-4">
          Contentstack Marketplace:<br />
          Where composable happens
        </h2>
        <p className="text-base leading-6 text-[#475161] mb-4">
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project&apos;s journey from concept to launch.
        </p>
        <p className="text-sm text-[#475161]">
          New to Marketplace? Use{" "}
          <a href="#" className="text-[#6C5CE7] hover:underline">
            these guides
          </a>{" "}
          to get started.
        </p>
      </div>
    </section>
  )
}
```

**Step 2: Wire into page**

Update page.tsx to render `<MarketplaceHero />` inside the content area.

**Step 3: Verify hero**

Expected: Gradient background, "Contentstack Marketplace" heading on left, floating icons image on right.

**Note:** The exact hero background image URL needs to be extracted from the capture data. If the CDN image isn't accessible, use a placeholder with the same gradient.

**Step 4: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/
git commit -m "feat: add marketplace-v2 hero section"
```

---

### Task 5: Section Component + App Card

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v2/components/marketplace-section.tsx`
- Create: `apps/demo/src/app/(app)/marketplace-v2/components/app-card.tsx`

**From capture zone 4 (section) + screenshots:**
- Section: Title (22px semibold) with dashed divider + "View All" link in purple
- Description text below title
- 3-column card grid with gap-6
- Two card variants: icon (Apps) and banner (Starters, Content Models, Recipes)

**Step 1: Build reusable section wrapper**

```tsx
// marketplace-section.tsx
interface MarketplaceSectionProps {
  title: string
  description: string
  viewAllLabel: string
  viewAllHref?: string
  children: React.ReactNode
}

export function MarketplaceSection({
  title,
  description,
  viewAllLabel,
  viewAllHref = "#",
  children,
}: MarketplaceSectionProps) {
  return (
    <section className="px-6 mb-10">
      {/* Title row with dashed divider */}
      <div className="flex items-center gap-4 mb-3">
        <h3 className="text-[22px] font-semibold text-[#222] whitespace-nowrap">{title}</h3>
        <div className="flex-1 border-t border-dashed border-[#DDE3EE]" />
        <a href={viewAllHref} className="text-sm text-[#6C5CE7] hover:underline whitespace-nowrap">
          {viewAllLabel}
        </a>
      </div>

      {/* Description */}
      <p className="text-base leading-6 text-[#475161] mb-5 max-w-[900px]">
        {description}
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  )
}
```

**Step 2: Build app card with two variants**

```tsx
// app-card.tsx
interface AppCardProps {
  title: string
  subtitle?: string
  icon?: string
  banner?: string
  variant?: "icon" | "banner"
  onAction?: () => void
}

export function AppCard({
  title,
  subtitle,
  icon,
  banner,
  variant = "icon",
}: AppCardProps) {
  if (variant === "banner") {
    return (
      <div className="border border-[#DDE3EE] rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white">
        {/* Banner image */}
        <div className="h-[160px] bg-[#F7F9FC] overflow-hidden">
          {banner ? (
            <img src={banner} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#F0EDFF] to-[#E8E5F5]" />
          )}
        </div>
        {/* Title */}
        <div className="px-4 py-3">
          <p className="text-sm font-medium text-[#222] truncate">{title}</p>
        </div>
      </div>
    )
  }

  // Icon variant (Apps)
  return (
    <div className="border border-[#DDE3EE] rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white">
      {/* Icon area */}
      <div className="h-[120px] flex items-center justify-center bg-[#FAFBFC]">
        {icon ? (
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-[#F0EDFF]" />
        )}
      </div>
      {/* Info */}
      <div className="px-4 py-3 border-t border-[#F0F2F5]">
        <p className="text-sm font-medium text-[#222]">{title}</p>
        {subtitle && (
          <p className="text-xs text-[#8E96A3] mt-0.5 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8zm8-3a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 018 5z"/>
            </svg>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
```

**Step 3: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/components/
git commit -m "feat: add marketplace-v2 section wrapper and app card components"
```

---

### Task 6: Wire Up All Sections with Sample Data

**Files:**
- Modify: `apps/demo/src/app/(app)/marketplace-v2/page.tsx`

**Step 1: Build complete page with all 4 sections + bottom banner**

Wire together: ContentHeader → MarketplaceHero → Apps section → Starters section → Content Models section → Recipes section → "Can't find" banner.

Sample data arrays for each section (3 items each), matching prod screenshots:
- **Apps:** AI Assistant, Algolia, Automate (icon variant, subtitle "Stack App")
- **Starters:** Kickstart Next.js, Kickstart NuxtJS, React Starter (banner variant with CDN images)
- **Content Models:** Hero Banner, Website Homepage, Blog Landing Page (banner variant)
- **Recipes:** Backup Entries to AWS S3, Send Notifications to Slack Channel, Translate Content using Smartling (icon variant with paired icons)

Plus bottom banner: "Can't find what you're looking for?" with "Submit Request" button.

**Step 2: Verify full page**

Expected: Full marketplace page matching prod screenshots — sidebar, header, hero, 4 sections with cards, bottom banner.

**Step 3: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/
git commit -m "feat: complete marketplace-v2 page with all sections and sample data"
```

---

### Task 7: Visual Polish Pass

**Files:**
- Modify: Various marketplace-v2 components as needed

**Step 1: Compare side-by-side with prod screenshots**

Open prod marketplace and `/marketplace-v2` side by side. Check:
- [ ] Sidebar width, padding, active state styling
- [ ] Content header alignment, button styles
- [ ] Hero gradient, text sizing, spacing
- [ ] Section title dashed divider alignment
- [ ] Card border radius, shadow, hover states
- [ ] Bottom banner colors and layout
- [ ] Overall spacing between sections

**Step 2: Fix any visual discrepancies found**

Adjust Tailwind classes to match capture data (computed styles).

**Step 3: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v2/
git commit -m "fix: visual polish pass matching prod marketplace"
```
