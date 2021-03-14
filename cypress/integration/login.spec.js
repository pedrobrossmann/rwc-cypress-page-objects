/// <reference types="cypress" />

import login from "../support/pages/login";

context('Login', () => {
    beforeEach(() => {
        // Preparação
        login.acessarLogin()
    });
    
    it('Login com sucesso', () => {
        // Ação
        login.preencherFormulario()
        login.submeterFormulario()

        //Verificação 
        login.validaLogin()
    });
});