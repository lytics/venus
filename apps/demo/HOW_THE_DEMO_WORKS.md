# How the Demo Works

This demo app is a working clone of the Contentstack interface. It's built to show you how Venus components work in real applications.

Use this as your reference when building features. If your UI looks like the demo, you're on the right track.

## What's Inside

The demo has several sections that show different aspects of the design system:

### Main Application Pages (`/app/(app)/`)

**Dashboard** (`/dashboard`)
- Example of a typical app landing page
- Shows card grid layouts with proper spacing
- Demonstrates navigation and page structure
- Good reference for: layout patterns, card grids, page headers

**Personalize** (`/personalize/*`)
- Multi-page feature implementation
- Complex forms and nested navigation
- Tab navigation between sections
- Targeting rule builder (advanced component)
- Good reference for: feature organization, complex forms, tabbed interfaces

### Component Galleries (`/app/(galleries)/`)

**Primitives** (`/primitives`)
- Visual catalog of all Venus components
- Live interactive examples
- Shows every variant and state
- Good reference for: seeing what's available, component variants, copy-paste examples

**Colors** (`/colors`)
- Visual guide to the color system
- Shows all design tokens
- Demonstrates light/dark mode
- Good reference for: choosing colors, understanding tokens

**Text** (`/text`)
- Typography showcase
- Font sizes, weights, and styles
- Text color variants
- Good reference for: text styling, hierarchy

**Icons** (`/icons`)
- Lucide React icon library
- Searchable icon reference
- Good reference for: finding the right icon

## How Pages Are Organized

### File Structure

```
apps/demo/src/app/
├── (app)/              # Main application pages
│   ├── dashboard/      # Dashboard page
│   └── personalize/    # Personalize feature pages
│       ├── page.tsx           # Main personalize page
│       ├── audiences/page.tsx # Audiences sub-page
│       └── ...
│
└── (galleries)/        # Component showcase pages
    ├── primatives/     # Component gallery
    ├── colors/         # Color system
    └── text/           # Typography
```

The parentheses `(app)` and `(galleries)` are Next.js route groups - they organize routes without affecting the URL structure.

### Common Patterns

**Page with Header and Grid:**
```tsx
// Pattern from dashboard page
<div className="p-6 space-y-8">
  <div>
    <h1 className="text-4xl font-bold text-[color:var(--color-title)]">
      Page Title
    </h1>
    <p className="text-[color:var(--color-body)] mt-2">
      Description text
    </p>
  </div>

  <div className="grid grid-cols-4 gap-4">
    {/* Cards */}
  </div>
</div>
```

**Page with Tabs:**
```tsx
// Pattern from personalize feature
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    {/* Content */}
  </TabsContent>
</Tabs>
```

**Form Page:**
```tsx
// Pattern used throughout personalize
<div className="max-w-2xl space-y-6">
  <PageHeader title="Form Title" />

  <form className="space-y-4">
    <Field>
      <FieldLabel htmlFor="name" required>Name</FieldLabel>
      <Input id="name" />
    </Field>
    {/* More fields */}
  </form>
</div>
```

## Key Components in Action

### Navigation (Sidebar + Top Nav)

The demo uses two navigation components:

- **AdminNav** - Left sidebar navigation
- **TopNav** - Top navigation bar

These are app-specific components in `src/components/`. They show how to structure navigation for a full application.

### Page Headers

Venus provides three PageHeader variants:

```tsx
// Basic page header
<PageHeader title="Page Title" />

// With search
<PageSearchHeader
  title="Page Title"
  onSearch={(q) => console.log(q)}
/>

// With form controls
<PageFormHeader
  title="Page Title"
  actions={[...]}
/>
```

See `/dashboard` and `/personalize` for examples.

### Tables

The `/personalize/audiences` page shows table usage:

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Forms

Forms throughout the personalize section show the Field component pattern:

```tsx
<Field>
  <FieldLabel htmlFor="id" required>Label</FieldLabel>
  <Input id="id" />
  <HelpText>Helper text</HelpText>
</Field>
```

This pattern ensures consistent spacing, label styling, and validation message placement.

## Using the Demo as Reference

### When Building a New Feature

1. **Find similar page** - Look for a demo page with similar layout
2. **Copy the structure** - Use the same container/spacing patterns
3. **Use same components** - Import from `@contentstack/venuscn`
4. **Match the styling** - Use the same Tailwind classes

### When Using a Component

1. **Check /primatives** - See the component in action
2. **Copy example code** - Use as starting point
3. **Check API docs** - Read `packages/venuscn/README.md` for props

### When Styling Custom Elements

1. **Check design tokens** - See `/colors` and `/text` pages
2. **Match spacing patterns** - Use same `gap-*`, `p-*` classes as demo
3. **Use token values** - Reference `DESIGN_SYSTEM.md` guide

## File Locations

**Navigation:**
- `src/components/admin-nav.tsx` - Sidebar navigation
- `src/components/top-nav.tsx` - Top navigation bar

**Layouts:**
- `src/app/layout.tsx` - Root layout with navigation
- `src/app/(app)/layout.tsx` - App pages layout
- `src/app/(galleries)/layout.tsx` - Gallery pages layout

**Example Pages:**
- `src/app/(app)/dashboard/page.tsx` - Dashboard with cards
- `src/app/(app)/personalize/page.tsx` - Feature landing page
- `src/app/(galleries)/primatives/page.tsx` - Component gallery

**Styles:**
- `src/app/globals.css` - Imports Venus tokens and global styles

## Tips for Learning

**Start Here:**
1. Run `pnpm dev` and browse the demo
2. Look at `/primitives` to see what components exist
3. Look at `/dashboard` to see layout patterns
4. Pick a page similar to what you're building

**Then Dig Deeper:**
1. Open the page file you want to learn from
2. See how it imports and uses Venus components
3. Copy patterns that match your needs
4. Modify to fit your use case

**Reference Chain:**
- Demo page (visual reference) → Page source code (implementation) → Component docs (API reference)

## Common Questions

**Q: Should I copy code from the demo?**
Yes! That's what it's for. The demo shows proven patterns.

**Q: Can I modify Venus components?**
The Venus components are pre-styled. For customization, you can:
- Pass different variants/props
- Wrap in custom containers
- Use shadcn/ui components for app-specific UI

**Q: What if I need something not in the demo?**
- Check if Venus has the component (`packages/venuscn/README.md`)
- Check shadcn/ui components (`src/components/ui/`)
- Build custom component following similar patterns

**Q: How do I match the spacing/colors?**
Use the same Tailwind classes you see in the demo. Read the [Design System Guide](../../DESIGN_SYSTEM.md) for token reference.

## Next Steps

- Browse the demo to see what's possible
- Read [Getting Started](../../GETTING_STARTED.md) for setup
- Read [Design System Guide](../../DESIGN_SYSTEM.md) for styling
- Check [Component Docs](../../packages/venuscn/README.md) for API reference

Remember: The demo is your source of truth. If it looks like the demo, you're doing it right.
