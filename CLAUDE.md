# Venus Monorepo - Claude Code Reference

This is a **pnpm monorepo** containing the Venus Design System component library and a demo application.

---

## 🚨 CRITICAL RULES

### 1. Use Venus Components from the Package
**NEVER** create custom UI components that duplicate Venus functionality. Always import from `@contentstack/venuscn`:

```tsx
// ✅ CORRECT - Import from package
import { Button, Input, Field, FieldLabel, Tag, Table } from "@contentstack/venuscn"

// ❌ WRONG - Don't create custom versions
// Don't make your own Button, Input, etc.
```

### 2. Check Existing Components First
Before building ANY UI, check what's available:
1. **Venus components**: See `packages/venuscn/README.md` for full component list
2. **shadcn/ui components**: `apps/demo/src/components/ui/` for app-specific UI
3. **Grep the codebase** for similar existing patterns

### 3. Git Paths with Parentheses
Always quote paths containing parentheses:
```bash
git add 'apps/demo/src/app/(app)/page.tsx'
```

---

## 📁 Project Structure

```
venus_external/
├── packages/
│   ├── venuscn/              # Venus component library (@contentstack/venuscn)
│   │   ├── README.md         # ⭐ COMPONENT DOCUMENTATION
│   │   └── src/components/   # All Venus components
│   │
│   └── venusmui/             # Future MUI version (placeholder)
│
├── apps/
│   └── demo/                 # Demo Contentstack application
│       ├── CLAUDE.md         # Demo-specific instructions
│       └── src/
│           ├── app/(app)/        # Main app pages
│           ├── app/(galleries)/  # Component galleries
│           └── components/ui/    # shadcn/ui (app-specific only)
│
├── pnpm-workspace.yaml       # Workspace configuration
└── tsconfig.base.json        # Shared TypeScript config
```

---

## 🛠️ Commands

Run from the **root directory**:

```bash
pnpm dev        # Start demo app with hot reload
pnpm build      # Build venuscn package + demo app
```

Run from `packages/venuscn/`:
```bash
pnpm build      # Build the component library
pnpm dev        # Watch mode for component development
```

Run from `apps/demo/`:
```bash
pnpm dev        # Start demo dev server
pnpm build      # Build demo for production
pnpm lint       # Run ESLint
```

---

## 📦 Venus Component Library

The `@contentstack/venuscn` package contains **27 production-ready components** matching app.contentstack.com.

### Available Components

**Form Controls:** Button, Input, Textarea, Checkbox, Radio, Toggle, Dropdown

**Form Architecture:** Field, FieldLabel, HelpText, ValidationMessage

**Data Display:** Table (+ Header/Body/Row/Cell), TablePagination, Search, SearchV3

**Navigation/Layout:** Tabs, PageHeader, PageSearchHeader, PageFormHeader, FormSidebar, Divider

**UI Elements:** Tag, Pill, Pills, CategoryPill, StatusPill, Tooltip

**Advanced:** TargetingRuleBuilder, TargetingCategoryCard, RuleRow, RuleGroup

### Production Specs (from app.contentstack.com)

| Element | Font Size | Weight | Height |
|---------|-----------|--------|--------|
| Button (regular) | 16px | 600 | 40px |
| Input | 16px | 400 | 40px |
| Field Label | 14px | 600 | - |
| Checkbox/Radio Label | 16px | 400 | - |

**Border radius:** 4px (not 6px)

For complete API documentation, see: `packages/venuscn/README.md`

---

## 🎨 Design Tokens

Import Venus styles in your CSS:

```css
@import "@contentstack/venuscn/styles";
```

Key tokens available:
- `--color-primary` (#6C5CE7)
- `--color-border` (#E3E8EF)
- `--color-title` (#111827)
- `--color-heading` (#475161)
- `--color-body` (#6B7280)

---

## ⚡ Working in the Demo App

When adding pages or features to `apps/demo/`:

### Importing Components

```tsx
// Venus components (primary choice)
import { Button, Input, Field, FieldLabel, PageHeader } from "@contentstack/venuscn"

// shadcn/ui components (for app-specific UI not in Venus)
import { Card, Dialog, Sheet } from "@/components/ui/card"

// Icons
import { Plus, Settings } from "lucide-react"
```

### Creating a New Page

```tsx
// apps/demo/src/app/(app)/my-page/page.tsx
import { PageHeader, Button } from "@contentstack/venuscn"
import { Plus } from "lucide-react"

export default function MyPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="My Page"
        actions={[
          { label: "Add New", icon: Plus, variant: "primary", onClick: () => {} }
        ]}
      />
      {/* Page content */}
    </div>
  )
}
```

### Form Example

```tsx
import { Field, FieldLabel, Input, Button, HelpText, ValidationMessage } from "@contentstack/venuscn"

<form>
  <Field>
    <FieldLabel htmlFor="name" required>Name</FieldLabel>
    <Input id="name" placeholder="Enter name" />
    <HelpText>This will be displayed publicly</HelpText>
  </Field>

  <Button variant="primary">Submit</Button>
</form>
```

---

## 🔗 Quick Reference

| What | Where |
|------|-------|
| Component documentation | `packages/venuscn/README.md` |
| Demo app instructions | `apps/demo/CLAUDE.md` |
| Component source code | `packages/venuscn/src/components/` |
| Design tokens | `packages/venuscn/src/styles/tokens.css` |
| Component galleries | `apps/demo/src/app/(galleries)/` |
| shadcn/ui components | `apps/demo/src/components/ui/` |

---

## 📋 Pre-flight Checklist

Before building UI:

```
[ ] Check packages/venuscn/README.md for existing Venus component
[ ] Grep codebase for similar patterns
[ ] Import from @contentstack/venuscn, not local files
[ ] Use 4px border radius (not 6px)
[ ] Use production font sizes (16px buttons, 14px labels)
```
