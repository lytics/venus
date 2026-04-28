import * as React from "react";
import { cn } from "../lib/utils";

/** Venus Design System Pagination Component */

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current active page (1-indexed). */
  currentPage: number;
  /** Total number of pages. */
  totalPages: number;
  /** Callback fired when the user selects a new page. */
  onPageChange: (page: number) => void;
}

function buildPageRange(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ currentPage, totalPages, onPageChange, className, ...props }, ref) => {
    const pages = buildPageRange(currentPage, totalPages);

    const btnBase =
      "inline-flex h-8 min-w-[32px] items-center justify-center rounded-[4px] px-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]/50 disabled:cursor-not-allowed disabled:opacity-40";

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        <button
          className={cn(btnBase, "text-[#374151] hover:bg-[#edf1f7]")}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {pages.map((page, i) =>
          page === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="inline-flex h-8 w-8 items-center justify-center text-sm text-[#6B7280]"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={cn(
                btnBase,
                page === currentPage
                  ? "bg-[#6C5CE7] text-white shadow-sm"
                  : "text-[#374151] hover:bg-[#edf1f7]"
              )}
            >
              {page}
            </button>
          )
        )}

        <button
          className={cn(btnBase, "text-[#374151] hover:bg-[#edf1f7]")}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";
