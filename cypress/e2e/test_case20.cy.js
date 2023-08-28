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
 
       cy.get('a.btn-profile-submit:nth-child(1)').click() // Substitua pelo seletor correto

       // Verificar se a página de lista de animes foi carregada
       // Isso pode ser feito de várias maneiras, dependendo da estrutura da página
       // Por exemplo, verificando a URL:
       cy.url().should('include', 'https://myanimelist.net/animelist') // Substitua pelo fragmento da URL da lista de animes

       // Ou, se preferir, verificando algum elemento ou texto específico que só aparece na página de lista de animes:
       cy.contains('ALL ANIME').should('be.visible') // Substitua pelo texto ou elemento específico
   })
  })
