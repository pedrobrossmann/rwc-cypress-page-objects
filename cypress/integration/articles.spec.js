/// <reference types="cypress" />

const faker = require('faker')

context('Publicações', () => {
    beforeEach(() => {
        cy.login_Backgroud()
    });

    it('Criar uma publicação', () => {
    cy.get('a[href="#/editor/"]').click()
    cy.get('[ng-model="$ctrl.article.title"]').type(faker.lorem.slug())
    cy.get('[ng-model="$ctrl.article.description"]').type(faker.lorem.word())
    cy.get('[ng-model="$ctrl.article.body"]').type(faker.lorem.paragraph())
    cy.get('[ng-model="$ctrl.tagField"]').type(faker.lorem.slug())
    cy.get('[ng-click="$ctrl.submit()"]').click()

        
    })
})