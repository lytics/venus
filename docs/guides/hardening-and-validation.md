# Hardening And Validation

This repo now has a single validation path for installability and day-to-day maintenance:

```bash
nvm use
pnpm install
pnpm check
```

## Runtime Baseline

- Node.js `20.9.0` or newer is required.
- The demo app is on Next.js `16.2.4`.
- Next.js 16 uses Turbopack by default, so the demo scripts now use plain `next dev` and `next build`.

## What `pnpm check` Covers

- `pnpm lint`
  - Lints the workspace packages and the Next.js demo app.
- `pnpm typecheck`
  - Typechecks both published packages and the demo app source.
- `pnpm build`
  - Builds `@contentstack/venuscn`, `@contentstack/venusmui`, and the demo app.
- `pnpm test`
  - Runs the Playwright smoke suite against an auto-started local demo server.

## Packaging Guarantees

The package manifests were tightened so consumers can install the libraries without manual fixes:

- `@contentstack/venuscn` and `@contentstack/venusmui` now point CommonJS consumers at `dist/index.cjs`.
- ESM consumers now resolve `dist/index.js`, which matches the `tsup` output.
- `@contentstack/venuscn` marks CSS as side-effectful so style imports are not tree-shaken away.
- Both packages use `prepack` to build dist files before publishing.
- Both packages declare `publishConfig.access = public` for npm publishing.

## Test Strategy

The Playwright suite is now scoped to smoke tests (`*.smoke.spec.ts`) so `pnpm test` validates stable user-facing flows:

- Landing page and key showcase routes render.
- Sticky Actions columns behave correctly in the two main table examples.

Older exploratory specs remain in the repo as debugging references, but they are not part of the default quality gate.
