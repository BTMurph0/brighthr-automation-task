// @ts-check
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { EmployeesPage } from "../pages/employees.page";
import { AddEmployeePage } from "../pages/addEmployee.page";

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("/");
});

test("add two new employees", async ({ page }) => {
  const loginEmail = "barrymurphy_9@hotmail.com";
  const password = "73$T9UmDkZj4l&%J";
  const firstName1 = `firstname${Math.floor(Math.random() * 1001)}`;
  const firstName2 = `firstname${Math.floor(Math.random() * 1001)}`;
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const employeesPage = new EmployeesPage(page);
  const addEmployeePage = new AddEmployeePage(page);
  
  await loginPage.login(loginEmail, password);
  await homePage.clickEmployeesLink();
  await employeesPage.clickAddEmployeeButton();
  await addEmployeePage.enterEmployeeDetails(
    firstName1,
    "lastName",
    `${firstName1}@test.com`,
    "07900000000",
    "test"
  );
  await addEmployeePage.saveEmployee();
  await employeesPage.clickAddAnotherEmployeeButton();

  await addEmployeePage.enterEmployeeDetails(
    firstName2,
    "lastName",
    `${firstName2}@test.com`,
    "07900000000",
    "test"
  );
  await addEmployeePage.saveEmployee();

  await employeesPage.clickCloseModal();
  
  await expect(page.getByText(firstName1)).toContainText(firstName1);
    await expect(page.getByText(firstName2)).toContainText(firstName2);
});
