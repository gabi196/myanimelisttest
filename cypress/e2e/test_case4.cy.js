describe('Filtrar reviews por Recommend', () => {
    it('Filtrar reviews por Recommend', () => {
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
      
      cy.visit('https://myanimelist.net/reviews.php?t=anime')
      cy.get('.btn-show-filter').click()
      cy.get('[data-id="1"] > .fa-regular').click()
      cy.get('.fl-r > .fa-solid').click()
      cy.contains('Mixed Feelings').should('no.exist')
      cy.contains('Not Recommended').should('no.exist')
      cy.contains('Funny').should('no.exist')
      cy.contains('Informative').should('no.exist')
      cy.contains('Creative').should('no.exist')
      cy.contains('Well-written').should('no.exist')
    //   cy.get

    
    

    });
  });

  