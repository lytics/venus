"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button as VenusButton } from "@contentstack/venuscn"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const AppCard = ({ children, disabled, href }: { children: React.ReactNode; disabled?: boolean; href?: string }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const cardContent = (
    <Card
      className={`border transition-default ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ borderColor: (!disabled && isHovered) ? 'var(--color-primary)' : 'var(--color-border)' }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  )

  if (href && !disabled) {
    return <Link href={href}>{cardContent}</Link>
  }

  return cardContent
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="@container">
        <div className="flex flex-col gap-6 px-8 pt-8 pb-8">
          {/* Welcome Header */}
          <div className="mb-3">
            <h1 className="text-28 font-bold text-title leading-[42px]">Welcome, Hero</h1>
            <p className="text-base font-bold text-[#6e6b86] mt-1">Organization Name: Venus Demo Playground</p>
          </div>

          {/* Main Layout - Two Columns */}
          <div className="grid grid-cols-1 @4xl:grid-cols-[2.2fr_1fr] gap-6">
            {/* Left Column - Explore Apps */}
            <div className="space-y-6">
              {/* Explore Apps Section */}
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Explore Apps</h2>
                <div className="grid grid-cols-[repeat(auto-fill,208px)] gap-4 mb-8">
                  {/* Headless CMS */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-headless-cms.svg"
                            alt="CMS"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Headless CMS</h3>
                      <p className="text-sm font-medium text-body leading-snug">Create content using best-in-class CMS</p>
                    </CardContent>
                  </AppCard>

                  {/* Personalize */}
                  <AppCard href="/personalize">
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-personalize.svg"
                            alt="Personalize"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Personalize</h3>
                      <p className="text-sm font-medium text-body leading-snug">Target users with tailored content</p>
                    </CardContent>
                  </AppCard>

                  {/* Data & Insights */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/dataandinsights.svg"
                            alt="Data & Insights"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Data & Insights</h3>
                      <p className="text-sm font-medium text-body leading-snug">Personalize with real-time customer data</p>
                    </CardContent>
                  </AppCard>

                  {/* Automate */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/automate.svg"
                            alt="Automate"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Automate</h3>
                      <p className="text-sm font-medium text-body leading-snug">Integrate and simplify with clicks, not code</p>
                    </CardContent>
                  </AppCard>

                  {/* Brand Kit */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-brand-kit.svg"
                            alt="Brand Kit"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Brand Kit</h3>
                      <p className="text-sm font-medium text-body leading-snug">Define brand content using AI rules</p>
                    </CardContent>
                  </AppCard>

                  {/* Launch */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-launch.svg"
                            alt="Launch"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Launch</h3>
                      <p className="text-sm font-medium text-body leading-snug">Deploy, host, and scale your sites with ease</p>
                    </CardContent>
                  </AppCard>

                  {/* Developer Hub */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-developer-hub.svg"
                            alt="Developer Hub"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Developer Hub</h3>
                      <p className="text-sm font-medium text-body leading-snug">Build and manage custom apps</p>
                    </CardContent>
                  </AppCard>

                  {/* Marketplace */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-marketplace.svg"
                            alt="Marketplace"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Marketplace</h3>
                      <p className="text-sm font-medium text-body leading-snug">Bring together world-class products</p>
                    </CardContent>
                  </AppCard>

                  {/* Academy */}
                  <AppCard>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/icon-academy.svg"
                            alt="Academy"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Academy</h3>
                      <p className="text-sm font-medium text-body leading-snug">Learn Contentstack with guided courses and...</p>
                    </CardContent>
                  </AppCard>

                  {/* Analytics */}
                  <AppCard disabled>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/analytics.svg"
                            alt="Analytics"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Analytics</h3>
                      <p className="text-sm font-medium text-body leading-snug">View usage data across Contentstack</p>
                    </CardContent>
                  </AppCard>

                  {/* Administration */}
                  <AppCard disabled>
                    <CardContent className="px-4">
                      <div className="bg-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
                        <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                          <Image
                            src="/images/administration.svg"
                            alt="Administration"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-base text-title mb-0.5">Administration</h3>
                      <p className="text-sm font-medium text-body leading-snug">Manage users, roles, and permissions efficiently</p>
                    </CardContent>
                  </AppCard>
                </div>
              </div>

              {/* Level Up Section */}
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Level Up with Role-Based Training & Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border">
                    <CardContent className="px-4">
                      <Skeleton className="h-32 w-full rounded-lg mb-3" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>
                  <Card className="border">
                    <CardContent className="px-4">
                      <Skeleton className="h-32 w-full rounded-lg mb-3" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>
                  <Card className="border">
                    <CardContent className="px-4">
                      <Skeleton className="h-32 w-full rounded-lg mb-3" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-full" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links & Events */}
            <div className="space-y-8 px-2">
              {/* Quick Links */}
              <div>
                <h2 className="text-xl font-bold text-heading mb-4">Quick Links</h2>
                <Card className="border py-2">
                  <CardContent className="px-4 py-0">
                    <div className="divide-y">
                      <a href="#" className="flex items-center gap-4 py-2 px-2 text-primary underline">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path fillRule="evenodd" clipRule="evenodd" d="M14.676 10.714c.872.51.872 1.788 0 2.299l-3.033 1.778c-.872.51-1.962-.128-1.962-1.15v-3.555c0-1.022 1.09-1.661 1.962-1.15l3.033 1.778Zm-.56 1.314a.191.191 0 0 0 0-.329l-3.034-1.778a.187.187 0 0 0-.28.165v3.555c0 .146.156.237.28.164l3.033-1.777Z" fill="#475161"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.607 3.029C19.86 2.817 21 3.798 21 5.087V17.44c0 .805-.772 1.378-1.528 1.133a6.091 6.091 0 0 0-5.922 1.242l-1.182 1.045a.554.554 0 0 1-.736 0l-1.182-1.045a6.091 6.091 0 0 0-5.922-1.242C3.772 18.818 3 18.245 3 17.44V5.087c0-1.29 1.14-2.27 2.393-2.058L12 4.147l6.607-1.118ZM4.121 17.439c0 .036.033.06.066.05a7.2 7.2 0 0 1 7 1.468l.813.72.814-.72a7.2 7.2 0 0 1 7-1.468.05.05 0 0 0 .065-.05V5.088a.939.939 0 0 0-1.088-.936L12 5.301 5.208 4.15a.939.939 0 0 0-1.087.936V17.44Z" fill="#475161"></path></svg>
                        <span className="text-sm font-bold">Explore Academy</span>
                      </a>
                      <a href="#" className="flex items-center gap-4 py-2 px-2 text-primary underline">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path fillRule="evenodd" clipRule="evenodd" d="M4.875 4.688a.188.188 0 0 0-.188.187v14.25c0 .104.084.188.188.188h14.25a.187.187 0 0 0 .188-.188V4.875a.187.187 0 0 0-.188-.188H4.875Zm-1.313.187c0-.725.588-1.313 1.313-1.313h14.25c.725 0 1.313.588 1.313 1.313v14.25c0 .725-.588 1.313-1.313 1.313H4.875a1.312 1.312 0 0 1-1.313-1.313V4.875Z" fill="#475161"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 3.563c.31 0 .563.251.563.562v15.75a.562.562 0 1 1-1.126 0V4.125c0-.31.252-.563.563-.563Z" fill="#475161"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.438 7.5c0-.31.251-.563.562-.563h7.875a.562.562 0 1 1 0 1.125H12a.562.562 0 0 1-.563-.562ZM11.438 10.5c0-.31.251-.563.562-.563h7.875a.562.562 0 1 1 0 1.126H12a.562.562 0 0 1-.563-.563ZM11.438 13.5c0-.31.251-.563.562-.563h7.875a.562.562 0 1 1 0 1.126H12a.562.562 0 0 1-.563-.563ZM11.438 16.5c0-.31.251-.563.562-.563h7.875a.562.562 0 1 1 0 1.126H12a.562.562 0 0 1-.563-.563Z" fill="#475161"></path></svg>
                        <span className="text-sm font-bold">Read Documentation</span>
                      </a>
                      <a href="#" className="flex items-center gap-4 py-2 px-2 text-primary underline">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0"><path d="M9.083 16.633a22.25 22.25 0 0 1-1.325 1.741C4.4 18.28 3.125 16.1 3.125 16.1a20.403 20.403 0 0 1 2.19-8.885 7.496 7.496 0 0 1 4.268-1.583l.455 1.05c.65-.09 1.306-.136 1.962-.14.66.002 1.318.048 1.97.136l.456-1.051a7.496 7.496 0 0 1 4.269 1.597 20.404 20.404 0 0 1 2.18 8.876s-1.274 2.18-4.633 2.275a21.587 21.587 0 0 1-1.302-1.734m2.94-1.32c-1.747.886-3.438 1.77-5.88 1.77-2.442 0-4.133-.884-5.88-1.77" stroke="#475161" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.2 14.54a1.525 1.525 0 1 0 0-3.049 1.525 1.525 0 0 0 0 3.05ZM14.8 14.54a1.525 1.525 0 1 0 0-3.049 1.525 1.525 0 0 0 0 3.05Z" stroke="#475161" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <span className="text-sm font-bold">Join Community on Discord</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-heading">Upcoming Events</h2>
                  <button className="text-sm text-primary hover:underline pr-4 font-bold">See All (4)</button>
                </div>
                <Card className="border">
                  <CardContent className="px-4">
                    <div className="space-y-4">
                      <Image
                        src="/images/tech.png"
                        alt="Tech for Retail Event"
                        width={520}
                        height={224}
                        className="w-full rounded-lg"
                      />
                      <div className="inline-block px-3 py-1 border border-gray-300 rounded-md">
                        <span className="text-sm font-medium text-gray-600">Event</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-title">Tech for Retail | Nov 24-25, 2025</h3>
                        <p className="text-sm font-medium text-body leading-snug">Meet us at booth B109 at the European trade show that is reinventing retail.</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 -mt-2">
                        <VenusButton variant="secondary" size="small">
                          Register
                        </VenusButton>
                        <div className="flex items-center gap-2">
                          <VenusButton variant="ghost" size="small">
                            <ChevronLeft className="size-4" />
                            Previous
                          </VenusButton>
                          <VenusButton variant="ghost" size="small" disabled>
                            Next
                            <ChevronRight className="size-4" />
                          </VenusButton>
                        </div>
                      </div>
                    </div>
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
