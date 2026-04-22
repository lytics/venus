# CMS Stacks Dashboard - Implementation Plan

## Overview

Build a CMS stacks section modeled after the Contentstack dashboard, with three pages:
1. `/stacks` - Stack listing page (like `/personalize`)
2. `/stacks/[stack-name]` - Stack dashboard with horizontal nav
3. `/stacks/[stack-name]/blank` - Blank app template page

---

## Current Status (Updated)

| Component/Page | Status | Notes |
|----------------|--------|-------|
| StackCard component | ✅ Done | `components/stack-card.tsx` |
| `/stacks` listing page | ✅ Done | Uses PageSearchHeader + StackCard grid |
| CMSBreadcrumb (stack/branch bar) | ✅ Done | `components/cms-breadcrumb.tsx` - not currently used |
| CMSTopNav (breadcrumb bar) | ✅ Done | `components/cms-top-nav.tsx` - used in stack layout |
| Stack layout | ✅ Done | Shows breadcrumb bar, content area |
| Stack dashboard | ✅ Done | 3-column layout with cards, help section |
| Blank app page | 🟡 Skeleton | Basic white content area |
| **Horizontal CMS nav** | ❌ Not built | Dashboard/Entries/Assets/etc. nav bar |

**What's missing:** The horizontal navigation bar with Dashboard (active) and disabled items (Entries, Assets, Content Models, Visual Experience, Publish Queue, Releases, Tasks, Settings).

---

## Screenshots Reference

- **Dashboard** (`dashboard.png`): Shows the main stack dashboard with horizontal nav, app preview pane, What's New card, Academy carousel, and help section
- **Blank Page** (`blank page.png`): Shows the blank template with nav but empty content area for apps

---

## Route Structure

```
apps/demo/src/app/(app)/stacks/
├── page.tsx                    # ✅ Stacks listing (grid of stack cards)
├── layout.tsx                  # ✅ Section layout wrapper
└── [stackName]/
    ├── page.tsx                # ✅ Stack dashboard
    ├── layout.tsx              # ✅ Stack-level layout with breadcrumb
    └── blank/
        └── page.tsx            # 🟡 Blank app page (skeleton)
```

---

## Remaining Work

### 1. Stack Listing Page
**File:** `apps/demo/src/app/(app)/stacks/page.tsx`

Pattern: Copy from `/personalize/page.tsx`

```tsx
// Key elements:
- PageSearchHeader with title "Stacks"
- Action button: "New Stack"
- Grid of StackCard components
- Click card → navigate to /stacks/[stack-name]
```

### 2. Stack Card Component
**File:** `apps/demo/src/components/stack-card.tsx`

Similar to `ProjectCard` but for stacks:

```tsx
interface StackCardProps {
  name: string          // e.g., "Compass Starter"
  branch: string        // e.g., "main"
  envCount?: number     // Number of environments
  modifiedDate: string  // e.g., "Dec 09, 2024"
  onClick?: () => void
}
```

No secondary app icons (simpler than ProjectCard).

### 3. CMS Top Navigation Component
**File:** `apps/demo/src/components/cms-top-nav.tsx`

Visual structure:
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [CS Logo] Headless CMS │ Dashboard │ Entries │ Assets │ Content... │ Apps ▼  │ 🔍 🔔 ⋮ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

Nav items:
- **Dashboard** - Active/clickable
- **Entries** - Disabled (cursor-not-allowed)
- **Assets** - Disabled
- **Content Models** - Disabled
- **Visual Experience** - Disabled
- **Publish Queue** - Disabled
- **Releases** - Disabled
- **Tasks** - Disabled
- **Settings** - Disabled
- **Apps** - Dropdown (functional)

Right side: Search, Bell, Grid icons

### 4. CMS Breadcrumb Bar
**File:** `apps/demo/src/components/cms-breadcrumb.tsx`

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ 🏢 Compass Starter  >  🌿 main                                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

- Light blue background (#F1F6FF)
- Stack icon + name
- Branch icon + branch name
- Uses existing breadcrumb components

### 5. Stack Dashboard Layout
**File:** `apps/demo/src/app/(app)/stacks/[stackName]/layout.tsx`

```tsx
export default function StackLayout({ children, params }) {
  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      <CMSBreadcrumb stackName={params.stackName} branch="main" />
      <CMSTopNav />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
```

### 6. Stack Dashboard Page
**File:** `apps/demo/src/app/(app)/stacks/[stackName]/page.tsx`

Layout from screenshot:
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Dashboard (?)                                      [✏️] [+ Dashboard Extension] │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌────────────────┐  ┌─────────────────────┐  ┌───────────────────────────────┐ │
│  │   App Name     │  │    What's New?      │  │   Contentstack Academy        │ │
│  │                │  │    (purple bg)      │  │                               │ │
│  │   (preview     │  │                     │  │   Omni-Channel...             │ │
│  │    pane)       │  │   Updated App:      │  │                               │ │
│  │                │  │   Healthcheck...    │  │   Learn More   < Prev  Next > │ │
│  │                │  │                     │  │                               │ │
│  │                │  │   Learn more        │  │                               │ │
│  └────────────────┘  └─────────────────────┘  └───────────────────────────────┘ │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐│
│  │ 🔍 Search help content                                                      ││
│  │                                                                             ││
│  │ Understanding Modular Blocks                                                ││
│  │ Modular Blocks simplify content management...                               ││
│  │                                                                             ││
│  │ Learn more                                    < Previous   Next >           ││
│  └─────────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 7. Blank App Page
**File:** `apps/demo/src/app/(app)/stacks/[stackName]/blank/page.tsx`

- Same nav structure
- Apps dropdown showing current app (e.g., "form-builder")
- Title area: "Form Builder" with subtitle
- Large white content area (empty placeholder)
- Optional Configure/Preview tabs at top

---

## Existing Components to Use

### From Venus (`@contentstack/venuscn`)
- `PageSearchHeader` - Stacks listing header
- `Button` - Actions, nav items
- `Search` / `SearchV3` - Help search input
- `Card`, `CardHeader`, `CardContent` - Dashboard cards
- `Dropdown` - Apps dropdown

### From Demo App
- `ContentstackLogo` from `@/components/contentstack-logo.tsx`
- Breadcrumb components from `@/components/ui/breadcrumb`
- `ProjectCard` as reference for `StackCard`

### SVGs (from `/public/images/`)
- `icon-headless-cms.svg` - CMS logo icon
- `icon-contentstack-home.svg` - Home icon
- `organization.svg` - Organization/stack icon
- Plus lucide icons: `HelpCircle`, `Bell`, `Search`, `Grid3x3`, `ChevronDown`

---

## Styling Reference

### Colors (matching personalize section)
| Element | Color |
|---------|-------|
| Page header bg | `#F7F9FC` |
| Nav bar bg | White with `border-gray-200` bottom |
| Breadcrumb bg | `#F1F6FF` |
| Content area bg | `#F5F6F8` |
| What's New card | Purple gradient |
| Disabled text | `opacity-50` |

### Nav Item States
```tsx
// Active (Dashboard)
className="text-primary font-medium"

// Disabled (other items)
className="text-gray-400 cursor-not-allowed opacity-50"
```

### Card Styling
```tsx
className="bg-white rounded border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
```

---

## Implementation Order

1. ~~**`StackCard` component**~~ ✅ Done
2. ~~**`/stacks` page**~~ ✅ Done
3. ~~**`CMSBreadcrumb` component**~~ ✅ Done (cms-top-nav.tsx)
4. **`CMSHorizontalNav` component** - ❌ **TODO**: Horizontal nav with disabled states
5. ~~**`/stacks/[stackName]/layout.tsx`**~~ ✅ Done (needs CMSHorizontalNav added)
6. ~~**`/stacks/[stackName]/page.tsx`**~~ ✅ Done
7. **`/stacks/[stackName]/blank/page.tsx`** - 🟡 Needs title bar, app dropdown

---

## Next Steps

### 1. Build CMSHorizontalNav Component
**File:** `apps/demo/src/components/cms-horizontal-nav.tsx`

The missing horizontal navigation bar with:
- "Headless CMS" logo/text on left
- Nav items: Dashboard (active), Entries (disabled), Assets (disabled), Content Models (disabled), etc.
- Apps dropdown (functional) on right
- Search, Bell, Grid icons on far right

### 2. Update Stack Layout
Add `<CMSHorizontalNav />` to the stack layout below the breadcrumb bar.

### 3. Enhance Blank App Page
Add:
- Title bar with app name (e.g., "Form Builder")
- Apps dropdown showing current app selection
- Configure/Preview tabs (optional)

---

## Key Decisions

| Decision | Choice |
|----------|--------|
| Nav item behavior | Disabled with `cursor-not-allowed` except Dashboard + Apps |
| Dashboard content | Full implementation (all sections from screenshot) |
| Route structure | `/stacks` → `/stacks/[stackName]` → `/stacks/[stackName]/blank` |
| Stack cards | Simplified version (no secondary app icons) |
| Apps dropdown | Functional, shows list of available apps |
