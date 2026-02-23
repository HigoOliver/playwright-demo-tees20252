import { test, expect } from '@playwright/test';

test.describe('Links - DemoQA', () => {

  test('Abrir a página inicial em uma nova aba ao clicar no link Home', async ({ page }) => {
    // Dado que o usuário está na página de Links do DemoQA
    await page.goto('https://demoqa.com/links');

    // Quando clica no link Home
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.locator('#simpleLink').click(),
    ]);

    // Então uma nova aba deve ser aberta com a página inicial do site
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/demoqa\.com/);
  });

  test('Exibir mensagem de sucesso ao clicar no link Created', async ({ page }) => {
    // Dado que o usuário está na página de Links do DemoQA
    await page.goto('https://demoqa.com/links');

    // Quando clica no link Created
    await page.getByRole('link', { name: 'Created' }).click();

    // Então o sistema deve exibir uma mensagem informando o status 201 Created
    const responseMessage = page.locator('#linkResponse');
    await expect(responseMessage).toContainText('201');
    await expect(responseMessage).toContainText('Created');
  });
});