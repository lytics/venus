import { cn } from "@/lib/utils";
import { Button, Input } from "@contentstack/venuscn";
import { Search, ExternalLink } from "lucide-react";

interface MarketplaceHeaderBarProps {
  className?: string;
}

export function MarketplaceHeaderBar({ className }: MarketplaceHeaderBarProps) {
  return (
    <div
      className={cn(
        "sticky top-14 z-10",
        "flex items-center justify-between gap-4",
        "h-[90px] px-6 bg-[#F7F9FC] border-b border-[#DDE3EE]",
        className
      )}
    >
      <div className="flex items-center gap-2 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0AEC0]" />
          <Input
            type="text"
            placeholder="Search marketplace..."
            className="pl-10"
          />
        </div>
        <Button variant="primary">
          Search
        </Button>
      </div>

      <Button
        variant="primary"
        size="small"
        className="h-8 text-sm gap-1"
      >
        Build New App
        <ExternalLink className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
