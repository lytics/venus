# Marketplace V3 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create `/marketplace-v3` page with production-accurate styling from vacuum captures, keeping the shared top bar with corrected marketplace nav item styling.

**Architecture:** Copy v2 as base, then update every component to match production capture dimensions/colors/spacing. Top-nav gets marketplace-v3 path detection + production-accurate nav button styling (font-weight 500, letter-spacing 0.24px, height 32px). All components below top bar rebuilt from capture data.

**Tech Stack:** Next.js App Router, Tailwind CSS, React components, existing venus_external patterns.

---

### Task 1: Update top-nav.tsx for marketplace-v3 paths

**Files:**
- Modify: `/Users/ellisedwards/Code/workspace/venus_external/apps/demo/src/components/top-nav.tsx`

**Step 1: Add marketplace-v3 path detection**

In the `productBranding` useMemo (line ~267), add a clause for `/marketplace-v3`:

```tsx
if (pathname.startsWith('/marketplace-v3')) {
  return {
    iconPath: '/images/contentstack-marketplace.svg',
    productName: 'Marketplace',
    href: '/marketplace-v3'
  };
}
```

In the SectionNav rendering (line ~381), add:

```tsx
{pathname.startsWith('/marketplace-v3') && (
  <SectionNav items={MARKETPLACE_NAV} pathname={pathname} />
)}
```

**Step 2: Fix marketplace nav item styling to match production**

Production capture shows these nav button properties:
- `font-weight: 500` (we have `font-semibold` = 600)
- `letter-spacing: 0.24px` (we have none)
- `height: 32px` / `min-height: 32px` (we have auto)
- `line-height: 18px` (we have default)
- Icon fill: `#475161` (we use `currentColor`)
- `border-radius: 4px` (we have `rounded`)

Update `NavItemComponent` styles. The key class string changes from:
```
"flex items-center px-2 py-1 text-xs font-semibold"
```
to:
```
"flex items-center px-2 py-1 text-xs font-medium h-8 min-h-8 tracking-[0.24px] leading-[18px] rounded-[4px]"
```

Apply this to ALL three variants in NavItemComponent (dropdown button at line 180, disabled button at line 200, link at line 214).

Also update ManageAppsIcon and AuditLogsIcon SVGs (lines 124-135) to use `fill="#475161"` instead of `fill="currentColor"`.

**Step 3: Verify**

Run: `cd /Users/ellisedwards/Code/workspace/venus_external && pnpm dev`
Navigate to `/marketplace-v3` — top bar should show with Marketplace branding and corrected nav items.

**Step 4: Commit**

```bash
git add apps/demo/src/components/top-nav.tsx
git commit -m "feat: add marketplace-v3 path detection + production-accurate nav styling"
```

---

### Task 2: Create marketplace-v3 directory scaffold

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v3/layout.tsx`
- Create: `apps/demo/src/app/(app)/marketplace-v3/page.tsx`
- Create: `apps/demo/src/app/(app)/marketplace-v3/components/` (directory)

**Step 1: Create layout**

Copy from v2 layout — sidebar + main content area:

```tsx
"use client"

import { ReactNode } from "react"
import { MarketplaceSidebar } from "./components/marketplace-sidebar"

export default function MarketplaceV3Layout({ children }: { children: ReactNode }) {
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
"use client"

import { ContentHeader } from "./components/content-header"

export default function MarketplaceV3Page() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <ContentHeader />
      <div className="flex-1">
        <p className="p-6 text-sm text-gray-500">Content coming in next tasks...</p>
      </div>
    </div>
  )
}
```

**Step 3: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v3/
git commit -m "feat: scaffold marketplace-v3 directory with layout"
```

---

### Task 3: Build marketplace-v3 sidebar from capture

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v3/components/marketplace-sidebar.tsx`

**Source:** Vacuum capture zone 1 (`cap_1769723371424_xde4et`) — `div.PageLayout__leftSidebar`

**Production styling (from capture):**
- Width: 240px
- Background: `#F7F9FC`
- Border-right: `1px solid #DDE3EE`
- Collections section heading: uppercase, `#8E99A4`, 12px, semibold
- Active collection item: `#6C5CE7` text, white bg, 2px left border `#6C5CE7`
- Inactive item: `#475161`, 13px, line-height 20px
- Category search: white bg, `#DDE3EE` border
- Checkbox accent: `#6C5CE7`

Copy v2 sidebar as-is — it already matches production closely. The only difference: add `border-t border-[#DDE3EE]` to the aside (production shows top border from layout glue).

**Step 1:** Copy v2 sidebar to v3, add border-top.

**Step 2: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v3/components/marketplace-sidebar.tsx
git commit -m "feat: add marketplace-v3 sidebar"
```

---

### Task 4: Build content-header from capture

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v3/components/content-header.tsx`

**Source:** Vacuum capture zone 2 (`cap_1769723371683_rbgqqk`) — `div.PageLayout__head`

**Production styling:**
- Root: height 90px, padding `0 20px 0 10px`, bg `#F7F9FC`
- Border: top/bottom/left `1px solid #DDE3EE`, no right border
- Hamburger/caret icon: 32x32 SVG, `#475161` fill
- PageTitle: `20px`, weight `600`, color `#222`, line-height `30px`
- Build New App button: `#6C5CE7` bg, white text, size-small, rounded
- Layout: flex row, items centered, space-between via PageHeader flex

v2 content-header uses height 56px — production is 90px. Key fix.

**Step 1:** Create content-header matching production:

```tsx
"use client"

import { ExternalLink } from "lucide-react"

export function ContentHeader() {
  return (
    <header className="flex items-center h-[90px] shrink-0 bg-[#F7F9FC] border-t border-b border-l border-[#DDE3EE] pl-[10px] pr-[20px]">
      {/* Collapse sidebar caret */}
      <button className="w-8 h-8 shrink-0 flex items-center justify-center cursor-pointer" aria-label="Toggle sidebar">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161"/>
        </svg>
      </button>

      {/* Title */}
      <h1 className="text-[20px] font-semibold text-[#222] leading-[30px] whitespace-nowrap ml-2">
        All Collections
      </h1>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Build New App button */}
      <button className="flex items-center gap-1.5 h-[32px] px-4 bg-[#6C5CE7] text-white text-[12px] font-medium leading-[18px] tracking-[0.24px] rounded-[4px] hover:bg-[#5A4BD1] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0">
        Build New App
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="#647696"/>
        </svg>
      </button>
    </header>
  )
}
```

**Step 2: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v3/components/content-header.tsx
git commit -m "feat: add marketplace-v3 content-header (90px, production styling)"
```

---

### Task 5: Build hero banner from capture

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v3/components/marketplace-hero.tsx`

**Source:** Capture zone 4 child 0 — `div.app-banner`

**Production styling:**
- Height: 372px
- Margin-bottom: 15px
- Background: dual-layer — `url("...banner-image") no-repeat 100% 50%` over `linear-gradient(rgba(255,255,255,0.48), rgba(221,227,238,0.48))`
- Banner content area: padding 80px 0 0 60px
- Heading: 34px, weight 600, color `#212121`, line-height 42.5px, width 600px
- Description: 16px, weight 400, color `#475161`, line-height 24px, margin-top 12px, width 600px
- Guide text: 14px, weight 400, color `#475161`, link color `#6C5CE7`

**Step 1:** Create hero matching production exactly:

```tsx
"use client"

export function MarketplaceHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: 372,
        marginBottom: 15,
        background: `url('https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blte9d0c4604984a8a7/All%20collections%20page%20banner') no-repeat 100% 50%, linear-gradient(rgba(255,255,255,0.48), rgba(221,227,238,0.48))`,
      }}
    >
      <div className="pt-[80px] pl-[60px] max-w-[600px]">
        <h2 className="text-[34px] font-semibold leading-[42.5px] text-[#212121]">
          Contentstack Marketplace:<br />
          Where composable happens
        </h2>
        <p className="text-[16px] font-normal leading-[24px] text-[#475161] mt-[12px]">
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project&apos;s journey from concept to launch.
        </p>
        <p className="text-[14px] font-normal text-[#475161] mt-[12px]">
          New to Marketplace? Use{" "}
          <a href="https://www.contentstack.com/docs/developers/marketplace-platform-guides/" target="_blank" className="text-[#6C5CE7] hover:underline">
            these
          </a>{" "}
          guides to get started.
        </p>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v3/components/marketplace-hero.tsx
git commit -m "feat: add marketplace-v3 hero banner (production dimensions)"
```

---

### Task 6: Build section + card components from capture

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v3/components/marketplace-section.tsx`
- Create: `apps/demo/src/app/(app)/marketplace-v3/components/app-card.tsx`

**Source:** Capture zone 4 children 12-21 (section structure) and 22-23 (card)

**Production section styling:**
- Section heading (h4): 22px, weight 600, color `#222`, line-height 33px
- Dashed divider: border-top dashed `#DDE3EE`
- "View All" link: 14px, color `#6C5CE7`
- Description: 14px, weight 400, color `#475161`, line-height 25px, margin-left 15px
- Card grid: flex-wrap with 15px gap (margin on cards)

**Production card styling:**
- Container: width 320px, height 246px, border `1px solid #DDE3EE`, border-radius 4px, margin 15px, cursor pointer
- Icon area (Card heading): 318px × 160px, border-radius 4px
- Card body: padding 16px, border-top `1px solid #DDE3EE`
- Card title: 16px, weight 600, color `#212121`, line-height 24px
- Card subtitle: 12px, color `#8E96A3`

Key differences from v2:
- v2 cards use `grid grid-cols-3 gap-6` → production uses flex-wrap with 320px fixed-width cards and 15px margin
- v2 card height is auto → production is fixed 246px
- v2 title is 14px → production is 16px weight 600
- v2 icon area height is 120px → production is 160px
- v2 body padding is `px-3 py-2.5` → production is 16px all sides

**Step 1:** Create section component:

```tsx
import { ReactNode } from "react"

interface MarketplaceSectionProps {
  title: string
  description: string
  viewAllLabel: string
  viewAllHref?: string
  children: ReactNode
}

export function MarketplaceSection({ title, description, viewAllLabel, viewAllHref = "#", children }: MarketplaceSectionProps) {
  return (
    <section className="mb-10 px-[15px]">
      <div className="flex items-center gap-4">
        <h3 className="text-[22px] font-semibold text-[#222] whitespace-nowrap leading-[33px]">
          {title}
        </h3>
        <div className="flex-1 border-t border-dashed border-[#DDE3EE]" />
        <a href={viewAllHref} target="_blank" className="text-[14px] text-[#6C5CE7] hover:underline whitespace-nowrap shrink-0">
          {viewAllLabel}
        </a>
      </div>
      <p className="mt-2 ml-[15px] text-[14px] font-normal leading-[25px] text-[#475161] max-w-[828px]">
        {description}
      </p>
      <div className="flex flex-wrap">
        {children}
      </div>
    </section>
  )
}
```

**Step 2:** Create card component matching production 320×246 cards:

```tsx
import { ReactNode } from "react"

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M8 1L1 5l7 4 7-4-7-4z" fill="#8E96A3" stroke="#8E96A3" strokeWidth="0.5" strokeLinejoin="round"/>
      <path d="M1 8l7 4 7-4" stroke="#8E96A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 11l7 4 7-4" stroke="#8E96A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

interface IconCardProps {
  variant: "icon"
  title: string
  icon: ReactNode
  subtitle?: string
}

function IconCard({ title, icon, subtitle }: IconCardProps) {
  return (
    <div className="flex flex-col w-[320px] h-[246px] m-[15px] border border-[#DDE3EE] rounded-[4px] overflow-hidden cursor-pointer hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div className="flex items-center justify-center h-[160px] rounded-[4px]">
        {icon}
      </div>
      <div className="p-4 border-t border-[#DDE3EE]">
        <p className="text-[16px] font-semibold text-[#212121] leading-[24px] truncate">{title}</p>
        {subtitle && (
          <span className="mt-1 flex items-center gap-1 text-[12px] text-[#8E96A3] leading-[16px]">
            <LayersIcon />
            {subtitle}
          </span>
        )}
      </div>
    </div>
  )
}

interface BannerCardProps {
  variant: "banner"
  title: string
  bannerSrc: string
  bannerAlt?: string
}

function BannerCard({ title, bannerSrc, bannerAlt }: BannerCardProps) {
  return (
    <div className="flex flex-col w-[320px] h-[246px] m-[15px] border border-[#DDE3EE] rounded-[4px] overflow-hidden cursor-pointer hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div className="h-[160px] overflow-hidden">
        <img src={bannerSrc} alt={bannerAlt ?? title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 border-t border-[#DDE3EE]">
        <p className="text-[16px] font-semibold text-[#212121] leading-[24px] truncate">{title}</p>
      </div>
    </div>
  )
}

export type AppCardProps = IconCardProps | BannerCardProps

export function AppCard(props: AppCardProps) {
  if (props.variant === "banner") return <BannerCard {...props} />
  return <IconCard {...props} />
}
```

**Step 3: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v3/components/marketplace-section.tsx apps/demo/src/app/\(app\)/marketplace-v3/components/app-card.tsx
git commit -m "feat: add marketplace-v3 section + card components (320x246 cards)"
```

---

### Task 7: Assemble the full page

**Files:**
- Modify: `apps/demo/src/app/(app)/marketplace-v3/page.tsx`

**Step 1:** Wire up all components with production data. Same app data as v2 but with the v3 components. Include all 4 sections (Apps, Starters, Content Models, Recipes) + bottom CTA banner.

Copy page.tsx content from v2 but import from `./components/...` (v3 components) and update the bottom banner styling if needed.

**Step 2: Commit**

```bash
git add apps/demo/src/app/\(app\)/marketplace-v3/page.tsx
git commit -m "feat: assemble marketplace-v3 page with all sections"
```

---

### Task 8: Visual verification

**Step 1:** Run dev server, navigate to `/marketplace-v3`, take screenshot

**Step 2:** Compare against production:
- Top bar: Marketplace SVG left, Manage Apps + Audit Logs nav items (font-medium, 32px height), right icons
- Content header: 90px height, caret left icon, "All Collections" title (20px), "Build New App" button
- Sidebar: 240px, `#F7F9FC` bg, collections + categories
- Hero: 372px, gradient + background image, heading 34px
- Cards: 320×246px, 160px icon area, 16px title
- Sections: 22px headings, dashed dividers, "View All" links

**Step 3:** Fix any discrepancies found. Commit.

---

## Key Production Values Reference (from vacuum captures)

| Element | Property | Value |
|---------|----------|-------|
| Nav buttons | font-weight | 500 |
| Nav buttons | letter-spacing | 0.24px |
| Nav buttons | height | 32px |
| Nav buttons | line-height | 18px |
| Nav buttons | color | #475161 |
| Content header | height | 90px |
| Content header | padding | 0 20px 0 10px |
| Page title | font-size | 20px / weight 600 |
| Hero banner | height | 372px |
| Hero heading | font-size | 34px / weight 600 |
| Section heading | font-size | 22px / weight 600 / line-height 33px |
| Section desc | font-size | 14px / line-height 25px |
| Card | dimensions | 320 × 246px |
| Card icon area | height | 160px |
| Card title | font-size | 16px / weight 600 |
| Card margin | all sides | 15px |
