// created custom fixture for page object once and reused it through out in test classes 
import { test, expect } from './fixtures/hook-fixture';

/*
 no need this is moved to fixture 
test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test if not already handled by a fixture
    await page.goto('/webui');
});
*/

test('Test valid login successful', { tag: '@Loginofficer @valid @smoke' }, async ({loginPage, beforeHookGotoWebUi, page }) => {

    await expect(page).toHaveURL(/webui/);
});

test('Test2', { tag: '@Loginofficer @valid @smoke' }, async ({loginPage, beforeHookGotoWebUi, afterHookclose, page }) => {
 
    console.log('In test 2');
});

