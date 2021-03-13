/// <reference types="cypress" />
var faker = require('faker');

context('Cadastro', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('/register')

        cy.get('[placeholder="Username"]').type(faker.name.findName())
        cy.get('[placeholder="Email"]').type(faker.internet.email())
        cy.get('[placeholder="Password"]').type(faker.internet.password())
        cy.get('[type="submit"]').click()
    });
});