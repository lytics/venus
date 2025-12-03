import * as React from "react";
import { cn } from '../lib/utils';

/** Venus Design System Radio Component */

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
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
              "border-[#475161] bg-white",
              "hover:border-[#6C5CE7]",

              // Checked state (border only)
              "checked:border-[#6C5CE7]",
              "checked:hover:border-[#5F51D8]",

              // Inner dot styles via pseudo-element
              "after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full",
              "after:bg-[#6C5CE7] after:top-1/2 after:left-1/2",
              "after:-translate-x-1/2 after:-translate-y-1/2",
              "after:scale-0 after:transition-transform after:duration-150",
              "checked:after:scale-100",

              // Focus state
              "focus:ring-[3px] focus:ring-[#6C5CE7]/10",

              // Disabled state
              "disabled:bg-[#F7F9FC] disabled:border-[#E3E8EF] disabled:cursor-not-allowed",
              "disabled:after:bg-[#CBD5E0]",

              className
            )}
            {...props}
          />
        </div>
        {label && (
          <label
            htmlFor={radioId}
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

Radio.displayName = "Radio";
