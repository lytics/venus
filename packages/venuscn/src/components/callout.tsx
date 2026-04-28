import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System Callout Component — full-width informational banner */

export type CalloutVariant = "info" | "warning" | "success" | "danger";

const variantStyles: Record<
  CalloutVariant,
  { border: string; bg: string; icon: React.ReactNode; iconColor: string }
> = {
  info: {
    border: "border-l-[#3B82F6]",
    bg: "bg-[#EFF6FF]",
    iconColor: "text-[#3B82F6]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  warning: {
    border: "border-l-[#F59E0B]",
    bg: "bg-[#FFFBEB]",
    iconColor: "text-[#F59E0B]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    ),
  },
  success: {
    border: "border-l-[#10B981]",
    bg: "bg-[#ECFDF5]",
    iconColor: "text-[#10B981]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
  danger: {
    border: "border-l-[#EF4444]",
    bg: "bg-[#FEF2F2]",
    iconColor: "text-[#EF4444]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </svg>
    ),
  },
};

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style of the callout. @default "info" */
  variant?: CalloutVariant;
  /** Optional bold title displayed above the description. */
  title?: string;
  /** Supporting description text. */
  description?: string;
  /** When true, renders a dismiss (×) button. @default false */
  dismissible?: boolean;
  /** Callback fired when the dismiss button is clicked. */
  onDismiss?: () => void;
}

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      variant = "info",
      title,
      description,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { border, bg, icon, iconColor } = variantStyles[variant];

    return (
      <div
        ref={ref}
        role="note"
        className={cn(
          "flex items-start gap-3 rounded-sm px-4 py-3",
          "border-l-4",
          border,
          bg,
          className
        )}
        {...props}
      >
        <span className={cn("mt-0.5 shrink-0", iconColor)}>{icon}</span>

        <div className="flex-1 min-w-0">
          {title && (
            <p className="text-sm font-semibold text-[#111827] mb-0.5">{title}</p>
          )}
          {description && (
            <p className="text-sm text-[#374151]">{description}</p>
          )}
          {children}
        </div>

        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="shrink-0 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Callout.displayName = "Callout";
