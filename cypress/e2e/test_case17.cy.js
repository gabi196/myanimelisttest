describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})

describe('Teste de validação de senha durante o login', () => {
  it('Deve validar a senha incorreta', () => {
      // Visitar a página de login
      cy.visit('https://myanimelist.net/login.php?from=%2Fregister.php') // Substitua pelo URL correto

      // Inserir um nome de usuário válido
      cy.get('#loginUserName').type('TestUser398') // Substitua os placeholders pelos valores reais

      // Inserir uma senha incorreta
      cy.get('#login-password').type('SenhaIncorreta') // Substitua os placeholders pelos valores reais

      // Tente fazer login
      cy.get('.btn-recaptcha-submit').click()

      // Verificar se uma mensagem de "senha incorreta" é exibida
      cy.contains('Your username or password is incorrect.') // Substitua pelo texto ou parte do texto da mensagem de erro
  })
})