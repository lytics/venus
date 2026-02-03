import { cn } from "@/lib/utils";

interface MarketplaceHeroProps {
  className?: string;
}

export function MarketplaceHero({ className }: MarketplaceHeroProps) {
  return (
    <div
      className={cn(
        "w-full min-h-[372px] mb-[15px] flex items-start",
        className
      )}
      style={{
        background: `
          url('https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blte9d0c4604984a8a7/All%20collections%20page%20banner') 100% 50% / auto no-repeat scroll,
          linear-gradient(rgba(255, 255, 255, 0.48), rgba(221, 227, 238, 0.48)) 100% 50% / auto no-repeat scroll
        `,
        backgroundColor: "rgba(0,0,0,0)",
      }}
    >
      <div className="max-w-[600px] mt-[80px] ml-[64px] flex flex-col">
        <h2 className="text-[#212121] text-[34px] font-semibold leading-[42.5px] tracking-[-0.00646px]">
          Contentstack Marketplace: <br />
          Where composable happens
        </h2>

        <p className="mt-[12px] text-[#475161] text-[16px] leading-[24px]">
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project's journey from concept to launch.
        </p>

        <p className="flex items-center mt-[12px] text-[#6E6B86] text-[12px] leading-[24px]">
          <span>New to Marketplace? Use&nbsp;</span>
          <a
            href="https://www.contentstack.com/docs/developers/marketplace-platform-guides/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6C5CE7] px-[4px] hover:underline transition-all"
          >
            these
          </a>
          <span>&nbsp;guides to get started.</span>
        </p>
      </div>
    </div>
  );
}
