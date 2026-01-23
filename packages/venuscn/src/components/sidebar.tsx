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
