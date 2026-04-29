import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System EmptyState Component */

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional icon or illustration rendered above the title. */
  icon?: React.ReactNode;
  /** Primary heading text. */
  title: string;
  /** Supporting description text. */
  description?: string;
  /** Call-to-action element rendered below the description. */
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center",
          "mx-auto w-full max-w-[400px] px-4 py-10",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 flex items-center justify-center text-body">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold text-heading leading-tight">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-base font-normal text-body leading-relaxed">
            {description}
          </p>
        )}
        {action && (
          <div className="mt-5">
            {action}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
