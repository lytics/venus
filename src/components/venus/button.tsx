import * as React from "react";
import { cn } from "@/lib/utils";

/** Venus Design System Button Component */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "small" | "regular" | "large";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "regular", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2",
          "font-bold rounded-[4px] transition-all duration-150",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "cursor-pointer disabled:cursor-not-allowed",
          "whitespace-nowrap",

          // Variant styles
          variant === "primary" && [
            "bg-primary text-white shadow-sm border-0",
            "hover:bg-primary-hover hover:shadow-md",
            "active:bg-primary-active active:shadow-sm",
            "focus:ring-primary/50",
            "disabled:bg-primary disabled:text-white disabled:opacity-50 disabled:shadow-none"
          ],

          variant === "secondary" && [
            "bg-[#F9F8FF] text-primary border !border-primary",
            "hover:bg-primary-light hover:!border-primary-active hover:text-primary-active",
            "active:bg-primary-light",
            "focus:ring-primary/50",
            "disabled:bg-transparent disabled:text-gray-400 disabled:!border-gray-400"
          ],

          variant === "ghost" && [
            "bg-transparent text-primary border-0",
            "hover:bg-gray-100 hover:text-primary-active",
            "active:bg-gray-200",
            "focus:ring-primary/50",
            "disabled:bg-transparent disabled:text-gray-400"
          ],

          variant === "danger" && [
            "bg-red-500 text-white shadow-sm border-0",
            "hover:bg-red-600 hover:shadow-md",
            "active:bg-red-700 active:shadow-sm",
            "focus:ring-red-500/50",
            "disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"
          ],

          // Size styles
          size === "small" && "py-[5px] px-4 text-sm gap-1.5",
          size === "regular" && "h-10 px-4 text-base",
          size === "large" && "py-2 px-4 text-lg",

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
