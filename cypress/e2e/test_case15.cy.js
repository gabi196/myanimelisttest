describe('Teste MAL Proxima Temporada', () => {
	before("Visitar site e pesquisar anime", () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.visit('https://myanimelist.net');

		cy.get("#topSearchText").type("Code Geass: Hangyaku no Lelouch");
		cy.get("#topSearchButon").click();
		cy.get("#\\#revAreaAnimeHover1575").click();
		cy.wait(500);
	});
	it('Caso de teste CT15', () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.get(":nth-child(4) > [width=\"100%\"] > a").click();
	})
})