const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tutorialspoint.com/html',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
