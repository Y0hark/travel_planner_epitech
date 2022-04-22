describe("Creating an account", function() {
	it ("should create an account", function() {
		cy.visit("/");

		cy.get("#create-account").click();
		cy.get("#first-name").type("John");
		cy.get("#last-name").type("Doe");
		cy.get("#email").type("john_doe@gmail.com");
		cy.get("#password").type("123456");
		cy.get("#confirm-password").type("123456");
		cy.get("#create-account-button").click();

		cy.url().should("include", "/login");
	});
});