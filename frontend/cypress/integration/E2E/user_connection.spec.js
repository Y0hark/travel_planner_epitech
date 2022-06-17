// WARNING: This test can't be run as the backend currently does not support eiter login or registration
// WARNING: Connection is not a required feature of our application

// this is a user journey test
// it will test if a registered user can log in to our website
describe('User can log in', () => {
  it('User can log in', () => {
    // testing behavior
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/login')
    cy.get('#login-form').within(() => {
      cy.get('#email-input').type('antoine-gasoline@gmail.com')
      cy.get('#password-input').type('azerty')
      cy.get('#submit-button').click()
    })
    cy.url().should('include', '/')
  })
})
