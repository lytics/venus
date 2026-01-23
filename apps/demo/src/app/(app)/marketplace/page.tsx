"use client";

import { AppCard } from "@contentstack/venuscn";
import { MarketplaceHero } from "./components/marketplace-hero";
import { MarketplaceSection } from "./components/marketplace-section";
import { MarketplaceHeaderBar } from "./components/marketplace-header-bar";

const apps = [
  {
    id: "ai-assistant",
    title: "AI Assistant",
    subtitle: "Stack App",
    description: "Create brand and tone-specific content in seconds for your Contentstack entries.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5c61f/686e9aa015ab2238fb4be288/AI-Assistant.svg",
  },
  {
    id: "algolia",
    title: "Algolia",
    subtitle: "Stack App",
    description: "Powerful search and discovery platform for your content.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0a670d76374019cc/655dd214825f65040ab6d48b/algolia_icon.svg",
  },
  {
    id: "automate",
    title: "Automate",
    subtitle: "Stack App",
    description: "Automate your content workflows with powerful triggers and actions.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5871b2603c70f5ab/628b5541445f645df4fcefe5/Automations.svg",
  },
];

const starters = [
  {
    id: "kickstart-nextjs",
    title: "Kickstart Next.js",
    subtitle: "Starter",
    description: "A fully-featured Next.js starter with Contentstack integration.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt908e05842d8170f5/68b9bc6546d77b7cd762d0f4/kickstart-nextjs.png",
  },
  {
    id: "kickstart-nuxtjs",
    title: "Kickstart NuxtJS",
    subtitle: "Starter",
    description: "Build Vue-powered websites with Nuxt and Contentstack.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt33f0cf74e7464154/68b9753a4499d2fc2d36f226/kickstart-nuxtjs.png",
  },
  {
    id: "react-starter",
    title: "React Starter",
    subtitle: "Starter",
    description: "Build React applications with Contentstack integration.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltc02313c2d4bd70ac/6242e8f883781b1bb02b2a1b/ReactStarter_Image.png",
  },
];

const contentModels = [
  {
    id: "hero-banner",
    title: "Hero Banner",
    subtitle: "Content Model",
    description: "A flexible hero banner component for landing pages.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltd2268c331b57592f/6527e72c3b69bfd0c65542d9/hero-banner.svg",
  },
  {
    id: "website-homepage",
    title: "Website Homepage",
    subtitle: "Content Model",
    description: "Complete homepage content model with sections and components.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt8a28293317dd7ac9/6527d164c929a57076f9b7ed/website-home-page.svg",
  },
  {
    id: "blog-landing-page",
    title: "Blog Landing Page",
    subtitle: "Content Model",
    description: "Blog listing page with featured posts and categories.",
    icon: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt9a64e5044cc37445/6528023da000a9d476cd1024/blog-landing.svg",
  },
];

export default function MarketplacePage() {
  return (
    <div className="flex flex-col">
      <MarketplaceHeaderBar />
      <MarketplaceHero />

      <MarketplaceSection
        title="Apps"
        description="Marketplace apps are installable, ready-to-use applications. These are handpicked apps, and you can install them in your stack with a few steps. To start using it, select the one you want to use, click on Install App."
        viewAllHref="/marketplace/apps"
        viewAllLabel="View All Apps"
      >
        {apps.map((app) => (
          <AppCard
            key={app.id}
            icon={app.icon}
            title={app.title}
            subtitle={app.subtitle}
            description={app.description}
            href={`/marketplace/apps/${app.id}`}
            onInstall={() => console.log(`Install ${app.id}`)}
          />
        ))}
      </MarketplaceSection>

      <MarketplaceSection
        title="Starters"
        description="Starters are ready-to-use, installable sample apps built on top of Contentstack. You can try them out by selecting one from the list and clicking on Install Template."
        viewAllHref="/marketplace/starters"
        viewAllLabel="View All Starters"
      >
        {starters.map((starter) => (
          <AppCard
            key={starter.id}
            icon={starter.icon}
            title={starter.title}
            subtitle={starter.subtitle}
            description={starter.description}
            href={`/marketplace/starters/${starter.id}`}
            variant="banner"
          />
        ))}
      </MarketplaceSection>

      <MarketplaceSection
        title="Content Models"
        description="Content Models are ready-to-use, installable sample content models built on top of Contentstack. You can try them out by selecting one from the list and clicking on Import Content Model."
        viewAllHref="/marketplace/content-models"
        viewAllLabel="View All Content Models"
      >
        {contentModels.map((model) => (
          <AppCard
            key={model.id}
            icon={model.icon}
            title={model.title}
            subtitle={model.subtitle}
            description={model.description}
            href={`/marketplace/content-models/${model.id}`}
            variant="banner"
          />
        ))}
      </MarketplaceSection>
    </div>
  );
}
