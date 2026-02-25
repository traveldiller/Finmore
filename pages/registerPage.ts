import { Page, Locator, expect } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly regTitle: Locator;
  readonly regName;
  readonly regEmail;
  readonly regPass;
  readonly regConfirmPass;
  readonly regSubmit;

constructor(page: Page) {
    this.page = page;
    this.regTitle = page.getByTestId('register-title');
    this.regName = page.getByTestId('register-name-input');
    this.regEmail = page.getByTestId('register-email-input');
    this.regPass = page.getByTestId('register-password-input');
    this.regConfirmPass = page.getByTestId('register-confirm-password-input');
    this.regSubmit = page.getByTestId('register-submit-button');
    }
}