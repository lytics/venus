import * as React from "react";
import { cn } from "../lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Layout orientation of the rule.
   * - `"horizontal"` – full-width horizontal line (default)
   * - `"vertical"` – full-height vertical line; requires a fixed height on the parent
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "border-0 bg-border",
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px self-stretch",
        className,
      )}
      {...props}
    />
  ),
);

Separator.displayName = "Separator";
