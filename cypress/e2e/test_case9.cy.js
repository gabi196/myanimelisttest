describe('Teste MAL Envolvendo Adicionar Anime', () => {
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

		cy.get("#topSearchText").type("Code Geass: Hangyaku no Lelouch");
		cy.get("#topSearchButon").click();
		cy.get("#\\#revAreaAnimeHover1575").click();
		cy.wait(500);

		cy.get(".user-status-block").children().then(($elem) => {
			if (!($elem.text().includes("Add to List"))) {
				cy.get("#addtolist > table > tbody > :nth-child(4) > :nth-child(2) > small > a").click();
				cy.get("[style=\"text-align: center;\"] > #delete-form > .inputButton").click();
			}
		});

		cy.get(".link-mal-logo").click();

		cy.wait(3000);
	});
	it('Caso de teste CT09', () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.get(".header-profile-link").click();
		cy.get(".link-bg > .header-menu-dropdown > ul > :nth-child(1) > a").click();

		const myAnimeListCompleted = cy.get(":nth-child(2) > .stats > .mt12 > .stats-status > :nth-child(2) > .fl-r").then(($value) => {
			return $value.text();
		});

		cy.get("#topSearchText").type("Code Geass: Hangyaku no Lelouch");
		cy.get("#topSearchButon").click();
		cy.get("#\\#revAreaAnimeHover1575").click();
		cy.wait(500);
		cy.get(".btn-user-status-add-list").click();
		cy.wait(500);
		cy.get("#myinfo_status").should('be.visible').select("Completed");

		cy.get(".header-profile-link").click();
		cy.get(".link-bg > .header-menu-dropdown > ul > :nth-child(1) > a").click();

		cy.get(":nth-child(2) > .stats > .mt12 > .stats-status > :nth-child(2) > .fl-r").then(($value) => {
			myAnimeListCompleted.then((value) => expect(value).to.not.equal($value.text()));
		});
	})
})