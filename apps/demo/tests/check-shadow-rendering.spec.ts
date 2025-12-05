import { test } from '@playwright/test'

test('Check if sticky shadow ::before pseudo-element renders', async ({ page }) => {
  console.log('\n=== CHECKING SHADOW RENDERING ===\n')

  await page.goto('http://localhost:3000/primitives')
  await page.waitForLoadState('networkidle')

  await page.evaluate(() => {
    const tableSection = document.querySelector('#venus-table')
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: 'instant' })
    }
  })

  // Scroll table to activate sticky
  await page.evaluate(() => {
    const container = document.querySelector('#venus-table')?.closest('.overflow-auto')
    if (container) {
      container.scrollLeft = 500
    }
  })
  await page.waitForTimeout(500)

  const shadowCheck = await page.evaluate(() => {
    const section = document.querySelector('#venus-table')
    const table = section?.querySelector('table')
    const headerCells = Array.from(table?.querySelectorAll('thead th') || [])
    const lastHeader = headerCells[headerCells.length - 1]

    if (!lastHeader) return null

    // Check ::before pseudo-element
    const beforeStyle = window.getComputedStyle(lastHeader, '::before')

    return {
      hasBeforePseudo: beforeStyle.content !== 'none',
      beforeContent: beforeStyle.content,
      beforeWidth: beforeStyle.width,
      beforeLeft: beforeStyle.left,
      beforeBackground: beforeStyle.background,
      beforePointerEvents: beforeStyle.pointerEvents,
      cellClasses: lastHeader.className,
      hasStickyClass: lastHeader.classList.contains('venus-table-sticky-shadow')
    }
  })

  console.log('Shadow ::before pseudo-element:')
  console.log(`  Has ::before: ${shadowCheck?.hasBeforePseudo}`)
  console.log(`  content: ${shadowCheck?.beforeContent}`)
  console.log(`  width: ${shadowCheck?.beforeWidth}`)
  console.log(`  left: ${shadowCheck?.beforeLeft}`)
  console.log(`  background: ${shadowCheck?.beforeBackground}`)
  console.log(`  pointer-events: ${shadowCheck?.beforePointerEvents}`)
  console.log(`  Cell has venus-table-sticky-shadow class: ${shadowCheck?.hasStickyClass}`)

  // Compare with /experiences
  console.log('\n=== CHECKING /experiences SHADOW ===\n')

  await page.goto('http://localhost:3000/personalize/experiences')
  await page.waitForLoadState('networkidle')

  await page.evaluate(() => {
    const container = document.querySelector('.overflow-auto')
    if (container) {
      container.scrollLeft = 500
    }
  })
  await page.waitForTimeout(500)

  const expShadowCheck = await page.evaluate(() => {
    const headerCells = Array.from(document.querySelectorAll('thead th'))
    const lastHeader = headerCells[headerCells.length - 1]

    if (!lastHeader) return null

    const beforeStyle = window.getComputedStyle(lastHeader, '::before')

    return {
      hasBeforePseudo: beforeStyle.content !== 'none',
      beforeContent: beforeStyle.content,
      beforeWidth: beforeStyle.width,
      beforeLeft: beforeStyle.left,
      beforeBackground: beforeStyle.background,
      beforePointerEvents: beforeStyle.pointerEvents,
      cellClasses: lastHeader.className,
      hasStickyClass: lastHeader.classList.contains('venus-table-sticky-shadow')
    }
  })

  console.log('Shadow ::before pseudo-element:')
  console.log(`  Has ::before: ${expShadowCheck?.hasBeforePseudo}`)
  console.log(`  content: ${expShadowCheck?.beforeContent}`)
  console.log(`  width: ${expShadowCheck?.beforeWidth}`)
  console.log(`  left: ${expShadowCheck?.beforeLeft}`)
  console.log(`  background: ${expShadowCheck?.beforeBackground}`)
  console.log(`  pointer-events: ${expShadowCheck?.beforePointerEvents}`)
  console.log(`  Cell has venus-table-sticky-shadow class: ${expShadowCheck?.hasStickyClass}`)

  console.log('\n=== CONCLUSION ===')
  if (JSON.stringify(shadowCheck) === JSON.stringify(expShadowCheck)) {
    console.log('Shadow rendering is IDENTICAL on both pages.')
  } else {
    console.log('Shadow rendering DIFFERS between pages!')
    console.log('This might be the source of the visual difference.')
  }
  console.log('==================\n')
})
