# Vacuum Capture Data Extraction Guide

This document codifies how to correctly extract data from vacuum captures. Following these rules is **mandatory** - deviating from them has caused complete build failures.

---

## 1. MCP Response Structure

When you call `capture_get` or `capture_get_structure`, the MCP returns this structure:

```json
{
  "success": true,
  "capture": {
    "componentTree": {
      "nodes": [
        {
          "tag": "div",
          "text": "Actual text content from the page",
          "styles": {
            "backgroundColor": "#ffffff",
            "fontSize": "14px",
            "fontWeight": "600"
          },
          "children": [
            { "tag": "span", "text": "Nested content", "styles": {...} }
          ],
          "svgMarkup": "<svg>...</svg>"
        }
      ]
    },
    "renderableHtml": "<div class=\"...\">Full HTML reference</div>"
  }
}
```

---

## 2. CRITICAL: Correct Data Path

### WRONG PATH - This is EMPTY:
```javascript
response.componentTree        // Returns: {}
response.componentTree.nodes  // Returns: undefined
```

### CORRECT PATH - This has all the data:
```javascript
response.capture.componentTree.nodes  // Returns: Array of node objects
```

**The `capture` wrapper is REQUIRED. Always access data through `response.capture.componentTree.nodes`.**

---

## 3. Pre-Build Checklist

Before writing ANY component code, verify ALL of the following:

- [ ] Called `capture_get_structure` with the correct capture ID
- [ ] Verified `capture.componentTree.nodes` exists and is a non-empty array
- [ ] Counted text nodes (nodes with `.text` property)
- [ ] Counted SVG elements (nodes with `.svgMarkup` property)
- [ ] Identified repeating groups (arrays of similar structures)
- [ ] Listed all unique text strings found in the capture
- [ ] Documented the component hierarchy (parent/child relationships)

**If ANY item fails, STOP and report the issue before proceeding.**

---

## 4. Data Extraction Rules

### Text Content
- **ALWAYS** extract from `nodes[].text`
- **NEVER** invent text content
- **NEVER** use placeholder strings like "Lorem ipsum" or "Sample text"

```javascript
// CORRECT
const title = node.text;  // "Integrations Marketplace" from capture

// WRONG - NEVER DO THIS
const title = "Integrations Marketplace";  // Hardcoded assumption
```

### Styles
- **ALWAYS** extract from `nodes[].styles`
- **NEVER** approximate or guess values
- Use exact pixel values, colors, and properties from the capture

```javascript
// CORRECT
const styles = {
  fontSize: node.styles.fontSize,      // "16px" from capture
  color: node.styles.color,            // "#475161" from capture
  fontWeight: node.styles.fontWeight   // "600" from capture
};

// WRONG - NEVER DO THIS
const styles = {
  fontSize: "16px",   // Guessed value
  color: "#333",      // Approximated color
};
```

### Icons and SVGs
- **ALWAYS** extract from `nodes[].svgMarkup` or referenced assets
- **NEVER** substitute with generic icons
- If an SVG is missing, report it - do not replace with a similar icon

```javascript
// CORRECT
const icon = node.svgMarkup;  // Actual SVG from capture

// WRONG - NEVER DO THIS
import { SomeIcon } from "lucide-react";  // Substituted different icon
```

### Repeating Groups
- **ALWAYS** use `.map()` over instance data from the capture
- **NEVER** hardcode repeated items

```javascript
// CORRECT
const cards = capture.repeatingGroups[0].instances.map(instance => ({
  title: instance.text,
  icon: instance.svgMarkup
}));

// WRONG - NEVER DO THIS
const cards = [
  { title: "Card 1", icon: placeholder },
  { title: "Card 2", icon: placeholder },
  { title: "Card 3", icon: placeholder }
];
```

---

## 5. When Data is Missing

If you cannot find expected data in the capture, follow these rules **WITHOUT EXCEPTION**:

### STOP
Do not proceed with the build. Do not write component code.

### Report
List exactly what is missing:
- "Could not find text content for the header"
- "No SVG markup found for the search icon"
- "Expected 12 card items but found 0 in capture"

### Ask
Request guidance from the user:
- "The capture appears to be missing X. Should I re-capture the page?"
- "I found the data at an unexpected path. Please confirm this is correct."

### NEVER
- **NEVER** invent content to fill gaps
- **NEVER** use placeholder data
- **NEVER** guess what the content should be
- **NEVER** proceed assuming you'll fix it later
- **NEVER** use "example" or "sample" content

**If data is missing, the build cannot proceed. Period.**

---

## 6. Post-Build Verification

After building a component, you **MUST** verify it against the capture.

### Run Verification
```javascript
capture_verify({
  captureId: "cap_xxxxx",
  outputHtml: "<your rendered component HTML>"
})
```

### Interpret Results

| Score | Action |
|-------|--------|
| 8-10 | **PASS** - Component matches capture |
| 5-7 | **WARNING** - Review discrepancies, fix if possible |
| 0-4 | **FAIL** - Do not proceed, fix all issues |

### What Gets Checked
- Text content matches
- Color values match
- Font sizes and weights match
- SVG presence and accuracy
- Structure and nesting

### On Failure
If verification score is below 8:
1. Review the specific failures listed in the response
2. Fix each discrepancy in your component code
3. Re-run verification
4. Repeat until score >= 8

**Do NOT move to the next component until the current one passes verification.**

---

## Summary

1. **Path**: Always use `response.capture.componentTree.nodes`
2. **Extract**: All data comes from the capture, nothing invented
3. **Verify**: Every component must pass capture_verify with score >= 8
4. **Stop**: Missing data means stop and report, not proceed with placeholders

Following this workflow ensures pixel-perfect reproduction of captured UI.
