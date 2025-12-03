import * as React from "react";
import { cn } from '../lib/utils';

/**
 * Venus Design System Status Pill Component
 *
 * Extracted from: https://app.contentstack.com Experiences table
 * Extraction date: 2025-11-04
 *
 * This component displays status indicators with a colored dot and text label,
 * matching the exact styling from the Contentstack production application.
 */

export type StatusVariant = "active" | "inactive" | "draft" | "paused" | "error";

export interface StatusPillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status variant determining color scheme */
  status?: StatusVariant;
  /** Custom status text (overrides default status label) */
  children?: React.ReactNode;
}

export const StatusPill = React.forwardRef<HTMLDivElement, StatusPillProps>(
  ({ className, status = "active", children, ...props }, ref) => {
    // Get status-specific styles
    const getStatusStyles = () => {
      switch (status) {
        case "active":
          return {
            container: "bg-[#F5FFFC] border-[#DDE3EE]",
            dot: "bg-[#007A52]",
            text: "Active",
          };
        case "inactive":
          return {
            container: "bg-[#F5F5F5] border-[#DDE3EE]",
            dot: "bg-[#6B7280]",
            text: "Inactive",
          };
        case "draft":
          return {
            container: "bg-[#FEF3C7] border-[#DDE3EE]",
            dot: "bg-[#D97706]",
            text: "Draft",
          };
        case "paused":
          return {
            container: "bg-[#EFF6FF] border-[#DDE3EE]",
            dot: "bg-[#3B82F6]",
            text: "Paused",
          };
        case "error":
          return {
            container: "bg-[#FEE2E2] border-[#DDE3EE]",
            dot: "bg-[#DC2626]",
            text: "Error",
          };
        default:
          return {
            container: "bg-[#F5FFFC] border-[#DDE3EE]",
            dot: "bg-[#007A52]",
            text: "Active",
          };
      }
    };

    const styles = getStatusStyles();
    const displayText = children || styles.text;

    return (
      <div
        ref={ref}
        data-testid="status-tag"
        className={cn(
          // Container - exact extracted values from Active status
          "inline-flex items-center",
          "gap-1", // 4px gap
          "px-2 py-1", // 8px horizontal, 4px vertical padding
          "h-[30px]",
          "rounded-lg", // 8px border radius
          "border",
          styles.container,
          className
        )}
        {...props}
      >
        {/* Status dot - exact extracted values */}
        <span
          className={cn(
            "block",
            "w-3 h-3", // 12px x 12px
            "rounded-full",
            "shrink-0",
            styles.dot
          )}
          aria-hidden="true"
        />

        {/* Status text - exact extracted values */}
        <p
          className={cn(
            "m-0 p-0",
            "text-sm", // 14px
            "font-normal", // 400 weight
            "leading-[21px]",
            "tracking-[0.16px]",
            "text-[#475161]" // Same text color for all statuses
          )}
        >
          {displayText}
        </p>
      </div>
    );
  }
);

StatusPill.displayName = "StatusPill";
