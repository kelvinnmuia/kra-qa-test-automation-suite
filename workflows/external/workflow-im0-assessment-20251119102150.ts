import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.locator('iframe').nth(2).contentFrame().getByRole('button', { name: 'Assess' }).click();
});