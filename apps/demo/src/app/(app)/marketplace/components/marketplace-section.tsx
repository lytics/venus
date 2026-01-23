import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketplaceSectionProps {
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export function MarketplaceSection({
  title,
  description,
  viewAllHref,
  viewAllLabel,
  children,
  className,
}: MarketplaceSectionProps) {
  return (
    <section className={cn("py-8 px-6", className)}>
      {/* Title row with dashed line and View All link */}
      <div className="flex items-center gap-4 mb-2">
        <h4 className="text-[22px] font-semibold text-[#222222] leading-[33px] shrink-0">
          {title}
        </h4>
        <div className="flex-1 border-t border-dashed border-[#DDE3EE]" />
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-sm font-normal text-[#6C5CE7] hover:underline shrink-0"
          >
            {viewAllLabel || `View All ${title}`}
          </Link>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-base font-normal text-[#475161] leading-[25px] mb-6">
          {description}
        </p>
      )}

      {/* Cards grid */}
      <div className="flex flex-wrap gap-6">
        {children}
      </div>
    </section>
  );
}
