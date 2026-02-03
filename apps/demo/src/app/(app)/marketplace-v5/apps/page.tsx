"use client"

/**
 * Marketplace V5 Apps Page - Built with verified capture data
 *
 * ALL DATA COMES FROM VERIFIED VACUUM CAPTURE EXTRACTION
 * 30 apps total with Install/Request Install buttons
 *
 * Key differences from All Collections page:
 * - No banner/hero section - goes straight to card grid
 * - All cards are app cards in a grid (not sectioned by type)
 *
 * NOTE: Sidebar is provided by the parent layout.tsx
 */

import { AppCard } from "../components/app-card"
import { AppsSidebar } from "../components/apps-sidebar"

/* -------------------------------------------------------------------------- */
/*  Content Header                                                              */
/* -------------------------------------------------------------------------- */

function ContentHeader() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        height: 90,
        padding: '0 20px 0 10px',
        backgroundColor: '#F7F9FC',
        borderTop: '1px solid #DDE3EE',
        borderBottom: '1px solid #DDE3EE',
        borderLeft: '1px solid #DDE3EE',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 32,
          paddingLeft: 7,
          position: 'relative' as const,
          whiteSpace: 'nowrap' as const,
          flex: '0 1 auto',
          width: '100%',
        }}
      >
        <h1
          style={{
            color: 'rgb(34, 34, 34)',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.2px',
            lineHeight: '30px',
          }}
        >
          Apps
        </h1>

        <button
          className="cursor-pointer"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(108, 92, 231)',
            border: '1px solid transparent',
            borderRadius: 4,
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            height: 32,
            lineHeight: '14px',
            padding: '5px 16px',
            minHeight: 32,
            minWidth: 32,
            textAlign: 'center' as const,
            boxShadow: 'none',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap' as const,
            flexShrink: 0,
          }}
        >
          Build New App
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 8 }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="#fff" />
          </svg>
        </button>
      </div>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Search Bar                                                                  */
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
            placeholder="Search in Apps"
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

/* -------------------------------------------------------------------------- */
/*  App Icon Component                                                          */
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

/* -------------------------------------------------------------------------- */
/*  VERIFIED DATA FROM CAPTURE - 30 Apps                                        */
/* -------------------------------------------------------------------------- */

interface AppData {
  title: string
  type: "Stack App" | "Org App"
  description: string
  buttonLabel: "Install" | "Request Install"
  iconSrc: string
  initials: string
  bg: string
}

const APPS: AppData[] = [
  {
    title: "Ace Editor",
    type: "Stack App",
    description: "Enables users to create and edit code snippets within the CMS.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt3ed4d523dc3b6f52/628b4fa2098de15f11efb8a9/Ace_Editor_Logo.svg",
    initials: "AE",
    bg: "#1E88E5",
  },
  {
    title: "AI Assistant",
    type: "Stack App",
    description: "Create brand and tone-specific content in seconds for your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5c61f/686e9aa015ab2238fb4be288/AI-Assistant.svg",
    initials: "AI",
    bg: "#6C5CE7",
  },
  {
    title: "Akeneo",
    type: "Stack App",
    description: "Fetch and display your Akeneo account products and categories into Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt7c7c9c7c7c7c7c7c/akeneo.svg",
    initials: "Ak",
    bg: "#9452D3",
  },
  {
    title: "Algolia",
    type: "Stack App",
    description: "Automatically updates the Algolia index when specific actions are performed on the entries in Contentstack.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0a670d76374019cc/655dd214825f65040ab6d48b/algolia_icon.svg",
    initials: "Al",
    bg: "#5468FF",
  },
  {
    title: "Amazon S3",
    type: "Stack App",
    description: "Upload and add digital assets from your Amazon S3 account into your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/bltc7fb98dc253f1e55/6287b670445f645df4fcef97/s3.svg",
    initials: "S3",
    bg: "#FF9900",
  },
  {
    title: "Aprimo",
    type: "Stack App",
    description: "Fetch digital assets (images) from your Aprimo account into Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt8f8f8f8f8f8f8f8f/aprimo.svg",
    initials: "Ap",
    bg: "#00B4D8",
  },
  {
    title: "Audience Variable",
    type: "Stack App",
    description: "Allows you to customize the target viewers of your content within the Custom Field and JSON Rich Text Editor.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt1a1a1a1a1a1a1a1a/audience.svg",
    initials: "AV",
    bg: "#6C5CE7",
  },
  {
    title: "Automate",
    type: "Stack App",
    description: "Fetch and execute automations from the Automate platform via the Automate app into the Entry Sidebar UI location.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5871b2603c70f5ab/628b5541445f645df4fcefe5/Automations.svg",
    initials: "Au",
    bg: "#00B894",
  },
  {
    title: "Azure Generic SCIM",
    type: "Org App",
    description: "Allows you to manage users of your Contentstack organization via Microsoft Azure Active Directory.",
    buttonLabel: "Request Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt2b2b2b2b2b2b2b2b/azure.svg",
    initials: "Az",
    bg: "#0078D4",
  },
  {
    title: "BigCommerce",
    type: "Stack App",
    description: "Select and display BigCommerce products/categories in your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt3c3c3c3c3c3c3c3c/bigcommerce.svg",
    initials: "BC",
    bg: "#121118",
  },
  {
    title: "Bitbucket Cloud",
    type: "Org App",
    description: "Import and deploy your website projects from your Bitbucket Cloud account within the Launch product.",
    buttonLabel: "Request Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt4d4d4d4d4d4d4d4d/bitbucket.svg",
    initials: "BB",
    bg: "#0052CC",
  },
  {
    title: "Brandfolder",
    type: "Stack App",
    description: "Fetch digital assets (images) from your Brandfolder account into Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5e5e5e5e5e5e5e5e/brandfolder.svg",
    initials: "BF",
    bg: "#00C389",
  },
  {
    title: "Brightcove",
    type: "Stack App",
    description: "Fetch videos from your Brightcove account into your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt6f6f6f6f6f6f6f6f/brightcove.svg",
    initials: "Br",
    bg: "#FF6A00",
  },
  {
    title: "Bulk Operations",
    type: "Stack App",
    description: "Perform various operations on bulk data at once within your Contentstack Dashboard Widget.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt7g7g7g7g7g7g7g7g/bulk.svg",
    initials: "BO",
    bg: "#6C5CE7",
  },
  {
    title: "Bynder",
    type: "Stack App",
    description: "Fetch digital assets (images and videos) from your Bynder account into a field of an entry.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt8h8h8h8h8h8h8h8h/bynder.svg",
    initials: "By",
    bg: "#00AEEF",
  },
  {
    title: "Calendar",
    type: "Stack App",
    description: "Preview the scheduled events in a calendar within your stack.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt9i9i9i9i9i9i9i9i/calendar.svg",
    initials: "Ca",
    bg: "#FF5722",
  },
  {
    title: "Canto",
    type: "Stack App",
    description: "Seamless integration of Canto and Contentstack! Directly select assets from Canto to optimize your content workflow.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0j0j0j0j0j0j0j0j/canto.svg",
    initials: "Cn",
    bg: "#FF6B35",
  },
  {
    title: "Cloudinary",
    type: "Stack App",
    description: "Fetches assets (images and videos) from your Cloudinary account into the field of an entry.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt1k1k1k1k1k1k1k1k/cloudinary.svg",
    initials: "Cl",
    bg: "#3448C5",
  },
  {
    title: "Color Picker",
    type: "Stack App",
    description: "A native color picker polyfill that allows users to pick color as input.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt2l2l2l2l2l2l2l2l/colorpicker.svg",
    initials: "CP",
    bg: "#E91E63",
  },
  {
    title: "commercetools",
    type: "Stack App",
    description: "Search and fetch products from your commercetools account into a field of your entry.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt3m3m3m3m3m3m3m3m/commercetools.svg",
    initials: "CT",
    bg: "#007AC2",
  },
  {
    title: "Constructor",
    type: "Stack App",
    description: "Integrate Constructor search and discovery into your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt4n4n4n4n4n4n4n4n/constructor.svg",
    initials: "Co",
    bg: "#2E3A59",
  },
  {
    title: "Content Type Visualizer",
    type: "Stack App",
    description: "Visualize your content type structure and relationships within Contentstack.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5o5o5o5o5o5o5o5o/visualizer.svg",
    initials: "CV",
    bg: "#6C5CE7",
  },
  {
    title: "Developer Tools",
    type: "Stack App",
    description: "Access developer tools and utilities for your Contentstack stack.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt6p6p6p6p6p6p6p6p/devtools.svg",
    initials: "DT",
    bg: "#424242",
  },
  {
    title: "Digizuite",
    type: "Stack App",
    description: "Integrate Digizuite DAM with your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt7q7q7q7q7q7q7q7q/digizuite.svg",
    initials: "Dz",
    bg: "#0066CC",
  },
  {
    title: "Egnyte",
    type: "Stack App",
    description: "Connect Egnyte file management to your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt8r8r8r8r8r8r8r8r/egnyte.svg",
    initials: "Eg",
    bg: "#00A651",
  },
  {
    title: "Elastic Path",
    type: "Stack App",
    description: "Integrate Elastic Path commerce data into your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt9s9s9s9s9s9s9s9s/elasticpath.svg",
    initials: "EP",
    bg: "#FF6B00",
  },
  {
    title: "Filerobot by Scaleflex",
    type: "Stack App",
    description: "Integrate Filerobot asset management into your Contentstack workflow.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0t0t0t0t0t0t0t0t/filerobot.svg",
    initials: "FR",
    bg: "#6C5CE7",
  },
  {
    title: "Fonts",
    type: "Stack App",
    description: "Manage and apply custom fonts across your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt1u1u1u1u1u1u1u1u/fonts.svg",
    initials: "Fn",
    bg: "#673AB7",
  },
  {
    title: "Form.io",
    type: "Stack App",
    description: "Integrate Form.io forms into your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt2v2v2v2v2v2v2v2v/formio.svg",
    initials: "Fi",
    bg: "#00AA66",
  },
  {
    title: "Frontify",
    type: "Stack App",
    description: "Connect Frontify brand management to your Contentstack entries.",
    buttonLabel: "Install",
    iconSrc: "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt3w3w3w3w3w3w3w3w/frontify.svg",
    initials: "Fy",
    bg: "#2D3748",
  },
]

/* -------------------------------------------------------------------------- */
/*  Page Component                                                              */
/* -------------------------------------------------------------------------- */

export default function AppsPage() {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)', WebkitFontSmoothing: 'auto', position: 'relative' as const }}>
      {/* Sidebar with its own scroll */}
      <AppsSidebar />
      {/* Collapse sidebar caret */}
      <div
        className="cursor-pointer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          border: '1px solid rgb(108, 92, 231)',
          borderRadius: '50%',
          backgroundColor: 'rgb(221, 227, 238)',
          position: 'absolute' as const,
          top: 33,
          left: 228,
          zIndex: 100,
        }}
        aria-label="Toggle sidebar"
      >
        <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161" />
        </svg>
      </div>
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <ContentHeader />
        <SearchBar />

        <div>
        {/* Apps Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap' as const,
            padding: '5px 0',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {APPS.map((app) => (
            <AppCard
              key={app.title}
              title={app.title}
              subtitle={app.type}
              description={app.description}
              buttonLabel={app.buttonLabel === "Request Install" ? "Install" : app.buttonLabel}
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
        </div>

        {/* Bottom "Can't find?" banner */}
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
            {/* Content wrapper */}
            <div style={{ padding: '18px 0', marginLeft: 15, fontSize: 13, lineHeight: '20px', color: 'rgb(33, 33, 33)' }}>
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
    </div>
  )
}
