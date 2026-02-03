# Vacuum Pre-Build Verification Checklist

Complete this checklist BEFORE building any component from vacuum capture data.

---

## Component Information

| Field | Value |
|-------|-------|
| Capture ID | _______________ |
| Component | _______________ |

---

## 1. Structure Verification

- [ ] Called `capture_get_structure` with capture ID
- [ ] Response has `capture.componentTree.nodes` array
- [ ] Nodes array has > 0 elements
- [ ] Node count matches expected UI complexity

**Notes:**
```
Node count: ___
Expected complexity: ___
```

---

## 2. Text Content Verification

List all text you expect to see in the component and verify each exists in the capture:

| Expected Text | Found in Capture? | Node Index |
|---------------|-------------------|------------|
| _______________ | [ ] Yes / [ ] No | ___ |
| _______________ | [ ] Yes / [ ] No | ___ |
| _______________ | [ ] Yes / [ ] No | ___ |
| _______________ | [ ] Yes / [ ] No | ___ |
| _______________ | [ ] Yes / [ ] No | ___ |
| _______________ | [ ] Yes / [ ] No | ___ |

**If ANY text is missing --> STOP. Do not proceed.**

---

## 3. Icon/SVG Verification

List all icons you expect to see in the component and verify each exists in the capture:

| Expected Icon | Found in Capture? | Asset Type |
|---------------|-------------------|------------|
| _______________ | [ ] Yes / [ ] No | _______________ |
| _______________ | [ ] Yes / [ ] No | _______________ |
| _______________ | [ ] Yes / [ ] No | _______________ |
| _______________ | [ ] Yes / [ ] No | _______________ |

**If ANY icon is missing --> STOP. Do not proceed.**

---

## 4. Repeating Groups

- [ ] Identified all repeating groups in capture
- [ ] Each group has `instances` data OR individual node children
- [ ] Will use `.map()` for each repeating group

**Repeating groups found:**

| Group Name/Description | Instance Count | Has Instance Data? |
|------------------------|----------------|-------------------|
| _______________ | ___ | [ ] Yes / [ ] No |
| _______________ | ___ | [ ] Yes / [ ] No |
| _______________ | ___ | [ ] Yes / [ ] No |

---

## 5. Sign-off

- [ ] All expected data found in capture
- [ ] Ready to build (not guess)

| Field | Value |
|-------|-------|
| Verified by | _______________ |
| Date | _______________ |

---

## What To Do If Verification Fails

If any verification step fails:

1. **Do NOT proceed with building** - guessing leads to incorrect implementations
2. **Re-capture the component** if data is missing
3. **Use `capture_get` with full data** if structure looks incomplete
4. **Document what's missing** for troubleshooting

Remember: It's better to stop and fix capture data than to build incorrect components.
