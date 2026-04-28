import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System Callout Component
 *
 * Inline informational banner matching legacy Venus `Info` component.
 * Features a solid-colored icon column on the left with content to the right.
 */

export type CalloutVariant = "info" | "warning" | "success" | "danger";

const variantConfig: Record<
  CalloutVariant,
  { iconBg: string; iconStroke: string }
> = {
  info:    { iconBg: "bg-[#a9b6cb]", iconStroke: "black" },
  success: { iconBg: "bg-[#007a52]", iconStroke: "white" },
  warning: { iconBg: "bg-[#ffae0a]", iconStroke: "black" },
  danger:  { iconBg: "bg-[#d62400]", iconStroke: "white" },
};

const VariantIcon: Record<CalloutVariant, React.ReactNode> = {
  info: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  success: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
    </svg>
  ),
  warning: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" />
    </svg>
  ),
  danger: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
};

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style of the callout.
   * - `"info"` — gray-blue icon column (default, general information)
   * - `"success"` — green icon column (confirmations)
   * - `"warning"` — amber icon column (cautions)
   * - `"danger"` — red icon column (errors, destructive warnings)
   * @default "info"
   */
  variant?: CalloutVariant;
  /** Optional bold title displayed above the description. */
  title?: string;
  /** Supporting description text. */
  description?: string;
  /** When true, renders a dismiss button. @default false */
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
    const { iconBg, iconStroke } = variantConfig[variant];

    return (
      <div
        ref={ref}
        role="note"
        className={cn(
          // Exact legacy Venus Info computed styles
          "flex flex-row overflow-hidden",
          "bg-[#f7f9fc] border border-[#a9b6cb] rounded-[10px]",
          "pr-5", // padding-right: 20px
          className
        )}
        {...props}
      >
        {/* Icon column — 40px wide, solid bg, left-rounded 8px */}
        <div
          className={cn(
            "flex items-center justify-center shrink-0",
            "w-10 rounded-l-[8px]",
            iconBg,
          )}
          style={{ color: iconStroke }}
        >
          {VariantIcon[variant]}
        </div>

        {/* Content — font 13px, color #222, padding 10px 0, line-height ~20px */}
        <div className="flex-1 min-w-0 py-[10px] px-4">
          {title && (
            <p className="text-[13px] font-semibold text-[#222] leading-5">{title}</p>
          )}
          {description && (
            <p className="text-[13px] font-normal text-[#222] leading-5">{description}</p>
          )}
          {children}
        </div>

        {/* Dismiss */}
        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="shrink-0 self-start p-2 text-[#647696] hover:text-[#475161] transition-colors"
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
