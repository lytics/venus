import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Venus Design System Pills Component */

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant of the pill */
  variant?: "label" | "chip";
  /** Status/semantic meaning of the pill */
  status?: "default" | "warning" | "success" | "danger";
  /** Optional icon to display before the text */
  iconBefore?: React.ReactNode;
  /** Optional icon to display after the text */
  iconAfter?: React.ReactNode;
  /** Whether the pill can be removed */
  removable?: boolean;
  /** Callback when remove button is clicked */
  onRemove?: () => void;
  /** Whether the pill is disabled */
  disabled?: boolean;
  /** Whether the pill has a border */
  shouldHaveBorder?: boolean;
  /** Pill text content */
  children: React.ReactNode;
}

export const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  (
    {
      className,
      variant = "label",
      status = "default",
      iconBefore,
      iconAfter,
      removable,
      onRemove,
      disabled,
      shouldHaveBorder = true,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const getStatusStyles = () => {
      if (variant === "chip") {
        // Chip variant has more subtle, rounded styling
        switch (status) {
          case "warning":
            return "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]";
          case "success":
            return "bg-[#D1FAE5] text-[#047857] border-[#A7F3D0]";
          case "danger":
            return "bg-[#FEE2E2] text-[#DC2626] border-[#FECACA]";
          case "default":
          default:
            return "bg-[#EFF2F7] text-[#475161] border-[#D1D5DB]";
        }
      } else {
        // Label variant (default) - similar to tags
        switch (status) {
          case "warning":
            return "bg-[#FEF3C7] text-[#D97706]";
          case "success":
            return "bg-[#D1FAE5] text-[#047857]";
          case "danger":
            return "bg-[#FEE2E2] text-[#DC2626]";
          case "default":
          default:
            return "bg-[#EFF2F7] text-[#475161]";
        }
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-1.5",
          "text-sm font-normal leading-tight",
          "whitespace-nowrap",
          "transition-all duration-150",

          // Variant-specific base styles
          variant === "chip" && "rounded-full px-3 py-1",
          variant === "label" && "rounded-md px-2.5 py-1",

          // Border
          shouldHaveBorder && variant === "chip" && "border",

          // Status styles
          getStatusStyles(),

          // Interactive states
          onClick && !disabled && [
            "cursor-pointer",
            "hover:opacity-80",
            "active:opacity-90"
          ],

          // Disabled state
          disabled && "opacity-50 cursor-not-allowed",

          className
        )}
        onClick={disabled ? undefined : onClick}
        {...props}
      >
        {iconBefore && (
          <span className="inline-flex items-center justify-center w-4 h-4">
            {iconBefore}
          </span>
        )}

        <span>{children}</span>

        {iconAfter && !removable && (
          <span className="inline-flex items-center justify-center w-4 h-4">
            {iconAfter}
          </span>
        )}

        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            disabled={disabled}
            className={cn(
              "w-3.5 h-3.5 p-0 rounded-full",
              "inline-flex items-center justify-center",
              "bg-transparent hover:bg-black/10",
              "transition-colors duration-150",
              "focus:outline-none",
              disabled && "cursor-not-allowed hover:bg-transparent"
            )}
            aria-label="Remove pill"
          >
            <X className="w-2.5 h-2.5" />
          </button>
        )}
      </div>
    );
  }
);

Pill.displayName = "Pill";

/** Multiple Pills Container Component */
export interface PillsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of pill items to display */
  items?: Array<{
    id?: string;
    text: string;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    removable?: boolean;
    onRemove?: () => void;
    onClick?: () => void;
  }>;
  /** Variant for all pills */
  variant?: "label" | "chip";
  /** Status for all pills */
  status?: "default" | "warning" | "success" | "danger";
  /** Whether pills have borders */
  shouldHaveBorder?: boolean;
  /** Whether pills are disabled */
  disabled?: boolean;
  /** Children for manual pill composition */
  children?: React.ReactNode;
}

export const Pills = React.forwardRef<HTMLDivElement, PillsProps>(
  (
    {
      className,
      items,
      variant = "label",
      status = "default",
      shouldHaveBorder = true,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex flex-wrap items-center gap-2", className)}
        {...props}
      >
        {children
          ? children
          : items?.map((item, index) => (
              <Pill
                key={item.id || index}
                variant={variant}
                status={status}
                shouldHaveBorder={shouldHaveBorder}
                disabled={disabled}
                iconBefore={item.iconBefore}
                iconAfter={item.iconAfter}
                removable={item.removable}
                onRemove={item.onRemove}
                onClick={item.onClick}
              >
                {item.text}
              </Pill>
            ))}
      </div>
    );
  }
);

Pills.displayName = "Pills";
