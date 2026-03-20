import { test, expect } from '@playwright/test';

test.describe('Buttons - DemoQA', () => {

  test('Realizar duplo clique no botão', async ({ page }) => {
    // Dado que o usuário está na página de Buttons
    await page.goto('https://demoqa.com/buttons');

    // Quando realiza um duplo clique
    await page.dblclick('#doubleClickBtn');

    // Então deve exibir a mensagem
    await expect(page.locator('#doubleClickMessage'))
      .toHaveText('You have done a double click');
  });

  test('Realizar clique com botão direito', async ({ page }) => {
    // Dado que o usuário está na página de Buttons
    await page.goto('https://demoqa.com/buttons');

    // Quando realiza clique com botão direito
    await page.click('#rightClickBtn', { button: 'right' });

    // Então deve exibir a mensagem
    await expect(page.locator('#rightClickMessage'))
      .toHaveText('You have done a right click');
  });

  test('Realizar clique simples no botão dinâmico', async ({ page }) => {
    // Dado que o usuário está na página de Buttons
    await page.goto('https://demoqa.com/buttons');

    // Quando realiza clique simples
    await page.getByRole('button', { name: 'Click Me', exact: true }).click();

    // Então deve exibir a mensagem
    await expect(page.locator('#dynamicClickMessage'))
      .toHaveText('You have done a dynamic click');
  });

});