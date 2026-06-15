import { expect, test } from "@playwright/test";

async function findTableWithActionsColumn(
  tableSelector: string,
  page: import("@playwright/test").Page,
) {
  const tables = page.locator(tableSelector);
  const tableCount = await tables.count();

  for (let index = 0; index < tableCount; index += 1) {
    const candidate = tables.nth(index);
    const lastHeaderText = await candidate
      .locator("thead tr")
      .first()
      .locator("th")
      .last()
      .textContent();

    if (lastHeaderText?.trim() === "Actions") {
      return candidate;
    }
  }

  throw new Error(`Could not find an Actions table for selector: ${tableSelector}`);
}

async function verifyStickyActionsColumn(
  pagePath: string,
  tableSelector: string,
  page: import("@playwright/test").Page,
) {
  await page.goto(pagePath);

  const table = await findTableWithActionsColumn(tableSelector, page);
  await table.scrollIntoViewIfNeeded();
  await expect(table).toBeVisible();

  const headerRow = table.locator("thead tr").first();
  const actionsHeader = headerRow.locator("th").last();
  const scrollContainer = table
    .locator('xpath=ancestor-or-self::*[contains(@class, "overflow-auto")]')
    .first();

  await expect(actionsHeader).toContainText("Actions");

  const beforeScroll = await actionsHeader.boundingBox();
  expect(beforeScroll).not.toBeNull();

  await scrollContainer.evaluate((node) => {
    node.scrollLeft = node.scrollWidth;
  });

  await page.waitForTimeout(200);

  const afterScroll = await actionsHeader.boundingBox();
  expect(afterScroll).not.toBeNull();

  const stickyStyles = await actionsHeader.evaluate((cell) => {
    const computed = window.getComputedStyle(cell);
    return {
      position: computed.position,
      right: computed.right,
    };
  });

  expect(stickyStyles.position).toBe("sticky");
  expect(stickyStyles.right).toBe("0px");
  expect(Math.abs((beforeScroll?.x ?? 0) - (afterScroll?.x ?? 0))).toBeLessThan(5);
}

test.describe("table smoke", () => {
  test("personalize experiences keeps the actions column sticky", async ({ page }) => {
    await verifyStickyActionsColumn("/personalize/experiences", "table", page);
  });

  test("primitives table keeps the actions column sticky", async ({ page }) => {
    await verifyStickyActionsColumn("/primitives", "#table table", page);
  });
});
