import { test, expect } from '@playwright/test'

test('Visual comparison: scrolled sticky columns', async ({ page }) => {
  // First, check /experiences
  await page.goto('http://localhost:3000/personalize/experiences')
  await page.waitForLoadState('networkidle')

  // Scroll the table horizontally
  await page.evaluate(() => {
    const container = document.querySelector('.overflow-auto')
    if (container) {
      container.scrollLeft = 800
    }
  })
  await page.waitForTimeout(500)

  // Take screenshot of just the Actions column area when scrolled
  const expTable = await page.locator('table').first()
  await expTable.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/exp-actions-scrolled.png',
    clip: { x: 0, y: 0, width: 1280, height: 400 }
  })

  // Now check /primatives
  await page.goto('http://localhost:3000/primatives')
  await page.waitForLoadState('networkidle')

  // Scroll to table
  await page.evaluate(() => {
    const tableSection = document.querySelector('#venus-table')
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: 'instant' })
    }
  })
  await page.waitForTimeout(300)

  // Scroll the table horizontally
  await page.evaluate(() => {
    const container = document.querySelector('.overflow-auto')
    if (container) {
      container.scrollLeft = 800
    }
  })
  await page.waitForTimeout(500)

  // Get the actual visible position of columns
  const visualCheck = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('tbody tr')).slice(0, 3)
    const results = []

    for (const row of rows) {
      const cells = Array.from(row.querySelectorAll('td'))
      const secondToLast = cells[cells.length - 2]
      const last = cells[cells.length - 1]

      if (secondToLast && last) {
        const secondRect = secondToLast.getBoundingClientRect()
        const lastRect = last.getBoundingClientRect()

        // Check the gap between columns
        const gap = lastRect.left - secondRect.right

        results.push({
          secondToLastRight: secondRect.right,
          lastLeft: lastRect.left,
          gap: gap,
          secondToLastBorderRight: window.getComputedStyle(secondToLast).borderRightWidth,
          lastBorderLeft: window.getComputedStyle(last).borderLeftWidth,
        })
      }
    }

    return results
  })

  console.log('\n=== VISUAL GAP ANALYSIS ===')
  visualCheck.forEach((check, i) => {
    console.log(`Row ${i + 1}:`)
    console.log(`  Second-to-last column right edge: ${check.secondToLastRight}px`)
    console.log(`  Actions column left edge: ${check.lastLeft}px`)
    console.log(`  GAP between columns: ${check.gap}px`)
    console.log(`  Second-to-last borderRightWidth: ${check.secondToLastBorderRight}`)
    console.log(`  Actions borderLeftWidth: ${check.lastBorderLeft}`)
    console.log(`  Expected gap: 1px (only the left border of Actions column)`)
    console.log(`  Issue: ${check.gap > 1 ? 'YES - gap too large' : 'NO - correct'}`)
    console.log('')
  })

  // Take screenshot of the primatives table
  const primTable = await page.locator('#venus-table').locator('..').first()
  await primTable.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/prim-actions-scrolled.png'
  })
})
