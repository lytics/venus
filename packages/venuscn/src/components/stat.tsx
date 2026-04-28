import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System Stat Component — metric display for dashboards */

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The primary metric value displayed in large text. */
  value: string | number;
  /** Label describing what the metric measures. */
  label: string;
  /** Change string e.g. "+12%" or "-3.4%". */
  change?: string;
  /** Trend direction — controls change text color. */
  trend?: "up" | "down" | "neutral";
  /** Optional icon rendered in the top-right area. */
  icon?: React.ReactNode;
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ value, label, change, trend = "neutral", icon, className, ...props }, ref) => {
    const changeColor =
      trend === "up"
        ? "text-green-600"
        : trend === "down"
        ? "text-red-500"
        : "text-[#6B7280]";

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col gap-1 rounded-[4px] border border-[rgba(113,128,150,0.2)] bg-white p-4",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="absolute right-4 top-4 text-[#6B7280]">{icon}</div>
        )}
        <span className="text-[30px] font-bold leading-none text-[#111827]">
          {value}
        </span>
        <span className="text-sm font-normal text-[#6B7280]">{label}</span>
        {change && (
          <span className={cn("text-sm font-medium", changeColor)}>{change}</span>
        )}
      </div>
    );
  }
);

Stat.displayName = "Stat";
