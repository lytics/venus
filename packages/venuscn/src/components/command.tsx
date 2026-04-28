import * as React from "react";
import { cn } from "../lib/utils";

/**
 * Venus Design System Command Component — searchable command palette.
 * Built without cmdk dependency; uses a simple filter-by-string pattern.
 */

// ── Context ────────────────────────────────────────────────────────────────

interface CommandContextValue {
  query: string;
  setQuery: (q: string) => void;
}

const CommandContext = React.createContext<CommandContextValue>({
  query: "",
  setQuery: () => undefined,
});

// ── Command (root) ─────────────────────────────────────────────────────────

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ className, children, ...props }, ref) => {
    const [query, setQuery] = React.useState("");
    return (
      <CommandContext.Provider value={{ query, setQuery }}>
        <div
          ref={ref}
          role="dialog"
          aria-label="Command palette"
          className={cn(
            "flex flex-col overflow-hidden rounded-[4px] border border-[rgba(113,128,150,0.3)] bg-white shadow-lg",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </CommandContext.Provider>
    );
  }
);
Command.displayName = "Command";

// ── CommandInput ───────────────────────────────────────────────────────────

export interface CommandInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onValueChange?: (value: string) => void;
}

export const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, onValueChange, ...props }, ref) => {
    const { query, setQuery } = React.useContext(CommandContext);
    return (
      <div className="flex items-center gap-2 border-b border-[rgba(113,128,150,0.2)] px-3 py-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-[#6B7280]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={ref}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onValueChange?.(e.target.value);
          }}
          className={cn(
            "flex-1 bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF]",
            "focus:outline-none",
            className
          )}
          {...props}
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => { setQuery(""); onValueChange?.(""); }}
            className="shrink-0 text-[#9CA3AF] hover:text-[#6B7280]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);
CommandInput.displayName = "CommandInput";

// ── CommandList ────────────────────────────────────────────────────────────

export interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="listbox"
      className={cn("max-h-72 overflow-y-auto overflow-x-hidden py-1", className)}
      {...props}
    />
  )
);
CommandList.displayName = "CommandList";

// ── CommandEmpty ───────────────────────────────────────────────────────────

export interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, children, ...props }, ref) => {
    const { query } = React.useContext(CommandContext);
    if (!query) return null;
    return (
      <div
        ref={ref}
        className={cn("py-6 text-center text-sm text-[#6B7280]", className)}
        {...props}
      >
        {children ?? "No results found."}
      </div>
    );
  }
);
CommandEmpty.displayName = "CommandEmpty";

// ── CommandGroup ───────────────────────────────────────────────────────────

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

export const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ heading, className, children, ...props }, ref) => (
    <div ref={ref} role="group" aria-label={heading} className={cn("px-1 py-1", className)} {...props}>
      {heading && (
        <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
          {heading}
        </div>
      )}
      {children}
    </div>
  )
);
CommandGroup.displayName = "CommandGroup";

// ── CommandItem ────────────────────────────────────────────────────────────

export interface CommandItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  /** The string value used for filtering. Falls back to text content if omitted. */
  value?: string;
  disabled?: boolean;
  onSelect?: (value: string) => void;
}

export const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(
  ({ value, disabled, onSelect, className, children, ...props }, ref) => {
    const { query } = React.useContext(CommandContext);
    const filterTarget = value ?? (typeof children === "string" ? children : "");
    const hidden = query && !filterTarget.toLowerCase().includes(query.toLowerCase());

    if (hidden) return null;

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={false}
        aria-disabled={disabled}
        tabIndex={disabled ? undefined : 0}
        className={cn(
          "flex cursor-pointer select-none items-center gap-2 rounded-[4px] px-3 py-2 text-sm text-[#111827]",
          "transition-colors duration-100",
          "hover:bg-[#edf1f7] focus:bg-[#edf1f7] focus:outline-none",
          disabled && "pointer-events-none opacity-40",
          className
        )}
        onClick={() => !disabled && onSelect?.(filterTarget)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onSelect?.(filterTarget);
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandItem.displayName = "CommandItem";

// ── CommandSeparator ───────────────────────────────────────────────────────

export interface CommandSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

export const CommandSeparator = React.forwardRef<HTMLHRElement, CommandSeparatorProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("my-1 border-[rgba(113,128,150,0.2)]", className)}
      {...props}
    />
  )
);
CommandSeparator.displayName = "CommandSeparator";
