exports.HomePage = class HomePage {
    constructor(page) {
      this.page = page;
      this.employeesLink = page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
    }
  
    async clickEmployeesLink() {
      await this.employeesLink.click();
    }
  };