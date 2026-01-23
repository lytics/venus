import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketplaceSectionProps {
  title: string;
  description?: string;
  viewAllHref?: string;
  children: React.ReactNode;
  className?: string;
}

export function MarketplaceSection({
  title,
  description,
  viewAllHref,
  children,
  className,
}: MarketplaceSectionProps) {
  return (
    <section className={cn("py-8 px-6", className)}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-[#222222] leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm font-normal text-[#475161] leading-[25px] mt-1">
              {description}
            </p>
          )}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-sm font-normal text-[#6C5CE7] hover:underline"
          >
            View all
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-6">
        {children}
      </div>
    </section>
  );
}
