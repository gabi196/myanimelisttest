
describe('Criar Lista de Anime Personalizada', () => {
    it('deve adicionar os títulos dos animes à lista personalizada', () => {
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
 
      // Buscar e adicionar os animes à lista personalizada
      cy.get("#topSearchText").type('Fullmetal Alchemist: Brotherhood');
      cy.get("#topSearchButon").click();
      cy.contains('Fullmetal Alchemist: Brotherhood').click();
      cy.contains('Add to List').click();
  

      
      // Voltar para a página inicial
      cy.visit('https://myanimelist.net/');
      cy.get("#topSearchText").type('Kimetsu no Yaiba');
      cy.get("#topSearchButon").click();
      
      cy.contains('Kimetsu no Yaiba').click();
      cy.wait(500)
      cy.contains('Add to List').click();
  
      

      // Voltar para a página inicial
      cy.visit('https://myanimelist.net/');
  
      cy.get("#topSearchText").type('Shingeki no Kyojin');
      cy.get("#topSearchButon").click();

      cy.contains('Shingeki no Kyojin').click();  
      cy.wait(200)
      cy.contains('add to list').click();
  
      // Voltar para a página inicial
      cy.visit('https://myanimelist.net/');
  
      cy.get("#topSearchText").type('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song');
      cy.get("#topSearchButon").click();
      cy.contains('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song').click();
      cy.wait(200)
      cy.contains('Add to List').click();
  
      // Verificar se os animes foram adicionados à lista personalizada
      cy.visit('https://myanimelist.net/animelist/aladin0072');
      cy.contains('Fullmetal Alchemist: Brotherhood').should("exist");
      cy.contains('Kimetsu no Yaiba').should("exist");
      cy.contains('Shingeki no Kyojin').should("exist");
      cy.contains('Fate/stay night Movie: Heaven\'s Feel - III. Spring Song').should("exist");
    });
  });
  