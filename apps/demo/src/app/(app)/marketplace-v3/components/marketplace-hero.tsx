"use client"

export function MarketplaceHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: 372,
        marginBottom: 15,
        background: `url('https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blte9d0c4604984a8a7/All%20collections%20page%20banner') no-repeat 100% 50%, linear-gradient(rgba(255,255,255,0.48), rgba(221,227,238,0.48))`,
      }}
    >
      <div className="pt-[80px] pl-[60px] max-w-[600px]">
        <h2 className="text-[34px] font-semibold leading-[42.5px] text-[#212121]">
          Contentstack Marketplace:<br />
          Where composable happens
        </h2>
        <p className="text-[16px] font-normal leading-[24px] text-[#475161] mt-[12px]">
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project&apos;s journey from concept to launch.
        </p>
        <p className="text-[14px] font-normal text-[#475161] mt-[12px]">
          New to Marketplace? Use{" "}
          <a href="https://www.contentstack.com/docs/developers/marketplace-platform-guides/" target="_blank" className="text-[#6C5CE7] hover:underline">
            these
          </a>{" "}
          guides to get started.
        </p>
      </div>
    </section>
  )
}
