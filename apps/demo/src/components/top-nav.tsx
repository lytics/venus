"use client";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { AppLogo } from "@/components/app-logo"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ChevronDown, GalleryHorizontal, BookOpen, LifeBuoy, LogOut, FileText, Package, Code, Layout, Palette, Menu, Sparkles, Bell, CircleHelp, Grid3x3, Home } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { AppLauncher } from "@/components/app-launcher"
import { Dropdown as VenusDropdown } from "@contentstack/venuscn"

// Inline SVG icons for Personalize nav (using currentColor for proper state inheritance)
const ExperiencesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path d="M5.342 6.31c.51 4.132.504 8.346-.007 12.477h3.204c.364 0 .658.29.658.648a.653.653 0 01-.658.649H5.177a1.169 1.169 0 01-1.168-1.308c.524-4.13.53-8.347.005-12.476-.092-.726.515-1.353 1.255-1.296l4.05.306c4.447.337 8.915.337 13.363 0l4.049-.306c.74-.057 1.347.57 1.255 1.296-.524 4.13-.52 8.346.005 12.476a1.169 1.169 0 01-1.168 1.308H23.46a.653.653 0 01-.658-.649c0-.358.294-.648.658-.648h3.204a50.986 50.986 0 01-.007-12.477l-3.875.293c-4.516.342-9.05.342-13.566 0L5.342 6.31z" fill="currentColor" stroke="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.197 25.454c0-3.682 3.031-6.667 6.77-6.667 3.58 0 6.542 2.746 6.757 6.266l.078 1.26a.643.643 0 01-.178.483.663.663 0 01-.48.204H9.856a.653.653 0 01-.659-.648v-.898zm6.77-5.37c-3.012 0-5.453 2.404-5.453 5.37v.25h10.931l-.035-.573c-.174-2.835-2.559-5.047-5.443-5.047zM16 9.277c-2.303 0-4.17 1.838-4.17 4.106S13.698 17.49 16 17.49s4.17-1.839 4.17-4.107c0-2.268-1.867-4.106-4.17-4.106zm-2.853 4.106c0-1.551 1.277-2.81 2.853-2.81 1.576 0 2.853 1.258 2.853 2.81s-1.277 2.81-2.853 2.81c-1.575 0-2.853-1.258-2.853-2.81z" fill="currentColor" stroke="currentColor"/>
  </svg>
);

const AudiencesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.854 20.364a4.141 4.141 0 018.273-.29l.017.245a.655.655 0 01-.653.7h-6.982a.655.655 0 01-.655-.655zm1.386-.655h5.513a2.833 2.833 0 00-5.513 0zM16 10.982a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm-1.09 2.4a1.09 1.09 0 112.18 0 1.09 1.09 0 01-2.18 0z" fill="currentColor" stroke="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 4c.361 0 .654.293.654.655v1.111a10.256 10.256 0 019.58 9.58h1.111a.655.655 0 010 1.308h-1.111a10.256 10.256 0 01-9.58 9.58v1.111a.655.655 0 01-1.309 0v-1.111a10.256 10.256 0 01-9.579-9.58H4.655a.655.655 0 110-1.309h1.111a10.256 10.256 0 019.58-9.579V4.655c0-.362.293-.655.654-.655zm8.922 11.345h-1.067a.654.654 0 100 1.31h1.067a8.947 8.947 0 01-8.268 8.267v-1.067a.654.654 0 10-1.309 0v1.067a8.947 8.947 0 01-8.267-8.268h1.067a.655.655 0 100-1.309H7.078a8.947 8.947 0 018.267-8.267v1.067a.655.655 0 101.31 0V7.078a8.947 8.947 0 018.267 8.267z" fill="currentColor" stroke="currentColor"/>
  </svg>
);

const AttributesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path d="M25.991 15.28a.719.719 0 101.434 0c0-1.481-.29-2.948-.855-4.317a11.284 11.284 0 00-2.435-3.66A11.196 11.196 0 0016.191 4a.719.719 0 00-.717.721c0 .398.32.72.717.72a9.767 9.767 0 016.93 2.882 9.875 9.875 0 012.87 6.958zM6.39 15.28a.719.719 0 00-.717-.72.719.719 0 00-.717.72c0 1.481.29 2.948.855 4.317a11.284 11.284 0 002.436 3.66 11.197 11.197 0 007.944 3.304.719.719 0 00.717-.721.719.719 0 00-.717-.72 9.767 9.767 0 01-6.93-2.882 9.874 9.874 0 01-2.87-6.958z" fill="currentColor" stroke="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.65 20.08c0-2.515 2.03-4.56 4.536-4.56a4.545 4.545 0 014.526 4.242l.019.268a.722.722 0 01-.716.77h-7.649a.719.719 0 01-.717-.72zm1.517-.72h6.04a3.106 3.106 0 00-3.02-2.4 3.11 3.11 0 00-3.02 2.4zM16.19 9.76a2.635 2.635 0 00-2.629 2.64 2.635 2.635 0 002.63 2.64 2.635 2.635 0 002.63-2.64 2.635 2.635 0 00-2.63-2.64zm-1.194 2.64c0-.663.535-1.2 1.195-1.2s1.195.537 1.195 1.2c0 .663-.535 1.2-1.195 1.2s-1.195-.537-1.195-1.2zM4 6.64c0-.928.75-1.68 1.673-1.68h3.825c.924 0 1.673.752 1.673 1.68v3.84c0 .928-.749 1.68-1.673 1.68H5.673A1.677 1.677 0 014 10.48V6.64zm1.673-.24a.24.24 0 00-.239.24v3.84c0 .133.107.24.24.24h3.824a.24.24 0 00.239-.24V6.64a.24.24 0 00-.24-.24H5.674zM25.29 21.16a1.67 1.67 0 00-2.899 0l-2.484 4.32c-.644 1.12.16 2.52 1.449 2.52h4.968c1.288 0 2.093-1.4 1.45-2.52l-2.485-4.32zm-1.657.72a.239.239 0 01.414 0l2.484 4.32a.24.24 0 01-.207.36h-4.968a.24.24 0 01-.207-.36l2.484-4.32z" fill="currentColor" stroke="currentColor"/>
  </svg>
);

const EventsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.798 13.912c0-1.293 1.05-2.34 2.347-2.34a2.344 2.344 0 012.347 2.34v7.079l1.354-1.21a2.311 2.311 0 013.4.352c.698.949.566 2.27-.307 3.063l-5.088 4.62a.707.707 0 01-.997-.046.703.703 0 01.046-.995l5.089-4.62a.892.892 0 00.119-1.19.897.897 0 00-1.32-.136l-2.531 2.263a.707.707 0 01-1.177-.524v-8.656a.934.934 0 00-.935-.933.934.934 0 00-.935.933v5.217a.705.705 0 01-.706.704h-4.06c-.855 0-1.424.88-1.073 1.656l2.494 5.517a.707.707 0 01-1.287.579l-2.494-5.517c-.773-1.709.48-3.643 2.36-3.643h3.354v-4.513z" fill="currentColor" stroke="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4 6.643C4 5.736 4.737 5 5.647 5h20.706C27.263 5 28 5.736 28 6.643v6.571c0 .907-.737 1.643-1.647 1.643h-4.706a.705.705 0 110-1.408h4.706c.13 0 .235-.105.235-.235V6.643a.235.235 0 00-.235-.235H5.647a.235.235 0 00-.235.235v6.571c0 .13.105.235.235.235h4.706a.705.705 0 110 1.408H5.647c-.91 0-1.647-.736-1.647-1.643V6.643z" fill="currentColor" stroke="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.045 10.515a.707.707 0 01.964-.257l1.505.866a.703.703 0 01.258.962.707.707 0 01-.964.258l-1.505-.867a.703.703 0 01-.258-.962zM16 7.816c.39 0 .706.316.706.704v1.878a.705.705 0 01-1.412 0V8.52c0-.388.316-.704.706-.704zM21.591 10.515a.707.707 0 00-.964-.257l-1.505.866a.703.703 0 00-.258.962.707.707 0 00.964.258l1.505-.867a.703.703 0 00.258-.962z" fill="currentColor" stroke="currentColor"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.638 3.111a.251.251 0 00-.208-.024 4.639 4.639 0 00-1.703.998.257.257 0 00-.082.193l.02 1.186a3.394 3.394 0 00-.205.357l-1.028.575a.256.256 0 00-.125.17 4.652 4.652 0 00.004 1.987.256.256 0 00.124.168l1.025.575c.061.124.13.245.204.36l-.02 1.184a.257.257 0 00.083.193 4.578 4.578 0 001.709.994c.069.022.144.013.206-.025l1.006-.608c.136.007.271.007.407 0l1.01.612a.251.251 0 00.208.024 4.637 4.637 0 001.703-.997.257.257 0 00.082-.193l-.02-1.186a3.41 3.41 0 00.205-.358l1.029-.575a.256.256 0 00.124-.169 4.652 4.652 0 00-.004-1.987.256.256 0 00-.124-.168l-1.025-.575a3.414 3.414 0 00-.204-.358l.02-1.186a.257.257 0 00-.083-.193 4.579 4.579 0 00-1.709-.994.251.251 0 00-.206.025l-1.006.607a3.945 3.945 0 00-.407 0l-1.01-.612zm-1.465 2.426l-.02-1.15c.39-.34.84-.602 1.325-.776l.977.592c.045.027.097.04.149.036.165-.012.33-.012.496 0a.251.251 0 00.148-.036l.973-.588c.488.17.938.432 1.329.772l-.02 1.15c0 .053.015.106.046.15.093.136.175.278.245.428.022.048.06.089.106.115l.993.557c.098.51.1 1.034.004 1.544l-.997.557a.255.255 0 00-.106.115c-.07.15-.152.292-.245.427a.258.258 0 00-.046.151l.02 1.15c-.39.34-.84.602-1.325.775l-.977-.591a.252.252 0 00-.148-.036 3.424 3.424 0 01-.497 0 .252.252 0 00-.148.035l-.973.589a4.071 4.071 0 01-1.329-.773l.02-1.145a.258.258 0 00-.044-.148 3.171 3.171 0 01-.247-.434.256.256 0 00-.106-.115l-.993-.557a4.134 4.134 0 01-.003-1.544l.996-.557a.255.255 0 00.107-.115c.069-.15.15-.292.244-.428a.258.258 0 00.046-.15zm.904 2.022c0-.99.795-1.792 1.775-1.792.98 0 1.774.802 1.774 1.792s-.794 1.792-1.774 1.792-1.775-.802-1.775-1.792zm1.775-2.304A2.293 2.293 0 0015.57 7.56a2.293 2.293 0 002.282 2.304 2.293 2.293 0 002.281-2.304 2.293 2.293 0 00-2.281-2.304zM7.09 9.128a.365.365 0 00-.302-.035 6.731 6.731 0 00-2.472 1.448.373.373 0 00-.12.28l.029 1.722c-.11.167-.208.34-.297.519l-1.493.834a.371.371 0 00-.18.246 6.752 6.752 0 00.006 2.885.371.371 0 00.18.244l1.487.835c.09.18.188.354.297.523l-.029 1.717a.373.373 0 00.12.281 6.645 6.645 0 002.48 1.442c.1.032.21.02.3-.035l1.46-.882c.197.01.394.01.59 0l1.467.888a.365.365 0 00.302.035 6.732 6.732 0 002.472-1.448.373.373 0 00.12-.28l-.029-1.722c.11-.167.209-.34.297-.519l1.493-.835a.371.371 0 00.18-.245 6.753 6.753 0 00-.006-2.886.371.371 0 00-.18-.243l-1.487-.835a4.939 4.939 0 00-.297-.519l.029-1.721a.373.373 0 00-.12-.281 6.647 6.647 0 00-2.48-1.443.365.365 0 00-.3.036l-1.46.882a5.694 5.694 0 00-.59 0L7.09 9.128zm-2.127 3.52l-.028-1.668a5.998 5.998 0 011.923-1.126l1.418.859c.065.039.14.057.215.052.24-.018.48-.018.72 0a.364.364 0 00.216-.052l1.413-.854a5.911 5.911 0 011.928 1.12l-.028 1.67a.374.374 0 00.066.218c.136.196.255.404.355.62a.37.37 0 00.155.167l1.441.81c.143.74.145 1.5.006 2.24l-1.447.81a.37.37 0 00-.155.166c-.1.217-.219.424-.354.62a.374.374 0 00-.067.22l.028 1.668a5.997 5.997 0 01-1.923 1.126l-1.418-.859a.366.366 0 00-.215-.052c-.24.017-.48.017-.72 0a.366.366 0 00-.216.052l-1.413.854a5.911 5.911 0 01-1.928-1.121l.028-1.662a.374.374 0 00-.064-.216 4.6 4.6 0 01-.358-.63.37.37 0 00-.154-.167l-1.441-.809a6.002 6.002 0 01-.006-2.24l1.447-.81a.37.37 0 00.155-.167 4.2 4.2 0 01.355-.62.374.374 0 00.066-.219zm1.313 2.936c0-1.437 1.153-2.601 2.576-2.601 1.422 0 2.576 1.164 2.576 2.601 0 1.436-1.154 2.601-2.576 2.601-1.423 0-2.576-1.165-2.576-2.601zm2.576-3.344c-1.83 0-3.312 1.497-3.312 3.344 0 1.847 1.483 3.344 3.312 3.344 1.829 0 3.312-1.497 3.312-3.344 0-1.847-1.483-3.344-3.312-3.344z" fill="currentColor" stroke="currentColor"/>
  </svg>
);

const DUMMY_USER = {
  name: "User Name",
  email: "user@example.com",
  avatar: "",
}

interface ProductBranding {
  iconPath: string;
  productName: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface TopNavProps {
  productBranding?: ProductBranding;
}

export function TopNav({ productBranding: productBrandingProp }: TopNavProps = {}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [navHeight, setNavHeight] = React.useState<string>("3.5rem");
  const [showBorder, setShowBorder] = React.useState<boolean>(true);

  // Auto-detect product branding based on pathname
  const productBranding = React.useMemo(() => {
    if (productBrandingProp) return productBrandingProp;

    if (pathname.startsWith('/personalize')) {
      return {
        iconPath: '/images/contentstack-personalize.svg',
        productName: 'Personalize'
      };
    }

    return null;
  }, [pathname, productBrandingProp]);

  // Load height and border settings from localStorage and listen for changes
  React.useEffect(() => {
    // Load from localStorage on mount
    const savedHeight = localStorage.getItem('topnav-height');
    if (savedHeight) {
      setNavHeight(savedHeight);
    }

    const savedBorder = localStorage.getItem('topnav-show-border');
    if (savedBorder !== null) {
      setShowBorder(savedBorder === 'true');
    }

    // Listen for height changes from config drawer
    const handleHeightChange = (event: CustomEvent) => {
      setNavHeight(event.detail.height);
    };

    // Listen for border changes from config drawer
    const handleBorderChange = (event: CustomEvent) => {
      setShowBorder(event.detail.showBorder);
    };

    window.addEventListener('topnav-height-changed', handleHeightChange as EventListener);
    window.addEventListener('topnav-border-changed', handleBorderChange as EventListener);

    return () => {
      window.removeEventListener('topnav-height-changed', handleHeightChange as EventListener);
      window.removeEventListener('topnav-border-changed', handleBorderChange as EventListener);
    };
  }, []);

  // Get page title from pathname
  const getPageTitle = () => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return "Home";
    const lastSegment = segments[segments.length - 1];
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  };

  // Read configuration
  const navItems: NavItem[] = []
  const sticky = true;

  return (
    <>
      <div className={cn("bg-background/80 backdrop-blur-sm", sticky && "sticky top-0 z-50")} style={{ height: navHeight }}>
        <div className="w-full pl-2 pr-4">
          {/* Mobile Layout (< md) */}
          <div className="flex items-center justify-between md:hidden" style={{ height: navHeight }}>
            {/* Left: Menu button + Page title */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
            </div>
          </div>

          {/* Desktop Layout (>= md) */}
          <div className="hidden md:flex items-center" style={{ height: navHeight }}>
            {/* Left: Logo or Product Branding */}
            <div className={cn("flex items-center gap-3", !productBranding && "ml-4")}>
              {productBranding ? (
                <>
                  <Link href="/personalize" className="flex items-center px-2 py-1 rounded transition-colors hover:bg-[#F7F9FC]">
                    <Image
                      src={productBranding.iconPath}
                      alt={productBranding.productName}
                      width={160}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </Link>
                  {/* Separator - hidden on personalize landing page */}
                  {pathname !== '/personalize' && (
                    <div className="h-6 w-px bg-gray-200"></div>
                  )}
                </>
              ) : (
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <AppLogo size={24} className="text-foreground" collapsed={false} />
                </Link>
              )}
            </div>

            {/* Center: Navigation */}
            <div className="flex-1 flex justify-center px-3">
              <div className="w-full flex items-center justify-between">
                {/* Personalize Navigation or General Navigation */}
                <nav className="flex items-center gap-1">
                {pathname.startsWith('/personalize') && pathname !== '/personalize' ? (
                  // Personalize-specific navigation
                  <>
                    <Link
                      href="/personalize/experiences"
                      className={cn(
                        "flex items-center px-2 py-1 text-xs font-semibold transition-colors rounded hover:bg-[#F7F9FC]",
                        pathname.startsWith('/personalize/experiences')
                          ? "text-[#6C5CE7]"
                          : "text-[#475161]"
                      )}
                    >
                      <ExperiencesIcon />
                      Experiences
                    </Link>
                    <Link
                      href="/personalize/targets"
                      className={cn(
                        "flex items-center px-2 py-1 text-xs font-semibold transition-colors rounded hover:bg-[#F7F9FC]",
                        pathname.startsWith('/personalize/targets')
                          ? "text-[#6C5CE7]"
                          : "text-[#475161]"
                      )}
                    >
                      <AudiencesIcon />
                      Targets
                    </Link>
                    <Link
                      href="/personalize/attributes"
                      className={cn(
                        "flex items-center px-2 py-1 text-xs font-semibold transition-colors rounded hover:bg-[#F7F9FC]",
                        pathname.startsWith('/personalize/attributes')
                          ? "text-[#6C5CE7]"
                          : "text-[#475161]"
                      )}
                    >
                      <AttributesIcon />
                      Attributes
                    </Link>
                    <button
                      className="flex items-center px-2 py-1 text-xs font-semibold text-[#475161] cursor-not-allowed rounded"
                      disabled
                    >
                      <EventsIcon />
                      Events
                    </button>
                    <button
                      className="flex items-center px-2 py-1 text-xs font-semibold text-[#475161] cursor-not-allowed rounded"
                      disabled
                    >
                      <SettingsIcon />
                      Settings
                    </button>
                  </>
                ) : (
                  // General navigation
                  <>
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    // If item has children, render as dropdown
                    if (item.children && item.children.length > 0) {
                      return (
                        <DropdownMenu key={item.label}>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              data-nav-item
                              data-active={isActive}
                              className={cn(
                                "h-8 px-4 text-sm gap-1",
                                "hover:bg-[#F7F9FC] hover:text-sidebar-accent-foreground",
                                isActive && "text-sidebar-active-foreground font-medium"
                              )}
                            >
                              {item.label}
                              <ChevronDown className="h-3 w-3 opacity-50" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            {item.children.map((child) => (
                              <DropdownMenuItem key={child.href} asChild>
                                <Link href={child.href}>
                                  {child.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    }

                    // Simple link item
                    return (
                      <Button
                        key={item.label}
                        variant="ghost"
                        size="sm"
                        data-nav-item
                        data-active={isActive}
                        className={cn(
                          "h-8 px-4 text-sm",
                          "hover:bg-[#F7F9FC] hover:text-sidebar-accent-foreground",
                          isActive && "text-sidebar-active-foreground font-medium"
                        )}
                        asChild
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                    );
                  })}
                  </>
                )}
              </nav>
            </div>
          </div>

          {/* Right: Icon Buttons & User Menu */}
          <div className="flex items-center gap-2">
            {/* AI/Magic Features */}
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
                <path d="M12.7 6.705c.285-.716 1.315-.716 1.599 0l.026.074 1.026 3.37 3.37 1.026c.815.248.815 1.402 0 1.65l-3.37 1.026-1.026 3.37c-.248.815-1.402.815-1.65 0l-1.027-3.37-3.369-1.026c-.815-.248-.815-1.402 0-1.65l3.37-1.027 1.026-3.369.026-.074zm-.015 3.905a.863.863 0 01-.575.575L9.433 12l2.678.815c.241.073.436.247.537.474l.038.1.815 2.679.815-2.679.037-.1a.863.863 0 01.537-.474L17.568 12l-2.679-.815a.863.863 0 01-.574-.575L13.5 7.933l-.815 2.678z" fill="url(#paint0_linear)"/>
                <path d="M7.357 3.433a.15.15 0 01.285 0l.577 1.753a.15.15 0 00.095.095l1.753.576a.15.15 0 010 .285l-1.753.577a.15.15 0 00-.095.095l-.577 1.753a.15.15 0 01-.285 0l-.576-1.753a.15.15 0 00-.095-.095l-1.753-.577a.15.15 0 010-.285l1.753-.576a.15.15 0 00.095-.095l.576-1.753z" fill="url(#paint1_linear)"/>
                <path d="M7.357 15.433a.15.15 0 01.285 0l.577 1.753a.15.15 0 00.095.095l1.753.577a.15.15 0 010 .284l-1.753.577a.15.15 0 00-.095.095l-.577 1.753a.15.15 0 01-.285 0l-.576-1.753a.15.15 0 00-.095-.095l-1.753-.577a.15.15 0 010-.284l1.753-.577a.15.15 0 00.095-.095l.576-1.753z" fill="url(#paint2_linear)"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#49A466"/>
                    <stop offset="0.5" stopColor="#6F83F2"/>
                    <stop offset="1" stopColor="#8A3DFF"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#49A466"/>
                    <stop offset="0.5" stopColor="#6F83F2"/>
                    <stop offset="1" stopColor="#8A3DFF"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#49A466"/>
                    <stop offset="0.5" stopColor="#6F83F2"/>
                    <stop offset="1" stopColor="#8A3DFF"/>
                  </linearGradient>
                </defs>
              </svg>
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                <path d="M19.3 14.604V8.677C19.3 4.437 16.027 1 11.994 1 7.962 1 4.691 4.438 4.691 8.677v5.927c0 1.073-.83 1.938-1.845 1.938-1.026 0-1.846.864-1.846 1.937C1 19.323 1.644 20 2.445 20h19.11c.8 0 1.445-.677 1.445-1.52 0-1.074-.83-1.938-1.846-1.938-1.035.01-1.855-.865-1.855-1.938zM11.994 23C10.885 23 10 22.313 10 21.473V20h4v1.473c-.012.85-.909 1.527-2.006 1.527z" stroke="#697B9B" strokeWidth="2" strokeMiterlimit="10"/>
              </svg>
            </Button>

            {/* Help */}
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                <circle cx="12" cy="12" r="11" stroke="#697B9B" strokeWidth="2"/>
                <path d="M10.626 14.033c0-1.514.96-2.45 1.823-3.35.665-.707 1.262-1.34 1.262-2.167 0-.973-.502-1.606-1.599-1.606-1.114 0-1.892.844-2.013 2.166H8C8.13 6.57 9.797 5 12.216 5 14.791 5 16 6.496 16 8.35c0 1.36-.777 2.24-1.581 3.085-.847.863-1.71 1.644-1.762 2.718v.615h-2.013v-.735h-.018zm-.483 3.498c0-.844.665-1.496 1.477-1.496.795 0 1.443.652 1.443 1.496 0 .826-.648 1.469-1.443 1.469a1.466 1.466 0 01-1.477-1.469z" fill="#697B9B"/>
              </svg>
            </Button>

            {/* Apps Menu */}
            <AppLauncher />

            {/* User Profile Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0 rounded-full cursor-pointer"
                >
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src={DUMMY_USER.avatar} alt={DUMMY_USER.name} />
                    <AvatarFallback className="rounded-full bg-white text-gray-900 text-xs font-semibold border-2 border-gray-300">
                      HU
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage src={DUMMY_USER.avatar} alt={DUMMY_USER.name} />
                      <AvatarFallback className="rounded-full bg-white text-gray-900 text-xs font-semibold border-2 border-gray-300">
                        HU
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{DUMMY_USER.name}</span>
                      <span className="truncate text-xs">{DUMMY_USER.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/primatives">
                    <Palette className="h-4 w-4" />
                    Primitives
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="https://docs.example.com" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4" />
                    Docs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://example.com/support" target="_blank" rel="noopener noreferrer">
                    <LifeBuoy className="h-4 w-4" />
                    Support
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <LogOut className="h-4 w-4" />
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[288px] p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigation menu</SheetDescription>
          </SheetHeader>
          <div className="flex h-full flex-col">
            {/* Logo or Product Branding */}
            <div className="flex h-16 items-center border-b px-6">
              {productBranding ? (
                <Link href="/personalize" onClick={() => setMobileMenuOpen(false)} className="flex items-center -ml-1">
                  <Image
                    src={productBranding.iconPath}
                    alt={productBranding.productName}
                    width={160}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
              ) : (
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <AppLogo size={24} className="text-foreground" collapsed={false} />
                </Link>
              )}
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 space-y-1 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                // If item has children, show them as a list
                if (item.children && item.children.length > 0) {
                  return (
                    <div key={item.label} className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                        {item.label}
                      </div>
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-md transition-colors",
                              childActive
                                ? "text-sidebar-active-foreground font-medium"
                                : "text-foreground hover:bg-[#F7F9FC] hover:text-sidebar-accent-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  );
                }

                // Simple link item
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 text-sm rounded-md transition-colors",
                      isActive
                        ? "text-sidebar-active-foreground font-medium"
                        : "text-foreground hover:bg-[#F7F9FC] hover:text-sidebar-accent-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
