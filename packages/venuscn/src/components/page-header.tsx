import * as React from "react";
import { cn } from '../lib/utils';
import { Button, type ButtonProps } from "./button";

/** Venus Design System PageHeader Component */

export interface PageHeaderAction {
  /** Button label text. */
  label: string;
  /** Click handler for the action button. */
  onClick: () => void;
  /** Button variant — see ButtonProps. @default "primary" */
  variant?: ButtonProps["variant"];
  /** Button size — see ButtonProps. @default "small" */
  size?: ButtonProps["size"];
  /** Whether this action button is disabled. @default false */
  disabled?: boolean;
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page title text. Rendered at 20px, semibold, black. */
  title: string;
  /** Optional icon element (e.g. info tooltip) displayed to the right of the title. */
  infoIcon?: React.ReactNode;
  /** Action buttons rendered on the right side of the header. Each renders as a Venus Button. */
  actions?: PageHeaderAction[];
}

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, infoIcon, actions, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-test-id="cs-page-header"
        className={cn(
          // Base styles - flex container with space-between
          "flex flex-row justify-between items-center",
          // Height matching source (32px)
          "h-8",
          // No padding or border by default
          "p-0",
          className
        )}
        {...props}
      >
        {/* Title Section */}
        <div className="flex items-center gap-2">
          <div
            data-test-id="cs-page-title"
            className={cn(
              // Typography - 20px, 600 weight
              "text-xl font-semibold",
              // Color - black
              "text-black",
              // Font family
              "font-sans"
            )}
          >
            {title}
          </div>
          {infoIcon && (
            <div className="flex items-center">
              {infoIcon}
            </div>
          )}
        </div>

        {/* Actions Section */}
        {actions && actions.length > 0 && (
          <div className="flex items-center gap-2.5">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "primary"}
                size={action.size || "small"}
                onClick={action.onClick}
                disabled={action.disabled}
                aria-label={`action-button-${index}`}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

PageHeader.displayName = "PageHeader";
