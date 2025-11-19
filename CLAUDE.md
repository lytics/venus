# CLAUDE.md

Quick reference for Claude Code when working with code in this repository.

---

## 🚨 CRITICAL RULES

1. **Config First**: All basic project-wide settings live in `src/project.config.ts` - check there before hardcoding values
2. **Check Existing First**: Before building custom UI, check `docs/patterns/`, grep codebase, and `src/components/ui/` for existing solutions
3. **New Pages**: Always include `min-h-[44px]` on header
4. **Card Padding**: CardContent uses ONLY horizontal padding (default `px-6`, configurable), Card handles vertical padding
5. **Responsive**: Use container queries (`@5xl:`) not viewport breakpoints (`lg:`) for sidebar-aware layouts
6. **Git**: Quote paths with parentheses: `git add 'src/app/(app)/page.tsx'`
7. **Modal/Drawer Borders**: NEVER add `border-b` to headers or `border-t` to footers in modals, drawers, or sheets - keep clean separation

---

## ⚡ PRE-FLIGHT CHECKLIST

**BEFORE building/modifying ANY UI component, you MUST complete these steps:**

### When Building Cards/Containers
```
[ ] 1. Read src/components/ui/card.tsx to see actual implementation
[ ] 2. Search codebase for similar existing patterns (grep/glob)
[ ] 3. Check docs/patterns/cards.md for examples
[ ] 4. Verify: Card has py value, CardContent has px value ONLY
[ ] 5. Verify: NO py-*, pt-*, pb-* on content
```

---

## 📚 DETAILED DOCUMENTATION

### Configuration System
- **Project Config**: [src/project.config.ts](src/project.config.ts) - Single source of truth for many project-wide settings
- **What's in config**: Navigation, branding, design tokens, spacing, container settings
- **What's NOT in config**: Component-level styling

## 🏗️ ARCHITECTURE

### Stack
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with design tokens
- **shadcn/ui** (New York variant)
- **Radix UI** primitives

### Key Technologies
- **Animation**: motion v12.23.24 (Framer Motion), tw-animate-css v1.3.8
- **Charts**: recharts v3.2.1, dotted-map v2.2.3
- **3D Graphics**: @react-three/fiber v9.3.0, @react-three/drei v10.7.6, three v0.180.0
- **UI**: sonner v2.0.7 (toasts), cmdk v1.1.1 (command palette), vaul v1.1.2 (drawers)
- **Forms**: react-hook-form v7.63.0, zod v4.1.11
- **DnD**: @dnd-kit/core v6.3.1

Full tech stack: [README.md](README.md)

---

## 🎨 DESIGN SYSTEM

**Venus Components:** `/src/components/venus/` - Production-ready components matching app.contentstack.com

**Important:** Venus components use **production values** verified from the actual Contentstack app:
- Buttons: 16px font, 700 weight
- Inputs: 16px font 
- Labels: 14px, 600 weight

Check VENUS_IMPLEMENTATION_GUIDE.md for complete production specs.

---

## 🛠️ COMMANDS

### Development
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Build production (Turbopack)
npm start        # Start production server
npm run lint     # Run ESLint
```

### Testing
E2E testing available with Playwright (configured).

---

## 🔌 PROVIDERS

Root layout provider hierarchy:
1. **CommandPaletteProvider** - ⌘K command palette

All (app) pages have access to this via hooks:
- `useCommandPalette()` - Command palette

---

## ⚙️ COMPONENT ALIASES

From `components.json`:
- `@/components` → src/components
- `@/lib` → src/lib
- `@/ui` → src/components/ui
- `@/hooks` → src/hooks

---

## 📖 QUICK PATTERNS

### Using Config
```tsx
import { projectConfig } from '@/src/project.config'

// Get navigation items (shared between sidebar and top nav)
const navItems = projectConfig.navigation.items

// Get container max width
const maxWidth = projectConfig.design.container.maxWidth

// Get spacing values (Tailwind scale: "6" = 1.5rem, "8" = 2rem, etc.)
const pageGap = projectConfig.design.spacing.page.gap  // "6"
const cardPaddingX = projectConfig.design.spacing.card.paddingX  // "6"

// Use in template literals (before bake) - gets replaced with static values during bake
className={`gap-${projectConfig.design.spacing.page.gap} p-${projectConfig.design.spacing.page.padding}`}
// Before bake: gap-${...} (dynamic)
// After bake: gap-6 p-6 (static)
```

### Creating a New Page
1. Create new page file in `src/app/(app)/[page-name]/page.tsx`
2. Add to navigation items in `src/project.config.ts` if needed

### Using Container Queries
```tsx
// Mobile/desktop responsive to sidebar state
<div className="@5xl:hidden">Mobile</div>
<div className="hidden @5xl:block">Desktop</div>
```


---

**Do not commit without asking first**
- ok i do see it but you need to not use [XXpx] overrides. thats a huge no no unless i just need to do something one-off