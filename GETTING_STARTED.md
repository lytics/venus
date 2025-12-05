# Getting Started with Venus

Welcome! This is a component library and demo app that helps you build interfaces that match the Contentstack design system.

## What You'll Need

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **pnpm** - A fast package manager

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

## Quick Start

Three simple steps to get running:

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd venus_external

# Install all dependencies
pnpm install
```

This installs everything you need for both the component library and demo app.

### 2. Start the Demo

```bash
pnpm dev
```

The demo app will start at **http://localhost:3000**

### 3. Explore the Demo

Once it's running, you'll see:

- **Dashboard** - Example of a typical app layout with cards and navigation
- **Primatives** - Visual gallery of all available Venus components
- **Personalize** - Complex multi-page feature showing real-world usage
- **Colors & Text** - Design token reference pages

## What You're Looking At

The demo is a working clone of the Contentstack app interface. It's not just documentation - it's a fully functional reference implementation.

Use it as:
- Visual reference for how components should look
- Code examples for common patterns
- Starting point for building similar interfaces

## Where to Go Next

**See components in action:**
- Browse to `/primatives` for the component gallery
- Check out `/dashboard` for layout patterns
- Explore `/personalize` for complex feature examples

**Read more documentation:**
- [How the Demo Works](./apps/demo/HOW_THE_DEMO_WORKS.md) - Tour of the demo app
- [Design System Guide](./DESIGN_SYSTEM.md) - Understanding design tokens
- [Venus Components](./packages/venuscn/README.md) - Component API reference

**Start building:**
- Components live in `packages/venuscn/src/components/`
- Demo pages are in `apps/demo/src/app/`
- Import components: `import { Button } from "@contentstack/venuscn"`

## Common Commands

```bash
# Start the demo app
pnpm dev

# Build everything
pnpm build

# Build just the component library
pnpm --filter @contentstack/venuscn build

# Run component library in watch mode
cd packages/venuscn && pnpm dev
```

## Having Issues?

The most common issue is using the wrong Node version. Make sure you're on Node 18 or higher:

```bash
node --version  # Should show v18.x.x or higher
```

If you see errors about missing dependencies, try:

```bash
pnpm install --force
```

## Project Structure (Quick Overview)

```
venus_external/
├── packages/venuscn/       # Component library - the reusable components
├── apps/demo/              # Demo app - working examples
└── pnpm-workspace.yaml     # Links everything together
```

Changes to components automatically reflect in the demo app while running `pnpm dev`.

Ready to dive deeper? Check out the [Design System Guide](./DESIGN_SYSTEM.md) next.
