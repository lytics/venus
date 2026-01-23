"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarSection,
  SidebarNav,
  SidebarSearch,
  SidebarCheckboxList,
} from "@contentstack/venuscn";

const collections = [
  { label: "All Collections", href: "/marketplace", active: false },
  { label: "Apps", href: "/marketplace/apps", active: false },
  { label: "Starters", href: "/marketplace/starters", active: false },
  { label: "Content Models", href: "/marketplace/content-models", active: false },
  { label: "Recipes", href: "/marketplace/recipes", active: false },
];

const categories = [
  { id: "ab-testing", label: "A/B Testing" },
  { id: "ai-assistance", label: "AI Assistance" },
  { id: "analytics", label: "Analytics" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "automate", label: "Automate" },
  { id: "automations", label: "Automations" },
  { id: "commerce", label: "Commerce" },
  { id: "communication", label: "Communication" },
  { id: "content-management", label: "Content Management" },
  { id: "dam", label: "DAM" },
  { id: "development", label: "Development" },
  { id: "formatting", label: "Formatting" },
  { id: "hosting", label: "Hosting" },
  { id: "identity-management", label: "Identity Management" },
];

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const navItems = collections.map((item) => ({
    ...item,
    active: pathname === item.href,
  }));

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} onToggle={setCollapsed} className="relative shrink-0">
        <SidebarSection title="Collections" collapsible defaultOpen>
          <SidebarNav items={navItems} />
        </SidebarSection>

        {/* Divider between sections */}
        <div className="mx-2.5 my-2 border-t border-[#EDF1F7]" />

        <SidebarSection title="Categories" collapsible defaultOpen>
          <SidebarSearch placeholder="Search Categories" />
          <SidebarCheckboxList
            items={categories}
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />
        </SidebarSection>
      </Sidebar>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
