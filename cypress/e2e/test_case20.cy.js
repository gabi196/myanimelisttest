describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {

            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})

describe('Teste de verificação da lista de Animes de um usuário.', () => {
  it('Verificar a lista de Animes de um usuário.', () => {

      cy.visit('https://myanimelist.net/login.php?from=%2Fregister.php')

      cy.get('#loginUserName').type('TestUser398')

      cy.get('#login-password').type('sd2W6QTgN2ID')


      cy.get('.btn-recaptcha-submit').click()


       cy.visit("https://myanimelist.net/users.php?_location=mal_h_m")

      
       cy.get('table tbody tr td a').first().click();
 
       cy.get('a.btn-profile-submit:nth-child(1)').click() 


       cy.url().should('include', 'https://myanimelist.net/animelist')

       cy.contains('ALL ANIME').should('be.visible')
   })
  })
