import * as React from "react";
import { cn } from "@/lib/utils";

/** Venus Design System Divider Component */

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  text?: string;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", text, ...props }, ref) => {
    if (text && orientation === "horizontal") {
      return (
        <div className={cn("flex items-center gap-4 my-4", className)}>
          <hr className="flex-1 h-px bg-[#E3E8EF] border-0" />
          <span className="text-[13px] text-[#A0AEC0] whitespace-nowrap">{text}</span>
          <hr className="flex-1 h-px bg-[#E3E8EF] border-0" />
        </div>
      );
    }

    if (orientation === "vertical") {
      return (
        <hr
          ref={ref}
          className={cn(
            "w-px h-full bg-[#E3E8EF] border-0 mx-4",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(
          "h-px bg-[#E3E8EF] border-0 my-4",
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
