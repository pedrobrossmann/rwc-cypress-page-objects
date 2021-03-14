const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'
/// <reference types="cypress" />
class article {

    acessarCadastroNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormularioPublicacao() {
        cy.get(el.inputTitle).type('pedro-qa')
        cy.get(el.inputArticle).type(faker.lorem.word())
        cy.get(el.inputBody).type(faker.lorem.paragraph())
        cy.get(el.inputTag).type(faker.lorem.slug())
    }

    submeterFormularioPublicacao() {
        cy.get(el.submit).click()
    }

    verificarSeAPublicaoFoiCriadaComSucesso() {
        cy.wait(`@${Routes.nomeDaRota.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.nomeDaRota.getArticlesTitle}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.nomeDaRota.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.response.statusCode).to.eq(200)
        })
    }
}

export default new article()