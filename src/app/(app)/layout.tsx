import { ReactNode } from "react";
import { cookies } from "next/headers";
import { AppLayoutClient } from "./layout-client";

/**
 * App Layout - Server Component that reads cookie
 *
 * CRITICAL ARCHITECTURE:
 * - This is a SERVER component that reads the sidebar cookie
 * - Passes cookie value to client component to avoid hydration mismatch
 * - Client component manages sidebar state without SSR/hydration issues
 *
 * Why this works:
 * - Server reads cookie, client receives same value on initial render
 * - No mismatch between server HTML and client hydration
 * - Sidebar state persists across navigation (client component doesn't remount)
 */
export default async function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const sidebarCookie = cookieStore.get("sidebar_state");
  const defaultOpen = sidebarCookie?.value === "true";

  return <AppLayoutClient defaultOpen={defaultOpen}>{children}</AppLayoutClient>;
}
