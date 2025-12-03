import { NextResponse } from 'next/server';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const patternsDir = join(process.cwd(), 'docs', 'patterns');

    // Read all markdown files from the patterns directory
    const files = await readdir(patternsDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    // Read content of each file
    const patterns = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = join(patternsDir, file);
        const content = await readFile(filePath, 'utf-8');
        const name = file.replace('.md', '');

        return {
          name,
          filename: file,
          content
        };
      })
    );

    // Sort alphabetically by name
    patterns.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({ patterns });
  } catch (error) {
    console.error('Error reading pattern files:', error);
    return NextResponse.json({ patterns: [], error: 'Failed to read patterns' }, { status: 500 });
  }
}
