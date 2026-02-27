import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


test.describe('Login suite', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        loginPage.openHomepage();
    })

    test('Login with valid credentials as Admin', async ({ page }) => {

        await test.step('Check login page', async () => {
            await expect(loginPage.loginSubmitButton).toBeEnabled();
            await expect(loginPage.loginSubmitButton).toHaveText('Увійти');
            await expect(loginPage.loginEmailInput).toBeEnabled();
            await expect(loginPage.loginEmailInput).toHaveAttribute('placeholder', 'your@email.com');
            await expect(loginPage.loginPassInput).toBeEnabled();
            await expect(loginPage.loginPassInput).toHaveAttribute('placeholder', 'Введіть пароль');
        });

        await test.step('Fill Login page with valid data', async () => {
            // await loginPage.loginEmailInput.fill('admin@demo.com');
            // await expect(loginPage.loginEmailInput).toHaveValue('admin@demo.com');
            // await loginPage.loginPassInput.fill('admin123');
            // await expect(loginPage.loginPassInput).toHaveValue('admin123');
            // await loginPage.loginSubmitButton.click();

        await loginPage.login({
            email: 'admin@demo.com',
            password: 'admin123'
        });
        });


        //await loginPage.clickOnLoginButton();

        await test.step('Verify user is logged in', async () => {
            await expect(loginPage.userMenu).toBeVisible();
            await expect(loginPage.userMenu).toHaveText('Admin Demo');
            await expect(loginPage.appTitle.first()).toContainText('FinanceManager');
            await expect(loginPage.appLogo).toBeVisible();
        });

    });

});