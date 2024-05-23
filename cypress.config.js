const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  allureWriter(on, config);
  on('file:preprocessor', browserify.default(config))
  return config
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    viewportHeight: 900,
    viewportWidth: 1680,
    specPattern: '**/*.{feature, features}',
    setupNodeEvents,
  },
});
