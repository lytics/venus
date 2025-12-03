import * as React from "react";
import { cn } from '../lib/utils';
import { Button, type ButtonProps } from "./button";

/** Venus Design System PageHeader Component */

export interface PageHeaderAction {
  label: string;
  onClick: () => void;
  variant?: ButtonProps["variant"];
  disabled?: boolean;
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The page title text */
  title: string;
  /** Optional info icon element to display next to title */
  infoIcon?: React.ReactNode;
  /** Array of action buttons to display on the right */
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
                size="small"
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
