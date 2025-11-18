import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  
  await page.locator('iframe').nth(2).contentFrame().getByRole('button', { name: 'DV1' }).click();
  await page.locator('iframe').nth(2).contentFrame().locator('#FDV1InvDate_field_aasss').click();
  await page.locator('iframe').nth(2).contentFrame().getByRole('link', { name: '10' }).click();
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1BuySellRel"]').click();
  await page.locator('iframe').nth(2).contentFrame().getByText('Not related').click();
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1NetPrice"]').click();
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1NetPrice"]').fill('7000');
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1InvNum"]').click();
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1InvNum"]').press('CapsLock');
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1InvNum"]').click();
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1InvNum"]').fill('INV003');
  await page.locator('iframe').nth(2).contentFrame().locator('input[name="DV1InvNum"]').press('CapsLock');
  await page.locator('iframe').nth(2).contentFrame().getByRole('button', { name: 'Save' }).click();
  
});