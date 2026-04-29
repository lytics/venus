import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System List Component — structured list with compound sub-components */

// ── List (root) ────────────────────────────────────────────────────────────

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, children, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("w-full list-none p-0 m-0", className)}
      {...props}
    >
      {children}
    </ul>
  )
);
List.displayName = "List";

// ── ListItem ───────────────────────────────────────────────────────────────

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Optional icon or avatar rendered at the start of the row. */
  icon?: React.ReactNode;
  /** Primary text label. */
  itemTitle?: React.ReactNode;
  /** Supporting description text. */
  description?: React.ReactNode;
  /** Action element (e.g. button or icon) rendered at the trailing edge. */
  action?: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, itemTitle, description, action, className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        "flex items-center gap-3 px-4 py-3",
        "border-b border-[rgba(113,128,150,0.2)] last:border-b-0",
        "bg-white hover:bg-gray-50 transition-colors duration-100",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="shrink-0 flex items-center justify-center text-body">
          {icon}
        </span>
      )}
      <span className="flex-1 min-w-0">
        {itemTitle && (
          <span className="block text-sm font-medium text-title truncate">
            {itemTitle}
          </span>
        )}
        {description && (
          <span className="block text-xs text-body truncate mt-0.5">
            {description}
          </span>
        )}
        {children}
      </span>
      {action && (
        <span className="shrink-0 flex items-center">
          {action}
        </span>
      )}
    </li>
  )
);
ListItem.displayName = "ListItem";
