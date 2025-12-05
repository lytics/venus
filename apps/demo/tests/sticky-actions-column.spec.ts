import { test, expect } from '@playwright/test';

test.describe('Table sticky Actions column', () => {
  test('Actions column should stick to right edge when scrolling horizontally - experiences page', async ({ page }) => {
    // Navigate to experiences page
    await page.goto('http://localhost:3000/personalize/experiences');
    await page.waitForLoadState('networkidle');

    // Find the table container
    const tableContainer = page.locator('div.overflow-auto').first();

    // Find the Actions column header
    const actionsHeader = page.locator('th:has-text("Actions")');

    // Verify Actions column has sticky positioning initially
    const headerStyles = await actionsHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        position: computed.position,
        right: computed.right,
        zIndex: computed.zIndex,
      };
    });

    console.log('Actions Header Styles:', headerStyles);
    expect(headerStyles.position).toBe('sticky');
    expect(headerStyles.right).toBe('0px');
    expect(parseInt(headerStyles.zIndex)).toBeGreaterThanOrEqual(10);

    // Get initial position of Actions header
    const initialHeaderBox = await actionsHeader.boundingBox();
    expect(initialHeaderBox).not.toBeNull();

    // Screenshot before scroll
    await page.screenshot({ path: 'tests/screenshots/actions-before-scroll.png' });

    // Scroll the table container to the right (simulate horizontal scroll)
    await tableContainer.evaluate((el) => {
      el.scrollLeft = el.scrollWidth - el.clientWidth; // Scroll to end
    });

    // Wait for scroll to complete
    await page.waitForTimeout(500);

    // Get position after scroll
    const afterScrollHeaderBox = await actionsHeader.boundingBox();
    expect(afterScrollHeaderBox).not.toBeNull();

    // Screenshot after scroll
    await page.screenshot({ path: 'tests/screenshots/actions-after-scroll.png' });

    // The Actions column should NOT have moved horizontally
    // If sticky is working, the right edge should remain in the same position relative to viewport
    const viewportWidth = page.viewportSize()?.width || 0;
    const headerRightEdgeInitial = initialHeaderBox!.x + initialHeaderBox!.width;
    const headerRightEdgeAfterScroll = afterScrollHeaderBox!.x + afterScrollHeaderBox!.width;

    console.log('Viewport width:', viewportWidth);
    console.log('Initial right edge:', headerRightEdgeInitial);
    console.log('After scroll right edge:', headerRightEdgeAfterScroll);

    // The right edge should stay in roughly the same position (within a few pixels)
    expect(Math.abs(headerRightEdgeInitial - headerRightEdgeAfterScroll)).toBeLessThan(5);

    // Verify that a non-sticky column DID move when we scroll back to start
    const nameHeader = page.locator('th:has-text("Name")');

    // First scroll to the end
    await tableContainer.evaluate((el) => {
      el.scrollLeft = el.scrollWidth - el.clientWidth;
    });
    await page.waitForTimeout(300);
    const nameAtEndBox = await nameHeader.boundingBox();

    // Then scroll back to the start
    await tableContainer.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(300);
    const nameAtStartBox = await nameHeader.boundingBox();

    console.log('Name column at scroll end x:', nameAtEndBox!.x);
    console.log('Name column at scroll start x:', nameAtStartBox!.x);

    // Name column should be more to the right when scrolled to start (higher x value)
    expect(nameAtStartBox!.x).toBeGreaterThan(nameAtEndBox!.x);
  });

  test('Actions column should stick to right edge when scrolling horizontally - primitives page', async ({ page }) => {
    // Navigate to primitives gallery page
    await page.goto('http://localhost:3000/primitives');
    await page.waitForLoadState('networkidle');

    // Find the table with sticky Actions column
    const actionsHeader = page.locator('th:has-text("Actions")');

    if (await actionsHeader.count() === 0) {
      console.log('No Actions column found on primitives page - skipping test');
      test.skip();
      return;
    }

    // Verify sticky positioning
    const headerStyles = await actionsHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        position: computed.position,
        right: computed.right,
        zIndex: computed.zIndex,
      };
    });

    console.log('Primitives Actions Header Styles:', headerStyles);
    expect(headerStyles.position).toBe('sticky');
    expect(headerStyles.right).toBe('0px');
  });

  test('Verify CSS shadow class is applied', async ({ page }) => {
    await page.goto('http://localhost:3000/personalize/experiences');
    await page.waitForLoadState('networkidle');

    const actionsHeader = page.locator('th:has-text("Actions")');

    // Check if the venus-table-sticky-shadow class is applied
    const hasClass = await actionsHeader.evaluate((el) => {
      return el.classList.contains('venus-table-sticky-shadow');
    });

    expect(hasClass).toBe(true);

    // Check if the pseudo-element shadow is rendering
    const pseudoStyles = await actionsHeader.evaluate((el) => {
      const computed = window.getComputedStyle(el, '::before');
      return {
        content: computed.content,
        position: computed.position,
        left: computed.left,
        width: computed.width,
        background: computed.background,
      };
    });

    console.log('Pseudo-element styles:', pseudoStyles);
    expect(pseudoStyles.content).toBe('""');
    expect(pseudoStyles.position).toBe('absolute');
  });
});
