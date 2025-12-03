# Venus Design System Monorepo

Component libraries matching Contentstack's Venus design system.

## Packages

| Package | Description | Status |
|---------|-------------|--------|
| [@contentstack/venuscn](./packages/venuscn) | Tailwind CSS v4 + shadcn/ui edition | Active |
| [@contentstack/venusmui](./packages/venusmui) | Material-UI edition | Planned |

## Apps

| App | Description | Path |
|-----|-------------|------|
| [Demo](./apps/demo) | Contentstack demo application | `apps/demo` |

## Getting Started

### Prerequisites

```bash
# Install pnpm if needed
npm install -g pnpm
```

### Installation

```bash
# Install all dependencies
pnpm install
```

### Development

```bash
# Start demo app (runs from workspace root)
pnpm dev

# Build all packages
pnpm build:packages

# Build demo app
pnpm --filter demo build
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

## Design System

The Venus Design System is based on production specifications from Contentstack's app.contentstack.com.

### Key Features
- Production-verified component specs (16px buttons, 4px radius)
- Complete design token system
- TypeScript support
- Dark mode ready
- Accessibility-focused (Radix UI)

### Component Highlights
- Form controls (Button, Input, Checkbox, Radio, Toggle)
- Data display (Table, Search, Tags, Pills)
- Navigation (Tabs, PageHeader)
- Advanced (TargetingRuleBuilder, FormSidebar)

See [packages/venuscn/README.md](./packages/venuscn/README.md) for complete documentation.

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
