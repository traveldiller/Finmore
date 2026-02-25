import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginEmailInput: Locator;
  readonly loginPassInput: Locator;
  readonly loginSubmitButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.loginEmailInput = page.getByTestId('login-email-input');
    this.loginPassInput = page.getByTestId('login-password-input');
    this.loginSubmitButton = page.getByTestId('login-submit-button');
    }
}

