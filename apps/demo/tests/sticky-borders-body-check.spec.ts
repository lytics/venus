import { test, expect } from '@playwright/test'

test('Check table body cells for border issues', async ({ page }) => {
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

  // Check FIRST row's cells (tbody td)
  const firstRowCells = await page.locator('tbody tr:first-child td').all()
  console.log('\n=== FIRST ROW CELLS ===')
  console.log(`Total cells in first row: ${firstRowCells.length}`)

  const secondToLastCellIndex = firstRowCells.length - 2
  const secondToLastCell = firstRowCells[secondToLastCellIndex]

  console.log(`\nSecond-to-last cell (index ${secondToLastCellIndex}):`)
  const secondToLastText = await secondToLastCell.textContent()
  console.log(`  Text: "${secondToLastText?.trim()}"`)

  const secondToLastBorders = await secondToLastCell.evaluate((el) => {
    const computed = window.getComputedStyle(el)
    return {
      borderRightWidth: computed.borderRightWidth,
      borderRightStyle: computed.borderRightStyle,
      borderRightColor: computed.borderRightColor,
    }
  })
  console.log(`  Computed border-right: ${JSON.stringify(secondToLastBorders)}`)

  // Check last cell (Actions)
  const lastCell = firstRowCells[firstRowCells.length - 1]
  console.log(`\nLast cell (Actions):`)
  const lastText = await lastCell.textContent()
  console.log(`  Text: "${lastText?.trim()}"`)

  const lastBorders = await lastCell.evaluate((el) => {
    const computed = window.getComputedStyle(el)
    return {
      borderLeftWidth: computed.borderLeftWidth,
      borderLeftStyle: computed.borderLeftStyle,
      borderLeftColor: computed.borderLeftColor,
      borderRightWidth: computed.borderRightWidth,
      borderRightStyle: computed.borderRightStyle,
    }
  })
  console.log(`  Computed borders: ${JSON.stringify(lastBorders)}`)

  // Check classes
  const lastClasses = await lastCell.getAttribute('class')
  console.log(`  Classes: ${lastClasses}`)
  console.log(`  Has venus-table-sticky-shadow: ${lastClasses?.includes('venus-table-sticky-shadow')}`)

  // Check if the CSS is actually being applied
  const cssCheck = await page.evaluate(() => {
    // Check if the styles are defined
    const sheets = Array.from(document.styleSheets)
    let foundNthLastChild = false
    let foundStickyClass = false

    for (const sheet of sheets) {
      try {
        const rules = Array.from(sheet.cssRules || [])
        for (const rule of rules) {
          if (rule instanceof CSSStyleRule) {
            if (rule.selectorText?.includes('nth-last-child(2)')) {
              foundNthLastChild = true
              console.log('Found nth-last-child(2) rule:', rule.cssText)
            }
            if (rule.selectorText?.includes('venus-table-sticky-shadow')) {
              foundStickyClass = true
              console.log('Found sticky shadow rule:', rule.cssText)
            }
          }
        }
      } catch (e) {
        // CORS or other access issues
      }
    }

    return { foundNthLastChild, foundStickyClass }
  })
  console.log(`\nCSS Rules Check:`, cssCheck)

  // Scroll table to make sticky column visible
  await page.evaluate(() => {
    const tableContainer = document.querySelector('.overflow-auto')
    if (tableContainer) {
      tableContainer.scrollLeft = 300
    }
  })
  await page.waitForTimeout(500)

  // Take a zoomed screenshot of just the table
  const tableElement = await page.locator('#venus-table').locator('..').first()
  await tableElement.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/primitives-table-zoomed.png'
  })
})
