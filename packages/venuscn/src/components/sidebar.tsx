import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Venus Design System Sidebar — compound component.
 *
 * Usage: `<Sidebar>` > `<SidebarSearch>` + `<SidebarSection>` > `<SidebarNav>` or `<SidebarCheckboxList>`.
 * Renders a 240px-wide left sidebar with gray background and right border.
 */
export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onToggle'> {
  /** Whether the sidebar is collapsed (width 0, hidden). @default false */
  collapsed?: boolean;
  /** Callback fired when the toggle button is clicked. Receives the new collapsed state.
   * If omitted, the toggle button is not rendered.
   */
  onToggle?: (collapsed: boolean) => void;
  /** Sidebar content — typically SidebarSearch, SidebarSection, SidebarNav, or SidebarCheckboxList. */
  children?: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, onToggle, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col bg-surface-gray border-r border-input-border",
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
              "bg-input-border border border-primary",
              "flex items-center justify-center",
              "hover:bg-primary-muted transition-colors"
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none" className="text-primary">
              {collapsed ? (
                <path d="M11.47 5.47a.75.75 0 011.06 0l10 10a.75.75 0 010 1.06l-10 10a.75.75 0 11-1.06-1.06L20.94 16l-9.47-9.47a.75.75 0 010-1.06z" fill="currentColor"/>
              ) : (
                <path d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="currentColor"/>
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
  /** Section heading text. Rendered at 14px, semibold, capitalized. */
  title: string;
  /** Whether the section can be collapsed/expanded by clicking the title. @default false */
  collapsible?: boolean;
  /** Initial expanded state when collapsible. @default true */
  defaultOpen?: boolean;
  /** Section content — typically SidebarNav or SidebarCheckboxList. */
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
            "text-sm font-semibold text-heading capitalize",
            collapsible && "cursor-pointer hover:text-primary",
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
                "text-subtle transition-transform duration-200",
                isOpen ? "rotate-0" : "-rotate-90"
              )}
            >
              <path
                d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"
                fill="currentColor"
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
  /** Display text for the nav link. */
  label: string;
  /** URL the nav link points to. */
  href: string;
  /** Whether this nav item is currently active. Active items show a purple left border and purple text. @default false */
  active?: boolean;
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of navigation items. Each renders as an `<a>` with 40px height and a 3px left border accent. */
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
                ? "text-primary border-l-[3px] border-primary bg-primary-subtle"
                : "text-heading hover:text-primary border-l-[3px] border-transparent"
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

/** Search input for the sidebar. 34px height, search icon on left. Default placeholder "Search". */
export interface SidebarSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const SidebarSearch = React.forwardRef<HTMLInputElement, SidebarSearchProps>(
  ({ className, placeholder = "Search", ...props }, ref) => {
    return (
      <div className="relative px-2.5 mb-2">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full h-[34px] pl-8 pr-2.5 rounded",
            "text-sm font-normal text-gray-800",
            "placeholder:text-gray-500",
            "border border-input-border bg-white",
            "focus:outline-none focus:border-primary",
            "transition-colors duration-150",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

SidebarSearch.displayName = "SidebarSearch";

export interface SidebarCheckboxItem {
  /** Unique identifier for the checkbox item. Used as the value in the `selected` array. */
  id: string;
  /** Display text for the checkbox label. */
  label: string;
}

export interface SidebarCheckboxListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of checkbox items to render. */
  items: SidebarCheckboxItem[];
  /** Array of currently selected item IDs (controlled). */
  selected: string[];
  /** Callback fired with the updated selected IDs array when a checkbox is toggled. */
  onChange: (selected: string[]) => void;
}

export const SidebarCheckboxList = React.forwardRef<HTMLDivElement, SidebarCheckboxListProps>(
  ({ className, items, selected, onChange, ...props }, ref) => {
    const handleToggle = (id: string) => {
      if (selected.includes(id)) {
        onChange(selected.filter((s) => s !== id));
      } else {
        onChange([...selected, id]);
      }
    };

    return (
      <div ref={ref} className={cn("flex flex-col gap-1 px-2.5", className)} {...props}>
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-2 py-1 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={() => handleToggle(item.id)}
              className={cn(
                "w-[13px] h-[13px] rounded-sm cursor-pointer",
                "border border-heading",
                "checked:bg-primary checked:border-primary",
                "focus:outline-none focus:ring-2 focus:ring-primary/20"
              )}
            />
            <span className="text-base font-normal text-black">
              {item.label}
            </span>
          </label>
        ))}
      </div>
    );
  }
);

SidebarCheckboxList.displayName = "SidebarCheckboxList";
