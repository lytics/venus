# Design System Guide

The Venus Design System helps you build interfaces that look and feel consistent with Contentstack. This guide explains how the system works and how to use it effectively.

## What Are Design Tokens?

Design tokens are named variables for colors, spacing, typography, and other design values. Instead of hardcoding values, you use tokens that ensure consistency.

Think of them as a shared vocabulary between designers and developers.

## The Token File

All design tokens live in one place:

**`packages/venuscn/src/styles/tokens.css`**

This file contains:
- Color scales (brand, gray, semantic colors)
- Spacing values (4px base unit system)
- Typography (font sizes, weights, line heights)
- Shadows, borders, transitions
- Dark mode variants

## Key Concepts

### 1. Consistency Over Perfection

The goal isn't rigid rules - it's consistency. If your UI looks like the demo app, you're doing it right.

**The demo app is your source of truth.** When in doubt, check how the demo does it.

### 2. Tokens vs Hardcoded Values

```tsx
// Using tokens (preferred for consistency)
<div className="text-[color:var(--color-title)]">Title</div>
<div className="gap-4">Cards with 16px gap</div>

// Hardcoded values (fine for one-offs)
<div className="text-[#111827]">Title</div>
<div className="gap-[16px]">Cards with 16px gap</div>
```

Both work. Tokens help maintain consistency, especially when:
- Building multiple related components
- Supporting dark mode
- Making system-wide color changes

### 3. Tailwind Integration

Venus uses **Tailwind CSS v4** with custom design tokens. You can use standard Tailwind classes:

```tsx
// Standard Tailwind classes
<div className="p-6 gap-4 rounded-lg border">

// Token-based colors
<div className="text-[color:var(--color-body)]">

// Or use utility classes
<div className="text-body">
```

## Common Tokens Reference

### Colors

**Text Colors:**
```css
--color-title      /* #111827 - Page/card titles */
--color-heading    /* #475161 - Section headings */
--color-body       /* #6B7280 - Body text, descriptions */
```

**UI Colors:**
```css
--color-primary    /* #6C5CE7 - Primary purple */
--color-border     /* #E5E7EB - Default borders */
--color-border-hover /* #3B4555 - Hover state borders */
```

**Surface Colors:**
```css
--color-surface-purple  /* #F9F8FF - Light purple backgrounds */
--color-surface-gray    /* #F7F9FC - Light gray backgrounds */
--color-surface-blue    /* #F1F6FF - Light blue backgrounds */
```

### Spacing

Built on a **4px base unit** system matching Tailwind:

```css
--spacing-1: 4px    /* gap-1, p-1 */
--spacing-2: 8px    /* gap-2, p-2 */
--spacing-3: 12px   /* gap-3, p-3 */
--spacing-4: 16px   /* gap-4, p-4 - MOST COMMON */
--spacing-6: 24px   /* gap-6, p-6 - PAGE PADDING */
--spacing-8: 32px   /* gap-8, p-8 */
```

**Common patterns from the demo:**
- Page padding: `p-6` (24px)
- Card grid gaps: `gap-4` (16px)
- Section spacing: `gap-6` (24px)

### Typography

**Font Sizes:**
```css
--font-size-sm: 14px    /* Labels, small text */
--font-size-base: 16px  /* Body text, buttons, inputs */
--font-size-lg: 18px    /* Larger body text */
--font-size-2xl: 24px   /* Section headings */
--font-size-4xl: 36px   /* Page titles */
```

**Font Weights:**
```css
--font-weight-normal: 400     /* Body text */
--font-weight-medium: 500     /* Emphasis */
--font-weight-semibold: 600   /* Buttons, labels, card titles */
--font-weight-bold: 700       /* Page headings */
```

## Using Tokens in Your Code

### In CSS/Tailwind Classes

```tsx
// Color tokens
<h1 className="text-[color:var(--color-title)] font-semibold">
  Page Title
</h1>

<p className="text-[color:var(--color-body)]">
  Body text with proper color
</p>

// Or use the utility classes
<h1 className="text-title font-semibold">Page Title</h1>
<p className="text-body">Body text</p>
```

### In Custom CSS

```css
/* Import tokens at the top of your CSS file */
@import "@contentstack/venuscn/styles";

.custom-card {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface-purple);
}

.custom-card:hover {
  border-color: var(--color-border-hover);
}
```

### In Component Styles

```tsx
import { Button } from "@contentstack/venuscn"

// Venus components already use tokens internally
// Just use them - styling is handled
<Button variant="primary">Click Me</Button>
```

## Real Examples from the Demo

### Dashboard Card Pattern

```tsx
<div className="p-6 space-y-8">
  <h2 className="text-2xl font-bold text-[color:var(--color-title)]">
    Section Heading
  </h2>

  <div className="grid grid-cols-4 gap-4">
    {/* Cards with consistent spacing and colors */}
  </div>
</div>
```

**What makes this consistent:**
- `p-6` = 24px page padding (standard)
- `space-y-8` = 32px vertical spacing
- `gap-4` = 16px grid gap (standard for cards)
- Color tokens for text

### Form Pattern

```tsx
<Field>
  <FieldLabel htmlFor="name" required>
    Name
  </FieldLabel>
  <Input id="name" placeholder="Enter name" />
  <HelpText>This will be displayed publicly</HelpText>
</Field>
```

**What makes this consistent:**
- Venus components use tokens internally
- Label: 14px semibold (from tokens)
- Input: 16px height 40px (from tokens)
- Spacing: Built into Field component

## Dark Mode

All tokens have dark mode variants defined. The system automatically switches based on the `.dark` class:

```css
:root {
  --color-title: #111827;  /* Light mode */
}

.dark {
  --color-title: #f5f5f5;  /* Dark mode */
}
```

When you use tokens, dark mode just works:

```tsx
<div className="text-[color:var(--color-title)]">
  {/* Automatically adapts to dark mode */}
</div>
```

## Quick Checklist

When building UI, ask yourself:

- [ ] Does this look like the demo app?
- [ ] Am I using Venus components where they exist?
- [ ] For custom styling, am I using tokens or hardcoding values?
- [ ] Does my spacing match common patterns (p-6, gap-4, etc)?
- [ ] Does it work in dark mode?

## When to Use Tokens vs Hardcode

**Use tokens when:**
- Building reusable components
- Creating layouts that should match the demo
- Supporting dark mode
- Working with brand colors or semantic colors

**Hardcoding is fine when:**
- One-off custom styling
- Pixel-perfect adjustments
- Values that won't change across themes
- Quick prototypes

The goal is consistency, not dogma. Use tokens where they help, skip them when they don't.

## Need More Details?

- **See all tokens:** `packages/venuscn/src/styles/tokens.css`
- **Component examples:** Browse to `/primitives` in the demo
- **Layout examples:** Check `/dashboard` in the demo
- **API reference:** `packages/venuscn/README.md`
