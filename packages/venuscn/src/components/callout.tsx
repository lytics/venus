import * as React from "react";
import { cn } from "../lib/utils";

/**
 * Venus Design System Callout Component
 *
 * Pixel-matches the legacy Venus `Info` component.
 * All values from Chrome devtools getComputedStyle on the live Storybook.
 */

export type CalloutVariant = "info" | "warning" | "success" | "danger";

/* Icon column backgrounds — info/default from computed styles, others from legacy CSS source */
const variantIconBg: Record<CalloutVariant, string> = {
  info:    "bg-[#a9b6cb]",
  success: "bg-[#007a52]",
  warning: "bg-[#ffae0a]",
  danger:  "bg-[#d62400]",
};

/* Filled SVG icons matching legacy Venus — fill="#fff", NOT stroked outlines */
const VariantIcon: Record<CalloutVariant, React.ReactNode> = {
  info: (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm-.128-3.063A1.372 1.372 0 0 1 7 12.566V8.673a1.372 1.372 0 0 1 2.744 0v3.892c0 .758-.614 1.373-1.372 1.373zm1.352-8.684c0 .69-.606 1.253-1.352 1.253-.746 0-1.352-.562-1.352-1.253C7.02 4.562 7.626 4 8.372 4c.746 0 1.352.562 1.352 1.253z" fill="#fff" />
    </svg>
  ),
  success: (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm3.854-10.354a.5.5 0 0 0-.708-.708L7.5 10.086 5.354 7.94a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l4.5-4.5z" fill="#fff" />
    </svg>
  ),
  warning: (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.134 1.5a1.5 1.5 0 0 1 2.732 0l5.866 11a1.5 1.5 0 0 1-1.366 2.125H2.634A1.5 1.5 0 0 1 1.268 12.5l5.866-11zM8.5 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75zm0 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" fill="#fff" />
    </svg>
  ),
  danger: (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM6.354 5.646a.5.5 0 1 0-.708.708L7.793 8.5l-2.147 2.146a.5.5 0 0 0 .708.708L8.5 9.207l2.146 2.147a.5.5 0 0 0 .708-.708L9.207 8.5l2.147-2.146a.5.5 0 0 0-.708-.708L8.5 7.793 6.354 5.646z" fill="#fff" />
    </svg>
  ),
};

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style.
   * - `"info"` — gray-blue icon column (#a9b6cb)
   * - `"success"` — green icon column (#007a52)
   * - `"warning"` — amber icon column (#ffae0a)
   * - `"danger"` — red icon column (#d62400)
   * @default "info"
   */
  variant?: CalloutVariant;
  /** Optional bold title above description. */
  title?: string;
  /** Body text. */
  description?: string;
  /** Show dismiss button. @default false */
  dismissible?: boolean;
  /** Dismiss callback. */
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
    return (
      <div
        ref={ref}
        role="note"
        className={cn(
          /* Container — exact computed: flex row, bg #f7f9fc, border 1px solid #a9b6cb, radius 10px, padding-right 20px */
          "flex flex-row",
          "bg-[#f7f9fc] border border-[#a9b6cb] rounded-[10px]",
          "pr-5",
          className
        )}
        {...props}
      >
        {/* Icon column — exact computed: w 40px, bg #a9b6cb, radius 8px 0 0 8px, flex center */}
        <div
          className={cn(
            "flex items-center justify-center shrink-0",
            "w-5 self-stretch rounded-l-[9px]",
            variantIconBg[variant],
          )}
        >
          {VariantIcon[variant]}
        </div>

        {/* Content — exact computed: color #222, font 13px/20px 400 Inter, padding 10px 0, margin-left 10px */}
        <div className="flex-1 min-w-0 py-[10px] ml-[10px] text-[13px] font-normal text-[#222] leading-[20px]">
          {title && (
            <p className="font-semibold mb-0.5">{title}</p>
          )}
          {description && (
            <p>{description}</p>
          )}
          {children}
        </div>

        {/* Dismiss — positioned inside the padding-right area */}
        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="shrink-0 self-center ml-auto text-[#a9b6cb] hover:text-[#475161] transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Callout.displayName = "Callout";
