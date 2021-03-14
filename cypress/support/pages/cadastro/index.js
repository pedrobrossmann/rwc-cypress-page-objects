const faker = require('faker')
const el = require('./elements').ELEMENTS

class cadastro {
    acessarPaginaDeCadastro() {
        cy.visit(el.acessarPaginaDeCadastro)
    }
    
    preencherFormulario() {
        cy.get(el.inputUserName).type(faker.name.findName())
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputSenha).type(faker.internet.password())
    }

    submeterFormulario() {
        cy.get(el.submitFormulario).click()
    }
}

export default new cadastro