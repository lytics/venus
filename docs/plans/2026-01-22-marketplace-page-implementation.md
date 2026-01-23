# Marketplace Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the Marketplace page for the demo app with reusable Sidebar and AppCard components in the Venus library.

**Architecture:** Create two new Venus components (Sidebar, AppCard), integrate marketplace route detection into TopNav, and build the marketplace page layout with hero section and app grid. Follow existing Venus component patterns (flat file structure, forwardRef, cn utility).

**Tech Stack:** React 18/19, TypeScript, Tailwind CSS v4, Radix UI primitives, Next.js App Router

---

## Verified Specs (from app.contentstack.com)

All specs verified against production on 2026-01-22:

| Component | Spec |
|-----------|------|
| Sidebar | 240px width, #F7F9FC bg, 1px solid #DDE3EE border |
| Sidebar padding | 20px top, 15px bottom |
| Section headers | **14px/600, #475161** (corrected from original 12px/700/#222222) |
| Nav items | 16px/400, 40px height, #475161 inactive, #6C5CE7 active |
| Active nav | 3px left border #6C5CE7, #F0EDFC background |
| Toggle button | 24px circle, #DDE3EE bg, 1px solid #6C5CE7 |
| Checkbox | 13px × 13px |
| Sidebar search | 34px height, 14px font |
| AppCard | 320×246px, 1px solid #DDE3EE, 4px radius |
| Card icon area | 160px height, #F7F9FC bg, 72px icon |
| Card title | 16px/600, #212121, 24px line-height |
| Card subtitle | 12px/400, #6E6B86 |
| Card hover | shadow rgba(34,34,34,0.1) 0 8px 20px |
| Hover description | 14px/400, #475161, 21px line-height |
| Install button | 32px height, #6C5CE7, 14px/600, 4px radius |
| Hero title | 34px/600, #212121, 42.5px line-height |
| Hero body | 16px/400, #475161, 24px line-height |
| Section title | 22px/600, #222222 |
| Section description | 14px/400, #475161, 25px line-height |
| View All link | 14px/400, #6C5CE7 |
| TopNav height | 56px |

---

## Task 1: Create Sidebar Component - Base Container

**Files:**
- Create: `packages/venuscn/src/components/sidebar.tsx`

**Step 1: Create the base Sidebar component**

```tsx
import * as React from "react";
import { cn } from "../lib/utils";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  children?: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, onToggle, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col bg-[#F7F9FC] border-r border-[#DDE3EE]",
          "transition-[width] duration-200 ease-in-out",
          collapsed ? "w-0 overflow-hidden" : "w-60",
          className
        )}
        style={{ paddingTop: 20, paddingBottom: 15 }}
        {...props}
      >
        {children}
        {onToggle && (
          <button
            type="button"
            onClick={() => onToggle(!collapsed)}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -right-3",
              "w-6 h-6 rounded-full",
              "bg-[#DDE3EE] border border-[#6C5CE7]",
              "flex items-center justify-center",
              "hover:bg-[#E8E4FC] transition-colors"
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
              {collapsed ? (
                <path d="M11.47 5.47a.75.75 0 011.06 0l10 10a.75.75 0 010 1.06l-10 10a.75.75 0 11-1.06-1.06L20.94 16l-9.47-9.47a.75.75 0 010-1.06z" fill="#6C5CE7"/>
              ) : (
                <path d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#6C5CE7"/>
              )}
            </svg>
          </button>
        )}
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";
```

**Step 2: Run build to verify no TypeScript errors**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/sidebar.tsx
git commit -m "feat(venus): add Sidebar base component

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Create SidebarSection Component

**Files:**
- Modify: `packages/venuscn/src/components/sidebar.tsx`

**Step 1: Add SidebarSection with collapsible behavior**

Add after Sidebar component:

```tsx
export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, title, collapsible = false, defaultOpen = true, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    return (
      <div ref={ref} className={cn("px-2.5", className)} {...props}>
        <button
          type="button"
          onClick={() => collapsible && setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between w-full py-2",
            // Verified: 14px/600/#475161 (not 12px/700/#222222 as originally spec'd)
            "text-sm font-semibold text-[#475161] capitalize",
            collapsible && "cursor-pointer hover:text-[#6C5CE7]",
            !collapsible && "cursor-default"
          )}
          disabled={!collapsible}
        >
          <span>{title}</span>
          {collapsible && (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              className={cn(
                "transition-transform duration-200",
                isOpen ? "rotate-0" : "-rotate-90"
              )}
            >
              <path
                d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"
                fill="#647696"
              />
            </svg>
          )}
        </button>
        {isOpen && <div className="pb-2">{children}</div>}
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";
```

**Step 2: Run build to verify no TypeScript errors**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/sidebar.tsx
git commit -m "feat(venus): add SidebarSection component with collapsible behavior

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Create SidebarNav Component

**Files:**
- Modify: `packages/venuscn/src/components/sidebar.tsx`

**Step 1: Add SidebarNav and SidebarNavItem**

Add after SidebarSection:

```tsx
export interface SidebarNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[];
}

export const SidebarNav = React.forwardRef<HTMLElement, SidebarNavProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn("flex flex-col", className)} {...props}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center h-10 px-2.5",
              "text-base font-normal leading-4",
              "transition-colors duration-150",
              item.active
                ? "text-[#6C5CE7] border-l-[3px] border-[#6C5CE7] bg-[#F0EDFC]"
                : "text-[#475161] hover:text-[#6C5CE7] border-l-[3px] border-transparent"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }
);

SidebarNav.displayName = "SidebarNav";
```

**Step 2: Run build to verify no TypeScript errors**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/sidebar.tsx
git commit -m "feat(venus): add SidebarNav component for navigation items

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Create SidebarSearch Component

**Files:**
- Modify: `packages/venuscn/src/components/sidebar.tsx`

**Step 1: Add SidebarSearch**

Add after SidebarNav:

```tsx
import { Search } from "lucide-react";

export interface SidebarSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const SidebarSearch = React.forwardRef<HTMLInputElement, SidebarSearchProps>(
  ({ className, placeholder = "Search", ...props }, ref) => {
    return (
      <div className="relative px-2.5 mb-2">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0AEC0]" />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full h-[34px] pl-8 pr-2.5 rounded",
            "text-sm font-normal text-[#2D3748]",
            "placeholder:text-[#A0AEC0]",
            "border border-[#DDE3EE] bg-white",
            "focus:outline-none focus:border-[#6C5CE7]",
            "transition-colors duration-150",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

SidebarSearch.displayName = "SidebarSearch";
```

**Step 2: Run build to verify no TypeScript errors**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/sidebar.tsx
git commit -m "feat(venus): add SidebarSearch component

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Create SidebarCheckboxList Component

**Files:**
- Modify: `packages/venuscn/src/components/sidebar.tsx`

**Step 1: Add SidebarCheckboxList**

Add after SidebarSearch:

```tsx
export interface SidebarCheckboxItem {
  id: string;
  label: string;
}

export interface SidebarCheckboxListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarCheckboxItem[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const SidebarCheckboxList = React.forwardRef<HTMLDivElement, SidebarCheckboxListProps>(
  ({ className, items, selected, onChange, ...props }, ref) => {
    const handleToggle = (id: string) => {
      if (selected.includes(id)) {
        onChange(selected.filter((s) => s !== id));
      } else {
        onChange([...selected, id]);
      }
    };

    return (
      <div ref={ref} className={cn("flex flex-col gap-1 px-2.5", className)} {...props}>
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-2 py-1 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={() => handleToggle(item.id)}
              className={cn(
                "w-[13px] h-[13px] rounded-sm cursor-pointer",
                "border border-[#475161]",
                "checked:bg-[#6C5CE7] checked:border-[#6C5CE7]",
                "focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20"
              )}
            />
            <span className="text-base font-normal text-[#000000]">
              {item.label}
            </span>
          </label>
        ))}
      </div>
    );
  }
);

SidebarCheckboxList.displayName = "SidebarCheckboxList";
```

**Step 2: Run build to verify no TypeScript errors**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/sidebar.tsx
git commit -m "feat(venus): add SidebarCheckboxList component for filter lists

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Export Sidebar Components from Venus

**Files:**
- Modify: `packages/venuscn/src/components/index.ts`

**Step 1: Add exports for all Sidebar components**

Add at end of file:

```tsx
export {
  Sidebar,
  SidebarSection,
  SidebarNav,
  SidebarSearch,
  SidebarCheckboxList,
  type SidebarProps,
  type SidebarSectionProps,
  type SidebarNavProps,
  type SidebarNavItem,
  type SidebarSearchProps,
  type SidebarCheckboxListProps,
  type SidebarCheckboxItem,
} from "./sidebar";
```

**Step 2: Run build to verify exports work**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds, exports are in dist/index.d.ts

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/index.ts
git commit -m "feat(venus): export Sidebar components from package

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Create AppCard Component

**Files:**
- Create: `packages/venuscn/src/components/app-card.tsx`

**Step 1: Create the AppCard component**

```tsx
import * as React from "react";
import { cn } from "../lib/utils";
import { ExternalLink } from "lucide-react";

export interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  subtitle: string;
  description?: string;
  href?: string;
  onInstall?: () => void;
}

export const AppCard = React.forwardRef<HTMLDivElement, AppCardProps>(
  ({ className, icon, title, subtitle, description, href, onInstall, ...props }, ref) => {
    const CardWrapper = href ? 'a' : 'div';
    const wrapperProps = href ? { href } : {};

    return (
      <CardWrapper
        {...wrapperProps}
        className={cn(
          "group relative block w-80 h-[246px]",
          "border border-[#DDE3EE] rounded bg-white",
          "transition-shadow duration-150",
          "hover:shadow-[0_8px_20px_rgba(34,34,34,0.1)]",
          href && "cursor-pointer",
          className
        )}
      >
        <div
          ref={ref}
          {...props}
        >
          {/* Icon Area */}
          <div className="flex items-center justify-center h-40 bg-[#F7F9FC]">
            <img
              src={icon}
              alt={title}
              className="w-[72px] h-[72px] object-contain"
            />
          </div>

          {/* Card Body */}
          <div className="p-4">
            {/* Default State */}
            <div className="group-hover:hidden">
              <h3 className="text-base font-semibold text-[#212121] leading-6">
                {title}
              </h3>
              <p className="text-xs font-normal text-[#6E6B86]">
                {subtitle}
              </p>
            </div>

            {/* Hover State */}
            <div className="hidden group-hover:block">
              {description && (
                <p className="text-sm font-normal text-[#475161] leading-[21px] mb-3 line-clamp-2">
                  {description}
                </p>
              )}
              {onInstall && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onInstall();
                  }}
                  className={cn(
                    "flex items-center gap-1",
                    "h-8 px-4 rounded",
                    "bg-[#6C5CE7] text-white",
                    "text-sm font-semibold",
                    "hover:bg-[#5F51D8] transition-colors"
                  )}
                >
                  Install
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }
);

AppCard.displayName = "AppCard";
```

**Step 2: Run build to verify no TypeScript errors**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/app-card.tsx
git commit -m "feat(venus): add AppCard component with hover state

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Export AppCard from Venus

**Files:**
- Modify: `packages/venuscn/src/components/index.ts`

**Step 1: Add AppCard export**

Add to exports:

```tsx
export { AppCard, type AppCardProps } from "./app-card";
```

**Step 2: Run build to verify exports work**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add packages/venuscn/src/components/index.ts
git commit -m "feat(venus): export AppCard component from package

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Add Marketplace Route to TopNav

**Files:**
- Modify: `apps/demo/src/components/top-nav.tsx`

**Step 1: Add marketplace branding detection**

In the `productBranding` useMemo, add after the `/stacks` check:

```tsx
if (pathname.startsWith('/marketplace')) {
  return {
    iconPath: '/images/contentstack-marketplace.svg',
    productName: 'Marketplace',
    href: '/marketplace'
  };
}
```

**Step 2: Create the marketplace logo SVG**

Create file `apps/demo/public/images/contentstack-marketplace.svg`:

```svg
<svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mp-logo-grad" x1="2.671" y1="4.471" x2="32.921" y2="26.018" gradientUnits="userSpaceOnUse">
      <stop stop-color="#49A466"/>
      <stop offset="0.5" stop-color="#6F83F2"/>
      <stop offset="1" stop-color="#8A3DFF"/>
    </linearGradient>
  </defs>
  <path d="M5.996 9.001V5.326h20.008v3.675H5.996zm-.01 17.675v-7H4.684v-3.675l1.312-5.833h20.008L27.317 16v3.675h-1.313v7H22.33v-7h-3.325v7H5.986zm3.685-3.675h5.658v-3.325H9.671v3.325z" fill="url(#mp-logo-grad)"/>
  <text x="38" y="21" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="#222222">Marketplace</text>
</svg>
```

**Step 3: Run the dev server and verify**

Run: `cd apps/demo && pnpm dev`
Expected: Navigate to /marketplace shows marketplace branding in TopNav

**Step 4: Commit**

```bash
git add apps/demo/src/components/top-nav.tsx apps/demo/public/images/contentstack-marketplace.svg
git commit -m "feat(demo): add marketplace route detection to TopNav

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Create Marketplace Page Layout

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace/layout.tsx`
- Create: `apps/demo/src/app/(app)/marketplace/page.tsx`

**Step 1: Create the marketplace layout**

```tsx
// apps/demo/src/app/(app)/marketplace/layout.tsx
"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarSection,
  SidebarNav,
  SidebarSearch,
  SidebarCheckboxList,
} from "@contentstack/venuscn";

const collections = [
  { label: "All Collections", href: "/marketplace", active: false },
  { label: "Apps", href: "/marketplace/apps", active: false },
  { label: "Starters", href: "/marketplace/starters", active: false },
  { label: "Content Models", href: "/marketplace/content-models", active: false },
  { label: "Recipes", href: "/marketplace/recipes", active: false },
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
];

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const navItems = collections.map((item) => ({
    ...item,
    active: pathname === item.href,
  }));

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} onToggle={setCollapsed} className="relative shrink-0">
        <SidebarSection title="Collections" collapsible defaultOpen>
          <SidebarNav items={navItems} />
        </SidebarSection>

        {/* Divider between sections */}
        <div className="mx-2.5 my-2 border-t border-[#EDF1F7]" />

        <SidebarSection title="Categories" collapsible defaultOpen>
          <SidebarSearch placeholder="Search Categories" />
          <SidebarCheckboxList
            items={categories}
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />
        </SidebarSection>
      </Sidebar>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
```

**Step 2: Create the marketplace page**

```tsx
// apps/demo/src/app/(app)/marketplace/page.tsx
export default function MarketplacePage() {
  return (
    <div>
      <h1>Marketplace</h1>
      <p>Coming soon...</p>
    </div>
  );
}
```

**Step 3: Run dev server and verify layout**

Run: `cd apps/demo && pnpm dev`
Expected: /marketplace shows sidebar with collections and categories

**Step 4: Commit**

```bash
git add 'apps/demo/src/app/(app)/marketplace/layout.tsx' 'apps/demo/src/app/(app)/marketplace/page.tsx'
git commit -m "feat(demo): add marketplace page layout with sidebar

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Create Marketplace Hero Section

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace/components/marketplace-hero.tsx`

**Step 1: Create the hero component**

```tsx
// apps/demo/src/app/(app)/marketplace/components/marketplace-hero.tsx
import { cn } from "@/lib/utils";

interface MarketplaceHeroProps {
  title?: string;
  description?: string;
  className?: string;
}

export function MarketplaceHero({
  title = "Extend your Contentstack capabilities",
  description = "Browse and install apps, starters, content models, and recipes to enhance your content management workflow.",
  className,
}: MarketplaceHeroProps) {
  return (
    <div
      className={cn(
        "relative h-[372px] border-b border-[#EDF1F7]",
        "flex flex-col justify-center px-12",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.48), rgba(221,227,238,0.48)),
          url('https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt5a4ccf55fa6fc69f/605dd7e1baa74f78fe4c27f1/All_collections_page_banner.svg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[34px] font-semibold text-[#212121] leading-[42.5px] mb-4">
        {title}
      </h1>
      <p className="text-base font-normal text-[#475161] leading-6 max-w-2xl">
        {description}
      </p>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add 'apps/demo/src/app/(app)/marketplace/components/marketplace-hero.tsx'
git commit -m "feat(demo): add MarketplaceHero component

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Create Marketplace Section Component

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace/components/marketplace-section.tsx`

**Step 1: Create the section component**

```tsx
// apps/demo/src/app/(app)/marketplace/components/marketplace-section.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketplaceSectionProps {
  title: string;
  description?: string;
  viewAllHref?: string;
  children: React.ReactNode;
  className?: string;
}

export function MarketplaceSection({
  title,
  description,
  viewAllHref,
  children,
  className,
}: MarketplaceSectionProps) {
  return (
    <section className={cn("py-8 px-6", className)}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-[#222222] leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm font-normal text-[#475161] leading-[25px] mt-1">
              {description}
            </p>
          )}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-sm font-normal text-[#6C5CE7] hover:underline"
          >
            View all
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-6">
        {children}
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add 'apps/demo/src/app/(app)/marketplace/components/marketplace-section.tsx'
git commit -m "feat(demo): add MarketplaceSection component

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Create Marketplace Page Header Bar

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace/components/marketplace-header-bar.tsx`

**Step 1: Create the header bar component**

```tsx
// apps/demo/src/app/(app)/marketplace/components/marketplace-header-bar.tsx
import { cn } from "@/lib/utils";
import { Button, Input } from "@contentstack/venuscn";
import { Search, ExternalLink } from "lucide-react";

interface MarketplaceHeaderBarProps {
  className?: string;
}

export function MarketplaceHeaderBar({ className }: MarketplaceHeaderBarProps) {
  return (
    <div
      className={cn(
        "sticky top-14 z-10",
        "flex items-center justify-between gap-4",
        "h-[90px] px-6 bg-[#F7F9FC] border-b border-[#DDE3EE]",
        className
      )}
    >
      <div className="flex items-center gap-2 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0AEC0]" />
          <Input
            type="text"
            placeholder="Search marketplace..."
            className="pl-10"
          />
        </div>
        <Button variant="primary">
          Search
        </Button>
      </div>

      <Button
        variant="primary"
        size="small"
        className="h-8 text-sm gap-1"
      >
        Build New App
        <ExternalLink className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add 'apps/demo/src/app/(app)/marketplace/components/marketplace-header-bar.tsx'
git commit -m "feat(demo): add MarketplaceHeaderBar component

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Assemble Complete Marketplace Page

**Files:**
- Modify: `apps/demo/src/app/(app)/marketplace/page.tsx`

**Step 1: Update the page with all components**

```tsx
// apps/demo/src/app/(app)/marketplace/page.tsx
import { AppCard } from "@contentstack/venuscn";
import { MarketplaceHero } from "./components/marketplace-hero";
import { MarketplaceSection } from "./components/marketplace-section";
import { MarketplaceHeaderBar } from "./components/marketplace-header-bar";

const apps = [
  {
    id: "ai-assistant",
    title: "AI Assistant",
    subtitle: "Stack App",
    description: "Create brand and tone-specific content in seconds for your Contentstack entries.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt7d872c5a2f3a5d6a/64d90c5dbf5e7a6ea55e6e1b/AI-Assistant.svg",
  },
  {
    id: "algolia",
    title: "Algolia",
    subtitle: "Stack App",
    description: "Powerful search and discovery platform for your content.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/bltd9a7d2e7e9e4e5f5/algolia_icon.svg",
  },
  {
    id: "commercetools",
    title: "Commercetools",
    subtitle: "Stack App",
    description: "Connect your headless commerce platform with Contentstack.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt0c2e2e2e2e2e2e2e/commercetools_icon.svg",
  },
];

const starters = [
  {
    id: "nextjs-starter",
    title: "Next.js Starter",
    subtitle: "Starter",
    description: "A fully-featured Next.js starter with Contentstack integration.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt1234567890abcdef/nextjs_icon.svg",
  },
  {
    id: "gatsby-starter",
    title: "Gatsby Starter",
    subtitle: "Starter",
    description: "Build blazing fast websites with Gatsby and Contentstack.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt1234567890abcdef/gatsby_icon.svg",
  },
];

export default function MarketplacePage() {
  return (
    <div className="flex flex-col">
      <MarketplaceHeaderBar />
      <MarketplaceHero />

      <MarketplaceSection
        title="Apps"
        description="Extend Contentstack with powerful integrations and tools"
        viewAllHref="/marketplace/apps"
      >
        {apps.map((app) => (
          <AppCard
            key={app.id}
            icon={app.icon}
            title={app.title}
            subtitle={app.subtitle}
            description={app.description}
            href={`/marketplace/apps/${app.id}`}
            onInstall={() => console.log(`Install ${app.id}`)}
          />
        ))}
      </MarketplaceSection>

      <MarketplaceSection
        title="Starters"
        description="Jumpstart your project with pre-built templates"
        viewAllHref="/marketplace/starters"
      >
        {starters.map((starter) => (
          <AppCard
            key={starter.id}
            icon={starter.icon}
            title={starter.title}
            subtitle={starter.subtitle}
            description={starter.description}
            href={`/marketplace/starters/${starter.id}`}
          />
        ))}
      </MarketplaceSection>
    </div>
  );
}
```

**Step 2: Run dev server and verify complete page**

Run: `cd apps/demo && pnpm dev`
Expected: /marketplace shows hero, header bar, and app sections with cards

**Step 3: Commit**

```bash
git add 'apps/demo/src/app/(app)/marketplace/page.tsx'
git commit -m "feat(demo): assemble complete marketplace page with all components

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 15: Add Marketplace Nav Items to TopNav

**Files:**
- Modify: `apps/demo/src/components/top-nav.tsx`

**Step 1: Add marketplace-specific navigation**

In the navigation section, add a new condition after the CMS navigation block:

```tsx
) : pathname.startsWith('/marketplace') ? (
  // Marketplace-specific navigation
  <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center px-2 py-1 text-xs font-semibold text-[color:var(--color-heading)] rounded hover:bg-[color:var(--color-surface-gray)]"
        >
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="mr-1">
            <path d="M14 5.25A2.75 2.75 0 0011.25 8v1.25H7A1.75 1.75 0 005.25 11v14c0 .966.784 1.75 1.75 1.75h18A1.75 1.75 0 0026.75 25V11A1.75 1.75 0 0025 9.25h-4.25V8A2.75 2.75 0 0018 5.25h-4zm5.25 4V8c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.25h6.5zM7 10.75a.25.25 0 00-.25.25v4.813h18.5V11a.25.25 0 00-.25-.25H7zm18.25 6.563H6.75V25c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-7.688z" fill="currentColor"/>
          </svg>
          Manage Apps
          <ChevronDown className="w-3 h-3 ml-1" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Installed Apps</DropdownMenuItem>
        <DropdownMenuItem>Private Apps</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <button
      className="flex items-center px-2 py-1 text-xs font-semibold text-[color:var(--color-heading)] rounded hover:bg-[color:var(--color-surface-gray)]"
    >
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="mr-1">
        <path d="M10.25 10.049a.75.75 0 01.75-.75h10a.75.75 0 010 1.5H11a.75.75 0 01-.75-.75zM11 14.348a.75.75 0 000 1.5h10a.75.75 0 000-1.5H11z" fill="currentColor"/>
        <path d="M6.82 26.532a.5.5 0 01-.82-.384V6a1 1 0 011-1h18a1 1 0 011 1v20.049a.5.5 0 01-.845.362L22.5 23.883l-2.628 2.92a.5.5 0 01-.744 0l-2.628-2.92-3.128 2.978a.5.5 0 01-.716-.028L10 23.883l-3.18 2.649zm2.22-3.802a1.5 1.5 0 012.075.15l1.968 2.185 2.383-2.268a1.5 1.5 0 012.149.082l1.885 2.094 1.885-2.094a1.5 1.5 0 012.15-.082l.965.919V6.5h-17v17.513l1.54-1.283z" fill="currentColor"/>
      </svg>
      Audit Logs
    </button>
  </>
```

**Step 2: Run dev server and verify**

Run: `cd apps/demo && pnpm dev`
Expected: /marketplace shows "Manage Apps" dropdown and "Audit Logs" in nav

**Step 3: Commit**

```bash
git add apps/demo/src/components/top-nav.tsx
git commit -m "feat(demo): add Manage Apps and Audit Logs to marketplace TopNav

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 16: Final Build Verification

**Files:**
- None (verification only)

**Step 1: Build the Venus package**

Run: `cd packages/venuscn && pnpm build`
Expected: Build succeeds with no errors

**Step 2: Build the demo app**

Run: `cd apps/demo && pnpm build`
Expected: Build succeeds with no errors

**Step 3: Run the full monorepo build**

Run: `pnpm build`
Expected: Both packages build successfully

**Step 4: Commit (if any fixes needed)**

Only commit if fixes were required.

---

## Summary

This plan creates:
1. **Sidebar component** (Venus) - Collapsible sidebar with sections, nav, search, and checkbox filters
2. **AppCard component** (Venus) - Card with hover state showing description and install button
3. **TopNav integration** (Demo) - Marketplace route detection and nav items
4. **Marketplace page** (Demo) - Complete page with hero, header bar, and sections

Total: 16 tasks with bite-sized steps following TDD principles.
