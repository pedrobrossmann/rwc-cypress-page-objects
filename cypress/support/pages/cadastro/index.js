const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

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

    verificaSeOCadastroTeveSucesso() {
        //verificando rotas
        cy.wait(`@${Routes.nomeDaRota.postUsers}`).then(postUsersResponse =>{
            expect(postUsersResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.nomeDaRota.getTags}`).then(getTagsResponse =>{
            expect(getTagsResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.nomeDaRota.getArticlesFeed}`).then(getArticlesFeedResponse =>{
            expect(getArticlesFeedResponse.response.statusCode).to.eq(200)
        })

    }
}

export default new cadastro