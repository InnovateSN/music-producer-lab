import { expect, test } from '@playwright/test';

test('user can open signup page', async ({ page }) => {
  await page.goto('http://localhost:3000/signup.html');
  await expect(page).toHaveURL(/signup/);
});
