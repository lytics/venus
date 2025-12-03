import * as React from "react";
import { Check } from "lucide-react";
import { cn } from '../lib/utils';

/** Venus Design System Checkbox Component */

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
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
              "border-[#475161] bg-white",
              "hover:border-[#6C5CE7]",

              // Checked state
              "checked:bg-[#6C5CE7] checked:border-[#6C5CE7]",
              "checked:hover:bg-[#5F51D8]",

              // Focus state
              "focus:ring-[3px] focus:ring-[#6C5CE7]/10",

              // Disabled state
              "disabled:bg-[#F7F9FC] disabled:border-[#E3E8EF] disabled:cursor-not-allowed",
              "disabled:checked:bg-[#CBD5E0] disabled:checked:border-[#CBD5E0]",

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
              "text-base font-normal text-[#212121] cursor-pointer select-none",
              disabled && "text-[#A0AEC0] cursor-not-allowed"
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
