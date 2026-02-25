import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Check login page', async () => {
            await expect(loginPage.loginSubmitButton).toBeEnabled();
            await expect(loginPage.loginSubmitButton).toHaveText('Увійти');
            await expect(loginPage.loginEmailInput).toBeEnabled();
            await expect(loginPage.loginEmailInput).toHaveAttribute('placeholder', 'your@email.com');
            await expect(loginPage.loginPassInput).toBeEnabled();
            await expect(loginPage.loginPassInput).toHaveAttribute('placeholder', 'Введіть пароль');

        });

        await test.step('Fill Login page with valid data', async () => {
            await loginPage.loginEmailInput.fill('admin@demo.com');
            await expect(loginPage.loginEmailInput).toHaveValue('admin@demo.com');
            await loginPage.loginEmailInput.fill('admin123');
            await expect(loginPage.loginPassInput).toHaveValue('admin123');
            await loginPage.loginSubmitButton.click();

        });

        await test.step('Verify user is logged in', async () => {

        });

    });

});

test('Login with valid email and password', async ({ page }) => {
    await test.step('Step 3: Verify result', async () => {
        // Arrange

        // Act

        // Assert
    });
    await page.getByTestId('login-email-input')
        .fill('admin@demo.com');
    await page.getByTestId('login-password-input').fill('admin123');
    await page.getByTestId('login-submit-button').click();
});
})