describe('Inserção de caracteres não convencionais no campo de busca por animes', () => {
    it('inserção de caracteres não convencionais no campo de busca por animes', () => {
      // Visitar a página de login do MyAnimeList
      Cypress.on('uncaught:exception', (err) => {
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      })
      cy.visit('https://myanimelist.net/login.php?from=%2F&');
      
      // Preencher os campos de login
      cy.get('#loginUserName').type('aladin0072');
      cy.get('#login-password').type('zFWLBNe3DD2I');
      cy.get(".pt16.ac > .inputButton").click();
      cy.wait(3000);
      cy.visit('https://myanimelist.net/anime.php')
      cy.get('#q').type('-1')
      cy.get('.anime-search-form-search > .inputButton').click()
      cy.get('No titles that matched your query were found').should('exist')
 
    });
  });