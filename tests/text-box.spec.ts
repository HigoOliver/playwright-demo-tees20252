import { test, expect } from '@playwright/test';

test.describe('Text Box - DemoQA', () => {

  test('Cenário positivo: preencher todos os campos corretamente', async ({ page }) => {
    // Dado que o usuário está na página de Text Box
    await page.goto('https://demoqa.com/text-box');

    // Quando preenche todos os campos com seus dados pessoais
    await page.fill('#userName', 'Higo Oliveira');
    await page.fill('#userEmail', 'higo@email.com');
    await page.fill('#currentAddress', 'Rua Exemplo, 123');
    await page.fill('#permanentAddress', 'Rua Permanente, 456');

    // E submete o formulário
    await page.click('#submit');

    // Então o sistema deve exibir as informações preenchidas
    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toContainText('Higo Oliveira');
    await expect(page.locator('#email')).toContainText('higo@email.com');
  });

  test('Cenário negativo: enviar formulário sem preencher os campos', async ({ page }) => {
    // Dado que o usuário está na página de Text Box
    await page.goto('https://demoqa.com/text-box');

    // Quando não preenche nenhum dos campos e submete o formulário
    await page.click('#submit');

    // Então o sistema não deve exibir informações preenchidas
    await expect(page.locator('#output')).not.toBeVisible();
  });

});