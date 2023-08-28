describe('Teste MAL Acessar Site Externo', () => {
	before("Visitar site e pesquisar anime", () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.visit('https://myanimelist.net');

		cy.get("#topSearchText").type("Watashi no Shiawase na Kekkon");
		cy.get("#topSearchButon").click();
		cy.get("#\\#revAreaAnimeHover51552").click();
		cy.wait(500);
	});
	it("Caso de teste CT16", () => {
		cy.get(".js-more-links").click();
		cy.wait(200);
		cy.get("[href=\"https://en.wikipedia.org/wiki/My_Happy_Marriage#Anime\"] > .caption").should("be.visible").click();
	});
})
