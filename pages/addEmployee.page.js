exports.AddEmployeePage = class AddEmployeePage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator("id=firstName");
    this.lastNameField = page.locator("id=lastName");
    this.emailAddressField = page.locator("id=email");
    this.phoneNumberField = page.locator("id=phoneNumber");
    this.startDateField = page.locator("id=startDate");
    this.day = page.locator(".DayPicker-Day--today");
    this.jobTitleField = page.locator("id=jobTitle");
    this.saveNewEmployee = page.getByRole("button", {
      name: "Save new employee",
    });
  }

  async enterEmployeeDetails(firstName, lastName, email, phoneNumber, job) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailAddressField.fill(email);
    await this.phoneNumberField.fill(phoneNumber);
    await this.startDateField.click();
    await this.day.click();
    await this.jobTitleField.fill(job);
  }

  async saveEmployee() {
    await this.saveNewEmployee.click();
  }
};
