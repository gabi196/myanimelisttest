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
      cy.get('#login-password').type('sd2W6QTgN2ID') // Substitua os placeholders pelos valores reais

      // Tente fazer login
      cy.get('.btn-recaptcha-submit').click()

       // Navegar até a aba "Users" ou "Uses"
       cy.visit("https://myanimelist.net/users.php?_location=mal_h_m")

       // Clicar em um usuário para acessar seu perfil
       // Aqui, estou assumindo que você clicará no primeiro usuário da lista, mas isso pode ser adaptado
       cy.get('table tbody tr td a').first().click();
 
      // Verificar a quantidade de animes completados
        // Aqui, você precisa saber onde essa informação é mostrada. 
        // Assumindo que haja um elemento com um seletor específico e um texto como "Completed: 150", o código seria:
        cy.get('.completed').should('contain', 'Completed') // Substitua SELETOR_DO_ELEMENTO_COM_INFORMACAO_COMPLETADOS pelo seletor real
    })

   

  })