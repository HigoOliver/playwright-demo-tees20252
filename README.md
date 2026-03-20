# Playwright Demo - TEES 2025.2

Projeto da disciplina de Tópicos Especiais em Engenharia de Software utilizando o framework Playwright para automação de testes end-to-end com abordagem BDD (Gherkin).

---

## Objetivo

Automatizar testes em um sistema web utilizando Playwright, especificando cenários em Gherkin e integrando execução automática com GitHub Actions.

---

## Tecnologias Utilizadas

- Playwright
- Node.js (LTS)
- TypeScript
- Git e GitHub
- GitHub Actions (CI/CD)
- Gherkin (BDD)

---

## Funcionalidades testadas

O projeto cobre 4 funcionalidades do site DemoQA:

- ✅ Text Box
- ✅ Links
- ✅ Buttons
- ✅ Alerts

Cada funcionalidade possui:
- Cenários escritos em Gherkin
- Testes automatizados com Playwright
- Validação de comportamento esperado

---

## Abordagem BDD

Os cenários foram definidos utilizando o padrão Gherkin:

```gherkin
Funcionalidade: Exemplo

História: Como usuário, posso interagir com o sistema para validar comportamentos

Cenário: Exemplo de cenário
Dado que o usuário está na página
Quando realiza uma ação
Então o sistema deve apresentar o resultado esperado
```

---

## Estrutura do projeto

```
playwright-demo-tees20252/        # CI com Github Actions
├── .github/workflows                  
│   └── playwright.yml    
├── features/                     # Cenários em Gherkin
│   ├── alerts.feature 
│   ├── buttons.feature 
│   ├── links.feature 
│   └── text-box.feature          
├── tests/                        # Testes Automatizados
│   ├── alerts.spec.ts 
│   ├── buttons.spec.ts 
│   ├── links.spec.ts 
│   └── text-box.spec.ts
├── playwright.config.ts
├── package.json             
└── README.md             
```

---

## Pré-requisitos

- Node.js (versão LTS recomendada)

- Git instalado

---

## Verificar versões:

```bash
node -v
git --version
```

---

## Como executar o projeto

1. Clonar o repositório

```bash
git clone https://github.com/HigoOliver/playwright-demo-tees20252.git
cd playwright-demo-tees20252
```

---

2. Instalar dependências

```bash
npm install
```

---

3. Instalar navegadores do Playwright

```bash
npx playwright install
```

---

4. Executar os testes

```bash
npx playwright test
```

---

5. Visualizar relatório

```bash
npx playwright show-report
```

---

## Integração contínua (CI)

O projeto utiliza GitHub Actions para execução automática dos testes.

Sempre que um commit é enviado para a branch main, o GitHub:

- Instala dependências
- Instala navegadores
- Executa os testes
- Gera relatório

Status dos testes pode ser visualizado na aba Actions do repositório no GitHub.

## Conceitos aplicados

- Automação de testes end-to-end
- BDD (Behavior Driven Development)
- Seletores com boas práticas (getByRole, locators)
- Manipulação de eventos (alerts, dialogs)
- Execução em múltiplos ambientes (Node 18, 20, 22)
- Integração contínua (CI/CD)

## Referências

- https://playwright.dev/

- https://playwright.dev/docs/intro


