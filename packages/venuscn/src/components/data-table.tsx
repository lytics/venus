import * as React from "react";
import { cn } from "../lib/utils";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./table";

/** Enhanced table with sorting + column definitions */

export interface DataTableColumn<TData = Record<string, unknown>> {
  /** Unique key matching a field in the data object. */
  key: string;
  /** Header label shown in the column header. */
  header: string;
  /** When true, clicking the header will call onSort with this column's key. @default false */
  sortable?: boolean;
  /** Custom render function for cells in this column. Receives the row value and full row object. */
  render?: (value: unknown, row: TData) => React.ReactNode;
  /** Optional column min-width passed to TableHead/TableCell. */
  minWidth?: string;
}

export interface DataTableProps<
  TData = Record<string, unknown>,
> extends React.HTMLAttributes<HTMLDivElement> {
  /** Column definitions. */
  columns: DataTableColumn<TData>[];
  /** Array of data rows. Each object should have keys matching column `key` fields. */
  data: TData[];
  /** Currently sorted column key, if any. */
  sortKey?: string;
  /** Current sort direction. @default "asc" */
  sortDirection?: "asc" | "desc";
  /** Callback fired when a sortable column header is clicked. */
  onSort?: (key: string) => void;
  /** When true, applies alternating row backgrounds. @default false */
  striped?: boolean;
}

const SortIcon = ({ active, direction }: { active: boolean; direction: "asc" | "desc" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cn(
      "inline-block ml-1 shrink-0 transition-colors",
      active ? "text-primary" : "text-placeholder",
    )}
  >
    {active && direction === "desc" ? <path d="m6 9 6 6 6-6" /> : <path d="m18 15-6-6-6 6" />}
  </svg>
);

export function DataTable<TData = Record<string, unknown>>({
  columns,
  data,
  sortKey,
  sortDirection = "asc",
  onSort,
  striped = false,
  className,
  ...props
}: DataTableProps<TData>) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                minWidth={col.minWidth}
                onClick={col.sortable && onSort ? () => onSort(col.key) : undefined}
                className={cn(
                  col.sortable && onSort && "cursor-pointer select-none hover:bg-surface-gray",
                )}
              >
                <span className="inline-flex items-center">
                  {col.header}
                  {col.sortable && (
                    <SortIcon
                      active={sortKey === col.key}
                      direction={sortKey === col.key ? sortDirection : "asc"}
                    />
                  )}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIdx) => (
            <TableRow key={rowIdx} className={cn(striped && rowIdx % 2 === 1 && "bg-gray-50")}>
              {columns.map((col) => {
                const value = (row as Record<string, unknown>)[col.key];
                return (
                  <TableCell key={col.key} minWidth={col.minWidth}>
                    {col.render ? col.render(value, row) : (value as React.ReactNode)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length} className="py-10 text-center text-sm text-body">
                No data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

DataTable.displayName = "DataTable";
