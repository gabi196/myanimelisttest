describe('Adição de colunas na lista de anime', () => {
    it('Adição de colunas na lista de anime', () => {
      // Visitar a página de login do MyAnimeList
      Cypress.on('uncaught:exception', (err) => {
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      })
      cy.visit('https://myanimelist.net/login.php?from=%2F&');
      
      cy.get('#loginUserName').type('aladin0072');
      cy.get('#login-password').type('zFWLBNe3DD2I');
      cy.get(".pt16.ac > .inputButton").click();
      cy.wait(3000);
      cy.visit('https://myanimelist.net/editprofile.php?go=listpreferences');
      cy.get('#content > div:nth-child(2) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1) > label:nth-child(9) > input[type=checkbox]').click()
      cy.get('#content > div:nth-child(2) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1) > label:nth-child(21) > input[type=checkbox]').click()
      cy.get('#content > div:nth-child(2) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1) > label:nth-child(13) > input[type=checkbox]').click()
      cy.get('#content > div:nth-child(2) > form > table > tbody > tr:nth-child(20) > td > input:nth-child(1)').click()
      cy.visit('https://myanimelist.net/animelist/aladin0072');
      cy.contains('Genres').should('exist')
      cy.contains('Days').should('exist')
      cy.contains('Rated').should('exist')

    });
  });