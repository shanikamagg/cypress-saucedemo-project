const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    env: {
      url: 'https://www.saucedemo.com/'
    },
    reporter:'cypress-mochawesome-reporter',
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 80000,
    projectId: "mne8zc",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    },
  },
});