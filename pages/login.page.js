exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByLabel("Email address");
    this.passWordField = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async login(email, password) {
    await this.emailField.fill(email);
    await this.passWordField.fill(password);
    await this.loginButton.click();
  }
};
