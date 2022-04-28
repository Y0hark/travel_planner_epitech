// this test is a user journey test
// it will test how the website behaves when a user navigates through the website
describe('User return to home', () => {
	it('User from home return to home', () => {
	cy.visit('http://localhost:3000');
	cy.get('#home-link').click();
	cy.url().should('include', '/');
	});

	it('User from home go to favorites and return to home', () => {
	cy.visit('http://localhost:3000');
	cy.get('#favorites-link').click();
	cy.url().should('include', '/favorites');
	cy.get('#home-link').click();
	cy.url().should('include', '/');
	});
});