// this is a user journey test
// it will test if a user can add a trvel to their favorites

describe('User can add a travel to their favorites', () => {
  it('User can add a travel to their favorites', () => {
    // testing behavior
    cy.visit('http://localhost:3000')

    cy.get('#arrival-location-search-input')
      .type('Alabama')
      .type('{downarrow}')
      .type('{enter}')

    cy.get('#search-button').click()

    cy.get('#cardResult-00').click()

    cy.get('#add-to-favorites-button').click()

    cy.url().should('include', '/results/detailedTravel')

    cy.get(localStorage.getItem('favoriteTravels')).should('exist')

    cy.get(localStorage.getItem('favoriteTravels').match('Alabama')).should(
      'exist'
    )
  })
})
