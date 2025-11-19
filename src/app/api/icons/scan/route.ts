import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Search for all lucide-react imports in the codebase
    // Only match actual import statements (lines starting with "import")
    const srcDir = process.cwd() + '/src';
    const { stdout } = await execAsync(
      `grep -r "^import.*from [\\'\\"]lucide-react[\\'\\"]" ${srcDir} --include="*.tsx" --include="*.ts" | grep -o "import {[^}]*}" | tr "," "\\n" | grep -o "[A-Z][a-zA-Z0-9]*" | sort -u`
    );

    const usedIcons = stdout
      .split('\n')
      .filter(icon => icon && icon !== 'import')
      .map(icon => icon.trim());

    return NextResponse.json({ usedIcons });
  } catch (error) {
    console.error('Error scanning icons:', error);
    return NextResponse.json({ usedIcons: [] });
  }
}
