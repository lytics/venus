import * as React from "react";
import { cn } from "../lib/utils";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  children?: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, onToggle, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col bg-[#F7F9FC] border-r border-[#DDE3EE]",
          "transition-[width] duration-200 ease-in-out",
          collapsed ? "w-0 overflow-hidden" : "w-60",
          className
        )}
        style={{ paddingTop: 20, paddingBottom: 15 }}
        {...props}
      >
        {children}
        {onToggle && (
          <button
            type="button"
            onClick={() => onToggle(!collapsed)}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -right-3",
              "w-6 h-6 rounded-full",
              "bg-[#DDE3EE] border border-[#6C5CE7]",
              "flex items-center justify-center",
              "hover:bg-[#E8E4FC] transition-colors"
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
              {collapsed ? (
                <path d="M11.47 5.47a.75.75 0 011.06 0l10 10a.75.75 0 010 1.06l-10 10a.75.75 0 11-1.06-1.06L20.94 16l-9.47-9.47a.75.75 0 010-1.06z" fill="#6C5CE7"/>
              ) : (
                <path d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#6C5CE7"/>
              )}
            </svg>
          </button>
        )}
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, title, collapsible = false, defaultOpen = true, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    return (
      <div ref={ref} className={cn("px-2.5", className)} {...props}>
        <button
          type="button"
          onClick={() => collapsible && setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between w-full py-2",
            // Verified: 14px/600/#475161 (not 12px/700/#222222 as originally spec'd)
            "text-sm font-semibold text-[#475161] capitalize",
            collapsible && "cursor-pointer hover:text-[#6C5CE7]",
            !collapsible && "cursor-default"
          )}
          disabled={!collapsible}
        >
          <span>{title}</span>
          {collapsible && (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              className={cn(
                "transition-transform duration-200",
                isOpen ? "rotate-0" : "-rotate-90"
              )}
            >
              <path
                d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"
                fill="#647696"
              />
            </svg>
          )}
        </button>
        {isOpen && <div className="pb-2">{children}</div>}
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";

export interface SidebarNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[];
}

export const SidebarNav = React.forwardRef<HTMLElement, SidebarNavProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn("flex flex-col", className)} {...props}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center h-10 px-2.5",
              "text-base font-normal leading-4",
              "transition-colors duration-150",
              item.active
                ? "text-[#6C5CE7] border-l-[3px] border-[#6C5CE7] bg-[#F0EDFC]"
                : "text-[#475161] hover:text-[#6C5CE7] border-l-[3px] border-transparent"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }
);

SidebarNav.displayName = "SidebarNav";
