"use client"

export function MarketplaceHero() {
  return (
    <section
      className="relative min-h-[372px] mb-4 overflow-hidden rounded-lg mx-1"
      style={{
        background: "linear-gradient(135deg, #F7F9FC 0%, #F0EEF9 40%, #E8E5F5 100%)",
      }}
    >
      {/* Background decorative image - right side */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full bg-no-repeat bg-right-top bg-contain pointer-events-none opacity-90"
        style={{
          backgroundImage: "url('https://www.contentstack.com/docs/assets/bltf1108e0010d22fa8/marketplace-hero-illustration.svg')"
        }}
      />

      {/* Text content - left side */}
      <div className="relative z-10 ml-16 mt-20 max-w-[600px]">
        <h2 className="text-[34px] font-semibold leading-[42.5px] text-[#212121] mb-4">
          Contentstack Marketplace:<br />
          Where composable happens
        </h2>
        <p className="text-base leading-6 text-[#475161] mb-4">
          From powerful apps to quick-start templates and automation recipes,
          accelerate your project&apos;s journey from concept to launch.
        </p>
        <p className="text-sm text-[#475161]">
          New to Marketplace? Use{" "}
          <a href="https://www.contentstack.com/docs/marketplace" className="text-[#6C5CE7] hover:underline">
            these guides
          </a>{" "}
          to get started.
        </p>
      </div>
    </section>
  )
}
