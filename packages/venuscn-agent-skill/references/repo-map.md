# Repo Map

## Workspace Shape

- `packages/venuscn`
  - Main reusable component library.
  - Components live in `src/components/`.
  - Tokens live in `src/styles/tokens.css`.
  - Public exports are controlled by `src/components/index.ts` and `src/index.ts`.
- `packages/venusmui`
  - Placeholder package, not the main implementation target.
- `apps/demo`
  - Next.js demo and reference app.
  - Use it to find working layouts, page structure, and component composition patterns.

## Source Of Truth Order

When making UI decisions, prefer these sources in order:

1. Existing code in `packages/venuscn`
2. Working examples in `apps/demo`
3. `docs/guides/design-system.md`
4. Root and package README files

## High-Value Files

- `packages/venuscn/README.md`
  - Component list and package usage.
- `apps/demo/HOW_THE_DEMO_WORKS.md`
  - Route map and page reference guidance.
- `docs/guides/design-system.md`
  - Token and styling guidance.
- `docs/guides/getting-started.md`
  - Setup and runtime baseline.
- `docs/guides/hardening-and-validation.md`
  - Validation commands and packaging expectations.

## Typical Change Placement

- Reusable button, form, table, navigation, token work:
  - `packages/venuscn`
- Demo-only layouts, navigation, app pages, showcase routes:
  - `apps/demo`
- Repo guidance, architecture notes, plans, specs:
  - `docs/`

## Validation Baseline

- Use `pnpm check` after code changes.
- The repo expects Node `20.9.0+`.
- Demo app changes should keep Next.js and Playwright validation healthy.
