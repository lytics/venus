import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    // Read current tokens.css file
    const tokensPath = join(process.cwd(), 'src', 'styles', 'tokens.css')
    const content = await readFile(tokensPath, 'utf-8')

    // Extract brand colors from :root (light mode)
    const lightBrandColors = extractBrandColors(content, ':root')

    // Extract brand colors from .dark (dark mode)
    const darkBrandColors = extractBrandColors(content, '.dark')

    return NextResponse.json({
      light: lightBrandColors,
      dark: darkBrandColors,
    })
  } catch (error) {
    console.error('Failed to read current theme:', error)
    return NextResponse.json(
      { error: 'Failed to read current theme', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

/**
 * Extract brand-1 through brand-12 colors from a CSS selector block
 */
function extractBrandColors(
  content: string,
  selector: ':root' | '.dark'
): Record<string, string> {
  // Find the selector block
  const selectorRegex = selector === ':root'
    ? /:root\s*\{/
    : /\.dark\s*\{/

  const selectorMatch = content.match(selectorRegex)
  if (!selectorMatch) {
    throw new Error(`Could not find ${selector} selector in tokens.css`)
  }

  const selectorStart = selectorMatch.index!
  let braceCount = 0
  let selectorEnd = selectorStart

  // Find the end of the selector block by counting braces
  for (let i = selectorStart; i < content.length; i++) {
    if (content[i] === '{') braceCount++
    if (content[i] === '}') {
      braceCount--
      if (braceCount === 0) {
        selectorEnd = i + 1
        break
      }
    }
  }

  const selectorBlock = content.substring(selectorStart, selectorEnd)

  // Extract each brand color value
  const brandColors: Record<string, string> = {}

  for (let i = 1; i <= 12; i++) {
    const regex = new RegExp(`--brand-${i}:\\s*([^;]+);`)
    const match = selectorBlock.match(regex)
    if (match) {
      brandColors[`brand${i}`] = match[1].trim()
    }
  }

  return brandColors
}
