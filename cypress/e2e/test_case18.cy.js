describe('Teste MAL', () => {
  it('visit site', () => {
    Cypress.on('uncaught:exception', (err) => {

            console.log('Cypress detected uncaught exception: ', err);
            return false;
          })
    cy.visit('https://myanimelist.net')
  })
})
describe('Teste de busca por anime não existente', () => {
  it('Deve retornar uma lista vazia de animes', () => {

      cy.visit('https://myanimelist.net/')


      cy.get('#topSearchText').type('Anime Imaginario')

      cy.get('#topSearchText').type('{enter}')
  })
})