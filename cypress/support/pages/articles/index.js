const faker = require('faker')

const el = require('./elements').ELEMENTS
class article {

    acessarCadastroNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormularioPublicacao() {
        cy.get(el.inputTitle).type(faker.lorem.slug())
        cy.get(el.inputArticle).type(faker.lorem.word())
        cy.get(el.inputBody).type(faker.lorem.paragraph())
        cy.get(el.inputTag).type(faker.lorem.slug())
    }

    submeterFormularioPublicacao() {
        cy.get(el.submit).click()
    }
}

export default new article()