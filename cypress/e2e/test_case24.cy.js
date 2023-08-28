describe('Teste de confirmação de e-mail', () => {
  it('Deve confirmar o e-mail após o cadastro', () => {
      const email = 'lolib75114@trazeco.com'; // Usando Mailinator como exemplo

      // Visitar a URL de cadastro
      cy.visit('https://myanimelist.net/register.php?from=%2F&')

      // Preencher o formulário de cadastro
      cy.get('#loginEmail').type(email)
      // Preencha os outros campos conforme necessário...
            // Inserir um nome de usuário válido
      cy.get('.password_checker_user_name').type('TestUser201933') // Substitua os placeholders pelos valores reais

      // Inserir uma senha incorreta
      cy.get('#password').type('Teste123Topicos') // Substitua os placeholders pelos valores reais
      cy.get('create-account').click()

      // Ou, se preferir, verificando algum elemento ou texto específico que só aparece na página de lista de animes:
      cy.contains('You will receive an e-mail shortly with instructions detailing how to finish your registration.').should('be.visible') // Substitua pelo texto ou elemento específico
  })
})
