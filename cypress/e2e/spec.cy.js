// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


describe('My First Test', () => {

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

})

describe('visit page', () => {

  it('visit page', () => {
    cy.visit('https://cashflow-game-sheet.herokuapp.com/cashflow-game-sheet/')

    cy.contains('Start New Game Sheet').click()

    cy.url().should('include', '/instantiate')

    cy.get('#profession').type('Librarian')

    //  Verify that the value has been updated
    cy.get('#profession').should('have.value', 'Librarian')

    cy.get('[data-cy="submit"]').click()
  })

})

