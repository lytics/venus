# Interface Patterns

## Preferred UI Composition Order

1. Start from an existing demo route.
2. Import from `@contentstack/venuscn`.
3. Use app-specific shadcn/ui pieces only to fill gaps.
4. Promote repeated patterns into `packages/venuscn` only when they are truly reusable.

## Common Repo Patterns

### Collection Pages

Use:

- `PageSearchHeader`
- cards or tables below the header
- light gray page background sections

Seen in:

- `/personalize`
- `/stacks`

### Form Pages

Use:

- `Field`
- `FieldLabel`
- `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Toggle`
- `HelpText`
- `ValidationMessage`

### Data Tables

Use:

- `Table`
- `TableHeader`, `TableBody`, `TableHead`, `TableRow`, `TableCell`
- `TablePagination` when needed
- sticky right `Actions` columns for wide tables

### Top-Level Layouts

Use:

- demo app layouts as structure reference
- token-backed colors and spacing
- existing nav/header components instead of creating new scaffolding from scratch

## Style Heuristics

- Match existing typography before introducing new scale values.
- Prefer token-backed text and border colors.
- Keep borders and controls visually restrained; the repo is not using flashy gradients for core product UI.
- Reuse the spacing rhythm already visible in the demo.

## Good Agent Behavior

- Do not assume the demo is feature-complete; many routes are still a showcase or mock.
- Do assume the demo is the best visual reference for how VenusCN components should be composed.
- When in doubt, match the nearest implemented pattern rather than inventing a new one.
