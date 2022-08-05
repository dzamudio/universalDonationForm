/// <reference types="cypress" />

describe('submit form-window', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })
    const firstName = 'John'
    const email = 'John@doe.com'
    const message = 'This is not John, though'
  it('can add new info', () => {
  

    cy.get('input[data-cy="firstName"]')
       .type(`${firstName}`)
    cy.get('[data-cy="email"]')
      .type(`${email}`, { force: true })
    cy.get('[data-cy="message"]').type(`${message}`, { force: true })
    
    cy.get('[data-cy="submit"]').click()
  })

  it('can reset info', () => {

    cy.get('[data-cy="firstName"]').type('aiud97@yahoo.com', { force: true })
    cy.get('[data-cy="email"]').type(`${email}`, { force: true })
    cy.get('[data-cy="message"]').type(`${message}`, { force: true })

    cy.get('[data-cy="reset"]').click()

    cy.get('[data-cy="firstName"]')
      .should('have.text', "")
    cy.get('[data-cy="email"]')
      .should('have.text', "")
    cy.get('[data-cy="message"]')
      .should('have.text', "")
  
  })

 
  // context('with a checked task', () => {
  //   beforeEach(() => {
  //     // We'll take the command we used above to check off an element
  //     // Since we want to perform multiple tests that start with checking
  //     // one element, we put it in the beforeEach hook
  //     // so that it runs at the start of every test.
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()
  //   })

  //   it('can filter for uncompleted tasks', () => {
  //     // We'll click on the "active" button in order to
  //     // display only incomplete items
  //     cy.contains('Active').click()

  //     // After filtering, we can assert that there is only the one
  //     // incomplete item in the list.
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Walk the dog')

  //     // For good measure, let's also assert that the task we checked off
  //     // does not exist on the page.
  //     cy.contains('Pay electric bill').should('not.exist')
  //   })

  //   it('can filter for completed tasks', () => {
  //     // We can perform similar steps as the test above to ensure
  //     // that only completed tasks are shown
  //     cy.contains('Completed').click()

  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Pay electric bill')

  //     cy.contains('Walk the dog').should('not.exist')
  //   })

  //   it('can delete all completed tasks', () => {
  //     // First, let's click the "Clear completed" button
  //     // `contains` is actually serving two purposes here.
  //     // First, it's ensuring that the button exists within the dom.
  //     // This button only appears when at least one task is checked
  //     // so this command is implicitly verifying that it does exist.
  //     // Second, it selects the button so we can click it.
  //     cy.contains('Clear completed').click()

  //     // Then we can make sure that there is only one element
  //     // in the list and our element does not exist
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .should('not.have.text', 'Pay electric bill')

  //     // Finally, make sure that the clear button no longer exists.
  //     cy.contains('Clear completed').should('not.exist')
  //   })
  // })
})
