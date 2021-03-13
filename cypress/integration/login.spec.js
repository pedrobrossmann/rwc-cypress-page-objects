/// <reference types="cypress" />
var faker = require('faker');

context('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('/login')

        cy.get('[type="email"]').type(Cypress.config().user.email)
        cy.get('[type="password"]').type(Cypress.config().user.senha)
        cy.get('[type="submit"]').click()
    });
});