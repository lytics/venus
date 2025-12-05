# Demo App - Claude Code Reference

This is the Contentstack demo application built with the Venus Design System.

---

## About This Demo

This demo app shows how Venus components work in a real application. It clones the Contentstack interface to provide working examples of layouts, patterns, and component usage.

### Using Venus Components

The Venus component library provides pre-built components. Import them from the package:

```tsx
// Import Venus components from the package
import {
  Button, Input, Textarea, Checkbox, Radio, Toggle,
  Field, FieldLabel, HelpText, ValidationMessage,
  Table, TableHeader, TableBody, TableRow, TableCell,
  Tag, Tabs, PageHeader, Dropdown, Search
} from "@contentstack/venuscn"
```

This ensures consistency and avoids rebuilding components that already exist.

For the full component list: `packages/venuscn/README.md`

---

## 🛠️ Commands

```bash
pnpm dev        # Start dev server (Turbopack) on localhost:3000
pnpm build      # Build for production
pnpm lint       # Run ESLint
```

---

## 📁 Project Structure

```
apps/demo/src/
├── app/
│   ├── (app)/              # Main application pages
│   │   ├── dashboard/      # Dashboard page
│   │   └── personalize/    # Personalize feature pages
│   ├── (galleries)/        # Component gallery pages
│   │   ├── primatives/     # Venus component showcase
│   │   ├── colors/         # Color system
│   │   ├── text/           # Typography
│   │   └── icons/          # Icon library
│   ├── globals.css         # Global styles + Venus tokens import
│   └── layout.tsx          # Root layout
│
├── components/
│   ├── ui/                 # shadcn/ui components (app-specific only)
│   ├── admin-nav.tsx       # Navigation component
│   └── ...                 # Other app-specific components
│
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities
└── data/                   # Static data
```

---

## 🎯 When to Use What

| Need | Use | Import From |
|------|-----|-------------|
| Buttons, Inputs, Forms | **Venus** | `@contentstack/venuscn` |
| Tables, Tags, Tabs | **Venus** | `@contentstack/venuscn` |
| Page headers | **Venus** | `@contentstack/venuscn` |
| Cards, Dialogs, Sheets | shadcn/ui | `@/components/ui/*` |
| Modals, Drawers | shadcn/ui | `@/components/ui/*` |
| Icons | lucide-react | `lucide-react` |

---

## 📝 Common Patterns

### Creating a New Page

```tsx
// src/app/(app)/my-feature/page.tsx
import { PageHeader, Button } from "@contentstack/venuscn"
import { Plus } from "lucide-react"

export default function MyFeaturePage() {
  return (
    <div className="p-6 space-y-6">
      <PageHeader
        title="My Feature"
        actions={[
          {
            label: "Add New",
            icon: Plus,
            variant: "primary",
            onClick: () => console.log("Add")
          }
        ]}
      />

      {/* Page content */}
    </div>
  )
}
```

### Form with Validation

```tsx
import {
  Field, FieldLabel, Input, Textarea, Button,
  HelpText, ValidationMessage
} from "@contentstack/venuscn"

export function MyForm() {
  return (
    <form className="space-y-4 max-w-md">
      <Field>
        <FieldLabel htmlFor="title" required>Title</FieldLabel>
        <Input id="title" placeholder="Enter title" />
        <HelpText>This will be displayed publicly</HelpText>
      </Field>

      <Field>
        <FieldLabel htmlFor="desc" optional>Description</FieldLabel>
        <Textarea id="desc" placeholder="Enter description" rows={4} />
      </Field>

      <Field>
        <FieldLabel htmlFor="email" required>Email</FieldLabel>
        <Input id="email" type="email" error placeholder="Enter email" />
        <ValidationMessage type="error">Email is required</ValidationMessage>
      </Field>

      <div className="flex gap-3">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </form>
  )
}
```

### Data Table

```tsx
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell, Tag
} from "@contentstack/venuscn"

export function DataTable({ data }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Tag>{item.status}</Tag>
              </TableCell>
              <TableCell>{item.modified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Tabs Navigation

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@contentstack/venuscn"

export function TabbedContent() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="advanced" disabled>Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>Overview content here</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Settings content here</p>
      </TabsContent>
    </Tabs>
  )
}
```

---

## 🎨 Styling Guidelines

### Design Tokens
Venus tokens are imported via `globals.css`. Use them for consistency:

```tsx
// Use token-based colors
<div className="text-[color:var(--color-title)]">Title</div>
<div className="text-[color:var(--color-body)]">Body text</div>
<div className="border-[color:var(--color-border)]">Bordered</div>
```

### Production Specs
- **Border radius:** 4px (use `rounded` not `rounded-md`)
- **Button font:** 16px, weight 600
- **Input font:** 16px, weight 400
- **Label font:** 14px, weight 600

### Container Queries (Sidebar-aware)
```tsx
// Responsive to sidebar state, not viewport
<div className="@5xl:hidden">Mobile layout</div>
<div className="hidden @5xl:block">Desktop layout</div>
```

---

## ⚙️ Path Aliases

```tsx
@/components  → src/components
@/lib         → src/lib
@/hooks       → src/hooks
@/ui          → src/components/ui
```

---

## 📋 Building UI - Quick Reference

When building UI in this demo app:

```
[ ] Check @contentstack/venuscn for existing components
[ ] Look at similar demo pages for patterns
[ ] Import Venus components for consistency
[ ] Use design tokens when possible (see ../../DESIGN_SYSTEM.md)
[ ] Test with sidebar open/closed (container queries)
```

**Common patterns from this app:**
- Border radius: 4px (use `rounded` class)
- Button/Input font: 16px
- Label font: 14px weight 600
- Page padding: `p-6` (24px)
- Card gaps: `gap-4` (16px)

**Learn more:**
- [How the Demo Works](./HOW_THE_DEMO_WORKS.md) - Tour of this app
- [Design System Guide](../../DESIGN_SYSTEM.md) - Token reference
- [Getting Started](../../GETTING_STARTED.md) - Setup guide
