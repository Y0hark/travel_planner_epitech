// WARNING: This test can't be run as the backend currently does not support eiter login or registration
// WARNING: Registration is not a required feature of our application

// this is a user journey test
// it will test if a newcomer can register to our website
describe('User can register', () => {
  it('User can register', () => {
    // testing behavior
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/login')
    cy.get('#register-button').click()
    cy.url().should('include', '/register')
    cy.get('#register-form').within(() => {
      cy.get('#first-name-input').type('Antoine')
      cy.get('#last-name-input').type('GASOLINE')
      cy.get('#email-input').type('antoine-gasoline@gmail.com')
      cy.get('#password-input').type('azerty')
      cy.get('#confirm-password-input').type('azerty')
      cy.get('#submit-button').click()
    })
    cy.url().should('include', '/login')
  })
})
