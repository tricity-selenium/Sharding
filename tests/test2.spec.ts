import { test, expect } from '@playwright/test';

test('Test2', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});


