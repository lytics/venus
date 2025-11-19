# Venus Design System - Production Specifications

**Source:** app.contentstack.com (verified via Chrome DevTools + Playwright)
**Last Updated:** October 31, 2025
**Inspection Page:** Extensions Create Field Form

This document contains the **actual production values** used in the Contentstack app, which differ significantly from the original Venus Storybook specifications.

**All components in `/src/components/venus/` use these production values.**

---

## Typography

### Buttons (Actual Production Values)
| Size | Font Size | Font Weight | Height | Padding | Border Radius |
|------|-----------|-------------|--------|---------|---------------|
| **Regular** | **16px** | **600** | **40px** | **8px 16px** | **4px** |
| Small | 14px | 600 | 32px | 8px 12px | 4px |
| Large | 18px | 600 | 48px | 12px 20px | 4px |

**Note:** Production only uses Regular size buttons. Small/Large sizes are extrapolated.

### Form Inputs (Actual Production Values)
| Component | Font Size | Font Weight | Height | Padding | Border Radius |
|-----------|-----------|-------------|--------|---------|---------------|
| Input | **16px** | **400** | **40px** | **4px 10px** | **4px** |
| Textarea | 16px | 400 | auto | 4px 10px | 4px |
| Select | 16px | 400 | 30px | 4px 10px | 4px |

### Labels & Text (Actual Production Values)
| Component | Font Size | Font Weight | Notes |
|-----------|-----------|-------------|-------|
| Field Label | **14px** | **600** | Above inputs |
| Checkbox Label | **16px** | **400** | Next to checkbox |
| Radio Label | **16px** | **400** | Next to radio |
| Toggle Label | 16px | 400 | Next to toggle |
| Help Text | 13px | 400 | Below inputs |
| Validation Message | 13px | 400 | Error/success |

---

## Colors (Unchanged from Storybook)

### Primary
- Primary: `#6C5CE7`
- Primary Hover: `#5F51D8`
- Primary Active: `#5445C9`

### Grays
- Border: `#E3E8EF`
- Border Hover: `#CBD5E0`
- Placeholder: `#A0AEC0`
- Text: `#2D3748`
- Disabled BG: `#F7F9FC`

### Status Colors
- Success: `#10B981`
- Warning: `#F59E0B`
- Danger: `#EF4444`
- Info: `#3B82F6`

---

## Layout

- Border Radius: **`4px`** (all buttons and inputs)
- Focus Ring: `3px` at `10%` opacity
- Transition: `150ms ease-out`
- Spacing Base Unit: `4px`

---

## Component Usage Examples

### Button
```tsx
import { Button } from "@/components/venus";

// Primary CTA (most common in app)
<Button variant="primary" size="regular">
  <Plus className="h-4 w-4" /> Dashboard Extension
</Button>

// Large CTA for emphasis
<Button variant="primary" size="large">
  <Plus className="h-5 w-5" /> Build New App
</Button>
```

### Input
```tsx
import { Input, Field, FieldLabel, HelpText } from "@/components/venus";

<Field>
  <FieldLabel htmlFor="title" required>Title</FieldLabel>
  <Input id="title" placeholder="Please enter a suitable title" />
  <HelpText>This will be displayed in the dashboard</HelpText>
</Field>
```

### Checkbox/Radio/Toggle
```tsx
import { Checkbox, Radio, Toggle } from "@/components/venus";

<Checkbox label="Accept terms and conditions" />
<Radio name="hosting" label="External Hosting" />
<Toggle label="Enable notifications" />
```

---

## Key Differences from Storybook

| Component | Storybook | Production | Change |
|-----------|-----------|------------|--------|
| Button (regular) | 14px, 500 | 16px, 600 | +2px, +100 weight |
| Button (small) | 13px | 14px | +1px |
| Button (large) | 16px | 18px | +2px |
| Input | 14px | 16px | +2px |
| Textarea | 14px | 16px | +2px |
| Field Label | 14px, 500 | 14px, 600 | +100 weight |

**Why these differences?**
- Larger font sizes improve readability on modern high-DPI displays
- Heavier font weight provides better visual hierarchy
- Production apps naturally evolve beyond initial design specs

---

## Implementation Notes

All Venus components in `/src/components/venus/` already use these production values:
- ✅ Button
- ✅ Input
- ✅ Textarea
- ✅ Checkbox
- ✅ Radio
- ✅ Toggle
- ✅ Field/FieldLabel
- ✅ Tag
- ✅ Divider

Import them from `@/components/venus` and they'll match the production app exactly.
