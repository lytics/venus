import * as React from "react";
import { cn } from '../lib/utils';

/** Venus Design System Radio Component */

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Optional text label displayed to the right of the radio button. 16px, normal weight.
   * Use the same `name` prop on multiple Radio components to group them.
   */
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, disabled, id, ...props }, ref) => {
    const generatedId = React.useId();
    const radioId = id || `radio-${generatedId}`;

    return (
      <div className="flex items-center gap-2">
        <div className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            disabled={disabled}
            className={cn(
              // Base styles
              "peer w-4 h-4 rounded-full cursor-pointer",
              "border transition-all duration-150",
              "appearance-none",
              "focus:outline-none",
              "relative",

              // Default state
              "border-heading bg-white",
              "hover:border-primary",

              // Checked state (border only)
              "checked:border-primary",
              "checked:hover:border-primary-hover",

              // Inner dot styles via pseudo-element
              "after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full",
              "after:bg-primary after:top-1/2 after:left-1/2",
              "after:-translate-x-1/2 after:-translate-y-1/2",
              "after:scale-0 after:transition-transform after:duration-150",
              "checked:after:scale-100",

              // Focus state
              "focus:ring-[3px] focus:ring-primary/10",

              // Disabled state
              "disabled:bg-surface-gray disabled:border-gray-300 disabled:cursor-not-allowed",
              "disabled:after:bg-gray-400",

              className
            )}
            {...props}
          />
        </div>
        {label && (
          <label
            htmlFor={radioId}
            className={cn(
              "text-base font-normal text-ink cursor-pointer select-none",
              disabled && "text-gray-500 cursor-not-allowed"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";
