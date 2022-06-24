import LoginElements from "../../elements/loginElements";

class Login {
  assertLoginPage(loginHeading) {
    cy.url().should("contain", "/login");
    cy.get(LoginElements.heading)
      .should("be.visible")
      .and("contain", loginHeading);
  }

  loginEmptyFields(noEmail, noPass) {
    cy.get(LoginElements.signUpBtn).click();

    cy.get(LoginElements.noEmailDiv)
      .should("be.visible")
      .and("contain", noEmail);

    cy.get(LoginElements.noPassDiv).should("be.visible").and("contain", noPass);
  }

  loginAdminUser(email, password) {
    cy.intercept("POST", "api/auth/login/").as("login");

    cy.get(LoginElements.emailInput).type(email);
    cy.get(LoginElements.passwordInput).type(password);
    cy.get(LoginElements.signUpBtn).click();

    cy.wait("@login").should(({ response, request }) => {
      expect(request.method).to.equal("POST");
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.include({ token_type: "bearer" });
      cy.url().should("contain", "/organizations");
    });
  }
}

export default Login;
