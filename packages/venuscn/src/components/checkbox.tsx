import * as React from "react";
import { Check } from "lucide-react";
import { cn } from '../lib/utils';

/** Venus Design System Checkbox Component */

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Optional text label displayed to the right of the checkbox. 16px, normal weight. */
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, disabled, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || `checkbox-${generatedId}`;

    return (
      <div className="flex items-center gap-2">
        <div className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            className={cn(
              // Base styles
              "peer w-4 h-4 rounded-[2px] cursor-pointer",
              "border transition-all duration-150",
              "appearance-none",
              "focus:outline-none",

              // Default state
              "border-heading bg-white",
              "hover:border-primary",

              // Checked state
              "checked:bg-primary checked:border-primary",
              "checked:hover:bg-primary-hover",

              // Focus state
              "focus:ring-[3px] focus:ring-primary/10",

              // Disabled state
              "disabled:bg-surface-gray disabled:border-gray-300 disabled:cursor-not-allowed",
              "disabled:checked:bg-gray-400 disabled:checked:border-gray-400",

              className
            )}
            {...props}
          />
          <Check
            className={cn(
              "absolute w-3 h-3 text-white pointer-events-none",
              "opacity-0 peer-checked:opacity-100",
              "transition-opacity duration-150"
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
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

Checkbox.displayName = "Checkbox";
