//webui fixtures as in dont need before and after for this 
import { test, expect } from '../webUI-Specs/fixtures/webUi-fixture';

test('Global login steps',async({page,loginPage})=>{
    await loginPage.navigateToLogin();
    await loginPage.clickLoginButton();

    await page.context().storageState({path : './auth.json'})

});