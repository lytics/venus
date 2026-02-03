# Vacuum Capture Validation Process Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a validation-first workflow for building UI from vacuum captures that STOPS on errors and produces perfect results on first try — no more invented data, no more guessing.

**Architecture:** Create a validation layer that uses `capture_verify` BEFORE and AFTER building components. Every capture consumption must pass verification. If verification fails, STOP with clear error — never proceed with placeholder data.

**Tech Stack:** Vacuum MCP tools (`capture_get`, `capture_get_structure`, `capture_verify`), TypeScript, markdown checklists.

---

## Root Cause Analysis

The v4 build failed because:

1. **Agent looked at wrong JSON path** — MCP returns `{ capture: { componentTree: { nodes: [...] } } }` but agent looked at top-level `componentTree` (empty `{}`)
2. **No pre-build verification** — Didn't use `capture_verify` to validate data extraction before building
3. **No post-build verification** — Didn't use `capture_verify` to compare output against source
4. **Invented data on failure** — When capture data appeared missing, agent made up content instead of stopping

**Key discovery:** The `capture_verify` MCP tool EXISTS and returns detailed validation (score, missing text, missing SVGs). It would have caught ALL v4 issues but was never used.

---

## The Validation-First Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  BEFORE BUILDING ANYTHING                                       │
├─────────────────────────────────────────────────────────────────┤
│  1. Get capture structure → capture_get_structure               │
│  2. Verify data exists at capture.componentTree.nodes           │
│  3. Count expected elements (text, SVGs, repeating groups)      │
│  4. If data missing → STOP, don't invent                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  WHILE BUILDING                                                 │
├─────────────────────────────────────────────────────────────────┤
│  1. Extract text from nodes[].text — never guess                │
│  2. Extract styles from nodes[].styles — never approximate      │
│  3. Handle repeating groups with .map() — check instances       │
│  4. If ANY data point missing → STOP, ask for guidance          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  AFTER BUILDING                                                 │
├─────────────────────────────────────────────────────────────────┤
│  1. Run capture_verify with built HTML                          │
│  2. Check score >= 8 (out of 10)                                │
│  3. If score < 8 → FIX issues, don't ship broken                │
│  4. Visual screenshot comparison against production             │
└─────────────────────────────────────────────────────────────────┘
```

---

### Task 1: Create capture data extraction guide

**Files:**
- Create: `docs/vacuum-capture-workflow.md`

**Step 1: Write the extraction guide**

This document codifies HOW to correctly extract data from vacuum captures.

```markdown
# Vacuum Capture Data Extraction Guide

## MCP Response Structure

The vacuum MCP returns data in this structure:

```
{
  "success": true,
  "capture": {
    "componentTree": {
      "nodes": [
        {
          "tag": "div",
          "text": "Actual text content",
          "styles": { ... },
          "children": [ ... ]
        }
      ]
    },
    "renderableHtml": "<div>...</div>"
  }
}
```

## CRITICAL: Correct Data Path

**WRONG:** `response.componentTree` (this is empty `{}`)
**RIGHT:** `response.capture.componentTree.nodes`

## Pre-Build Checklist

Before writing any code from a capture:

- [ ] Called `capture_get_structure` with capture ID
- [ ] Verified `capture.componentTree.nodes` exists and has content
- [ ] Counted text nodes (should match expected UI elements)
- [ ] Counted SVG elements (should match expected icons)
- [ ] Identified repeating groups (check for `repeatingGroup` warnings)

## Data Extraction Rules

1. **Text content** — Always from `nodes[].text`, NEVER invented
2. **Styles** — Always from `nodes[].styles`, NEVER approximated
3. **Icons/SVGs** — Always from `nodes[].svgMarkup` or asset references
4. **Repeating groups** — Use `.map()` over instances, NEVER hardcode single item

## When Data is Missing

If ANY expected data is missing:

1. **STOP** — Do not proceed with placeholder data
2. **Report** — List exactly what's missing
3. **Ask** — Request guidance (re-capture, use reference, etc.)
4. **NEVER** — Invent, guess, or use placeholder content

## Post-Build Verification

After building a component:

1. Run `capture_verify` with:
   - `captureId`: The source capture
   - `outputHtml`: The built component's HTML

2. Check the score:
   - Score >= 8: PASS
   - Score < 8: FIX issues before continuing

3. Review failures:
   - Missing text → Add from capture
   - Missing SVGs → Add from capture assets
   - Structure mismatch → Fix component hierarchy
```

**Step 2: Commit**

```bash
git add docs/vacuum-capture-workflow.md
git commit -m "docs: add vacuum capture data extraction guide"
```

---

### Task 2: Create pre-build verification checklist

**Files:**
- Create: `docs/checklists/vacuum-pre-build.md`

**Step 1: Write the pre-build checklist**

```markdown
# Vacuum Capture Pre-Build Checklist

Use this checklist BEFORE building any component from vacuum capture data.

## Capture ID: `_______________`
## Component: `_______________`

### 1. Structure Verification

- [ ] Called `capture_get_structure` with capture ID
- [ ] Response has `capture.componentTree.nodes` array
- [ ] Nodes array has > 0 elements
- [ ] Node count matches expected UI complexity

### 2. Text Content Verification

List all expected text elements and verify each exists in capture:

| Expected Text | Found in Capture? | Node Index |
|--------------|-------------------|------------|
|              | [ ] Yes [ ] No    |            |
|              | [ ] Yes [ ] No    |            |
|              | [ ] Yes [ ] No    |            |

**If ANY text is missing → STOP. Do not proceed.**

### 3. Icon/SVG Verification

| Expected Icon | Found in Capture? | Asset Type |
|--------------|-------------------|------------|
|              | [ ] Yes [ ] No    |            |
|              | [ ] Yes [ ] No    |            |

**If ANY icon is missing → STOP. Do not proceed.**

### 4. Repeating Groups

- [ ] Identified all repeating groups in capture
- [ ] Each group has `instances` data OR individual node children
- [ ] Will use `.map()` for each repeating group

### 5. Sign-off

- [ ] All expected data found in capture
- [ ] Ready to build (not guess)

**Verified by:** _______________
**Date:** _______________
```

**Step 2: Commit**

```bash
mkdir -p docs/checklists
git add docs/checklists/vacuum-pre-build.md
git commit -m "docs: add vacuum pre-build verification checklist"
```

---

### Task 3: Create post-build verification checklist

**Files:**
- Create: `docs/checklists/vacuum-post-build.md`

**Step 1: Write the post-build checklist**

```markdown
# Vacuum Capture Post-Build Checklist

Use this checklist AFTER building any component from vacuum capture data.

## Capture ID: `_______________`
## Component: `_______________`
## Output File: `_______________`

### 1. Run capture_verify

Call the MCP tool:
```
capture_verify({
  captureId: "<capture-id>",
  outputHtml: "<rendered-html-output>"
})
```

### 2. Score Check

**Score received:** _____ / 10

- [ ] Score >= 8: PASS — Proceed to visual verification
- [ ] Score < 8: FAIL — Fix issues below before continuing

### 3. Issue Resolution (if score < 8)

| Issue Type | Description | Fixed? |
|-----------|-------------|--------|
| Missing text |  | [ ] |
| Missing SVG |  | [ ] |
| Structure mismatch |  | [ ] |
| Style deviation |  | [ ] |

**Re-run capture_verify after fixes until score >= 8**

### 4. Visual Verification

- [ ] Took screenshot of built component
- [ ] Compared against production screenshot
- [ ] No visible differences

### 5. Sign-off

- [ ] capture_verify score >= 8
- [ ] Visual comparison passed
- [ ] Ready to commit

**Verified by:** _______________
**Date:** _______________
```

**Step 2: Commit**

```bash
git add docs/checklists/vacuum-post-build.md
git commit -m "docs: add vacuum post-build verification checklist"
```

---

### Task 4: Create CLAUDE.md section for vacuum workflows

**Files:**
- Modify: `/Users/ellisedwards/Code/workspace/venus_external/CLAUDE.md`

**Step 1: Read current CLAUDE.md**

**Step 2: Add vacuum workflow section**

Add this section before the Quick Reference table:

```markdown
---

## 🔬 Vacuum Capture Workflow

When building UI from vacuum MCP captures, follow these rules:

### Data Path
The correct path is `capture.componentTree.nodes` — NOT top-level `componentTree`.

### Pre-Build (REQUIRED)
1. Call `capture_get_structure` with the capture ID
2. Verify `capture.componentTree.nodes` has content
3. If data is missing → **STOP and ask**, never invent

### Post-Build (REQUIRED)
1. Call `capture_verify` with the built HTML
2. Score must be >= 8 out of 10
3. If score < 8 → **Fix issues**, don't ship broken

### Never Invent
If capture data is missing:
- ❌ DON'T make up placeholder content
- ❌ DON'T guess at values
- ✅ DO stop and report what's missing
- ✅ DO ask for guidance (re-capture, use reference)

See: `docs/vacuum-capture-workflow.md` for full guide.
```

**Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add vacuum capture workflow rules to CLAUDE.md"
```

---

### Task 5: Build marketplace-v5 using the new process

**Files:**
- Create: `apps/demo/src/app/(app)/marketplace-v5/page.tsx`
- Create: `apps/demo/src/app/(app)/marketplace-v5/components/*.tsx`

**Step 1: List available vacuum captures**

Call `capture_page_list` to find marketplace captures.

**Step 2: For each component, follow the checklist**

For sidebar:
1. Pre-build checklist (verify all category names in capture)
2. Build component extracting ONLY from capture data
3. Post-build checklist (capture_verify score >= 8)

For banner:
1. Pre-build checklist (verify background image URL in capture)
2. Build component extracting ONLY from capture data
3. Post-build checklist (capture_verify score >= 8)

For cards:
1. Pre-build checklist (verify all card data in capture)
2. Build component extracting ONLY from capture data
3. Post-build checklist (capture_verify score >= 8)

**Step 3: If ANY verification fails → STOP**

Do not continue to next component. Report what's missing.

**Step 4: Final visual comparison**

Use claude-in-chrome to screenshot v5 vs production.

**Step 5: Commit only if all verifications pass**

```bash
git add 'apps/demo/src/app/(app)/marketplace-v5'
git commit -m "feat: marketplace-v5 built with validation-first process"
```

---

## Success Criteria

The new process is working if:

1. **No invented data** — Every text string, icon, style value comes from capture
2. **Verification gates** — Pre-build and post-build checklists completed for each component
3. **capture_verify scores** — All components score >= 8
4. **Visual match** — Screenshot comparison shows no differences from production
5. **First-try success** — v5 works correctly without iteration/fixes

---

## Process Enforcement

These rules are now mandatory for all vacuum-based builds:

| Step | Tool | Requirement |
|------|------|-------------|
| Pre-build | `capture_get_structure` | Verify data exists at correct path |
| Pre-build | Checklist | All expected content found |
| Build | Manual | Extract ONLY from capture, never invent |
| Post-build | `capture_verify` | Score >= 8 |
| Post-build | claude-in-chrome | Visual screenshot match |

**If any step fails → STOP. Do not proceed with placeholder data.**
