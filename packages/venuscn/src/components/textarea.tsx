import * as React from "react";
import { cn } from '../lib/utils';

/** Venus Design System Textarea Component */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Displays a red error border. Mutually exclusive with `success`.
   * @default false
   */
  error?: boolean;
  /** Displays a green success border. Mutually exclusive with `error`.
   * @default false
   */
  success?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base styles
          "w-full min-h-[80px] px-3 py-2 rounded-[4px]",
          "text-base font-normal text-gray-800",
          "placeholder:text-gray-500",
          "transition-all duration-150",
          "focus:outline-none",
          "resize-vertical",

          // Border and background
          "border border-input-border bg-white",
          "shadow-[inset_0_0_0_1px_#FFFFFF]",

          // Default state
          !error && !success && !disabled && [
            "hover:!border-primary hover:shadow-input-focus",
            "focus:!border-primary focus:shadow-input-focus"
          ],

          // Error state
          error && !disabled && [
            "border-danger",
            "focus:border-danger focus:ring-[3px] focus:ring-danger/10"
          ],

          // Success state
          success && !disabled && [
            "border-success",
            "focus:border-success focus:ring-[3px] focus:ring-success/10"
          ],

          // Disabled state
          disabled && [
            "bg-surface-gray text-gray-500 cursor-not-allowed",
            "border-gray-300"
          ],

          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
