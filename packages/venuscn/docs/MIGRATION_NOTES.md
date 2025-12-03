# Gallery Documentation Migration Notes

## Overview
This document tracks the migration of gallery documentation pages from `/src/app/(galleries)/` to `/packages/venuscn/docs/`.

## Status

### Completed ✓
- **colors.tsx** - Fully migrated
  - Removed `AdminNav` import (app-specific)
  - Removed `toast` calls (commented out, functionality preserved)
  - All functionality intact

- **text.tsx** - Fully migrated
  - Minimal dependencies, no changes needed
  - Ready to use

### Pending ⚠️
- **icons.tsx** - Requires manual migration
  - Complex dependencies on:
    - Multiple shadcn/ui components (Card, Button, Badge, Input, Select, Label, Switch, Tooltip)
    - API routes (`/api/icons/scan`, `/api/icons/add-to-curated`)
    - AdminNav component (app-specific)
    - toast notifications
  - **Action needed**: Decide how to handle these dependencies. Options:
    1. Keep as app-specific page (don't migrate)
    2. Create standalone version without API dependencies
    3. Convert to pure component library with props for handlers

- **primitives.tsx** (was primatives/page.tsx) - Requires manual migration
  - Very large file with extensive dependencies:
    - All Venus components
    - Multiple shadcn/ui components
    - Modal system (`useModal` hook)
    - Command palette (`useCommandPalette`)
    - AdminNav (app-specific)
    - toast notifications
  - **Action needed**: This is the most complex file. Options:
    1. Keep as app showcase page (don't migrate)
    2. Break into smaller component demonstrations
    3. Create simplified version for package docs

## Import Changes Required

### For Migrated Files
When files are migrated to the venuscn package, these import changes are needed:

1. **Remove app-specific imports:**
   ```tsx
   // REMOVE
   import { AdminNav } from "@/components/admin-nav";
   import { toast } from "sonner";

   // REMOVE hooks that depend on app context
   import { useCommandPalette } from "@/components/command-palette-provider";
   import { useModal } from "@/hooks/use-modal";
   ```

2. **Update Venus component imports:**
   ```tsx
   // OLD (in app)
   import { Button } from "@/components/venus";

   // NEW (in package)
   import { Button } from "../components/Button";
   ```

3. **Update shadcn/ui component handling:**
   - Option A: Don't use shadcn/ui components in package docs
   - Option B: Document that consumers need these components
   - Option C: Create Venus equivalents

## Recommendations

### High Priority
1. **Keep primatives (primitives) showcase in the app** - It's a comprehensive demo that benefits from the app infrastructure
2. **Keep icons gallery in the app** - It relies on API routes for scanning

### Medium Priority
3. **Create simplified component docs** - Instead of full pages, create focused component documentation in the package

### File Structure Suggestion
```
packages/venuscn/
  docs/
    colors.tsx          ✓ Done (reference/utility)
    text.tsx            ✓ Done (reference/utility)
    index.ts            ✓ Done
    MIGRATION_NOTES.md  ✓ Done (this file)

Main app can keep:
  src/app/(galleries)/
    icons/page.tsx      (app-specific showcase)
    primatives/page.tsx (comprehensive component demo)
```

## Next Steps

1. Review this migration approach
2. Decide which files truly belong in the package vs the app
3. For package docs, consider creating:
   - Simple component API reference
   - Usage examples without app dependencies
   - Storybook or similar for interactive demos

## Dependencies Analysis

### colors.tsx
- ✓ No external component dependencies
- ✓ Pure CSS variable reading
- ✓ Self-contained

### text.tsx
- ✓ No external component dependencies
- ✓ Pure typography reference
- ✓ Self-contained

### icons.tsx
- ❌ AdminNav (app component)
- ❌ Card, CardContent, CardHeader, CardTitle (shadcn/ui)
- ❌ Button (shadcn/ui)
- ❌ Badge (shadcn/ui)
- ❌ Input (shadcn/ui)
- ❌ Select components (shadcn/ui)
- ❌ Label (shadcn/ui)
- ❌ Switch (shadcn/ui)
- ❌ Tooltip components (shadcn/ui)
- ❌ toast (sonner)
- ❌ API routes (/api/icons/*)

### primitives.tsx (primatives)
- ❌ AdminNav (app component)
- ❌ All Venus components (could work, but they're in same package)
- ❌ Extensive shadcn/ui components
- ❌ useModal hook (app hook)
- ❌ useCommandPalette (app context)
- ❌ toast (sonner)
- ❌ Modal components (app components)
- ❌ Dialog, DropdownMenu, etc. (shadcn/ui)
