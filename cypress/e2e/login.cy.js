import data from "../fixtures/data.json";
import Login from "../support/classes/login";

const login = new Login();

describe("Login page Nurdor Admin Panel", () => {
  before("Visit Nurdor Admin login page", () => {
    cy.visit("/");
    login.assertLoginPage(data.loginH2);
  });

  it("Login with empty fields - negative", () => {
    login.loginEmptyFields(data.email.isAMust, data.password.isAMust);
  });

  it("Login to Nurdor Admin Panel - positive", () => {
    login.loginAdminUser(Cypress.env("email"), Cypress.env("password"));
  });
});
