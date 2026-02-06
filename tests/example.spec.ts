import { test, expect } from '@playwright/test';

test('deve carregar o site de registro a partir de `automationtesting.in`', async ({ page }) => {
  // Arrange
  await page.goto('https://demo.automationtesting.in/');

  // await page.pause();
  // Act 
  await page.getByRole('button', { name: 'Skip Sign In' }).click();

  // Assert
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();
  await expect(page.locator('#firstpassword')).toBeVisible();
  await expect(page.locator('#secondpassword')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Register");
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
