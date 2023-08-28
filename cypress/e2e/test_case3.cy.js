describe('Avaliar mangá', () => {
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

      cy.get("#topSearchValue").select('Manga');
    //   cy.contains('Manga').select()
    //   cy.get("#topSearchButon").click();
      cy.get("#topSearchText").type('Shingeki no Kyojin');
      cy.get("#topSearchButon").click();
    //   cy.contains('Shingeki no Kyojin').click();
      cy.get(':nth-child(2) > :nth-child(2) > .hoverinfo_trigger > strong').click();
      cy.get('.user-status-block > #myinfo_score').select('(10) Masterpiece');
    //   cy.get('.header-list > .header-menu-dropdown > ul > :nth-child(2) > a')

      cy.visit('https://myanimelist.net/mangalist/aladin0072');
      cy.contains('Shingeki no Kyojin');

      
    //   cy.get('.header-list > .header-menu-dropdown > ul > :nth-child(2) > a')('Manga List')
    //   cy.get('#header-menu > :nth-child(3)').select('Manga List')
  
    });
  });