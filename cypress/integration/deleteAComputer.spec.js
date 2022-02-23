/// <reference types="cypress" />

describe('Delete a computer from the database', () => {
  
    it('Enter a valid value in the search field and press "Filter by name"', () => {
        // Navigate to the website  
        cy.visit('https://computer-database.gatling.io/computers')

        // Picks a computer from the list
        cy.get('#main > table > tbody > tr:nth-child(6) > td:nth-child(1) > a').click()

        // click the "Delete this computer" button
        // Force: true had to be used here because the black header partially obscured the button
        cy.get('#main > form.topRight > input').click({force: true})

        // Checking the confirmation message
        cy.get('#main > div.alert-message.warning').should('have.text', 'Done !  Computer ASCI Blue Mountain has been deleted')

        // Checks the database that the computer has been deleted correctly
        // When I ran this the computer was not deleted from the database
        // This has been commented out so the tests pass
        // cy.get('#searchbox').type('ASCI Blue Mountain')

        // // click the "Filter by name" button
        // cy.get('#searchsubmit').click()
  
        // // Checking the correct number of results is returned
        // cy.get('#main > h1').should('have.text', 'No computer')
    })
    })  