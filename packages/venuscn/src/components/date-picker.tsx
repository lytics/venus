import * as React from "react";
import { cn } from "../lib/utils";

/** Styled native date input */

export interface DatePickerProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> {
  /** Current date value in YYYY-MM-DD format. */
  value?: string;
  /** Callback when the date changes. */
  onChange?: (value: string) => void;
  /** Minimum selectable date in YYYY-MM-DD format. */
  min?: string;
  /** Maximum selectable date in YYYY-MM-DD format. */
  max?: string;
  /** When true, the input is disabled. @default false */
  disabled?: boolean;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ value, onChange, min, max, disabled, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="date"
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "h-10 w-full rounded-[4px] border border-[rgba(113,128,150,0.3)] bg-white",
          "px-3 text-sm text-title font-normal",
          "transition-colors duration-150",
          "hover:border-primary",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
          "placeholder:text-placeholder",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
          // Native date input calendar icon color (WebKit)
          "[&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100",
          className,
        )}
        {...props}
      />
    );
  },
);

DatePicker.displayName = "DatePicker";
