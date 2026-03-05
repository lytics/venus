"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from '../lib/utils';

/**
 * Venus Design System Tabs — compound component built on Radix UI Tabs.
 *
 * Usage:
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab One</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab Two</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content for tab one</TabsContent>
 *   <TabsContent value="tab2">Content for tab two</TabsContent>
 * </Tabs>
 * ```
 *
 * - `Tabs` — Root container. Accepts `defaultValue` or controlled `value` + `onValueChange`.
 * - `TabsList` — Pill-shaped container (24px border-radius) with a purple outline border.
 * - `TabsTrigger` — Individual tab button (34px height, 12px font). Active state: purple text on light purple bg.
 * - `TabsContent` — Panel rendered when its `value` matches the active tab. Has 16px top margin.
 *
 * Props are inherited from Radix UI `@radix-ui/react-tabs` — see Radix docs for full API.
 */

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // Wrapper with outline border - from computed styles
      "inline-flex items-center gap-1",
      "p-1", // 4px padding inside the border
      "bg-white",
      "border border-primary-muted rounded-3xl", // 24px border radius
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Base styles - from computed styles showing 34px height
      "inline-flex items-center justify-center whitespace-nowrap",
      "h-[34px] px-3", // Height 34px, horizontal padding 12px
      "text-xs font-semibold leading-none", // 12px font
      "rounded-3xl", // 24px border radius to match wrapper
      "transition-all duration-150",

      // Focus outline - browser default blue outline on click (right against the element, extends beyond container)
      "focus:outline focus:outline-2 focus:outline-primary/50",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/50",

      // Default (inactive) state - rgb(110, 107, 134)
      "bg-transparent text-subtle",

      // Hover state
      "hover:bg-surface-purple/50",

      // Active/Selected state - rgb(248, 246, 255) bg, rgb(108, 92, 231) text
      "data-[state=active]:bg-surface-purple data-[state=active]:text-primary",

      // Disabled state
      "disabled:pointer-events-none disabled:opacity-50",

      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
