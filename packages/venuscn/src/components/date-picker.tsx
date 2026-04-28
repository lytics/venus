import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System DatePicker Component — styled native date input */

export interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
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
          "px-3 text-sm text-[#111827] font-normal",
          "transition-colors duration-150",
          "hover:border-[#6C5CE7]",
          "focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/50 focus:border-[#6C5CE7]",
          "placeholder:text-[#9CA3AF]",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F9FAFB]",
          // Native date input calendar icon color (WebKit)
          "[&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100",
          className
        )}
        {...props}
      />
    );
  }
);

DatePicker.displayName = "DatePicker";
