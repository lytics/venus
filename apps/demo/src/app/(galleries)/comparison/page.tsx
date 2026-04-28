"use client";

import { useState } from "react";

import {
  // Form Inputs
  Button,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Toggle,
  Switch,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Field,
  FieldLabel,
  HelpText,
  Label,
  DatePicker,
  Form,
  // Text & Typography
  Typography,
  Tag,
  Badge,
  Pill,
  Pills,
  StatusPill,
  CategoryPill,
  // Layout
  Stack,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Divider,
  Separator,
  Skeleton,
  // Navigation
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Pagination,
  Sidebar,
  SidebarNav,
  SidebarSection,
  // Data Display
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  DataTable,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  EmptyState,
  Stat,
  Chart,
  Icon,
  // Feedback
  Alert,
  AlertTitle,
  AlertDescription,
  Callout,
  ToastItem,
  Toaster,
  Progress,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  // Overlays
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Dropdown,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  // Page Layout
  PageHeader,
  PageSearchHeader,
  PageFormHeader,
  FormSidebar,
  AppCard,
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  // Targeting
  TargetingCategoryCard,
  RuleRow,
  RuleGroup,
  TargetingRuleBuilder,
  // Code
  CodeBlock,
  // Search
  Search,
  SearchV3,
  // Table-coupled
  TablePagination,
  // Slider
  Slider,
  // Skeleton
} from "@contentstack/venuscn";

import { AdminNav } from "@/components/admin-nav";

// ── Layout helpers ────────────────────────────────────────────────────────────

function CategoryHeader({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-violet-200 pb-3 mb-2">
      <h2 className="text-2xl font-bold text-violet-800">{title}</h2>
    </div>
  );
}

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

type TRBGroups = Parameters<typeof TargetingRuleBuilder>[0]["groups"];

function TargetingRuleBuilderDemo() {
  const [groups, setGroups] = useState<TRBGroups>([
    {
      id: "g1",
      matchType: "all",
      rules: [
        { id: "r1", category: "audience", attribute: "user-segment", operator: "equals", value: "Premium" },
      ],
    },
  ]);
  return (
    <TargetingRuleBuilder
      groups={groups}
      onChange={setGroups}
    />
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
          <p className="text-gray-500 mt-2">All 64 components — visual comparison against Venus legacy</p>
        </div>

        {/* ── 1. Form Inputs ──────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Form Inputs" />

          {/* Button */}
          <Section id="button" title="Button" fileName="button.tsx">
            <VenusCNPane>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-button--default" />
          </Section>

          {/* Input */}
          <Section id="input" title="Input" fileName="input.tsx">
            <VenusCNPane>
              <div className="space-y-3 max-w-sm">
                <Input placeholder="Enter text..." />
                <Input placeholder="Disabled" disabled />
                <Input type="password" placeholder="Password" />
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-textinput--default" />
          </Section>

          {/* Textarea */}
          <Section id="textarea" title="Textarea" fileName="textarea.tsx">
            <VenusCNPane>
              <Textarea placeholder="Write a description..." rows={4} className="max-w-sm" />
            </VenusCNPane>
            <LegacyPane storyId="components-textarea--default" />
          </Section>

          {/* Checkbox */}
          <Section id="checkbox" title="Checkbox" fileName="checkbox.tsx">
            <VenusCNPane>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="cb1" defaultChecked />
                  <label htmlFor="cb1" className="text-sm">Accept terms and conditions</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="cb2" />
                  <label htmlFor="cb2" className="text-sm">Subscribe to newsletter</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="cb3" disabled />
                  <label htmlFor="cb3" className="text-sm text-gray-400">Disabled option</label>
                </div>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-checkbox--default" />
          </Section>

          {/* Radio */}
          <Section id="radio" title="Radio" fileName="radio.tsx">
            <VenusCNPane>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Radio id="r1" name="plan" value="free" defaultChecked />
                  <label htmlFor="r1" className="text-sm">Free plan</label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="r2" name="plan" value="pro" />
                  <label htmlFor="r2" className="text-sm">Pro plan</label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="r3" name="plan" value="enterprise" />
                  <label htmlFor="r3" className="text-sm">Enterprise plan</label>
                </div>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-radio--default" />
          </Section>

          {/* Toggle */}
          <Section id="toggle" title="Toggle" fileName="toggle.tsx">
            <VenusCNPane>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Toggle id="tog1" defaultChecked />
                  <label htmlFor="tog1" className="text-sm">Feature enabled</label>
                </div>
                <div className="flex items-center gap-2">
                  <Toggle id="tog2" />
                  <label htmlFor="tog2" className="text-sm">Feature disabled</label>
                </div>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-toggle-switch--default" />
          </Section>

          {/* Switch */}
          <Section id="switch" title="Switch" fileName="switch.tsx">
            <VenusCNPane>
              <SwitchDemo />
            </VenusCNPane>
            <LegacyPane storyId="components-toggle-switch--with-label" />
          </Section>

          {/* Select */}
          <Section id="select" title="Select" fileName="select.tsx">
            <VenusCNPane>
              <Select>
                <SelectTrigger className="max-w-xs">
                  <SelectValue placeholder="Select a role..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                </SelectContent>
              </Select>
            </VenusCNPane>
            <LegacyPane storyId="components-select--default" />
          </Section>

          {/* Field */}
          <Section id="field" title="Field" fileName="field.tsx">
            <VenusCNPane>
              <div className="space-y-4 max-w-sm">
                <Field>
                  <FieldLabel htmlFor="f1" required>Entry title</FieldLabel>
                  <Input id="f1" placeholder="My entry title" />
                  <HelpText>This will be the public-facing title.</HelpText>
                </Field>
                <Field>
                  <FieldLabel htmlFor="f2">Description</FieldLabel>
                  <Textarea id="f2" placeholder="Optional description..." rows={3} />
                </Field>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-field--default" />
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
        </div>

        {/* ── 2. Text & Typography ─────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Text & Typography" />

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

          {/* Tag */}
          <Section id="tag" title="Tag" fileName="tag.tsx">
            <VenusCNPane>
              <div className="flex flex-wrap gap-2">
                <Tag>Default</Tag>
                <Tag>Marketing</Tag>
                <Tag>Published</Tag>
                <Tag>Draft</Tag>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-tag-tags--default" />
          </Section>

          {/* Badge */}
          <Section id="badge" title="Badge" fileName="badge.tsx">
            <VenusCNPane>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="No legacy equivalent" />
          </Section>

          {/* Pills */}
          <Section id="pills" title="Pills" fileName="pills.tsx">
            <VenusCNPane>
              <Pills>
                <Pill>All</Pill>
                <Pill status="success">Active</Pill>
                <Pill>Draft</Pill>
                <Pill>Archived</Pill>
              </Pills>
            </VenusCNPane>
            <LegacyPane storyId="components-pills--default" />
          </Section>

          {/* StatusPill */}
          <Section id="status-pill" title="StatusPill" fileName="status-pill.tsx">
            <VenusCNPane>
              <div className="flex flex-wrap gap-2">
                <StatusPill status="active" />
                <StatusPill status="inactive" />
                <StatusPill status="draft" />
                <StatusPill status="paused" />
                <StatusPill status="error" />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>

          {/* CategoryPill */}
          <Section id="category-pill" title="CategoryPill" fileName="category-pill.tsx">
            <VenusCNPane>
              <div className="flex flex-wrap gap-2">
                <CategoryPill variant="audience" />
                <CategoryPill variant="device" />
                <CategoryPill variant="geographic" />
                <CategoryPill variant="temporal" />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>
        </div>

        {/* ── 3. Layout ────────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Layout" />

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
            <LegacyPane fallbackText="No legacy equivalent" />
          </Section>

          {/* Card */}
          <Section id="card" title="Card" fileName="card.tsx">
            <VenusCNPane>
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Entry Settings</CardTitle>
                  <CardDescription>Manage content entry configuration.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Configure how this entry is published, versioned, and accessed by your team.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="small">Save changes</Button>
                  <Button variant="ghost" size="small">Cancel</Button>
                </CardFooter>
              </Card>
            </VenusCNPane>
            <LegacyPane storyId="components-generic-card--default" />
          </Section>

          {/* Divider */}
          <Section id="divider" title="Divider" fileName="divider.tsx">
            <VenusCNPane>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Section above</p>
                <Divider />
                <p className="text-sm text-gray-600">Section below</p>
                <Divider />
                <p className="text-sm text-gray-600">Another section</p>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-line--default" />
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

          {/* Skeleton */}
          <Section id="skeleton" title="Skeleton" fileName="skeleton.tsx">
            <VenusCNPane>
              <div className="space-y-3 max-w-sm">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <div className="flex gap-2 mt-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-skeletontile--default" />
          </Section>
        </div>

        {/* ── 4. Navigation ────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Navigation" />

          {/* Tabs */}
          <Section id="tabs" title="Tabs" fileName="tabs.tsx">
            <VenusCNPane>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <p className="text-sm text-gray-600 mt-3">Overview content goes here.</p>
                </TabsContent>
                <TabsContent value="settings">
                  <p className="text-sm text-gray-600 mt-3">Settings content goes here.</p>
                </TabsContent>
                <TabsContent value="activity">
                  <p className="text-sm text-gray-600 mt-3">Activity feed goes here.</p>
                </TabsContent>
              </Tabs>
            </VenusCNPane>
            <LegacyPane storyId="components-tabs--default" />
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
            <LegacyPane fallbackText="Legacy excluded from public build" />
          </Section>

          {/* Pagination */}
          <Section id="pagination" title="Pagination" fileName="pagination.tsx">
            <VenusCNPane>
              <PaginationDemo />
            </VenusCNPane>
            <LegacyPane fallbackText="Legacy coupled to Table" />
          </Section>

          {/* Sidebar */}
          <Section id="sidebar" title="Sidebar" fileName="sidebar.tsx">
            <VenusCNPane>
              <div className="h-64 overflow-hidden border border-border rounded-lg">
                <Sidebar>
                  <SidebarSection title="Content">
                    <SidebarNav
                      items={[
                        { label: "Entries", href: "#", active: true },
                        { label: "Assets", href: "#" },
                        { label: "Environments", href: "#" },
                      ]}
                    />
                  </SidebarSection>
                  <SidebarSection title="Settings">
                    <SidebarNav
                      items={[
                        { label: "General", href: "#" },
                        { label: "Tokens", href: "#" },
                        { label: "Webhooks", href: "#" },
                      ]}
                    />
                  </SidebarSection>
                </Sidebar>
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>
        </div>

        {/* ── 5. Data Display ──────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Data Display" />

          {/* Table */}
          <Section id="table" title="Table" fileName="table.tsx">
            <VenusCNPane>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Alice Nguyen</TableCell>
                    <TableCell>Engineer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Okafor</TableCell>
                    <TableCell>Designer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Carol Singh</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell>Away</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </VenusCNPane>
            <LegacyPane storyId="components-table--default" />
          </Section>

          {/* TablePagination */}
          <Section id="table-pagination" title="TablePagination" fileName="table-pagination.tsx">
            <VenusCNPane>
              <TablePagination
                currentPage={2}
                totalRecords={247}
                recordsPerPage={100}
              />
            </VenusCNPane>
            <LegacyPane fallbackText="Coupled to Table" />
          </Section>

          {/* DataTable */}
          <Section id="data-table" title="DataTable" fileName="data-table.tsx">
            <VenusCNPane>
              <DataTableDemo />
            </VenusCNPane>
            <LegacyPane storyId="components-table--default" />
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
            <LegacyPane fallbackText="No legacy equivalent" />
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
            <LegacyPane fallbackText="No legacy equivalent" />
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
        </div>

        {/* ── 6. Feedback ──────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Feedback" />

          {/* Alert */}
          <Section id="alert" title="Alert" fileName="alert.tsx">
            <VenusCNPane>
              <div className="space-y-3">
                <Alert>
                  <AlertTitle>Default</AlertTitle>
                  <AlertDescription>This is a default alert message.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                </Alert>
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="No legacy equivalent" />
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

          {/* Toast */}
          <Section id="toast" title="Toast" fileName="toast.tsx">
            <VenusCNPane>
              <div className="space-y-3">
                {([
                  { variant: "default", border: "border-[#6c5ce7]", bg: "bg-white" },
                  { variant: "success", border: "border-[#90bba5]", bg: "bg-[#f5fffc]" },
                  { variant: "error", border: "border-[#fdafa3]", bg: "bg-[#ffeeeb]" },
                  { variant: "warning", border: "border-[#ffce6c]", bg: "bg-[#fff8eb]" },
                  { variant: "info", border: "border-[#43b7c2]", bg: "bg-white" },
                ] as const).map(({ variant, border, bg }) => (
                  <div
                    key={variant}
                    className={`flex items-start gap-3 rounded-[4px] border px-4 py-3 shadow-md ${border} ${bg}`}
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

          {/* Progress */}
          <Section id="progress" title="Progress" fileName="progress.tsx">
            <VenusCNPane>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">25%</p>
                  <Progress value={25} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">60%</p>
                  <Progress value={60} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">90%</p>
                  <Progress value={90} />
                </div>
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Legacy is in-progress category" />
          </Section>

          {/* Tooltip */}
          <Section id="tooltip" title="Tooltip" fileName="tooltip.tsx">
            <VenusCNPane>
              <TooltipProvider>
                <div className="flex gap-4 flex-wrap">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary" size="small">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="small">
                        <Icon name="info" size="sm" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>More information about this action</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </VenusCNPane>
            <LegacyPane storyId="components-tooltip--default" />
          </Section>
        </div>

        {/* ── 7. Overlays ──────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Overlays" />

          {/* Dialog */}
          <Section id="dialog" title="Dialog" fileName="dialog.tsx">
            <VenusCNPane>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete entry?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. The entry will be permanently removed from your stack.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="danger">Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </VenusCNPane>
            <LegacyPane storyId="components-modal--default" />
          </Section>

          {/* Sheet */}
          <Section id="sheet" title="Sheet" fileName="sheet.tsx">
            <VenusCNPane>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Entry Details</SheetTitle>
                    <SheetDescription>
                      View and edit the metadata for this entry.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 space-y-3">
                    <Field>
                      <FieldLabel>Title</FieldLabel>
                      <Input placeholder="Entry title" />
                    </Field>
                    <Button variant="primary" size="small">Save</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </VenusCNPane>
            <LegacyPane fallbackText="No legacy equivalent" />
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
            <LegacyPane fallbackText="Legacy excluded from public build" />
          </Section>

          {/* Dropdown */}
          <Section id="dropdown" title="Dropdown" fileName="dropdown.tsx">
            <VenusCNPane>
              <Dropdown
                items={[
                  { label: "Edit", value: "edit" },
                  { label: "Duplicate", value: "duplicate" },
                  { label: "Preview", value: "preview" },
                  { label: "Delete", value: "delete" },
                ]}
                placeholder="Select action..."
              />
            </VenusCNPane>
            <LegacyPane storyId="components-dropdown--default" />
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
            <LegacyPane fallbackText="No legacy equivalent" />
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
            <LegacyPane fallbackText="No legacy equivalent" />
          </Section>
        </div>

        {/* ── 8. Page Layout ───────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Page Layout" />

          {/* PageHeader */}
          <Section id="page-header" title="PageHeader" fileName="page-header.tsx">
            <VenusCNPane>
              <div className="border border-border rounded-lg overflow-hidden">
                <PageHeader
                  title="Content Types"
                  actions={[
                    { label: "New Type", variant: "primary", onClick: () => {} },
                  ]}
                />
              </div>
            </VenusCNPane>
            <LegacyPane storyId="components-pageheader--default" />
          </Section>

          {/* PageSearchHeader */}
          <Section id="page-search-header" title="PageSearchHeader" fileName="page-search-header.tsx">
            <VenusCNPane>
              <div className="border border-border rounded-lg overflow-hidden">
                <PageSearchHeader
                  title="Entries"
                  searchPlaceholder="Search entries..."
                  actions={[
                    { label: "New Entry", variant: "primary", onClick: () => {} },
                  ]}
                />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="No direct legacy match" />
          </Section>

          {/* PageFormHeader */}
          <Section id="page-form-header" title="PageFormHeader" fileName="page-form-header.tsx">
            <VenusCNPane>
              <div className="border border-border rounded-lg overflow-hidden">
                <PageFormHeader
                  title="Edit Entry"
                  onBack={() => {}}
                  onCancel={() => {}}
                  onSave={() => {}}
                />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="No direct legacy match" />
          </Section>

          {/* FormSidebar */}
          <Section id="form-sidebar" title="FormSidebar" fileName="form-sidebar.tsx">
            <VenusCNPane>
              <div className="flex gap-0 border border-border rounded-lg overflow-hidden h-32">
                <div className="flex-1 bg-gray-50 flex items-center justify-center">
                  <p className="text-sm text-gray-400">Form content area</p>
                </div>
                <FormSidebar />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="No direct legacy match" />
          </Section>

          {/* AppCard */}
          <Section id="app-card" title="AppCard" fileName="app-card.tsx">
            <VenusCNPane>
              <div className="flex gap-4 flex-wrap">
                <AppCard
                  icon="https://placehold.co/72x72/e8e8ff/7c3aed?text=A"
                  title="Analytics App"
                  subtitle="Contentstack Marketplace"
                  description="Track content performance across channels."
                  onInstall={() => {}}
                />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>

          {/* Avatar */}
          <Section id="avatar" title="Avatar" fileName="avatar.tsx">
            <VenusCNPane>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="Alice" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>BK</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/40?img=5" alt="Carol" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Legacy is in-progress category" />
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
            <LegacyPane fallbackText="No legacy equivalent" />
          </Section>
        </div>

        {/* ── 9. Targeting (Product-Specific) ──────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Targeting (Product-Specific)" />

          {/* TargetingCategoryCard */}
          <Section id="targeting-category-card" title="TargetingCategoryCard" fileName="targeting-category-card.tsx">
            <VenusCNPane>
              <div className="grid grid-cols-2 gap-3">
                <TargetingCategoryCard variant="audience" title="Who" subtitle="Audience" />
                <TargetingCategoryCard variant="device" title="How" subtitle="Device & Context" />
                <TargetingCategoryCard variant="geographic" title="Where" subtitle="Geographic" />
                <TargetingCategoryCard variant="temporal" title="When" subtitle="Temporal" />
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>

          {/* RuleRow */}
          <Section id="rule-row" title="RuleRow" fileName="rule-row.tsx">
            <VenusCNPane>
              <RuleRow
                rule={{ id: "r1", category: "audience", attribute: "user-segment", operator: "equals", value: "Premium" }}
                onUpdate={() => {}}
                onDelete={() => {}}
              />
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>

          {/* RuleGroup */}
          <Section id="rule-group" title="RuleGroup" fileName="rule-group.tsx">
            <VenusCNPane>
              <RuleGroup
                group={{
                  id: "g1",
                  matchType: "all",
                  rules: [
                    { id: "r1", category: "audience", attribute: "user-segment", operator: "equals", value: "Premium" },
                    { id: "r2", category: "geographic", attribute: "country", operator: "equals", value: "US" },
                  ],
                }}
                groupNumber={1}
                onUpdate={() => {}}
                onDelete={() => {}}
                onAddRule={() => {}}
              />
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>

          {/* TargetingRuleBuilder */}
          <Section id="targeting-rule-builder" title="TargetingRuleBuilder" fileName="targeting-rule-builder.tsx">
            <VenusCNPane>
              <TargetingRuleBuilderDemo />
            </VenusCNPane>
            <LegacyPane fallbackText="Product-specific component" />
          </Section>
        </div>

        {/* ── 10. Code ─────────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Code" />

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
            <LegacyPane fallbackText="No legacy equivalent" />
          </Section>
        </div>

        {/* ── 11. Search ───────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Search" />

          {/* Search */}
          <Section id="search" title="Search" fileName="search.tsx">
            <VenusCNPane>
              <Search placeholder="Search entries..." className="max-w-sm" />
            </VenusCNPane>
            <LegacyPane storyId="components-search--default" />
          </Section>

          {/* SearchV3 */}
          <Section id="search-v3" title="SearchV3" fileName="search-v3.tsx">
            <VenusCNPane>
              <SearchV3 placeholder="Search with filters..." className="max-w-sm" />
            </VenusCNPane>
            <LegacyPane storyId="components-searchbar--default" />
          </Section>
        </div>

        {/* ── Slider (standalone) ──────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Slider" />

          <Section id="slider" title="Slider" fileName="slider.tsx">
            <VenusCNPane>
              <div className="space-y-6 max-w-sm">
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">Default (50)</p>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">Range (20–80)</p>
                  <Slider defaultValue={[20, 80]} max={100} step={1} />
                </div>
              </div>
            </VenusCNPane>
            <LegacyPane fallbackText="Legacy is in-progress category" />
          </Section>
        </div>

        {/* ── Form ─────────────────────────────────────────────────────────── */}
        <div className="space-y-12">
          <CategoryHeader title="Form (Compound)" />

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
        </div>
      </div>
    </div>
  );
}
