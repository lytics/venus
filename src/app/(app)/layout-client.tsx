"use client"

import { ReactNode } from "react";
import { TopNav } from "@/components/top-nav";

/**
 * App Layout Client Component
 *
 * CRITICAL ARCHITECTURE:
 * - Receives defaultOpen from server component (cookie value)
 * - Lives at layout level, persists across all app page navigation
 * - SidebarProvider manages state, AppSidebar renders once
 * - Page changes only swap SidebarInset children, sidebar state untouched
 *
 * Why this fixes all three issues:
 * 1. No hydration mismatch - server and client agree on initial state
 * 2. No navigation flash - component doesn't remount on navigation
 * 3. Overlays work immediately - no useLayoutEffect tricks needed
 *
 * NOTE: ContentWidthProvider is now in root layout to support
 * command palette and other global features.
 *
 * HYDRATION NOTE: When switching between app/www modes via config editor,
 * a hydration warning may occur. This is expected and safe - React will
 * reconcile on the client. The warning is suppressed at the root layout level.
 */
export function AppLayoutClient({
  children,
}: {
  children: ReactNode;
  defaultOpen?: boolean; // Keep for compatibility but unused in top nav mode
}) {
  // Currently using top nav only - sidebar and www modes disabled
  return (
    <div className="h-screen flex flex-col bg-background w-full" suppressHydrationWarning>
      <TopNav />
      <main className="flex-1 w-full bg-white overflow-y-auto" suppressHydrationWarning>
        {children}
      </main>
    </div>
  );
}
