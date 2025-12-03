/**
 * Navigation Color Utilities
 *
 * Automatically determines optimal navigation hover colors based on luminosity.
 * Uses WCAG relative luminosity formula to ensure proper contrast.
 */

/**
 * Convert hex color to RGB object
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove # if present
  hex = hex.replace(/^#/, '')

  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }

  const num = parseInt(hex, 16)
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  }
}

/**
 * Calculate relative luminosity using WCAG formula
 * Returns value between 0 (black) and 1 (white)
 *
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export function calculateLuminosity(hexColor: string): number {
  const rgb = hexToRgb(hexColor)

  // Convert to linear RGB
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val /= 255
    return val <= 0.03928
      ? val / 12.92
      : Math.pow((val + 0.055) / 1.055, 2.4)
  })

  // Calculate relative luminosity
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}


/**
 * Get optimal navigation hover color based on brand-4 analysis
 *
 * Simplified approach:
 * - Always uses brand color as rgba overlay base
 * - Mode-specific alpha values for proper contrast
 * - Default: 0.20 alpha for both modes
 *
 * This ensures hover states are always visible with proper contrast.
 */
export function getOptimalNavHoverColor(
  brand4Hex: string,
  isDarkMode: boolean,
  lightOpacity: number = 0.30,
  darkOpacity: number = 0.30
): string {
  const rgb = hexToRgb(brand4Hex)
  const opacity = isDarkMode ? darkOpacity : lightOpacity

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity.toFixed(2)})`
}

/**
 * Get optimal navigation active/selected color based on brand-4 analysis
 *
 * Simplified approach:
 * - Always uses brand color as rgba overlay base
 * - Mode-specific alpha values for proper contrast
 * - Active state is more prominent than hover (higher alpha)
 * - Default: 0.30 alpha for both modes
 */
export function getOptimalNavActiveColor(
  brand4Hex: string,
  isDarkMode: boolean,
  lightOpacity: number = 0.50,
  darkOpacity: number = 0.50
): string {
  const rgb = hexToRgb(brand4Hex)
  const opacity = isDarkMode ? darkOpacity : lightOpacity

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity.toFixed(2)})`
}
