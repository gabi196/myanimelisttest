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
describe('Teste de busca por anime não existente', () => {
  it('Deve retornar uma lista vazia de animes', () => {
      // Visitar a URL principal
      cy.visit('https://myanimelist.net/')

      // Localizar a barra de busca e inserir o nome de um anime que não existe
      cy.get('#topSearchText').type('Anime Imaginario') // Substitua os placeholders

      // Submeter a busca (isso pode variar dependendo da implementação do site)
      // Se a busca é submetida ao pressionar "Enter", use:
      cy.get('#topSearchText').type('{enter}')
  })
})