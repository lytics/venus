import * as React from "react";
import { cn } from '../lib/utils';

/** Venus Design System Table Component */

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /** Adds border wrapper with rounded corners - for card-style tables */
  bordered?: boolean;
  /** Full-page table with no wrapper, no rounded corners - for page-level tables */
  full?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, bordered, full, ...props }, ref) => {
    const table = (
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-base bg-background", className)}
        {...props}
      />
    );

    // Full variant: no wrapper at all, table fills container
    if (full) {
      return table;
    }

    // Bordered variant: card-style with rounded corners
    if (bordered) {
      return (
        <div className="border border-border rounded-lg bg-background">
          <div className="overflow-auto relative">
            {table}
          </div>
        </div>
      );
    }

    // Default: simple overflow wrapper
    return <div className="w-full overflow-auto">{table}</div>;
  }
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "bg-transparent",
      // Disable row hover in header
      "[&>tr]:hover:bg-transparent",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("bg-background", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-transparent font-medium",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors group",
      "hover:bg-surface-gray",
      "data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Makes column sticky to left or right edge. Right sticky includes shadow effect. */
  sticky?: "left" | "right";
  /** Sets minimum width for the column (e.g. "300px") */
  minWidth?: string;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, sticky, minWidth, style, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-10 py-2 px-5 text-left align-middle",
        "text-sm font-bold text-heading dark:text-gray-300",
        "[&:has([role=checkbox])]:pr-5 [&:has([role=checkbox])]:border-l-0",
        // Use left borders to avoid double borders with sticky columns
        "border-l border-border first:border-l-0",
        "border-b border-border",
        // Sticky left
        sticky === "left" && "sticky left-0 bg-background z-10",
        // Sticky right with shadow
        sticky === "right" && "sticky right-0 bg-background z-10 venus-table-sticky-shadow",
        className
      )}
      style={{ minWidth, ...style }}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Makes column sticky to left or right edge. Right sticky includes shadow effect. */
  sticky?: "left" | "right";
  /** Sets minimum width for the column (e.g. "300px") */
  minWidth?: string;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, sticky, minWidth, style, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "py-2 px-5 align-middle",
        "text-base text-foreground",
        "[&:has([role=checkbox])]:pr-5 [&:has([role=checkbox])]:border-l-0",
        // Use left borders to avoid double borders with sticky columns
        "border-l border-border first:border-l-0",
        // Sticky left - inherits row hover via group
        sticky === "left" && "sticky left-0 bg-background group-hover:bg-surface-gray z-10",
        // Sticky right with shadow - inherits row hover via group
        sticky === "right" && "sticky right-0 bg-background group-hover:bg-surface-gray z-10 venus-table-sticky-shadow",
        className
      )}
      style={{ minWidth, ...style }}
      {...props}
    />
  )
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
