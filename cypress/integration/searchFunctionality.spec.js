/// <reference types="cypress" />

describe('Search functionality tests', () => {
  
    it('Enter a valid value in the search field and press "Filter by name"', () => {
      // Navigate to the website  
      cy.visit('https://computer-database.gatling.io/computers')

      // type ACE in the search box
      cy.get('#searchbox').type('ACE')

      // click the "Filter by name" button
      cy.get('#searchsubmit').click()

      // Checking the correct number of results is returned
      cy.get('#main > h1').should('have.text', '6 computers found')
    })

    it('Enter an invalid value in the search field and press "Filter by name"', () => {

      // type sdfsdfsfsdfsddfss in the search box
      cy.get('#searchbox').type('sdfsdfsfsdfsddfss')

      // click the "Filter by name" button
      cy.get('#searchsubmit').click()

      // Checking the correct number of results is returned
      cy.get('#main > h1').should('have.text', 'No computer')
    })
    })  