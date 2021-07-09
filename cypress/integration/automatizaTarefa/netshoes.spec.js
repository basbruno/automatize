/// <reference types="cypress" />
import Compra from '../../support/pages/pagenetshoes'

context('relizarProcessoDeAdcionarItemAoCarrinho', () => {

    before(() => {
        cy.visit('https://www.netshoes.com.br/')




    });



it('realizarPesquisaPorProduto',()=> {

    Compra.pesquisaProduto();




});

it('realizarValidacaoSeAPesquisaContemNike', () => {

    Compra.validacaoDePesquisa().should('contain', 'Resultados de busca para "Nike"')

})

it('selecionarProdutoEAdcionarNoCarrinho', () => {
    Compra.selecionarProdutoedicionarAoCarrinho().should('be.visible')
})




}
);