const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://nurdor-v2-admin.vivifyideas.com/",
    apiUrl: "https://nurdor-v2-api.vivifyideas.com/",
  },

  env: {
    email: "admin@gmail.com",
    password: "123456",
  },

  video: false,
  watchForFileChanges: false,
});
