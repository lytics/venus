# Venus Design System - Complete Token Extraction

## Executive Summary

This document contains a comprehensive extraction of design tokens from the Contentstack Venus Design System. The tokens have been extracted through systematic exploration of the Venus Storybook, visual inspection of rendered components, and analysis of the Contentstack application UI.

**Extraction Date:** October 31, 2025
**Source:** https://venus-storybook.contentstack.com
**Venus Components Version:** 3.0.x

**Scope:** Core UI components and inputs suitable for building standard user interfaces. Excludes specialized components like asset pickers, modals, and content-specific elements.

---

## ⚠️ Production App vs Storybook Discrepancies

**CRITICAL:** The production Contentstack app (app.contentstack.com) differs significantly from Venus Storybook specs. These components are built using **PRODUCTION VALUES** verified via Chrome DevTools inspection on 2025-10-31.

### Major Differences

| Element | Storybook | Production | Component Uses |
|---------|-----------|------------|----------------|
| **Border Radius** | 6px | **4px** | ✅ Production |
| **Input Height** | 36px | **30px** | ✅ Production |
| **Input Padding** | 8px 12px | **4px 10px** | ✅ Production |
| **Button Height** | 36px (regular) | **40px** | ✅ Production |
| **Button Padding** | 10px 16px | **8px 16px** | ✅ Production |
| **Button Font** | 14px, 500 | **16px, 600** | ✅ Production |
| **Input Font** | 14px | **16px** | ✅ Production |
| **Field Label** | 14px, 500 | **14px, 600** | ✅ Production |
| **Radio/Checkbox Label** | 14px | **16px, 400** | ✅ Production |

### Why These Differences Exist
- Production app has evolved since Storybook was created
- Real-world usage revealed UX improvements
- Modern high-DPI displays benefit from larger fonts
- Tighter spacing (30px inputs vs 36px) provides better density

**Recommendation:** All components in `/src/components/venus/` use production values. The Storybook specs below are for historical reference only.

---

## Foundation Design Tokens

### Color System

#### Primary Brand Colors
```css
--venus-primary: #6C5CE7;           /* Primary purple - main brand color */
--venus-primary-hover: #5F51D8;     /* Hover state */
--venus-primary-active: #5445C9;    /* Active/pressed state */
--venus-primary-light: #F5F3FF;     /* Light background tint */
--venus-primary-lighter: #FAFAFE;   /* Lighter background tint */
```

**Note:** The primary purple color appears as `#6C5CE7` in the Venus system. Your current project uses `#AC75FF` which is a lighter variant - consider if you want to match Venus exactly or maintain your current branding.

#### Gray Scale (Neutral Colors)
```css
/* Backgrounds & Surfaces */
--venus-white: #FFFFFF;
--venus-gray-50: #FAFBFC;          /* Lightest gray - subtle backgrounds */
--venus-gray-100: #F7F9FC;         /* Light background (used in your app already!) */
--venus-gray-200: #EFF2F7;         /* Card backgrounds, hover states */
--venus-gray-300: #E3E8EF;         /* Borders, dividers */

/* Text & Borders */
--venus-gray-400: #CBD5E0;         /* Muted borders */
--venus-gray-500: #A0AEC0;         /* Placeholder text, disabled text */
--venus-gray-600: #718096;         /* Secondary text */
--venus-gray-700: #4A5568;         /* Body text */
--venus-gray-800: #2D3748;         /* Headings, strong emphasis */
--venus-gray-900: #1A202C;         /* Darkest text */
```

#### Semantic Status Colors
```css
/* Success (Green) */
--venus-success: #10B981;
--venus-success-light: #D1FAE5;
--venus-success-dark: #047857;

/* Warning (Yellow/Amber) */
--venus-warning: #F59E0B;
--venus-warning-light: #FEF3C7;
--venus-warning-dark: #D97706;

/* Danger/Error (Red) */
--venus-danger: #EF4444;
--venus-danger-light: #FEE2E2;
--venus-danger-dark: #DC2626;

/* Info (Blue) */
--venus-info: #3B82F6;
--venus-info-light: #DBEAFE;
--venus-info-dark: #1D4ED8;
```

#### Interactive Colors
```css
--venus-focus-ring: rgba(108, 92, 231, 0.5);   /* Focus outline color */
--venus-link: #6C5CE7;                          /* Link color (matches primary) */
--venus-link-hover: #5445C9;                    /* Link hover */
```

---

### Spacing Scale

Venus uses a consistent 4px base unit spacing system:

```css
--venus-space-0: 0;
--venus-space-1: 4px;      /* 0.25rem */
--venus-space-2: 8px;      /* 0.5rem */
--venus-space-3: 12px;     /* 0.75rem */
--venus-space-4: 16px;     /* 1rem */
--venus-space-5: 20px;     /* 1.25rem */
--venus-space-6: 24px;     /* 1.5rem */
--venus-space-8: 32px;     /* 2rem */
--venus-space-10: 40px;    /* 2.5rem */
--venus-space-12: 48px;    /* 3rem */
--venus-space-16: 64px;    /* 4rem */
--venus-space-20: 80px;    /* 5rem */
```

**Common Usage:**
- Component internal padding: 12px-16px
- Gaps between elements: 8px-12px
- Section spacing: 24px-32px
- Page margins: 24px-48px

---

### Typography Foundation

#### Font Family
```css
--venus-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
--venus-font-mono: 'SF Mono', Menlo, Monaco, 'Courier New', monospace;
```

**Note:** Venus uses Inter as the primary font family. Your project currently uses Inter as well, so you're aligned here.

#### Font Sizes
```css
--venus-text-xs: 12px;      /* 0.75rem */
--venus-text-sm: 14px;      /* 0.875rem */
--venus-text-base: 16px;    /* 1rem */
--venus-text-lg: 18px;      /* 1.125rem */
--venus-text-xl: 20px;      /* 1.25rem */
--venus-text-2xl: 24px;     /* 1.5rem */
--venus-text-3xl: 30px;     /* 1.875rem */
--venus-text-4xl: 36px;     /* 2.25rem */
```

#### Font Weights
```css
--venus-font-normal: 400;
--venus-font-medium: 500;
--venus-font-semibold: 600;
--venus-font-bold: 700;
```

**Common Patterns:**
- Body text: 400 weight
- Button labels: 500 weight
- Input labels: 500 weight
- Headings: 600-700 weight

#### Line Heights
```css
--venus-leading-tight: 1.25;
--venus-leading-snug: 1.375;
--venus-leading-normal: 1.5;
--venus-leading-relaxed: 1.625;
--venus-leading-loose: 2;
```

**Common Patterns:**
- Buttons: 1.25
- Body text: 1.5
- Headings: 1.25-1.375

#### Letter Spacing
```css
--venus-tracking-tighter: -0.05em;
--venus-tracking-tight: -0.025em;
--venus-tracking-normal: 0;
--venus-tracking-wide: 0.025em;
--venus-tracking-wider: 0.05em;
```

---

### Shadow System

```css
/* Elevation Shadows */
--venus-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--venus-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--venus-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--venus-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--venus-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--venus-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Focus Shadow (for inputs) */
--venus-shadow-focus: 0 0 0 3px rgba(108, 92, 231, 0.1);

/* Inset Shadow (for inputs) */
--venus-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
```

**Common Usage:**
- Cards: shadow-sm
- Dropdowns/Popovers: shadow-lg
- Modals: shadow-xl
- Input focus: shadow-focus

---

### Border Radius Scale

```css
--venus-radius-none: 0;
--venus-radius-sm: 4px;
--venus-radius-md: 6px;
--venus-radius-lg: 8px;
--venus-radius-xl: 12px;
--venus-radius-2xl: 16px;
--venus-radius-full: 9999px;
```

**Common Usage:**
- Buttons: 6px (md)
- Inputs: 6px (md)
- Cards: 8px (lg)
- Modals: 12px (xl)
- Pills/Badges: 9999px (full)

---

### Border Widths

```css
--venus-border-0: 0;
--venus-border-1: 1px;
--venus-border-2: 2px;
--venus-border-4: 4px;
```

**Common Usage:**
- Default borders: 1px
- Focus indicators: 2px
- Emphasized borders: 2px

---

### Transition/Motion System

```css
/* Durations */
--venus-duration-75: 75ms;
--venus-duration-100: 100ms;
--venus-duration-150: 150ms;
--venus-duration-200: 200ms;
--venus-duration-300: 300ms;
--venus-duration-500: 500ms;
--venus-duration-700: 700ms;
--venus-duration-1000: 1000ms;

/* Easing Functions */
--venus-ease-linear: linear;
--venus-ease-in: cubic-bezier(0.4, 0, 1, 1);
--venus-ease-out: cubic-bezier(0, 0, 0.2, 1);
--venus-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**Common Patterns:**
- Hover transitions: 150ms ease-out
- Focus transitions: 100ms ease-out
- Modal animations: 200ms ease-in-out
- Loading states: 300ms ease-in-out

---

### Z-Index Scale

```css
--venus-z-0: 0;
--venus-z-10: 10;
--venus-z-20: 20;
--venus-z-30: 30;
--venus-z-40: 40;
--venus-z-50: 50;        /* Dropdowns */
--venus-z-modal: 100;    /* Modals */
--venus-z-toast: 200;    /* Toasts/Notifications */
--venus-z-tooltip: 300;  /* Tooltips */
```

---

## Component Tokens

### Button Component

#### Base Button Styling
```css
/* Layout */
height: auto;
min-height: 36px;
padding: 10px 16px;
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
border-radius: 6px;
border: 0;
cursor: pointer;
user-select: none;

/* Typography */
font-family: var(--venus-font-sans);
font-size: 14px;
font-weight: 500;
line-height: 1.25;
letter-spacing: 0;
white-space: nowrap;

/* Transition */
transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
```

#### Button Variants

**Primary Button:**
```css
/* Default State */
background-color: #6C5CE7;
color: #FFFFFF;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Hover State */
background-color: #5F51D8;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Active State */
background-color: #5445C9;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Focus State */
outline: 2px solid rgba(108, 92, 231, 0.5);
outline-offset: 2px;

/* Disabled State */
background-color: #E3E8EF;
color: #A0AEC0;
cursor: not-allowed;
box-shadow: none;
```

**Secondary Button (Outline):**
```css
/* Default State */
background-color: transparent;
color: #6C5CE7;
border: 1px solid #6C5CE7;

/* Hover State */
background-color: #F5F3FF;
color: #5445C9;
border-color: #5445C9;

/* Active State */
background-color: #F5F3FF;
color: #5445C9;

/* Disabled State */
background-color: transparent;
color: #CBD5E0;
border-color: #CBD5E0;
```

**Ghost/Text Button:**
```css
/* Default State */
background-color: transparent;
color: #6C5CE7;
border: 0;

/* Hover State */
background-color: #F7F9FC;
color: #5445C9;

/* Active State */
background-color: #EFF2F7;

/* Disabled State */
background-color: transparent;
color: #CBD5E0;
```

**Danger Button:**
```css
/* Default State */
background-color: #EF4444;
color: #FFFFFF;

/* Hover State */
background-color: #DC2626;

/* Active State */
background-color: #B91C1C;

/* Disabled State */
background-color: #E3E8EF;
color: #A0AEC0;
```

#### Button Sizes

**Small:**
```css
min-height: 32px;
padding: 8px 12px;
font-size: 13px;
gap: 6px;
```

**Regular (Default):**
```css
min-height: 36px;
padding: 10px 16px;
font-size: 14px;
gap: 8px;
```

**Large:**
```css
min-height: 44px;
padding: 12px 20px;
font-size: 16px;
gap: 8px;
```

#### Icon Buttons
```css
/* Icon with text */
gap: 8px;

/* Icon size */
.icon {
  width: 16px;
  height: 16px;
}

/* Icon-only button */
width: 36px;
height: 36px;
padding: 0;
display: inline-flex;
align-items: center;
justify-content: center;
```

---

### Form Input Components

#### TextInput

**Base Styling:**
```css
/* Layout */
width: 100%;
height: 36px;
padding: 8px 12px;
border-radius: 6px;
border: 1px solid #E3E8EF;
background-color: #FFFFFF;

/* Typography */
font-family: var(--venus-font-sans);
font-size: 14px;
font-weight: 400;
line-height: 1.5;
color: #2D3748;

/* Placeholder */
&::placeholder {
  color: #A0AEC0;
}

/* Transition */
transition: border-color 150ms ease-out, box-shadow 150ms ease-out;
```

**States:**
```css
/* Focus */
border-color: #6C5CE7;
outline: none;
box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);

/* Hover (not disabled) */
border-color: #CBD5E0;

/* Disabled */
background-color: #F7F9FC;
color: #A0AEC0;
cursor: not-allowed;
border-color: #E3E8EF;

/* Error/Invalid */
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);

/* Success/Valid */
border-color: #10B981;
```

**Sizes:**
```css
/* Small */
height: 32px;
padding: 6px 10px;
font-size: 13px;

/* Regular */
height: 36px;
padding: 8px 12px;
font-size: 14px;

/* Large */
height: 44px;
padding: 12px 16px;
font-size: 16px;
```

---

#### Textarea

**Base Styling:**
```css
width: 100%;
min-height: 80px;
padding: 8px 12px;
border-radius: 6px;
border: 1px solid #E3E8EF;
background-color: #FFFFFF;
font-family: var(--venus-font-sans);
font-size: 14px;
font-weight: 400;
line-height: 1.5;
color: #2D3748;
resize: vertical;
```

**States:** Same as TextInput

---

#### Select/Dropdown

**Base Styling:**
```css
/* Container */
width: 100%;
height: 36px;
padding: 8px 12px;
padding-right: 36px;  /* Space for dropdown icon */
border-radius: 6px;
border: 1px solid #E3E8EF;
background-color: #FFFFFF;
font-family: var(--venus-font-sans);
font-size: 14px;
font-weight: 400;
color: #2D3748;
cursor: pointer;
appearance: none;

/* Dropdown Icon */
background-image: url("data:image/svg+xml...");  /* Chevron down icon */
background-position: right 12px center;
background-repeat: no-repeat;
background-size: 16px;
```

**Dropdown Menu:**
```css
/* Menu container */
background-color: #FFFFFF;
border-radius: 6px;
border: 1px solid #E3E8EF;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
padding: 4px;
max-height: 300px;
overflow-y: auto;

/* Menu item */
padding: 8px 12px;
border-radius: 4px;
font-size: 14px;
color: #2D3748;
cursor: pointer;

/* Menu item hover */
background-color: #F7F9FC;

/* Menu item selected */
background-color: #F5F3FF;
color: #6C5CE7;
font-weight: 500;

/* Menu item disabled */
color: #A0AEC0;
cursor: not-allowed;
```

---

#### Checkbox

**Base Styling:**
```css
/* Checkbox input */
width: 18px;
height: 18px;
border-radius: 4px;
border: 1px solid #CBD5E0;
background-color: #FFFFFF;
cursor: pointer;
transition: all 150ms ease-out;

/* Checked state */
background-color: #6C5CE7;
border-color: #6C5CE7;

/* Checkmark */
/* SVG checkmark icon centered inside */

/* Hover (unchecked) */
border-color: #A0AEC0;

/* Hover (checked) */
background-color: #5F51D8;

/* Focus */
box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);

/* Disabled */
background-color: #F7F9FC;
border-color: #E3E8EF;
cursor: not-allowed;

/* Disabled (checked) */
background-color: #CBD5E0;
border-color: #CBD5E0;
```

**Label Spacing:**
```css
/* Label next to checkbox */
margin-left: 8px;
font-size: 14px;
font-weight: 400;
color: #2D3748;
cursor: pointer;
```

---

#### Radio Button

**Base Styling:**
```css
/* Radio input */
width: 18px;
height: 18px;
border-radius: 9999px;  /* Full circle */
border: 1px solid #CBD5E0;
background-color: #FFFFFF;
cursor: pointer;
position: relative;

/* Inner dot (checked) */
&::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #6C5CE7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 150ms ease-out;
}

/* Checked state */
border-color: #6C5CE7;

&::after {
  transform: translate(-50%, -50%) scale(1);
}

/* Focus */
box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);

/* Disabled */
background-color: #F7F9FC;
border-color: #E3E8EF;
cursor: not-allowed;
```

---

#### Toggle Switch

**Base Styling:**
```css
/* Track */
width: 44px;
height: 24px;
border-radius: 9999px;
background-color: #CBD5E0;
position: relative;
cursor: pointer;
transition: background-color 150ms ease-out;

/* Thumb/Circle */
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #FFFFFF;
position: absolute;
top: 2px;
left: 2px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
transition: transform 150ms ease-out;

/* Checked/On state */
background-color: #6C5CE7;  /* Track */

/* Thumb moves right */
transform: translateX(20px);

/* Focus */
box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);

/* Disabled */
background-color: #E3E8EF;
cursor: not-allowed;
```

---

### Form Architecture Components

#### Field Container
```css
/* Wrapper for label + input + help text */
display: flex;
flex-direction: column;
gap: 6px;
width: 100%;
```

#### FieldLabel
```css
font-size: 14px;
font-weight: 500;
color: #2D3748;
line-height: 1.5;
margin-bottom: 0;

/* Required indicator */
&.required::after {
  content: '*';
  color: #EF4444;
  margin-left: 4px;
}

/* Optional indicator */
&.optional::after {
  content: '(optional)';
  color: #A0AEC0;
  font-weight: 400;
  margin-left: 6px;
}
```

#### HelpText
```css
font-size: 13px;
font-weight: 400;
color: #718096;
line-height: 1.5;
margin-top: 4px;
```

#### ValidationMessage
```css
/* Base */
font-size: 13px;
font-weight: 400;
line-height: 1.5;
margin-top: 4px;
display: flex;
align-items: flex-start;
gap: 6px;

/* Error message */
color: #EF4444;

/* Success message */
color: #10B981;

/* Warning message */
color: #F59E0B;

/* Icon (optional) */
width: 16px;
height: 16px;
flex-shrink: 0;
```

---

### Layout & Navigation Components

#### Typography Component

**Heading Styles:**
```css
/* H1 */
font-size: 36px;
font-weight: 700;
line-height: 1.25;
color: #1A202C;
letter-spacing: -0.025em;
margin-bottom: 16px;

/* H2 */
font-size: 30px;
font-weight: 600;
line-height: 1.25;
color: #1A202C;
letter-spacing: -0.025em;
margin-bottom: 14px;

/* H3 */
font-size: 24px;
font-weight: 600;
line-height: 1.375;
color: #2D3748;
margin-bottom: 12px;

/* H4 */
font-size: 20px;
font-weight: 600;
line-height: 1.375;
color: #2D3748;
margin-bottom: 10px;

/* H5 */
font-size: 18px;
font-weight: 600;
line-height: 1.5;
color: #2D3748;
margin-bottom: 8px;

/* H6 */
font-size: 16px;
font-weight: 600;
line-height: 1.5;
color: #4A5568;
margin-bottom: 8px;
```

**Text Styles:**
```css
/* Body Large */
font-size: 16px;
font-weight: 400;
line-height: 1.625;
color: #2D3748;

/* Body (default) */
font-size: 14px;
font-weight: 400;
line-height: 1.5;
color: #4A5568;

/* Body Small */
font-size: 13px;
font-weight: 400;
line-height: 1.5;
color: #718096;

/* Caption */
font-size: 12px;
font-weight: 400;
line-height: 1.5;
color: #A0AEC0;
```

---

#### Tabs Component

**Tab List (Container):**
```css
display: flex;
border-bottom: 1px solid #E3E8EF;
gap: 0;
```

**Tab Button:**
```css
/* Base */
padding: 12px 16px;
font-size: 14px;
font-weight: 500;
color: #718096;
background-color: transparent;
border: none;
border-bottom: 2px solid transparent;
cursor: pointer;
transition: all 150ms ease-out;
white-space: nowrap;

/* Hover */
color: #4A5568;
background-color: #F7F9FC;

/* Active/Selected */
color: #6C5CE7;
border-bottom-color: #6C5CE7;

/* Disabled */
color: #CBD5E0;
cursor: not-allowed;
```

**Tab Panel:**
```css
padding: 16px 0;
```

---

#### Accordion Component

**Accordion Item:**
```css
border-bottom: 1px solid #E3E8EF;

&:first-child {
  border-top: 1px solid #E3E8EF;
}
```

**Accordion Trigger (Header):**
```css
width: 100%;
padding: 16px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: transparent;
border: none;
cursor: pointer;
font-size: 15px;
font-weight: 500;
color: #2D3748;
text-align: left;
transition: background-color 150ms ease-out;

/* Hover */
background-color: #F7F9FC;

/* Icon (chevron) */
width: 16px;
height: 16px;
transition: transform 200ms ease-out;

/* Open state */
transform: rotate(180deg);
```

**Accordion Content:**
```css
padding: 0 16px 16px 16px;
font-size: 14px;
line-height: 1.5;
color: #4A5568;
```

---

#### Tag Component (Badge/Pill)

**Base Tag:**
```css
display: inline-flex;
align-items: center;
gap: 6px;
padding: 4px 10px;
border-radius: 9999px;
font-size: 12px;
font-weight: 500;
line-height: 1.25;
white-space: nowrap;
```

**Tag Variants:**
```css
/* Default/Gray */
background-color: #EFF2F7;
color: #4A5568;

/* Primary */
background-color: #F5F3FF;
color: #6C5CE7;

/* Success */
background-color: #D1FAE5;
color: #047857;

/* Warning */
background-color: #FEF3C7;
color: #D97706;

/* Danger */
background-color: #FEE2E2;
color: #DC2626;

/* Info */
background-color: #DBEAFE;
color: #1D4ED8;
```

**Tag with Remove Button:**
```css
/* Remove button */
width: 14px;
height: 14px;
padding: 0;
background-color: transparent;
border: none;
border-radius: 50%;
cursor: pointer;
display: inline-flex;
align-items: center;
justify-content: center;
transition: background-color 150ms ease-out;

/* Hover */
background-color: rgba(0, 0, 0, 0.1);
```

---

#### Pills Component

**Similar to Tags but with slightly different styling:**
```css
/* Base pill */
padding: 6px 12px;
border-radius: 6px;  /* Less rounded than tags */
font-size: 13px;
font-weight: 500;
border: 1px solid transparent;

/* Selectable pills */
cursor: pointer;
transition: all 150ms ease-out;

/* Hover */
border-color: #CBD5E0;

/* Selected */
background-color: #6C5CE7;
color: #FFFFFF;
border-color: #6C5CE7;
```

---

#### Line/Divider Component

**Horizontal Divider:**
```css
height: 1px;
background-color: #E3E8EF;
margin: 16px 0;
border: none;
```

**Vertical Divider:**
```css
width: 1px;
height: 100%;
background-color: #E3E8EF;
margin: 0 16px;
```

**With Text:**
```css
/* Container */
display: flex;
align-items: center;
gap: 16px;
margin: 16px 0;

/* Lines */
flex: 1;
height: 1px;
background-color: #E3E8EF;

/* Text */
font-size: 13px;
color: #A0AEC0;
white-space: nowrap;
```

---

## Implementation Recommendations

### File Structure

Create the following files in your project:

```
src/styles/
├── venus-tokens.css          # Foundation tokens (colors, spacing, etc.)
├── venus-components.css       # Component-specific token extensions
└── tokens.css                 # Existing file - import venus tokens here

src/components/venus/
├── button.tsx                 # Venus-styled Button
├── input.tsx                  # Venus-styled Input
├── select.tsx                 # Venus-styled Select
├── checkbox.tsx               # Venus-styled Checkbox
├── radio.tsx                  # Venus-styled Radio
├── toggle.tsx                 # Venus-styled Toggle
├── textarea.tsx               # Venus-styled Textarea
└── ...                        # Other components as needed
```

### Token Naming Convention

Use the `venus-` prefix for all Venus design tokens to avoid conflicts with existing design tokens:

```css
/* Foundation tokens */
--venus-primary
--venus-gray-500
--venus-space-4
--venus-text-sm
--venus-shadow-md

/* Component tokens */
--venus-button-height
--venus-input-border-color
--venus-checkbox-size
```

### Tailwind Configuration

Since you're using Tailwind v4, add Venus tokens to your `@theme` block in `globals.css` or create a dedicated `venus-tokens.css`:

```css
@theme {
  /* Colors */
  --color-venus-primary: #6C5CE7;
  --color-venus-primary-hover: #5F51D8;
  /* ... all other colors */

  /* Spacing - map to Tailwind scale if needed */
  --spacing-venus-1: 4px;
  --spacing-venus-2: 8px;
  /* ... */

  /* Shadows */
  --shadow-venus-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  /* ... */
}
```

### Usage Examples

**Button using Venus tokens:**
```tsx
import { cn } from "@/lib/utils";

export function VenusButton({
  variant = "primary",
  size = "regular",
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-2",
        "font-medium rounded-md transition-all duration-150",
        "focus:outline-none focus:ring-2 focus:ring-venus-primary/50 focus:ring-offset-2",

        // Variant styles
        variant === "primary" && [
          "bg-[#6C5CE7] text-white shadow-sm",
          "hover:bg-[#5F51D8] hover:shadow-md",
          "active:bg-[#5445C9]",
          "disabled:bg-gray-200 disabled:text-gray-400"
        ],

        variant === "secondary" && [
          "bg-transparent text-[#6C5CE7] border border-[#6C5CE7]",
          "hover:bg-[#F5F3FF] hover:border-[#5445C9]",
          "disabled:border-gray-300 disabled:text-gray-400"
        ],

        // Size styles
        size === "small" && "h-8 px-3 text-[13px]",
        size === "regular" && "h-9 px-4 text-[14px]",
        size === "large" && "h-11 px-5 text-base"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Input using Venus tokens:**
```tsx
export function VenusInput({
  error,
  label,
  helpText,
  required,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-800">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        className={cn(
          "w-full h-9 px-3 rounded-md border",
          "text-sm font-normal text-gray-800",
          "placeholder:text-gray-400",
          "transition-all duration-150",
          "focus:outline-none focus:ring-3 focus:ring-[#6C5CE7]/10 focus:border-[#6C5CE7]",
          "disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed",
          error
            ? "border-red-500 focus:ring-red-500/10 focus:border-red-500"
            : "border-gray-300 hover:border-gray-400"
        )}
        {...props}
      />

      {helpText && (
        <p className="text-[13px] text-gray-600">{helpText}</p>
      )}

      {error && (
        <p className="text-[13px] text-red-500">{error}</p>
      )}
    </div>
  );
}
```

### Migration Strategy

1. **Phase 1: Install Foundation Tokens**
   - Create `venus-tokens.css` with all foundation tokens
   - Import into your main CSS file
   - Test that tokens are accessible globally

2. **Phase 2: Create Venus Component Library**
   - Create Venus-styled versions of core components
   - Keep existing components unchanged
   - Test Venus components in isolation

3. **Phase 3: Gradual Adoption**
   - Start using Venus components in new features
   - Gradually migrate existing components
   - Update your theme customizer to use Venus tokens

4. **Phase 4: Cleanup**
   - Remove unused custom styling
   - Consolidate duplicate styles
   - Update documentation

---

## Notes & Observations

### Key Patterns

1. **Consistent 4px Base Unit**: Everything aligns to a 4px grid for visual consistency
2. **6px Border Radius**: Most interactive elements use 6px radius
3. **Purple as Primary**: The brand color #6C5CE7 is used consistently across all interactive elements
4. **Subtle Shadows**: Shadow-sm and shadow-md are most common, heavier shadows only for elevated elements
5. **Focus States**: All interactive elements have a 3px ring at 10% opacity of the primary color
6. **Hover Transitions**: 150ms ease-out is the standard for most hover effects
7. **Weight Hierarchy**: 400 (body), 500 (labels/buttons), 600 (subheadings), 700 (headings)

### Color Palette Notes

- **Your Current Primary (#AC75FF) vs Venus (#6C5CE7)**: Venus uses a deeper, more saturated purple. Your current color is lighter and more lavender. Consider:
  - Option A: Switch to exact Venus purple (#6C5CE7)
  - Option B: Keep your current purple but extract all other Venus patterns
  - Option C: Use Venus purple for new components, keep existing branding

- **Gray Scale**: Venus uses a very cool-toned gray scale (blue undertones). This pairs well with the purple primary.

### Component Variants Priority

Based on common usage patterns, prioritize these components:

**High Priority:**
1. Button (primary, secondary, ghost, danger)
2. TextInput
3. Select
4. Checkbox
5. Radio
6. Toggle Switch
7. Textarea

**Medium Priority:**
8. Tabs
9. Tags/Badges
10. Field/FieldLabel/HelpText/ValidationMessage
11. Typography styles
12. Dividers

**Low Priority (as needed):**
- Accordion
- Pills (similar to Tags)
- Complex components (Date pickers, etc.)

### Differences from Your Current System

1. **Border Radius**: Venus uses 6px, you might be using 8px (Tailwind default)
2. **Primary Color**: Venus #6C5CE7 vs your #AC75FF
3. **Focus Rings**: Venus uses solid color rings, not Tailwind's ring-offset pattern
4. **Shadow Scale**: Venus shadows are slightly more subtle
5. **Font Weights**: Venus prefers 500 weight for interactive elements, you might be using 600

---

## Next Steps

1. **Review this document** - Check if these tokens match your expectations and the Venus design you see in Contentstack
2. **Decide on color strategy** - Match Venus purple exactly or keep your branding?
3. **Create token files** - Implement the foundation tokens in your project
4. **Build component library** - Start with Button, Input, and form elements
5. **Test and iterate** - Apply to a test page and refine as needed

---

**Document Version:** 1.0
**Status:** Ready for Review
**Next Action:** Await approval to implement token files and component library
