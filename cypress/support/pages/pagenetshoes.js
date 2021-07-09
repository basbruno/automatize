/// <reference types="cypress" />


class Comprar {

    pesquisaProduto() {

        cy.get('[itemprop="query-input"]').type('nike')

        cy.get('[qa-automation = "home-search-button"]').click()



    }

    validacaoDePesquisa() {

        cy.wait(3000)

        return cy.get('.search-query')





    }

    selecionarProdutoedicionarAoCarrinho() {

       
        cy.get('[href="//www.netshoes.com.br/tenis-nike-downshifter-11-masculino-preto+branco-HZM-5208-026"] > .item-card > .item-card__images > .item-card__images__image-link > .loaded').click()
    cy.get('.active > a > span > img').click()
    cy.get(':nth-child(5) > .product-item').click()
    cy.wait(3000)
    cy.get('#buy-button-now')
        .click()
    cy.get('.cart__items > .cart__title').should('contain','Meu carrinho')
    return cy.get('.product-item')



    }


}

export default new Comprar();