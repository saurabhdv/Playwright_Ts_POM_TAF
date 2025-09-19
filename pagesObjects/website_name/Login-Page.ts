import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly loginButton: Locator;
  //readonly loginUrl: string;

  constructor(readonly page: Page) {
    console.log("In Login Page")
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Nexus brand logomark Start' })
  }

  async navigateToLogin() {
    await this.page.goto('/webui/login'); // add all that comes after base url /webui/login
  }

  async clickLoginButton() {
    await this.loginButton.click();
    //call prsonal test script here or new fun in new page
  }

}