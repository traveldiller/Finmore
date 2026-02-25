import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginEmailInput: Locator;
  readonly loginPassInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly userMenu: Locator;  //maybe it better to put in another Class > Account for example
  readonly appTitle: Locator; //maybe it better to put in another Class > Account for example
  readonly appLogo: Locator;


constructor(page: Page) {
    this.page = page;
    this.loginEmailInput = page.getByTestId('login-email-input');
    this.loginPassInput = page.getByTestId('login-password-input');
    this.loginSubmitButton = page.getByTestId('login-submit-button');
    this.userMenu = page.getByTestId('user-menu-trigger');
    this.appTitle = page.getByTestId('app-title'); // 2 same ID for the page: header 'FinanceManager' with space and without
    this.appLogo = page.getByTestId('app-logo');
    }
}

