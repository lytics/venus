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
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt7d872c5a2f3a5d6a/64d90c5dbf5e7a6ea55e6e1b/AI-Assistant.svg",
  },
  {
    id: "algolia",
    title: "Algolia",
    subtitle: "Stack App",
    description: "Powerful search and discovery platform for your content.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/bltd9a7d2e7e9e4e5f5/algolia_icon.svg",
  },
  {
    id: "commercetools",
    title: "Commercetools",
    subtitle: "Stack App",
    description: "Connect your headless commerce platform with Contentstack.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt0c2e2e2e2e2e2e2e/commercetools_icon.svg",
  },
];

const starters = [
  {
    id: "nextjs-starter",
    title: "Next.js Starter",
    subtitle: "Starter",
    description: "A fully-featured Next.js starter with Contentstack integration.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt1234567890abcdef/nextjs_icon.svg",
  },
  {
    id: "gatsby-starter",
    title: "Gatsby Starter",
    subtitle: "Starter",
    description: "Build blazing fast websites with Gatsby and Contentstack.",
    icon: "https://eu-images.contentstack.com/v3/assets/bltc5a09bf374882538/blt1234567890abcdef/gatsby_icon.svg",
  },
];

export default function MarketplacePage() {
  return (
    <div className="flex flex-col">
      <MarketplaceHeaderBar />
      <MarketplaceHero />

      <MarketplaceSection
        title="Apps"
        description="Extend Contentstack with powerful integrations and tools"
        viewAllHref="/marketplace/apps"
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
        description="Jumpstart your project with pre-built templates"
        viewAllHref="/marketplace/starters"
      >
        {starters.map((starter) => (
          <AppCard
            key={starter.id}
            icon={starter.icon}
            title={starter.title}
            subtitle={starter.subtitle}
            description={starter.description}
            href={`/marketplace/starters/${starter.id}`}
          />
        ))}
      </MarketplaceSection>
    </div>
  );
}
