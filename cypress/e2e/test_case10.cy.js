describe('Teste MAL Envolvendo Adicionar Pessoas', () => {
	before("Visitar site, fazer login e limpar ambiente", () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.visit('https://myanimelist.net');
		cy.get(".header-menu-login > #malLogin").click();
		cy.get("#loginUserName").type("teste_myanmlst");
		cy.get("#login-password").type("@87654321");
		cy.get(".pt16.ac > .inputButton").click();

		cy.wait(2000);

		cy.get("#topSearchText").type("Yakushimaru, Etsuko");
		cy.get("#topSearchButon").click();
		cy.get(":nth-child(12) > .pb24 > .btn-search-more").click();
		cy.wait(500);

		cy.get("#profileRows").children().then(($elem) => {
			if ($elem.text().includes("Remove from Favorites")) {
				cy.get("#favOutput").click();
			}
		})

		cy.get(".link-mal-logo").click();
		cy.wait(3000);
	});
	it('Caso de teste CT10', () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.get("#topSearchText").type("Yakushimaru, Etsuko");
		cy.get("#topSearchButon").click();
		cy.get(":nth-child(12) > .pb24 > .btn-search-more").click();
		cy.wait(500);

		cy.get("#favOutput").click();
		cy.wait(2000);

		cy.get(".header-profile-link").click();
		cy.get(".link-bg > .header-menu-dropdown > ul > :nth-child(1) > a").click();

		cy.get("[title=\"Yakushimaru, Etsuko\"] > .link > .image").click();
	})
})