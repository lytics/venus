# Demo App - Claude Code Reference

Quick reference for working with the Venus Design System demo application.

## Commands

```bash
# Development
pnpm dev           # Start dev server (Turbopack)
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run ESLint
```

## Using Venus Components

### Import from Workspace Package

```tsx
import { Button, Input, Table } from "@contentstack/venuscn"
```

### Import Styles

Add to your `globals.css`:

```css
@import "@contentstack/venuscn/styles";
```

## Project Structure

```
apps/demo/
├── src/
│   ├── app/
│   │   └── (app)/          # Main app pages
│   ├── components/         # App-specific components
│   └── styles/            # Global styles
├── public/                # Static assets
└── package.json
```

## Key Patterns

### Creating a New Page

Create page file in `src/app/(app)/[page-name]/page.tsx`:

```tsx
export default function MyPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Page Title</h1>
    </div>
  )
}
```

### Using Venus Form Components

```tsx
import { Field, FieldLabel, Input, Button } from "@contentstack/venuscn"

export default function Form() {
  return (
    <form>
      <Field>
        <FieldLabel required>Name</FieldLabel>
        <Input placeholder="Enter name" />
      </Field>
      <Button variant="primary">Submit</Button>
    </form>
  )
}
```

### Page Headers

```tsx
import { PageHeader } from "@contentstack/venuscn"
import { Plus } from "lucide-react"

export default function ListPage() {
  return (
    <>
      <PageHeader
        title="Content Types"
        description="Manage your content models"
        actions={[
          {
            label: "Add Content Type",
            icon: Plus,
            onClick: () => console.log("Add")
          }
        ]}
      />
      {/* Page content */}
    </>
  )
}
```

## Development Tips

1. All Venus components are production-ready and match app.contentstack.com
2. Use `--color-*` design tokens for consistent theming
3. Production specs: 16px buttons, 4px border radius, 600 weight labels
4. Refer to package README for complete component API
