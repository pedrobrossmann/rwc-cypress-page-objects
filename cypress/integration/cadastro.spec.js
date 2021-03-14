/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {

    beforeEach(() =>{
        // Preparação
        cadastro.acessarPaginaDeCadastro()
    })

    it('Cadastro com sucesso', () => {
        // Ação
        cadastro.preencherFormulario()
        cadastro.submeterFormulario()
        //Verificação 
        cadastro.verificaSeOCadastroTeveSucesso() 
    });
});