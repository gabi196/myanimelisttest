describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {

            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})

describe('Teste de confirmação de e-mail', () => {
  it('Deve confirmar o e-mail após o cadastro', () => {
      const email = 'shalva2939@uorak.com';

      cy.visit('https://myanimelist.net/register.php?from=%2F&')

      cy.get('#loginEmail').type(email)

      cy.get('.password_checker_user_name').type('TestUser201931') 
      
      cy.get('#password').type('Teste123Topicos') 
      cy.get('#show-password').click()
      
      cy.get('#create-account').click()
  })
})
