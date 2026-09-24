import { test, expect } from '@playwright/test';

test('Test3', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Selenium/);
});


