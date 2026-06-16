import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   Popover — Contextual overlay built on @radix-ui/react-popover

   Usage:
     <Popover>
       <PopoverTrigger asChild><Button>Open</Button></PopoverTrigger>
       <PopoverContent>Content here</PopoverContent>
     </Popover>
───────────────────────────────────────────────────────────────────────────── */

/** Root Popover controller — manages open/close state. */
export const Popover = PopoverPrimitive.Root;
Popover.displayName = "Popover";

/* ─── PopoverTrigger ──────────────────────────────────────────────────────── */

/** The element that opens the popover when interacted with. */
export const PopoverTrigger = PopoverPrimitive.Trigger;
PopoverTrigger.displayName = "PopoverTrigger";

/* ─── PopoverContent ──────────────────────────────────────────────────────── */

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> {
  /**
   * Preferred side for the floating panel.
   * @default "bottom"
   */
  side?: "top" | "right" | "bottom" | "left";
  /**
   * Alignment relative to the trigger.
   * @default "center"
   */
  align?: "start" | "center" | "end";
  /**
   * Distance in pixels between the trigger and the popover.
   * @default 8
   */
  sideOffset?: number;
  /** Content to render inside the popover panel. */
  children: React.ReactNode;
}

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, side = "bottom", align = "center", sideOffset = 8, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      side={side}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        // Layout
        "z-50 w-72 p-4",
        // Visual — white bg, 6px radius, custom shadow
        "bg-white rounded-md border border-border",
        "shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
        // Animation — fade + translateY
        "origin-[var(--radix-popover-transform-origin)]",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:translate-y-0 data-[state=open]:data-[side=bottom]:slide-in-from-top-2",
        "data-[side=top]:data-[state=open]:slide-in-from-bottom-2",
        "data-[side=left]:data-[state=open]:slide-in-from-right-2",
        "data-[side=right]:data-[state=open]:slide-in-from-left-2",
        className,
      )}
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

/* ─── PopoverClose ────────────────────────────────────────────────────────── */

/** Button that closes the enclosing popover when clicked. */
export const PopoverClose = PopoverPrimitive.Close;
PopoverClose.displayName = "PopoverClose";
