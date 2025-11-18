import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  
  await page.locator('iframe').nth(3).contentFrame().locator('#Field8462').getByRole('radio').check();
  await page.locator('iframe').nth(3).contentFrame().getByRole('button', { name: 'Tariff Search' }).click();
  await page.locator('iframe').nth(3).contentFrame().locator('iframe[name="fancybox-frame1763455305922"]').contentFrame().locator('input[name="hsCode"]').click();
  await page.locator('iframe').nth(3).contentFrame().locator('iframe[name="fancybox-frame1763455305922"]').contentFrame().locator('input[name="hsCode"]').fill('24022010');
  await page.locator('iframe').nth(3).contentFrame().locator('iframe[name="fancybox-frame1763455305922"]').contentFrame().getByRole('button', { name: 'Search' }).click();
  await page.locator('iframe').nth(3).contentFrame().locator('iframe[name="fancybox-frame1763455305922"]').contentFrame().getByText('24022010').click();
  await page.locator('iframe').nth(3).contentFrame().locator('iframe[name="fancybox-frame1763455305922"]').contentFrame().getByRole('button', { name: 'Use HS code' }).click();
  await page.locator('iframe').nth(3).contentFrame().locator('#Con7754').click();
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b34_origin_country"]').click();
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b34_origin_country"]').press('CapsLock');
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b34_origin_country"]').fill('US');
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b34_origin_country"]').press('CapsLock');
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b38_net_mass"]').click();
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b38_net_mass"]').fill('100');
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b41_unit_num"]').click();
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b41_unit_num"]').fill('100');
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b42_item_price"]').click();
  await page.locator('iframe').nth(3).contentFrame().locator('input[name="b42_item_price"]').fill('7000');
  await page.locator('iframe').nth(3).contentFrame().getByText('Procedure').first().click();
  await page.locator('iframe').nth(3).contentFrame().getByText('Attachments').first().click();
  await page.locator('iframe').nth(3).contentFrame().getByText('Details').first().click();
  await page.locator('iframe').nth(3).contentFrame().getByRole('button', { name: 'Save' }).click();
});