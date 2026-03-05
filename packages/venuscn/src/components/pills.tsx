import * as React from "react";
import { X } from "lucide-react";
import { cn } from '../lib/utils';

/** Venus Design System Pills Component */

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant of the pill.
   * - `"label"` — Rounded rectangle (border-radius 6px), no border by default.
   * - `"chip"` — Fully rounded (pill shape), with border when `shouldHaveBorder` is true.
   * @default "label"
   */
  variant?: "label" | "chip";
  /** Semantic status controlling background and text color.
   * - `"default"` — Gray background, dark text.
   * - `"warning"` — Yellow background, dark yellow text.
   * - `"success"` — Green background, dark green text.
   * - `"danger"` — Red background, dark red text.
   * @default "default"
   */
  status?: "default" | "warning" | "success" | "danger";
  /** Optional icon to display before the text. */
  iconBefore?: React.ReactNode;
  /** Optional icon to display after the text. Hidden when `removable` is true. */
  iconAfter?: React.ReactNode;
  /** Whether the pill shows a remove (X) button. @default false */
  removable?: boolean;
  /** Callback fired when the remove button is clicked. */
  onRemove?: () => void;
  /** Whether the pill is disabled (50% opacity). @default false */
  disabled?: boolean;
  /** Whether the chip variant renders a border. Only applies to `variant="chip"`. @default true */
  shouldHaveBorder?: boolean;
  /** Pill text content. */
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
            return "bg-warning-light text-warning-dark border-pill-warning-border";
          case "success":
            return "bg-success-light text-success-dark border-pill-success-border";
          case "danger":
            return "bg-danger-light text-danger-dark border-pill-danger-border";
          case "default":
          default:
            return "bg-gray-200 text-heading border-pill-default-border";
        }
      } else {
        // Label variant (default) - similar to tags
        switch (status) {
          case "warning":
            return "bg-warning-light text-warning-dark";
          case "success":
            return "bg-success-light text-success-dark";
          case "danger":
            return "bg-danger-light text-danger-dark";
          case "default":
          default:
            return "bg-gray-200 text-heading";
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

/** Multiple Pills Container — renders a flex-wrap row of Pill components.
 * Use `items` for data-driven rendering, or `children` for manual composition.
 */
export interface PillsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of pill data objects. Each is rendered as a `<Pill>`. Ignored when `children` is provided. */
  items?: Array<{
    /** Unique key for the pill. Falls back to array index. */
    id?: string;
    /** Pill label text. */
    text: string;
    /** Icon rendered before the label. */
    iconBefore?: React.ReactNode;
    /** Icon rendered after the label (hidden if removable). */
    iconAfter?: React.ReactNode;
    /** Whether this pill shows a remove button. */
    removable?: boolean;
    /** Callback when this pill's remove button is clicked. */
    onRemove?: () => void;
    /** Callback when this pill is clicked. */
    onClick?: () => void;
  }>;
  /** Visual variant applied to all pills. @default "label" */
  variant?: "label" | "chip";
  /** Semantic status applied to all pills. @default "default" */
  status?: "default" | "warning" | "success" | "danger";
  /** Whether chip-variant pills render borders. @default true */
  shouldHaveBorder?: boolean;
  /** Whether all pills are disabled. @default false */
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
