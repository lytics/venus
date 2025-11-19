import * as React from "react";
import { cn } from "@/lib/utils";

/** Venus Design System Tag Component V2 */

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tag text content */
  children: React.ReactNode;
  /** Whether the tag can be removed */
  removable?: boolean;
  /** Callback when tag is removed */
  onRemove?: () => void;
  /** Whether the tag is disabled */
  disabled?: boolean;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, children, removable = false, onRemove, disabled = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base wrapper styles - V2 specifications from Storybook
          "group inline-flex items-center h-5",
          "bg-[#EDF1F7] rounded-[4px]",
          // Border is transparent by default, shows on hover
          "border border-transparent",
          "text-[12px] font-medium leading-[12px] text-[#475161]",
          "transition-all duration-150",

          // Wrapper hover state (entire tag)
          !disabled && "hover:bg-[#647696] hover:border-[#647696] hover:text-white",

          // Disabled state
          disabled && "opacity-50 cursor-not-allowed",

          className
        )}
        {...props}
      >
        {/* Text content with padding */}
        <span className={cn(
          "px-[5px]",
          disabled && "pointer-events-none"
        )}>
          {children}
        </span>

        {/* Close button - only shown when removable */}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            disabled={disabled}
            className={cn(
              "inline-flex items-center justify-center",
              "h-[18px] w-[18px]", // Inset by 1px (20px tag height - 2px = 18px)
              "mr-px", // 1px margin on right to inset from edge
              "rounded-r-[3px]", // Slightly smaller radius to match inset
              "transition-colors duration-150",
              "focus:outline-none",
              // Close button specific hover state (darker than wrapper hover)
              !disabled && "hover:!bg-[#475161]",
              disabled && "cursor-not-allowed"
            )}
            aria-label="Remove tag"
          >
            {/* X icon - 8x8 SVG matching Storybook exactly */}
            <svg
              className="w-2 h-2"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1l6 6M1 7l6-6"
                className={cn(
                  "transition-colors duration-150",
                  // Default state - light gray
                  "stroke-[#A9B6CB]",
                  // Parent wrapper hover makes it white
                  "group-hover:stroke-white"
                )}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = "Tag";
