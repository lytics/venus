import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { icons } = await request.json();

    if (!Array.isArray(icons) || icons.length === 0) {
      return NextResponse.json(
        { error: "Invalid icons array" },
        { status: 400 }
      );
    }

    // Read the icons page file
    const filePath = path.join(
      process.cwd(),
      "src/app/(galleries)/icons/page.tsx"
    );
    let content = await fs.readFile(filePath, "utf-8");

    // Find the CURATED_ICONS array closing bracket
    // The array ends at line 197 with "];", just before "Moon", "Sun", "Ghost",
    const arrayEndPattern = /("Moon",\s*"Sun",\s*"Ghost",)\n\];/;
    const match = content.match(arrayEndPattern);

    if (!match) {
      return NextResponse.json(
        { error: "Could not find CURATED_ICONS array end" },
        { status: 500 }
      );
    }

    // Sort icons alphabetically for consistency
    const sortedIcons = [...icons].sort();

    // Format the new icons to add (with proper indentation)
    const newIconsString = sortedIcons.map(icon => `  "${icon}"`).join(",\n");

    // Replace the array end with the new icons added
    content = content.replace(
      arrayEndPattern,
      `$1\n${newIconsString},\n];`
    );

    // Write the updated content back
    await fs.writeFile(filePath, content, "utf-8");

    return NextResponse.json({
      success: true,
      addedCount: icons.length,
      icons: sortedIcons,
    });
  } catch (error) {
    console.error("Error adding icons to curated list:", error);
    return NextResponse.json(
      { error: "Failed to update curated list" },
      { status: 500 }
    );
  }
}
