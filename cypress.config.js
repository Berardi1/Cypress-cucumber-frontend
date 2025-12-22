const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank/index.htm",
    specPattern: "cypress/e2e/bdd-cucumber/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [
            require("@badeball/cypress-cucumber-preprocessor/esbuild")
              .createEsbuildPlugin(config),
          ],
        })
      );

      return config;
    },
  },
});
