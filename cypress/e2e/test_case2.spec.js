// 
describe('Mover um anime da lista Watching para a lista Completed', () => {
    it('Avaliar um mangá  como masterpiece', () => {
      // Visitar a página de login do MyAnimeList
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      })
      cy.visit('https://myanimelist.net/login.php?from=%2F&');
      
      // Preencher os campos de login
      cy.get('#loginUserName').type('aladin0072');
      cy.get('#login-password').type('zFWLBNe3DD2I');
      cy.get(".pt16.ac > .inputButton").click();
      cy.wait(3000);

      cy.get("#topSearchText").type('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song');
      cy.get('#topSearchResultList > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click();
      cy.get("#topSearchButon").click();
      cy.get('.user-status-block > #myinfo_status').select('Completed')
      cy.visit('https://myanimelist.net/animelist/aladin0072?status=2');
      cy.contains('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song').should('exist')


  
    });
  });