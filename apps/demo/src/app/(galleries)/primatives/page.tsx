"use client";

import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import { Plus, ChevronsUpDown, Star, Heart, Settings, MoreVertical, User, Mail, Phone, Calendar, Search, CreditCard, File, Database, X, ChevronDown, ChevronUp, Edit, Trash2, Info, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

// Venus Design System Components
import {
  Button as VenusButton,
  Input as VenusInput,
  Textarea as VenusTextarea,
  Checkbox as VenusCheckbox,
  Radio as VenusRadio,
  Toggle as VenusToggle,
  Field,
  FieldLabel,
  HelpText,
  ValidationMessage,
  Tag,
  Divider,
  Dropdown as VenusDropdown,
  type DropdownItem,
  Search as VenusSearch,
  SearchV3 as VenusSearchV3,
  Tabs as VenusTabs,
  TabsList as VenusTabsList,
  TabsTrigger as VenusTabsTrigger,
  TabsContent as VenusTabsContent,
  PageHeader as VenusPageHeader,
  PageSearchHeader as VenusPageSearchHeader,
  type PageHeaderAction,
  Pill as VenusPill,
  Pills as VenusPills,
  StatusPill as VenusStatusPill,
  CategoryPill as VenusCategoryPill,
  Tooltip as VenusTooltip,
  TooltipTrigger as VenusTooltipTrigger,
  TooltipContent as VenusTooltipContent,
  TooltipProvider as VenusTooltipProvider,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableActionButton,
} from "@contentstack/venuscn";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { VenusLogo } from "@/components/venus-logo";
import { AdminNav } from "@/components/admin-nav";
import { useCommandPalette } from "@/components/command-palette-provider";
import Link from "next/link";

// Showcase card for component demos
function ShowcaseCard({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-border rounded-lg p-6 bg-card ${className}`}>
      <div className="text-xs font-semibold text-muted-foreground/50 tracking-normal mb-4">{label}</div>
      {children}
    </div>
  );
}

// Component mapping for section linking
const componentSectionMap: Record<string, string> = {
  'button': 'buttons',
  'input': 'form',
  'label': 'form',
  'select': 'select',
  'dropdown-menu': 'dropdown',
  'dialog': 'dialog',
  'modal': 'modal',
  'tabs': 'tabs',
  'card': 'card',
  'skeleton': 'skeleton',
  'badge': 'badges-avatars',
  'avatar': 'badges-avatars',
  'textarea': 'extended-form-controls',
  'switch': 'extended-form-controls',
  'checkbox': 'extended-form-controls',
  'radio-group': 'extended-form-controls',
  'progress': 'progress',
  'slider': 'slider',
  'alert': 'alerts',
  'tooltip': 'tooltips',
  'separator': 'layout-components'
};

function ComponentsList({ allCollapsed }: { allCollapsed: boolean }) {
  const [components, setComponents] = useState<{
    ui: string[];
    custom: string[];
  }>({ ui: [], custom: [] });
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const isInitialMount = useRef(true);

  // Sync with parent collapse state (but not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setCollapsed(allCollapsed);
  }, [allCollapsed]);

  // Reset the ref when component unmounts
  useEffect(() => {
    return () => {
      isInitialMount.current = true;
    };
  }, []);

  useEffect(() => {
    // Simulate scanning the file system (in a real app, you'd use an API)
    const scanComponents = async () => {
      try {
        // UI Components (shadcn/ui) - actual installed components
        const uiComponents = [
          'accordion', 'alert-dialog', 'alert', 'aspect-ratio', 'avatar',
          'badge', 'breadcrumb', 'button', 'calendar', 'card', 'chart',
          'checkbox', 'collapsible', 'command', 'context-menu', 'dialog',
          'drawer', 'dropdown-menu', 'form', 'hover-card', 'input-otp',
          'input', 'label', 'menubar', 'navigation-menu', 'pagination',
          'popover', 'progress', 'radio-group', 'resizable', 'scroll-area',
          'select', 'separator', 'sheet', 'skeleton', 'slider', 'switch',
          'table', 'tabs', 'textarea', 'toggle-group', 'toggle', 'tooltip'
        ];

        // Custom Components - actual components in the project
        const customComponents = [
          'admin-nav', 'app-logo', 'command-palette-provider',
          'top-nav'
        ];


        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 300));
        
        setComponents({
          ui: uiComponents,
          custom: customComponents
        });
      } catch (error) {
        console.error('Error scanning components:', error);
      } finally {
        setLoading(false);
      }
    };

    scanComponents();
  }, []);

  const scrollToSection = (componentName: string) => {
    const sectionId = componentSectionMap[componentName];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Fallback: try to find by component name
    const fallbackElement = document.getElementById(componentName);
    if (fallbackElement) {
      fallbackElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`rounded-lg border border-border ${collapsed ? 'px-6 py-4 cursor-pointer hover:bg-muted/20' : 'p-6'}`}
      onClick={collapsed ? () => setCollapsed(false) : undefined}
    >
      <div className={`flex items-center justify-between ${collapsed ? 'mb-0' : 'mb-6'}`}>
        <div>
          <h3 className="text-lg font-bold text-foreground">
            Component Library ({components.ui.length + components.custom.length} total)
          </h3>
          {!collapsed && (
            <p className="text-sm text-muted-foreground">
              All installed shadcn/ui and custom components
            </p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronUp className="h-4 w-4" />
          )}
        </Button>
      </div>

      {!collapsed && (
        <>
          {loading ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <Skeleton className="h-4 w-32" />
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-20" />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-24" />
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-24" />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--info-500)]"></span>
                  shadcn/ui ({components.ui.length})
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {components.ui.map((component) => {
                    const hasSection = componentSectionMap[component];
                    return (
                      <Badge
                        key={component}
                        variant={hasSection ? "outline" : "outline"}
                        className={`cursor-pointer transition-all hover:scale-105 ${
                          hasSection 
                            ? "border-primary text-primary bg-primary/5 hover:bg-primary/10" 
                            : "text-muted-foreground hover:bg-muted/30"
                        }`}
                        onClick={() => hasSection && scrollToSection(component)}
                        title={hasSection ? `Click to view ${component} section` : `${component} component installed`}
                      >
                        {component}
                        {hasSection && <span className="ml-1 text-xs text-primary">→</span>}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Custom ({components.custom.length})
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {components.custom.map((component) => (
                    <Badge
                      key={component}
                      variant="outline"
                      className="cursor-default text-muted-foreground hover:bg-muted/30 transition-colors"
                      title={`${component} custom component`}
                    >
                      {component}
                    </Badge>
                  ))}
                </div>
              </div>

              
              <div className="text-xs text-muted-foreground pt-4 border-t">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Components with → are linked to demo sections
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Toggle Switch Examples Component
function ToggleSwitchExamples() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className="space-y-3">
      <VenusToggle label="Enable notifications" checked={toggle1} onChange={(e) => setToggle1(e.target.checked)} />
      <VenusToggle label="Auto-save enabled" checked={toggle2} onChange={(e) => setToggle2(e.target.checked)} />
      <VenusToggle label="Disabled toggle" disabled />
      <VenusToggle label="Disabled and on" disabled checked />
    </div>
  );
}

export default function SandboxPage() {
  const [pageMounted, setPageMounted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggle: toggleCommandPalette } = useCommandPalette();
  const [testResults, setTestResults] = useState({
    animations: null as boolean | null,
    transitions: null as boolean | null,
    tokens: null as boolean | null,
  });
  const [statusCollapsed, setStatusCollapsed] = useState(false);
  const [allCollapsed, setAllCollapsed] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleAllCollapsed = () => {
    const newValue = !allCollapsed;
    setAllCollapsed(newValue);
    setStatusCollapsed(newValue);
  };
  
  useEffect(() => setPageMounted(true), []);

  // Run validation tests
  useEffect(() => {
    if (!pageMounted) return;

    const runTests = async () => {
      // Test 1: Animation engine
      const animationTest = () => {
        try {
          const testElement = document.createElement('div');
          testElement.style.animation = 'gentle-pulse 1s ease-in-out infinite';
          testElement.style.opacity = '0.5';
          document.body.appendChild(testElement);
          
          // Check if animation is actually running
          const computedStyle = window.getComputedStyle(testElement);
          const hasAnimation = computedStyle.animationName !== 'none' && computedStyle.animationName !== '';
          
          document.body.removeChild(testElement);
          return hasAnimation;
        } catch {
          return false;
        }
      };

      // Test 2: CSS transitions
      const transitionTest = () => {
        try {
          const testElement = document.createElement('div');
          testElement.style.transition = 'opacity 0.1s ease-in-out';
          testElement.style.opacity = '0';
          document.body.appendChild(testElement);
          
          // Trigger a transition
          testElement.style.opacity = '1';
          
          // Check if transition property is supported
          const computedStyle = window.getComputedStyle(testElement);
          const hasTransition = computedStyle.transition !== 'all 0s ease 0s';
          
          document.body.removeChild(testElement);
          return hasTransition;
        } catch {
          return false;
        }
      };

      // Test 3: Design tokens (CSS custom properties)
      const tokensTest = () => {
        try {
          const computedStyle = window.getComputedStyle(document.documentElement);
          const primaryColor = computedStyle.getPropertyValue('--primary').trim();
          const hasTokens = Boolean(primaryColor && primaryColor !== '');
          return hasTokens;
        } catch {
          return false;
        }
      };

      // Run tests with slight delays for visual effect
      setTimeout(() => setTestResults(prev => ({ ...prev, tokens: tokensTest() })), 500);
      setTimeout(() => setTestResults(prev => ({ ...prev, animations: animationTest() })), 800);
      setTimeout(() => setTestResults(prev => ({ ...prev, transitions: transitionTest() })), 1100);
    };

    runTests();
  }, [pageMounted]);


  // Add keyboard shortcut for command palette

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
        <div className="py-8 px-6">
          <main className="space-y-12">
      {/* Header */}
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-bold">Primatives</h1>
      </div>

      {/* Venus Design System Section */}
      <div className="space-y-12">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-[#6C5CE7]" />
          <h2 className="text-2xl font-bold text-foreground">Venus Design System</h2>
        </div>

        {/* Buttons & Actions */}
        <section id="venus-buttons" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Buttons & Actions</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Button Variants">
              <div className="flex flex-wrap gap-3">
                <VenusButton variant="primary">Primary</VenusButton>
                <VenusButton variant="secondary">Secondary</VenusButton>
                <VenusButton variant="ghost">Ghost</VenusButton>
                <VenusButton variant="danger">Danger</VenusButton>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Button Sizes">
              <div className="flex flex-wrap gap-4 items-center">
                <VenusButton size="small">Small</VenusButton>
                <VenusButton size="regular">Regular</VenusButton>
                <VenusButton size="large">Large</VenusButton>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="With Icons">
              <div className="flex flex-wrap gap-3">
                <VenusButton variant="primary">
                  <Plus className="h-4 w-4" /> Create
                </VenusButton>
                <VenusButton variant="secondary">
                  <Settings className="h-4 w-4" /> Settings
                </VenusButton>
                <VenusButton variant="ghost">
                  <Star className="h-4 w-4" /> Favorite
                </VenusButton>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Button States">
              <div className="flex flex-wrap gap-3">
                <VenusButton disabled>Disabled</VenusButton>
                <VenusButton variant="secondary" disabled>Disabled</VenusButton>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Form Inputs */}
        <section id="venus-inputs" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Form Inputs</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Input">
              <Field className="max-w-[800px]">
                <FieldLabel htmlFor="venus-input-1">Email</FieldLabel>
                <VenusInput id="venus-input-1" placeholder="Enter your email..." />
                <HelpText>We will never share your email</HelpText>
              </Field>
            </ShowcaseCard>

            <ShowcaseCard label="Textarea">
              <Field className="max-w-[800px]">
                <FieldLabel htmlFor="venus-textarea" optional>Message</FieldLabel>
                <VenusTextarea id="venus-textarea" placeholder="Write a message..." rows={3} />
              </Field>
            </ShowcaseCard>

            <ShowcaseCard label="Validation States">
              <div className="space-y-4 max-w-[800px]">
                <Field>
                  <FieldLabel htmlFor="venus-input-error" required>Error State</FieldLabel>
                  <VenusInput id="venus-input-error" error placeholder="Email address" />
                  <ValidationMessage type="error">Email is required</ValidationMessage>
                </Field>
                <Field>
                  <FieldLabel htmlFor="venus-input-success">Success State</FieldLabel>
                  <VenusInput id="venus-input-success" success defaultValue="john@example.com" />
                  <ValidationMessage type="success">Email verified</ValidationMessage>
                </Field>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Form Controls */}
        <section id="venus-controls" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Form Controls</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ShowcaseCard label="Checkbox">
              <div className="space-y-3">
                <VenusCheckbox label="Accept terms" />
                <VenusCheckbox label="Subscribe" defaultChecked />
                <VenusCheckbox label="Disabled" disabled />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Radio Group">
              <div className="space-y-3">
                <VenusRadio name="plan" label="Free" defaultChecked />
                <VenusRadio name="plan" label="Pro" />
                <VenusRadio name="plan" label="Enterprise" />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Toggle">
              <ToggleSwitchExamples />
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Tags */}
        <section id="venus-tags" className="space-y-6">
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
        <section id="venus-pills" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Pills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ShowcaseCard label="Label Variant">
              <div className="flex flex-wrap gap-2">
                <VenusPill variant="label">Default</VenusPill>
                <VenusPill variant="label" status="success">Success</VenusPill>
                <VenusPill variant="label" status="warning">Warning</VenusPill>
                <VenusPill variant="label" status="danger">Danger</VenusPill>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Chip Variant">
              <div className="flex flex-wrap gap-2">
                <VenusPill variant="chip">Default</VenusPill>
                <VenusPill variant="chip" status="success">Success</VenusPill>
                <VenusPill variant="chip" status="warning">Warning</VenusPill>
                <VenusPill variant="chip" status="danger">Danger</VenusPill>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Removable Pills">
              <div className="flex flex-wrap gap-2">
                <VenusPill removable onRemove={() => toast.success("Removed")}>React</VenusPill>
                <VenusPill removable onRemove={() => toast.success("Removed")} status="success">Approved</VenusPill>
                <VenusPill removable onRemove={() => toast.success("Removed")} variant="chip">Filter</VenusPill>
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Interactive Pills">
              <div className="flex flex-wrap gap-2">
                <VenusPill onClick={() => toast.success("Clicked!")}>Clickable</VenusPill>
                <VenusPill disabled>Disabled</VenusPill>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Status Pills */}
        <section id="venus-status-pills" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Status Pills</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Status Variants">
              <div className="flex flex-wrap gap-3">
                <VenusStatusPill status="active" />
                <VenusStatusPill status="inactive" />
                <VenusStatusPill status="draft" />
                <VenusStatusPill status="paused" />
                <VenusStatusPill status="error" />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Custom Labels">
              <div className="flex flex-wrap gap-3">
                <VenusStatusPill status="active">Live</VenusStatusPill>
                <VenusStatusPill status="draft">In Progress</VenusStatusPill>
                <VenusStatusPill status="paused">On Hold</VenusStatusPill>
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Tabs */}
        <section id="venus-tabs" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Tabs</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Basic Tabs">
              <VenusTabs defaultValue="tab1" className="w-full">
                <VenusTabsList>
                  <VenusTabsTrigger value="tab1">Overview</VenusTabsTrigger>
                  <VenusTabsTrigger value="tab2">Analytics</VenusTabsTrigger>
                  <VenusTabsTrigger value="tab3">Settings</VenusTabsTrigger>
                  <VenusTabsTrigger value="tab4" disabled>Disabled</VenusTabsTrigger>
                </VenusTabsList>
              </VenusTabs>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Page Headers */}
        <section id="venus-pageheader" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Page Headers</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Single Action">
              <VenusPageHeader
                title="Page Title"
                actions={[{ label: "Save", onClick: () => toast.success("Saved"), variant: "primary", size: "regular" }]}
              />
            </ShowcaseCard>

            <ShowcaseCard label="Multiple Actions">
              <VenusPageHeader
                title="Edit Entry"
                actions={[
                  { label: "Cancel", onClick: () => toast.success("Cancel"), variant: "ghost", size: "regular" },
                  { label: "Draft", onClick: () => toast.success("Draft"), variant: "secondary", size: "regular" },
                  { label: "Publish", onClick: () => toast.success("Publish"), variant: "primary", size: "regular" }
                ]}
              />
            </ShowcaseCard>

            <ShowcaseCard label="With Info Icon">
              <VenusPageHeader
                title="Settings"
                infoIcon={<a href="#" className="text-muted-foreground hover:text-primary"><Info className="h-4 w-4" /></a>}
                actions={[{ label: "Save", onClick: () => toast.success("Saved"), variant: "primary", size: "regular" }]}
              />
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Dropdown */}
        <section id="venus-dropdown" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Dropdown</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ShowcaseCard label="Minimal (V1)">
              <VenusDropdown
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
              <VenusDropdown
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
              <VenusDropdown
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
        <section id="venus-table" className="space-y-6">
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
                      <VenusToggle defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Webhook Notifications</TableCell>
                    <TableCell>Staging</TableCell>
                    <TableCell>34 events/day</TableCell>
                    <TableCell className="text-center">
                      <VenusToggle defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Image Optimization</TableCell>
                    <TableCell>Production</TableCell>
                    <TableCell>Not configured</TableCell>
                    <TableCell className="text-center">
                      <VenusToggle />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CDN Caching</TableCell>
                    <TableCell>Production</TableCell>
                    <TableCell>89% hit rate</TableCell>
                    <TableCell className="text-center">
                      <VenusToggle defaultChecked />
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
                      <TableCell><VenusStatusPill variant="success">Paid</VenusStatusPill></TableCell>
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
                      <TableCell><VenusStatusPill variant="warning">Pending</VenusStatusPill></TableCell>
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
                      <TableCell><VenusStatusPill variant="success">Paid</VenusStatusPill></TableCell>
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
                      <TableCell><VenusStatusPill variant="error">Failed</VenusStatusPill></TableCell>
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
                      <TableCell><VenusStatusPill variant="success">Paid</VenusStatusPill></TableCell>
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
                    <TableCell><VenusStatusPill variant="success">Active</VenusStatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Marcus Thompson</TableCell>
                    <TableCell className="text-gray-600">marcus.t@company.com</TableCell>
                    <TableCell><Tag>Designer</Tag></TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell><VenusStatusPill variant="success">Active</VenusStatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sofia Patel</TableCell>
                    <TableCell className="text-gray-600">sofia.patel@company.com</TableCell>
                    <TableCell><Tag>Manager</Tag></TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell><VenusStatusPill variant="warning">Pending</VenusStatusPill></TableCell>
                    <TableCell sticky="right" className="text-center">
                      <TableActionButton />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Alex Rivera</TableCell>
                    <TableCell className="text-gray-600">alex.rivera@company.com</TableCell>
                    <TableCell><Tag>Engineer</Tag></TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell><VenusStatusPill variant="error">Inactive</VenusStatusPill></TableCell>
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
        <section id="venus-search" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Search</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Search (Compact)">
              <div className="space-y-3 max-w-[800px]">
                <VenusSearch placeholder="Search entries..." />
                <VenusSearch placeholder="Disabled..." disabled />
              </div>
            </ShowcaseCard>

            <ShowcaseCard label="Search V3 (Full)">
              <div className="space-y-3 max-w-[800px]">
                <VenusSearchV3 placeholder="Search projects..." />
                <VenusSearchV3 placeholder="Disabled..." disabled />
              </div>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Tooltips */}
        <section id="venus-tooltips" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Tooltips</h3>

          <div className="space-y-4">
            <ShowcaseCard label="Tooltip Positions">
              <VenusTooltipProvider>
                <div className="flex flex-wrap gap-4">
                  <VenusTooltip>
                    <VenusTooltipTrigger asChild>
                      <VenusButton variant="secondary">Hover me (top)</VenusButton>
                    </VenusTooltipTrigger>
                    <VenusTooltipContent side="top">
                      <p>Tooltip on top</p>
                    </VenusTooltipContent>
                  </VenusTooltip>

                  <VenusTooltip>
                    <VenusTooltipTrigger asChild>
                      <VenusButton variant="secondary">Hover me (bottom)</VenusButton>
                    </VenusTooltipTrigger>
                    <VenusTooltipContent side="bottom">
                      <p>Tooltip on bottom</p>
                    </VenusTooltipContent>
                  </VenusTooltip>

                  <VenusTooltip>
                    <VenusTooltipTrigger asChild>
                      <VenusButton variant="secondary">Hover me (left)</VenusButton>
                    </VenusTooltipTrigger>
                    <VenusTooltipContent side="left">
                      <p>Tooltip on left</p>
                    </VenusTooltipContent>
                  </VenusTooltip>

                  <VenusTooltip>
                    <VenusTooltipTrigger asChild>
                      <VenusButton variant="secondary">Hover me (right)</VenusButton>
                    </VenusTooltipTrigger>
                    <VenusTooltipContent side="right">
                      <p>Tooltip on right</p>
                    </VenusTooltipContent>
                  </VenusTooltip>
                </div>
              </VenusTooltipProvider>
            </ShowcaseCard>
          </div>
        </section>

        <Divider />

        {/* Page Search Header */}
        <section id="venus-page-search-header" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Page Search Header</h3>

          <div className="space-y-4">
            <ShowcaseCard label="With Search and Actions">
              <div className="-mx-6 -mb-6">
                <VenusPageSearchHeader
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

      </div>

      </main>
        </div>
    </div>
  );
}
