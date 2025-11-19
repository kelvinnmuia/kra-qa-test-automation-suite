import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://icmsdev-cas.kra.go.ke:36091/cas/login?service=https%3A%2F%2Ficmsdev-app01.kra.go.ke%3A36081%2Fwelcome.jsp');
  await page.getByRole('textbox', { name: 'User name' }).click();
  await page.getByRole('textbox', { name: 'User name' }).fill('CSAP000600883UG');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('KEN12345');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.locator('#loginBtn').click();
  await page.locator('#demoCLR').click();
  await page.getByRole('link', { name: 'Declaration' }).click();
  await page.getByRole('link', { name: 'Capture' }).click();
  await page.locator('iframe').nth(1).contentFrame().locator('#sclist1087 > .ui_list_ListOfValue_button').click();
  await page.locator('iframe').nth(1).contentFrame().getByText('Import Declaration Form').click();
  await page.locator('iframe').nth(1).contentFrame().locator('.ui_list_ListOfValue_button').first().click();
  await page.locator('iframe').nth(1).contentFrame().getByText('BGM').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#sclist1090 > .ui_list_ListOfValue_button').click();
  await page.locator('iframe').nth(1).contentFrame().getByText('BUNGOMA').click();
  await page.goto('https://icmsdev-app01.kra.go.ke:36081/e-biscus/dispatchAction.action?service=CR&menuReload=true#');
  await page.getByRole('link', { name: 'Declaration' }).click();
  await page.getByRole('link', { name: 'Capture' }).click();
  await page.locator('iframe').nth(1).contentFrame().locator('#sclist1087 > .ui_list_ListOfValue_button').click();
  await page.locator('iframe').nth(1).contentFrame().getByText('IM0').click();
  await page.locator('iframe').nth(1).contentFrame().locator('.ui_list_ListOfValue_button').first().click();
  await page.locator('iframe').nth(1).contentFrame().getByText('ELW', { exact: true }).click();
  await page.locator('iframe').nth(1).contentFrame().locator('#sclist1090 > .ui_list_ListOfValue_button').click();
  await page.locator('iframe').nth(1).contentFrame().getByText('ELWAK').click();
});