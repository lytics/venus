"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Plus, Star, Settings, Info } from "lucide-react";

// Venus Design System Components
import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Toggle,
  Field,
  FieldLabel,
  HelpText,
  ValidationMessage,
  Tag,
  Divider,
  Dropdown,
  Search,
  SearchV3,
  Tabs,
  TabsList,
  TabsTrigger,
  PageHeader,
  PageSearchHeader,
  Pill,
  StatusPill,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableActionButton,
} from "@contentstack/venuscn";

import { AdminNav } from "@/components/admin-nav";

// Showcase card for component demos
function ShowcaseCard({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-border rounded-lg p-6 bg-card ${className}`}>
      <div className="text-xs font-semibold text-muted-foreground/50 tracking-normal mb-4">{label}</div>
      {children}
    </div>
  );
}

// Toggle Switch Examples Component
function ToggleSwitchExamples() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className="space-y-3">
      <Toggle label="Enable notifications" checked={toggle1} onChange={(e) => setToggle1(e.target.checked)} />
      <Toggle label="Auto-save enabled" checked={toggle2} onChange={(e) => setToggle2(e.target.checked)} />
      <Toggle label="Disabled toggle" disabled />
      <Toggle label="Disabled and on" disabled checked />
    </div>
  );
}

export default function SandboxPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
        <div className="py-8 px-6">
          <main className="space-y-12">
      {/* Header */}
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-bold">Primatives</h1>
      </div>

      {/* Component List */}
      <div className="border border-border rounded-lg p-6 bg-card">
        <h2 className="text-sm font-semibold text-muted-foreground/50 tracking-normal mb-4">VenusCN Components</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-sm">
          <div className="space-y-1">
            <div className="font-semibold text-xs text-muted-foreground mb-2">Form Controls</div>
            <a href="#buttons" className="block text-foreground hover:text-primary">Button</a>
            <a href="#inputs" className="block text-foreground hover:text-primary">Input</a>
            <a href="#inputs" className="block text-foreground hover:text-primary">Textarea</a>
            <a href="#controls" className="block text-foreground hover:text-primary">Checkbox</a>
            <a href="#controls" className="block text-foreground hover:text-primary">Radio</a>
            <a href="#controls" className="block text-foreground hover:text-primary">Toggle</a>
            <a href="#dropdown" className="block text-foreground hover:text-primary">Dropdown</a>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-xs text-muted-foreground mb-2">Form Architecture</div>
            <a href="#inputs" className="block text-foreground hover:text-primary">Field</a>
            <a href="#inputs" className="block text-foreground hover:text-primary">FieldLabel</a>
            <a href="#inputs" className="block text-foreground hover:text-primary">HelpText</a>
            <a href="#inputs" className="block text-foreground hover:text-primary">ValidationMessage</a>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-xs text-muted-foreground mb-2">Data Display</div>
            <a href="#table" className="block text-foreground hover:text-primary">Table</a>
            <a href="#table" className="block text-foreground hover:text-primary">TableActionButton</a>
            <a href="#search" className="block text-foreground hover:text-primary">Search</a>
            <a href="#search" className="block text-foreground hover:text-primary">SearchV3</a>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-xs text-muted-foreground mb-2">Navigation</div>
            <a href="#tabs" className="block text-foreground hover:text-primary">Tabs</a>
            <a href="#pageheader" className="block text-foreground hover:text-primary">PageHeader</a>
            <a href="#page-search-header" className="block text-foreground hover:text-primary">PageSearchHeader</a>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-xs text-muted-foreground mb-2">UI Elements</div>
            <a href="#tags" className="block text-foreground hover:text-primary">Tag</a>
            <a href="#pills" className="block text-foreground hover:text-primary">Pill</a>
            <a href="#status-pills" className="block text-foreground hover:text-primary">StatusPill</a>
            <span className="block text-foreground">Divider</span>
            <a href="#tooltips" className="block text-foreground hover:text-primary">Tooltip</a>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-xs text-muted-foreground mb-2">Advanced</div>
            <span className="block text-muted-foreground">TargetingRuleBuilder</span>
            <span className="block text-muted-foreground">TargetingCategoryCard</span>
            <span className="block text-muted-foreground">RuleRow</span>
            <span className="block text-muted-foreground">RuleGroup</span>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="space-y-12">
        {/* Buttons & Actions */}
        <section id="buttons" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Buttons & Actions</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Button Variants">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Button Sizes">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small">Small</Button>
                <Button size="regular">Regular</Button>
                <Button size="large">Large</Button>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="With Icons">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">
                  <Plus className="h-4 w-4" /> Create
                </Button>
                <Button variant="secondary">
                  <Settings className="h-4 w-4" /> Settings
                </Button>
                <Button variant="ghost">
                  <Star className="h-4 w-4" /> Favorite
                </Button>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Button States">
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Form Inputs */}
        <section id="inputs" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Form Inputs</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Input">
              <Field className="max-w-[800px]">
                <FieldLabel htmlFor="venus-input-1">Email</FieldLabel>
                <Input id="venus-input-1" placeholder="Enter your email..." />
                <HelpText>We will never share your email</HelpText>
              </Field>
            </ShowcaseCard>

            <ShowcaseCard label="Textarea">
              <Field className="max-w-[800px]">
                <FieldLabel htmlFor="venus-textarea" optional>Message</FieldLabel>
                <Textarea id="venus-textarea" placeholder="Write a message..." rows={3} />
              </Field>
            </ShowcaseCard>

            <ShowcaseCard label="Validation States">
              <div className="space-y-4 max-w-[800px]">
                <Field>
                  <FieldLabel htmlFor="venus-input-error" required>Error State</FieldLabel>
                  <Input id="venus-input-error" error placeholder="Email address" />
                  <ValidationMessage type="error">Email is required</ValidationMessage>
                </Field>
                <Field>
                  <FieldLabel htmlFor="venus-input-success">Success State</FieldLabel>
                  <Input id="venus-input-success" success defaultValue="john@example.com" />
                  <ValidationMessage type="success">Email verified</ValidationMessage>
                </Field>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Form Controls */}
        <section id="controls" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Form Controls</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ShowcaseCard label="Checkbox">
              <div className="space-y-3">
                <Checkbox label="Accept terms" />
                <Checkbox label="Subscribe" defaultChecked />
                <Checkbox label="Disabled" disabled />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Radio Group">
              <div className="space-y-3">
                <Radio name="plan" label="Free" defaultChecked />
                <Radio name="plan" label="Pro" />
                <Radio name="plan" label="Enterprise" />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Toggle">
              <ToggleSwitchExamples />
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Tags */}
        <section id="tags" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Tags</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ShowcaseCard label="Default Tags">
              <div className="flex flex-wrap gap-2">
                <Tag>Summer</Tag>
                <Tag>Season</Tag>
                <Tag>Category</Tag>
                <Tag>Label</Tag>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Removable Tags">
              <div className="flex flex-wrap gap-2">
                <Tag removable onRemove={() => toast.success("Removed")}>React</Tag>
                <Tag removable onRemove={() => toast.success("Removed")}>TypeScript</Tag>
                <Tag removable onRemove={() => toast.success("Removed")}>Next.js</Tag>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Tag States">
              <div className="flex flex-wrap gap-2">
                <Tag>Default</Tag>
                <Tag disabled>Disabled</Tag>
                <Tag removable disabled onRemove={() => console.log("disabled")}>Disabled</Tag>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Filter Example">
              <div className="flex flex-wrap gap-2">
                <Tag removable onRemove={() => toast.success("Removed")}>Type: Article</Tag>
                <Tag removable onRemove={() => toast.success("Removed")}>Status: Published</Tag>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Pills */}
        <section id="pills" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Pills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ShowcaseCard label="Label Variant">
              <div className="flex flex-wrap gap-2">
                <Pill variant="label">Default</Pill>
                <Pill variant="label" status="success">Success</Pill>
                <Pill variant="label" status="warning">Warning</Pill>
                <Pill variant="label" status="danger">Danger</Pill>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Chip Variant">
              <div className="flex flex-wrap gap-2">
                <Pill variant="chip">Default</Pill>
                <Pill variant="chip" status="success">Success</Pill>
                <Pill variant="chip" status="warning">Warning</Pill>
                <Pill variant="chip" status="danger">Danger</Pill>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Removable Pills">
              <div className="flex flex-wrap gap-2">
                <Pill removable onRemove={() => toast.success("Removed")}>React</Pill>
                <Pill removable onRemove={() => toast.success("Removed")} status="success">Approved</Pill>
                <Pill removable onRemove={() => toast.success("Removed")} variant="chip">Filter</Pill>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Interactive Pills">
              <div className="flex flex-wrap gap-2">
                <Pill onClick={() => toast.success("Clicked!")}>Clickable</Pill>
                <Pill disabled>Disabled</Pill>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Status Pills */}
        <section id="status-pills" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Status Pills</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Status Variants">
              <div className="flex flex-wrap gap-3">
                <StatusPill status="active" />
                <StatusPill status="inactive" />
                <StatusPill status="draft" />
                <StatusPill status="paused" />
                <StatusPill status="error" />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Custom Labels">
              <div className="flex flex-wrap gap-3">
                <StatusPill status="active">Live</StatusPill>
                <StatusPill status="draft">In Progress</StatusPill>
                <StatusPill status="paused">On Hold</StatusPill>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Tabs */}
        <section id="tabs" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Tabs</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Basic Tabs">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Overview</TabsTrigger>
                  <TabsTrigger value="tab2">Analytics</TabsTrigger>
                  <TabsTrigger value="tab3">Settings</TabsTrigger>
                  <TabsTrigger value="tab4" disabled>Disabled</TabsTrigger>
                </TabsList>
              </Tabs>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Page Headers */}
        <section id="pageheader" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Page Headers</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Single Action">
              <PageHeader
                title="Page Title"
                actions={[{ label: "Save", onClick: () => toast.success("Saved"), variant: "primary", size: "regular" }]}
              />
            </ShowcaseCard>

            <ShowcaseCard label="Multiple Actions">
              <PageHeader
                title="Edit Entry"
                actions={[
                  { label: "Cancel", onClick: () => toast.success("Cancel"), variant: "ghost", size: "regular" },
                  { label: "Draft", onClick: () => toast.success("Draft"), variant: "secondary", size: "regular" },
                  { label: "Publish", onClick: () => toast.success("Publish"), variant: "primary", size: "regular" }
                ]}
              />
            </ShowcaseCard>

            <ShowcaseCard label="With Info Icon">
              <PageHeader
                title="Settings"
                infoIcon={<a href="#" className="text-muted-foreground hover:text-primary"><Info className="h-4 w-4" /></a>}
                actions={[{ label: "Save", onClick: () => toast.success("Saved"), variant: "primary", size: "regular" }]}
              />
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Page Search Header */}
        <section id="page-search-header" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Page Search Header</h3>

          <div className="space-y-4">
            <ShowcaseCard label="With Search and Actions">
              <div className="-mx-6 -mb-6">
                <PageSearchHeader
                  title="Entries"
                  searchPlaceholder="Search entries..."
                  actions={[
                    { label: "Import", onClick: () => toast.success("Import"), variant: "secondary" },
                    { label: "Create New", onClick: () => toast.success("Create"), variant: "primary" }
                  ]}
                />
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Dropdown */}
        <section id="dropdown" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Dropdown</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ShowcaseCard label="Minimal (V1)">
              <Dropdown
                version="v1"
                items={[
                  { label: "India", value: "india" },
                  { label: "Belgium", value: "belgium" },
                  { label: "Canada", value: "canada" },
                ]}
                value="india"
                onChange={(value) => toast.success(`Selected: ${value}`)}
              />
            </ShowcaseCard>

            <ShowcaseCard label="Bordered (V2)">
              <Dropdown
                version="v2"
                items={[
                  { label: "India", value: "india" },
                  { label: "Belgium", value: "belgium" },
                  { label: "Canada", value: "canada" },
                ]}
                value="india"
                onChange={(value) => toast.success(`Selected: ${value}`)}
              />
            </ShowcaseCard>

            <ShowcaseCard label="With Search">
              <Dropdown
                version="v2"
                withSearch
                items={[
                  { label: "India", value: "india" },
                  { label: "Belgium", value: "belgium" },
                  { label: "Canada", value: "canada" },
                  { label: "Denmark", value: "denmark" },
                ]}
                value="india"
                onChange={(value) => toast.success(`Selected: ${value}`)}
              />
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Table */}
        <section id="table" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Table</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Bordered Table">
              <Table bordered>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Environment</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead className="w-20 text-center">Enabled</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">API Rate Limiting</TableCell>
                    <TableCell>Production</TableCell>
                    <TableCell>1,245 req/hour</TableCell>
                    <TableCell className="text-center">
                      <Toggle defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Webhook Notifications</TableCell>
                    <TableCell>Staging</TableCell>
                    <TableCell>34 events/day</TableCell>
                    <TableCell className="text-center">
                      <Toggle defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Image Optimization</TableCell>
                    <TableCell>Production</TableCell>
                    <TableCell>Not configured</TableCell>
                    <TableCell className="text-center">
                      <Toggle />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CDN Caching</TableCell>
                    <TableCell>Production</TableCell>
                    <TableCell>89% hit rate</TableCell>
                    <TableCell className="text-center">
                      <Toggle defaultChecked />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ShowcaseCard>

            <ShowcaseCard label="Full Table with Sticky Column">
              <div className="h-[300px] overflow-auto bg-white relative border border-border rounded-lg">
                <Table full className="min-h-full border-separate border-spacing-0">
                  <TableHeader>
                    <TableRow>
                      <TableHead minWidth="180px">Order ID</TableHead>
                      <TableHead minWidth="200px">Customer</TableHead>
                      <TableHead minWidth="140px">Amount</TableHead>
                      <TableHead minWidth="150px">Payment Status</TableHead>
                      <TableHead minWidth="160px">Fulfillment</TableHead>
                      <TableHead minWidth="180px">Date</TableHead>
                      <TableHead sticky="right" className="w-12 text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono text-sm">#ORD-2891</TableCell>
                      <TableCell className="font-medium">Jessica Martinez</TableCell>
                      <TableCell>$329.99</TableCell>
                      <TableCell><StatusPill status="active">Paid</StatusPill></TableCell>
                      <TableCell><Tag>Shipped</Tag></TableCell>
                      <TableCell>Jan 28, 2025</TableCell>
                      <TableCell sticky="right" className="text-center">
                        <TableActionButton />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-sm">#ORD-2890</TableCell>
                      <TableCell className="font-medium">Robert Chen</TableCell>
                      <TableCell>$156.50</TableCell>
                      <TableCell><StatusPill status="paused">Pending</StatusPill></TableCell>
                      <TableCell><Tag>Processing</Tag></TableCell>
                      <TableCell>Jan 28, 2025</TableCell>
                      <TableCell sticky="right" className="text-center">
                        <TableActionButton />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-sm">#ORD-2889</TableCell>
                      <TableCell className="font-medium">Amanda Foster</TableCell>
                      <TableCell>$89.00</TableCell>
                      <TableCell><StatusPill status="active">Paid</StatusPill></TableCell>
                      <TableCell><Tag>Delivered</Tag></TableCell>
                      <TableCell>Jan 27, 2025</TableCell>
                      <TableCell sticky="right" className="text-center">
                        <TableActionButton />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-sm">#ORD-2888</TableCell>
                      <TableCell className="font-medium">David Kim</TableCell>
                      <TableCell>$524.75</TableCell>
                      <TableCell><StatusPill status="error">Failed</StatusPill></TableCell>
                      <TableCell><Tag>Cancelled</Tag></TableCell>
                      <TableCell>Jan 27, 2025</TableCell>
                      <TableCell sticky="right" className="text-center">
                        <TableActionButton />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-sm">#ORD-2887</TableCell>
                      <TableCell className="font-medium">Maria Rodriguez</TableCell>
                      <TableCell>$213.30</TableCell>
                      <TableCell><StatusPill status="active">Paid</StatusPill></TableCell>
                      <TableCell><Tag>Shipped</Tag></TableCell>
                      <TableCell>Jan 26, 2025</TableCell>
                      <TableCell sticky="right" className="text-center">
                        <TableActionButton />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Edge-to-Edge Table (No Border)">
              <div className="overflow-auto relative">
                <Table full className="min-h-full border-separate border-spacing-0">
                <TableHeader>
                  <TableRow>
                    <TableHead minWidth="200px">Team Member</TableHead>
                    <TableHead minWidth="180px">Email</TableHead>
                    <TableHead minWidth="140px">Role</TableHead>
                    <TableHead minWidth="150px">Department</TableHead>
                    <TableHead minWidth="140px">Status</TableHead>
                    <TableHead sticky="right" className="w-12 text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Emily Zhang</TableCell>
                    <TableCell className="text-gray-600">emily.zhang@company.com</TableCell>
                    <TableCell><Tag>Engineer</Tag></TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell><StatusPill status="active">Active</StatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Marcus Thompson</TableCell>
                    <TableCell className="text-gray-600">marcus.t@company.com</TableCell>
                    <TableCell><Tag>Designer</Tag></TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell><StatusPill status="active">Active</StatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sofia Patel</TableCell>
                    <TableCell className="text-gray-600">sofia.patel@company.com</TableCell>
                    <TableCell><Tag>Manager</Tag></TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell><StatusPill status="paused">Pending</StatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Alex Rivera</TableCell>
                    <TableCell className="text-gray-600">alex.rivera@company.com</TableCell>
                    <TableCell><Tag>Engineer</Tag></TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell><StatusPill status="inactive">Inactive</StatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Search */}
        <section id="search" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Search</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Search (Compact)">
              <div className="space-y-3 max-w-[800px]">
                <Search placeholder="Search entries..." />
                <Search placeholder="Disabled..." disabled />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Search V3 (Full)">
              <div className="space-y-3 max-w-[800px]">
                <SearchV3 placeholder="Search projects..." />
                <SearchV3 placeholder="Disabled..." disabled />
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Tooltips */}
        <section id="tooltips" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Tooltips</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Tooltip Positions">
              <TooltipProvider>
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Hover me (top)</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Tooltip on top</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Hover me (bottom)</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Tooltip on bottom</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Hover me (left)</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Tooltip on left</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Hover me (right)</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Tooltip on right</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </ShowcaseCard>
          </div>
        </section>

      </div>

      </main>
        </div>
    </div>
  );
}
