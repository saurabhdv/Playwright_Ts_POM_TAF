//this fixture extends the webUi-fixture to add hooks
import { test as base , Page} from './webUi-fixture';

type hookFixtures={
 beforeHookGotoWebUi:Page;
 afterHookclose:Page;
}

export const test = base.extend<hookFixtures>({

  beforeHookGotoWebUi: async ({ page }, use) => {
    await page.goto('/webui');
    await use();
  },
  
  afterHookclose: async ({ page }, use) => {
    await use();   // use is like sending the control to test method so any action after test has to be below 'USE'
    await page.close();
  }
  
});

export { expect } from '@playwright/test';