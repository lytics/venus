import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System Switch Component — accessible toggle with label */

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "onClick"> {
  /** Whether the switch is on. */
  checked?: boolean;
  /** Callback fired when the switch state changes. */
  onCheckedChange?: (checked: boolean) => void;
  /** Label text displayed beside the toggle. */
  label?: string;
  /** Supporting description shown below the label. */
  description?: string;
  /** When true, the switch cannot be interacted with. @default false */
  disabled?: boolean;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked = false,
      onCheckedChange,
      label,
      description,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const uid = React.useId();
    const switchId = id ?? uid;

    const handleClick = () => {
      if (!disabled) onCheckedChange?.(!checked);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!disabled) onCheckedChange?.(!checked);
      }
    };

    return (
      <div className={cn("flex items-start gap-3", className)}>
        {/* Track */}
        <button
          ref={ref}
          id={switchId}
          role="switch"
          type="button"
          aria-checked={checked}
          aria-disabled={disabled}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={cn(
            // Track
            "relative inline-flex shrink-0 items-center",
            "h-5 w-9 rounded-full",
            "transition-colors duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            checked ? "bg-primary" : "bg-gray-300"
          )}
          {...props}
        >
          {/* Thumb */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm",
              "transition-transform duration-200",
              checked ? "translate-x-[18px]" : "translate-x-[2px]"
            )}
          />
        </button>

        {/* Label + description */}
        {(label || description) && (
          <label
            htmlFor={switchId}
            className={cn(
              "cursor-pointer",
              disabled && "cursor-not-allowed opacity-50"
            )}
          >
            {label && (
              <span className="block text-sm font-medium text-title">
                {label}
              </span>
            )}
            {description && (
              <span className="block text-xs text-body mt-0.5">
                {description}
              </span>
            )}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";
