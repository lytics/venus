import { expect, test } from '@playwright/test';

test.describe('demo navigation smoke', () => {
  test('landing page exposes the main entry points', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'VenusCN' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Components' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Templates' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Demo App' })).toBeVisible();
  });

  test('core showcase routes render expected headings', async ({ page }) => {
    await page.goto('/primitives');
    await expect(page.getByRole('heading', { name: 'Primitives' })).toBeVisible();

    await page.goto('/personalize');
    await expect(page.getByRole('heading', { name: 'Personalize Projects' })).toBeVisible();

    await page.goto('/stacks');
    await expect(page.getByRole('heading', { name: 'Stacks' })).toBeVisible();
  });
});
