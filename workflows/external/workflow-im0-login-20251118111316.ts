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
  await page.locator('#loginBtn').click();
});