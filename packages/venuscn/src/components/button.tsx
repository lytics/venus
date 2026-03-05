import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from '../lib/utils';

/** Venus Design System Button Component */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button.
   * - `"primary"` — Solid purple background, white text. Use for main actions.
   * - `"secondary"` — Purple outline on light purple background. Use for secondary actions.
   * - `"ghost"` — Transparent with purple text. Use for tertiary/inline actions.
   * - `"danger"` — Red background, white text. Use for destructive actions like delete.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Size of the button. Accepts both legacy names and shorthand.
   * - `"small"` / `"sm"` — 32px height, 14px font
   * - `"regular"` / `"md"` — 40px height, 16px font
   * - `"large"` / `"lg"` — 48px height, 18px font
   * Prefer "sm" | "md" | "lg" for new code.
   * @default "regular"
   */
  size?: "sm" | "small" | "md" | "regular" | "lg" | "large";
  /** Button content. */
  children: React.ReactNode;
  /** When true, shows a loading spinner and disables the button. @default false */
  loading?: boolean;
  /** When true, merges props onto the child element instead of rendering a `<button>`.
   * Useful for rendering links with button styling: `<Button asChild><a href="/x">Link</a></Button>`
   * @default false
   */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "regular", className, children, disabled, loading = false, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2",
          "font-bold rounded-[4px] transition-all duration-150",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "cursor-pointer disabled:cursor-not-allowed",
          "whitespace-nowrap",

          // Variant styles
          variant === "primary" && [
            "bg-primary text-white shadow-sm border-0",
            "hover:bg-primary-hover hover:shadow-md",
            "active:bg-primary-active active:shadow-sm",
            "focus:ring-primary/50",
            "disabled:bg-primary disabled:text-white disabled:opacity-50 disabled:shadow-none"
          ],

          variant === "secondary" && [
            "bg-surface-purple text-primary border !border-primary",
            "hover:bg-primary-light hover:!border-primary-active hover:text-primary-active",
            "active:bg-primary-light",
            "focus:ring-primary/50",
            "disabled:bg-transparent disabled:text-gray-400 disabled:!border-gray-400"
          ],

          variant === "ghost" && [
            "bg-transparent text-primary border-0",
            "hover:bg-gray-100 hover:text-primary-active",
            "active:bg-gray-200",
            "focus:ring-primary/50",
            "disabled:bg-transparent disabled:text-gray-400"
          ],

          variant === "danger" && [
            "bg-red-500 text-white shadow-sm border-0",
            "hover:bg-red-600 hover:shadow-md",
            "active:bg-red-700 active:shadow-sm",
            "focus:ring-red-500/50",
            "disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"
          ],

          // Size styles
          (size === "small" || size === "sm") && "py-[5px] px-4 text-sm gap-1.5",
          (size === "regular" || size === "md") && "h-10 px-4 text-base",
          (size === "large" || size === "lg") && "py-2 px-4 text-lg",

          loading && "opacity-75",

          className
        )}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
