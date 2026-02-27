import { Page, Locator } from "@playwright/test";
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export class RegisterPage {
  readonly page: Page;
  readonly regLink: Locator;
  readonly regTitle: Locator;
  readonly regNameInput: Locator;
  readonly regEmailInput: Locator;
  readonly regPassInput: Locator;
  readonly regConfirmPassInput: Locator;
  readonly regSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.regLink = page.getByTestId('switch-to-register-button');
    this.regTitle = page.getByTestId('register-title');
    this.regNameInput = page.getByTestId('register-name-input');
    this.regEmailInput = page.getByTestId('register-email-input');
    this.regPassInput = page.getByTestId('register-password-input');
    this.regConfirmPassInput = page.getByTestId('register-confirm-password-input');
    this.regSubmit = page.getByTestId('register-submit-button');
  }

  async clickOnRegisterLink() {
    await this.regLink.click();
  };

  async fillRegisterForm(data:RegisterData) {
    await this.regNameInput.fill(data.name);
    await this.regEmailInput.fill(data.email);
    await this.regPassInput.fill(data.password);
    await this.regConfirmPassInput.fill(data.confirmPassword);
  }

  async clickonRegisterButton() {
    await this.regSubmit.click();
  }

}