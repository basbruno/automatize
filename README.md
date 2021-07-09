
# Como executar o projeto

tenha em seu computador o node.js




 



abra o projeto no VS Code e execute o terminal
Digite

npm init 

" npm install cypress --save-dev "
 
utilizado cypress para automatizar

Execute " ./node_modules/.bin/cypress open "
 
 
Agora para abrir o Cypress basta digitar o comando

./node_modules/.bin/cypress open ou npm run cypress

# detalhes adcionais


 O arquivo cypress\support\index.js possui a inclusão do comando 
 
 {
 
 
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
return false
})

Comando utilizado para o cypress ignorar falhas de carregamento do site netshoes
 
 }


Documentação para instalação <a href="https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install"> Cypress install </a>
