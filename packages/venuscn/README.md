# @contentstack/venuscn

Production-ready Venus Design System components built with Tailwind CSS v4 and shadcn/ui, matching Contentstack's app.contentstack.com design specifications.

## Installation

```bash
npm install @contentstack/venuscn
# or
pnpm add @contentstack/venuscn
# or
yarn add @contentstack/venuscn
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^18 || ^19",
  "react-dom": "^18 || ^19",
  "tailwindcss": "^4"
}
```

## Quick Start

### 1. Import Styles

In your global CSS file (e.g., `app/globals.css`):

```css
@import "@contentstack/venuscn/styles";
```

### 2. Use Components

```tsx
import { Button, Input, Field, FieldLabel } from "@contentstack/venuscn"

export default function MyForm() {
  return (
    <form>
      <Field>
        <FieldLabel htmlFor="email" required>Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
      </Field>

      <Button variant="primary" size="regular">
        Submit
      </Button>
    </form>
  )
}
```

## Components

### Form Controls

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, and danger button variants |
| `Input` | Text input with error states and validation |
| `Textarea` | Multi-line text input |
| `Checkbox` | Checkbox with label support |
| `Radio` | Radio button with label |
| `Toggle` | Toggle switch component |
| `Dropdown` | Dropdown select component |

### Form Architecture

| Component | Description |
|-----------|-------------|
| `Field` | Form field container |
| `FieldLabel` | Field label with required/optional indicators |
| `HelpText` | Descriptive help text |
| `ValidationMessage` | Error/success validation messages |

### Data Display

| Component | Description |
|-----------|-------------|
| `Table` | Complete table component with header, body, footer |
| `TablePagination` | Pagination controls for tables |
| `Search` | Search input component |
| `SearchV3` | Enhanced search with filters |

### Navigation & Layout

| Component | Description |
|-----------|-------------|
| `Tabs` | Tabbed navigation interface |
| `PageHeader` | Standard page header with actions |
| `PageSearchHeader` | Page header with integrated search |
| `PageFormHeader` | Form-specific page header |
| `FormSidebar` | Sidebar for forms |

### UI Elements

| Component | Description |
|-----------|-------------|
| `Tag` | Removable tag/badge component |
| `Pill` | Selectable pill component |
| `CategoryPill` | Category indicator pill |
| `StatusPill` | Status indicator (published, draft, etc.) |
| `Divider` | Horizontal/vertical divider |
| `Tooltip` | Tooltip component with Radix UI |

### Advanced Components

| Component | Description |
|-----------|-------------|
| `TargetingRuleBuilder` | Complex rule builder for targeting |
| `TargetingCategoryCard` | Category card for targeting rules |
| `RuleRow` | Individual rule row in builder |
| `RuleGroup` | Group of rules with logic |

## Production Specifications

These components use **production values** from app.contentstack.com (verified via DevTools inspection):

### Typography

| Element | Font Size | Weight | Notes |
|---------|-----------|--------|-------|
| Button (regular) | 16px | 600 | Primary interactive element |
| Input/Textarea | 16px | 400 | Form inputs |
| Field Label | 14px | 600 | Above inputs |
| Checkbox/Radio Label | 16px | 400 | Next to controls |
| Help Text | 13px | 400 | Below inputs |

### Sizing

| Element | Height | Padding |
|---------|--------|---------|
| Button (regular) | 40px | 8px 16px |
| Input (regular) | 40px | 4px 10px |
| Button (small) | 32px | 8px 12px |
| Button (large) | 48px | 12px 20px |

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | #6C5CE7 | Primary brand color |
| `--color-border` | #E3E8EF | Default borders |
| `--color-title` | #111827 | Page/card titles |
| `--color-heading` | #475161 | Section headings |
| `--color-body` | #6B7280 | Body text |
| `--color-surface-purple` | #F9F8FF | Light purple backgrounds |

### Border Radius

All interactive elements use **4px border radius** (not 6px as in Storybook).

## Design Tokens

All components use the Venus design token system. Key tokens are available in `tokens.css`:

### Spacing

```css
--spacing-1: 4px
--spacing-2: 8px
--spacing-4: 16px
--spacing-6: 24px
--spacing-8: 32px
```

### Colors (Semantic)

```css
--color-primary
--color-success
--color-warning
--color-danger
--color-info
```

### Transitions

```css
--duration-150: 150ms
--ease-out: cubic-bezier(0, 0, 0.2, 1)
```

For the complete token reference, see the [full tokens.css file](./src/styles/tokens.css).

## Usage Examples

### Button Variants

```tsx
import { Button } from "@contentstack/venuscn"
import { Plus } from "lucide-react"

// Primary button (default)
<Button variant="primary">Save Changes</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Ghost button
<Button variant="ghost">Learn More</Button>

// Danger button
<Button variant="danger">Delete</Button>

// With icon
<Button variant="primary">
  <Plus className="h-4 w-4" />
  Add New
</Button>
```

### Form Field

```tsx
import { Field, FieldLabel, Input, HelpText, ValidationMessage } from "@contentstack/venuscn"

<Field>
  <FieldLabel htmlFor="title" required>Title</FieldLabel>
  <Input
    id="title"
    placeholder="Enter title"
    error={errors.title}
  />
  <HelpText>This will be displayed publicly</HelpText>
  {errors.title && (
    <ValidationMessage variant="error">
      {errors.title.message}
    </ValidationMessage>
  )}
</Field>
```

### Table with Pagination

```tsx
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TablePagination } from "@contentstack/venuscn"

<div>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.status}</TableCell>
          <TableCell>...</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  <TablePagination
    currentPage={1}
    totalPages={10}
    onPageChange={(page) => console.log(page)}
  />
</div>
```

### Status Pills

```tsx
import { StatusPill } from "@contentstack/venuscn"

<StatusPill variant="published">Published</StatusPill>
<StatusPill variant="draft">Draft</StatusPill>
<StatusPill variant="archived">Archived</StatusPill>
```

## TypeScript Support

All components are fully typed with TypeScript. Import types alongside components:

```tsx
import { Button, type ButtonProps } from "@contentstack/venuscn"
import { Input, type InputProps } from "@contentstack/venuscn"

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}
```

## Differences from Venus Storybook

These components match the **production Contentstack app**, which differs from the original Venus Storybook:

| Element | Storybook | Production | Change |
|---------|-----------|------------|--------|
| Border Radius | 6px | **4px** | -2px |
| Button Height | 36px | **40px** | +4px |
| Button Font | 14px, 500 | **16px, 600** | +2px, +100 weight |
| Input Font | 14px | **16px** | +2px |
| Field Label Weight | 500 | **600** | +100 weight |

**Why?** The production app evolved beyond initial design specs for better readability and UX on modern high-DPI displays.

## Development

```bash
# Install dependencies
pnpm install

# Build package
pnpm build

# Watch mode (for development)
pnpm dev

# Type checking
pnpm typecheck

# Linting
pnpm lint
```

## License

MIT

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/contentstack/venus).
