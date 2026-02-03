# Marketplace Page Clone - Complete Specification

> **Purpose**: Exact clone of https://app.contentstack.com/#!/marketplace using bootleg Venus design system

---

## Page Structure

```
+------------------------------------------------------------------+
| HEADER (fixed, 56px, z-index 12)                                  |
| [Logo] | Manage Apps v | Audit Logs | ... | [icons] | [avatar]   |
+--------+----------------------------------------------------------+
| SIDEBAR| PAGE HEAD (fixed, 90px, z-index 9)                       |
| 240px  | [<] All Collections    [Search input] [Search] [Build]  |
| fixed  +----------------------------------------------------------+
|        | SCROLLABLE CONTENT                                       |
| scroll | +------------------------------------------------------+ |
| internal| HERO (372px)                                           | |
|        | "Contentstack Marketplace: Where composable happens"    | |
|        | [illustration on right]                                 | |
|        +------------------------------------------------------+ |
|        | APPS SECTION                                            | |
|        | "Apps"                              "View All Apps"     | |
|        | [Card] [Card] [Card] ...                                | |
|        +------------------------------------------------------+ |
+--------+----------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--mp-primary` | #6C5CE7 | rgb(108,92,231) | Buttons, links, active states |
| `--mp-border` | #DDE3EE | rgb(221,227,238) | All borders |
| `--mp-bg-light` | #F7F9FC | rgb(247,249,252) | Sidebar, card icon area, page header |
| `--mp-text-primary` | #212121 | rgb(33,33,33) | Headings, card titles |
| `--mp-text-secondary` | #475161 | rgb(71,81,97) | Nav items inactive, icons |
| `--mp-text-muted` | #6E6B86 | rgb(110,107,134) | Card subtitles |
| `--mp-white` | #FFFFFF | rgb(255,255,255) | Backgrounds |
| `--mp-hero-border` | #EDF1F7 | rgb(237,241,247) | Hero bottom border |

### Gradient (Logo & Polaris icon)
```css
linear-gradient: #49A466 (0%) -> #6F83F2 (50%) -> #8A3DFF (100%)
```

---

## Typography

| Element | Size | Weight | Color | Line Height |
|---------|------|--------|-------|-------------|
| Hero H2 | 34px | 600 | #212121 | 42.5px |
| Hero body | 16px | 400 | #000000 | 24px |
| Section header (sidebar) | 12px | 600 | #222222 | - |
| Nav item | 16px | 400 | #475161 (inactive) / #6C5CE7 (active) | 16px |
| Card title | 16px | 600 | #212121 | 24px |
| Card subtitle | 12px | 400 | #6E6B86 | 18px |
| Button small | 14px | 600 | #FFFFFF | 14px |
| Button large | 16px | 600 | #FFFFFF | - |
| Checkbox label | 16px | 400 | #000000 | 16px |
| "View All" link | 14px | 400 | #6C5CE7 | - |

**Font Family**: Inter, sans-serif

---

## Component Specs

### 1. Header
- Height: 56px
- Background: #FFFFFF
- Border-bottom: 1px solid #DDE3EE
- Position: fixed, top: 0, z-index: 12
- Logo container: 115px × 32px

### 2. Sidebar
- Width: 240px
- Background: #F7F9FC
- Border-right: 1px solid #DDE3EE
- Position: fixed, top: 56px
- Padding: 20px 0 15px
- Internal scroll: overflow-y: auto

**Nav items:**
- Height: 40px
- Active: 3px left border #6C5CE7, text #6C5CE7
- Inactive: text #475161

**Section headers (Collections, Categories):**
- Font: 12px/600, color #222222
- Chevron: 12px × 8px, color #647696, rotates on collapse

### 3. Page Header ("All Collections" bar)
- Height: 90px
- Background: #F7F9FC
- Position: fixed, top: 56px, left: 240px
- z-index: 9
- Border-bottom: 1px solid #DDE3EE

### 4. Search Input + Button
**Input container:**
- Border: 1px solid #DDE3EE
- Border-radius: 4px
- Height: 40px

**Search button:**
- Background: #6C5CE7
- Color: #FFFFFF
- Padding: 8px 16px
- Border-radius: 4px
- Font: 16px/600
- Height: 40px

### 5. "Build New App" Button
- Background: #6C5CE7
- Color: #FFFFFF
- Padding: 5px 16px
- Border-radius: 4px
- Font: 14px/600
- Height: 32px
- Has external link icon (white)

### 6. Hero Section
- Height: 372px
- Background: linear-gradient with image overlay
- Border-bottom: 1px solid #EDF1F7
- Contains floating illustration on right

### 7. App Cards
- Width: 320px
- Height: 246px
- Border: 1px solid #DDE3EE
- Border-radius: 4px
- Background: #FFFFFF

**Icon area:**
- Height: 160px
- Background: #F7F9FC
- Icon: 72px × 72px centered

**Body:**
- Padding: 16px
- Title: 16px/600 #212121
- Subtitle: 12px/400 #6E6B86 (shows "Stack App" with icon)

**Hover state:**
- Box-shadow: rgba(34,34,34,0.1) 0px 8px 20px
- Body slides up with transition 0.15s

### 8. Checkboxes (Category filters)
- Size: 13px × 13px
- Native appearance
- Label: 16px/400 #000000
- Padding: 0 10px

---

## SVG Assets

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

### Polaris/AI Sparkle Icon
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <defs>
    <linearGradient id="polaris-grad" x1="3.541" y1="2.635" x2="25.745" y2="15.114" gradientUnits="userSpaceOnUse">
      <stop stop-color="#49A466"/>
      <stop offset="0.5" stop-color="#6F83F2"/>
      <stop offset="1" stop-color="#8A3DFF"/>
    </linearGradient>
  </defs>
  <path d="M12.7 6.705c.285-.716 1.315-.716 1.599 0l.026.074 1.026 3.37 3.37 1.026c.815.248.815 1.402 0 1.65l-3.37 1.026-1.026 3.37c-.248.815-1.402.815-1.65 0l-1.027-3.37-3.369-1.026c-.815-.248-.815-1.402 0-1.65l3.37-1.027 1.026-3.369.026-.074z" fill="url(#polaris-grad)"/>
  <path d="M7.357 3.433a.15.15 0 01.285 0l.577 1.753a.15.15 0 00.095.095l1.753.576a.15.15 0 010 .285l-1.753.577a.15.15 0 00-.095.095l-.577 1.753a.15.15 0 01-.285 0l-.576-1.753a.15.15 0 00-.095-.095l-1.753-.577a.15.15 0 010-.285l1.753-.576a.15.15 0 00.095-.095l.576-1.753z" fill="url(#polaris-grad)"/>
  <path d="M7.357 15.433a.15.15 0 01.285 0l.577 1.753a.15.15 0 00.095.095l1.753.576a.15.15 0 010 .285l-1.753.577a.15.15 0 00-.095.095l-.577 1.753a.15.15 0 01-.285 0l-.576-1.753a.15.15 0 00-.095-.095l-1.753-.577a.15.15 0 010-.285l1.753-.576a.15.15 0 00.095-.095l.576-1.753z" fill="url(#polaris-grad)"/>
</svg>
```

### Chevron Down
```svg
<svg width="12" height="8" viewBox="0 0 12 8" fill="none">
  <path d="M10.293 1.293L6 5.586 1.707 1.293A1 1 0 00.293 2.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="#647696"/>
</svg>
```

### Back Arrow
```svg
<svg width="20" height="20" viewBox="0 0 32 32" fill="none">
  <path d="M20.53 5.47a.75.75 0 010 1.06L11.06 16l9.47 9.47a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06l10-10a.75.75 0 011.06 0z" fill="#475161"/>
</svg>
```

### Search Icon
```svg
<svg width="20" height="20" viewBox="0 0 32 32" fill="none">
  <path d="M14.5 4.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM3.25 14.5c0-6.213 5.037-11.25 11.25-11.25S25.75 8.287 25.75 14.5 20.713 25.75 14.5 25.75 3.25 20.713 3.25 14.5z" fill="currentColor"/>
  <path d="M21.395 21.395a.75.75 0 011.06 0l6.075 6.075a.75.75 0 11-1.06 1.06l-6.075-6.075a.75.75 0 010-1.06z" fill="currentColor"/>
</svg>
```

### External Link Icon
```svg
<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2 2v8h8V8h2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h2v2H2zm2.586 4l3.707-3.707L6 0h6v6L9.707 3.707 6 7.414 4.586 6z" fill="currentColor"/>
</svg>
```

### Notification Bell
```svg
<svg width="24" height="24" viewBox="0 0 24 25" fill="none">
  <path d="M19.3 15.604V9.677C19.3 5.437 16.027 2 11.994 2 7.962 2 4.691 5.438 4.691 9.677v5.927c0 1.073-.83 1.938-1.845 1.938-1.026 0-1.846.864-1.846 1.937C1 20.323 1.644 21 2.445 21h19.11c.8 0 1.445-.677 1.445-1.52 0-1.074-.83-1.938-1.846-1.938-1.035.01-1.855-.865-1.855-1.938zM11.994 24C10.885 24 10 23.313 10 22.473V21h4v1.473c-.012.85-.909 1.527-2.006 1.527z" stroke="#6C5CE7" fill="none"/>
</svg>
```

### Help Icon
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.626 14.033c0-1.514.96-2.45 1.823-3.35.665-.707 1.262-1.34 1.262-2.167 0-.973-.502-1.606-1.599-1.606-1.114 0-1.892.844-2.013 2.166H8C8.13 6.57 9.797 5 12.216 5 14.791 5 16 6.496 16 8.35c0 1.36-.777 2.24-1.581 3.085-.847.863-1.71 1.644-1.762 2.718v.615h-2.013v-.735h-.018zm-.483 3.498c0-.844.665-1.496 1.477-1.496.795 0 1.443.652 1.443 1.496 0 .826-.648 1.469-1.443 1.469a1.466 1.466 0 01-1.477-1.469z" fill="#697B9B"/>
</svg>
```

### Grid Icon (App Switcher)
```svg
<svg width="20" height="20" viewBox="0 0 32 32" fill="none">
  <rect x="5" y="5" width="4" height="4" fill="#475161"/>
  <rect x="14" y="5" width="4" height="4" fill="#475161"/>
  <rect x="23" y="5" width="4" height="4" fill="#475161"/>
  <rect x="5" y="14" width="4" height="4" fill="#475161"/>
  <rect x="14" y="14" width="4" height="4" fill="#475161"/>
  <rect x="23" y="14" width="4" height="4" fill="#475161"/>
  <rect x="5" y="23" width="4" height="4" fill="#475161"/>
  <rect x="14" y="23" width="4" height="4" fill="#475161"/>
  <rect x="23" y="23" width="4" height="4" fill="#475161"/>
</svg>
```

---

## External Image URLs

### Hero Illustration
```
https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blte9d0c4604984a8a7/All%20collections%20page%20banner
```

### App Icons
| App | URL |
|-----|-----|
| AI Assistant | `https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt76b8f8e813f5c61f/686e9aa015ab2238fb4be288/AI-Assistant.svg` |
| Algolia | `https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt0a670d76374019cc/655dd214825f65040ab6d48b/algolia_icon.svg` |
| Automate | `https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt5871b2603c70f5ab/628b5541445f645df4fcefe5/Automations.svg` |

---

## Bootleg Venus Components to Use

| Component | Import | Use Case |
|-----------|--------|----------|
| `Button` | `@contentstack/venuscn` | "Search" button, "Build New App" button |
| `Checkbox` | `@contentstack/venuscn` | Category filter checkboxes |
| `Input` | `@contentstack/venuscn` | Search input, category search |
| `Search` / `SearchV3` | `@contentstack/venuscn` | Reference for search styling |

**Note**: Button small variant (32px/14px) may need custom styling or variant addition.

---

## Demo App Components to Reference

| Component | Path | Adapt For |
|-----------|------|-----------|
| `StackCard` | `apps/demo/src/components/stack-card.tsx` | App card pattern |
| `TopNav` | `apps/demo/src/components/top-nav.tsx` | Header patterns |
| `PersonalizeSidebar` | `apps/demo/src/components/personalize-sidebar.tsx` | Sidebar navigation |

---

## New Components to Create

1. **`MarketplaceHeader`** - Simplified header with Marketplace branding
2. **`MarketplaceSidebar`** - Collapsible Collections + Categories with checkboxes
3. **`AppCard`** - 320×246px card with icon area + title/subtitle
4. **`CollapsibleSection`** - Reusable accordion-like section
5. **`SearchWithButton`** - Input + button combo (or compose from Venus)

---

## File Structure

```
apps/demo/src/app/(app)/marketplace/
├── page.tsx                 # Main marketplace page
├── layout.tsx               # Layout with sidebar
└── components/
    ├── marketplace-header.tsx
    ├── marketplace-sidebar.tsx
    ├── app-card.tsx
    ├── collapsible-section.tsx
    └── hero-section.tsx

apps/demo/src/components/icons/
├── marketplace-logo.tsx
├── polaris-icon.tsx
├── manage-apps-icon.tsx
└── audit-logs-icon.tsx
```

---

## Scroll Behavior Implementation

```tsx
// Layout structure
<div className="min-h-screen">
  {/* Fixed header */}
  <header className="fixed top-0 left-0 right-0 h-14 z-[12] bg-white border-b">
    ...
  </header>

  {/* Fixed sidebar with internal scroll */}
  <aside className="fixed top-14 left-0 w-60 h-[calc(100vh-56px)] bg-[#F7F9FC] border-r overflow-y-auto">
    ...
  </aside>

  {/* Main content area */}
  <main className="ml-60 mt-14">
    {/* Fixed page header */}
    <div className="fixed top-14 left-60 right-0 h-[90px] z-[9] bg-[#F7F9FC] border-b">
      ...
    </div>

    {/* Scrollable content */}
    <div className="mt-[90px] overflow-auto">
      ...
    </div>
  </main>
</div>
```

---

## Sample Data

```typescript
const collections = [
  { id: 'all', label: 'All Collections', active: true },
  { id: 'apps', label: 'Apps' },
  { id: 'starters', label: 'Starters' },
  { id: 'content-models', label: 'Content Models' },
  { id: 'recipes', label: 'Recipes' },
]

const categories = [
  'A/B Testing', 'AI Assistance', 'Analytics', 'Artificial Intelligence',
  'Automate', 'Automations', 'Commerce', 'Communication',
  'Content Management', 'DAM', 'Development', 'Formatting',
  'Hosting', 'Identity Management'
]

const apps = [
  { id: 'ai-assistant', name: 'AI Assistant', type: 'Stack App', icon: '...' },
  { id: 'algolia', name: 'Algolia', type: 'Stack App', icon: '...' },
  { id: 'automate', name: 'Automate', type: 'Stack App', icon: '...' },
]
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
- Cards wrap based on available width
- At ~480px, hamburger menu appears
- Minimum card width: 320px
- Cards use flex-wrap for responsive grid
