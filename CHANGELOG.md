# Changelog

All notable changes to this monorepo are documented here.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Installable shadcn registry for `@contentstack/venuscn`. Register the `@venus` namespace in `components.json` and pull components by name via the shadcn CLI (served over jsDelivr). Includes a `registry:theme` item (`@venus/theme`) that ships the token stylesheet.
- DTCG token export: `packages/venuscn/tokens.json` (machine-readable) and `packages/venuscn/design.md` (human-readable), both generated from `tokens.css` via `pnpm build:tokens`.
- Vitest test suite for the component library (123 tests).
- Prettier for consistent formatting.

### Changed

- Expanded the component library from 39 to 66 components.
- Consolidated divergent design tokens into one canonical package stylesheet (`packages/venuscn/src/styles/tokens.css`); the demo app now imports it directly.

### Removed

- De-AI cleanup: removed internal work-logs and placeholder tests, and split out the formatting config from component source.
