# Implementation Plan: Lytics Admin Demo

## Overview
Build a Lytics admin demo following the Personalize architecture pattern with:
- Project cards landing page at `/lytics`
- Audiences section with segment builder mockup
- Settings section with General/Users/Keys tabs
- Conditional layout matching Personalize's navigation structure

---

## Architecture

**Pattern**: Follow `/apps/demo/src/app/(app)/personalize/` exactly
- Landing page hides top nav, shows project cards
- Detail pages show breadcrumb nav
- List pages use fixed table headers
- Form pages use scrollable content with sidebar

**Routing**:
```
/lytics                    → Project cards (landing)
/lytics/audiences          → Audiences list + table
/lytics/audiences/new      → Segment builder mockup (empty state)
/lytics/settings           → Settings with tabs (General/Users/Keys)
```

**Settings Tabs** (client-side, not routes):
- General: Name, Description, ID, Delete button
- Users: Invite form + user table
- Keys: Action buttons + API keys table

---

## Files to Create

### 1. Core Structure
- `apps/demo/src/app/(app)/lytics/page.tsx` - Landing page with project cards
- `apps/demo/src/app/(app)/lytics/layout.tsx` - Conditional layout wrapper
- `apps/demo/src/components/lytics-top-nav.tsx` - Breadcrumb navigation

### 2. Audiences Section
- `apps/demo/src/app/(app)/lytics/audiences/page.tsx` - Audiences list/table
- `apps/demo/src/app/(app)/lytics/audiences/new/page.tsx` - Segment builder mockup

### 3. Settings Section
- `apps/demo/src/app/(app)/lytics/settings/page.tsx` - Settings with three tabs

### 4. Components
- `apps/demo/src/components/lytics-project-card.tsx` - Custom project card

### 5. Mock Data
- `apps/demo/src/data/lytics-projects.ts` - 3 sample projects
- `apps/demo/src/data/lytics-audiences.ts` - 5-6 audiences
- `apps/demo/src/data/lytics-settings.ts` - Users, keys, project info

### 6. Integration
- `apps/demo/src/components/top-nav.tsx` - Add Lytics branding detection

---

## Venus Components to Use

**Page Headers**:
- `PageSearchHeader` - Landing page with search + "New Lytics Project" button
- `PageFormHeader` - Segment builder mockup with back/cancel/save

**Forms**:
- `Field`, `FieldLabel`, `Input`, `Textarea` - Settings forms
- `Dropdown` - Role selection, pagination
- `Button` - Actions (primary, secondary, danger)

**Data Display**:
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell` - All tables
- `TableActionButton` - Sticky action column
- `SearchV3` - Search bars

**Layout**:
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` - Settings tabs
- `FormSidebar` - Segment builder mockup sidebar

---

## Implementation Order

### Phase 1: Foundation
1. Create mock data files (projects, audiences, settings)
2. Create `LyticsProjectCard` component (320px, hover effects)
3. Create landing page with `PageSearchHeader` and card grid
4. Create layout with conditional nav logic
5. Create breadcrumb top nav component

### Phase 2: Audiences
6. Create audiences list page (fixed header table pattern)
7. Create segment builder mockup with empty state UI

### Phase 3: Settings
8. Create settings page with tabs
9. Implement General tab (form + delete button)
10. Implement Users tab (invite form + table)
11. Implement Keys tab (buttons + table)

### Phase 4: Integration
12. Modify `top-nav.tsx` for Lytics branding
13. Add Lytics icon to `/public/images/`
14. Test navigation flow end-to-end

---

## Key Design Specs

**Layouts**:
- Project cards: `flex flex-wrap gap-4` on `bg-[#F5F6F8]` with `px-12 py-6`
- Card width: `w-80` (320px)
- Page header: `h-[90px]` on `bg-[#F7F9FC]`
- Search bar: `h-[75px]` on `bg-[#F7F9FC]`
- Breadcrumb nav: `h-8` (32px) on `bg-[#F1F6FF]`

**Tables**:
- Use `overflow-hidden` hierarchy from Personalize
- Sticky action column with shadow gradient
- Pagination footer on `bg-[#F5F6F8]`

**Typography**:
- Buttons/Inputs: 16px, weight 600 (buttons) / 400 (inputs)
- Labels: 14px, weight 600
- Border radius: 4px (use `rounded`)

---

## Critical Files Reference

- `/apps/demo/src/app/(app)/personalize/page.tsx` - Project cards pattern
- `/apps/demo/src/app/(app)/personalize/layout.tsx` - Conditional layout logic
- `/apps/demo/src/app/(app)/personalize/targets/page.tsx` - Table layout pattern
- `/apps/demo/src/components/personalize-top-nav.tsx` - Breadcrumb navigation pattern
- `/apps/demo/src/components/project-card.tsx` - Card component pattern
- `packages/venuscn/README.md` - Venus component documentation

---

## Mock Data Examples

**Projects** (3 items):
```typescript
{
  id: "1",
  title: "E-commerce Analytics",
  organization: "Acme Corp",
  audiences: 12,
  lastSync: "Jan 07, 2026 10:30 AM"
}
```

**Audiences** (5-6 items):
```typescript
{
  id: "1",
  name: "High-Value Customers",
  description: "Users with >$1000 LTV",
  size: 2543,
  modifiedAt: "Jan 05, 2026",
  createdAt: "Dec 01, 2025"
}
```

**Users** (3-4 items):
```typescript
{
  email: "admin@example.com",
  role: "Admin",
  dateInvited: "Dec 01, 2025",
  lastLogin: "Jan 07, 2026 09:15 AM"
}
```

**API Keys** (2-3 items):
```typescript
{
  name: "Production API Key",
  key: "lyt_prod_•••••••••••••",
  created: "Nov 15, 2025",
  lastUsed: "Jan 07, 2026"
}
```

---

## Special Notes

1. **Segment Builder Mockup**: Create empty state UI showing where segment builder would go (similar visual structure to `TargetingRuleBuilder` but simplified)

2. **Search**: Implement client-side filtering on landing page (filter projects by title/organization)

3. **Table Empty States**: Add "No audiences yet" / "No users yet" messages when tables are empty

4. **Responsive**: Ensure card grid wraps properly, tables scroll horizontally on mobile

5. **Git Paths**: Quote paths with parentheses: `git add 'apps/demo/src/app/(app)/lytics/page.tsx'`
