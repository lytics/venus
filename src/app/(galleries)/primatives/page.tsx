"use client";

import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import { Plus, ChevronsUpDown, Star, Heart, Settings, MoreVertical, User, Mail, Phone, Calendar, Search, CreditCard, File, Database, Zap, X, ChevronDown, ChevronUp, Edit, Trash2, Info, AlertTriangle, CheckCircle, ArrowUpRight, Check, Sparkles, ExternalLink } from "lucide-react";

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
  Pill,
  Pills,
  Divider,
  Dropdown as VenusDropdown,
  type DropdownItem,
  Table as VenusTable,
  TableHeader as VenusTableHeader,
  TableBody as VenusTableBody,
  TableHead as VenusTableHead,
  TableRow as VenusTableRow,
  TableCell as VenusTableCell,
  Search as VenusSearch,
  SearchV3 as VenusSearchV3,
  Tabs as VenusTabs,
  TabsList as VenusTabsList,
  TabsTrigger as VenusTabsTrigger,
  TabsContent as VenusTabsContent,
  PageHeader as VenusPageHeader,
  type PageHeaderAction
} from "@/components/venus";

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VenusLogo } from "@/components/venus-logo";
import { AdminNav } from "@/components/admin-nav";
import { useCommandPalette } from "@/components/command-palette-provider";
import { useModal } from "@/hooks/use-modal";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalClose,
} from "@/components/ui/modal";
import Link from "next/link";

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
  'table': 'data-table',
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
  const { isOpen: isModalOpen, openModal, closeModal} = useModal();
  const [testResults, setTestResults] = useState({
    animations: null as boolean | null,
    transitions: null as boolean | null,
    tokens: null as boolean | null,
  });
  const [statusCollapsed, setStatusCollapsed] = useState(false);
  const [allCollapsed, setAllCollapsed] = useState(true);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

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

        {/* Venus Buttons */}
        <section id="venus-buttons" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Buttons</h3>
            <p className="text-sm text-muted-foreground">Primary actions with Venus styling. Font: 14px (small), 16px (regular), 18px (large) • Weight: 600</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Variants</h4>
              <div className="flex flex-wrap gap-4">
                <VenusButton variant="primary">Primary</VenusButton>
                <VenusButton variant="secondary">Secondary</VenusButton>
                <VenusButton variant="ghost">Ghost</VenusButton>
                <VenusButton variant="danger">Danger</VenusButton>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Sizes</h4>
              <div className="flex flex-wrap gap-4 items-end">
                <div className="flex flex-col gap-2 items-center">
                  <VenusButton size="small">Small</VenusButton>
                  <span className="text-xs text-muted-foreground">32px • 14px font</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <VenusButton size="regular">Regular</VenusButton>
                  <span className="text-xs text-muted-foreground">36px • 16px font</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <VenusButton size="large">Large</VenusButton>
                  <span className="text-xs text-muted-foreground">44px • 18px font</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">With Icons</h4>
              <div className="flex flex-wrap gap-4">
                <VenusButton variant="primary">
                  <Plus className="h-4 w-4" /> Create New
                </VenusButton>
                <VenusButton variant="secondary">
                  <Settings className="h-4 w-4" /> Settings
                </VenusButton>
                <VenusButton variant="ghost">
                  <Star className="h-4 w-4" /> Favorite
                </VenusButton>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Disabled State</h4>
              <div className="flex flex-wrap gap-4">
                <VenusButton disabled>Disabled Primary</VenusButton>
                <VenusButton variant="secondary" disabled>Disabled Secondary</VenusButton>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Real-World Examples (as used in Contentstack)</h4>
              <div className="space-y-6">
                {/* Primary CTAs - Large buttons */}
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Primary CTAs (Large size - 44px)</p>
                  <div className="flex flex-wrap gap-4">
                    <VenusButton variant="primary" size="large">
                      <Plus className="h-5 w-5" /> Dashboard Extension
                    </VenusButton>
                    <VenusButton variant="primary" size="large">
                      <Plus className="h-5 w-5" /> Build New App
                    </VenusButton>
                    <VenusButton variant="primary" size="large">
                      <Plus className="h-5 w-5" /> Create New Entry
                    </VenusButton>
                  </div>
                </div>

                {/* Standard Actions - Regular buttons */}
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Standard Actions (Regular size - 36px)</p>
                  <div className="flex flex-wrap gap-4">
                    <VenusButton variant="primary" size="regular">
                      <Search className="h-4 w-4" /> Search
                    </VenusButton>
                    <VenusButton variant="secondary" size="regular">
                      <Settings className="h-4 w-4" /> Manage Apps
                    </VenusButton>
                    <VenusButton variant="ghost" size="regular">
                      Learn More
                    </VenusButton>
                  </div>
                </div>

                {/* Secondary Actions - Small buttons */}
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Secondary Actions (Small size - 32px)</p>
                  <div className="flex flex-wrap gap-4">
                    <VenusButton variant="secondary" size="small">
                      <Edit className="h-4 w-4" /> Edit
                    </VenusButton>
                    <VenusButton variant="ghost" size="small">
                      Cancel
                    </VenusButton>
                    <VenusButton variant="ghost" size="small">
                      <ArrowUpRight className="h-3 w-3" /> View Details
                    </VenusButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Form Inputs */}
        <section id="venus-inputs" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Form Inputs (Venus v2)</h3>
            <p className="text-sm text-muted-foreground">Text inputs and textareas with validation states. Font: 16px • Weight: 400 • Height: 40px</p>
          </div>

          <div className="max-w-2xl space-y-6">
            <Field>
              <FieldLabel htmlFor="venus-input-1">Default Input</FieldLabel>
              <VenusInput id="venus-input-1" placeholder="Type here..." />
              <HelpText>This is a help text for the input field</HelpText>
            </Field>

            <Field>
              <FieldLabel htmlFor="venus-input-error" required>Input with Error</FieldLabel>
              <VenusInput id="venus-input-error" error placeholder="Email address" />
              <ValidationMessage type="error">Email address is required</ValidationMessage>
            </Field>

            <Field>
              <FieldLabel htmlFor="venus-input-success">Input with Success</FieldLabel>
              <VenusInput id="venus-input-success" success defaultValue="john@example.com" />
              <ValidationMessage type="success">Email address verified</ValidationMessage>
            </Field>

            <Field>
              <FieldLabel htmlFor="venus-textarea" optional>Message</FieldLabel>
              <VenusTextarea id="venus-textarea" placeholder="Enter your message..." rows={4} />
              <HelpText>Please provide detailed information</HelpText>
            </Field>
          </div>
        </section>

        <Divider />

        {/* Venus Form Controls */}
        <section id="venus-controls" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Form Controls</h3>
            <p className="text-sm text-muted-foreground">Checkboxes, radio buttons, and toggle switches. Label font: 16px • Weight: 400</p>
          </div>

          <div className="grid gap-8 max-w-2xl">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground">Checkboxes</h4>
              <div className="space-y-3">
                <VenusCheckbox label="Accept terms and conditions" />
                <VenusCheckbox label="Subscribe to newsletter" defaultChecked />
                <VenusCheckbox label="Disabled option" disabled />
                <VenusCheckbox label="Disabled and checked" disabled defaultChecked />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground">Radio Buttons</h4>
              <div className="space-y-3">
                <VenusRadio name="plan" label="Free Plan" defaultChecked />
                <VenusRadio name="plan" label="Pro Plan" />
                <VenusRadio name="plan" label="Enterprise Plan" />
                <VenusRadio name="plan-disabled" label="Disabled Option" disabled />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground">Toggle Switches</h4>
              <ToggleSwitchExamples />
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Tags */}
        <section id="venus-tags" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Tags (Venus V2)</h3>
            <p className="text-sm text-muted-foreground">Label tags from Contentstack app. Height: 20px • Font: 12px/500 • Border radius: 4px • Gray background with transparent border that shows on hover</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Default Tags</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Non-removable tags for labels and categories
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag>Summer</Tag>
                <Tag>Season</Tag>
                <Tag>Category</Tag>
                <Tag>Label</Tag>
                <Tag>Content Type</Tag>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Removable Tags</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Tags with X button • Hover over tag: lighter gray background • Hover over X button: darker gray background
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag removable onRemove={() => toast.success("Tag removed")}>
                  Removable
                </Tag>
                <Tag removable onRemove={() => toast.success("Tag removed")}>
                  React
                </Tag>
                <Tag removable onRemove={() => toast.success("Tag removed")}>
                  TypeScript
                </Tag>
                <Tag removable onRemove={() => toast.success("Tag removed")}>
                  JavaScript
                </Tag>
                <Tag removable onRemove={() => toast.success("Tag removed")}>
                  Next.js
                </Tag>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Disabled State</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Disabled tags with reduced opacity
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag disabled>Disabled</Tag>
                <Tag removable disabled onRemove={() => {}}>
                  Disabled Removable
                </Tag>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Real-World Example</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Tag filtering as seen in Contentstack entries
              </p>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Filtered by:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag removable onRemove={() => toast.success("Filter removed")}>
                    Content Type: Article
                  </Tag>
                  <Tag removable onRemove={() => toast.success("Filter removed")}>
                    Status: Published
                  </Tag>
                  <Tag removable onRemove={() => toast.success("Filter removed")}>
                    Author: John Doe
                  </Tag>
                  <Tag removable onRemove={() => toast.success("Filter removed")}>
                    Last 7 days
                  </Tag>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Hover States</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Two distinct hover states: (1) Entire tag hover changes background to #647696 and text to white. (2) X button hover changes background to darker #475161
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag removable onRemove={() => toast.success("Hover demonstration")}>
                  Hover over me
                </Tag>
                <Tag removable onRemove={() => toast.success("Hover demonstration")}>
                  Hover over X button
                </Tag>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Tabs */}
        <section id="venus-tabs" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Tabs (Venus v2)</h3>
            <p className="text-sm text-muted-foreground">Clean tab navigation with simple color states. Font: 14px • Weight: 400 (normal), 400 (active) • Colors: #718096 (inactive), #6C5CE7 (active)</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Primary</h4>
              <VenusTabs defaultValue="tab1" className="w-full">
                <VenusTabsList>
                  <VenusTabsTrigger value="tab1">Overview</VenusTabsTrigger>
                  <VenusTabsTrigger value="tab2">Analytics</VenusTabsTrigger>
                  <VenusTabsTrigger value="tab3">Settings</VenusTabsTrigger>
                  <VenusTabsTrigger value="tab4" disabled>Disabled</VenusTabsTrigger>
                </VenusTabsList>
              </VenusTabs>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Real-World Example</h4>
              <VenusTabs defaultValue="entries" className="w-full">
                <VenusTabsList>
                  <VenusTabsTrigger value="entries">Entries</VenusTabsTrigger>
                  <VenusTabsTrigger value="assets">Assets</VenusTabsTrigger>
                  <VenusTabsTrigger value="content-types">Content Types</VenusTabsTrigger>
                  <VenusTabsTrigger value="environments">Environments</VenusTabsTrigger>
                </VenusTabsList>
                <VenusTabsContent value="entries">
                  <div className="rounded-lg border border-border p-6">
                    <p className="text-sm text-muted-foreground">Your entries will be displayed here.</p>
                  </div>
                </VenusTabsContent>
                <VenusTabsContent value="assets">
                  <div className="rounded-lg border border-border p-6">
                    <p className="text-sm text-muted-foreground">Your assets will be displayed here.</p>
                  </div>
                </VenusTabsContent>
                <VenusTabsContent value="content-types">
                  <div className="rounded-lg border border-border p-6">
                    <p className="text-sm text-muted-foreground">Your content types will be displayed here.</p>
                  </div>
                </VenusTabsContent>
                <VenusTabsContent value="environments">
                  <div className="rounded-lg border border-border p-6">
                    <p className="text-sm text-muted-foreground">Your environments will be displayed here.</p>
                  </div>
                </VenusTabsContent>
              </VenusTabs>
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus PageHeader */}
        <section id="venus-pageheader" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">PageHeader (Venus v2)</h3>
            <p className="text-sm text-muted-foreground">Page header component with title and action buttons. Height: 32px • Title: 16px font, 400 weight • Button: 14px font, 600 weight</p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Simple Header with Single Action</h4>
              <VenusPageHeader
                title="Default Title"
                actions={[
                  {
                    label: "Cancel",
                    onClick: () => toast.success("Cancel clicked"),
                    variant: "primary"
                  }
                ]}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Header with Multiple Actions</h4>
              <VenusPageHeader
                title="Page Title 1"
                actions={[
                  {
                    label: "Tertiary",
                    onClick: () => toast.success("Tertiary clicked"),
                    variant: "ghost"
                  },
                  {
                    label: "Secondary",
                    onClick: () => toast.success("Secondary clicked"),
                    variant: "secondary"
                  },
                  {
                    label: "Primary",
                    onClick: () => toast.success("Primary clicked"),
                    variant: "primary"
                  }
                ]}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Header with Info Icon</h4>
              <VenusPageHeader
                title="Page Title 1"
                infoIcon={
                  <a href="#" className="flex items-center text-[#475161] hover:text-[#6C5CE7] transition-colors">
                    <Info className="h-4 w-4" />
                  </a>
                }
                actions={[
                  {
                    label: "Cancel",
                    onClick: () => toast.success("Cancel clicked"),
                    variant: "primary"
                  }
                ]}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Header with Disabled Action</h4>
              <VenusPageHeader
                title="Edit Entry"
                actions={[
                  {
                    label: "Cancel",
                    onClick: () => toast.success("Cancel clicked"),
                    variant: "secondary"
                  },
                  {
                    label: "Save",
                    onClick: () => toast.success("Save clicked"),
                    variant: "primary",
                    disabled: true
                  }
                ]}
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Dropdown */}
        <section id="venus-dropdown" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Dropdown</h3>
            <p className="text-sm text-muted-foreground">Dropdown menu with multiple versions</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">V1 (Minimal)</h4>
              <p className="text-xs text-muted-foreground mb-3">Simple text-based dropdown with chevron</p>
              <div className="w-64">
                <VenusDropdown
                  version="v1"
                  items={[
                    { label: "India", value: "india" },
                    { label: "Belgium", value: "belgium" },
                    { label: "Canada", value: "canada" },
                    { label: "Denmark", value: "denmark" },
                    { label: "England", value: "england" },
                    { label: "France", value: "france" },
                    { label: "Poland", value: "poland" },
                    { label: "Germany", value: "germany" },
                    { label: "Algeria", value: "algeria" }
                  ]}
                  value="india"
                  onChange={(value) => toast.success(`Selected: ${value}`)}
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">V2 (Bordered)</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Dropdown menu with borders. Trigger: 8px 16px padding • Menu: 4px 0 padding • Items: 16px 18px padding • Font: 16px • Border radius: 4px
              </p>
              <div className="w-64">
                <VenusDropdown
                  version="v2"
                  items={[
                    { label: "India", value: "india" },
                    { label: "Belgium", value: "belgium" },
                    { label: "Canada", value: "canada" },
                    { label: "Denmark", value: "denmark" },
                    { label: "England", value: "england" },
                    { label: "France", value: "france" },
                    { label: "Poland", value: "poland" },
                    { label: "Germany", value: "germany" },
                    { label: "Algeria", value: "algeria" }
                  ]}
                  value="india"
                  onChange={(value) => toast.success(`Selected: ${value}`)}
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">V2 with Search</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Dropdown menu with search input for filtering options
              </p>
              <div className="w-64">
                <VenusDropdown
                  version="v2"
                  withSearch
                  items={[
                    { label: "India", value: "india" },
                    { label: "Belgium", value: "belgium" },
                    { label: "Canada", value: "canada" },
                    { label: "Denmark", value: "denmark" },
                    { label: "England", value: "england" },
                    { label: "France", value: "france" },
                    { label: "Poland", value: "poland" },
                    { label: "Germany", value: "germany" },
                    { label: "Algeria", value: "algeria" }
                  ]}
                  value="india"
                  onChange={(value) => toast.success(`Selected: ${value}`)}
                />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Table */}
        <section id="venus-table" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Table (Venus v2)</h3>
            <p className="text-sm text-muted-foreground">Data tables with vertical column dividers. Header: 14px bold • Cell: 16px • Small text: 14px • Padding: 10px 15px • Row hover • Border bottom on header</p>
          </div>

          <div className="border border-[#E5E7EB] rounded-lg overflow-auto bg-white">
            <VenusTable>
              <VenusTableHeader>
                <VenusTableRow className="hover:bg-transparent">
                  <VenusTableHead className="w-12 sticky left-0 bg-white z-10">
                    <Checkbox
                      id="select-all"
                      checked={selectAll}
                      onCheckedChange={(checked) => {
                        const isChecked = checked === true;
                        setSelectAll(isChecked);
                        if (isChecked) {
                          setSelectedRows(new Set(['row-1', 'row-2', 'row-3', 'row-4']));
                        } else {
                          setSelectedRows(new Set());
                        }
                      }}
                    />
                  </VenusTableHead>
                  <VenusTableHead className="min-w-[300px]">Title</VenusTableHead>
                  <VenusTableHead className="min-w-[150px]">Language</VenusTableHead>
                  <VenusTableHead className="min-w-[200px]">Content Type</VenusTableHead>
                  <VenusTableHead className="min-w-[150px]">Status</VenusTableHead>
                  <VenusTableHead className="min-w-[200px]">Modified At</VenusTableHead>
                  <VenusTableHead
                    className="w-12 sticky right-0 bg-white z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none"
                  >
                    Actions
                  </VenusTableHead>
                </VenusTableRow>
              </VenusTableHeader>
              <VenusTableBody>
                <VenusTableRow>
                  <VenusTableCell className="sticky left-0 bg-white group-hover:bg-[#F9FAFB] z-10">
                    <Checkbox
                      id="row-1"
                      checked={selectedRows.has('row-1')}
                      onCheckedChange={(checked) => {
                        const newSelected = new Set(selectedRows);
                        if (checked) {
                          newSelected.add('row-1');
                        } else {
                          newSelected.delete('row-1');
                        }
                        setSelectedRows(newSelected);
                        setSelectAll(newSelected.size === 4);
                      }}
                    />
                  </VenusTableCell>
                  <VenusTableCell>
                    <div>
                      <div>Getting Started with Venus</div>
                      <div className="text-sm text-muted-foreground">Content Type: Header content</div>
                    </div>
                  </VenusTableCell>
                  <VenusTableCell>English</VenusTableCell>
                  <VenusTableCell>Article</VenusTableCell>
                  <VenusTableCell>
                    <Tag>Published</Tag>
                  </VenusTableCell>
                  <VenusTableCell className="text-[#71717A]">Jan 28, 2025 12:09 PM</VenusTableCell>
                  <VenusTableCell className="sticky right-0 bg-white group-hover:bg-[#F9FAFB] z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none">
                    <Button variant="ghost" size="icon-lg">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </VenusTableCell>
                </VenusTableRow>
                <VenusTableRow>
                  <VenusTableCell className="sticky left-0 bg-white group-hover:bg-[#F9FAFB] z-10">
                    <Checkbox
                      id="row-2"
                      checked={selectedRows.has('row-2')}
                      onCheckedChange={(checked) => {
                        const newSelected = new Set(selectedRows);
                        if (checked) {
                          newSelected.add('row-2');
                        } else {
                          newSelected.delete('row-2');
                        }
                        setSelectedRows(newSelected);
                        setSelectAll(newSelected.size === 4);
                      }}
                    />
                  </VenusTableCell>
                  <VenusTableCell>
                    <div>
                      <div>Design System Principles</div>
                      <div className="text-sm text-muted-foreground">Content Type: Header content</div>
                    </div>
                  </VenusTableCell>
                  <VenusTableCell>English</VenusTableCell>
                  <VenusTableCell>Guide</VenusTableCell>
                  <VenusTableCell>
                    <Tag>Draft</Tag>
                  </VenusTableCell>
                  <VenusTableCell className="text-[#71717A]">Jan 28, 2025 11:30 AM</VenusTableCell>
                  <VenusTableCell className="sticky right-0 bg-white group-hover:bg-[#F9FAFB] z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none">
                    <Button variant="ghost" size="icon-lg">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </VenusTableCell>
                </VenusTableRow>
                <VenusTableRow>
                  <VenusTableCell className="sticky left-0 bg-white group-hover:bg-[#F9FAFB] z-10">
                    <Checkbox
                      id="row-3"
                      checked={selectedRows.has('row-3')}
                      onCheckedChange={(checked) => {
                        const newSelected = new Set(selectedRows);
                        if (checked) {
                          newSelected.add('row-3');
                        } else {
                          newSelected.delete('row-3');
                        }
                        setSelectedRows(newSelected);
                        setSelectAll(newSelected.size === 4);
                      }}
                    />
                  </VenusTableCell>
                  <VenusTableCell>
                    <div>
                      <div>Component Library</div>
                      <div className="text-sm text-muted-foreground">Content Type: Header content</div>
                    </div>
                  </VenusTableCell>
                  <VenusTableCell>English</VenusTableCell>
                  <VenusTableCell>Documentation</VenusTableCell>
                  <VenusTableCell>
                    <Tag>Published</Tag>
                  </VenusTableCell>
                  <VenusTableCell className="text-[#71717A]">Jan 27, 2025 03:15 PM</VenusTableCell>
                  <VenusTableCell className="sticky right-0 bg-white group-hover:bg-[#F9FAFB] z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none">
                    <Button variant="ghost" size="icon-lg">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </VenusTableCell>
                </VenusTableRow>
                <VenusTableRow>
                  <VenusTableCell className="sticky left-0 bg-white group-hover:bg-[#F9FAFB] z-10">
                    <Checkbox
                      id="row-4"
                      checked={selectedRows.has('row-4')}
                      onCheckedChange={(checked) => {
                        const newSelected = new Set(selectedRows);
                        if (checked) {
                          newSelected.add('row-4');
                        } else {
                          newSelected.delete('row-4');
                        }
                        setSelectedRows(newSelected);
                        setSelectAll(newSelected.size === 4);
                      }}
                    />
                  </VenusTableCell>
                  <VenusTableCell>
                    <div>
                      <div>API Best Practices</div>
                      <div className="text-sm text-muted-foreground">Content Type: Header content</div>
                    </div>
                  </VenusTableCell>
                  <VenusTableCell>English</VenusTableCell>
                  <VenusTableCell>Tutorial</VenusTableCell>
                  <VenusTableCell>
                    <Tag>Review</Tag>
                  </VenusTableCell>
                  <VenusTableCell className="text-[#71717A]">Jan 26, 2025 09:45 AM</VenusTableCell>
                  <VenusTableCell className="sticky right-0 bg-white group-hover:bg-[#F9FAFB] z-10 before:absolute before:left-[-10px] before:top-0 before:bottom-0 before:w-[10px] before:bg-gradient-to-l before:from-black/5 before:to-transparent before:pointer-events-none">
                    <Button variant="ghost" size="icon-lg">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </VenusTableCell>
                </VenusTableRow>
              </VenusTableBody>
            </VenusTable>
          </div>
        </section>

        <Divider />

        {/* Venus Search */}
        <section id="venus-search" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Search (Venus v2)</h3>
            <p className="text-sm text-muted-foreground">Search input with borders. Border: purple (93,80,190) • Focus: lighter purple (108,92,231) • Height: 29px • Padding: 2px 8px • Font: 14px</p>
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Default Search</h4>
              <VenusSearch placeholder="Search in Entries..." />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">With Custom Placeholder</h4>
              <VenusSearch placeholder="Search for content..." />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Disabled State</h4>
              <VenusSearch placeholder="Search..." disabled />
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Search V3 (Secondary) */}
        <section id="venus-search-v3" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Search V3 (Venus Secondary)</h3>
            <p className="text-sm text-muted-foreground">Search input with gray borders matching dropdown style. Border: #DDE3EE (idle), #5D50BE (hover), #6C5CE7 (focus) • Height: 40px • Padding: 12px horizontal • Font: 16px • Border radius: 4px</p>
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Default Search</h4>
              <VenusSearchV3 placeholder="Search projects" />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">With Custom Placeholder</h4>
              <VenusSearchV3 placeholder="Search stacks..." />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Disabled State</h4>
              <VenusSearchV3 placeholder="Search..." disabled />
            </div>
          </div>
        </section>

        <Divider />

        {/* Venus Pills */}
        <section id="venus-pills" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pills</h3>
            <p className="text-sm text-muted-foreground">Interactive pill components with multiple variants and states</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Label Variant (Default)</h4>
              <div className="flex flex-wrap gap-3">
                <Pill variant="label" status="default">Default</Pill>
                <Pill variant="label" status="success">Success</Pill>
                <Pill variant="label" status="warning">Warning</Pill>
                <Pill variant="label" status="danger">Danger</Pill>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Chip Variant (Rounded)</h4>
              <div className="flex flex-wrap gap-3">
                <Pill variant="chip" status="default" shouldHaveBorder>Default Chip</Pill>
                <Pill variant="chip" status="success" shouldHaveBorder>Success Chip</Pill>
                <Pill variant="chip" status="warning" shouldHaveBorder>Warning Chip</Pill>
                <Pill variant="chip" status="danger" shouldHaveBorder>Danger Chip</Pill>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">With Icons</h4>
              <div className="flex flex-wrap gap-3">
                <Pill variant="chip" status="success" iconBefore={<CheckCircle className="h-4 w-4" />}>
                  Verified
                </Pill>
                <Pill variant="chip" status="warning" iconBefore={<AlertTriangle className="h-4 w-4" />}>
                  Warning
                </Pill>
                <Pill variant="chip" status="default" iconBefore={<Star className="h-4 w-4" />}>
                  Featured
                </Pill>
                <Pill variant="label" iconBefore={<Info className="h-4 w-4" />}>
                  Information
                </Pill>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Removable Pills</h4>
              <div className="flex flex-wrap gap-3">
                <Pill variant="chip" status="default" removable onRemove={() => toast.success("Pill removed")}>
                  Removable
                </Pill>
                <Pill variant="chip" status="default" removable onRemove={() => toast.success("Filter removed")}>
                  React
                </Pill>
                <Pill variant="chip" status="success" removable onRemove={() => toast.success("Tag removed")}>
                  TypeScript
                </Pill>
                <Pill variant="label" removable onRemove={() => toast.success("Label removed")}>
                  JavaScript
                </Pill>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Clickable Pills</h4>
              <div className="flex flex-wrap gap-3">
                <Pill variant="chip" onClick={() => toast.info("Pill clicked!")}>
                  Click me
                </Pill>
                <Pill variant="chip" status="success" onClick={() => toast.success("Success pill clicked!")}>
                  Interactive
                </Pill>
                <Pill variant="label" onClick={() => toast.info("Label clicked!")}>
                  Clickable label
                </Pill>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Disabled State</h4>
              <div className="flex flex-wrap gap-3">
                <Pill variant="chip" disabled>Disabled</Pill>
                <Pill variant="chip" status="success" disabled removable>
                  Disabled Removable
                </Pill>
                <Pill variant="label" disabled>Disabled Label</Pill>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Pills Container</h4>
              <Pills
                variant="chip"
                status="default"
                items={[
                  { text: "JavaScript", iconBefore: <Zap className="h-4 w-4" />, removable: true, onRemove: () => toast.success("JavaScript removed") },
                  { text: "TypeScript", iconBefore: <Check className="h-4 w-4" />, removable: true, onRemove: () => toast.success("TypeScript removed") },
                  { text: "React", iconBefore: <Star className="h-4 w-4" />, removable: true, onRemove: () => toast.success("React removed") },
                  { text: "Next.js", removable: true, onRemove: () => toast.success("Next.js removed") }
                ]}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Real-World Example: Filter Pills</h4>
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">Active filters that can be removed</p>
                <Pills variant="chip" shouldHaveBorder>
                  <Pill variant="chip" status="default" removable onRemove={() => toast.success("Filter removed")}>
                    Published
                  </Pill>
                  <Pill variant="chip" status="default" removable onRemove={() => toast.success("Filter removed")}>
                    Last 30 days
                  </Pill>
                  <Pill variant="chip" status="default" removable onRemove={() => toast.success("Filter removed")}>
                    Author: John Doe
                  </Pill>
                  <Pill variant="chip" status="default" removable onRemove={() => toast.success("Filter removed")}>
                    English
                  </Pill>
                </Pills>
              </div>
            </div>
          </div>
        </section>
      </div>

      </main>
        </div>
    </div>
  );
}
