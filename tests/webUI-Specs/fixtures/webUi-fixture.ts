// any class of POM is instantiated here so we dont have to call it repedtly in each test class.
import { test as base, Page } from '@playwright/test';
// Import any page objects you want to instantiate automatically for each test
import { DashboardPage } from '../../../pagesObjects/website_name/Dashboard-Page';
import { LoginPage } from '../../../pagesObjects/website_name/Login-Page';


// Define the fixtures type
type webUiFixtures = {
    // Example of adding a fixture
    dashboardPage: DashboardPage;
    loginPage: LoginPage;

};

// Extend the playwright's 'test' fixture to include my POM custom fixtures
export const test = base.extend<webUiFixtures>({
    // Example fixture setup
     dashboardPage: async ({ page }, use) => {
         await use(new DashboardPage(page));
     },
     loginPage:  async ({ page }, use) => {
         await use(new LoginPage(page));
     },
});

export { expect , Page } from '@playwright/test';
