"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@contentstack/venuscn"
import { Star, Info } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface App {
  id: string
  name: string
  icon: string
  href?: string
}

const apps: App[] = [
  { id: "home", name: "Home", icon: "/images/icon-contentstack-home.svg", href: "/dashboard" },
  { id: "cms", name: "CMS", icon: "/images/icon-headless-cms.svg", href: "/stacks" },
  { id: "personalize", name: "Personalize", icon: "/images/icon-personalize.svg", href: "/personalize" },
  { id: "data-insights", name: "Data & Insights", icon: "/images/dataandinsights.svg", href: "/insights" },
  { id: "automate", name: "Automate", icon: "/images/automate.svg", href: "/automate" },
  { id: "brand-kit", name: "Brand Kit", icon: "/images/icon-brand-kit.svg", href: "/brand-kit" },
  { id: "launch", name: "Launch", icon: "/images/icon-launch.svg", href: "/launch" },
  { id: "marketplace", name: "Marketplace", icon: "/images/icon-marketplace.svg", href: "/marketplace" },
  { id: "academy", name: "Academy", icon: "/images/icon-academy.svg", href: "/academy" },
]

export function AppLauncher() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const handleAppClick = (app: App) => {
    // Close popover
    setOpen(false)
    // Navigate to the app if href is defined
    if (app.href) {
      router.push(app.href)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="small"
          className={cn(
            "h-10 w-10 p-0 transition-colors text-[color:var(--color-heading)] cursor-pointer",
            // TODO: Add --color-accent-blue and --color-surface-blue tokens for #6B7CF2
            open && "bg-[#6B7CF2]/10 text-[#6B7CF2]"
          )}
        >
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
            <path d="M5 5h4v4H5V5z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 4h6v6H4V4zm1 1v4h4V5H5z" fill="currentColor"/>
            <path d="M14 5h4v4h-4V5z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 4h6v6h-6V4zm1 1v4h4V5h-4z" fill="currentColor"/>
            <path d="M23 5h4v4h-4V5z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22 4h6v6h-6V4zm1 1v4h4V5h-4z" fill="currentColor"/>
            <path d="M5 14h4v4H5v-4z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 13h6v6H4v-6zm1 1v4h4v-4H5z" fill="currentColor"/>
            <path d="M14 14h4v4h-4v-4z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 13h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="currentColor"/>
            <path d="M23 14h4v4h-4v-4z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22 13h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="currentColor"/>
            <path d="M5 23h4v4H5v-4z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 22h6v6H4v-6zm1 1v4h4v-4H5z" fill="currentColor"/>
            <path d="M14 23h4v4h-4v-4z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 22h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="currentColor"/>
            <path d="M23 23h4v4h-4v-4z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22 22h6v6h-6v-6zm1 1v4h4v-4h-4z" fill="currentColor"/>
          </svg>
          <span className="sr-only">App Launcher</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[360px] p-2 bg-[color:var(--color-surface-purple)] shadow-2xl"
        align="end"
        alignOffset={-35}
        sideOffset={8}
        style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)' }}
      >
        {/* Apps Grid Container */}
        <div className="bg-white rounded-lg p-4">
          <div className="grid grid-cols-3 gap-3">
            {apps.map((app, index) => (
              <button
                key={app.id}
                onClick={() => handleAppClick(app)}
                className={cn(
                  "flex flex-col items-center gap-2.5 p-2.5 rounded-md transition-colors",
                  "hover:bg-[color:var(--color-surface-gray)] active:bg-gray-100",
                  "text-center cursor-pointer"
                )}
              >
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <span
                  className={cn(
                    "text-xs font-medium leading-tight",
                    // TODO: Add --color-accent-blue token for #6B7CF2
                    index === 0 ? "text-[#6B7CF2]" : "text-[color:var(--color-title)]"
                  )}
                >
                  {app.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Favorites Section Container */}
        <div className="bg-white rounded-lg p-3 mt-3">
          <div className="flex items-center gap-2">
            {/* TODO: Add --color-accent-blue token for #6B7CF2 */}
            <Star className="w-4 h-4 text-[#6B7CF2]" strokeWidth={2} />
            <span className="text-sm font-medium text-[color:var(--color-title)]">Favorites</span>
            <Info className="w-3.5 h-3.5 text-[#6B7CF2]" strokeWidth={2} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
