"use client"

import { ContentHeader } from "./components/content-header"
import { MarketplaceHero } from "./components/marketplace-hero"
import { MarketplaceSection } from "./components/marketplace-section"
import { AppsCard } from "./components/apps-card"
import { StarterCard } from "./components/starter-card"
import { ContentModelCard } from "./components/content-model-card"
import { RecipeCard } from "./components/recipe-card"

/* -------------------------------------------------------------------------- */
/*  CDN icon with colored-initials fallback                                    */
/* -------------------------------------------------------------------------- */

function AppIcon({
  src,
  title,
  initials,
  bg,
}: {
  src: string
  title: string
  initials: string
  bg: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={title}
      style={{ width: 72, height: 72, borderRadius: 10, objectFit: 'contain' }}
      onError={(e) => {
        const el = e.currentTarget
        const parent = el.parentElement
        if (parent) {
          const div = document.createElement('div')
          div.style.cssText = `width:72px;height:72px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:700;background:${bg}`
          div.textContent = initials
          parent.replaceChild(div, el)
        }
      }}
    />
  )
}

/** Dual-icon cover for Recipes: Contentstack logo + service icon side by side */
function RecipeAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    /* Outer ring: gray bg with border matching card bg */
    <div style={{
      width: 65, height: 65, borderRadius: '50%',
      border: '2px solid rgb(247, 249, 252)',
      backgroundColor: 'rgb(237, 241, 247)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Inner white circle */}
      <span style={{
        width: 65, height: 65, borderRadius: '50%',
        backgroundColor: 'rgb(255, 255, 255)',
        overflow: 'hidden' as const,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: 60, height: 60, borderRadius: '50%',
            border: '3px solid rgb(221, 227, 238)',
            backgroundColor: 'rgb(255, 255, 255)',
            padding: 5, overflow: 'clip' as const,
            display: 'block',
          }}
        />
      </span>
    </div>
  )
}

function RecipeIcons({ serviceSrc, serviceAlt }: { serviceSrc: string; serviceAlt: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RecipeAvatar
        src="https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd1599ef0db421778/669f62ddf2780933e9679fae/Logo.svg"
        alt="Contentstack"
      />
      <div style={{ marginLeft: -5 }}>
        <RecipeAvatar src={serviceSrc} alt={serviceAlt} />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Sample data — matches production Contentstack Marketplace                  */
/* -------------------------------------------------------------------------- */

const APPS = [
  {
    title: "AI Assistant",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5c61f/686e9aa015ab2238fb4be288/AI-Assistant.svg",
    initials: "AI",
    bg: "#6C5CE7",
    description: "Create brand and tone-specific content in seconds for your Contentstack entries.",
  },
  {
    title: "Algolia",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0a670d76374019cc/655dd214825f65040ab6d48b/algolia_icon.svg",
    initials: "Al",
    bg: "#5468FF",
    description: "Automatically updates the Algolia index when specific actions are performed on the entries in Contentstack.",
  },
  {
    title: "Automate",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5871b2603c70f5ab/628b5541445f645df4fcefe5/Automations.svg",
    initials: "Au",
    bg: "#00B894",
    description: "Fetch and execute automations from the Automate platform via the Automate app into the Entry Sidebar UI location.",
  },
]

const STARTERS = [
  {
    title: "Kickstart Next.js",
    bannerSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt908e05842d8170f5/68b9bc6546d77b7cd762d0f4/kickstart-nextjs.png",
    description: "Connect to Contentstack fast with the Next.js Kickstart.",
  },
  {
    title: "Kickstart NuxtJS",
    bannerSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt33f0cf74e7464154/68b9753a4499d2fc2d36f226/kickstart-nuxtjs.png",
    description: "Connect to Contentstack fast with the NuxtJS Kickstart.",
  },
  {
    title: "React Starter",
    bannerSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltc02313c2d4bd70ac/6242e8f883781b1bb02b2a1b/ReactStarter_Image.png",
    description: "Build a Contentstack-powered marketing website using React.js framework.",
  },
]

const CONTENT_MODELS = [
  {
    title: "Hero Banner",
    bannerSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd2268c331b57592f/6527e72c3b69bfd0c65542d9/hero-banner.svg",
    description: "Defines the structure, fields, and schema to design the hero banner of your website.",
  },
  {
    title: "Website Homepage",
    bannerSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt8a28293317dd7ac9/6527d164c929a57076f9b7ed/website-home-page.svg",
    description: "Defines the structure, fields, and schema to design the essential information about the website homepage.",
  },
  {
    title: "Blog Landing Page",
    bannerSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt9a64e5044cc37445/6528023da000a9d476cd1024/blog-landing.svg",
    description: "Defines the structure, fields, and schema to design the landing page for each blog.",
  },
]

const RECIPES = [
  {
    title: "Backup Entries to AWS S3",
    serviceSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltc7fb98dc253f1e55/6287b670445f645df4fcef97/s3.svg",
    serviceAlt: "AWS S3",
    description: "Create a new object in AWS S3 via Automate.",
  },
  {
    title: "Send Notifications to Slack Channel",
    serviceSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt4146ba6c4fac725f/6287b6a94794c17d29bc385a/Slack.svg",
    serviceAlt: "Slack",
    description: "Send notifications to a Slack channel using the Slack connector.",
  },
  {
    title: "Translate Content using Smartling",
    serviceSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt328f96e45f321daf/6242e8e3c470e610f0a9fe99/Smartling_icon.svg",
    serviceAlt: "Smartling",
    description: "Set up an automated language translation system via Smartling for your Contentstack-powered website.",
  },
]

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

function SearchBar() {
  return (
    <div
      style={{
        height: 60,
        borderBottom: '1px solid rgb(221, 227, 238)',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 40,
          gap: 4,
          position: 'relative' as const,
          whiteSpace: 'nowrap' as const,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 382,
            height: 40,
            border: '1px solid rgb(221, 227, 238)',
            borderRadius: 4,
            padding: '8px 16px',
            boxShadow: 'rgba(0,0,0,0) 0px 0px 0px 2px',
          }}
        >
          <style>{`.mp-search-placeholder::placeholder { color: rgb(100, 118, 150); opacity: 1; }`}</style>
          <input
            type="text"
            placeholder="Search in All Collections"
            className="flex-1 outline-none border-none mp-search-placeholder"
            style={{
              backgroundColor: '#fff',
              color: 'rgb(33, 33, 33)',
              fontSize: 16,
              height: 22,
              letterSpacing: '0.16px',
              lineHeight: '24px',
              fontFamily: 'Inter, sans-serif',
            }}
          />
        </div>
        <button
          className="cursor-pointer shrink-0"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(108, 92, 231)',
            border: '1px solid transparent',
            borderRadius: 4,
            color: '#fff',
            fontSize: 16,
            fontWeight: 600,
            height: 40,
            letterSpacing: '0.16px',
            lineHeight: '16px',
            minHeight: 40,
            minWidth: 32,
            padding: '8px 16px',
            textAlign: 'center' as const,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 24, width: 24, marginRight: 8, overflow: 'hidden' }}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="white" />
          </svg>
          <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.16px', lineHeight: '16px', marginTop: -1 }}>
            Search
          </span>
        </button>
      </div>
    </div>
  )
}

export default function MarketplaceV3Page() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div style={{ position: 'sticky', top: 0, zIndex: 9, flexShrink: 0, backgroundColor: '#fff' }}>
        <ContentHeader />
        <div style={{ borderLeft: '1px solid rgb(221, 227, 238)' }}>
          <SearchBar />
        </div>
      </div>

      <div className="flex-1" style={{ borderLeft: '1px solid rgb(221, 227, 238)' }}>
        {/* Hero */}
        <MarketplaceHero />

        {/* Apps Section */}
        <MarketplaceSection
          title="Apps"
          description="Marketplace apps are installable, ready-to-use applications. These are handpicked apps, and you can install them in your stack with a few steps. To start using it, select the one you want to use, click on Install App."
          viewAllLabel="View All Apps"
        >
          {APPS.map((app) => (
            <AppsCard
              key={app.title}
              title={app.title}
              subtitle="Stack App"
              description={app.description}
              icon={
                <AppIcon
                  src={app.iconSrc}
                  title={app.title}
                  initials={app.initials}
                  bg={app.bg}
                />
              }
            />
          ))}
        </MarketplaceSection>

        {/* Starters Section */}
        <MarketplaceSection
          title="Starters"
          description="Starters are ready-to-use, installable sample apps built on top of Contentstack. You can try them out by selecting one from the list and clicking on Install Template."
          viewAllLabel="View All Starters"
        >
          {STARTERS.map((s) => (
            <StarterCard
              key={s.title}
              title={s.title}
              bannerSrc={s.bannerSrc}
              description={s.description}
            />
          ))}
        </MarketplaceSection>

        {/* Content Models Section */}
        <MarketplaceSection
          title="Content Models"
          description="Content Models are ready-to-use, installable sample content models built on top of Contentstack. You can try them out by selecting one from the list and clicking on Import Content Model."
          viewAllLabel="View All Content Models"
        >
          {CONTENT_MODELS.map((m) => (
            <ContentModelCard
              key={m.title}
              title={m.title}
              bannerSrc={m.bannerSrc}
              description={m.description}
            />
          ))}
        </MarketplaceSection>

        {/* Recipes Section */}
        <MarketplaceSection
          title="Recipes"
          description="Recipes allow you to automate your business workflows to streamline tasks and eliminate manual efforts. You can try them out by selecting one from the list and importing it into your organization."
          viewAllLabel="View All Recipes"
        >
          {RECIPES.map((r) => (
            <RecipeCard
              key={r.title}
              title={r.title}
              description={r.description}
              icon={<RecipeIcons serviceSrc={r.serviceSrc} serviceAlt={r.serviceAlt} />}
            />
          ))}
        </MarketplaceSection>

        {/* Bottom "Can't find?" banner — matches production .app-footer + .Info */}
        <div style={{ margin: '15px 20px 15px 15px', fontFamily: 'Inter, sans-serif' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              backgroundColor: 'rgb(245, 253, 255)',
              borderRadius: 4,
              padding: '0 20px',
              margin: '0 0 20px',
            }}
          >
            {/* Left blue border accent */}
            <div
              style={{
                borderLeft: '4px solid rgb(4, 105, 227)',
                borderRadius: '4px 0 0 4px',
                marginLeft: -20,
                flexShrink: 0,
              }}
            />
            {/* Content wrapper — matches .Info__content */}
            <div style={{ padding: '18px 0', marginLeft: 15, fontSize: 13, lineHeight: '20px', color: 'rgb(33, 33, 33)' }}>
              {/* Inner flex row — matches .app-footer-content */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <b>Can&apos;t find what you&apos;re looking for?</b>{" "}
                  Marketplace lists all your favorite apps and starters that are
                  publicly available for use. If you can&apos;t find what you&apos;re
                  looking for, you can send us a request mentioning what you&apos;re
                  looking for by clicking on the button below.
                </div>
                <button
                  className="cursor-pointer shrink-0"
                  style={{
                    backgroundColor: 'rgb(249, 248, 255)',
                    border: '1px solid rgb(108, 92, 231)',
                    borderRadius: 4,
                    color: 'rgb(108, 92, 231)',
                    fontSize: 14,
                    fontWeight: 600,
                    height: 32,
                    minHeight: 32,
                    minWidth: 32,
                    padding: '5px 16px',
                    lineHeight: '14px',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: 4,
                  }}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
