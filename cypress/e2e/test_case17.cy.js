describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {
            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})

describe('Teste de validação de senha durante o login', () => {
  it('Deve validar a senha incorreta', () => {
      cy.visit('https://myanimelist.net/login.php?from=%2Fregister.php')

      cy.get('#loginUserName').type('TestUser398')

      cy.get('#login-password').type('SenhaIncorreta')

      cy.get('.btn-recaptcha-submit').click()

      cy.contains('Your username or password is incorrect.')
  })
})