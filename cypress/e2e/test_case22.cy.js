describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {

            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})

describe('Teste de visualização da quantidade de animes completados por um usuário', () => {
  it('Verificar o perfil de um usuário e checar a quantidade de animes que ele completou.', () => {

      cy.visit('https://myanimelist.net/login.php?from=%2Fregister.php') 

      cy.get('#loginUserName').type('TestUser398') 


      cy.get('#login-password').type('sd2W6QTgN2ID')


      cy.get('.btn-recaptcha-submit').click()

       cy.visit("https://myanimelist.net/users.php?_location=mal_h_m")


       cy.get('table tbody tr td a').first().click();
 
        cy.get('.completed').should('contain', 'Completed') 
    })

   

  })