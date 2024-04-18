exports.EmployeesPage = class EmployeesPage {
  
  constructor(page) {
    this.page = page;
    this.addEmployeeButton = page.getByRole("button", { name: "Add employee" });
    this.addAnotherEmployeeButton = page.getByRole("button", {name: "Add another employee"})
    this.closeModal = page.getByLabel("Close modal");
  }

  async clickAddEmployeeButton() {
    await this.addEmployeeButton.click();
  }

  async clickAddAnotherEmployeeButton() {
    await this.addAnotherEmployeeButton.click();
  }

  async clickCloseModal() {
    await this.closeModal.click();
  }

};
