"use client";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { VenusLogo } from "@/components/venus-logo"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { projectConfig } from "@/project.config"

const adminNavigationTabs = [
  { id: "primatives", label: "Primatives", href: "/primatives" },
  { id: "colors", label: "Colors", href: "/colors" },
  { id: "text", label: "Text", href: "/text" },
  { id: "icons", label: "Icons", href: "/icons" },
]

const extrasItems: Array<{ id: string; label: string; href: string; isDivider?: boolean }> = [
  { id: "app", label: "App", href: "/dashboard" },
]

export function AdminNav() {
  const pathname = usePathname();
  const [navHeight, setNavHeight] = React.useState<string>(projectConfig.navigation.topNav.height)

  // Read configuration
  const { sticky } = projectConfig.navigation.topNav;
  const showBorder = false; // Admin nav doesn't use border by default

  // Load height from localStorage and listen for changes
  React.useEffect(() => {
    // Load from localStorage on mount
    const savedHeight = localStorage.getItem('topnav-height');
    if (savedHeight) {
      setNavHeight(savedHeight);
    }

    // Listen for height changes from config drawer
    const handleHeightChange = (event: CustomEvent) => {
      setNavHeight(event.detail.height);
    };

    window.addEventListener('topnav-height-changed', handleHeightChange as EventListener);

    return () => {
      window.removeEventListener('topnav-height-changed', handleHeightChange as EventListener);
    };
  }, []);

  return (
    <div className={cn(
      "bg-background",
      showBorder && "border-b",
      sticky && "sticky top-0 z-50"
    )}>
      <div className="w-full px-6">
        <div className="flex items-center" style={{ height: navHeight }}>
          {/* Left: Logo (edge to edge) */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <VenusLogo size={24} className="text-foreground" />
            </Link>
          </div>

          {/* Center: Fixed navigation area */}
          <div className="flex-1 flex justify-center px-6">
            <div className="w-full flex items-center justify-between">
              {/* Navigation Tabs - left aligned */}
              <nav className="flex items-center gap-3">
                {adminNavigationTabs.map((tab) => {
                  const isActive = pathname === tab.href;
                  return (
                    <Button
                      key={tab.id}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "h-8 px-4 text-sm",
                        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        isActive && "bg-sidebar-active text-sidebar-active-foreground font-medium"
                      )}
                      asChild
                    >
                      <Link href={tab.href}>{tab.label}</Link>
                    </Button>
                  );
                })}
              </nav>

              {/* Right side actions */}
              <div className="flex items-center gap-2">{/* Extras menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {extrasItems.map((item) => {
                      if (item.isDivider) {
                        return <DropdownMenuSeparator key={item.id} />;
                      }
                      return (
                        <DropdownMenuItem key={item.id} asChild>
                          <Link href={item.href}>
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}