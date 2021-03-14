const el = require ('./elements').ELEMENTS
const elHome = require ('../../pages/home/elements').ELEMENTS
import Routes from '../../routes'

class Login {
    acessarLogin() {
        cy.visit('/login')
    }

    preencherFormulario() {
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputSenha).type(Cypress.config().user.senha)
    }

    submeterFormulario() {
        cy.get(el.buttonSumit).click()
    }

    validaLogin() {
        cy.wait(`@${Routes.nomeDaRota.postUserLogin}`).then((postUserLoginResponse) => {
            expect(postUserLoginResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.nomeDaRota.getTags}`).then(getTagsResponse =>{
            expect(getTagsResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.nomeDaRota.getArticlesFeed}`).then(getArticlesFeedResponse =>{
            expect(getArticlesFeedResponse.response.statusCode).to.eq(200)
        })
        cy.get(elHome.acessarHome).should('be.visible')
        cy.get(elHome.acessarConfig).should('be.visible')
        cy.get(elHome.perfil).should('contain.text', 'PEDRO BROSSMANN' )
    }
}

export default new Login()