// this is a user journey test
// it will test if a user can add a trvel to their favorites and then remove it

describe('User can add and remove a travel from their favorites', () => {
  it('User can add and remove a travel from their favorites', () => {
    // testing behavior
    cy.visit('http://localhost:3000')

    cy.get('#arrival-location-search-input')
      .type('Alabama')
      .type('{downarrow}')
      .type('{enter}')

    cy.get('#search-button').click()

    cy.url().should('include', '/results')

    cy.get('#cardResult-00').click()

    cy.get('#toggleFavorite').click()

    cy.url().should('include', '/results/detailedTravel')

    cy.visit('http://localhost:3000/favorites')

    cy.get('#cardFav-00').should('exist')

    // then we can test if the user can remove a travel from their favorites

    cy.get('#cardFav-00').click()

    cy.get('#toggleFavorite').click()

    cy.url().should('include', '/results/detailedTravel')

    cy.visit('http://localhost:3000/favorites')

    cy.get('#cardFav-00').should('not.exist')
  })
})
