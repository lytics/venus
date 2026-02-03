"use client"

import { ContentHeader } from "./components/content-header"
import { MarketplaceHero } from "./components/marketplace-hero"
import { MarketplaceSection } from "./components/marketplace-section"
import { AppCard } from "./components/app-card"

/* -------------------------------------------------------------------------- */
/*  Placeholder helpers                                                        */
/* -------------------------------------------------------------------------- */

/** SVG data-URI that renders a gradient banner — used when CDN images aren't reachable */
function gradientBanner(from: string, to: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="320"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${from}"/><stop offset="100%" stop-color="${to}"/></linearGradient></defs><rect width="600" height="320" fill="url(#g)"/></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/** Colored icon placeholder with initials */
function IconPlaceholder({
  initials,
  bg,
}: {
  initials: string
  bg: string
}) {
  return (
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-sm"
      style={{ background: bg }}
    >
      {initials}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Sample data — matches production Contentstack Marketplace                  */
/* -------------------------------------------------------------------------- */

const APPS = [
  {
    title: "AI Assistant",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0a670d7637404ccd/ai-assistant.svg",
    initials: "AI",
    bg: "#6C5CE7",
  },
  {
    title: "Algolia",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5871b2603c70eed1/algolia.svg",
    initials: "Al",
    bg: "#5468FF",
  },
  {
    title: "Automate",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5d8ee/automate.svg",
    initials: "Au",
    bg: "#00B894",
  },
]

const STARTERS = [
  { title: "Kickstart Next.js", from: "#6C5CE7", to: "#A29BFE" },
  { title: "Kickstart NuxtJS", from: "#00B894", to: "#55EFC4" },
  { title: "React Starter", from: "#0984E3", to: "#74B9FF" },
]

const CONTENT_MODELS = [
  { title: "Hero Banner", from: "#E17055", to: "#FAB1A0" },
  { title: "Website Homepage", from: "#6C5CE7", to: "#A29BFE" },
  { title: "Blog Landing Page", from: "#00CEC9", to: "#81ECEC" },
]

const RECIPES = [
  { title: "Backup Entries to AWS S3", initials: "S3", bg: "#FF7675" },
  { title: "Send Notifications to Slack Channel", initials: "Sl", bg: "#FDCB6E" },
  { title: "Translate Content using Smartling", initials: "Sm", bg: "#00B894" },
]

/* -------------------------------------------------------------------------- */
/*  App icon with CDN fallback                                                 */
/* -------------------------------------------------------------------------- */

function AppIcon({
  src,
  initials,
  bg,
  alt,
}: {
  src: string
  initials: string
  bg: string
  alt: string
}) {
  return (
    <picture>
      {/* Try the CDN image first; on error the placeholder shows instead */}
      <img
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
        onError={(e) => {
          // Replace broken image with coloured placeholder
          const target = e.currentTarget
          target.style.display = "none"
          const parent = target.parentElement
          if (parent) {
            const div = document.createElement("div")
            div.className =
              "w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-sm"
            div.style.background = bg
            div.textContent = initials
            parent.appendChild(div)
          }
        }}
      />
    </picture>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function MarketplaceV2Page() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <ContentHeader />

      <div className="flex-1">
        {/* Hero */}
        <MarketplaceHero />

        {/* ----------------------------------------------------------------- */}
        {/*  Apps Section                                                      */}
        {/* ----------------------------------------------------------------- */}
        <MarketplaceSection
          title="Apps"
          description="Marketplace apps are installable, ready-to-use applications. These are handpicked apps, and you can install them in your stack with a few steps. To start using it, select the one you want to use, click on Install App."
          viewAllLabel="View All Apps"
        >
          {APPS.map((app) => (
            <AppCard
              key={app.title}
              variant="icon"
              title={app.title}
              subtitle="Stack App"
              icon={
                <AppIcon
                  src={app.iconSrc}
                  initials={app.initials}
                  bg={app.bg}
                  alt={app.title}
                />
              }
            />
          ))}
        </MarketplaceSection>

        {/* ----------------------------------------------------------------- */}
        {/*  Starters Section                                                  */}
        {/* ----------------------------------------------------------------- */}
        <MarketplaceSection
          title="Starters"
          description="Starters are ready-to-use, installable sample apps built on top of Contentstack. You can try them out by selecting one from the list and clicking on Install Template."
          viewAllLabel="View All Starters"
        >
          {STARTERS.map((s) => (
            <AppCard
              key={s.title}
              variant="banner"
              title={s.title}
              bannerSrc={gradientBanner(s.from, s.to)}
            />
          ))}
        </MarketplaceSection>

        {/* ----------------------------------------------------------------- */}
        {/*  Content Models Section                                            */}
        {/* ----------------------------------------------------------------- */}
        <MarketplaceSection
          title="Content Models"
          description="Content Models are ready-to-use, installable sample content models built on top of Contentstack. You can try them out by selecting one from the list and clicking on Import Content Model."
          viewAllLabel="View All Content Models"
        >
          {CONTENT_MODELS.map((m) => (
            <AppCard
              key={m.title}
              variant="banner"
              title={m.title}
              bannerSrc={gradientBanner(m.from, m.to)}
            />
          ))}
        </MarketplaceSection>

        {/* ----------------------------------------------------------------- */}
        {/*  Recipes Section                                                   */}
        {/* ----------------------------------------------------------------- */}
        <MarketplaceSection
          title="Recipes"
          description="Recipes allow you to automate your business workflows to streamline tasks and eliminate manual efforts. You can try them out by selecting one from the list and importing it into your organization."
          viewAllLabel="View All Recipes"
        >
          {RECIPES.map((r) => (
            <AppCard
              key={r.title}
              variant="icon"
              title={r.title}
              icon={<IconPlaceholder initials={r.initials} bg={r.bg} />}
            />
          ))}
        </MarketplaceSection>

        {/* ----------------------------------------------------------------- */}
        {/*  Bottom "Can't find?" banner                                       */}
        {/* ----------------------------------------------------------------- */}
        <section className="mx-6 mb-10 rounded-lg px-8 py-7 flex items-center gap-8 bg-[#F0EDFF]">
          <div className="flex-1">
            <p className="text-base leading-6 text-[#222]">
              <span className="font-semibold">
                Can&apos;t find what you&apos;re looking for?
              </span>{" "}
              Marketplace lists all your favorite apps and starters that are
              publicly available for use. If you can&apos;t find what you&apos;re
              looking for, you can send us a request mentioning what you&apos;re
              looking for by clicking on the button below.
            </p>
          </div>
          <button className="shrink-0 h-10 px-5 rounded-md border-2 border-[#6C5CE7] text-[#6C5CE7] text-sm font-semibold hover:bg-[#6C5CE7]/5 transition-colors duration-150 cursor-pointer whitespace-nowrap">
            Submit Request
          </button>
        </section>
      </div>
    </div>
  )
}
