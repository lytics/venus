import { test, expect } from '@playwright/test'

/**
 * DEBUG: Sticky table column border issue
 *
 * WORKS: /personalize/experiences - uses <Table full>
 * BROKEN: /primitives - uses <VenusTable bordered>
 *
 * Expected: Sticky Actions column should have LEFT border, column before should have NO RIGHT border
 *
 * This test will:
 * 1. Navigate to both pages
 * 2. Count columns and identify structure
 * 3. Check which CSS classes are applied
 * 4. Inspect computed border styles
 * 5. Take screenshots showing the issue
 */

test.describe('Sticky Table Border Investigation', () => {
  test('investigate /experiences table structure and borders', async ({ page }) => {
    await page.goto('http://localhost:3000/personalize/experiences')
    await page.waitForLoadState('networkidle')

    // Count total columns
    const headerCells = await page.locator('thead th').all()
    console.log('\n=== /experiences TABLE ===')
    console.log(`Total columns: ${headerCells.length}`)

    // Identify which columns have sticky attribute
    for (let i = 0; i < headerCells.length; i++) {
      const cell = headerCells[i]
      const classes = await cell.getAttribute('class') || ''
      const text = await cell.textContent() || ''
      const isSticky = classes.includes('sticky')
      const position = classes.includes('left-0') ? 'left' : classes.includes('right-0') ? 'right' : 'none'
      const hasStickyClass = classes.includes('venus-table-sticky-shadow')

      console.log(`Column ${i + 1}: "${text.trim()}" - sticky: ${isSticky}, position: ${position}, has shadow class: ${hasStickyClass}`)
    }

    // Check the second-to-last column (Actions is last)
    const secondToLastHeaderIndex = headerCells.length - 2
    const secondToLastHeader = headerCells[secondToLastHeaderIndex]
    const secondToLastClasses = await secondToLastHeader.getAttribute('class') || ''
    const secondToLastText = await secondToLastHeader.textContent() || ''

    console.log(`\nSecond-to-last column (index ${secondToLastHeaderIndex}):`)
    console.log(`  Text: "${secondToLastText.trim()}"`)
    console.log(`  Classes: ${secondToLastClasses}`)

    // Check computed border styles for second-to-last header
    const secondToLastBorderRight = await secondToLastHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        borderRightWidth: computed.borderRightWidth,
        borderRightStyle: computed.borderRightStyle,
        borderRightColor: computed.borderRightColor,
      }
    })
    console.log(`  Computed border-right: ${JSON.stringify(secondToLastBorderRight)}`)

    // Check the last column (Actions with sticky="right")
    const lastHeader = headerCells[headerCells.length - 1]
    const lastClasses = await lastHeader.getAttribute('class') || ''
    const lastText = await lastHeader.textContent() || ''

    console.log(`\nLast column (Actions):`)
    console.log(`  Text: "${lastText.trim()}"`)
    console.log(`  Classes: ${lastClasses}`)
    console.log(`  Has venus-table-sticky-shadow: ${lastClasses.includes('venus-table-sticky-shadow')}`)

    // Check computed border styles for last header
    const lastBorders = await lastHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        borderLeftWidth: computed.borderLeftWidth,
        borderLeftStyle: computed.borderLeftStyle,
        borderLeftColor: computed.borderLeftColor,
        borderRightWidth: computed.borderRightWidth,
        borderRightStyle: computed.borderRightStyle,
        borderRightColor: computed.borderRightColor,
      }
    })
    console.log(`  Computed borders: ${JSON.stringify(lastBorders)}`)

    // Scroll table horizontally to trigger sticky behavior
    await page.evaluate(() => {
      const tableContainer = document.querySelector('.overflow-auto')
      if (tableContainer) {
        tableContainer.scrollLeft = 500
      }
    })

    await page.waitForTimeout(500)
    await page.screenshot({ path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/experiences-scrolled.png', fullPage: true })
  })

  test('investigate /primitives table structure and borders', async ({ page }) => {
    await page.goto('http://localhost:3000/primitives')
    await page.waitForLoadState('networkidle')

    // Scroll to the table section
    await page.evaluate(() => {
      const tableSection = document.querySelector('#venus-table')
      if (tableSection) {
        tableSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
    await page.waitForTimeout(500)

    // Count total columns
    const headerCells = await page.locator('thead th').all()
    console.log('\n=== /primitives TABLE ===')
    console.log(`Total columns: ${headerCells.length}`)

    // Identify which columns have sticky attribute
    for (let i = 0; i < headerCells.length; i++) {
      const cell = headerCells[i]
      const classes = await cell.getAttribute('class') || ''
      const text = await cell.textContent() || ''
      const isSticky = classes.includes('sticky')
      const position = classes.includes('left-0') ? 'left' : classes.includes('right-0') ? 'right' : 'none'
      const hasStickyClass = classes.includes('venus-table-sticky-shadow')

      console.log(`Column ${i + 1}: "${text.trim()}" - sticky: ${isSticky}, position: ${position}, has shadow class: ${hasStickyClass}`)
    }

    // Check the second-to-last column (Actions is last)
    const secondToLastHeaderIndex = headerCells.length - 2
    const secondToLastHeader = headerCells[secondToLastHeaderIndex]
    const secondToLastClasses = await secondToLastHeader.getAttribute('class') || ''
    const secondToLastText = await secondToLastHeader.textContent() || ''

    console.log(`\nSecond-to-last column (index ${secondToLastHeaderIndex}):`)
    console.log(`  Text: "${secondToLastText.trim()}"`)
    console.log(`  Classes: ${secondToLastClasses}`)

    // Check computed border styles for second-to-last header
    const secondToLastBorderRight = await secondToLastHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        borderRightWidth: computed.borderRightWidth,
        borderRightStyle: computed.borderRightStyle,
        borderRightColor: computed.borderRightColor,
      }
    })
    console.log(`  Computed border-right: ${JSON.stringify(secondToLastBorderRight)}`)

    // Check the last column (Actions with sticky="right")
    const lastHeader = headerCells[headerCells.length - 1]
    const lastClasses = await lastHeader.getAttribute('class') || ''
    const lastText = await lastHeader.textContent() || ''

    console.log(`\nLast column (Actions):`)
    console.log(`  Text: "${lastText.trim()}"`)
    console.log(`  Classes: ${lastClasses}`)
    console.log(`  Has venus-table-sticky-shadow: ${lastClasses.includes('venus-table-sticky-shadow')}`)

    // Check computed border styles for last header
    const lastBorders = await lastHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        borderLeftWidth: computed.borderLeftWidth,
        borderLeftStyle: computed.borderLeftStyle,
        borderLeftColor: computed.borderLeftColor,
        borderRightWidth: computed.borderRightWidth,
        borderRightStyle: computed.borderRightStyle,
        borderRightColor: computed.borderRightColor,
      }
    })
    console.log(`  Computed borders: ${JSON.stringify(lastBorders)}`)

    // Check if table is wrapped in bordered div
    const tableWrapper = await page.locator('table').evaluateHandle((table) => table.parentElement)
    const wrapperClasses = await tableWrapper.evaluate((el) => el?.className || '')
    console.log(`\nTable wrapper classes: ${wrapperClasses}`)
    console.log(`Is wrapped in bordered div: ${wrapperClasses.includes('border')}`)

    // Scroll table horizontally to trigger sticky behavior
    await page.evaluate(() => {
      const tableContainer = document.querySelector('.overflow-auto')
      if (tableContainer) {
        tableContainer.scrollLeft = 500
      }
    })

    await page.waitForTimeout(500)
    await page.screenshot({ path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/primitives-scrolled.png', fullPage: true })
  })

  test('verify CSS selector specificity for nth-last-child', async ({ page }) => {
    await page.goto('http://localhost:3000/primitives')
    await page.waitForLoadState('networkidle')

    // Scroll to the table section
    await page.evaluate(() => {
      const tableSection = document.querySelector('#venus-table')
      if (tableSection) {
        tableSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
    await page.waitForTimeout(500)

    // Test if :nth-last-child(2) selector matches correctly in bordered wrapper
    const headerCells = await page.locator('thead th').all()
    const secondToLastIndex = headerCells.length - 2
    const secondToLastHeader = headerCells[secondToLastIndex]

    const matches = await secondToLastHeader.evaluate((el) => {
      // Check if element matches :nth-last-child(2) selector
      return el.matches('th:nth-last-child(2)')
    })

    console.log(`\nCSS Selector Test:`)
    console.log(`Second-to-last <th> matches 'th:nth-last-child(2)': ${matches}`)

    if (!matches) {
      // Check what :nth-last-child(2) actually selects
      const actualMatch = await page.evaluate(() => {
        const match = document.querySelector('thead th:nth-last-child(2)')
        return match ? {
          text: match.textContent?.trim(),
          index: Array.from(match.parentElement?.children || []).indexOf(match)
        } : null
      })
      console.log(`Actual element matched by 'th:nth-last-child(2)':`, actualMatch)
    }
  })
})
