/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {

    beforeEach(() =>{
        cadastro.acessarPaginaDeCadastro()
    })

    it('Cadastro com sucesso', () => {
        cadastro.preencherFormulario()
        cadastro.submeterFormulario() 
    });
});