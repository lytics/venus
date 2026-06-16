import * as React from "react";
import { cn } from "../lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Main axis direction.
   * - `"vertical"` – `flex-col` (default)
   * - `"horizontal"` – `flex-row`
   * @default "vertical"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Gap between children, mapped to Tailwind gap scale (gap-1 … gap-12).
   * @default 4
   */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Cross-axis alignment (`align-items`).
   * Accepts any Tailwind `items-*` value without the prefix, e.g. `"center"`.
   */
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * Main-axis justification (`justify-content`).
   * Accepts any Tailwind `justify-*` value without the prefix.
   */
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  /**
   * Whether children should wrap onto multiple lines.
   * @default false
   */
  wrap?: boolean;
  /** Content to arrange. */
  children: React.ReactNode;
}

const gapClasses: Record<number, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
};

const alignClasses: Record<string, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const justifyClasses: Record<string, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "vertical",
      gap = 4,
      align,
      justify,
      wrap = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "horizontal" ? "flex-row" : "flex-col",
          gapClasses[gap],
          align && alignClasses[align],
          justify && justifyClasses[justify],
          wrap && "flex-wrap",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Stack.displayName = "Stack";
