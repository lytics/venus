"use client"

import { ContentHeader } from "./components/content-header"
import { SearchBar } from "./components/search-bar"
import { MarketplaceBanner } from "./components/marketplace-banner"
import { MarketplaceSection } from "./components/marketplace-section"
import { AppCard } from "./components/app-card"
import { StarterCard } from "./components/starter-card"
import { ContentModelCard } from "./components/content-model-card"
import { RecipeCard } from "./components/recipe-card"
import { MarketplaceFooter } from "./components/marketplace-footer"

export default function MarketplaceV4Page() {
  return (
    <>
      {/* Content Header - fixed at top */}
      <ContentHeader />

      {/* Main body area */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          fontFamily: 'Inter, sans-serif',
          WebkitFontSmoothing: 'auto' as any,
        }}
      >
        {/* Search bar */}
        <SearchBar />

        {/* Scrollable content */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Banner */}
          <MarketplaceBanner />

          {/* Apps Section */}
          <MarketplaceSection
            title="Apps"
            viewAllText="View All Apps"
            description="Marketplace apps are installable, ready-to-use applications. These are handpicked apps, and you can install them in your stack with a few steps. To start using it, select the one you want to use, click on Install App."
          >
            <AppCard title="AI Assistant" description="Create brand and tone-specific content in seconds for your Contentstack entries." appType="Stack App" />
            <AppCard title="Algolia" description="Automatically updates the Algolia index when specific actions are performed on the entries." appType="Stack App" />
            <AppCard title="Automate" description="Fetch and execute automations from the Automate platform via the Automate app in your stack." appType="Stack App" />
          </MarketplaceSection>

          {/* Starters Section */}
          <MarketplaceSection
            title="Starters"
            viewAllText="View All Starters"
            description="Starters are ready-to-use, installable sample apps built on top of Contentstack. You can try them out by selecting one from the list and clicking on Install Template."
          >
            <StarterCard title="Kickstart Next.js" description="Connect to Contentstack fast with the Next.js Kickstart." />
            <StarterCard title="Kickstart NuxtJS" description="Connect to Contentstack fast with the NuxtJS Kickstart." />
            <StarterCard title="React Starter" description="Build a Contentstack-powered marketing website using React.js framework." />
          </MarketplaceSection>

          {/* Content Models Section */}
          <MarketplaceSection
            title="Content Models"
            viewAllText="View All Content Models"
            description="Content Models are ready-to-use, installable sample content models built on top of Contentstack. You can try them out by selecting one from the list and clicking on Import Content Model."
          >
            <ContentModelCard title="Hero Banner" description="Defines the structure, fields, and schema to design the hero banner of your website." />
            <ContentModelCard title="Website Homepage" description="Defines the structure, fields, and schema to design the essential information about your website homepage." />
            <ContentModelCard title="Blog Landing Page" description="Defines the structure, fields, and schema to design the landing page for each blog post." />
          </MarketplaceSection>

          {/* Recipes Section */}
          <MarketplaceSection
            title="Recipes"
            viewAllText="View All Recipes"
            description="Recipes allow you to automate your business workflows to streamline tasks and eliminate manual efforts. You can try them out by selecting one from the list and importing it into your organization."
          >
            <RecipeCard title="Backup Entries to AWS S3" description="Create a new object in AWS S3 via Automate." />
            <RecipeCard title="Send Notifications to Slack Channel" description="Send notifications to a Slack channel using the Slack connector." />
            <RecipeCard title="Translate Content using Smartling" description="Set up an automated language translation system via Smartling for your Contentstack entries." />
          </MarketplaceSection>

          {/* Footer */}
          <MarketplaceFooter />
        </div>
      </div>
    </>
  )
}
