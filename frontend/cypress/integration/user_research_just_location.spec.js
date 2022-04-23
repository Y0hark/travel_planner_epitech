describe("User makes a research just by location", () => {
	it("User makes a research just by location", () => {
		cy.visit("http://localhost:3000");
		cy.get("#departure-location-search-input").type("Paris");
		cy.get("#arrival-location-search-input").type("Lyon");
		cy.get("#departure-date-input").type("2020-01-01");
		cy.get("#return-date-input").type("2020-01-02");
		cy.get("#search-button").click();
		cy.request("http://localhost:3000/api/v1/flights/search?departure_location=Paris&arrival_location=Lyon&departure_date=2020-01-01&return_date=2020-01-02").then(response => {
			expect(response.status).to.eq(200);
			expect(response.body.length).to.be.greaterThan(0);
		});
		cy.url().should("include", "/results");
	});
});