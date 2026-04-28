"use client";

import { useState } from "react";

import {
  // Tier 1
  Typography,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  ToastItem,
  Toaster,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Label,
  Separator,
  Icon,
  // Tier 2
  EmptyState,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Stat,
  AvatarGroup,
  Pagination,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DatePicker,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  // Tier 3
  Form,
  Field,
  FieldLabel,
  Input,
  HelpText,
  List,
  ListItem,
  Callout,
  CodeBlock,
  Switch,
  DataTable,
  Chart,
  // Supporting
  Button,
} from "@contentstack/venuscn";

import { AdminNav } from "@/components/admin-nav";

// ── Layout helpers ────────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-border pb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-8">
        {children}
      </div>
    </section>
  );
}

function VenusCNPane({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-3">VenusCN</h3>
      <div className="bg-white border border-border rounded-lg p-5">
        {children}
      </div>
    </div>
  );
}

function LegacyPane({ storyId, fallbackText }: { storyId?: string; fallbackText?: string }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">Legacy Venus</h3>
      {storyId ? (
        <div className="border rounded-lg overflow-hidden bg-white">
          <iframe
            src={`https://venus-storybook.contentstack.com/iframe.html?id=${storyId}&viewMode=story`}
            className="w-full border-0"
            style={{ height: "300px" }}
            title="Legacy Venus component"
          />
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
          <p className="text-sm text-gray-400 italic">{fallbackText || "No legacy equivalent"}</p>
        </div>
      )}
    </div>
  );
}

// ── Interactive sub-components ─────────────────────────────────────────────────

function PaginationDemo() {
  const [page, setPage] = useState(3);
  return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
}

function DataTableDemo() {
  type Row = { name: string; role: string; status: string; joined: string };
  const columns = [
    { key: "name", header: "Name", sortable: true },
    { key: "role", header: "Role" },
    { key: "status", header: "Status" },
    { key: "joined", header: "Joined" },
  ];
  const data: Row[] = [
    { name: "Alice Nguyen", role: "Engineer", status: "Active", joined: "Jan 2024" },
    { name: "Bob Okafor", role: "Designer", status: "Active", joined: "Mar 2024" },
    { name: "Carol Singh", role: "Manager", status: "Away", joined: "Jun 2023" },
    { name: "Dan Park", role: "Engineer", status: "Inactive", joined: "Nov 2022" },
    { name: "Eva Müller", role: "Analyst", status: "Active", joined: "Feb 2025" },
  ];
  const [sortKey, setSortKey] = useState<string | undefined>();
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("asc"); }
  };
  return (
    <DataTable
      columns={columns}
      data={data}
      sortKey={sortKey}
      sortDirection={sortDir}
      onSort={handleSort}
    />
  );
}

function SwitchDemo() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Switch checked={a} onCheckedChange={setA} id="sw-a" />
        <Label htmlFor="sw-a">Dark mode</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch checked={b} onCheckedChange={setB} id="sw-b" />
        <Label htmlFor="sw-b">Email notifications</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch disabled id="sw-c" />
        <Label htmlFor="sw-c" className="text-gray-400">Disabled</Label>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <AdminNav />

      <div className="max-w-6xl mx-auto p-8 space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">VenusCN Component Comparison</h1>
          <p className="text-gray-500 mt-2">25 new components — visual comparison against Venus legacy</p>
        </div>

        {/* ── Tier 1 ──────────────────────────────────────────────────────── */}

        {/* Typography */}
        <Section id="typography" title="Typography">
          <VenusCNPane>
            <div className="space-y-2">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="p" color="body">Body — The quick brown fox jumps over the lazy dog.</Typography>
              <Typography variant="small" color="subtle">Small — supplementary text for captions and metadata.</Typography>
              <Typography variant="label">Form label</Typography>
              <Typography variant="code">const value = &quot;hello&quot;;</Typography>
            </div>
          </VenusCNPane>
          <LegacyPane fallbackText="No legacy Typography component — headings were raw HTML with ad-hoc Tailwind classes." />
        </Section>

        {/* Stack */}
        <Section id="stack" title="Stack">
          <VenusCNPane>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Horizontal (row, gap-3)</p>
                <Stack direction="horizontal" gap={3} align="center">
                  <div className="w-10 h-10 rounded bg-violet-100 flex items-center justify-center text-violet-600 text-xs font-bold">A</div>
                  <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">B</div>
                  <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">C</div>
                </Stack>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Vertical (col, gap-2)</p>
                <Stack direction="vertical" gap={2}>
                  <div className="h-6 rounded bg-gray-100" />
                  <div className="h-6 rounded bg-gray-100" />
                  <div className="h-6 rounded bg-gray-100" />
                </Stack>
              </div>
            </div>
          </VenusCNPane>
          <LegacyPane fallbackText="No legacy equivalent — layout used one-off flex divs with raw Tailwind." />
        </Section>

        {/* Breadcrumb */}
        <Section id="breadcrumb" title="Breadcrumb">
          <VenusCNPane>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Widget</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Edit</BreadcrumbPage>
              </BreadcrumbItem>
            </Breadcrumb>
          </VenusCNPane>
          <LegacyPane storyId="components-breadcrumb--default" />
        </Section>

        {/* Toast */}
        <Section id="toast" title="Toast">
          <VenusCNPane>
            <div className="space-y-3">
              {([
                { variant: "default", border: "border-l-[#6C5CE7]" },
                { variant: "success", border: "border-l-green-500" },
                { variant: "error", border: "border-l-red-500" },
                { variant: "warning", border: "border-l-amber-500" },
                { variant: "info", border: "border-l-blue-500" },
              ] as const).map(({ variant, border }) => (
                <div
                  key={variant}
                  className={`flex items-start gap-3 rounded-sm border-l-4 bg-white p-4 shadow-md ${border}`}
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{variant.charAt(0).toUpperCase() + variant.slice(1)} toast</p>
                    <p className="text-sm text-gray-600">This is a {variant} notification message.</p>
                  </div>
                </div>
              ))}
            </div>
          </VenusCNPane>
          <LegacyPane storyId="components-notification--default" />
        </Section>

        {/* Popover */}
        <Section id="popover" title="Popover">
          <VenusCNPane>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Workspace settings</p>
                  <p className="text-sm text-muted-foreground">Manage your workspace preferences and team settings here.</p>
                  <Button size="small" variant="primary" className="w-full">Go to Settings</Button>
                </div>
              </PopoverContent>
            </Popover>
          </VenusCNPane>
          <LegacyPane storyId="components-popover--default" />
        </Section>

        {/* Label */}
        <Section id="label" title="Label">
          <VenusCNPane>
            <div className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="demo-email">Email address</Label>
                <Input id="demo-email" placeholder="you@example.com" />
              </div>
              <div className="flex items-center gap-2">
                <Switch id="demo-notif" />
                <Label htmlFor="demo-notif">Enable notifications</Label>
              </div>
            </div>
          </VenusCNPane>
          <LegacyPane fallbackText="No legacy equivalent — labels were raw <label> HTML or FieldLabel scoped to form fields only." />
        </Section>

        {/* Separator */}
        <Section id="separator" title="Separator">
          <VenusCNPane>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Horizontal</p>
                <Separator orientation="horizontal" />
              </div>
              <div className="flex items-center gap-4 h-8">
                <span className="text-sm text-gray-600">Section A</span>
                <Separator orientation="vertical" className="h-full" />
                <span className="text-sm text-gray-600">Section B</span>
                <Separator orientation="vertical" className="h-full" />
                <span className="text-sm text-gray-600">Section C</span>
              </div>
            </div>
          </VenusCNPane>
          <LegacyPane fallbackText="No legacy equivalent — only a horizontal-only Divider with no orientation prop." />
        </Section>

        {/* Icon */}
        <Section id="icon" title="Icon">
          <VenusCNPane>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 mb-2">Sizes</p>
                <div className="flex items-center gap-4">
                  <Icon name="bell" size="sm" />
                  <Icon name="bell" size="md" />
                  <Icon name="bell" size="lg" />
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">Various icons</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {["settings", "user", "check-circle", "alert-circle", "download", "upload", "search", "edit", "trash", "calendar"].map((name) => (
                    <Icon key={name} name={name} size="md" className="text-gray-600" />
                  ))}
                </div>
              </div>
            </div>
          </VenusCNPane>
          <LegacyPane storyId="components-icon--default" />
        </Section>

        {/* ── Tier 2 ──────────────────────────────────────────────────────── */}

        {/* EmptyState */}
        <Section id="empty-state" title="EmptyState">
          <VenusCNPane>
            <EmptyState
              icon={<Icon name="inbox" size="lg" className="text-gray-400" />}
              title="No entries found"
              description="You haven't created any entries yet. Get started by clicking the button below."
              action={<Button variant="primary" size="small">Create Entry</Button>}
            />
          </VenusCNPane>
          <LegacyPane description="No EmptyState component in legacy Venus. Empty screens were hand-coded per-page — each with different spacing, icon treatment, and copy alignment. No shared pattern." />
        </Section>

        {/* Accordion */}
        <Section id="accordion" title="Accordion">
          <VenusCNPane>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Contentstack?</AccordionTrigger>
                <AccordionContent>
                  Contentstack is a headless CMS platform that helps teams deliver digital experiences at scale across channels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does Venus differ from legacy?</AccordionTrigger>
                <AccordionContent>
                  Venus introduces a unified design token system, compound component patterns, and a new Tailwind-based styling architecture.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I migrate incrementally?</AccordionTrigger>
                <AccordionContent>
                  Yes. VenusCN components are drop-in replacements. You can adopt them one component at a time alongside legacy Venus.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </VenusCNPane>
          <LegacyPane description="Legacy Venus had no Accordion component. Expandable sections were custom implementations using local boolean state and conditionally-rendered divs — no animation, no keyboard nav, no ARIA." />
        </Section>

        {/* Stat */}
        <Section id="stat" title="Stat">
          <VenusCNPane>
            <div className="grid grid-cols-2 gap-4">
              <Stat value="1,234" label="Total Users" change="+12%" trend="up" icon={<Icon name="users" size="md" />} />
              <Stat value="98.4%" label="Uptime" change="+0.2%" trend="up" icon={<Icon name="activity" size="md" />} />
              <Stat value="$48,900" label="Revenue" change="-3.1%" trend="down" icon={<Icon name="credit-card" size="md" />} />
              <Stat value="342" label="Pending" change="0%" trend="neutral" icon={<Icon name="clock" size="md" />} />
            </div>
          </VenusCNPane>
          <LegacyPane description="No Stat component in legacy. Dashboard metrics were raw HTML with inconsistent font sizes and no shared trend/change colour system." />
        </Section>

        {/* AvatarGroup */}
        <Section id="avatar-group" title="AvatarGroup">
          <VenusCNPane>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 mb-2">Small</p>
                <AvatarGroup
                  size="sm"
                  avatars={[
                    { fallback: "AL" },
                    { fallback: "BK" },
                    { fallback: "CM" },
                    { fallback: "DW" },
                    { fallback: "EZ" },
                  ]}
                  max={4}
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">Medium (default)</p>
                <AvatarGroup
                  avatars={[
                    { fallback: "AL" },
                    { fallback: "BK" },
                    { fallback: "CM" },
                    { fallback: "DW" },
                    { fallback: "EZ" },
                  ]}
                  max={3}
                />
              </div>
            </div>
          </VenusCNPane>
          <LegacyPane description="No AvatarGroup in legacy. Grouped user avatars were either absent or implemented with raw flex rows of Avatar components with no overlap, max-display, or overflow pill." />
        </Section>

        {/* Pagination */}
        <Section id="pagination" title="Pagination">
          <VenusCNPane>
            <PaginationDemo />
          </VenusCNPane>
          <LegacyPane description="Legacy had TablePagination (tightly coupled to Table). No standalone Pagination component, no smart ellipsis, and no accessible aria-label markup." />
        </Section>

        {/* Command */}
        <Section id="command" title="Command">
          <VenusCNPane>
            <div className="border border-border rounded-lg overflow-hidden">
              <Command>
                <CommandInput placeholder="Search commands..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Content">
                    <CommandItem>Create new entry</CommandItem>
                    <CommandItem>Publish selected</CommandItem>
                    <CommandItem>Archive entry</CommandItem>
                  </CommandGroup>
                  <CommandGroup heading="Navigation">
                    <CommandItem>Go to Dashboard</CommandItem>
                    <CommandItem>Open Settings</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </VenusCNPane>
          <LegacyPane description="No Command palette in legacy Venus. No keyboard-driven command interface anywhere in the platform." />
        </Section>

        {/* ContextMenu */}
        <Section id="context-menu" title="ContextMenu">
          <VenusCNPane>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <div className="flex items-center justify-center h-24 rounded-lg border-2 border-dashed border-border text-sm text-gray-500 cursor-context-menu select-none">
                  Right-click here
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Open</ContextMenuItem>
                <ContextMenuItem>Edit</ContextMenuItem>
                <ContextMenuItem>Duplicate</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Archive</ContextMenuItem>
                <ContextMenuItem className="text-red-600">Delete</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </VenusCNPane>
          <LegacyPane description="No ContextMenu component in legacy Venus. Right-click interactions were not present in the product." />
        </Section>

        {/* DropdownMenu */}
        <Section id="dropdown-menu" title="DropdownMenu">
          <VenusCNPane>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  Actions <Icon name="chevron-down" size="sm" className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Entry Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Preview</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </VenusCNPane>
          <LegacyPane description="Legacy used a custom Dropdown component (select-style) for dropdowns. No action-menu DropdownMenu with labels, separators, and icons — different mental model entirely." />
        </Section>

        {/* DatePicker */}
        <Section id="date-picker" title="DatePicker">
          <VenusCNPane>
            <div className="space-y-3 max-w-xs">
              <Field>
                <FieldLabel>Start date</FieldLabel>
                <DatePicker defaultValue="2026-04-25" />
                <HelpText>Select the campaign start date</HelpText>
              </Field>
            </div>
          </VenusCNPane>
          <LegacyPane description="No DatePicker component in legacy Venus. Date inputs were raw <input type='date'> elements with no Venus styling, token alignment, or field wrapper integration." />
        </Section>

        {/* Collapsible */}
        <Section id="collapsible" title="Collapsible">
          <VenusCNPane>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  Advanced options
                  <Icon name="chevron-down" size="sm" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pt-3 space-y-2 border-t border-border mt-2">
                  <p className="text-sm text-gray-600">Cache TTL: 3600s</p>
                  <p className="text-sm text-gray-600">Max retries: 3</p>
                  <p className="text-sm text-gray-600">Timeout: 30s</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </VenusCNPane>
          <LegacyPane description="No Collapsible primitive in legacy. Expandable sections used local useState with conditional renders — no animation, no accessible trigger semantics." />
        </Section>

        {/* ── Tier 3 ──────────────────────────────────────────────────────── */}

        {/* Form */}
        <Section id="form" title="Form">
          <VenusCNPane>
            <Form onSubmit={(e) => e.preventDefault()} className="max-w-sm">
              <Field>
                <FieldLabel htmlFor="form-name" required>Full name</FieldLabel>
                <Input id="form-name" placeholder="Jane Doe" />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-email" required>Work email</FieldLabel>
                <Input id="form-email" type="email" placeholder="jane@company.com" />
                <HelpText>We'll send a confirmation to this address.</HelpText>
              </Field>
              <div className="flex gap-3 pt-1">
                <Button type="submit" variant="primary">Save</Button>
                <Button type="button" variant="ghost">Cancel</Button>
              </div>
            </Form>
          </VenusCNPane>
          <LegacyPane description="Legacy had Field + FieldLabel + HelpText individually but no Form wrapper component. No shared disabled-context propagation. Forms were plain <form> elements." />
        </Section>

        {/* List */}
        <Section id="list" title="List">
          <VenusCNPane>
            <div className="border border-border rounded-lg overflow-hidden">
              <List>
                <ListItem
                  icon={<Icon name="user" size="sm" />}
                  itemTitle="Alice Nguyen"
                  description="alice@company.com"
                  action={<Button size="small" variant="ghost">Edit</Button>}
                />
                <ListItem
                  icon={<Icon name="user" size="sm" />}
                  itemTitle="Bob Okafor"
                  description="bob@company.com"
                  action={<Button size="small" variant="ghost">Edit</Button>}
                />
                <ListItem
                  icon={<Icon name="user" size="sm" />}
                  itemTitle="Carol Singh"
                  description="carol@company.com"
                  action={<Button size="small" variant="ghost">Edit</Button>}
                />
              </List>
            </div>
          </VenusCNPane>
          <LegacyPane description="No List component in legacy Venus. Item lists were either Table rows or custom flex divs — no shared row height, separator, icon slot, or trailing action pattern." />
        </Section>

        {/* Callout */}
        <Section id="callout" title="Callout">
          <VenusCNPane>
            <div className="space-y-3">
              <Callout variant="info" title="Info" description="Your workspace is syncing. Changes will appear shortly." />
              <Callout variant="success" title="Published" description="All 12 entries have been published successfully." />
              <Callout variant="warning" title="Usage limit" description="You've used 85% of your API quota this month." />
              <Callout variant="danger" title="Error" description="Webhook delivery failed for 3 endpoints." dismissible />
            </div>
          </VenusCNPane>
          <LegacyPane description="Legacy used Alert (from shadcn) for informational banners. No Venus token styling, no dismissible prop, no left-border accent treatment, no danger/warning variants." />
        </Section>

        {/* CodeBlock */}
        <Section id="code-block" title="CodeBlock">
          <VenusCNPane>
            <CodeBlock
              language="typescript"
              lineNumbers
              code={`import { Button } from "@contentstack/venuscn";

function App() {
  return (
    <Button variant="primary" size="regular">
      Click me
    </Button>
  );
}`}
            />
          </VenusCNPane>
          <LegacyPane description="No CodeBlock component in legacy Venus. Code snippets in documentation or UI were raw <pre><code> elements — no dark theme, no language label, no line numbers." />
        </Section>

        {/* Switch */}
        <Section id="switch" title="Switch">
          <VenusCNPane>
            <SwitchDemo />
          </VenusCNPane>
          <LegacyPane description="Legacy had Toggle (checkbox-based) for boolean switches. Toggle renders as a pill-style toggle input. Switch is a Radix-based primitive with cleaner semantics, better accessibility, and standard onCheckedChange API." />
        </Section>

        {/* DataTable */}
        <Section id="data-table" title="DataTable">
          <VenusCNPane>
            <DataTableDemo />
          </VenusCNPane>
          <LegacyPane description="Legacy had Table (raw table primitives) — no column definition system, no sortable headers, no DataTable abstraction. Sorting had to be wired manually per-page." />
        </Section>

        {/* Chart */}
        <Section id="chart" title="Chart">
          <VenusCNPane>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 mb-2">Bar chart</p>
                <Chart
                  type="bar"
                  height={180}
                  data={[
                    { label: "Jan", value: 420 },
                    { label: "Feb", value: 380 },
                    { label: "Mar", value: 510 },
                    { label: "Apr", value: 670 },
                    { label: "May", value: 590 },
                  ]}
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">Line chart</p>
                <Chart
                  type="line"
                  height={180}
                  data={[
                    { label: "Mon", value: 24 },
                    { label: "Tue", value: 31 },
                    { label: "Wed", value: 28 },
                    { label: "Thu", value: 45 },
                    { label: "Fri", value: 39 },
                  ]}
                />
              </div>
            </div>
          </VenusCNPane>
          <LegacyPane description="No Chart component in legacy Venus. Charts were either absent or implemented via third-party libraries (Recharts, Chart.js) with no Venus design token integration." />
        </Section>
      </div>
    </div>
  );
}
