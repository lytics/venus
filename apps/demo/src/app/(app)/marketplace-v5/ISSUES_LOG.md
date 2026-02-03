# Marketplace V5 Issues Log

This document tracks discrepancies found between the vacuum capture data and the V5 implementation, along with diagnosis of what caused the issues.

## Capture Reference
- Sidebar: `cap_1770096848167_d9hsbg`
- Page head: `cap_1770096848750_2uyx2p`
- Page body: `cap_1770096874511_b9cy59`
- Card grid: `cap_1770096899203_ben3go`

---

## Issues Found

### 1. Dividers: Solid vs Dashed

**What capture shows:**
- **Node 23** (`Line Line--Solid`): SOLID divider
  - width: 100%
  - height: 1px
  - borderTopStyle: solid
  - borderTopColor: rgb(221, 227, 238)
  - marginTop: 16px, marginBottom: 16px

- **Nodes 100, 127** (`FilterList__section-divider`): DASHED dividers
  - width: 209px
  - height: 2px
  - borderTopStyle: **dashed**
  - borderTopColor: rgb(221, 227, 238)
  - marginTop: 20px, marginBottom: 20px

**What V5 had:**
- All dividers were solid with wrong dimensions:
  - width: 239px (should be 100% or 209px)
  - height: 1px (should be 1px for solid, 2px for dashed)
  - margin: 11px/16px (should be 16px/16px for solid, 20px/20px for dashed)

**Root cause:**
- LLM guessed/simplified divider styles instead of using capture data
- Did not distinguish between different divider types in the capture

---

### 2. Search Categories Input Container

**What capture shows (Style 26 - Search-input-show):**
- width: 189px
- height: 40px
- padding: 2px 8px 2px 8px
- border: 1px solid rgb(221, 227, 238) - **GRAY**
- borderRadius: 4px

**What V5 had:**
- border: 1px solid rgb(185, 178, 233) - **PURPLE** (guessed)
- width: 100% (wrong)
- padding: 0 12px (wrong)

**Root cause:**
- LLM looked at a zoomed screenshot and guessed the border was purple
- Did not consult the capture data for the actual border color
- Screenshot visual interpretation led to incorrect color assumption

---

### 3. Search Input Text Styles

**What capture shows (Style 29 - Search__input):**
- height: 34px
- fontSize: 14px
- letterSpacing: 0.14px
- lineHeight: 21.008px

**What V5 had:**
- fontSize: 13px (wrong)
- height: 22px (wrong)
- letterSpacing: 0.13px (wrong)

**Root cause:**
- LLM used similar-looking values from other parts of the UI
- Did not look up the specific input element's styles from capture

---

### 4. Section Padding

**What capture shows:**
- Sidebar sections use `padding: 0 15px` (Style 4, 21)
- Inner content sections use different padding values

**What V5 had:**
- Mostly correct, but some inconsistencies

**Status:** Needs verification

---

## Process Issues Identified

### A. Screenshot-based guessing
- When capture data was available, LLM still looked at screenshots and guessed values
- Example: Purple border for search input was guessed from visual inspection

### B. No systematic comparison workflow
- No structured process to compare capture styles against implementation
- Relied on ad-hoc comparisons rather than systematic extraction

### C. Assuming similar elements have same styles
- Different divider types were treated as identical
- Solid vs dashed distinction was lost

### D. Not using capture structure data
- Capture provides both styles AND structure (which nodes use which styles)
- This mapping was not utilized to understand the component hierarchy

---

## Recommended Process Improvements

1. **Always extract capture styles FIRST before making any changes**
2. **Create a style mapping document** that maps capture styles to components
3. **Never guess colors from screenshots** - always use capture RGB values
4. **Distinguish between similar-looking elements** by their classNames
5. **Verify every style property** against capture data before committing

---

## Fixes Applied

- [x] Fix dividers: One solid (after Collections), two dashed (after Categories, after App Type)
  - Solid: width: 100%, height: 1px, margin: 16px 0, borderTop: 1px solid
  - Dashed: width: 209px, height: 2px, margin: 20px 0, borderTop: 1px dashed
- [x] Fix search input container: Gray border rgb(221, 227, 238), width: 189px, height: 40px, padding: 2px 8px
- [x] Fix search input: fontSize: 14px, height: 34px, letterSpacing: 0.14px
- [ ] Verify all section padding matches capture

---

## Additional Issues Found

### 5. Chevron Direction Logic

**What capture shows:**
- Expanded sections (showing content) have chevron rotated 180deg (pointing up)
- `className=rotate-180` with `transform: matrix(-1, 0, 0, -1, 0, 0)`

**What V5 has:**
- Categories is marked as `collapsed={true}` but shows content (inconsistent state)
- Chevron points down when collapsed=true

**Status:** Minor interactive state inconsistency, not a visual styling bug

### 6. Search Icon in Input

**What capture shows (Style 27):**
- Icon container: 16px × 20px

**What V5 has:**
- Icon: 16px × 16px (close but different height)

**Status:** Minor - needs verification if this causes visual difference
