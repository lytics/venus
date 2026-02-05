---
name: vacuum-rebuild
description: Use when building components from vacuum captures. MANDATORY workflow - no shortcuts.
---

# Vacuum Rebuild Workflow

## Overview

Vacuum captures contain EXACT data - styles, text, images, counts. Your job is to COPY this data into code, not interpret or guess.

**Core principle:** Every value comes from the capture. Nothing is invented.

**Context management:** Each zone builds in its own subagent to prevent context exhaustion.

## The Iron Law

```
NO GUESSING. EVER.
```

If the data isn't in the capture response, you STOP and ask. You do not:
- Make up placeholder text
- Guess at colors, sizes, or spacing
- Assume item counts
- Invent image URLs

## When to Use

Use this workflow for ANY vacuum rebuild:
- Building a new page from captures
- Rebuilding a zone from a capture
- Cloning a component style
- Matching production exactly

---

## Complete Tool Reference

### Pre-Build Tools
| Tool | When to Use |
|------|-------------|
| `capture_page_build_manifest` | **REQUIRED FIRST** - get ordered zone list |
| `capture_page_zones` | Quick overview of zones before diving deep |
| `capture_issues` | **CHECK FOR PROBLEMS** - warnings/errors in capture data |
| `capture_compare_zones` | Multi-page apps - find shared vs different zones |
| `capture_components` | Find reusable patterns to seed component library |

### Zone Build Tools
| Tool | When to Use |
|------|-------------|
| `capture_list_elements` | Step 3: Discover all elements by className |
| `capture_get_tokens` | Step 4: **PRIMARY** styling — get semantic tokens (t.namespace.key) |
| `capture_get_structure` | Step 5: Get component tree + text + SVGs (instanceData) |
| `capture_get` | Step 5b: Get renderableHtml for image URLs (if zone has images) |
| `capture_transform` | Step 7: Validate token refs + output production code |
| `capture_get_styles_for_classes` | **FALLBACK** only — use when tokens aren't suitable |

### Verification Tools
| Tool | When to Use |
|------|-------------|
| `capture_verify` | Structural check - are elements present? |
| `capture_verify_styles` | CSS comparison - do values match? |
| `audit_get` | **FINAL CHECK** - visual diff with CSS fixes needed |

---

## Architecture: Subagent Per Zone

**CRITICAL:** Each zone builds in its own subagent to prevent context exhaustion.

```
Main Context (small footprint)
├── Phase 0: Pre-Build Checks
│   ├── capture_issues → Check for data problems
│   ├── capture_page_build_manifest → Get zones
│   └── Layout conflict detection
│
├── Phase 1: Discovery
│   └── Create tasks for each zone
│
├── Phase 2-4: Zone Builds (SUBAGENTS)
│   ├── Task tool → Zone 1 subagent → writes files
│   ├── Task tool → Zone 2 subagent → writes files
│   └── (parallel when independent)
│
└── Phase 5: Assembly + Final Verification
    ├── Create page.tsx
    ├── audit_get → Visual diff check
    └── User visual confirmation
```

---

## Phase 0: Pre-Build Checks (MANDATORY)

### Step 1: Check for Capture Issues

```
Tool: capture_issues
Input: { pageId: "page_xxx" }
```

**If issues are returned:**
- Review warnings/errors
- If critical (missing data, broken zones) → STOP and report to user
- If minor → proceed but note them

### Step 2: Get the Build Manifest

```
Tool: capture_page_build_manifest
Input: { pageId: "page_xxx" }
```

Review the zones and their topComponents.

### Step 3: Quick Zone Overview (Optional but Recommended)

```
Tool: capture_page_zones
Input: { pageId: "page_xxx" }
```

Get lightweight summaries before diving into full captures.

---

## Phase 0.5: Layout Conflict Detection (MANDATORY)

**BEFORE creating zone tasks, you MUST check for layout conflicts.**

### Step 1: Find ALL Layout Files in the Route Tree

**CRITICAL:** Check the ENTIRE route path, not just the immediate parent.

For a page at `apps/demo/src/app/(app)/marketplace-v5/apps-v2/page.tsx`, check:
```
1. apps/demo/src/app/layout.tsx           (root)
2. apps/demo/src/app/(app)/layout.tsx     (app group)
3. apps/demo/src/app/(app)/marketplace-v5/layout.tsx  (feature)
4. Any layout-client.tsx files alongside these
```

**Use Glob to find all layouts:**
```
Glob: apps/demo/src/app/**/layout*.tsx
```

Then filter to layouts that are ANCESTORS of your target page path.

### Step 2: Read Each Layout and Check for Components

For EACH layout in the route tree, look for:
- Sidebar: `Sidebar`, `AppSidebar`, `MarketplaceSidebar`, etc.
- Navigation: `Nav`, `TopNav`, `Header`, etc.
- Footer: `Footer`, etc.

**Example conflict (THIS ACTUALLY HAPPENED):**
```
marketplace-v5/layout.tsx has <MarketplaceSidebar />
→ Building a SidebarZone creates DOUBLE SIDEBAR
```

### Step 3: DEFAULT TO SKIP for Layout Components

**RULE:** For sidebar, nav, header, footer zones:
- **DEFAULT is SKIP** - assume the layout provides these
- Only build if user EXPLICITLY requests "Build standalone"

```
AskUserQuestion:
  question: "The manifest has a sidebar zone. The route tree already has MarketplaceSidebar in marketplace-v5/layout.tsx. What should I do?"
  options:
    - label: "Skip this zone (Recommended)"
      description: "The layout already provides a sidebar - don't duplicate it"
    - label: "Pass capture data as props"
      description: "Update the existing sidebar with capture data"
    - label: "Build standalone"
      description: "Build anyway - I'll handle the integration myself"
```

### Step 4: When In Doubt, Don't Build Layout Zones

- **ASK** rather than building and creating duplicates
- Duplicates are visible errors that frustrate users
- Missing content can be added; duplicates require deletion

---

## Phase 1: Discovery (Main Context)

1. **Review Each Zone** from the manifest:
   - `zoneId` (the capture ID)
   - `zoneType` (nav, sidebar, main, footer, etc.)
   - `topComponents` (what's inside)
   - `estimatedComplexity`

2. **Check for Related Zones**

   **Main + Section pattern:** If manifest shows both "main" and "section" zones:
   - "main" usually contains SEARCH BAR, TABS, or FILTERS
   - "section" contains the content grid (cards, list, etc.)
   - YOU MUST BUILD BOTH - don't skip main!

3. **Check Zone Complexity** (from build_manifest response)

   For each zone, check `splitRecommended`:
   - If `splitRecommended: false` → dispatch as single subagent
   - If `splitRecommended: true` → split using `suggestedSplits`
   - Each sub-zone gets its own subagent with a `focusSelector`
   - Assembly step stitches sub-zone outputs together

   **This prevents the main+section death:** Instead of one 115k-token subagent that exhausts context, you get two manageable ones.

4. **Create Zone Tasks (REQUIRED)**
   ```
   TaskCreate: "Build zone: sidebar (cap_xxx) - SKIPPED, layout has it"
   TaskCreate: "Build zone: main (cap_xxx) - BUILD"
   TaskCreate: "Build zone: section (cap_xxx) - BUILD"
   TaskCreate: "Assembly: page.tsx + audit_get verification"
   ```

---

## Phase 2-4: Zone Builds (SUBAGENTS)

**For EACH zone, dispatch a subagent:**

```
Tool: Task
Input: {
  "subagent_type": "general-purpose",
  "description": "Build [zoneType] zone",
  "prompt": <zone build prompt - see template below>
}
```

### Zone Build Prompt Template

```
Build the [ZONE_TYPE] zone from vacuum capture [CAPTURE_ID].

Target file: [OUTPUT_PATH]

## Instructions

### PROGRESS CHECKPOINTS
After each phase, write status to [OUTPUT_PATH].status.json:
- After discovery: { "zone": "[ZONE_TYPE]", "phase": "discovery", "elements": N }
- After building: { "zone": "[ZONE_TYPE]", "phase": "built", "files": ["file.tsx"] }
- After verification: { "zone": "[ZONE_TYPE]", "phase": "verified", "score": N }
If you cannot complete a phase, write: { "zone": "[ZONE_TYPE]", "phase": "failed", "error": "description" }

### DISCOVERY
1. Call capture_list_elements with captureId "[CAPTURE_ID]"
   - Review ALL classes/components found
   - Note exact counts
   - Note if zone has images (Avatar__image, img elements)
   - Write checkpoint: { "phase": "discovery", "elements": N }

### GET STYLES (tokens are PRIMARY)
2. Call capture_get_tokens with captureId "[CAPTURE_ID]"
   - Returns semantic token vocabulary: t.namespace.key for every style
   - Includes hover/focus states and SVG icons
   - This is the DEFAULT styling path — use tokens, not raw CSS values
   - FALLBACK: Only use capture_get_styles_for_classes for very simple zones or debugging

### GET CONTENT
3. Call capture_get_structure with id "[CAPTURE_ID]" and includeInstanceData: true
   - Extract ALL text content exactly as shown
   - Extract ALL SVG markup
   - Note exact item counts (if 23 cards, there must be 23)

4. **IF zone has images:** Call capture_get with id "[CAPTURE_ID]"
   - The renderableHtml contains REAL image URLs
   - Extract img src values — DO NOT invent alternatives
   - For images that won't load on localhost, use fallback:
     `<img src="original-url" onError={(e) => { e.currentTarget.src = 'http://localhost:3456/api/assets/[CAPTURE_ID]/[INDEX]' }} />`

### BUILD
5. Write the component to [OUTPUT_PATH]
   - Use t.namespace.key token refs for ALL styles
   - Use instanceData for ALL text content
   - NO placeholder text, NO invented content
   - Write checkpoint: { "phase": "built", "files": ["file.tsx"] }

### TRANSFORM
6. Call capture_transform with captureId "[CAPTURE_ID]" and your code
   - format: "tailwind" (default) or "css" or "inline"
   - Validates ALL token references — invalid tokens cause hard errors
   - Returns production-ready code with real style values

### VERIFICATION (ALL 3 REQUIRED — audits auto-generate)
7. Call capture_verify with the outputHtml
   - Score must be >= 8
   - If < 8, fix issues and re-verify
   - This auto-generates an audit (no separate step needed)

8. Call capture_verify_styles with:
   - captureId: "[CAPTURE_ID]"
   - outputStyles: object mapping component names to their style values
   - Fix ANY critical mismatches before continuing
   - This appends CSS results to the audit

9. Call audit_get with captureId "[CAPTURE_ID]"
   - Returns the combined audit from steps 7+8
   - Review all diffs and apply remaining fixes
   - Report the audit results in your completion message
   - Write checkpoint: { "phase": "verified", "score": N }

### INVENTION CHECK
For every component/icon/badge/element in your output:
- Can you point to where it appears in capture_list_elements?
- Can you point to where the SVG appears in capture_get_structure?
- If NO to either → **DELETE IT**

## Critical Rules
- If ANY data is missing from capture, STOP and report what's missing
- Do NOT invent content
- Use exact values from capture responses
- **IMAGE URLS are in capture_get's renderableHtml** - not in capture_get_structure
- Use t.namespace.key token refs — NOT raw CSS values

## ANTI-INVENTION RULES (CRITICAL)

Before writing ANY component, icon, badge, or element:

1. **Verify it exists in capture_list_elements output**
   - If the class/component isn't listed → DO NOT CREATE IT

2. **Verify SVGs exist in capture_get_structure instanceData**
   - If an SVG isn't in the capture data → DO NOT CREATE IT
   - No SVG = No icon

3. **Red flag patterns - STOP if you're about to:**
   - Create a "VerifiedIcon", "Badge", "Checkmark" without capture evidence
   - Add decorative elements "for polish"
   - Create any component not explicitly in the capture

4. **When in doubt:**
   - If not found → STOP and report "Element X not found in capture"
   - DO NOT substitute or invent alternatives
```

---

## Phase 5: Assembly + Final Verification (Main Context)

**After all zone subagents complete:**

### Step 1: Check Task Status
```
TaskList
```
All zone tasks should be completed.

### Step 1b: Check Zone Status Files
For each zone, read `[OUTPUT_PATH].status.json`:
- **verified** (score >= 8) → ready for assembly
- **built** (not verified) → subagent exhausted context before verification
- **failed** → subagent couldn't complete, check error
- **no file** → subagent died before any checkpoint

**Report summary:**
```
Zone Results:
✓ header - verified (score 9/10)
✓ sidebar - skipped (layout provides)
⚠ main - built but not verified (subagent exhausted context)
✗ footer - failed during discovery
```

If any zone is NOT verified, inform the user and offer to retry.

### Step 2: Create page.tsx
Import all zone components and compose the page layout.

**IMPORTANT:** Use correct import style:
- `export default function X` → `import X from "./X"`
- `export function X` → `import { X } from "./X"`

### Step 3: Final Audit (MANDATORY)

```
Tool: audit_get
Input: { captureId: "<main-zone-capture-id>" }
```

**This returns structured diffs with CSS property fixes needed.**

If the audit shows issues:
- Fix them before marking complete
- Re-run audit_get to confirm

### Step 4: User Visual Verification

```
"Please visually compare the result to the source.

Check for:
- Duplicate sidebars/navs (layout conflict)
- Missing elements
- Color/style differences
- Invented elements not in source

The audit_get results showed: [summarize audit results]

Let me know if anything looks off."
```

**Do NOT mark complete until user confirms.**

---

## Red Flags - Don't Do These

| Wrong Thought | Do This Instead |
|---------------|-----------------|
| "I'll use a placeholder" | Get data from capture_get_structure |
| "About 20px should work" | Get exact value from capture_get_styles_for_classes |
| "I'll build all zones in main context" | Use subagents per zone |
| "Image src is empty" | Use capture_get - renderableHtml has URLs |
| "I'll skip the main zone" | Build it - has search/tabs above section |
| "Hover not in capture, skip it" | Add standard hover (translateY + shadow) |
| "I'll add a verified badge for polish" | ONLY add elements from capture data |
| "This icon would look good here" | NO - only capture icons |
| "I only need to check layout.tsx" | Check ALL layouts: app/, (app)/, feature/, etc. |
| "capture_verify passed, I'm done" | Also run capture_verify_styles AND audit_get |
| "I'll build a sidebar zone" | DEFAULT SKIP - check if layout tree already has one |
| "The immediate layout has no sidebar" | Check PARENT layouts too |
| "6/6 verification score means correct" | Score checks structure, not styles |
| "I'll skip audit_get" | NO - it shows the CSS fixes you need |
| "I'll use capture_get_styles_for_classes" | Only as FALLBACK — use capture_get_tokens as PRIMARY |
| "I'll combine main+section in one subagent" | NO — one zone per subagent, always |
| "The zone is complex but I'll try it" | Check splitRecommended — split if needed |

---

## Quick Reference

| Phase | Tools |
|-------|-------|
| Pre-Build | `capture_issues`, `capture_page_build_manifest`, `capture_page_zones` |
| Layout Check | Glob layouts, Read each, AskUserQuestion if conflicts |
| Zone Build | `capture_list_elements`, `capture_get_tokens`, `capture_get_structure`, `capture_get`, `capture_transform` |
| Verification | `capture_verify`, `capture_verify_styles`, `audit_get` |
| Assembly | Write page.tsx, final `audit_get`, user confirmation |

---

## Advanced Tools (When Needed)

### For Multi-Page Apps
```
Tool: capture_compare_zones
Input: { pageIds: ["page_1", "page_2", "page_3"] }
```
Identifies shared components vs page-specific variants.

### For Component Libraries
```
Tool: capture_components
Input: { domain: "app.contentstack.com", minOccurrences: 2 }
```
Finds reusable patterns across all captures for a domain.

### Note on Styling
Token-based styling (capture_get_tokens → capture_transform) is the PRIMARY path.
It is used in the standard zone build template above.
capture_get_styles_for_classes is available as a FALLBACK for simple zones or debugging.

---

## Known Capture Limitations & Auto-Fixes

**Hover Effects:** Not captured. Apply automatically:
| Component | Hover Effect |
|-----------|--------------|
| Cards | `transform: translateY(-2px)`, `box-shadow: 0 4px 12px rgba(0,0,0,0.15)` |
| Buttons | Darken background by 10% |
| Links | `text-decoration: underline` |

---

## Remember

- **Check capture_issues FIRST** - know if data has problems
- **Check ALL layouts in route tree** - prevent double sidebars
- **DEFAULT SKIP for sidebar/nav/header/footer** - layouts usually have these
- **Run ALL THREE verification tools** - verify, verify_styles, audit_get
- **Every value from capture** - no exceptions
- **Every zone in its own subagent** - prevent context exhaustion
- **Use capture_get_tokens as PRIMARY** - not capture_get_styles_for_classes
- **Check zone complexity** - split if splitRecommended is true
- **Write progress checkpoints** - status.json after each phase
