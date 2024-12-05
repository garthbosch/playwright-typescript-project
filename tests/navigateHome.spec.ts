import { test, expect } from '@playwright/test';

// Test Suite for the sinov8.net page
test.describe('Sinov8 Page Test', () => {
  test('should navigate to the home page and check for keywords @end2endtest @regressiontest @nightlytest @smoketest', async ({ page }) => {
    // Open the website
    await page.goto('https://sinov8.net/');

    // Navigate to Home (if there's a specific navigation required)
    // Example: await page.click('text=Home'); // Uncomment if a click action is needed

    // Assert that specific technologies are mentioned on the page
    const keywords = ['PHP', 'VueJS', 'Flutter', 'AWS'];
    for (const keyword of keywords) {
      const isVisible = await page.isVisible(`text=${keyword}`);
      expect(isVisible).toBeTruthy();
    }
  });
});
