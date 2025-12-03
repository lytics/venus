import * as React from "react";
import { cn } from '../lib/utils';

/** Venus Design System Toggle Component */

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, disabled, id, checked, ...props }, ref) => {
    const generatedId = React.useId();
    const toggleId = id || `toggle-${generatedId}`;

    return (
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center group cursor-pointer w-[34px] h-[18px]">
          <input
            ref={ref}
            type="checkbox"
            id={toggleId}
            checked={checked}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          {/* Track */}
          <div
            className={cn(
              // Track - Storybook specs: 34px × 18px
              "absolute inset-0 rounded-[48px]",
              "transition-colors duration-150",

              // Default state - Storybook: #A9B6CB
              "bg-[#A9B6CB]",

              // Checked state - Storybook: #6C5CE7
              "peer-checked:bg-[#6C5CE7]",

              // Focus state
              "peer-focus:ring-[3px] peer-focus:ring-[#6C5CE7]/10",

              // Disabled state
              "peer-disabled:bg-[#E3E8EF] peer-disabled:cursor-not-allowed",

              className
            )}
          />
          {/* Thumb */}
          <div
            className={cn(
              // Thumb - Storybook specs: 12px × 12px, positioned 3px from left/bottom
              "absolute w-3 h-3 rounded-full bg-white",
              "bottom-[3px] left-[3px]",
              "transition-all duration-100",
              // Storybook checked: translateX(16px)
              "peer-checked:translate-x-[16px]",
              // Hover shadow - Storybook specs
              "group-hover:shadow-[0.1825rem_0_0.25rem_rgba(34,34,34,0.3)]",
              "peer-checked:group-hover:shadow-[0.1825rem_0_0.25rem_rgba(34,34,34,0.6)]"
            )}
          />
        </label>
        {label && (
          <label
            htmlFor={toggleId}
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

Toggle.displayName = "Toggle";
