import { cn } from "@/lib/utils";

interface MarketplaceHeroProps {
  title?: string;
  description?: string;
  className?: string;
}

export function MarketplaceHero({
  title = "Extend your Contentstack capabilities",
  description = "Browse and install apps, starters, content models, and recipes to enhance your content management workflow.",
  className,
}: MarketplaceHeroProps) {
  return (
    <div
      className={cn(
        "relative h-[372px] border-b border-[#EDF1F7]",
        "flex flex-col justify-center px-12",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.48), rgba(221,227,238,0.48)),
          url('https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt5a4ccf55fa6fc69f/605dd7e1baa74f78fe4c27f1/All_collections_page_banner.svg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[34px] font-semibold text-[#212121] leading-[42.5px] mb-4">
        {title}
      </h1>
      <p className="text-base font-normal text-[#475161] leading-6 max-w-2xl">
        {description}
      </p>
    </div>
  );
}
