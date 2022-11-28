/// <reference types="cypress" />

describe("password toggle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have empty input by default", () => {
    cy.get("#password").should("exist");
  });

  it("should have button", () => {
    cy.get("#show").should("exist").click();
  });

  it("should write password and show password", () => {
    cy.get("#password").type("123456789");
    cy.get("#show").click();
    cy.get("#password[type='text']").should("exist");
  });
});
