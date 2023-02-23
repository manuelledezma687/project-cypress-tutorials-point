import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given('the user accesses the website', () => {
    cy.visit('/')
})

And('The user accesses to About us section', () => {
    cy.scrollTo("bottom")
    cy.get(".col-lg-12 > .nav > :nth-child(1) > .nav-link").click()
})

Then('The user views the web page correctly', () => {
    cy.get(".navbar-brand > .light-mode-item").should("be.visible")
})

Then('The user views about us url correctly', () => {
    cy.url().should("eq", "https://tutorialspoint.com/about/index.htm")
})

Then('The user can see via console the list of all inputs', () => {
    cy.get('input').each((input, i) => {
        cy.log(`Input type text number:${i = i + 1}: ${input.val().toString()}`)
    })
    cy.get('input').should('be.visible')
})

Then('The user can see via console the list of all buttons', () => {
    cy.get('button').each((input, i) => {
        cy.log(`Button number: ${i = i + 1}: ${input.val().toString()}`)
    })
    cy.get('button').should('be.visible')
})

Then('The user can see via console the list of all URLs', () => {
    cy.get('a[href]').each((input, i) => {
        cy.log(`Url #: ${i = i + 1}: ${input.val().toString()}`)
    })
    cy.get('a[href]').should('be.visible')
})

