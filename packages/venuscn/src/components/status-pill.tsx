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
  /** Status variant determining the colored dot and background.
   * - `"active"` — Green dot, light green background. Label: "Active".
   * - `"inactive"` — Gray dot, gray background. Label: "Inactive".
   * - `"draft"` — Yellow dot, light yellow background. Label: "Draft".
   * - `"paused"` — Blue dot, light blue background. Label: "Paused".
   * - `"error"` — Red dot, light red background. Label: "Error".
   * @default "active"
   */
  status?: StatusVariant;
  /** Custom status text. Overrides the default label derived from the `status` variant. */
  children?: React.ReactNode;
}

export const StatusPill = React.forwardRef<HTMLDivElement, StatusPillProps>(
  ({ className, status = "active", children, ...props }, ref) => {
    // Get status-specific styles
    const getStatusStyles = () => {
      switch (status) {
        case "active":
          return {
            container: "bg-status-live-bg border-input-border",
            dot: "bg-status-live",
            text: "Active",
          };
        case "inactive":
          return {
            container: "bg-surface-gray border-input-border",
            dot: "bg-body",
            text: "Inactive",
          };
        case "draft":
          return {
            container: "bg-warning-light border-input-border",
            dot: "bg-warning-dark",
            text: "Draft",
          };
        case "paused":
          return {
            container: "bg-info-light border-input-border",
            dot: "bg-info",
            text: "Paused",
          };
        case "error":
          return {
            container: "bg-danger-light border-input-border",
            dot: "bg-danger-dark",
            text: "Error",
          };
        default:
          return {
            container: "bg-status-live-bg border-input-border",
            dot: "bg-status-live",
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
            "text-heading" // Same text color for all statuses
          )}
        >
          {displayText}
        </p>
      </div>
    );
  }
);

StatusPill.displayName = "StatusPill";
