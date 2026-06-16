#!/usr/bin/env node
/**
 * Generates a shadcn-compatible registry from the package source.
 *
 * The package source uses relative imports (`../lib/utils`, `./button`) so it
 * stays workspace-safe. shadcn registries require `@/` alias imports in the
 * distributed files, so this script rewrites them into a staging `registry/`
 * tree and writes a `registry.json` that `shadcn build` turns into `r/*.json`.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG = join(__dirname, "..");
const SRC = join(PKG, "src");
const STAGE = join(PKG, "registry");
const NS = "venus";

// npm deps + cross-component (reg) + support-lib (lib) deps, from the source inventory.
const COMPONENTS = {
  alert: { npm: ["class-variance-authority"] },
  "app-card": { npm: ["lucide-react"] },
  avatar: { npm: ["@radix-ui/react-avatar"] },
  badge: { npm: ["@radix-ui/react-slot", "class-variance-authority"] },
  button: { npm: ["@radix-ui/react-slot"] },
  card: { npm: [] },
  "category-pill": { npm: ["lucide-react"] },
  checkbox: { npm: ["lucide-react"] },
  dialog: { npm: ["@radix-ui/react-dialog", "lucide-react"] },
  divider: { npm: [] },
  dropdown: { npm: ["lucide-react"] },
  field: { npm: ["lucide-react"] },
  "form-sidebar": { npm: ["lucide-react"] },
  input: { npm: [] },
  "page-form-header": { npm: ["lucide-react"], reg: ["button"] },
  "page-header": { npm: [], reg: ["button"] },
  "page-search-header": { npm: [], reg: ["search-v3", "button"] },
  pills: { npm: ["lucide-react"] },
  progress: { npm: ["@radix-ui/react-progress"] },
  radio: { npm: [] },
  "rule-group": { npm: ["lucide-react"], reg: ["rule-row", "dropdown", "button", "pills"], lib: ["targeting-rules"] },
  "rule-row": { npm: ["lucide-react"], reg: ["category-pill", "dropdown", "input"], lib: ["targeting-rules", "targeting-options"] },
  search: { npm: ["lucide-react"] },
  "search-v3": { npm: ["lucide-react"] },
  select: { npm: ["@radix-ui/react-select", "lucide-react"] },
  sheet: { npm: ["@radix-ui/react-dialog", "lucide-react"] },
  sidebar: { npm: ["lucide-react"] },
  skeleton: { npm: [] },
  slider: { npm: ["@radix-ui/react-slider"] },
  "status-pill": { npm: [] },
  table: { npm: ["lucide-react"] },
  "table-pagination": { npm: ["lucide-react"] },
  tabs: { npm: ["@radix-ui/react-tabs"] },
  tag: { npm: [] },
  "targeting-category-card": { npm: ["lucide-react"], reg: ["category-pill"] },
  "targeting-rule-builder": { npm: ["lucide-react"], reg: ["rule-group", "button", "dropdown", "tooltip"], lib: ["targeting-rules", "targeting-options"] },
  textarea: { npm: [] },
  toggle: { npm: [] },
  tooltip: { npm: ["@radix-ui/react-tooltip"] },
  accordion: { npm: ["@radix-ui/react-accordion"], desc: "Expandable sections built on Radix UI Accordion." },
  "avatar-group": { npm: ["@radix-ui/react-avatar"], desc: "Stacked avatars with an overflow count." },
  breadcrumb: { npm: ["lucide-react"], desc: "Navigation hierarchy with separators." },
  callout: { npm: [], desc: "Full-width banner with variant colors and a left accent." },
  chart: { npm: [], desc: "Lightweight CSS/SVG bar and line charts." },
  "code-block": { npm: [], desc: "Code display with optional line numbers." },
  collapsible: { npm: ["@radix-ui/react-collapsible"], desc: "Show/hide toggle built on Radix UI Collapsible." },
  command: { npm: [], desc: "Searchable command palette." },
  "context-menu": { npm: ["@radix-ui/react-context-menu"], desc: "Right-click menu built on Radix UI Context Menu." },
  "data-table": { npm: [], reg: ["table"], desc: "Table with sorting and column definitions." },
  "date-picker": { npm: [], desc: "Styled native date input." },
  "dropdown-menu": { npm: ["@radix-ui/react-dropdown-menu"], desc: "Action menu built on Radix UI Dropdown Menu." },
  "empty-state": { npm: [], desc: "Centered placeholder with icon, title, description, and action." },
  form: { npm: [], desc: "Form wrapper providing a disabled-state context." },
  icon: { npm: ["lucide-react"], desc: "Lucide icon wrapper with sm/md/lg sizes." },
  label: { npm: [], desc: "Form label with optional required asterisk." },
  list: { npm: [], desc: "Structured list with icon/title/description/action slots." },
  pagination: { npm: [], desc: "Page navigation with previous/next controls." },
  popover: { npm: ["@radix-ui/react-popover"], desc: "Contextual overlay built on Radix UI Popover." },
  separator: { npm: [], desc: "Horizontal or vertical divider." },
  "simple-accordion": { npm: [], reg: ["accordion"], desc: "Data-driven Accordion wrapper for quick lists." },
  "simple-tabs": { npm: [], reg: ["tabs"], desc: "Data-driven Tabs wrapper for quick tab sets." },
  stack: { npm: [], desc: "Flex layout with direction, gap, align, and justify." },
  stat: { npm: [], desc: "Metric display with value, label, and trend." },
  switch: { npm: [], desc: "Accessible on/off toggle with label." },
  toast: { npm: ["@radix-ui/react-toast", "lucide-react"], desc: "Notification with variant and progress, built on Radix UI Toast." },
  typography: { npm: [], desc: "Heading, paragraph, and text variants." },
};

// Support files shipped as registry:lib (consumers place them under @/lib).
const LIB = {
  "targeting-rules": { src: "types/targeting-rules.ts", reg: [] },
  "targeting-options": { src: "data/targeting-options.ts", reg: ["targeting-rules"] },
};

// Rewrite package-relative imports to the shadcn `@/` aliases consumers expect.
function toAliasImports(code) {
  return code
    .replace(/from "\.\.\/lib\/utils"/g, 'from "@/lib/utils"')
    .replace(/from "\.\.\/types\/targeting-rules"/g, 'from "@/lib/targeting-rules"')
    .replace(/from "\.\.\/data\/targeting-options"/g, 'from "@/lib/targeting-options"')
    .replace(/from "\.\/([a-z0-9-]+)"/g, 'from "@/components/ui/$1"');
}

const titleCase = (n) => n.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

// Reuse the human descriptions from the existing catalog registry.json if present.
const descByName = {};
const catalogPath = join(PKG, "registry.json");
if (existsSync(catalogPath)) {
  try {
    const cat = JSON.parse(readFileSync(catalogPath, "utf8"));
    // shadcn registry format (current) — preserve existing item descriptions on regen
    for (const it of cat.items ?? []) {
      if (it.name && it.description) descByName[it.name] = it.description;
    }
    // old catalog format — fallback for the first generation
    for (const c of cat.components ?? []) {
      if (c.file) descByName[c.file.split("/").pop().replace(/\.tsx?$/, "")] = c.description;
    }
  } catch {}
}

// Fresh staging tree.
rmSync(STAGE, { recursive: true, force: true });
mkdirSync(join(STAGE, "ui"), { recursive: true });
mkdirSync(join(STAGE, "lib"), { recursive: true });

const items = [];

// Component items (registry:ui).
for (const [name, meta] of Object.entries(COMPONENTS)) {
  const code = toAliasImports(readFileSync(join(SRC, "components", `${name}.tsx`), "utf8"));
  writeFileSync(join(STAGE, "ui", `${name}.tsx`), code);
  const registryDependencies = [
    "utils",
    ...(meta.reg ?? []).map((r) => `@${NS}/${r}`),
    ...(meta.lib ?? []).map((l) => `@${NS}/${l}`),
  ];
  items.push({
    name,
    type: "registry:ui",
    title: titleCase(name),
    description: meta.desc ?? descByName[name] ?? `${titleCase(name)} component.`,
    ...(meta.npm.length ? { dependencies: meta.npm } : {}),
    registryDependencies,
    files: [{ path: `registry/ui/${name}.tsx`, type: "registry:ui" }],
  });
}

// Support-lib items (registry:lib).
for (const [name, meta] of Object.entries(LIB)) {
  const code = toAliasImports(readFileSync(join(SRC, meta.src), "utf8"));
  writeFileSync(join(STAGE, "lib", `${name}.ts`), code);
  items.push({
    name,
    type: "registry:lib",
    title: titleCase(name),
    description: `${titleCase(name)} support module for Venus targeting components.`,
    ...(meta.reg.length ? { registryDependencies: meta.reg.map((r) => `@${NS}/${r}`) } : {}),
    files: [{ path: `registry/lib/${name}.ts`, type: "registry:lib" }],
  });
}

// Theme item — ships the complete canonical token stylesheet so installed
// components render with the Venus look.
items.push({
  name: "theme",
  type: "registry:theme",
  title: "Venus Theme",
  description:
    "The complete Venus design-token stylesheet — Tailwind v4 @theme (colors, spacing, typography, radius, shadows) plus the shadcn semantic-var bridge and table styles.",
  files: [
    { path: "src/styles/tokens.css", type: "registry:file", target: "styles/venus.css" },
    { path: "src/styles/table.css", type: "registry:file", target: "styles/venus-table.css" },
  ],
  docs: 'Add these to the top of your globals.css, before `@import "tailwindcss";`:\n@import "./styles/venus.css";\n@import "./styles/venus-table.css";',
});

items.sort((a, b) => a.name.localeCompare(b.name));

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: NS,
  homepage: "https://github.com/lytics/venus",
  items,
};

writeFileSync(join(PKG, "registry.json"), JSON.stringify(registry, null, 2) + "\n");
console.log(`Wrote registry.json with ${items.length} items (${Object.keys(COMPONENTS).length} components + ${Object.keys(LIB).length} lib).`);
