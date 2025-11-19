import * as React from "react";
import { cn } from "@/lib/utils";

/** Venus Design System Textarea Component */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
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
          "text-base font-normal text-[#2D3748]",
          "placeholder:text-[#A0AEC0]",
          "transition-all duration-150",
          "focus:outline-none",
          "resize-vertical",

          // Border and background
          "border border-[#DDE3EE] bg-white",
          "shadow-[inset_0_0_0_1px_#FFFFFF]",

          // Default state
          !error && !success && !disabled && [
            "hover:!border-[#6C5CE7] hover:shadow-[inset_0_0_0_1px_#6C5CE7]",
            "focus:!border-[#6C5CE7] focus:shadow-[inset_0_0_0_1px_#6C5CE7]"
          ],

          // Error state
          error && !disabled && [
            "border-[#EF4444]",
            "focus:border-[#EF4444] focus:ring-[3px] focus:ring-[#EF4444]/10"
          ],

          // Success state
          success && !disabled && [
            "border-[#10B981]",
            "focus:border-[#10B981] focus:ring-[3px] focus:ring-[#10B981]/10"
          ],

          // Disabled state
          disabled && [
            "bg-[#F7F9FC] text-[#A0AEC0] cursor-not-allowed",
            "border-[#E3E8EF]"
          ],

          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
