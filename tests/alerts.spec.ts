import { test, expect } from '@playwright/test';

test.describe('Alerts - DemoQA', () => {

  test('Exibir um alerta simples ao clicar no botão', async ({ page }) => {
    // Dado que o usuário está na página Alerts do DemoQA
    await page.goto('https://demoqa.com/alerts');

    // Então o sistema deve exibir um alerta com a mensagem esperada
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('You clicked a button');
      await dialog.accept();
    });

    // Quando clica no botão para exibir um alerta simples
    await page.click('#alertButton');
  });

  test('Exibir um alerta após um tempo de espera', async ({ page }) => {
    // Dado que o usuário está na página Alerts do DemoQA
    await page.goto('https://demoqa.com/alerts');

    // Então o sistema deve exibir um alerta após alguns segundos
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('This alert appeared after 5 seconds');
      await dialog.accept();
    });

    // Quando clica no botão para exibir um alerta com atraso
    await page.click('#timerAlertButton');
  });

  test('Exibir uma caixa de confirmação ao clicar no botão', async ({ page }) => {
    // Dado que o usuário está na página Alerts do DemoQA
    await page.goto('https://demoqa.com/alerts');

    // Então o sistema deve exibir uma caixa de confirmação e permitir confirmação
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });

    // Quando clica no botão para exibir uma caixa de confirmação
    await page.click('#confirmButton');

    // Então o sistema deve exibir a mensagem de confirmação
    await expect(page.locator('#confirmResult'))
      .toHaveText('You selected Ok');
  });

  test('Exibir uma caixa de diálogo para inserção de texto', async ({ page }) => {
    // Dado que o usuário está na página Alerts do DemoQA
    await page.goto('https://demoqa.com/alerts');

    // Então o sistema deve exibir uma caixa de diálogo para inserção de texto
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Higo');
    });

    // Quando clica no botão para exibir uma caixa de diálogo
    await page.click('#promtButton');

    // Então o sistema deve exibir o nome inserido
    await expect(page.locator('#promptResult'))
      .toContainText('Higo');
  });

});