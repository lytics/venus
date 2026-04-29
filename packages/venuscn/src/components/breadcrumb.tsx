import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from '../lib/utils';

/* ─────────────────────────────────────────────────────────────────────────────
   Breadcrumb — navigation hierarchy component
   Usage:
     <Breadcrumb>
       <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
       <BreadcrumbSeparator />
       <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
     </Breadcrumb>
───────────────────────────────────────────────────────────────────────────── */

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Screen-reader label for the nav landmark. @default "Breadcrumb" */
  ariaLabel?: string;
  /** Content — typically a list of BreadcrumbItem elements. */
  children: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ ariaLabel = "Breadcrumb", className, children, ...props }, ref) => (
    <nav ref={ref} aria-label={ariaLabel} className={cn("flex", className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-body">
        {children}
      </ol>
    </nav>
  )
);
Breadcrumb.displayName = "Breadcrumb";

/* ─── BreadcrumbItem ──────────────────────────────────────────────────────── */

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Item content — usually a BreadcrumbLink or BreadcrumbPage. */
  children: React.ReactNode;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1", className)} {...props}>
      {children}
    </li>
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

/* ─── BreadcrumbLink ──────────────────────────────────────────────────────── */

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link destination. */
  href?: string;
  /** Link label content. */
  children: React.ReactNode;
}

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, href, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      className={cn(
        "text-sm text-body transition-colors duration-150",
        "hover:text-primary hover:underline",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:rounded-sm",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
);
BreadcrumbLink.displayName = "BreadcrumbLink";

/* ─── BreadcrumbSeparator ─────────────────────────────────────────────────── */

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Custom separator content. Defaults to a ChevronRight icon.
   * Pass a string like `"/"` for text separators.
   */
  children?: React.ReactNode;
}

export const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("text-body/50 select-none", className)}
      {...props}
    >
      {children ?? <ChevronRight className="h-3.5 w-3.5" />}
    </span>
  )
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

/* ─── BreadcrumbPage ──────────────────────────────────────────────────────── */

export interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Content of the current (non-clickable) breadcrumb page. */
  children: React.ReactNode;
}

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-current="page"
      aria-disabled="true"
      className={cn("text-sm text-body cursor-default select-none", className)}
      {...props}
    >
      {children}
    </span>
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
