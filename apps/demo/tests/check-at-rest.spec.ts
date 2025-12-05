import { test } from '@playwright/test'

test('Check table borders at rest (not scrolled)', async ({ page }) => {
  console.log('\n=== CHECKING /primitives AT REST (no scroll) ===\n')

  await page.goto('http://localhost:3000/primitives')
  await page.waitForLoadState('networkidle')

  // Scroll to table but DON'T scroll it horizontally
  await page.evaluate(() => {
    const tableSection = document.querySelector('#venus-table')
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: 'instant' })
    }
  })
  await page.waitForTimeout(500)

  // Check scroll position
  const scrollPos = await page.evaluate(() => {
    const container = document.querySelector('#venus-table')?.closest('.overflow-auto')
    return container?.scrollLeft || 0
  })
  console.log(`Table scroll position: ${scrollPos}px (should be 0 at rest)`)

  // Check if Actions column is visible without scrolling
  const visibilityCheck = await page.evaluate(() => {
    const section = document.querySelector('#venus-table')
    const table = section?.querySelector('table')
    const headerCells = Array.from(table?.querySelectorAll('thead th') || [])
    const lastCell = headerCells[headerCells.length - 1]

    if (!lastCell) return null

    const rect = lastCell.getBoundingClientRect()
    const container = section?.closest('.overflow-auto')
    const containerRect = container?.getBoundingClientRect()

    return {
      actionsColumnVisible: rect.right <= (containerRect?.right || 0),
      actionsColumnLeft: rect.left,
      actionsColumnRight: rect.right,
      containerRight: containerRect?.right,
      isSticky: lastCell.classList.contains('sticky'),
      stickyActivated: rect.left > (containerRect?.left || 0)
    }
  })

  console.log('\nActions column visibility:')
  console.log(`  Fully visible: ${visibilityCheck?.actionsColumnVisible}`)
  console.log(`  Is sticky: ${visibilityCheck?.isSticky}`)
  console.log(`  Sticky activated (column not at edge): ${visibilityCheck?.stickyActivated}`)
  console.log(`  Column position: ${visibilityCheck?.actionsColumnLeft}px to ${visibilityCheck?.actionsColumnRight}px`)
  console.log(`  Container right edge: ${visibilityCheck?.containerRight}px`)

  // Take screenshot at rest
  const section = await page.locator('#venus-table').locator('..').first()
  await section.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/prim-at-rest.png'
  })

  console.log('\n=== CHECKING /experiences AT REST (no scroll) ===\n')

  await page.goto('http://localhost:3000/personalize/experiences')
  await page.waitForLoadState('networkidle')

  const expScrollPos = await page.evaluate(() => {
    const container = document.querySelector('.overflow-auto')
    return container?.scrollLeft || 0
  })
  console.log(`Table scroll position: ${expScrollPos}px (should be 0 at rest)`)

  const expVisibilityCheck = await page.evaluate(() => {
    const headerCells = Array.from(document.querySelectorAll('thead th'))
    const lastCell = headerCells[headerCells.length - 1]

    if (!lastCell) return null

    const rect = lastCell.getBoundingClientRect()
    const container = document.querySelector('.overflow-auto')
    const containerRect = container?.getBoundingClientRect()

    return {
      actionsColumnVisible: rect.right <= (containerRect?.right || 0),
      actionsColumnLeft: rect.left,
      actionsColumnRight: rect.right,
      containerRight: containerRect?.right,
      isSticky: lastCell.classList.contains('sticky'),
      stickyActivated: rect.left > (containerRect?.left || 0)
    }
  })

  console.log('\nActions column visibility:')
  console.log(`  Fully visible: ${expVisibilityCheck?.actionsColumnVisible}`)
  console.log(`  Is sticky: ${expVisibilityCheck?.isSticky}`)
  console.log(`  Sticky activated (column not at edge): ${expVisibilityCheck?.stickyActivated}`)
  console.log(`  Column position: ${expVisibilityCheck?.actionsColumnLeft}px to ${expVisibilityCheck?.actionsColumnRight}px`)
  console.log(`  Container right edge: ${expVisibilityCheck?.containerRight}px`)

  await page.screenshot({
    path: '/Users/ellisedwards/Code/workspace/venus_external/apps/demo/tests/screenshots/exp-at-rest.png',
    fullPage: false
  })

  console.log('\n=== KEY INSIGHT ===')
  console.log('If Actions column is fully visible at rest, sticky is NOT activated.')
  console.log('The border issue might only appear when sticky is activated (when scrolling).')
  console.log('==================\n')
})
