# Venus Design System Completion Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the venuscn component library so it covers every common UI pattern needed for vacuum captures, json-render, Claude Code generation, and general developer usage.

**Architecture:** Each new component follows the existing Venus pattern: Radix UI primitive (when applicable) wrapped in a forwardRef compound component with displayName, exported Props interface, JSDoc, cn() utility for styling, and design tokens from tokens.css. Components that already exist in the demo app (`apps/demo/src/components/ui/`) are used as structural references, then restyled to match Venus design tokens.

**Tech Stack:** React 18/19, Radix UI, Tailwind CSS v4, class-variance-authority, lucide-react, tsup

---

## Overview

| # | Task | Effort | New Deps |
|---|------|--------|----------|
| 1 | Breadcrumb | Low | None (uses @radix-ui/react-slot already installed) |
| 2 | DropdownMenu | Medium | @radix-ui/react-dropdown-menu |
| 3 | Popover | Low | @radix-ui/react-popover |
| 4 | Toast (via Sonner) | Medium | sonner |
| 5 | Accordion | Medium | @radix-ui/react-accordion |
| 6 | EmptyState | Low | None |
| 7 | Spinner | Low | None |
| 8 | Separator (alias Divider) | Low | None |
| 9 | Update registry.json | Low | None |
| 10 | Update README.md | Low | None |

---

## Conventions (apply to ALL tasks)

Every new component file MUST:

1. Live at `packages/venuscn/src/components/<name>.tsx`
2. Use `"use client"` directive if it uses React state or Radix
3. Import `cn` from `'../lib/utils'`
4. Use `React.forwardRef` with explicit ref + props types
5. Set `.displayName` on every exported component
6. Export a named `Props` interface with JSDoc on every prop
7. Use Venus design tokens (no hardcoded hex colors)
8. Be re-exported from `packages/venuscn/src/components/index.ts`

Reference patterns:
- **Radix compound component:** `packages/venuscn/src/components/dialog.tsx`
- **Simple component:** `packages/venuscn/src/components/badge.tsx`
- **Demo shadcn references:** `apps/demo/src/components/ui/`

Build check command: `cd packages/venuscn && pnpm build`

---

## Task 1: Breadcrumb

Horizontal nav breadcrumb. No Radix dependency — pure HTML with Slot for link composition.

**Files:**
- Create: `packages/venuscn/src/components/breadcrumb.tsx`
- Modify: `packages/venuscn/src/components/index.ts`

**Reference:** `apps/demo/src/components/ui/breadcrumb.tsx`

**Step 1: Create the component**

```tsx
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

/** Root breadcrumb nav wrapper. Renders a `<nav>` with aria-label. */
export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  /** Override the default "/" separator between items. */
  separator?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

/** Ordered list container for breadcrumb items. */
export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {}

export const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-body sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

/** Single breadcrumb item (li wrapper). */
export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

/** Breadcrumb link. Supports `asChild` for custom link components (Next.js Link, etc). */
export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  /** When true, merges props onto child element instead of rendering `<a>`. @default false */
  asChild?: boolean;
}

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        className={cn("text-body transition-colors hover:text-primary", className)}
        {...props}
      />
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

/** Current page indicator (non-interactive). */
export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {}

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-heading", className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

/** Chevron separator between breadcrumb items. */
export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> {}

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

/** Ellipsis indicator for collapsed breadcrumb items. */
export interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<"span"> {}

export const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
```

**Step 2: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  type BreadcrumbProps,
  type BreadcrumbListProps,
  type BreadcrumbItemProps,
  type BreadcrumbLinkProps,
  type BreadcrumbPageProps,
  type BreadcrumbSeparatorProps,
  type BreadcrumbEllipsisProps,
} from "./breadcrumb";
```

**Step 3: Build and verify**

```bash
cd packages/venuscn && pnpm build
```

Expected: Clean build, no errors.

**Step 4: Commit**

```bash
git add packages/venuscn/src/components/breadcrumb.tsx packages/venuscn/src/components/index.ts
git commit -m "feat(venuscn): add Breadcrumb compound component"
```

---

## Task 2: DropdownMenu

Context menu / action menu built on Radix. This is the component that pairs with `TableActionButton`'s 3-dot icon.

**Files:**
- Create: `packages/venuscn/src/components/dropdown-menu.tsx`
- Modify: `packages/venuscn/src/components/index.ts`
- Modify: `packages/venuscn/package.json` (add dep)

**Reference:** `apps/demo/src/components/ui/dropdown-menu.tsx`

**Step 1: Install dependency**

```bash
cd packages/venuscn && pnpm add @radix-ui/react-dropdown-menu
```

**Step 2: Create the component**

```tsx
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/** Props for DropdownMenuSubTrigger. */
export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  /** Indent the trigger to align with items that have icons. @default false */
  inset?: boolean;
}

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5",
      "text-sm outline-none",
      "focus:bg-surface-gray data-[state=open]:bg-surface-gray",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

/** Props for DropdownMenuSubContent. */
export interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-input-border bg-white p-1 shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

/** Props for DropdownMenuContent. */
export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {}

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-input-border bg-white p-1 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

/** Props for DropdownMenuItem. */
export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  /** Indent the item to align with items that have icons. @default false */
  inset?: boolean;
  /** Use `"destructive"` for dangerous actions like delete. @default "default" */
  variant?: "default" | "destructive";
}

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, variant = "default", ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5",
      "text-sm outline-none transition-colors",
      "focus:bg-surface-gray focus:text-heading",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      variant === "destructive" && "text-danger-dark focus:bg-danger-light focus:text-danger-dark",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

/** Props for DropdownMenuCheckboxItem. */
export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {}

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2",
      "text-sm outline-none transition-colors",
      "focus:bg-surface-gray focus:text-heading",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

/** Props for DropdownMenuRadioItem. */
export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {}

const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2",
      "text-sm outline-none transition-colors",
      "focus:bg-surface-gray focus:text-heading",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

/** Props for DropdownMenuLabel. */
export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  /** Indent the label. @default false */
  inset?: boolean;
}

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-heading", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

/** Props for DropdownMenuSeparator. */
export interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-input-border", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

/** Keyboard shortcut hint displayed on the right side of a menu item. */
const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-widest text-body", className)} {...props} />
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
};
```

**Step 3: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  type DropdownMenuContentProps,
  type DropdownMenuItemProps,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuRadioItemProps,
  type DropdownMenuLabelProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuSubContentProps,
} from "./dropdown-menu";
```

**Step 4: Build and verify**

```bash
cd packages/venuscn && pnpm build
```

**Step 5: Commit**

```bash
git add packages/venuscn/src/components/dropdown-menu.tsx packages/venuscn/src/components/index.ts packages/venuscn/package.json pnpm-lock.yaml
git commit -m "feat(venuscn): add DropdownMenu compound component"
```

---

## Task 3: Popover

Floating content panel triggered by a button click. Foundation for date pickers, color pickers, and custom menus.

**Files:**
- Create: `packages/venuscn/src/components/popover.tsx`
- Modify: `packages/venuscn/src/components/index.ts`
- Modify: `packages/venuscn/package.json` (add dep)

**Reference:** `apps/demo/src/components/ui/popover.tsx`

**Step 1: Install dependency**

```bash
cd packages/venuscn && pnpm add @radix-ui/react-popover
```

**Step 2: Create the component**

```tsx
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

/** Props for PopoverContent. */
export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border border-input-border bg-white p-4 shadow-md outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
```

**Step 3: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  type PopoverContentProps,
} from "./popover";
```

**Step 4: Build, verify, commit**

```bash
cd packages/venuscn && pnpm build
git add packages/venuscn/src/components/popover.tsx packages/venuscn/src/components/index.ts packages/venuscn/package.json pnpm-lock.yaml
git commit -m "feat(venuscn): add Popover compound component"
```

---

## Task 4: Toast (via Sonner)

Transient notification messages ("Saved successfully", "Error occurred"). Uses [sonner](https://sonner.emilkowal.dev/) — the de facto standard for React toast in the shadcn ecosystem. Much simpler than building from scratch.

**Files:**
- Create: `packages/venuscn/src/components/sonner.tsx`
- Modify: `packages/venuscn/src/components/index.ts`
- Modify: `packages/venuscn/package.json` (add dep)

**Step 1: Install dependency**

```bash
cd packages/venuscn && pnpm add sonner
```

**Step 2: Create the Venus-themed Toaster wrapper**

```tsx
"use client";

import { Toaster as SonnerToaster, toast } from "sonner";
import { cn } from "../lib/utils";

/** Props for Toaster — the toast container. Place once in your app layout. */
export interface ToasterProps extends React.ComponentProps<typeof SonnerToaster> {}

/**
 * Venus-themed toast notification container.
 *
 * Place `<Toaster />` once in your root layout, then call `toast()` anywhere:
 * ```tsx
 * import { Toaster, toast } from "@contentstack/venuscn"
 *
 * // In layout:
 * <Toaster />
 *
 * // Anywhere:
 * toast.success("Entry published")
 * toast.error("Failed to save")
 * toast("Processing...")
 * ```
 */
const Toaster = ({ className, ...props }: ToasterProps) => (
  <SonnerToaster
    className={cn("toaster group", className)}
    toastOptions={{
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-white group-[.toaster]:text-heading group-[.toaster]:border-input-border group-[.toaster]:shadow-lg group-[.toaster]:rounded",
        description: "group-[.toast]:text-body",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-white",
        cancelButton:
          "group-[.toast]:bg-surface-gray group-[.toast]:text-body",
        success:
          "group-[.toaster]:!bg-status-live-bg group-[.toaster]:!border-status-live group-[.toaster]:!text-heading",
        error:
          "group-[.toaster]:!bg-danger-light group-[.toaster]:!border-danger-dark group-[.toaster]:!text-heading",
        warning:
          "group-[.toaster]:!bg-warning-light group-[.toaster]:!border-warning-dark group-[.toaster]:!text-heading",
        info:
          "group-[.toaster]:!bg-info-light group-[.toaster]:!border-info group-[.toaster]:!text-heading",
      },
    }}
    {...props}
  />
);
Toaster.displayName = "Toaster";

export { Toaster, toast };
```

**Step 3: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export { Toaster, toast, type ToasterProps } from "./sonner";
```

**Step 4: Build, verify, commit**

```bash
cd packages/venuscn && pnpm build
git add packages/venuscn/src/components/sonner.tsx packages/venuscn/src/components/index.ts packages/venuscn/package.json pnpm-lock.yaml
git commit -m "feat(venuscn): add Toast notifications via Sonner"
```

---

## Task 5: Accordion

Collapsible content sections. Built on Radix Accordion.

**Files:**
- Create: `packages/venuscn/src/components/accordion.tsx`
- Modify: `packages/venuscn/src/components/index.ts`
- Modify: `packages/venuscn/package.json` (add dep)

**Step 1: Install dependency**

```bash
cd packages/venuscn && pnpm add @radix-ui/react-accordion
```

**Step 2: Create the component**

```tsx
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const Accordion = AccordionPrimitive.Root;

/** Props for AccordionItem. */
export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-input-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

/** Props for AccordionTrigger. */
export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4",
        "text-sm font-semibold text-heading transition-all",
        "hover:text-primary",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-body transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

/** Props for AccordionContent. */
export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

**Step 3: Add accordion animation keyframes to tokens.css**

Add to the `@theme` block in `packages/venuscn/src/styles/tokens.css`:
```css
--animate-accordion-down: accordion-down 0.2s ease-out;
--animate-accordion-up: accordion-up 0.2s ease-out;
```

And add the keyframes outside `@theme`:
```css
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}
@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}
```

**Step 4: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
} from "./accordion";
```

**Step 5: Build, verify, commit**

```bash
cd packages/venuscn && pnpm build
git add packages/venuscn/src/components/accordion.tsx packages/venuscn/src/components/index.ts packages/venuscn/src/styles/tokens.css packages/venuscn/package.json pnpm-lock.yaml
git commit -m "feat(venuscn): add Accordion compound component"
```

---

## Task 6: EmptyState

Common pattern for empty lists, search results, and onboarding. Simple presentational component — no Radix dependency.

**Files:**
- Create: `packages/venuscn/src/components/empty-state.tsx`
- Modify: `packages/venuscn/src/components/index.ts`

**Step 1: Create the component**

```tsx
import * as React from "react";
import { cn } from "../lib/utils";

/** Props for EmptyState — a centered placeholder for empty lists, search results, or onboarding prompts. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Illustration or icon displayed above the heading. Typically a lucide-react icon or an SVG. */
  icon?: React.ReactNode;
  /** Primary heading text. */
  heading: string;
  /** Supporting description text below the heading. */
  description?: string;
  /** Action element (e.g. a Button) rendered below the description. */
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, heading, description, action, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex items-center justify-center text-body [&>svg]:h-12 [&>svg]:w-12">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-heading">{heading}</h3>
      {description && (
        <p className="mt-1.5 max-w-md text-sm text-body">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
      {children}
    </div>
  )
);
EmptyState.displayName = "EmptyState";
```

**Step 2: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export { EmptyState, type EmptyStateProps } from "./empty-state";
```

**Step 3: Build, verify, commit**

```bash
cd packages/venuscn && pnpm build
git add packages/venuscn/src/components/empty-state.tsx packages/venuscn/src/components/index.ts
git commit -m "feat(venuscn): add EmptyState component"
```

---

## Task 7: Spinner

Standalone loading indicator. Button already has `loading` built in, but pages and sections need a standalone spinner.

**Files:**
- Create: `packages/venuscn/src/components/spinner.tsx`
- Modify: `packages/venuscn/src/components/index.ts`

**Step 1: Create the component**

```tsx
import * as React from "react";
import { cn } from "../lib/utils";

/** Props for Spinner — an animated loading indicator. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner.
   * - `"sm"` — 16px
   * - `"md"` — 24px
   * - `"lg"` — 32px
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
} as const;

/**
 * Animated loading spinner.
 *
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" className="text-primary" />
 * ```
 */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => (
    <div ref={ref} role="status" aria-label="Loading" {...props}>
      <svg
        className={cn("animate-spin text-primary", sizeMap[size], className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <span className="sr-only">Loading</span>
    </div>
  )
);
Spinner.displayName = "Spinner";
```

**Step 2: Add to barrel export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
export { Spinner, type SpinnerProps } from "./spinner";
```

**Step 3: Build, verify, commit**

```bash
cd packages/venuscn && pnpm build
git add packages/venuscn/src/components/spinner.tsx packages/venuscn/src/components/index.ts
git commit -m "feat(venuscn): add Spinner loading indicator"
```

---

## Task 8: Separator (export alias for Divider)

shadcn and json-render tools expect a component named `Separator`. Venus already has `Divider` which does the same thing. Export an alias so both names work.

**Files:**
- Modify: `packages/venuscn/src/components/index.ts`

**Step 1: Add alias export**

Add to `packages/venuscn/src/components/index.ts`:
```ts
// Separator is an alias for Divider (shadcn compatibility)
export { Divider as Separator, type DividerProps as SeparatorProps } from "./divider";
```

**Step 2: Build, verify, commit**

```bash
cd packages/venuscn && pnpm build
git add packages/venuscn/src/components/index.ts
git commit -m "feat(venuscn): add Separator alias for Divider (shadcn compat)"
```

---

## Task 9: Update registry.json

Add all new components to the machine-readable registry.

**Files:**
- Modify: `packages/venuscn/registry.json`

**Step 1: Add entries for each new component**

Add these objects to the `components` array in `registry.json`:

```json
{
  "name": "Breadcrumb",
  "description": "Horizontal navigation breadcrumb with separator and ellipsis support.",
  "file": "src/components/breadcrumb.tsx",
  "subcomponents": ["BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink", "BreadcrumbPage", "BreadcrumbSeparator", "BreadcrumbEllipsis"],
  "dependencies": ["@radix-ui/react-slot"]
},
{
  "name": "DropdownMenu",
  "description": "Context menu / action menu with items, checkboxes, radio groups, and submenus.",
  "file": "src/components/dropdown-menu.tsx",
  "subcomponents": ["DropdownMenuTrigger", "DropdownMenuContent", "DropdownMenuGroup", "DropdownMenuItem", "DropdownMenuCheckboxItem", "DropdownMenuRadioItem", "DropdownMenuRadioGroup", "DropdownMenuLabel", "DropdownMenuSeparator", "DropdownMenuShortcut", "DropdownMenuSub", "DropdownMenuSubTrigger", "DropdownMenuSubContent"],
  "dependencies": ["@radix-ui/react-dropdown-menu"]
},
{
  "name": "Popover",
  "description": "Floating content panel triggered by click. Foundation for date pickers and custom menus.",
  "file": "src/components/popover.tsx",
  "subcomponents": ["PopoverTrigger", "PopoverContent", "PopoverAnchor"],
  "dependencies": ["@radix-ui/react-popover"]
},
{
  "name": "Toaster",
  "description": "Toast notification container. Place once in layout, call toast() anywhere.",
  "file": "src/components/sonner.tsx",
  "dependencies": ["sonner"]
},
{
  "name": "Accordion",
  "description": "Collapsible content sections with animated open/close.",
  "file": "src/components/accordion.tsx",
  "subcomponents": ["AccordionItem", "AccordionTrigger", "AccordionContent"],
  "dependencies": ["@radix-ui/react-accordion"]
},
{
  "name": "EmptyState",
  "description": "Centered placeholder for empty lists, search results, or onboarding prompts.",
  "file": "src/components/empty-state.tsx",
  "props": {
    "icon": { "type": "ReactNode" },
    "heading": { "type": "string", "required": true },
    "description": { "type": "string" },
    "action": { "type": "ReactNode" }
  }
},
{
  "name": "Spinner",
  "description": "Animated loading spinner indicator.",
  "file": "src/components/spinner.tsx",
  "props": {
    "size": { "type": "\"sm\" | \"md\" | \"lg\"", "default": "md" }
  }
},
{
  "name": "Separator",
  "description": "Alias for Divider. Horizontal or vertical separator line (shadcn compatibility).",
  "file": "src/components/divider.tsx",
  "props": {
    "orientation": { "type": "\"horizontal\" | \"vertical\"", "default": "horizontal" }
  }
}
```

**Step 2: Commit**

```bash
git add packages/venuscn/registry.json
git commit -m "chore(venuscn): add new components to registry.json"
```

---

## Task 10: Update README.md

Update the component documentation to reflect all new components.

**Files:**
- Modify: `packages/venuscn/README.md`

**Step 1: Add new component sections**

Add to the appropriate tables in README.md:

Under **Navigation & Layout:**
```
| `Breadcrumb` | Breadcrumb navigation with separator and ellipsis |
```

Under **UI Elements:**
```
| `Popover` | Floating content panel (click-triggered) |
| `DropdownMenu` | Action menu with items, checkboxes, radios, submenus |
| `Accordion` | Collapsible content sections |
| `Separator` | Alias for Divider (shadcn compatibility) |
```

Add new **Feedback** section:
```
### Feedback

| Component | Description |
|-----------|-------------|
| `Toaster` / `toast` | Toast notifications via Sonner |
| `Spinner` | Animated loading indicator |
| `EmptyState` | Placeholder for empty lists with heading, description, and action |
```

Add usage example for Toast:
```tsx
import { Toaster, toast } from "@contentstack/venuscn"

// In your root layout (once):
<Toaster />

// Anywhere in your app:
toast.success("Entry published successfully")
toast.error("Failed to save changes")
toast("Processing your request...")
```

Add usage example for DropdownMenu:
```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button
} from "@contentstack/venuscn"
import { MoreVertical } from "lucide-react"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="sm">
      <MoreVertical className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Step 2: Update the component count**

Update any mentions of "27 components" to the new total.

**Step 3: Commit**

```bash
git add packages/venuscn/README.md
git commit -m "docs(venuscn): document new components in README"
```

---

## Final Verification

After all tasks are complete:

```bash
# Full library build
cd packages/venuscn && pnpm build

# Verify exports
node -e "const v = require('./dist/index.cjs'); console.log(Object.keys(v).sort().join('\n'))"

# Verify no hardcoded hex in new components
grep -rn '#[0-9a-fA-F]\{3,6\}' src/components/breadcrumb.tsx src/components/dropdown-menu.tsx src/components/popover.tsx src/components/sonner.tsx src/components/accordion.tsx src/components/empty-state.tsx src/components/spinner.tsx
```

Expected: Clean build, all new component names in export list, zero hardcoded hex values.
