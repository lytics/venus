import { cn } from "@/lib/utils";
import { Button } from "@contentstack/venuscn";
import { Search, ExternalLink, ChevronLeft } from "lucide-react";

interface MarketplaceHeaderBarProps {
  className?: string;
}

export function MarketplaceHeaderBar({ className }: MarketplaceHeaderBarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "px-6 pt-4 pb-5 bg-white border-b border-[#DDE3EE]",
        className
      )}
    >
      {/* Top row: All Collections + Build New App */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center justify-center w-6 h-6 rounded-full border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#F0EDFC] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-base font-semibold text-[#222222] leading-4">All Collections</span>
        </div>

        <Button
          variant="primary"
          size="small"
          className="h-10 px-4 text-base font-semibold gap-2"
        >
          Build New App
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>

      {/* Search bar row - container with border wrapping input + button */}
      <div className="flex items-center border border-[#DDE3EE] rounded max-w-[500px]">
        <input
          type="text"
          placeholder="Search in All Collections"
          className={cn(
            "flex-1 h-[40px] px-4",
            "text-base font-normal text-[#212121]",
            "placeholder:text-[#A0AEC0]",
            "border-0 bg-transparent",
            "focus:outline-none"
          )}
        />
        <button
          type="button"
          className={cn(
            "flex items-center justify-center gap-2",
            "h-[40px] px-4",
            "bg-[#6C5CE7] text-white",
            "text-base font-semibold",
            "rounded",
            "hover:bg-[#5F51D8] transition-colors"
          )}
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </div>
  );
}
