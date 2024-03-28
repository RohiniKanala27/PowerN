import { type Locator, type Page } from "@playwright/test";

export default class Login {
  readonly page: Page;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly INLprojectButton: Locator;
  readonly INLelement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordField = page.getByLabel("Password");
    this.userNameField = page.getByLabel("Username");
    this.loginButton = page.getByRole("button", { name: "Login" });

  }

  async openApplication(){
    await this.page.goto("https://dev.powern.ai/login");
  }

  async login(usernameVal: string , passwordVal : string){
    await  this.userNameField.fill(usernameVal);
    await this.passwordField.fill(passwordVal);
    await this.loginButton.click();
  }

  
}
