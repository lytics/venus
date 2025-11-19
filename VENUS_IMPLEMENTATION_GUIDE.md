# Venus Implementation Guide

## Quick Start

Venus tokens are now available in your project! This guide shows you how to use them while maintaining your current visual design.

## ⚠️ Production App Values (Use These!)

**IMPORTANT:** The components in `/src/components/venus/` use production values from app.contentstack.com, NOT the original Storybook specs:

### Typography (Production)
- **Buttons**: 14px (small), **16px (regular)**, 18px (large) - **600 weight**
- **Inputs/Textareas**: **16px** - 400 weight
- **Field Labels**: **14px** - **600 weight**
- **Toggle/Checkbox Labels**: 14px - 400 weight
- **Help Text**: 13px - 400 weight

These values have been verified via Chrome DevTools inspection and are what Contentstack actually uses in production.

## Token Import

Venus tokens are automatically imported via `globals.css`:
```css
@import "../styles/venus-tokens.css";
```

All tokens are available globally in your components.

---

## Color Mapping

### Current Dashboard Colors → Venus Tokens

| Current Value | Usage | Venus Token | Tailwind Class |
|--------------|--------|-------------|----------------|
| `#111827` | Page/card titles | `--color-venus-gray-title` | `.text-venus-title` |
| `#475161` | Section headings | `--color-venus-gray-heading` | `.text-venus-heading` |
| `#6B7280` | Card descriptions | `--color-venus-gray-text-secondary` | `.text-venus-body` |
| `#F9F8FF` | Card icon background | `--color-venus-surface-purple` | `.bg-venus-surface-purple` |
| `#e5e7eb` | Card border (default) | `--color-venus-gray-border` | `.border-venus` |
| `#3B4555` | Card border (hover) | `--color-venus-gray-border-hover` | `.border-venus-hover` |
| `#F7F9FC` | Light background | `--color-venus-gray-100` | `bg-gray-100` |

### Before & After Examples

**Title Text:**
```tsx
// Before
<h1 className="text-[#111827]">Welcome, Ellis</h1>

// After (using Venus token)
<h1 className="text-venus-title">Welcome, Ellis</h1>
```

**Section Headings:**
```tsx
// Before
<h2 className="text-[#475161]">Explore Apps</h2>

// After
<h2 className="text-venus-heading">Explore Apps</h2>
```

**Card Descriptions:**
```tsx
// Before
<p className="text-[#6B7280]">Create content using best-in-class CMS</p>

// After
<p className="text-venus-body">Create content using best-in-class CMS</p>
```

**Card Icon Background:**
```tsx
// Before
<div className="bg-[#F9F8FF]">

// After
<div className="bg-venus-surface-purple">
```

**Card Borders:**
```tsx
// Before
<Card
  style={{ borderColor: '#e5e7eb' }}
  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3B4555'}
  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
>

// After
<Card className="border-venus hover:border-venus-hover transition-venus">
```

---

## Spacing Mapping

### Current Dashboard Spacing → Venus Tokens

| Current Class | Usage | Venus Token | Keep Class |
|--------------|--------|-------------|-----------|
| `px-4` | Card content padding | `--venus-card-padding-x` | ✅ Keep `px-4` |
| `p-6` | Page padding | `--venus-page-padding` | ✅ Keep `p-6` |
| `pt-8` | Page top padding | `--venus-page-padding-top` | ✅ Keep `pt-8` |
| `px-8` | Page horizontal padding | `--venus-page-padding-x` | ✅ Keep `px-8` |
| `gap-6` | Section gap | `--venus-section-gap` | ✅ Keep `gap-6` |
| `gap-4` | Card grid gap | `--venus-card-grid-gap` | ✅ Keep `gap-4` |

**Important:** For spacing, continue using Tailwind classes (`px-4`, `gap-6`, etc.) as they're already correct. The Venus tokens document these values for reference and future components.

---

## Typography Mapping

### Current Dashboard Typography → Venus Tokens

| Current Classes | Usage | Venus Equivalent | Keep Classes |
|----------------|--------|------------------|--------------|
| `text-4xl font-bold` | Page title | `--font-size-venus-4xl` + `--font-weight-venus-bold` | ✅ Keep classes |
| `text-2xl font-bold` | Section headings | `--font-size-venus-2xl` + `--font-weight-venus-bold` | ✅ Keep classes |
| `text-lg font-semibold` | Card titles | `--font-size-venus-lg` + `--font-weight-venus-semibold` | ✅ Keep classes |
| `text-sm font-medium` | Card descriptions | `--font-size-venus-sm` + `--font-weight-venus-medium` | ✅ Keep classes |
| `leading-snug` | Description line height | `--line-height-venus-snug` | ✅ Keep class |

**Important:** Typography classes should remain as-is since they're working perfectly. Venus tokens document these for new components.

---

## Component Patterns

### Card Component (Explore Apps Style)

Current implementation is perfect! When creating similar cards elsewhere, use this pattern:

```tsx
<Card className="border-venus hover:border-venus-hover transition-venus cursor-pointer">
  <CardContent className="px-4">
    <div className="bg-venus-surface-purple rounded-[var(--radius)] w-full h-24 flex items-center justify-center mb-3">
      <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
        <Image src="/icon.svg" alt="Icon" width={24} height={24} />
      </div>
    </div>
    <h3 className="font-semibold text-lg text-venus-title mb-1">Card Title</h3>
    <p className="text-sm font-medium text-venus-body leading-snug">Card description text</p>
  </CardContent>
</Card>
```

**Key Venus tokens used:**
- `border-venus` + `hover:border-venus-hover` for borders
- `bg-venus-surface-purple` for icon background
- `text-venus-title` for card title
- `text-venus-body` for description
- `transition-venus` for smooth hover

---

## Dashboard Layout Tokens

The dashboard uses a carefully fine-tuned layout. These tokens preserve those exact values:

```css
--venus-page-padding: 24px;           /* p-6 */
--venus-page-padding-top: 32px;       /* pt-8 */
--venus-page-padding-x: 32px;         /* px-8 */
--venus-section-gap: 24px;            /* gap-6 */
--venus-card-grid-gap: 16px;          /* gap-4 */
--venus-card-padding-x: 16px;         /* px-4 - CRITICAL! */
```

**Keep existing layout classes intact:**
```tsx
<div className="flex flex-col gap-6 p-6 pt-8 px-8">
  {/* Your content */}
</div>
```

---

## Grid Layout

### Responsive Grid (2.2:1 ratio)

This ratio was specifically fine-tuned - keep as-is:

```tsx
<div className="grid grid-cols-1 @4xl:grid-cols-[2.2fr_1fr] gap-6">
  {/* Left column */}
  {/* Right column */}
</div>
```

### Card Grid (Fixed 208px cards)

```tsx
<div className="grid grid-cols-[repeat(auto-fill,208px)] gap-4">
  {/* Cards */}
</div>
```

---

## Icon Sizing

Standard icon sizes from dashboard:

```tsx
/* Icon container - 40x40px */
<div className="w-10 h-10 rounded-lg flex items-center justify-center">
  {/* Icon - 24x24px */}
  <Image src="/icon.svg" alt="Icon" width={24} height={24} />
</div>
```

**Venus tokens:**
- `--venus-icon-container-size`: `40px` (maps to `w-10 h-10`)
- `--venus-icon-size`: `24px`

---

## Creating New Components with Venus

When building new components, follow these patterns:

### Button (Venus Style)

```tsx
<button className="
  inline-flex items-center justify-center gap-2
  px-4 h-9
  rounded-md
  bg-[var(--color-venus-primary)]
  text-white
  font-medium text-sm
  hover:bg-[var(--color-venus-primary-hover)]
  transition-venus
">
  Button Text
</button>
```

### Input (Venus Style)

```tsx
<input
  className="
    w-full h-9
    px-3
    rounded-md
    border border-venus
    text-sm
    placeholder:text-gray-400
    focus:border-[var(--color-venus-primary)]
    focus:ring-3 focus:ring-[var(--color-venus-primary)]/10
    transition-venus
  "
  placeholder="Enter text..."
/>
```

### Card (Venus Style)

```tsx
<Card className="border-venus hover:border-venus-hover transition-venus">
  <CardContent className="px-4">
    {/* Content */}
  </CardContent>
</Card>
```

---

## Refactoring Checklist

When refactoring existing components to use Venus tokens:

- [ ] Replace hex color codes with Venus token classes
- [ ] Use `.text-venus-title` for titles
- [ ] Use `.text-venus-heading` for section headings
- [ ] Use `.text-venus-body` for descriptions
- [ ] Use `.bg-venus-surface-purple` for purple backgrounds
- [ ] Use `.border-venus` and `.hover:border-venus-hover` for borders
- [ ] Add `.transition-venus` for smooth transitions
- [ ] **DO NOT** change spacing classes (`px-4`, `gap-6`, etc.)
- [ ] **DO NOT** change typography size/weight classes
- [ ] **DO NOT** change layout grids or responsive breakpoints
- [ ] Test visually after refactoring - nothing should shift!

---

## Visual Testing

After refactoring, verify:

1. **Colors match exactly** - titles, headings, descriptions, borders
2. **Spacing unchanged** - card padding is still 16px, gaps are correct
3. **Typography unchanged** - sizes and weights match original
4. **Hover states work** - borders change color smoothly
5. **Layout intact** - 2.2:1 grid ratio preserved, cards at 208px width
6. **Icons correct** - 40x40px containers, 24x24px icons

Run the app side-by-side with the original and compare pixel-by-pixel.

---

## Token Reference

All Venus tokens are documented in:
- **`VENUS_DESIGN_TOKENS.md`** - Complete token extraction and documentation
- **`src/styles/venus-tokens.css`** - Actual token definitions

### Quick Token Lookup

**Colors:**
- Title: `--color-venus-gray-title` (#111827)
- Heading: `--color-venus-gray-heading` (#475161)
- Body: `--color-venus-gray-text-secondary` (#6B7280)
- Border: `--color-venus-gray-border` (#e5e7eb)
- Border Hover: `--color-venus-gray-border-hover` (#3B4555)
- Purple Surface: `--color-venus-surface-purple` (#F9F8FF)

**Spacing (keep as Tailwind classes):**
- `px-4` = 16px (card padding)
- `p-6` = 24px (page padding)
- `pt-8` = 32px (page top padding)
- `px-8` = 32px (page horizontal padding)
- `gap-6` = 24px (section gap)
- `gap-4` = 16px (card gap)

**Typography (keep as Tailwind classes):**
- `text-4xl font-bold` = 36px, 700 weight
- `text-2xl font-bold` = 24px, 700 weight
- `text-lg font-semibold` = 18px, 600 weight
- `text-sm font-medium` = 14px, 500 weight

---

## Next Steps

1. ✅ Venus tokens are installed and imported
2. ✅ Documentation created (this file)
3. ⏳ Refactor dashboard colors to use Venus token classes
4. ⏳ Verify with Playwright that appearance is identical
5. ⏳ Create reusable Venus-styled components for future use

---

## Support

If you need to add new Venus components or patterns:
1. Check `VENUS_DESIGN_TOKENS.md` for token values
2. Follow the patterns in this guide
3. Test thoroughly before committing

**Remember:** The goal is to maintain visual consistency while using a maintainable token system. When in doubt, preserve the existing appearance!
