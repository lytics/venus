#!/usr/bin/env node
/**
 * Derives a portable token export from the canonical stylesheet:
 *   - tokens.json  — W3C Design Tokens (DTCG) format, for Figma / Style Dictionary / tools
 *   - design.md    — human-readable token reference
 * Both are generated from src/styles/tokens.css so they never drift from the source.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PKG = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(PKG, "src/styles/tokens.css"), "utf8");

// First (light / :root) value wins for each custom property.
const decls = {};
for (const m of css.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)) {
  const [, name, value] = m;
  if (!(name in decls)) decls[name] = value.trim();
}

// Map a CSS var name → { group, key, dtcg } or null to skip non-design-token noise.
function classify(name, value) {
  const num = (v) => (Number(v) === Number(v) ? Number(v) : v);
  if (/^brand-\d+$/.test(name)) return { group: "brand", key: name.slice(6), token: { $type: "color", $value: value } };
  if (/^gray-\d+$/.test(name)) return { group: "gray", key: name.slice(5), token: { $type: "color", $value: value } };
  if (name.startsWith("color-")) return { group: "color", key: name.slice(6), token: { $type: "color", $value: value } };
  if (name.startsWith("spacing-")) return { group: "spacing", key: name.slice(8), token: { $type: "dimension", $value: value } };
  if (name.startsWith("radius-")) return { group: "radius", key: name.slice(7), token: { $type: "dimension", $value: value } };
  if (name.startsWith("text-")) return { group: "fontSize", key: name.slice(5), token: { $type: "dimension", $value: value } };
  if (name.startsWith("font-size-")) return { group: "fontSize", key: name.slice(10), token: { $type: "dimension", $value: value } };
  if (name.startsWith("font-weight-")) return { group: "fontWeight", key: name.slice(12), token: { $type: "fontWeight", $value: num(value) } };
  if (name === "font-sans" || name === "font-mono") return { group: "fontFamily", key: name.slice(5), token: { $type: "fontFamily", $value: value } };
  if (name.startsWith("line-height-")) return { group: "lineHeight", key: name.slice(12), token: { $type: "number", $value: num(value) } };
  if (name.startsWith("shadow-")) return { group: "shadow", key: name.slice(7), token: { $type: "shadow", $value: value } };
  if (name.startsWith("duration-")) return { group: "duration", key: name.slice(9), token: { $type: "duration", $value: value } };
  return null;
}

const tokens = {};
for (const [name, value] of Object.entries(decls)) {
  const c = classify(name, value);
  if (!c) continue;
  (tokens[c.group] ??= {})[c.key] = c.token;
}

writeFileSync(join(PKG, "tokens.json"), JSON.stringify(tokens, null, 2) + "\n");

// --- design.md ---
const order = ["color", "brand", "gray", "fontSize", "fontWeight", "fontFamily", "lineHeight", "spacing", "radius", "shadow", "duration"];
const titles = {
  color: "Colors", brand: "Brand scale", gray: "Neutral scale", fontSize: "Font sizes",
  fontWeight: "Font weights", fontFamily: "Font families", lineHeight: "Line heights",
  spacing: "Spacing", radius: "Radius", shadow: "Shadows", duration: "Durations",
};
let md = `# Venus Design Tokens\n\n_Generated from \`src/styles/tokens.css\` by \`pnpm build:tokens\`. Do not edit by hand._\n\nPortable export: [\`tokens.json\`](./tokens.json) (W3C DTCG format).\n`;
for (const group of order) {
  const entries = tokens[group];
  if (!entries) continue;
  md += `\n## ${titles[group]}\n\n| Token | Value |\n|-------|-------|\n`;
  for (const [k, t] of Object.entries(entries)) md += `| \`${group}.${k}\` | \`${t.$value}\` |\n`;
}
writeFileSync(join(PKG, "design.md"), md);

const counts = Object.entries(tokens).map(([g, e]) => `${g}:${Object.keys(e).length}`).join(", ");
console.log(`Wrote tokens.json + design.md (${counts}).`);
