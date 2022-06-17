// this is a user journey test
// it will test if a user can check every part of his profile
describe("User can check his profile", () => {
	it("User can check his profile", () => {
		// testing behavior
		cy.visit("http://localhost:3000");
		cy.get("#profile-button").click();
		cy.url().should("include", "/profile");
		cy.get("#edit-profile-button").click();
		cy.get("#profile-name").should("have.value", "Antoine");
	});
});