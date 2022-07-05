// this is a user journey test
// it will test how the website behaves when a user makes a basic request
describe('User makes a research about where to drink', () => {
  it('User makes a research just by location', () => {
    // testing behavior
    cy.visit('http://localhost:3000')
    // cy.get("#departure-location-search-input").type("Paris");
    cy.get('#arrival-location-search-input').type('Marseille')

    cy.get('#drink-radio-button').check({ force: true })
    // cy.get("#departure-date-input").type("2020-01-01");
    // cy.get("#return-date-input").type("2020-01-02");
    cy.get('#search-button').click()
    // TODO Samuel GALIERE : change the URL to the backend one

    // testing API call
    // cy.request("http://localhost:3000/api/v1/flights/search?departure_location=Paris&arrival_location=Lyon&departure_date=2020-01-01&return_date=2020-01-02").then(response => {
    // 	expect(response.status).to.eq(200);
    // 	expect(response.body.length).to.be.greaterThan(0);
    // });
    cy.url().should('include', '/results')

    cy.get('#cardResult-00').should('exist')

    cy.get('#cardResult-00').click()

    cy.url().should('include', '/results/detailedTravel')
  })
})
