// ==============================================================================
// PROJECT CONFIGURATION
// ==============================================================================
//
// Single source of truth for project-wide design decisions and settings.
// Edit this file when cloning the starter for a new project.
//
// What belongs here: Project-wide settings that change per project
// What doesn't: Component-level decisions (use Tailwind classes directly)

// Navigation item type with optional dropdown support
export interface NavItem {
  label: string
  href: string
  icon?: string  // Lucide icon name (for sidebar)
  children?: Array<{ label: string; href: string }>
}

export const projectConfig = {
  // ============================================================================
  // PROJECT IDENTITY
  // ============================================================================
  name: "Venus",
  type: "app" as const,  // "app" | "www"
  baked: true,
  templateSource: false,  // Set to false for working projects

  // ============================================================================
  // NAVIGATION
  // ============================================================================
  navigation: {
    // Navigation type
    type: "top" as const,  // "sidebar" | "top"

    // Shared navigation items (used by both sidebar and top nav)
    items: [] as NavItem[],

    // Navigation colors configuration
    colors: {
      // "auto" = smart detection based on theme colors
      // "custom" = manual override with color pickers
      mode: "auto" as "auto" | "custom",

      // Auto mode settings
      auto: {
        // Optional user override (undefined = auto-detect)
        forceScaleType: undefined as "radix" | "tailwind" | undefined,
        // Threshold for luminosity (default 0.5)
        luminosityThreshold: 0.5,
        // Threshold for saturation detection (default 0.15)
        saturationThreshold: 0.15,
        // Hover and active state opacity values (0.0 - 1.0)
        hoverOpacity: {
          light: 0.3,
          dark: 0.3,
        },
        activeOpacity: {
          light: 0.5,
          dark: 0.5,
        },
      },

      // Custom mode settings
      custom: {
        light: {"background":"#ffffff","backgroundExpanded":"#fafafa","hover":"rgba(199, 193, 240, 0.30)","active":"rgba(199, 193, 240, 0.50)","text":"#1C2024","textSecondary":"#737373","border":"#E4E4E7"},
        dark: {"background":"#131313","backgroundExpanded":"#0f0f0f","hover":"rgba(199, 193, 240, 0.30)","active":"rgba(199, 193, 240, 0.50)","text":"#ffffff","textSecondary":"#a1a1a1","border":"#262626"},
      },
    },

    // Sidebar-specific settings
    sidebar: {
      widthExpanded: "16rem",   // 256px
      widthCollapsed: "3rem",    // 48px
      widthMobile: "18rem",      // 288px
      position: "left" as const,  // "left" | "right" - Future feature
    },

    // Top nav-specific settings
    topNav: {
      height: "3.5rem",             // 48px
      sticky: true,
      lockToContentWidth: false,  // Match page content width when restricted mode enabled
      showBorder: true,          // Show border under top nav
    },
  },

  // ============================================================================
  // WWW MODE (Website Configuration)
  // ============================================================================
  www: {
    // Navigation alignment
    navAlignment: "left" as const,  // "left" | "center"

    // CTA button (appears between theme toggle and user menu)
    ctaButton: {
      label: "Get Started",
      href: "/signup",
      variant: "default" as const,  // shadcn button variants: default, outline, ghost, etc.
    },

    // Footer configuration
    footer: {
      enabled: true,
      sections: [
        {
                "title": "Product",
                "links": [
                        {
                                "label": "Features",
                                "href": "/features"
                        },
                        {
                                "label": "Pricing",
                                "href": "/pricing"
                        }
                ]
        },
        {
                "title": "Company",
                "links": [
                        {
                                "label": "About",
                                "href": "/about"
                        },
                        {
                                "label": "Contact",
                                "href": "/contact"
                        }
                ]
        }
],
      social: [
        {
                "platform": "twitter",
                "href": "https://twitter.com"
        },
        {
                "platform": "github",
                "href": "https://github.com"
        }
],
      copyright: "© 2024 Company Name. All rights reserved."
    }
  },

  // ============================================================================
  // BRANDING
  // ============================================================================
  branding: {
    logo: {
      // Icon configuration (used in: collapsed sidebar, mobile menu, small spaces)
      icon: {
        type: "lucide" as const,  // "lucide" | "image"
        value: "TreePine",  // Lucide icon name or image path
      },

      // Expanded sidebar/top nav display configuration
      expanded: {
        mode: "full-logo" as const,  // "icon-only" | "icon-with-name" | "full-logo"
        fullLogoPath: "/logo-full.svg",
        textClassName: "font-bold text-lg",
      },
    },
  },

  // ============================================================================
  // DESIGN SYSTEM
  // ============================================================================
  design: {
    // Border radius (sets --radius CSS variable)
    // Components using rounded-md, rounded-lg will use this value
    radius: "0.5rem",  // 10px

    // Color system
    colors: {
      // Primary brand color (works with theme customizer)
      // Config provides defaults, customizer allows runtime changes
      primary: {
        light: "#6B7280",  // Light mode default
        dark: "#E5E5E5",   // Dark mode default
      },

      // Text contrast threshold for intelligent text color switching
      // Colors with luminance > threshold get dark text, <= threshold get white text
      // Range: 0.0 (always white) to 1.0 (always dark), typical: 0.30-0.40
      textContrastThreshold: 0.35,

      // Background layers
      backgrounds: {
        light: {
          page: "#ffffff",      // --background (main page background)
          surface: "#ffffff",   // --card (cards, surfaces)
          nav: {
            open: "#fafafa",    // Navigation background when expanded
            closed: "#ffffff",  // Navigation background when collapsed
          },
        },
        dark: {
          page: "#131313",
          surface: "#0f0f0f",
          nav: {
            open: "#0f0f0f",    // Navigation background when expanded
            closed: "#131313",  // Navigation background when collapsed
          },
        },
      },

      // Text colors
      text: {
        light: {
          primary: "#1C2024",    // --foreground (main text)
          secondary: "#737373",  // --muted-foreground (secondary text)
        },
        dark: {
          primary: "#EDEEF0",
          secondary: "#a1a1a1",
        },
      },
    },

    // Typography
    fonts: {
      heading: {
        family: "Inter",
        variable: "--font-heading",
        weights: [400,600,700],
      },
      body: {
        family: "Inter",
        fallback: "sans-serif",
      },
    },

    // Spacing system (Tailwind scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96)
    spacing: {
      // Page-level spacing (main content areas)
      page: {
        gap: "6",        // gap-6 (1.5rem)
        padding: "6",    // p-6 (1.5rem)
        paddingTop: "8",   // pt-8 (2rem)
      },

      // Card/container padding
      card: {
        paddingX: "6",   // px-6 (1.5rem)
        paddingY: "6",   // py-6 (1.5rem)
      },
    },

    // Container width system
    container: {
      maxWidth: "1000px",
      defaultMode: "restricted" as const,  // "restricted" | "full"
      // Note: Users can always toggle between modes via UI
    },
  },

  // ============================================================================
  // ICON LIBRARY
  // ============================================================================
  iconLibrary: "lucide" as const,  // "lucide" | "heroicons" | "phosphor"

} as const

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ProjectConfig = typeof projectConfig
export type ProjectType = typeof projectConfig.type
export type NavigationType = typeof projectConfig.navigation.type
export type ContainerMode = typeof projectConfig.design.container.defaultMode
export type WwwNavAlignment = typeof projectConfig.www.navAlignment
