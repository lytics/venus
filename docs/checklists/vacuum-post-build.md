# Vacuum Post-Build Verification Checklist

Complete this checklist AFTER building a component from vacuum capture data.

---

## Component Information

| Field | Value |
|-------|-------|
| Capture ID | _______________ |
| Component | _______________ |
| Output File | _______________ |

---

## 1. Run capture_verify

Use the MCP tool to validate your built component against the source capture:

```
capture_verify({
  captureId: "<capture-id>",
  outputHtml: "<rendered-html-output>"
})
```

**How to get outputHtml:**
- Render your component to HTML string
- Or copy the HTML from browser DevTools (Elements panel)
- Include the outermost wrapper element

---

## 2. Score Check

| Field | Value |
|-------|-------|
| Score received | _____ / 10 |

**Result:**

- [ ] Score >= 8: **PASS** - Proceed to visual verification (Section 4)
- [ ] Score < 8: **FAIL** - Fix issues below before continuing (Section 3)

---

## 3. Issue Resolution (for score < 8)

Review each issue reported by capture_verify and fix:

| Issue Type | Description | Fixed? |
|------------|-------------|--------|
| Missing text | _______________ | [ ] |
| Missing text | _______________ | [ ] |
| Missing SVG | _______________ | [ ] |
| Missing SVG | _______________ | [ ] |
| Structure mismatch | _______________ | [ ] |
| Structure mismatch | _______________ | [ ] |
| Style deviation | _______________ | [ ] |
| Style deviation | _______________ | [ ] |

**Re-run capture_verify after fixes until score >= 8**

| Attempt | Score | Notes |
|---------|-------|-------|
| 1 | ___/10 | Initial |
| 2 | ___/10 | _______________ |
| 3 | ___/10 | _______________ |
| 4 | ___/10 | _______________ |

---

## 4. Visual Verification

Once capture_verify score >= 8, perform visual comparison:

- [ ] Took screenshot of built component
- [ ] Compared against production screenshot (or source capture)
- [ ] No visible differences in layout
- [ ] No visible differences in typography
- [ ] No visible differences in colors
- [ ] No visible differences in spacing

**Notes on any differences:**
```
_____________________________________________
_____________________________________________
_____________________________________________
```

---

## 5. Sign-off

Final verification before committing:

- [ ] capture_verify score >= 8
- [ ] Visual comparison passed
- [ ] Ready to commit

| Field | Value |
|-------|-------|
| Verified by | _______________ |
| Date | _______________ |

---

## What To Do If Verification Fails

### Score < 8 after multiple attempts:

1. **Review the componentTree** from `capture_get_structure`
2. **Check for missing nodes** that weren't transferred to your build
3. **Verify SVG assets** are copied exactly (not replaced with similar icons)
4. **Compare styles** using browser DevTools

### Visual verification fails:

1. **Take side-by-side screenshots** for detailed comparison
2. **Use browser DevTools** to compare computed styles
3. **Check for subtle differences** in padding, margins, or font rendering
4. **Re-capture if production has changed** since original capture

Remember: A passing capture_verify score with failing visual verification may indicate issues with the capture data itself.
