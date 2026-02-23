import { test, expect } from '@playwright/test'

test.describe('Registration suite', () => {
  let regTitle;
  let regName;
  let regEmail;
  let regPass;
  let regConfirmPass;
  let regSubmit;
  let currencySelect;
  let currencyUAH;

  test.beforeEach(async ({ page }) => {
    const regTitle = page.getByTestId('register-title');
    const regName = page.getByTestId('register-name-input');
    const regEmail = page.getByTestId('register-email-input');
    const regPass = page.getByTestId('register-password-input');
    const regConfirmPass = page.getByTestId('register-confirm-password-input');
    const regSubmit = page.getByTestId('register-submit-button');
    const currencySelect = page.getByTestId('register-currency-select');
    const currencyUAH = page.getByTestId('currency-option-UAH');
    await page.goto('/');
  })

  test('Homepage', async ({ page }) => {
    await expect(page).toHaveURL('/');
    await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
  });

  test('Registration', async ({ page }) => {
    await test.step('Press Registration button', async () => {
      const regLink = page.getByTestId('switch-to-register-button');
      await expect(regLink).toBeVisible();
      await regLink.click();
    });

    await test.step('Check Registration form', async() => {
      //const regTitle = page.getByTestId('register-title');
      await expect(regTitle).toHaveText('Реєстрація');
      await expect(regName).toBeEnabled();
      await expect(regName).toHaveAttribute('placeholder', 'Іван Петренко');
      await expect(regEmail).toBeEnabled();
      await expect(regEmail).toHaveAttribute('placeholder', 'your@email.com');
      await expect(regPass).toBeEnabled();
      await expect(regPass).toHaveAttribute('placeholder', 'Мінімум 6 символів');
      await expect(regConfirmPass).toBeEnabled();
      await expect(regConfirmPass).toHaveAttribute('placeholder', 'Повторіть пароль');
      await expect(currencySelect).toBeEnabled();
      await expect(currencySelect).toContainText('Гривня (UAH)');
      await expect(regSubmit).toBeEnabled();
      await expect(regSubmit).toHaveText('Зареєструватися');
    });

    await test.step('Fill Registration form with valid data', async () => {
      await regName.fill('Test User');
      await expect(regName).toHaveValue('Test User');
      await regEmail.fill('Test123@gmail.com');
      //add expect
      await regPass.fill('Pass123');
      await regConfirmPass.fill('Pass123');
      await regSubmit.click();
    });

  });

  test('Login with valid email and password', async ({ page }) => {
    await page
      .getByPlaceholder('email')
      .fill('admin@demo.com');
    await page.getByLabel('Password').fill('admin123');
  });
})