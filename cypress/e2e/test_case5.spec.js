describe('Deletar um anime/mangá da lista', () => {
    it('Deletar um anime/mangá da lista', () => {
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
   
      cy.visit('https://myanimelist.net/animelist/aladin0072');
      cy.contains('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song').should('exist');
      cy.contains('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song').click()
      cy.get("#addtolist > table > tbody > :nth-child(4) > :nth-child(2) > small > a").click();
	  cy.get("[style=\"text-align: center;\"] > #delete-form > .inputButton").click();
      cy.visit('https://myanimelist.net/animelist/aladin0072');
      cy.contains('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song').should('not.exist');
 
    });
  });