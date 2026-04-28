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

function Section({ id, title, fileName, children }: { id: string; title: string; fileName?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold border-b border-border pb-2">{title}</h2>
        {fileName && <p className="text-xs text-gray-400 font-mono mt-1">{fileName}</p>}
      </div>
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
        <Section id="typography" title="Typography" fileName="typography.tsx">
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
          <LegacyPane storyId="components-typography-heading--default" />
        </Section>

        {/* Stack */}
        <Section id="stack" title="Stack" fileName="stack.tsx">
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
          <LegacyPane fallbackText="No legacy component — layout used one-off flex divs." />
        </Section>

        {/* Breadcrumb */}
        <Section id="breadcrumb" title="Breadcrumb" fileName="breadcrumb.tsx">
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
          <LegacyPane fallbackText="Legacy story excluded from public Storybook build (in-progress category)." />
        </Section>

        {/* Toast */}
        <Section id="toast" title="Toast" fileName="toast.tsx">
          <VenusCNPane>
            <div className="space-y-3">
              {([
                { variant: "default", border: "border-l-[#6C5CE7]", bg: "bg-[#f8f7fd]" },
                { variant: "success", border: "border-l-green-500", bg: "bg-[#f0fdf4]" },
                { variant: "error", border: "border-l-red-500", bg: "bg-[#fef2f2]" },
                { variant: "warning", border: "border-l-amber-500", bg: "bg-[#fffbeb]" },
                { variant: "info", border: "border-l-blue-500", bg: "bg-[#eff6ff]" },
              ] as const).map(({ variant, border, bg }) => (
                <div
                  key={variant}
                  className={`flex items-start gap-3 rounded-sm border-l-4 p-4 shadow-md ${border} ${bg}`}
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{variant.charAt(0).toUpperCase() + variant.slice(1)} toast</p>
                    <p className="text-sm text-gray-600">This is a {variant} notification message.</p>
                  </div>
                </div>
              ))}
            </div>
          </VenusCNPane>
          <LegacyPane storyId="components-info--default" />
        </Section>

        {/* Popover */}
        <Section id="popover" title="Popover" fileName="popover.tsx">
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
          <LegacyPane fallbackText="Legacy story excluded from public Storybook build (in-progress category)." />
        </Section>

        {/* Label */}
        <Section id="label" title="Label" fileName="label.tsx">
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
          <LegacyPane storyId="components-fieldlabel--with-required" />
        </Section>

        {/* Separator */}
        <Section id="separator" title="Separator" fileName="separator.tsx">
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
          <LegacyPane storyId="components-line--default" />
        </Section>

        {/* Icon */}
        <Section id="icon" title="Icon" fileName="icon.tsx">
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
        <Section id="empty-state" title="EmptyState" fileName="empty-state.tsx">
          <VenusCNPane>
            <EmptyState
              icon={<Icon name="inbox" size="lg" className="text-gray-400" />}
              title="No entries found"
              description="You haven't created any entries yet. Get started by clicking the button below."
              action={<Button variant="primary" size="small">Create Entry</Button>}
            />
          </VenusCNPane>
          <LegacyPane storyId="components-emptystate--default" />
        </Section>

        {/* Accordion */}
        <Section id="accordion" title="Accordion" fileName="accordion.tsx">
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
          <LegacyPane storyId="components-accordion--default" />
        </Section>

        {/* Stat */}
        <Section id="stat" title="Stat" fileName="stat.tsx">
          <VenusCNPane>
            <div className="grid grid-cols-2 gap-4">
              <Stat value="1,234" label="Total Users" change="+12%" trend="up" icon={<Icon name="users" size="md" />} />
              <Stat value="98.4%" label="Uptime" change="+0.2%" trend="up" icon={<Icon name="activity" size="md" />} />
              <Stat value="$48,900" label="Revenue" change="-3.1%" trend="down" icon={<Icon name="credit-card" size="md" />} />
              <Stat value="342" label="Pending" change="0%" trend="neutral" icon={<Icon name="clock" size="md" />} />
            </div>
          </VenusCNPane>
          <LegacyPane fallbackText="No legacy component — dashboard metrics were raw HTML." />
        </Section>

        {/* AvatarGroup */}
        <Section id="avatar-group" title="AvatarGroup" fileName="avatar-group.tsx">
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
          <LegacyPane fallbackText="No legacy component." />
        </Section>

        {/* Pagination */}
        <Section id="pagination" title="Pagination" fileName="pagination.tsx">
          <VenusCNPane>
            <PaginationDemo />
          </VenusCNPane>
          <LegacyPane storyId="components-table--default" />
        </Section>

        {/* Command */}
        <Section id="command" title="Command" fileName="command.tsx">
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
          <LegacyPane fallbackText="No legacy component." />
        </Section>

        {/* ContextMenu */}
        <Section id="context-menu" title="ContextMenu" fileName="context-menu.tsx">
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
          <LegacyPane fallbackText="No legacy component." />
        </Section>

        {/* DropdownMenu */}
        <Section id="dropdown-menu" title="DropdownMenu" fileName="dropdown-menu.tsx">
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
          <LegacyPane storyId="components-dropdown--default" />
        </Section>

        {/* DatePicker */}
        <Section id="date-picker" title="DatePicker" fileName="date-picker.tsx">
          <VenusCNPane>
            <div className="space-y-3 max-w-xs">
              <Field>
                <FieldLabel>Start date</FieldLabel>
                <DatePicker defaultValue="2026-04-25" />
                <HelpText>Select the campaign start date</HelpText>
              </Field>
            </div>
          </VenusCNPane>
          <LegacyPane storyId="components-datepicker--default" />
        </Section>

        {/* Collapsible */}
        <Section id="collapsible" title="Collapsible" fileName="collapsible.tsx">
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
          <LegacyPane storyId="components-accordion--default" />
        </Section>

        {/* ── Tier 3 ──────────────────────────────────────────────────────── */}

        {/* Form */}
        <Section id="form" title="Form" fileName="form.tsx">
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
          <LegacyPane storyId="components-form--default" />
        </Section>

        {/* List */}
        <Section id="list" title="List" fileName="list.tsx">
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
          <LegacyPane storyId="components-listrow--default" />
        </Section>

        {/* Callout */}
        <Section id="callout" title="Callout" fileName="callout.tsx">
          <VenusCNPane>
            <div className="space-y-3">
              <Callout variant="info" title="Info" description="Your workspace is syncing. Changes will appear shortly." />
              <Callout variant="success" title="Published" description="All 12 entries have been published successfully." />
              <Callout variant="warning" title="Usage limit" description="You've used 85% of your API quota this month." />
              <Callout variant="danger" title="Error" description="Webhook delivery failed for 3 endpoints." dismissible />
            </div>
          </VenusCNPane>
          <LegacyPane storyId="components-info--default" />
        </Section>

        {/* CodeBlock */}
        <Section id="code-block" title="CodeBlock" fileName="code-block.tsx">
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
          <LegacyPane fallbackText="No legacy component." />
        </Section>

        {/* Switch */}
        <Section id="switch" title="Switch" fileName="switch.tsx">
          <VenusCNPane>
            <SwitchDemo />
          </VenusCNPane>
          <LegacyPane storyId="components-toggle-switch--with-label" />
        </Section>

        {/* DataTable */}
        <Section id="data-table" title="DataTable" fileName="data-table.tsx">
          <VenusCNPane>
            <DataTableDemo />
          </VenusCNPane>
          <LegacyPane storyId="components-table--default" />
        </Section>

        {/* Chart */}
        <Section id="chart" title="Chart" fileName="chart.tsx">
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
          <LegacyPane fallbackText="No legacy component." />
        </Section>
      </div>
    </div>
  );
}
