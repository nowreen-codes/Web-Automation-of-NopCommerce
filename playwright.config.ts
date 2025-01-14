import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60 * 1000 * 5,

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"], 
      },
    },
  ],

  testMatch: ["pomtest/addToCartUsingFixture.test.ts"],
  use: {
   // connectOptions: {
     // wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
    //},
   headless: false,
   screenshot: "on", // "only-on-failure" can be used as well
   video: "retain-on-failure",
   launchOptions: {
      slowMo: 1000,
    },
  },
   retries: 0, 
   reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReporters/jsonReport.json" }],
    ["html", { open: "always" }],
  ],
};

export default config;
