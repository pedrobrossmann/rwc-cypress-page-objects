/// <reference types="cypress" />

import login from "../support/pages/login";

context('Login', () => {
    beforeEach(() => {
        login.acessarLogin()
    });
    
    it('Login com sucesso', () => {
       
        login.preencherFormulario()
        login.submeterFormulario()

        //Verificação 
    });
});