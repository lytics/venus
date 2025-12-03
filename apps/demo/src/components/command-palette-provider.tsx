"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Key,
  CreditCard,
  Bot,
  Palette,
  BookOpen,
  Compass,
  Zap,
  User,
  Search,
  Bell,
  Lock,
  Code,
  Bug,
  Atom,
  LayoutDashboard
} from "lucide-react";

interface CommandPaletteContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
  onTableBuilderRequest?: () => void;
  setTableBuilderHandler: (handler: () => void) => void;
}

const CommandPaletteContext = React.createContext<CommandPaletteContextType | undefined>(undefined);

// Simplified command palette with essential items
const navigationCommands = [
  { icon: Atom, label: "Hey", href: "/dashboard" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard-page" },
  { icon: Palette, label: "Components", href: "/primatives" },
];

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [tableBuilderHandler, setTableBuilderHandler] = React.useState<(() => void) | undefined>();
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const setTableBuilderHandlerCallback = React.useCallback((handler: () => void) => {
    setTableBuilderHandler(() => handler);
  }, []);

  // Global keyboard shortcut for command palette only
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Open command palette (⌘K)
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const handleSelect = React.useCallback((href?: string) => {
    setIsOpen(false);
    if (href) {
      router.push(href);
    }
  }, [router]);

  return (
    <CommandPaletteContext.Provider value={{
      isOpen,
      setIsOpen,
      toggle,
      onTableBuilderRequest: tableBuilderHandler,
      setTableBuilderHandler: setTableBuilderHandlerCallback
    }}>
      {children}

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Navigation */}
          <CommandGroup heading="Navigation">
            {navigationCommands.map((command) => (
              <CommandItem
                key={command.href}
                onSelect={() => handleSelect(command.href)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <command.icon className="h-4 w-4" />
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette() {
  const context = React.useContext(CommandPaletteContext);
  if (context === undefined) {
    throw new Error("useCommandPalette must be used within a CommandPaletteProvider");
  }
  return context;
}