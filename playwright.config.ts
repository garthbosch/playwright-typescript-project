import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  name: 'chromium',
  testDir: './tests',
  retries: 1,
  // reporter: 'list',
  reporter: [
    ['line'],
    ['html', {open: 'never', outputFolder: 'playwright-reports/html'}],
    ['allure-playwright', {outputFolder: 'allure-results'}],
    ['junit', {outputFile: 'test-results/junit/junit-result.xml'}],
  ],
  use: {
    headless: true,
    screenshot: 'on', //'only-on-failure',
    video: 'on', //'retain-on-failure',
    viewport: null, // Use full screen instead of a specific viewport
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], // Use Chromium-based configuration
        launchOptions: {
          args: ['--start-maximized'], // Maximize the browser window
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'], // Use Firefox configuration
        launchOptions: {
          args: ['--start-maximized'], // Maximize the browser window
        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'], // Use WebKit configuration
        launchOptions: {
          args: ['--start-maximized'], // Maximize the browser window
        },
      },
    },
  ],
});
