import { test, expect } from '@playwright/test';

test('User form interaction', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByTestId('first-name').fill('John');
  await page.getByTestId('email').fill('john@example.com');
  await page.getByTestId('country-select').selectOption('Germany');
});
