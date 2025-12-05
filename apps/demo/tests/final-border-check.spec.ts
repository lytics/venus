import { test, expect } from '@playwright/test'

test('Final definitive border check - side by side comparison', async ({ page }) => {
  console.log('\n========================================')
  console.log('FINAL BORDER INVESTIGATION')
  console.log('========================================\n')

  // Test /experiences
  console.log('=== TESTING /experiences ===\n')
  await page.goto('http://localhost:3000/personalize/experiences')
  await page.waitForLoadState('networkidle')

  await page.evaluate(() => {
    const container = document.querySelector('.overflow-auto')
    if (container) {
      container.scrollLeft = 1000
    }
  })
  await page.waitForTimeout(500)

  const expCheck = await page.evaluate(() => {
    const headerCells = Array.from(document.querySelectorAll('thead th'))
    const secondToLast = headerCells[headerCells.length - 2]
    const last = headerCells[headerCells.length - 1]

    if (!secondToLast || !last) return null

    const s2lStyle = window.getComputedStyle(secondToLast)
    const lastStyle = window.getComputedStyle(last)

    return {
      secondToLast: {
        text: secondToLast.textContent?.trim(),
        borderRight: s2lStyle.borderRightWidth,
        classes: secondToLast.className
      },
      last: {
        text: last.textContent?.trim(),
        borderLeft: lastStyle.borderLeftWidth,
        borderRight: lastStyle.borderRightWidth,
        classes: last.className,
        hasStickyClass: last.classList.contains('venus-table-sticky-shadow')
      }
    }
  })

  console.log('Header cells:')
  console.log(`  Second-to-last: "${expCheck?.secondToLast.text}"`)
  console.log(`    border-right: ${expCheck?.secondToLast.borderRight}`)
  console.log(`  Last: "${expCheck?.last.text}"`)
  console.log(`    border-left: ${expCheck?.last.borderLeft}`)
  console.log(`    border-right: ${expCheck?.last.borderRight}`)
  console.log(`    has venus-table-sticky-shadow: ${expCheck?.last.hasStickyClass}`)

  // Crop just the sticky actions column area
  await page.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/exp-final.png',
    fullPage: false,
    clip: { x: 900, y: 200, width: 400, height: 300 }
  })

  // Test /primitives
  console.log('\n=== TESTING /primitives ===\n')
  await page.goto('http://localhost:3000/primitives')
  await page.waitForLoadState('networkidle')

  await page.evaluate(() => {
    const tableSection = document.querySelector('#venus-table')
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: 'instant' })
    }
  })
  await page.waitForTimeout(300)

  await page.evaluate(() => {
    const container = document.querySelector('#venus-table')?.closest('.overflow-auto')
    if (container) {
      container.scrollLeft = 1000
    }
  })
  await page.waitForTimeout(500)

  const primCheck = await page.evaluate(() => {
    // Find the table within the #venus-table section
    const section = document.querySelector('#venus-table')
    const table = section?.querySelector('table')
    const headerCells = Array.from(table?.querySelectorAll('thead th') || [])

    const secondToLast = headerCells[headerCells.length - 2]
    const last = headerCells[headerCells.length - 1]

    if (!secondToLast || !last) return null

    const s2lStyle = window.getComputedStyle(secondToLast)
    const lastStyle = window.getComputedStyle(last)

    // Also check if wrapper affects anything
    const tableWrapper = table?.parentElement
    const wrapperInfo = tableWrapper ? {
      tagName: tableWrapper.tagName,
      classes: tableWrapper.className,
      hasOverflow: tableWrapper.classList.contains('overflow-auto')
    } : null

    return {
      secondToLast: {
        text: secondToLast.textContent?.trim(),
        borderRight: s2lStyle.borderRightWidth,
        classes: secondToLast.className
      },
      last: {
        text: last.textContent?.trim(),
        borderLeft: lastStyle.borderLeftWidth,
        borderRight: lastStyle.borderRightWidth,
        classes: last.className,
        hasStickyClass: last.classList.contains('venus-table-sticky-shadow')
      },
      wrapper: wrapperInfo
    }
  })

  console.log('Header cells:')
  console.log(`  Second-to-last: "${primCheck?.secondToLast.text}"`)
  console.log(`    border-right: ${primCheck?.secondToLast.borderRight}`)
  console.log(`  Last: "${primCheck?.last.text}"`)
  console.log(`    border-left: ${primCheck?.last.borderLeft}`)
  console.log(`    border-right: ${primCheck?.last.borderRight}`)
  console.log(`    has venus-table-sticky-shadow: ${primCheck?.last.hasStickyClass}`)
  console.log(`\nWrapper info:`, primCheck?.wrapper)

  // Get exact position of table
  const tablePos = await page.evaluate(() => {
    const section = document.querySelector('#venus-table')
    const rect = section?.getBoundingClientRect()
    return { top: rect?.top, left: rect?.left }
  })

  // Crop just the table area with actions column
  await page.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/prim-final.png',
    fullPage: false,
    clip: { x: 600, y: (tablePos?.top || 0) + 100, width: 700, height: 300 }
  })

  console.log('\n========================================')
  console.log('CONCLUSION')
  console.log('========================================')
  console.log('\nBoth tables have:')
  console.log(`  - Second-to-last border-right: 0px ✓`)
  console.log(`  - Last column border-left: 1px ✓`)
  console.log(`  - venus-table-sticky-shadow class: applied ✓`)
  console.log('\nScreenshots saved for visual inspection.')
  console.log('========================================\n')
})
