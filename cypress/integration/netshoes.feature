
Feature: Adicionar produto ao carrinho

    Scenario: Realizar pesquisa do produto
        Given acesso o site https://www.netshoes.com.br/
        When seleciono o item "[itemprop="query-input"]"
        And escrevo "Nike" 
        And seleciono o botão pesquisar '[qa-automation = "home-search-button"]'
        Then devo ser redirecionado a pagina contendo o elemento pesquisado em '.search-query' 