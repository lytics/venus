# Marketplace Page Design

> **Status:** Ready for implementation
> **Created:** 2026-01-22
> **Reference:** https://app.contentstack.com/#!/marketplace

## Overview

Build the Marketplace page for the demo app, integrating with the existing TopNav pattern and creating reusable components for the Venus library.

## Goals

1. **Exact visual match** to the production Contentstack Marketplace
2. **Reusable components** in Venus library for marketplace app developers
3. **Consistent patterns** with existing Personalize/CMS pages

---

## Components to Build

### 1. Sidebar Component (Venus Library)

**Location:** `packages/venuscn/src/components/Sidebar/`

A collapsible sidebar with nav sections and filter sections.

#### Container Specs
| Property | Value |
|----------|-------|
| Width | 240px |
| Background | #F7F9FC |
| Border-right | 1px solid #DDE3EE |
| Padding | 20px 0 15px |

#### Sidebar Toggle Button (circular)
| Property | Value |
|----------|-------|
| Size | 24px × 24px |
| Border-radius | 50% |
| Border | 1px solid #6C5CE7 |
| Background | #DDE3EE |
| Icon | Chevron left (expanded) / right (collapsed) |

#### Section Header (collapsible)
| Property | Value |
|----------|-------|
| Font size | 12px |
| Font weight | 700 (bold) |
| Color | #222222 |
| Padding | 0 10px |
| Cursor | pointer |
| Chevron size | 12px × 8px |
| Chevron color | #647696 |
| Chevron | Up (^) expanded, Down (v) collapsed, rotates on toggle |

#### Nav Items
| Property | Value |
|----------|-------|
| Font size | 16px |
| Font weight | 400 |
| Line height | 16px |
| Height | 40px |
| Inactive color | #475161 |
| Active color | #6C5CE7 |
| Active border-left | 3px solid #6C5CE7 |
| Hover color | #6C5CE7 |

#### Checkbox Filter List
| Property | Value |
|----------|-------|
| Checkbox size | 13px × 13px |
| Label font | 16px |
| Label color | #000000 |

#### Search Input (in sidebar)
| Property | Value |
|----------|-------|
| Height | 34px |
| Font size | 14px |

#### Proposed API
```tsx
<Sidebar collapsed={false} onToggle={setCollapsed}>
  <SidebarSection title="Collections" collapsible defaultOpen>
    <SidebarNav
      items={[
        { label: 'All Collections', href: '/marketplace', active: true },
        { label: 'Apps', href: '/marketplace/apps' },
        { label: 'Starters', href: '/marketplace/starters' },
      ]}
    />
  </SidebarSection>

  <SidebarSection title="Categories" collapsible defaultOpen>
    <SidebarSearch placeholder="Search Categories" />
    <SidebarCheckboxList
      items={categories}
      selected={selected}
      onChange={setSelected}
    />
  </SidebarSection>
</Sidebar>
```

---

### 2. TopNav Integration (Demo App)

**Location:** `apps/demo/src/components/top-nav.tsx`

Add marketplace route detection and nav items.

#### Changes Required
1. Add pathname detection for `/marketplace`
2. Add product branding: Marketplace logo (building icon + text)
3. Add nav items: "Manage Apps" (dropdown), "Audit Logs"

#### Marketplace Logo
- Building/storefront icon with gradient
- Text: "Contentstack" (black) + "Marketplace" (purple)
- Size: 115px × 32px

#### Nav Items
| Property | Value |
|----------|-------|
| Font size | 16px |
| Font weight | 400 |
| Icon size | 20px × 20px |
| Color | #475161 |

---

### 3. App Card Component (Venus Library)

**Location:** `packages/venuscn/src/components/AppCard/`

#### Card Container
| Property | Value |
|----------|-------|
| Width | 320px |
| Height | 246px |
| Border | 1px solid #DDE3EE |
| Border-radius | 4px |
| Background | #FFFFFF |

#### Icon Area
| Property | Value |
|----------|-------|
| Height | 160px |
| Background | #F7F9FC |
| Icon size | 72px × 72px (centered) |

#### Card Body
| Property | Value |
|----------|-------|
| Padding | 16px |

#### Title
| Property | Value |
|----------|-------|
| Font size | 16px |
| Font weight | 600 |
| Color | #212121 |
| Line height | 24px |

#### Subtitle
| Property | Value |
|----------|-------|
| Font size | 12px |
| Font weight | 400 |
| Color | #6E6B86 |

#### Hover State
| Property | Value |
|----------|-------|
| Box-shadow | rgba(34,34,34,0.1) 0px 8px 20px |
| Transition | 0.15s |
| Shows | Description text + Install button |

#### Hover Description
| Property | Value |
|----------|-------|
| Font size | 14px |
| Color | #475161 |
| Line height | 21px |

#### Proposed API
```tsx
<AppCard
  icon="/path/to/icon.svg"
  title="AI Assistant"
  subtitle="Stack App"
  description="Create brand and tone-specific content..."
  href="/marketplace/apps/ai-assistant"
  onInstall={() => {}}
/>
```

---

### 4. Page Layout Components

#### Page Header Bar
**Location:** Part of marketplace layout

| Property | Value |
|----------|-------|
| Height | 90px |
| Background | #F7F9FC |
| Border-bottom | 1px solid #DDE3EE |
| Position | fixed, top: 56px, left: 240px (sidebar width) |
| z-index | 9 |

#### Search Button
| Property | Value |
|----------|-------|
| Height | 40px |
| Background | #6C5CE7 |
| Color | #FFFFFF |
| Font | 16px / 600 |
| Padding | 8px 16px |
| Border-radius | 4px |

#### "Build New App" Button
| Property | Value |
|----------|-------|
| Height | 32px |
| Background | #6C5CE7 |
| Color | #FFFFFF |
| Font | 14px / 600 |
| Padding | 5px 16px |
| Border-radius | 4px |
| Icon | External link (white) |

---

### 5. Hero Section

| Property | Value |
|----------|-------|
| Height | 372px |
| Background | Image + linear-gradient overlay |
| Border-bottom | 1px solid #EDF1F7 |

#### Background
```css
background-image: url("https://eu-images.contentstack.com/v3/assets/.../All%20collections%20page%20banner"),
                  linear-gradient(rgba(255,255,255,0.48), rgba(221,227,238,0.48));
```

#### Hero Title
| Property | Value |
|----------|-------|
| Font size | 34px |
| Font weight | 600 |
| Color | #212121 |
| Line height | 42.5px |

#### Hero Body
| Property | Value |
|----------|-------|
| Font size | 16px |
| Font weight | 400 |
| Color | #475161 |
| Line height | 24px |

---

### 6. Section Components

#### Section Header ("Apps", "Starters", etc.)
| Property | Value |
|----------|-------|
| Title font | 22px / 600 |
| Title color | #222222 |
| Description font | 14px / 400 |
| Description color | #475161 |
| Line height | 25px |

#### "View All" Link
| Property | Value |
|----------|-------|
| Font size | 14px |
| Font weight | 400 |
| Color | #6C5CE7 |

---

## File Structure

```
packages/venuscn/src/components/
├── Sidebar/
│   ├── index.tsx
│   ├── Sidebar.tsx
│   ├── SidebarSection.tsx
│   ├── SidebarNav.tsx
│   ├── SidebarSearch.tsx
│   └── SidebarCheckboxList.tsx
├── AppCard/
│   ├── index.tsx
│   └── AppCard.tsx

apps/demo/src/
├── app/(app)/marketplace/
│   ├── page.tsx
│   ├── layout.tsx
│   └── components/
│       ├── marketplace-hero.tsx
│       ├── marketplace-section.tsx
│       └── marketplace-page-header.tsx
├── components/
│   ├── top-nav.tsx (modify)
│   └── icons/
│       ├── marketplace-logo.tsx
│       ├── manage-apps-icon.tsx
│       └── audit-logs-icon.tsx
```

---

## Implementation Order

### Phase 1: Venus Components (parallelizable)
1. **Sidebar component** - Core collapsible sidebar with sections
2. **AppCard component** - Card with hover state

### Phase 2: Demo App Integration
3. **TopNav integration** - Add marketplace route + nav items
4. **Marketplace layout** - Fixed header bar + sidebar integration
5. **Hero section** - Banner with background image
6. **Sections** - Apps, Starters, Content Models, Recipes

### Phase 3: Polish
7. **Sample data** - Populate with real app icons/info
8. **Navigation** - Sidebar filtering, search functionality

---

## Sample Data

```typescript
const collections = [
  { id: 'all', label: 'All Collections', href: '/marketplace' },
  { id: 'apps', label: 'Apps', href: '/marketplace/apps' },
  { id: 'starters', label: 'Starters', href: '/marketplace/starters' },
  { id: 'content-models', label: 'Content Models', href: '/marketplace/content-models' },
  { id: 'recipes', label: 'Recipes', href: '/marketplace/recipes' },
]

const categories = [
  'A/B Testing', 'AI Assistance', 'Analytics', 'Artificial Intelligence',
  'Automate', 'Automations', 'Commerce', 'Communication',
  'Content Management', 'DAM', 'Development', 'Formatting',
  'Hosting', 'Identity Management'
]

const apps = [
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    subtitle: 'Stack App',
    description: 'Create brand and tone-specific content in seconds for your Contentstack entries.',
    icon: 'https://eu-images.contentstack.com/.../AI-Assistant.svg'
  },
  {
    id: 'algolia',
    title: 'Algolia',
    subtitle: 'Stack App',
    icon: 'https://eu-images.contentstack.com/.../algolia_icon.svg'
  },
  // ...
]
```

---

## SVG Icons

### Marketplace Logo
```svg
<svg width="115" height="32" viewBox="0 0 115 32" fill="none">
  <defs>
    <linearGradient id="mp-logo-grad" x1="2.671" y1="4.471" x2="32.921" y2="26.018" gradientUnits="userSpaceOnUse">
      <stop stop-color="#49A466"/>
      <stop offset="0.5" stop-color="#6F83F2"/>
      <stop offset="1" stop-color="#8A3DFF"/>
    </linearGradient>
  </defs>
  <path d="M5.996 9.001V5.326h20.008v3.675H5.996zm-.01 17.675v-7H4.684v-3.675l1.312-5.833h20.008L27.317 16v3.675h-1.313v7H22.33v-7h-3.325v7H5.986zm3.685-3.675h5.658v-3.325H9.671v3.325z" fill="url(#mp-logo-grad)"/>
</svg>
```

### Manage Apps Icon
```svg
<svg width="20" height="20" viewBox="0 0 32 32" fill="none">
  <path d="M14 5.25A2.75 2.75 0 0011.25 8v1.25H7A1.75 1.75 0 005.25 11v14c0 .966.784 1.75 1.75 1.75h18A1.75 1.75 0 0026.75 25V11A1.75 1.75 0 0025 9.25h-4.25V8A2.75 2.75 0 0018 5.25h-4zm5.25 4V8c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.25h6.5zM7 10.75a.25.25 0 00-.25.25v4.813h18.5V11a.25.25 0 00-.25-.25H7zm18.25 6.563H6.75V25c0 .138.112.25.25.25h18a.25.25 0 00.25-.25v-7.688z" fill="#475161"/>
</svg>
```

### Audit Logs Icon
```svg
<svg width="20" height="20" viewBox="0 0 32 32" fill="none">
  <path d="M10.25 10.049a.75.75 0 01.75-.75h10a.75.75 0 010 1.5H11a.75.75 0 01-.75-.75zM11 14.348a.75.75 0 000 1.5h10a.75.75 0 000-1.5H11z" fill="#475161"/>
  <path d="M6.82 26.532a.5.5 0 01-.82-.384V6a1 1 0 011-1h18a1 1 0 011 1v20.049a.5.5 0 01-.845.362L22.5 23.883l-2.628 2.92a.5.5 0 01-.744 0l-2.628-2.92-3.128 2.978a.5.5 0 01-.716-.028L10 23.883l-3.18 2.649zm2.22-3.802a1.5 1.5 0 012.075.15l1.968 2.185 2.383-2.268a1.5 1.5 0 012.149.082l1.885 2.094 1.885-2.094a1.5 1.5 0 012.15-.082l.965.919V6.5h-17v17.513l1.54-1.283z" fill="#475161"/>
</svg>
```

### Chevron Down (for section collapse)
```svg
<svg width="12" height="8" viewBox="0 0 12 8" fill="none">
  <path d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="#647696"/>
</svg>
```

### Sidebar Toggle Chevron
```svg
<!-- Left (collapse) -->
<svg width="12" height="12" viewBox="0 0 32 32" fill="none">
  <path d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#6C5CE7"/>
</svg>

<!-- Right (expand) -->
<svg width="12" height="12" viewBox="0 0 32 32" fill="none">
  <path d="M11.47 5.47a.75.75 0 011.06 0l10 10a.75.75 0 010 1.06l-10 10a.75.75 0 11-1.06-1.06L20.94 16l-9.47-9.47a.75.75 0 010-1.06z" fill="#6C5CE7"/>
</svg>
```

---

## Hover States

| Element | Normal | Hover |
|---------|--------|-------|
| Nav item | #475161 | #6C5CE7 |
| App card | no shadow | box-shadow: rgba(34,34,34,0.1) 0 8px 20px |
| Button | #6C5CE7 | slightly darker or opacity |
| Link | #6C5CE7 | underline |
| Checkbox | native | native |

---

## Responsive Notes

- Sidebar stays 240px fixed
- Cards wrap based on available width (flex-wrap)
- At ~480px viewport, hamburger menu appears
- Minimum card width: 320px
- Cards use CSS Grid or Flexbox with wrap

---

## Notes

- The sidebar toggle button is positioned at the edge between sidebar and main content
- When sidebar is collapsed, content takes full width
- Cards should have smooth hover transition (0.15s)
- Page header bar stays fixed while content scrolls
- Hero section scrolls with content
- Sidebar has internal scroll (overflow-y: auto) for long category lists
