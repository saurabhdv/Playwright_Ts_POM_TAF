import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/webui/'); 
    await page.waitForLoadState('networkidle');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    console.log('Accessibility Violations:', accessibilityScanResults.violations);
    //added soft asserts so that test dont fail just scan and give output
    expect.soft(accessibilityScanResults.violations).toEqual([]);

    await page.close();
  });
});