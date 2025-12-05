/**
 * Dashboard Template
 *
 * A hub/home page layout with:
 * - Welcome header with title and subtitle
 * - Main content area with app cards grid
 * - Right sidebar with quick links and featured content
 *
 * Usage:
 * 1. Copy this file to src/app/(app)/your-page/page.tsx
 * 2. Customize the welcome message, cards, and sidebar content
 */

"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@contentstack/venuscn"
import { LucideIcon, Boxes, Settings, BarChart3, Users } from "lucide-react"

// =============================================================================
// CUSTOMIZE: Your app cards data
// =============================================================================
interface AppCardData {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  disabled?: boolean
}

const appCards: AppCardData[] = [
  {
    title: "App One",
    description: "Description of what this app does",
    icon: Boxes,
    href: "/your-link",
  },
  {
    title: "App Two",
    description: "Description of what this app does",
    icon: Settings,
    href: "/your-link",
  },
  {
    title: "App Three",
    description: "Description of what this app does",
    icon: BarChart3,
  },
  {
    title: "Coming Soon",
    description: "This feature is not yet available",
    icon: Users,
    disabled: true,
  },
]

// =============================================================================
// CUSTOMIZE: Your quick links
// =============================================================================
const quickLinks = [
  { label: "Documentation", href: "#" },
  { label: "Getting Started", href: "#" },
  { label: "Community", href: "#" },
]

// =============================================================================
// Components (you can keep these as-is)
// =============================================================================

function AppCard({
  title,
  description,
  icon: Icon,
  href,
  disabled
}: AppCardData) {
  const [isHovered, setIsHovered] = React.useState(false)

  const cardContent = (
    <Card
      className={`border transition-all ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ borderColor: (!disabled && isHovered) ? 'var(--color-primary)' : 'var(--color-border)' }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="px-4">
        <div className="bg-surface-purple rounded w-full h-24 flex items-center justify-center mb-3">
          <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h3 className="font-semibold text-base text-title mb-0.5">{title}</h3>
        <p className="text-sm font-medium text-body leading-snug">{description}</p>
      </CardContent>
    </Card>
  )

  if (href && !disabled) {
    return <Link href={href}>{cardContent}</Link>
  }

  return cardContent
}

// =============================================================================
// Page Component
// =============================================================================

export default function DashboardTemplate() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="@container">
        <div className="flex flex-col gap-6 px-8 pt-8 pb-8">

          {/* Welcome Header - CUSTOMIZE */}
          <div className="mb-3">
            <h1 className="text-28 font-bold text-title leading-[42px]">
              Welcome, User
            </h1>
            <p className="text-base font-bold text-[#6e6b86] mt-1">
              Your Organization Name
            </p>
          </div>

          {/* Main Layout - Two Columns */}
          <div className="grid grid-cols-1 @4xl:grid-cols-[2.2fr_1fr] gap-6">

            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Explore Apps</h2>
                <div className="grid grid-cols-[repeat(auto-fill,208px)] gap-4">
                  {appCards.map((card) => (
                    <AppCard key={card.title} {...card} />
                  ))}
                </div>
              </div>

              {/* Additional Section - CUSTOMIZE or remove */}
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Getting Started</h2>
                <Card className="border p-6">
                  <p className="text-body">
                    Add your getting started content, tutorials, or other helpful information here.
                  </p>
                </Card>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8 px-2">

              {/* Quick Links */}
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Quick Links</h2>
                <Card className="border py-2">
                  <CardContent className="px-4 py-0">
                    <div className="divide-y">
                      {quickLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="flex items-center gap-4 py-3 px-2 text-primary hover:underline"
                        >
                          <span className="text-sm font-bold">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Featured Content - CUSTOMIZE */}
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Featured</h2>
                <Card className="border">
                  <CardContent className="px-4">
                    <div className="h-32 bg-surface-purple rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-primary font-medium">Featured Image</span>
                    </div>
                    <h3 className="text-lg font-bold text-title mb-1">Featured Title</h3>
                    <p className="text-sm text-body mb-4">
                      Description of your featured content goes here.
                    </p>
                    <Button variant="secondary" size="small">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
