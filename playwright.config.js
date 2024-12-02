// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'desktop',
      use: {
        baseURL: 'https://rozetka.com.ua/ua/',
        headless: true,
        browserName: 'chromium',
        video: 'on',
        screenshot: 'only-on-failure',
        viewport: {width: 1366, height: 768},
      },
    },
  ],
  reporter: [
    ['html'],
  ],
  retries: 1,
  timeout: 120000,

  workers: 1,

});

