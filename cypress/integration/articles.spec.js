/// <reference types="cypress" />

import article from "../support/pages/articles/"

context('Publicações', () => {
    // Preparação
    beforeEach(() => {
        cy.login_Backgroud()
        article.acessarCadastroNovaPublicacao()
    });

    it('Criar uma publicação', () => {
        // Ação    
        article.preencherFormularioPublicacao()
        article.submeterFormularioPublicacao
        // Verificação     

    })
})