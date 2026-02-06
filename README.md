# Playwright Demo - TEES 2025.2

Software Testing course project demonstration using Playwright framework.

## Prerequisites

- **Node.js**: Version 18.x or higher (LTS recommended)
  - Check your version: `node --version`
  - Download from: https://nodejs.org/
- **Git**: Latest version
  - Check your version: `git --version`
  - Download from: https://git-scm.com/

## Quick Start

### Option 1: Fork the Repository (Recommended for Students)

1. **Fork this repository** to your GitHub account:
   - Click the "Fork" button at the top-right of this repository
   - This creates your own copy that you can modify freely

2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/playwright-demo-tees20252.git
   cd playwright-demo-tees20252
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

5. **Run the tests**:
   ```bash
   npx playwright test
   ```

6. **View test report**:
   ```bash
   npx playwright show-report
   ```

### Option 2: Clone Directly (For Quick Testing)

```bash
git clone https://github.com/rodrigo-rac2/playwright-demo-tees20252.git
cd playwright-demo-tees20252
npm install
npx playwright install
npx playwright test
```

## Project Structure

```
playwright-demo-tees20252/
├── tests/                  # Test files
│   └── example.spec.ts    # Example test suite
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

---

## Detailed Guide: Playwright Testing

### What is Playwright?

Playwright is a modern end-to-end testing framework that allows you to automate browser interactions across Chromium, Firefox, and WebKit. It provides a reliable way to test web applications with features like auto-waiting, parallel execution, and cross-browser support.

### Understanding the Test Structure

A Playwright test follows the **Arrange-Act-Assert** pattern:

```typescript
test('test description', async ({ page }) => {
  // Arrange - Set up the initial state
  await page.goto('https://example.com');
  
  // Act - Perform actions
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Assert - Verify expected outcomes
  await expect(page.getByText('Success')).toBeVisible();
});
```

### Key Concepts

#### 1. **Locators** - Finding Elements

Playwright recommends using user-facing attributes:

```typescript
// ✅ Recommended: Role-based selectors (accessible)
await page.getByRole('button', { name: 'Submit' });
await page.getByRole('textbox', { name: 'Email' });
await page.getByRole('heading', { name: 'Welcome' });

// ✅ Good: Text content
await page.getByText('Click me');
await page.getByLabel('Password');

// ⚠️ Use with caution: CSS selectors (fragile)
await page.locator('#submit-button');
await page.locator('.form-input');
```

#### 2. **Assertions** - Verifying Expectations

```typescript
// Visibility assertions
await expect(page.getByText('Success')).toBeVisible();
await expect(page.getByText('Loading')).toBeHidden();

// Text assertions
await expect(page.getByRole('heading')).toHaveText('Dashboard');
await expect(page.getByRole('alert')).toContainText('Error');

// Page-level assertions
await expect(page).toHaveTitle('My App');
await expect(page).toHaveURL(/dashboard/);

// Count assertions
await expect(page.getByRole('listitem')).toHaveCount(5);
```

#### 3. **Auto-Waiting**

Playwright automatically waits for elements to be actionable:

```typescript
// No manual wait needed - Playwright waits until button is clickable
await page.getByRole('button').click();

// Manually wait for specific states (when needed)
await page.waitForLoadState('networkidle');
await page.waitForSelector('.dynamic-content');
```

#### 4. **Page Interactions**

```typescript
// Clicking
await page.getByRole('button', { name: 'Save' }).click();

// Typing
await page.getByLabel('Username').fill('testuser');
await page.getByLabel('Email').type('test@example.com');

// Selecting options
await page.getByLabel('Country').selectOption('Brazil');

// Checking/unchecking
await page.getByLabel('Accept terms').check();
await page.getByLabel('Newsletter').uncheck();

// File uploads
await page.getByLabel('Upload').setInputFiles('path/to/file.pdf');
```

### Running Tests

#### Basic Commands

```bash
# Run all tests
npx playwright test

# Run a specific file
npx playwright test tests/example.spec.ts

# Run tests in headed mode (see the browser)
npx playwright test --headed

# Run tests in UI mode (interactive)
npx playwright test --ui

# Run tests in debug mode
npx playwright test --debug

# Run only tests with specific tag/grep
npx playwright test --grep "@smoke"
```

#### Viewing Reports

```bash
# Show HTML report
npx playwright show-report

# Generate trace for debugging
npx playwright test --trace on
```

### Configuration Tips

The `playwright.config.ts` file controls test behavior:

```typescript
// Key configuration options:
{
  testDir: './tests',           // Where tests are located
  timeout: 30000,               // Maximum test timeout (30s)
  retries: 2,                   // Retry failed tests
  workers: 4,                   // Parallel execution
  use: {
    baseURL: 'http://localhost:3000',  // Default URL
    headless: true,             // Run without browser UI
    screenshot: 'only-on-failure',     // Capture screenshots
    video: 'retain-on-failure', // Record videos
  }
}
```

### Best Practices

1. **Use Descriptive Test Names**
   ```typescript
   // ✅ Good
   test('should display error when submitting empty form', async ({ page }) => {});
   
   // ❌ Bad
   test('test1', async ({ page }) => {});
   ```

2. **Follow Arrange-Act-Assert Pattern**
   - Keep tests organized and readable
   - Separate setup, actions, and verifications

3. **Use Page Object Model (POM)** for larger projects
   - Encapsulate page interactions in classes
   - Improve maintainability and reusability

4. **Avoid Hard-Coded Waits**
   ```typescript
   // ❌ Avoid
   await page.waitForTimeout(5000);
   
   // ✅ Better
   await expect(page.getByText('Loaded')).toBeVisible();
   ```

5. **Test in Multiple Browsers**
   - Configure projects in `playwright.config.ts`
   - Ensure cross-browser compatibility

6. **Use Test Hooks**
   ```typescript
   test.beforeEach(async ({ page }) => {
     // Setup before each test
     await page.goto('/');
   });
   
   test.afterEach(async ({ page }) => {
     // Cleanup after each test
   });
   ```

### Common Debugging Techniques

1. **Pause Execution**
   ```typescript
   await page.pause(); // Opens Playwright Inspector
   ```

2. **Take Screenshots**
   ```typescript
   await page.screenshot({ path: 'screenshot.png' });
   ```

3. **Console Logs**
   ```typescript
   page.on('console', msg => console.log(msg.text()));
   ```

4. **Trace Viewer**
   ```bash
   # Record trace
   npx playwright test --trace on
   
   # View trace
   npx playwright show-trace trace.zip
   ```

### Resources

- **Official Documentation**: https://playwright.dev/
- **API Reference**: https://playwright.dev/docs/api/class-playwright
- **Best Practices**: https://playwright.dev/docs/best-practices
- **Examples**: https://github.com/microsoft/playwright/tree/main/examples

### Getting Help

- Check the [Playwright Discord](https://aka.ms/playwright/discord)
- Browse [Stack Overflow](https://stackoverflow.com/questions/tagged/playwright)
- Review course materials and examples

---

## Contributing to Your Project

As you develop your test suite:

1. Create feature branches:
   ```bash
   git checkout -b feature/login-tests
   ```

2. Commit your changes:
   ```bash
   git add .
   git commit -m "Add login page tests"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/login-tests
   ```

4. Create Pull Requests for review (if working in teams)

## License

ISC
