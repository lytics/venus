# (Unofficial) Venus Design System Monorepo

**Please note: This is unofficial— if you are building for the core product, please follow all guidelines for venus use**

OFFICIAL VENUS DOCUMENTATION: https://venus-storybook.contentstack.com/

**What this is:** A component library and working demo app that helps you prototype interfaces matching the Contentstack design system. For Vibe coding, marketplace app building and other use cases.

It's pretty straightforward——

Includes cloned Venus components (ShadCN/UI and in the future, MUI) and a demo app (just a personalize pathway right now from a personal protoype but i'll continue to expand it). There are also "library" pages with the component examples.

**How its meant to be used** Things should mostly "work"— YMMV based on personal workflow, but how I'd usually work with this repo is to make sure that Claude/whatever knows to reference the Primatives Showcase in the Component library as examples of what to do. Ultimately its just a set of components you can use to build things- You should be able to use them either to manually or vibe-based build prototypes etc.

**The demo is a WIP and only has a personalize path built out, but does have a lot of reference components/code/architecture**

## What's Inside

**Component Library** - Pre-built React components that match Contentstack's Venus design system
- Cloned base components (buttons, forms, tables, navigation, etc.)
- Built on Tailwind CSS v4 + shadcn/ui + Radix UI
- TypeScript support with full type definitions
- Design token system for consistency

**Demo Application** - Working reference implementation
- Full clone of Contentstack's interface
- Component galleries showing every variant
- Real-world feature examples
- Layout and pattern reference

## Quick Start

Three commands to get running:

```bash
# 1. Install pnpm (if needed)
npm install -g pnpm

# 2. Install dependencies
pnpm install

# 3. Start the demo
pnpm dev
```

Open **http://localhost:3000** and explore the demo.

**Questions?** Read the [Getting Started Guide](./GETTING_STARTED.md) for a detailed walkthrough. (Written by AI so hopefully not terrible)

## Documentation

**Start Here:**
- [Getting Started](./GETTING_STARTED.md) - Set up and run the demo (3 minutes)
- [Design System Guide](./DESIGN_SYSTEM.md) - Learn about design tokens and consistency

**Learn More:**
- [How the Demo Works](./apps/demo/HOW_THE_DEMO_WORKS.md) - Tour of the demo app
- [Venus Components](./packages/venuscn/README.md) - Component API reference
- [Demo App Guide](./apps/demo/CLAUDE.md) - Demo-specific patterns

## Packages & Apps

| Package | Description | Status |
|---------|-------------|--------|
| [@contentstack/venuscn](./packages/venuscn) | Tailwind CSS v4 + shadcn/ui edition | Active |
| [@contentstack/venusmui](./packages/venusmui) | Material-UI edition | Planned |

| App | Description | Path |
|-----|-------------|------|
| [Demo](./apps/demo) | Contentstack demo application | `apps/demo` |

## Common Commands

```bash
# Start demo app with hot reload
pnpm dev

# Build everything
pnpm build

# Build just the component library
pnpm --filter @contentstack/venuscn build

# Component library watch mode
cd packages/venuscn && pnpm dev
```

## Workspace Structure

```
venus_external/
├── packages/
│   ├── venuscn/              # Tailwind + shadcn components
│   │   ├── src/
│   │   │   ├── components/   # Venus components
│   │   │   ├── styles/       # Design tokens
│   │   │   └── index.ts      # Package exports
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── venusmui/             # Material-UI components (planned)
│       └── package.json
│
├── apps/
│   └── demo/                 # Demo application
│       ├── src/
│       │   ├── app/          # Next.js app router
│       │   └── components/   # App-specific components
│       └── package.json
│
├── pnpm-workspace.yaml       # Workspace configuration
├── package.json              # Root package.json
└── README.md                 # This file
```

## Package Development

### Working on @contentstack/venuscn

```bash
# Navigate to package
cd packages/venuscn

# Install dependencies
pnpm install

# Start watch mode
pnpm dev

# Build package
pnpm build

# Run type checking
pnpm typecheck
```

### Testing Changes in Demo App

The demo app automatically uses the local workspace package. Just run:

```bash
# From workspace root
pnpm dev
```

Changes to `packages/venuscn` will be reflected in the demo app.

## Available Scripts

### Workspace Root

```bash
pnpm dev              # Start demo app
pnpm build            # Build demo app
pnpm build:packages   # Build all packages
pnpm lint             # Lint all packages
```

### Package Scripts

```bash
pnpm --filter @contentstack/venuscn build    # Build specific package
pnpm --filter @contentstack/venuscn dev      # Watch mode for package
pnpm --filter demo build                     # Build demo app
```

## Tech Stack

### Core Framework
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with design tokens
- **pnpm workspaces** for monorepo management

### Component Library (venuscn)
- **shadcn/ui** (New York variant)
- **Radix UI** primitives
- **class-variance-authority** for variants
- **tailwind-merge** for class merging

### Package Build
- **tsup** for bundling
- **TypeScript** for type generation

## What You Get

**Production-Ready Components:**
- Form controls (Button, Input, Checkbox, Radio, Toggle, Dropdown)
- Data display (Table, Search, Tags, Pills)
- Navigation (Tabs, PageHeader variants)
- Advanced features (TargetingRuleBuilder, FormSidebar)

**Design System:**
- Complete design token system for colors, spacing, typography
- 4px border radius and consistent spacing
- Dark mode support
- Built on accessible Radix UI primitives

See [packages/venuscn/README.md](./packages/venuscn/README.md) for the complete component list and API documentation.

## Contributing

### Adding New Components

1. Create component in `packages/venuscn/src/components/`
2. Export from `packages/venuscn/src/components/index.ts`
3. Add to main export in `packages/venuscn/src/index.ts`
4. Build package: `pnpm --filter @contentstack/venuscn build`
5. Test in demo app

### Creating a New Package

1. Create directory in `packages/`
2. Add to `pnpm-workspace.yaml`
3. Create `package.json` with workspace dependencies
4. Build and link: `pnpm install`

## Documentation

- [Venus Components (@contentstack/venuscn)](./packages/venuscn/README.md)
- [Demo App Guide](./apps/demo/CLAUDE.md)
- [Original Implementation Guide](./VENUS_IMPLEMENTATION_GUIDE.md)
- [Production Specs](./VENUS_PRODUCTION_SPECS.md)
- [Design Tokens](./VENUS_DESIGN_TOKENS.md)

## License

MIT

## Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/contentstack/venus).
