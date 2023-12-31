describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {

            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})

describe('Teste de visualização dos animes que um usuário desistiu de assistir', () => {
  it('Verificar os animes que o usuário desistiu de assistir.', () => {
     
      cy.visit('https://myanimelist.net/login.php?from=%2Fregister.php')

     
      cy.get('#loginUserName').type('TestUser398') 
      
      cy.get('#login-password').type('sd2W6QTgN2ID') 

     
      cy.get('.btn-recaptcha-submit').click()

       
      cy.visit("https://myanimelist.net/users.php?_location=mal_h_m")

       cy.get('table tbody tr td a').first().click();
 
        cy.get('.dropped').should('contain', 'Dropped') 

    })

  })