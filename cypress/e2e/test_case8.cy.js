

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
      cy.visit('https://myanimelist.net/users.php');
      cy.get('#q').type('teste_myanmlst')
      cy.contains('teste_myanmlst').click();

      cy.get('#request > i').click()
      cy.get('#dialog > tbody > tr > td > form > div:nth-child(4) > input:nth-child(1)').click()
      cy.contains('You have successfully sent teste_myanmlst a friend request.').should('exist')
 
    });
  });