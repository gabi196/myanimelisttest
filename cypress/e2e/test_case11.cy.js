describe('Teste MAL Envolvendo Adicionar Manga', () => {
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

		cy.get("#topSearchText").type("Skip to Loafer");
		cy.get("#topSearchButon").click();
		cy.get("#\\#revAreaMangaHover118289").click();
		cy.wait(500);

		cy.get(".user-status-block").children().then(($elem) => {
			if (!($elem.text().includes("Add to List"))) {
				cy.get(":nth-child(2) > small > a").click();
				cy.get("[style=\"text-align: center;\"] > #delete-form > .inputButton").click();
			}
		});

		cy.get(".link-mal-logo").click();

		cy.wait(3000);
	});
	it('Caso de teste CT11', () => {
		Cypress.on('uncaught:exception', (err) => {
			console.log('Cypress detected uncaught exception: ', err);
			return false;
		})
		cy.get(".header-profile-link").click();
		cy.get(".link-bg > .header-menu-dropdown > ul > :nth-child(1) > a").click();

		const myAnimeListMangaDays = cy.get(":nth-child(3) > .stats > .stat-score > .al").then(($value) => {
			return $value.text();
		});

		cy.get("#topSearchText").type("Skip to Loafer");
		cy.get("#topSearchButon").click();
		cy.get("#\\#revAreaMangaHover118289").click();
		cy.wait(500);

		cy.get(".btn-user-status-add-list").click();
		cy.wait(500);

		cy.get("#myinfo_volumes").type("9")
		cy.get("#myinfo_chapters").type("53")

		cy.wait(1500);

		cy.get(".header-profile-link").click();
		cy.get(".link-bg > .header-menu-dropdown > ul > :nth-child(1) > a").click();

		cy.get(":nth-child(3) > .stats > .stat-score > .al").then(($value) => {
			myAnimeListMangaDays.then((value) => {
				expect(value).to.not.equal($value.text())
			});
		});
	})
})