/// <reference types="cypress" />

describe("Test our form inputs", function(){
    //Run Test | Debug Test
    this.beforeEach(function() {
        cy.visit("http://localhost:3000");
    });
    it("adds text to input", function(){
    cy.get('[data-cy="username"]').type("Mike").should("have.value", "Mike");
    cy.get('[data-cy="email"]').type("email@email.com").should("have.value", "email@email.com");
    cy.get('[data-cy="password"]').type("H1n0r4sh1").should("have.value", "H1n0r4sh1");
    cy.get('textarea').type("Text input").should("have.value","Text input");
    cy.get('#role').select("Beta Tester").should("have.value", "Beta Tester");
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.contains('Submit').click();
    });
    
});