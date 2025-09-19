import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    // Locator for login user icon (third button)
    get loginUserIcon(): Locator {
        return this.page.locator('button').nth(2);
    }

    // Check if current page is Dashboard
    async currentPageIsDashboard(): Promise<boolean> {
        const text = await this.page.locator('//*[@class="current-route current-text"]').innerText();
        return text.includes('Dashboard');
    }

    // Get login profile permissions
    async loginProfilePermissions(): Promise<string | null> {
        await this.loginUserIcon.click();
        //page and action specific code here
        await this.page.getByText('My profile').click();
        await this.page.getByRole('dialog').getByRole('button').nth(2).click();
        const permissionsText = await this.page.locator('.container > div:nth-child(4) > div:nth-child(2)').textContent();
        await this.page.getByRole('button', { name: 'Close' }).click();
        return permissionsText;
    }


}
